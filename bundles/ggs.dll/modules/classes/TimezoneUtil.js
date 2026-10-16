Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TimezoneUtil() {}
  TimezoneUtil.getTrackingTimezone = function () {
    return Math.round(TimezoneUtil.getFlashTimezoneWithoutDST() * -1 / 60) + 13;
  };
  TimezoneUtil.getTrackingTimezoneInUTC = function () {
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(TimezoneUtil.getFlashTimezoneWithoutDST()) * 10;
  };
  TimezoneUtil.getUTCTimezoneWithoutDST = function () {
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(TimezoneUtil.getFlashTimezoneWithoutDST());
  };
  TimezoneUtil.getUTCTimezoneWithDST = function () {
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(TimezoneUtil.getFlashTimezoneWithDST());
  };
  TimezoneUtil.getFlashTimezoneWithoutDST = function () {
    var __s13local0 = new Date().getFullYear();
    var __s13local1 = new Date(__s13local0, 0, 1);
    var __s13local2 = new Date(__s13local0, 6, 1);
    return Math.max(__s13local1.getTimezoneOffset(), __s13local2.getTimezoneOffset());
  };
  TimezoneUtil.getFlashTimezoneWithDST = function () {
    return new Date().getTimezoneOffset();
  };
  TimezoneUtil.getDST = function () {
    var __s17local0 = TimezoneUtil.getFlashTimezoneWithoutDST();
    var __s17local1 = new Date().getTimezoneOffset() - __s17local0;
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(__s17local1);
  };
  TimezoneUtil.hasDST = function () {
    var __s19local0 = new Date().getFullYear();
    var __s19local1 = new Date(__s19local0, 0, 1);
    var __s19local2 = new Date(__s19local0, 6, 1);
    return __s19local1.getTimezoneOffset() !== __s19local2.getTimezoneOffset();
  };
  TimezoneUtil.isDSTActive = function () {
    var __s21local0 = TimezoneUtil.getFlashTimezoneWithoutDST();
    return new Date().getTimezoneOffset() - __s21local0 !== 0;
  };
  TimezoneUtil.convertFlashTimezoneToUTCTimezone = function (__s23param0) {
    return __s23param0 / 60 * -1;
  };
  TimezoneUtil.convertUTCTimezoneToFlashTimezone = function (__s25param0) {
    return __s25param0 * 60 * -1;
  };
  return TimezoneUtil;
}();
exports.TimezoneUtil = __s0local0;
