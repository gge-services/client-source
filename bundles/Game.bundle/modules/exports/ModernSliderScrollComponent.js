Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function ModernSliderScrollComponent(__s3param0, __s3param1, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0._dispInvisibleWhenNotScrollable = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this)._dispInvisibleWhenNotScrollable = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernSliderScrollComponent, __s1param0);
  ModernSliderScrollComponent.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.scrollVO.sliderButton], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.scrollVO.minusButton, this.scrollVO.plusButton, this.scrollVO.minButton, this.scrollVO.maxButton], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
  };
  ModernSliderScrollComponent.prototype.setVisibility = function (__s7param0) {
    __s1param0.prototype.setVisibility.call(this, __s7param0);
    if (this._dispInvisibleWhenNotScrollable && this.scrollVO.sliderButton) {
      this.scrollVO.sliderButton.parent.visible = this.isVisible;
    }
  };
  return ModernSliderScrollComponent;
}(__dep_export_SimpleScrollComponent.SimpleScrollComponent);
exports.ModernSliderScrollComponent = __s0local0;
