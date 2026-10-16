Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSTextFieldSignal = require("gge-module:class_GGSTextFieldSignal");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function ChangeSignal() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.mappedEventType = __s0local0.CHANGE;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ChangeSignal, __s1param0);
  ChangeSignal.prototype.dispatchTyped = function (__s5param0) {
    __s1param0.prototype.dispatch.call(this, __s5param0);
  };
  return ChangeSignal;
}(__dep_class_GGSTextFieldSignal.GGSTextFieldSignal);
exports.ChangeSignal = __s0local1;
