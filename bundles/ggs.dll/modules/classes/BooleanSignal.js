Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function BooleanSignal() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BooleanSignal, __s1param0);
  BooleanSignal.prototype.signal = function (__s5param0) {
    __s1param0.prototype.dispatch.call(this, __s5param0);
  };
  return BooleanSignal;
}(require("gge-module:class_GoodgameSignal").GoodgameSignal);
exports.BooleanSignal = __s0local0;
