Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GoodgameSignal = require("gge-module:class_GoodgameSignal");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function PointSignal() {
    return __s1param0.call(this, __s0local0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(PointSignal, __s1param0);
  PointSignal.prototype.signal = function (__s5param0) {
    __s1param0.prototype.dispatch.call(this, __s5param0);
  };
  return PointSignal;
}(__dep_class_GoodgameSignal.GoodgameSignal);
exports.PointSignal = __s0local1;
