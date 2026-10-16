Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function SirenInteractionTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SirenInteractionTrackingEvent, __s1param0);
  SirenInteractionTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      var_data: this.cv,
      var_1: this.interactionType
    };
    return __s5local0;
  };
  return SirenInteractionTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.SirenInteractionTrackingEvent = __s0local0;
