Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function GeoIPUtils() {}
  GeoIPUtils.hexStringToBytes = function (__s5param0) {
    var __s5local0 = [];
    for (; __s5param0.length >= 2;) {
      __s5local0.push(Number("0x" + __s5param0.substr(0, 2)));
      __s5param0 = __s5param0.substr(2, __s5param0.length - 2);
    }
    return __s5local0;
  };
  GeoIPUtils.bytesToAsciiString = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0; __s9local1 < __s9param0.length; __s9local1++) {
      __s9local0.push(String.fromCharCode(__s9param0[__s9local1]));
    }
    return __s9local0.join("");
  };
  return GeoIPUtils;
}();
exports.GeoIPUtils = __s0local0;
