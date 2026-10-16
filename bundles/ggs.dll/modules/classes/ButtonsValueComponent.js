Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function ButtonsValueComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._buttonContainer = __s3param3;
    if (__s3local0._buttonContainer.getMoreButton()) {
      __s3local0._buttonContainer.getMoreButton().addEventListener("click", __s3local0.bindFunction(__s3local0.moreClicked));
    }
    if (__s3local0._buttonContainer.getLessButton()) {
      __s3local0._buttonContainer.getLessButton().addEventListener("click", __s3local0.bindFunction(__s3local0.lessClicked));
    }
    if (__s3local0._buttonContainer.getMaxButton()) {
      __s3local0._buttonContainer.getMaxButton().addEventListener("click", __s3local0.bindFunction(__s3local0.maxClicked));
    }
    __s3local0._stepSize = __s3param4;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ButtonsValueComponent, __s1param0);
  ButtonsValueComponent.prototype.maxClicked = function (__s8param0) {
    this.dispatchUpdateByUserSignal(this.maxValue);
  };
  ButtonsValueComponent.prototype.lessClicked = function (__s10param0) {
    this.dispatchUpdateByUserSignal(this.value - this._stepSize);
  };
  ButtonsValueComponent.prototype.moreClicked = function (__s12param0) {
    this.dispatchUpdateByUserSignal(this.value + this._stepSize);
  };
  ButtonsValueComponent.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    if (this._buttonContainer.getMoreButton()) {
      this._buttonContainer.getMoreButton().removeEventListener("click", this.bindFunction(this.moreClicked));
    }
    if (this._buttonContainer.getLessButton()) {
      this._buttonContainer.getLessButton().removeEventListener("click", this.bindFunction(this.lessClicked));
    }
    if (this._buttonContainer.getMaxButton()) {
      this._buttonContainer.getMaxButton().removeEventListener("click", this.bindFunction(this.maxClicked));
    }
  };
  return ButtonsValueComponent;
}(require("gge-module:class_AValueComponent").AValueComponent);
exports.ButtonsValueComponent = __s0local0;
