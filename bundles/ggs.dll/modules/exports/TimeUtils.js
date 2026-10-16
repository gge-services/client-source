Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TimeUtils() {}
  TimeUtils.getTimezoneOffset = function () {
    var __s5local0 = new Date(0, 0, 1);
    var __s5local1 = new Date(0, 6, 1);
    return -Math.max(__s5local0.getTimezoneOffset(), __s5local1.getTimezoneOffset()) * 60000;
  };
  TimeUtils.getDST = function (__s7param0) {
    var __s7local0 = TimeUtils.getTimezoneOffset();
    return __s7param0.getTimezoneOffset() * 60000 - __s7local0;
  };
  TimeUtils.unixToHumanTime = function (__s9param0) {
    var __s9local0 = new Date(__s9param0 * 1000);
    return __s9local0.getHours() + ":" + __s9local0.getMinutes() + "-" + __s9local0.getDate() + "/" + (__s9local0.getMonth() + 1);
  };
  return TimeUtils;
}();
exports.TimeUtils = __s0local0;
