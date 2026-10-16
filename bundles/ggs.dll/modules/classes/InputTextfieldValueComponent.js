Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AValueComponent = require("gge-module:class_AValueComponent");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function InputTextfieldValueComponent(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._textfieldContainer = __s3param3;
    __s3local0._textfieldContainer.getTextfield().addEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, __s3local0.bindFunction(__s3local0.onPlayerInput));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(InputTextfieldValueComponent, __s1param0);
  InputTextfieldValueComponent.prototype.onPlayerInput = function (__s5param0) {
    var __s5local0 = this._textfieldContainer.getTextfield().text;
    if (__s5param0.code != "ArrowRight" && __s5param0.code != "ArrowLeft" && this.validateInput(__s5local0)) {
      var __s5local1 = parseInt(__s5local0);
      this.dispatchUpdateByUserSignal(__s5local1);
    }
  };
  InputTextfieldValueComponent.prototype.validateInput = function (__s8param0) {
    var __s8local0;
    try {
      __s8local0 = parseInt(__s8param0);
    } catch (__s11local0) {
      return false;
    }
    return !isNaN(__s8local0);
  };
  InputTextfieldValueComponent.prototype.updateValue = function (__s13param0) {
    __s1param0.prototype.updateValue.call(this, __s13param0);
    this._textfieldContainer.getTextfield().text = __s13param0.toString();
    this._textfieldContainer.getTextfield().setSelection(this._textfieldContainer.getTextfield().length, this._textfieldContainer.getTextfield().length);
  };
  InputTextfieldValueComponent.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    this._textfieldContainer.getTextfield().removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onPlayerInput));
  };
  return InputTextfieldValueComponent;
}(__dep_class_AValueComponent.AValueComponent);
exports.InputTextfieldValueComponent = __s0local0;
