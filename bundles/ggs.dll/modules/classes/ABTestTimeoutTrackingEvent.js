Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function ABTestTimeoutTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.playerId = 0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ABTestTimeoutTrackingEvent, __s1param0);
  ABTestTimeoutTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this.playerId,
      var_2: this.testID,
      var_4: this.accountID,
      var_data: this.referrer
    };
    return __s5local0;
  };
  return ABTestTimeoutTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.ABTestTimeoutTrackingEvent = __s0local0;
