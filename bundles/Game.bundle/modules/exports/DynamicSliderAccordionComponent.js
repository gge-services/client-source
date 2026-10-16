Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AccordionComponent = require("gge-module:export_AccordionComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedBackSliderButton = require("gge-module:export_ClickFeedBackSliderButton");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function DynamicSliderAccordionComponent(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = true) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2 ? __s3param2.y : __s3param0.mc_mask.y, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DynamicSliderAccordionComponent, __s1param0);
  DynamicSliderAccordionComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this._disp.mc_slider.btn_minus, 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this._disp.mc_slider.btn_slider, 1, __dep_export_ClickFeedBackSliderButton.ClickFeedBackSliderButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this._disp.mc_slider.btn_plus, 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._sliderButton = this._disp.mc_slider.btn_slider.basicButton;
    __s1param0.prototype.init.call(this);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.scrollComponent.strategy, "DynamicSizeScrollStrategyVertical")) {
      this.scrollComponent.strategy.visibleValue = this._itemContainer.mask.height;
    }
  };
  DynamicSliderAccordionComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this._disp.visible = true;
  };
  DynamicSliderAccordionComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._disp.visible = false;
    this.clear();
  };
  DynamicSliderAccordionComponent.prototype.updateSlider = function (__s12param0 = false) {
    var __s12local0 = 0;
    var __s12local1 = 0;
    if (this._properties.isVertical) {
      __s12local1 = this.applyLayout().height;
      __s12local0 = __dep_exact_f855840627e6e145.int(Math.max(0, __s12local1 - this._itemContainer.mask.height));
    } else {
      __s12local1 = this.applyLayout().width;
      __s12local0 = __dep_exact_f855840627e6e145.int(Math.max(0, __s12local1 - this._itemContainer.mask.width));
    }
    var __s12local2 = __dep_exact_f855840627e6e145.int(__s12param0 ? 0 : this.scrollComponent.currentValue);
    this.scrollComponent.init(0, __s12local0, this._properties.scrollStepPixels, this._properties.scrollStepPixels);
    this.scrollComponent.scrollToValue(Math.min(__s12local2, __s12local0));
    this.disp.mc_slider.visible = __s12local0 > 0;
    this.scrollComponent.setVisibility(__s12local0 > 0);
  };
  Object.defineProperty(DynamicSliderAccordionComponent.prototype, "sliderButton", {
    get: function () {
      return this._sliderButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicSliderAccordionComponent.prototype, "numItems", {
    get: function () {
      return this.items.length;
    },
    enumerable: true,
    configurable: true
  });
  return DynamicSliderAccordionComponent;
}(__dep_export_AccordionComponent.AccordionComponent);
exports.DynamicSliderAccordionComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
