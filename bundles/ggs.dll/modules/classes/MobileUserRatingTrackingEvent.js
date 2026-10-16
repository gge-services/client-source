Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function MobileUserRatingTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.playerId = -1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MobileUserRatingTrackingEvent, __s1param0);
  MobileUserRatingTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this.playerId,
      var_1: this.trackType,
      var_2: this.stars
    };
    return __s5local0;
  };
  MobileUserRatingTrackingEvent.TYPE_RATE_NOW = 1;
  MobileUserRatingTrackingEvent.TYPE_NOT_NOW = 2;
  MobileUserRatingTrackingEvent.TYPE_NEVER = 3;
  return MobileUserRatingTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.MobileUserRatingTrackingEvent = __s0local0;
