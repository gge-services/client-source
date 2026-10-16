Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function IntSignal() {
    return __s1param0.call(this, Number) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(IntSignal, __s1param0);
  IntSignal.prototype.signal = function (__s5param0) {
    __s1param0.prototype.dispatch.call(this, __s5param0);
  };
  return IntSignal;
}(require("gge-module:class_GoodgameSignal").GoodgameSignal);
exports.IntSignal = __s0local0;
