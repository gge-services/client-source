Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function DecorationForgeQuickGuideInfoDialog() {
    return __s1param0.call(this, DecorationForgeQuickGuideInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeQuickGuideInfoDialog, __s1param0);
  DecorationForgeQuickGuideInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._textScrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO(this.dialogDisp.mc_slider.btn_minus, this.dialogDisp.mc_slider.btn_plus, null, null, this.dialogDisp.mc_slider.mc_sliderLine, this.dialogDisp.mc_slider.btn_slider, [this.dialogDisp.mc_slider], [this.dialogDisp.txt_copy, this.dialogDisp.mouse_area]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0));
  };
  DecorationForgeQuickGuideInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_decoForge_quickGuide_" + this.infoProperties.copy + "_desc"));
    this._textScrollComponent.strategy.visibleValue = __dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? this.itxt_desc.height : this.itxt_desc.numLines;
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this.itxt_desc.maxScrollV, __s7local0, __s7local0);
    this._textScrollComponent.setVisibility(this.itxt_desc.maxScrollV > 1);
    this._textScrollComponent.show();
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_decoForge_quickGuide_" + this.infoProperties.title + "_title"));
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_info);
    this.dialogDisp.mc_info.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.infoProperties.graphicString, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DecorationForgeQuickGuideInfoDialog.NAME), null, 0, false));
  };
  DecorationForgeQuickGuideInfoDialog.prototype.onScrollValueChange = function () {
    this.itxt_desc.scrollV = __dep_exact_9e901e8e2483a22f_1.MathBase.clamp(this._textScrollComponent.currentValue, 1, this.itxt_desc.maxScrollV);
  };
  DecorationForgeQuickGuideInfoDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(DecorationForgeQuickGuideInfoDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeQuickGuideInfoDialog.NAME = "DecorationForgeQuickGuideInfo";
  return DecorationForgeQuickGuideInfoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.DecorationForgeQuickGuideInfoDialog = __s0local0;
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
