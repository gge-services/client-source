Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Base64() {
    throw new Error("Base64 class is static container only");
  }
  Base64.encode = function (__s5param0) {
    var __s5local0 = {};
    __s5local0.writeUTFBytes(__s5param0);
    return Base64.encodeByteArray(__s5local0);
  };
  Base64.encodeByteArray = function (__s7param0) {
    var __s7local0;
    var __s7local1 = "";
    var __s7local2 = new Array(4);
    for (__s7param0.position = 0; __s7param0.bytesAvailable > 0;) {
      __s7local0 = new Array();
      for (var __s7local3 = 0; __s7local3 < 3 && __s7param0.bytesAvailable > 0; __s7local3++) {
        __s7local0[__s7local3] = __s7param0.readUnsignedByte();
      }
      __s7local2[0] = (__s7local0[0] & 252) >> 2;
      __s7local2[1] = (__s7local0[0] & 3) << 4 | __s7local0[1] >> 4;
      __s7local2[2] = (__s7local0[1] & 15) << 2 | __s7local0[2] >> 6;
      __s7local2[3] = __s7local0[2] & 63;
      for (var __s7local4 = __s7local0.length; __s7local4 < 3; __s7local4++) {
        __s7local2[__s7local4 + 1] = 64;
      }
      for (var __s7local5 = 0; __s7local5 < __s7local2.length; __s7local5++) {
        __s7local1 += Base64.BASE64_CHARS.charAt(__s7local2[__s7local5]);
      }
    }
    return __s7local1;
  };
  Base64.decode = function (__s17param0) {
    var __s17local0 = Base64.decodeToByteArray(__s17param0);
    return __s17local0.readUTFBytes(__s17local0.length);
  };
  Base64.decodeToByteArray = function (__s19param0) {
    var __s19local0 = {};
    var __s19local1 = new Array(4);
    var __s19local2 = new Array(3);
    for (var __s19local3 = 0; __s19local3 < __s19param0.length; __s19local3 += 4) {
      for (var __s19local4 = 0; __s19local4 < 4 && __s19local3 + __s19local4 < __s19param0.length; __s19local4++) {
        __s19local1[__s19local4] = Base64.BASE64_CHARS.indexOf(__s19param0.charAt(__s19local3 + __s19local4));
      }
      __s19local2[0] = (__s19local1[0] << 2) + ((__s19local1[1] & 48) >> 4);
      __s19local2[1] = ((__s19local1[1] & 15) << 4) + ((__s19local1[2] & 60) >> 2);
      __s19local2[2] = ((__s19local1[2] & 3) << 6) + __s19local1[3];
      for (var __s19local5 = 0; __s19local5 < __s19local2.length && __s19local1[__s19local5 + 1] != 64; __s19local5++) {
        __s19local0.writeByte(__s19local2[__s19local5]);
      }
    }
    __s19local0.position = 0;
    return __s19local0;
  };
  Base64.BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  Base64.version = "1.1.0";
  return Base64;
}();
exports.Base64 = __s0local0;
