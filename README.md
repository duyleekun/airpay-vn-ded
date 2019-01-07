# airpay-vn-ded
Airpay got reversed. This is a product of GARENA therefore, PROTOBUF was expected

## com.beeasy.toppay_2018-03-23

Inside the `com.beeasy.toppay_2018-03-23`, you will have a working proxy server to learn about Airpay protocol.

To use this proxy server, you have to modify the code in extracted `smali` to call your IP instead of their final IP (125.212.198.132:10080).

They had some checksum/hashing bytes in the request payload (not included in the shared code)

### Packet structure

#### TCP Payload Structure

```
Int32LE<REQUEST_SIZE>|Int16BE<REQUEST_CODE>|Buffer<PROTOBUF_PAYLOAD>
```

####  Request Code reference

```js
module.exports = {
  12547: "CMD_ACCOUNT_DELETE",
  12548: "CMD_ACCOUNT_LOCK",
  12549: "CMD_ACCOUNT_UNLOCK",
  12697: "CMD_AIRPAY_COUPON_DELETE",
  12696: "CMD_AIRPAY_COUPON_LIST_GET",
  12649: "CMD_BANK_ACCOUNT_ADD",
  12643: "CMD_BANK_ACCOUNT_BIND",
  12646: "CMD_BANK_ACCOUNT_CHECK",
  12650: "CMD_BANK_ACCOUNT_DELETE",
  12648: "CMD_BANK_ACCOUNT_INIT",
  12642: "CMD_BANK_ACCOUNT_LIST_GET",
  12652: "CMD_BANK_ACCOUNT_PAYMENT_OTP_VERIFIED",
  12653: "CMD_BANK_ACCOUNT_REGISTER_ONLINE_PAYMENT",
  12645: "CMD_BANK_ACCOUNT_SET_DEFAULT",
  12651: "CMD_BANK_ACCOUNT_SET_INFO",
  12644: "CMD_BANK_ACCOUNT_UNBIND",
  12647: "CMD_BANK_ACCOUNT_UNLOCK",
  12736: "CMD_BARCODE_SCAN",
  12740: "CMD_BILL_ACCOUNT_ID_LIST_GET",
  12741: "CMD_BILL_ACCOUNT_LIST_GET",
  12742: "CMD_BILL_ACCOUNT_LIST_SET",
  12739: "CMD_BILL_ACCOUNT_PAYMENT_INIT",
  12738: "CMD_BILL_PAYMENT_HISTORY_GET",
  12737: "CMD_BILL_PAYMENT_INIT",
  12666: "CMD_CASH_CURRENT_GET",
  12667: "CMD_CASH_HISTORY_GET",
  12641: "CMD_CHANNEL_LIST_GET",
  12721: "CMD_CONTACT_BOOK_SET",
  12708: "CMD_DELEGATE_ACTION",
  12578: "CMD_DEVICE_GET_LIST",
  12576: "CMD_DEVICE_REGISTER",
  12577: "CMD_DEVICE_REMOVE",
  12579: "CMD_DEVICE_SET_INFO",
  12580: "CMD_DEVICE_SET_NOTIFY_KEY",
  13122: "CMD_DONOR_DELETE_INFO",
  13121: "CMD_DONOR_GET_INFO",
  13120: "CMD_DONOR_SET_INFO",
  12629: "CMD_EMAIL_REMOVE",
  12627: "CMD_EMAIL_SET",
  12628: "CMD_EMAIL_VERIFY_SEND",
  12689: "CMD_EVENT_CURRENT_GET",
  12705: "CMD_FEEDBACK",
  12723: "CMD_GARENA_USER_INFO_GET",
  12630: "CMD_GEOGRAPHIC_GET",
  13570: "CMD_GIFT_CREATE",
  13568: "CMD_GIFT_INIT",
  13569: "CMD_GIFT_LIST_GET",
  12690: "CMD_GROUP_ID_LIST_GET",
  12691: "CMD_GROUP_LIST_GET",
  12564: "CMD_HEARTBEAT",
  13105: "CMD_LOAN_LIST_GET",
  13106: "CMD_LOAN_OBLIGATION_LIST_GET",
  13107: "CMD_LOAN_ORDER_CONFIG_GET",
  13109: "CMD_LOAN_ORDER_EXECUTE",
  13108: "CMD_LOAN_ORDER_INIT",
  13104: "CMD_LOAN_USER_INFO_GET",
  12754: "CMD_LOCATION_LIST_GET",
  12758: "CMD_LOCATION_SET",
  12561: "CMD_LOGIN",
  12562: "CMD_LOGOUT",
  13585: "CMD_LUCKY_DRAW_EXECUTE",
  13584: "CMD_LUCKY_DRAW_INIT",
  13586: "CMD_LUCKY_DRAW_SESSION_LIST_GET",
  12640: "CMD_MENU_LIST_GET",
  13824: "CMD_MERCHANT_ACCESS_TOKEN_GET",
  12610: "CMD_MESSAGE_GET_LIST",
  12609: "CMD_MESSAGE_NOTIFY",
  12611: "CMD_MESSAGE_PROCESS",
  12550: "CMD_MOBILE_CHANGE",
  12551: "CMD_MOBILE_CHANGE_INIT",
  12755: "CMD_NEAREST_LOCATION_LIST_GET",
  13200: "CMD_NOTIFICATION_LIST_GET",
  13201: "CMD_NOTIFICATION_LIST_SET",
  12707: "CMD_NOTIFY_ACTION",
  12592: "CMD_OTP_SEND",
  12593: "CMD_OTP_VERIFY",
  13840: "CMD_PARTNER_ACCOUNT_LINK",
  13841: "CMD_PARTNER_ACCOUNT_PAYMENT_ACCESS_AUTHORISATION",
  12662: "CMD_PAYMENT_CHANNEL_LIST_GET",
  12672: "CMD_PAYMENT_CHANNEL_TXN_CANCEL",
  12665: "CMD_PAYMENT_CHANNEL_TXN_DETAILS_GET",
  12673: "CMD_PAYMENT_ORDER_ACTION",
  12659: "CMD_PAYMENT_ORDER_CANCEL",
  12663: "CMD_PAYMENT_ORDER_DELETE",
  12661: "CMD_PAYMENT_ORDER_EXECUTE",
  12657: "CMD_PAYMENT_ORDER_HISTORY_GET",
  12676: "CMD_PAYMENT_ORDER_ID_LIST_GET",
  12660: "CMD_PAYMENT_ORDER_INIT",
  12757: "CMD_PAYMENT_ORDER_INIT_CARD_CHARGING",
  12677: "CMD_PAYMENT_ORDER_LABEL_LIST_GET",
  12674: "CMD_PAYMENT_ORDER_LIST_GET",
  12658: "CMD_PAYMENT_ORDER_PENDING_GET",
  12664: "CMD_PAYMENT_ORDER_PRECHECK",
  12675: "CMD_PAYMENT_ORDER_RESERVE",
  12595: "CMD_PAYMENT_PASSWORD_CHANGE",
  12597: "CMD_PAYMENT_PASSWORD_RESET",
  12598: "CMD_PAYMENT_PASSWORD_RESET_INIT",
  12594: "CMD_PAYMENT_PASSWORD_SET",
  12596: "CMD_PAYMENT_PASSWORD_VERIFY",
  12599: "CMD_PAYMENT_PASSWORD_WEB_INIT",
  13185: "CMD_PRECHECK_PAYMENT_ACCOUNT",
  13184: "CMD_PRECHECK_PAYMENT_ITEM",
  13312: "CMD_PROXY_VE_XE_RE",
  12624: "CMD_QR_CODE_SCAN",
  12753: "CMD_REGION_LIST_GET",
  12546: "CMD_REGISTER",
  12545: "CMD_REGISTER_PREPARE",
  13169: "CMD_REMITTANCE_BANK_ACCOUNT_ADD",
  13170: "CMD_REMITTANCE_BANK_ACCOUNT_DELETE",
  13168: "CMD_REMITTANCE_BANK_ACCOUNT_LIST_GET",
  13171: "CMD_REMITTANCE_BANK_ACCOUNT_QUERY",
  12706: "CMD_REPORT_DATA",
  12688: "CMD_RESOURCE_LIST_GET",
  12563: "CMD_SESSION_KICK",
  12625: "CMD_SETTING_GET",
  12626: "CMD_SETTING_SET",
  13060: "CMD_SHOW_FORM_LIST_GET",
  13062: "CMD_SHOW_FORM_SESSION_LIST_GET",
  13058: "CMD_SHOW_ID_LIST_GET",
  13059: "CMD_SHOW_LIST_GET",
  13057: "CMD_SHOW_LOCATION_LIST_GET",
  13061: "CMD_SHOW_SESSION_LIST_GET",
  13080: "CMD_SHOW_TICKET_CANCEL",
  13082: "CMD_SHOW_TICKET_CANCEL_SEAT_LIST",
  13081: "CMD_SHOW_TICKET_CANCEL_SEAT_TYPE",
  13073: "CMD_SHOW_TICKET_HISTORY_GET",
  13075: "CMD_SHOW_TICKET_INIT",
  13078: "CMD_SHOW_TICKET_INIT_RESERVED_1",
  13079: "CMD_SHOW_TICKET_INIT_RESERVED_2",
  13077: "CMD_SHOW_TICKET_INIT_SEAT_LIST",
  13076: "CMD_SHOW_TICKET_INIT_SEAT_TYPE",
  13074: "CMD_SHOW_TICKET_LIST_GET",
  12685: "CMD_STOCK_LIST_COUNT",
  12686: "CMD_STOCK_LIST_GET",
  12687: "CMD_STOCK_LIST_SET",
  12756: "CMD_TOPUP_BY_CHARGING",
  13157: "CMD_TRANSPORT_FLIGHT_FARE_RULES_GET",
  13140: "CMD_TRANSPORT_PURCHASE_INFO_GET",
  13136: "CMD_TRANSPORT_SEARCH_CONFIG_GET",
  13139: "CMD_TRANSPORT_SEARCH_DETAIL_GET",
  859: "CMD_TRANSPORT_SEARCH_LOG_GET",
  13137: "CMD_TRANSPORT_SEARCH_PORTS",
  13146: "CMD_TRANSPORT_SEARCH_PORTS_CHECK_CODE",
  13138: "CMD_TRANSPORT_SEARCH_TRIPS",
  13156: "CMD_TRANSPORT_SSR_GET",
  13141: "CMD_TRANSPORT_TICKET_LIST_GET",
  13148: "CMD_TRANSPORT_TICKET_LIST_GET_V2",
  13144: "CMD_TRANSPORT_TICKET_PASSENGER_INIT",
  13145: "CMD_TRANSPORT_TICKET_PASSENGER_SET",
  13142: "CMD_TRANSPORT_TICKET_SEATS_INIT",
  13143: "CMD_TRANSPORT_TICKET_SEATS_SET",
  13153: "CMD_TRANSPORT_TRAVELLER_ADD",
  13155: "CMD_TRANSPORT_TRAVELLER_DELETE",
  13152: "CMD_TRANSPORT_TRAVELLER_LIST_GET",
  13154: "CMD_TRANSPORT_TRAVELLER_SET",
  12722: "CMD_USER_INFO_GET",
  13218: "CMD_VIRTUAL_CARD_ADD",
  13221: "CMD_VIRTUAL_CARD_DEELEVATE",
  13220: "CMD_VIRTUAL_CARD_ELEVATE",
  13222: "CMD_VIRTUAL_CARD_FREEZE",
  13216: "CMD_VIRTUAL_CARD_LIST_GET",
  13224: "CMD_VIRTUAL_CARD_SECURE_CODE_RESET",
  13219: "CMD_VIRTUAL_CARD_SET",
  13217: "CMD_VIRTUAL_CARD_TXN_LIST_GET",
  13223: "CMD_VIRTUAL_CARD_UNFREEZE",
  8451: "CMD_ACCOUNT_DELETE",
  8452: "CMD_ACCOUNT_LOCK",
  8453: "CMD_ACCOUNT_UNLOCK",
  8601: "CMD_AIRPAY_COUPON_DELETE",
  8600: "CMD_AIRPAY_COUPON_LIST_GET",
  8553: "CMD_BANK_ACCOUNT_ADD",
  8547: "CMD_BANK_ACCOUNT_BIND",
  8550: "CMD_BANK_ACCOUNT_CHECK",
  8554: "CMD_BANK_ACCOUNT_DELETE",
  8552: "CMD_BANK_ACCOUNT_INIT",
  8546: "CMD_BANK_ACCOUNT_LIST_GET",
  8556: "CMD_BANK_ACCOUNT_PAYMENT_OTP_VERIFIED",
  8557: "CMD_BANK_ACCOUNT_REGISTER_ONLINE_PAYMENT",
  8549: "CMD_BANK_ACCOUNT_SET_DEFAULT",
  8555: "CMD_BANK_ACCOUNT_SET_INFO",
  8548: "CMD_BANK_ACCOUNT_UNBIND",
  8551: "CMD_BANK_ACCOUNT_UNLOCK",
  8640: "CMD_BARCODE_SCAN",
  8644: "CMD_BILL_ACCOUNT_ID_LIST_GET",
  8645: "CMD_BILL_ACCOUNT_LIST_GET",
  8646: "CMD_BILL_ACCOUNT_LIST_SET",
  8643: "CMD_BILL_ACCOUNT_PAYMENT_INIT",
  8642: "CMD_BILL_PAYMENT_HISTORY_GET",
  8641: "CMD_BILL_PAYMENT_INIT",
  8570: "CMD_CASH_CURRENT_GET",
  8571: "CMD_CASH_HISTORY_GET",
  8545: "CMD_CHANNEL_LIST_GET",
  8625: "CMD_CONTACT_BOOK_SET",
  8612: "CMD_DELEGATE_ACTION",
  8482: "CMD_DEVICE_GET_LIST",
  8480: "CMD_DEVICE_REGISTER",
  8481: "CMD_DEVICE_REMOVE",
  8483: "CMD_DEVICE_SET_INFO",
  8484: "CMD_DEVICE_SET_NOTIFY_KEY",
  9026: "CMD_DONOR_DELETE_INFO",
  9025: "CMD_DONOR_GET_INFO",
  9024: "CMD_DONOR_SET_INFO",
  8533: "CMD_EMAIL_REMOVE",
  8531: "CMD_EMAIL_SET",
  8532: "CMD_EMAIL_VERIFY_SEND",
  8593: "CMD_EVENT_CURRENT_GET",
  8609: "CMD_FEEDBACK",
  8627: "CMD_GARENA_USER_INFO_GET",
  8534: "CMD_GEOGRAPHIC_GET",
  9474: "CMD_GIFT_CREATE",
  9472: "CMD_GIFT_INIT",
  9473: "CMD_GIFT_LIST_GET",
  8594: "CMD_GROUP_ID_LIST_GET",
  8595: "CMD_GROUP_LIST_GET",
  8468: "CMD_HEARTBEAT",
  9009: "CMD_LOAN_LIST_GET",
  9010: "CMD_LOAN_OBLIGATION_LIST_GET",
  9011: "CMD_LOAN_ORDER_CONFIG_GET",
  9013: "CMD_LOAN_ORDER_EXECUTE",
  9012: "CMD_LOAN_ORDER_INIT",
  9008: "CMD_LOAN_USER_INFO_GET",
  8658: "CMD_LOCATION_LIST_GET",
  8662: "CMD_LOCATION_SET",
  8465: "CMD_LOGIN",
  8466: "CMD_LOGOUT",
  9489: "CMD_LUCKY_DRAW_EXECUTE",
  9488: "CMD_LUCKY_DRAW_INIT",
  9490: "CMD_LUCKY_DRAW_SESSION_LIST_GET",
  8544: "CMD_MENU_LIST_GET",
  9728: "CMD_MERCHANT_ACCESS_TOKEN_GET",
  8514: "CMD_MESSAGE_GET_LIST",
  8513: "CMD_MESSAGE_NOTIFY",
  8515: "CMD_MESSAGE_PROCESS",
  8454: "CMD_MOBILE_CHANGE",
  8455: "CMD_MOBILE_CHANGE_INIT",
  8659: "CMD_NEAREST_LOCATION_LIST_GET",
  9104: "CMD_NOTIFICATION_LIST_GET",
  9105: "CMD_NOTIFICATION_LIST_SET",
  8611: "CMD_NOTIFY_ACTION",
  8496: "CMD_OTP_SEND",
  8497: "CMD_OTP_VERIFY",
  9744: "CMD_PARTNER_ACCOUNT_LINK",
  9745: "CMD_PARTNER_ACCOUNT_PAYMENT_ACCESS_AUTHORISATION",
  8566: "CMD_PAYMENT_CHANNEL_LIST_GET",
  8576: "CMD_PAYMENT_CHANNEL_TXN_CANCEL",
  8569: "CMD_PAYMENT_CHANNEL_TXN_DETAILS_GET",
  8577: "CMD_PAYMENT_ORDER_ACTION",
  8563: "CMD_PAYMENT_ORDER_CANCEL",
  8567: "CMD_PAYMENT_ORDER_DELETE",
  8565: "CMD_PAYMENT_ORDER_EXECUTE",
  8561: "CMD_PAYMENT_ORDER_HISTORY_GET",
  8580: "CMD_PAYMENT_ORDER_ID_LIST_GET",
  8564: "CMD_PAYMENT_ORDER_INIT",
  8661: "CMD_PAYMENT_ORDER_INIT_CARD_CHARGING",
  8581: "CMD_PAYMENT_ORDER_LABEL_LIST_GET",
  8578: "CMD_PAYMENT_ORDER_LIST_GET",
  8562: "CMD_PAYMENT_ORDER_PENDING_GET",
  8568: "CMD_PAYMENT_ORDER_PRECHECK",
  8579: "CMD_PAYMENT_ORDER_RESERVE",
  8499: "CMD_PAYMENT_PASSWORD_CHANGE",
  8501: "CMD_PAYMENT_PASSWORD_RESET",
  8502: "CMD_PAYMENT_PASSWORD_RESET_INIT",
  8498: "CMD_PAYMENT_PASSWORD_SET",
  8500: "CMD_PAYMENT_PASSWORD_VERIFY",
  8503: "CMD_PAYMENT_PASSWORD_WEB_INIT",
  9089: "CMD_PRECHECK_PAYMENT_ACCOUNT",
  9088: "CMD_PRECHECK_PAYMENT_ITEM",
  9216: "CMD_PROXY_VE_XE_RE",
  8528: "CMD_QR_CODE_SCAN",
  8657: "CMD_REGION_LIST_GET",
  8450: "CMD_REGISTER",
  8449: "CMD_REGISTER_PREPARE",
  9073: "CMD_REMITTANCE_BANK_ACCOUNT_ADD",
  9074: "CMD_REMITTANCE_BANK_ACCOUNT_DELETE",
  9072: "CMD_REMITTANCE_BANK_ACCOUNT_LIST_GET",
  9075: "CMD_REMITTANCE_BANK_ACCOUNT_QUERY",
  8610: "CMD_REPORT_DATA",
  8592: "CMD_RESOURCE_LIST_GET",
  8467: "CMD_SESSION_KICK",
  8529: "CMD_SETTING_GET",
  8530: "CMD_SETTING_SET",
  8964: "CMD_SHOW_FORM_LIST_GET",
  8966: "CMD_SHOW_FORM_SESSION_LIST_GET",
  8962: "CMD_SHOW_ID_LIST_GET",
  8963: "CMD_SHOW_LIST_GET",
  8961: "CMD_SHOW_LOCATION_LIST_GET",
  8965: "CMD_SHOW_SESSION_LIST_GET",
  8984: "CMD_SHOW_TICKET_CANCEL",
  8986: "CMD_SHOW_TICKET_CANCEL_SEAT_LIST",
  8985: "CMD_SHOW_TICKET_CANCEL_SEAT_TYPE",
  8977: "CMD_SHOW_TICKET_HISTORY_GET",
  8979: "CMD_SHOW_TICKET_INIT",
  8982: "CMD_SHOW_TICKET_INIT_RESERVED_1",
  8983: "CMD_SHOW_TICKET_INIT_RESERVED_2",
  8981: "CMD_SHOW_TICKET_INIT_SEAT_LIST",
  8980: "CMD_SHOW_TICKET_INIT_SEAT_TYPE",
  8978: "CMD_SHOW_TICKET_LIST_GET",
  8589: "CMD_STOCK_LIST_COUNT",
  8590: "CMD_STOCK_LIST_GET",
  8591: "CMD_STOCK_LIST_SET",
  8660: "CMD_TOPUP_BY_CHARGING",
  9061: "CMD_TRANSPORT_FLIGHT_FARE_RULES_GET",
  9044: "CMD_TRANSPORT_PURCHASE_INFO_GET",
  9040: "CMD_TRANSPORT_SEARCH_CONFIG_GET",
  9043: "CMD_TRANSPORT_SEARCH_DETAIL_GET",
  859: "CMD_TRANSPORT_SEARCH_LOG_GET",
  9041: "CMD_TRANSPORT_SEARCH_PORTS",
  9050: "CMD_TRANSPORT_SEARCH_PORTS_CHECK_CODE",
  9042: "CMD_TRANSPORT_SEARCH_TRIPS",
  9060: "CMD_TRANSPORT_SSR_GET",
  9045: "CMD_TRANSPORT_TICKET_LIST_GET",
  9052: "CMD_TRANSPORT_TICKET_LIST_GET_V2",
  9048: "CMD_TRANSPORT_TICKET_PASSENGER_INIT",
  9049: "CMD_TRANSPORT_TICKET_PASSENGER_SET",
  9046: "CMD_TRANSPORT_TICKET_SEATS_INIT",
  9047: "CMD_TRANSPORT_TICKET_SEATS_SET",
  9057: "CMD_TRANSPORT_TRAVELLER_ADD",
  9059: "CMD_TRANSPORT_TRAVELLER_DELETE",
  9056: "CMD_TRANSPORT_TRAVELLER_LIST_GET",
  9058: "CMD_TRANSPORT_TRAVELLER_SET",
  8626: "CMD_USER_INFO_GET",
  9122: "CMD_VIRTUAL_CARD_ADD",
  9125: "CMD_VIRTUAL_CARD_DEELEVATE",
  9124: "CMD_VIRTUAL_CARD_ELEVATE",
  9126: "CMD_VIRTUAL_CARD_FREEZE",
  9120: "CMD_VIRTUAL_CARD_LIST_GET",
  9128: "CMD_VIRTUAL_CARD_SECURE_CODE_RESET",
  9123: "CMD_VIRTUAL_CARD_SET",
  9121: "CMD_VIRTUAL_CARD_TXN_LIST_GET",
  9127: "CMD_VIRTUAL_CARD_UNFREEZE"
}

```

#### Protobuf structure

Only LoginRequest message included

```protobuf

syntax = "proto3";
package airpay;


message PacketHeader {
  uint32 id = 1;
  uint32 result = 2;
  string message = 3;
}

message PaymentOrderInitRequest {

}

message LoginRequest {
    PacketHeader header = 1;
    uint64 uid = 2;
    string device_key = 3;
    uint32 device_type = 4;
    string login_password = 5;
    string notify_key = 6;
    uint32 version = 7;
    uint32 notify_type = 8;
}

message LoginReply {

}

```


# Want your app got DED?

Contact me and we can have a talk.
