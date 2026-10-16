Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SBuyUnlockedSymbolVO = require("gge-module:export_C2SBuyUnlockedSymbolVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleBuyUnlockedCrestSymbolDialog() {
    var __s3local0 = this;
    __s3local0.color = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleBuyUnlockedCrestSymbolDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyUnlockedCrestSymbolDialog, __s1param0);
  CastleBuyUnlockedCrestSymbolDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_cost_info.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_crestSymbol_buy_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_crestSymbol_buy"));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_confirm, this.dialogDisp.btn_deny, this.dialogDisp.btn_close]);
  };
  CastleBuyUnlockedCrestSymbolDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.assetHolder);
    this.dialogDisp.assetHolder.addChild(__dep_export_CrestHelper.CrestHelper.getCrestSymbolGraphic(this.dialogProperties.symbolVO, 100, 100, null));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_confirm, this.canAffordSymbol());
    if (this.dialogProperties.symbolVO.costC1 > 0) {
      this.dialogDisp.mc_cost_info.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost_info.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.symbolVO.costC1)).color = this.color;
      this.dialogDisp.mc_cost_info.toolTipText = "cash";
    } else {
      this.dialogDisp.mc_cost_info.gotoAndStop(1);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost_info.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.symbolVO.costC2)).color = this.color;
      this.dialogDisp.mc_cost_info.toolTipText = "dialog_fame_rewardC2";
    }
  };
  CastleBuyUnlockedCrestSymbolDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_confirm:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyUnlockedSymbolVO.C2SBuyUnlockedSymbolVO(this.dialogProperties.symbolVO.id));
        case this.dialogDisp.btn_deny:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleBuyUnlockedCrestSymbolDialog.prototype.canAffordSymbol = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount >= this.dialogProperties.symbolVO.costC1 && __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.dialogProperties.symbolVO.costC2;
    this.color = __s15local0 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    return __s15local0;
  };
  Object.defineProperty(CastleBuyUnlockedCrestSymbolDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyUnlockedCrestSymbolDialog.__initialize_static_members = function () {
    CastleBuyUnlockedCrestSymbolDialog.NAME = "CastleCrestBuySymbolExt";
  };
  return CastleBuyUnlockedCrestSymbolDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBuyUnlockedCrestSymbolDialog = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
