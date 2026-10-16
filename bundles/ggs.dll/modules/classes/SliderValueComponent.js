Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function SliderValueComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = 0) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0.sliding = false;
    __s3local0.snappingOffsetInPixel = 0;
    __s3local0.sliderContainer = __s3param3;
    __s3local0._barOffset = (__s3local0.sliderContainer.getSlider().width - 1) / 2;
    __s3local0._barSize = __s3local0.sliderContainer.getSliderBar().width - __s3local0._barOffset * 2;
    __s3local0.sliderContainer.getSlider().addEventListener("mousedown", __s3local0.bindFunction(__s3local0.mouseDown));
    __s3local0.snappingOffsetInPixel = __s3param4;
    __s3local0.isDisposed = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SliderValueComponent, __s1param0);
  SliderValueComponent.prototype.mouseUp = function (__s5param0) {
    this.sliding = false;
    this.sliderContainer.getSlider().stage.removeEventListener("mousemove", this.bindFunction(this.mouseMove));
    this.sliderContainer.getSlider().stage.removeEventListener("pressup", this.bindFunction(this.mouseUp));
  };
  SliderValueComponent.prototype.mouseMove = function (__s7param0) {};
  SliderValueComponent.prototype.mouseDown = function (__s9param0) {
    this.sliding = true;
    this.sliderContainer.getSlider().stage.addEventListener("mousemove", this.bindFunction(this.mouseMove));
    this.sliderContainer.getSlider().stage.addEventListener("pressup", this.bindFunction(this.mouseUp));
  };
  SliderValueComponent.prototype.updateValue = function (__s11param0) {
    __s1param0.prototype.updateValue.call(this, __s11param0);
    var __s11local0 = (__s11param0 - this.minValue) / (this.maxValue - this.minValue);
    if (this.sliderContainer.getFilledBar()) {
      this.sliderContainer.getFilledBar().width = __s11local0 * this._barSize + this._barOffset + this.sliderContainer.getSliderBar().x;
    }
    this.sliderContainer.getSlider().x = __s11local0 * this._barSize + this.sliderContainer.getSlider().x + this._barOffset;
  };
  SliderValueComponent.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.sliderContainer.getSlider().removeEventListener("mousedown", this.bindFunction(this.mouseDown));
      this.sliderContainer.getSlider().stage.removeEventListener("mousemove", this.bindFunction(this.mouseMove));
      this.sliderContainer.getSlider().stage.removeEventListener("pressup", this.bindFunction(this.mouseUp));
    }
    __s1param0.prototype.dispose.call(this);
  };
  return SliderValueComponent;
}(require("gge-module:class_AValueComponent").AValueComponent);
exports.SliderValueComponent = __s0local0;
