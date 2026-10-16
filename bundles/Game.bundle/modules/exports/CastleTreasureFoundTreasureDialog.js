Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTreasureFoundTreasureDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureFoundTreasureDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureFoundTreasureDialog, __s1param0);
  CastleTreasureFoundTreasureDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.mc_item.mouseChildren = false;
  };
  CastleTreasureFoundTreasureDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.updateReward(this.dialogDisp.mc_item);
    this.dialogDisp.mc_item.mouseChildren = false;
  };
  CastleTreasureFoundTreasureDialog.prototype.setCopyTexts = function () {
    var __s9local0 = this.dialogProperties.title ? this.dialogProperties.title : "dialog_treasureMap_foundTreasure_title";
    var __s9local1 = this.dialogProperties.copy ? this.dialogProperties.copy : "dialog_treasureMap_foundTreasure_copy";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local1));
  };
  CastleTreasureFoundTreasureDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleTreasureFoundTreasureDialog.prototype.updateReward = function (__s14param0) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s14param0).addIconMc(__s14param0), this.dialogProperties.rewardList.getItemByIndexSave(0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(110, 110)));
  };
  Object.defineProperty(CastleTreasureFoundTreasureDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureFoundTreasureDialog.__initialize_static_members = function () {
    CastleTreasureFoundTreasureDialog.NAME = "CastleTreasureFoundTreasure";
  };
  return CastleTreasureFoundTreasureDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTreasureFoundTreasureDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
