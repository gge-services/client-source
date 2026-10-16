Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsTitleLostDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStormIslandsTitleLostDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsTitleLostDialog, __s1param0);
  CastleStormIslandsTitleLostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitle_titleLost_header"))).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this._textScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO(this.dialogDisp.mc_list.mc_descSlider.btn_minus, this.dialogDisp.mc_list.mc_descSlider.btn_plus, null, null, this.dialogDisp.mc_list.mc_descSlider.mc_sliderLine, this.dialogDisp.mc_list.mc_descSlider.btn_slider, [this.dialogDisp.mc_slider], [this.dialogDisp.mc_list.txt_copy, this.dialogDisp.mouse_area]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0), true);
  };
  CastleStormIslandsTitleLostDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(this.dialogProperties.messageVO.titleID);
    if (__s7local0) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_storm_island_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s7local0.textID))).autoFitToBounds = true;
    }
    var __s7local1 = this.dialogProperties && this.dialogProperties.messageVO && this.dialogProperties.messageVO.isWinningAlliance ? "dialog_island_stormTitle_titleLost_titleLossPlayer_desc" : "dialog_island_stormTitle_titleLost_desc";
    this._txtDesc = this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local1));
    this._textScrollComponent.strategy.visibleValue = __dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? this._txtDesc.height : this._txtDesc.numLines;
    var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._txtDesc.maxScrollV, __s7local2, __s7local2);
    this._textScrollComponent.setVisibility(this._txtDesc.maxScrollV > 1);
    this._textScrollComponent.show();
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this.dialogDisp.icon_title.visible = !this.dialogProperties.isStormLord;
    this.dialogDisp.icon_storm_lord.visible = this.dialogProperties.isStormLord;
  };
  CastleStormIslandsTitleLostDialog.prototype.onDescriptionScroll = function () {
    this._txtDesc.scrollV = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._txtDesc.maxScrollV);
  };
  CastleStormIslandsTitleLostDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.hide();
  };
  CastleStormIslandsTitleLostDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    switch (__s14param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleStormIslandsTitleLostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsTitleLostDialog.__initialize_static_members = function () {
    CastleStormIslandsTitleLostDialog.NAME = "CastleStormIslandsTitleLost";
  };
  return CastleStormIslandsTitleLostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStormIslandsTitleLostDialog = __s0local0;
__s0local0.__initialize_static_members();
