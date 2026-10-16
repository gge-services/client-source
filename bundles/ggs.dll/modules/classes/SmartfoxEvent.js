Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function SmartfoxEvent(__s3param0, __s3param1 = "", __s3param2 = null, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this;
    __s3local0.cmdId = __s3param1;
    __s3local0.params = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SmartfoxEvent, __s1param0);
  SmartfoxEvent.CONNECT_START = "connectStart";
  SmartfoxEvent.CONNECT_FAILED = "connectFailed";
  SmartfoxEvent.CONNECT_TIMEOUT = "connectTimeout";
  SmartfoxEvent.CONNECT_SUCCESS = "connectSuccess";
  SmartfoxEvent.CONNECTION_LOST = "connectionLost";
  SmartfoxEvent.JOINED_ROOM = "joinedRoom";
  SmartfoxEvent.GUEST_LOGIN_FAILED = "guestLoginFailed";
  SmartfoxEvent.GUEST_LOGIN_SUCCESS = "guestLoginSuccess";
  SmartfoxEvent.EXTENSION_RESPONSE = "extensionResponse";
  SmartfoxEvent.SOCKET_EMPTIED = "onSocketEmptied";
  return SmartfoxEvent;
}(createjs.Event);
exports.SmartfoxEvent = __s0local0;
