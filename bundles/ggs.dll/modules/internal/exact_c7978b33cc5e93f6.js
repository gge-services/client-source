Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function StringUtils() {}
  StringUtils.encrypt = function (__s5param0) {
    return StringUtils.invertString(__s5param0);
  };
  StringUtils.decrypt = function (__s7param0) {
    return StringUtils.invertString(__s7param0);
  };
  StringUtils.invertString = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0; __s9local1 < __s9param0.length; __s9local1++) {
      __s9local0.push(String.fromCharCode(__s9param0.charCodeAt(__s9local1) ^ 255));
    }
    return __s9local0.join("");
  };
  return StringUtils;
}();
exports.StringUtils = __s0local0;
