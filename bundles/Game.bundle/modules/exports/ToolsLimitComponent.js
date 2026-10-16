Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function ToolsLimitComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._currentSliderValue = 0;
    __s3local0._currentSliderValue = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ToolsLimitComponent, __s1param0);
  ToolsLimitComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.btn_help, this.disp.mc_toolLimitSlider.btn_minus, this.disp.mc_toolLimitSlider.btn_plus, this.disp.mc_toolLimitSlider.btn_slider, this.disp.mc_toolLimitSlider.btn_max], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_tool_support, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_defence_toolTriggerLimit_header"));
    var __s5local0 = new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_toolLimitSlider).addMouseWheelElements([this.disp.mc_toolLimitSlider]).addSliderLine(this.disp.mc_toolLimitSlider.mc_sliderLine), __s5local0, true);
    this._scrollComponent.init(0, ToolsLimitComponent.TOOLS_LIMIT_MAX);
    this._scrollComponent.scrollToValue(this._currentSliderValue);
    this.disp.mc_toolLimitSlider.txt_text.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._itxt_limit = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_toolLimitSlider.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._currentSliderValue));
    this._itxt_limit.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    this._itxt_limit.restrict = "0-9";
  };
  ToolsLimitComponent.prototype.onTextLimitChanged = function (__s7param0) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__s7param0.target.text);
    if (__s7local0 > ToolsLimitComponent.TOOLS_LIMIT_MAX) {
      __s7local0 = ToolsLimitComponent.TOOLS_LIMIT_MAX;
    }
    this.updateSlider(__s7local0);
  };
  ToolsLimitComponent.prototype.onFocusInLimitText = function (__s10param0) {
    this._itxt_limit.clearText();
  };
  ToolsLimitComponent.prototype.onFocusOutLimitText = function (__s12param0) {
    this._itxt_limit.textContentVO.numberValue = this._currentSliderValue;
  };
  ToolsLimitComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._itxt_limit.change.add(this.bindFunction(this.onTextLimitChanged));
    this._itxt_limit.focusIn.add(this.bindFunction(this.onFocusInLimitText));
    this._itxt_limit.focusOut.add(this.bindFunction(this.onFocusOutLimitText));
    this._scrollComponent.scrollToValue(this._currentSliderValue);
  };
  ToolsLimitComponent.prototype.updateSlider = function (__s16param0) {
    this._currentSliderValue = __s16param0;
    __dep_export_CastleModel.CastleModel.defenceData.minAttackUnitsToConsumeTools = __s16param0;
    this._scrollComponent.scrollToValue(this._currentSliderValue);
    this._isSliderChanged = true;
  };
  ToolsLimitComponent.prototype.onScrollValueChange = function () {
    this._currentSliderValue = this._scrollComponent.currentValue;
    __dep_export_CastleModel.CastleModel.defenceData.minAttackUnitsToConsumeTools = this._currentSliderValue;
    this._itxt_limit.textContentVO.numberValue = this._currentSliderValue;
    this.disp.mc_toolLimitSlider.mc_sliderLineFill.width = Math.abs(this.disp.mc_toolLimitSlider.btn_slider.x - this.disp.mc_toolLimitSlider.mc_sliderLine.x);
  };
  ToolsLimitComponent.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (__s20param0.target == this.disp.btn_help) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("dialog_defence_toolTriggerLimit_header", __dep_exact_92d05af59ee2ff30.Localize.text("help_defence_toolTriggerLimit"));
    }
  };
  Object.defineProperty(ToolsLimitComponent.prototype, "isSliderChanged", {
    get: function () {
      return this._isSliderChanged;
    },
    enumerable: true,
    configurable: true
  });
  ToolsLimitComponent.prototype.onHide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    this._itxt_limit.change.remove(this.bindFunction(this.onTextLimitChanged));
    this._itxt_limit.focusIn.remove(this.bindFunction(this.onFocusInLimitText));
    this._itxt_limit.focusOut.remove(this.bindFunction(this.onFocusOutLimitText));
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  ToolsLimitComponent.TOOLS_LIMIT_MAX = 2000;
  return ToolsLimitComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ToolsLimitComponent = __s0local0;
