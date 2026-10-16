Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function GenericGameStateEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GenericGameStateEvent, __s1param0);
  GenericGameStateEvent.prototype.getVars = function () {
    var __s5local0 = __s1param0.prototype.getVars.call(this);
    __s5local0.gamestate = this.gamestate;
    __s5local0.sequence = this.sequence;
    return __s5local0;
  };
  return GenericGameStateEvent;
}(require("gge-module:class_MeasurementResultsEvent").MeasurementResultsEvent);
exports.GenericGameStateEvent = __s0local0;
