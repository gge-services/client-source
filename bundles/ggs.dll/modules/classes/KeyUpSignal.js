Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSTextFieldSignal = require("gge-module:class_GGSTextFieldSignal");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function KeyUpSignal() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.mappedEventType = __dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(KeyUpSignal, __s1param0);
  KeyUpSignal.prototype.dispatchTyped = function (__s5param0) {
    __s1param0.prototype.dispatch.call(this, __s5param0);
  };
  return KeyUpSignal;
}(__dep_class_GGSTextFieldSignal.GGSTextFieldSignal);
exports.KeyUpSignal = __s0local0;
