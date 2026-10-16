Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function ShopLoadedTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ShopLoadedTrackingEvent, __s1param0);
  ShopLoadedTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this.playerId,
      date: this.date,
      var_1: this.sessionId,
      var_2: this.microtime,
      var_3: this.shopId,
      var_4: this.storeId,
      var_5: this.deviceId,
      var_data: []
    };
    __s5local0.var_data[0] = this.connectionType;
    return __s5local0;
  };
  return ShopLoadedTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.ShopLoadedTrackingEvent = __s0local0;
