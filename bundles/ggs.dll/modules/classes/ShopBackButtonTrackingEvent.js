Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function ShopBackButtonTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.shopId = 1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ShopBackButtonTrackingEvent, __s1param0);
  ShopBackButtonTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this.playerId,
      date: this.date,
      var_1: this.serviceId,
      var_2: this.shopId,
      var_data: this.subId
    };
    return __s5local0;
  };
  return ShopBackButtonTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.ShopBackButtonTrackingEvent = __s0local0;
