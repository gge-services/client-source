Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __dep_export_instanceOf_IDynamicSizeSlider = require("gge-module:export_instanceOf_IDynamicSizeSlider");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function DynamicSizeScrollStrategyVertical(__s3param0 = false, __s3param1 = 0, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0._visibleValue = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2) || this)._visibleValue = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DynamicSizeScrollStrategyVertical, __s1param0);
  DynamicSizeScrollStrategyVertical.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.placeSliderButton();
  };
  DynamicSizeScrollStrategyVertical.prototype.getPercentFactorOfMousePos = function (__s7param0 = 0) {
    var __s7local0 = (castAs(this.scrollVO.sliderLine, "Container").mouseY - __s7param0 - this.scrollVO.sliderButton.height / 2) / this.getLineLength();
    return __s7local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s7local0, 0, 1);
  };
  DynamicSizeScrollStrategyVertical.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.height - this.scrollVO.sliderButton.height;
  };
  DynamicSizeScrollStrategyVertical.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider && (this.scrollVO.sliderButton.y = this.getLineStartPos() + this.getLineLength() * this.percentFactor + this.scrollVO.sliderButton.height / 2, __dep_export_instanceOf_IDynamicSizeSlider.instanceOf_IDynamicSizeSlider(__dep_export_ButtonHelper.ButtonHelper.getBasicButton(castAs(this.scrollVO.sliderButton, "DisplayObject"))))) {
      var __s11local0 = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(castAs(this.scrollVO.sliderButton, "DisplayObject"));
      var __s11local1 = castAs(__s11local0, "IDynamicSizeSlider");
      var __s11local2 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._visibleValue / (this._scrollComponent.maxValue + this._visibleValue), 0, 1) * this.scrollVO.sliderLine.height;
      if (__s11local1 != null) {
        __s11local1.setSize(Math.max(__s11local2, __s11local1.minSize));
      } else {
        __s11local0.setSize(Math.max(__s11local2, __s11local0.minSize));
      }
    }
  };
  Object.defineProperty(DynamicSizeScrollStrategyVertical.prototype, "visibleValue", {
    set: function (__s16param0) {
      this._visibleValue = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  DynamicSizeScrollStrategyVertical.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.scrollVO.minButton, this.scrollVO.maxButton, this.scrollVO.plusButton, this.scrollVO.minusButton], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.scrollVO.sliderButton], __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton, 1);
  };
  return DynamicSizeScrollStrategyVertical;
}(require("gge-module:export_SimpleScrollStrategyVertical").SimpleScrollStrategyVertical);
exports.DynamicSizeScrollStrategyVertical = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleScrollStrategy", "IDynamicSizeScrollStrategy");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
