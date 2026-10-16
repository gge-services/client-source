Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function FirstLoaderEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FirstLoaderEvent, __s1param0);
  FirstLoaderEvent.prototype.getVars = function () {
    var __s5local0 = {
      gameId: this.gameId,
      var_1: this.firstLoaderVersion,
      var_data: this.firstLoaderReferer
    };
    return __s5local0;
  };
  return FirstLoaderEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.FirstLoaderEvent = __s0local0;
