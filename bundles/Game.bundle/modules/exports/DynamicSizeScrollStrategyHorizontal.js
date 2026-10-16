Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __dep_export_instanceOf_IDynamicSizeSlider = require("gge-module:export_instanceOf_IDynamicSizeSlider");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function DynamicSizeScrollStrategyHorizontal(__s3param0 = false, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._visibleValue = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._visibleValue = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DynamicSizeScrollStrategyHorizontal, __s1param0);
  DynamicSizeScrollStrategyHorizontal.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.placeSliderButton();
  };
  DynamicSizeScrollStrategyHorizontal.prototype.getPercentFactorOfMousePos = function (__s7param0 = 0) {
    var __s7local0 = (this.scrollVO.sliderLine.mouseX - __s7param0 - this.getSliderButtonWidth() / 2) / this.getLineLength();
    return __s7local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s7local0, 0, 1);
  };
  DynamicSizeScrollStrategyHorizontal.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.width - this.getSliderButtonWidth();
  };
  DynamicSizeScrollStrategyHorizontal.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider && (this.scrollVO.sliderButton.x = this.getLineStartPos() + this.getLineLength() * this.percentFactor + this.getSliderButtonWidth() / 2, __dep_export_instanceOf_IDynamicSizeSlider.instanceOf_IDynamicSizeSlider(__dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.scrollVO.sliderButton)))) {
      var __s11local0 = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.scrollVO.sliderButton);
      var __s11local1 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._visibleValue / (this._scrollComponent.maxValue + this._visibleValue), 0, 1) * this.scrollVO.sliderLine.width;
      __s11local0.setSize(Math.max(__s11local1, __s11local0.minSize));
    }
  };
  Object.defineProperty(DynamicSizeScrollStrategyHorizontal.prototype, "visibleValue", {
    set: function (__s14param0) {
      this._visibleValue = __s14param0;
    },
    enumerable: true,
    configurable: true
  });
  DynamicSizeScrollStrategyHorizontal.prototype.getSliderButtonWidth = function () {
    if (this.scrollVO.sliderButton.skewX != 0 || this.scrollVO.sliderButton.rotation != 0) {
      return this.scrollVO.sliderButton.height;
    } else {
      return this.scrollVO.sliderButton.width;
    }
  };
  DynamicSizeScrollStrategyHorizontal.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.scrollVO.minButton, this.scrollVO.maxButton, this.scrollVO.plusButton, this.scrollVO.minusButton], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.scrollVO.sliderButton], __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton, 1);
  };
  return DynamicSizeScrollStrategyHorizontal;
}(__dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal);
exports.DynamicSizeScrollStrategyHorizontal = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleScrollStrategy", "IDynamicSizeScrollStrategy");
