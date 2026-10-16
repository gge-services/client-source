Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSTextFieldSignal = require("gge-module:class_GGSTextFieldSignal");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ScrollSignal() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.mappedEventType = __s0local0.MOUSE_WHEEL;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ScrollSignal, __s1param0);
  ScrollSignal.prototype.dispatchTyped = function (__s5param0) {
    __s1param0.prototype.dispatch.call(this, __s5param0);
  };
  return ScrollSignal;
}(__dep_class_GGSTextFieldSignal.GGSTextFieldSignal);
exports.ScrollSignal = __s0local1;
