Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function BasicSliderValueContainer(__s3param0) {
    this.slider = __s3param0.getChildByName("slider");
    this.sliderBar = __s3param0.getChildByName("slideBar");
    this.filledBar = this.sliderBar.getChildByName("fillBar");
  }
  BasicSliderValueContainer.prototype.getSlider = function () {
    return this.slider;
  };
  BasicSliderValueContainer.prototype.getSliderBar = function () {
    return this.sliderBar;
  };
  BasicSliderValueContainer.prototype.getFilledBar = function () {
    return this.filledBar;
  };
  return BasicSliderValueContainer;
}();
exports.BasicSliderValueContainer = __s0local0;
