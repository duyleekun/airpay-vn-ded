const tls = require('tls');
var net = require('net');
const fs = require('fs');
var hexdump = require('hexdump-nodejs');
var protobuf = require('protobufjs');
var commands  = require('./commands')

protobuf.load("airpay.proto", function(err, root) {


	const server = tls.createServer({
		key: fs.readFileSync('server.pem'),
		cert: fs.readFileSync('server-cert.pem'),
	}
	,function (socket) {
	  // socket.setEncoding('binary');
	  socket.setNoDelay(true);


	  var client = tls.connect({
		host: '125.212.198.132',
		port: '10080',
		rejectUnauthorized: false
	}, function() {
	  	console.log('Client connected');
	    let tmpBuffer = Buffer.alloc(0x7FFFFFFF)
	    // let tmpBuffer = Buffer.alloc(200)
	    let tmpBufferOffset = 0;


	    socket.on('data', function(data) {
	      tmpBufferOffset += data.copy(tmpBuffer, tmpBufferOffset, 0, data.length)

	      if (tmpBufferOffset > 6) {
	        let requestSize = tmpBuffer.readInt32LE(0) - 2;
	        let requestCode = tmpBuffer.readInt16BE(4);
	        console.log(requestSize, tmpBufferOffset)
	        if (tmpBufferOffset >= requestSize + 6) {

	            if (client != null) {
	              let writeBuffer = Buffer.alloc(requestSize+6)
	              tmpBuffer.copy(writeBuffer,0,0,requestSize+6)

	              let requestBuffer = Buffer.alloc(requestSize)
	              tmpBuffer.copy(requestBuffer,0,6,requestSize+6)

								console.log('>', commands[requestCode]);

								switch (commands[requestCode]) {
									case 'CMD_LOGIN':
									var message = root.lookupType("airpay.LoginRequest").decode(requestBuffer);
									console.log(message)
									break;
									case 'CMD_PAYMENT_ORDER_INIT':
									var message = root.lookupType("airpay.LoginRequest").decode(requestBuffer);
									console.log(message)
									break;

									default:
									console.log(hexdump(requestBuffer));
								}

								client.write(writeBuffer);
	            }
	            tmpBuffer.copy(tmpBuffer,0,tmpBufferOffset - 6 - requestSize ,tmpBufferOffset)
	            tmpBufferOffset = 0
	        }
	      }
	      if (client == null)
	        socket.end()
	    });
	  });

	  client.on('data', function(data) {
	  	// console.log('<');
	    // console.log(hexdump(data));
	  	socket.write(data);
	  });

	  client.on('close', function() {
	  	console.log('Client connection closed');
	    client = null;
	  });
	}).listen(10080);
});
