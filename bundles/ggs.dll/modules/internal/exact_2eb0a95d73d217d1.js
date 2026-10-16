var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0) {
  var __s1local0 = __s1param0._alwaysArray;
  var __s1local1 = __s1param0.prototype.init;
  __s1param0.prototype.init = function () {
    var __s3local0;
    var __s3local1;
    var __s3local2;
    __s1local1.apply(this, arguments);
    this.supplemental = (__s3local0 = this, (__s3local2 = (__s3local1 = function (__s5param0) {
      return function (__s7param0) {
        __s7param0 = __s1local0(__s7param0);
        return __s3local0.get([__s5param0].concat(__s7param0));
      };
    })("supplemental")).weekData = __s3local1("supplemental/weekData"), __s3local2.weekData.firstDay = function () {
      return __s3local0.get("supplemental/weekData/firstDay/{territory}") || __s3local0.get("supplemental/weekData/firstDay/001");
    }, __s3local2.weekData.minDays = function () {
      var __s11local0 = __s3local0.get("supplemental/weekData/minDays/{territory}") || __s3local0.get("supplemental/weekData/minDays/001");
      return parseInt(__s11local0, 10);
    }, __s3local2.timeData = __s3local1("supplemental/timeData"), __s3local2.timeData.allowed = function () {
      return __s3local0.get("supplemental/timeData/{territory}/_allowed") || __s3local0.get("supplemental/timeData/001/_allowed");
    }, __s3local2.timeData.preferred = function () {
      return __s3local0.get("supplemental/timeData/{territory}/_preferred") || __s3local0.get("supplemental/timeData/001/_preferred");
    }, __s3local2);
  };
  return __s1param0;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
