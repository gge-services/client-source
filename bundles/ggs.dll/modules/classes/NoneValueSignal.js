Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function NoneValueSignal() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(NoneValueSignal, __s1param0);
  NoneValueSignal.prototype.signal = function () {
    __s1param0.prototype.dispatch.call(this);
  };
  return NoneValueSignal;
}(require("gge-module:class_GoodgameSignal").GoodgameSignal);
exports.NoneValueSignal = __s0local0;
