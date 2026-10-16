Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function OpenAfterPushNotificationTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.playerId = -1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(OpenAfterPushNotificationTrackingEvent, __s1param0);
  OpenAfterPushNotificationTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this.playerId,
      var_1: this.pushNotificationId
    };
    return __s5local0;
  };
  return OpenAfterPushNotificationTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.OpenAfterPushNotificationTrackingEvent = __s0local0;
