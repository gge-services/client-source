Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleUnderworldMoraleBoosterRewardDialog() {
    return __s1param0.call(this, CastleUnderworldMoraleBoosterRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnderworldMoraleBoosterRewardDialog, __s1param0);
  CastleUnderworldMoraleBoosterRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_info, this.dialogDisp.btn_forward, this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_lowLevelUnderworld_boosterTower_popup_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_subtitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reward"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_message, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_lowLevelUnderworld_boosterTower_popup_desc"));
    this.dialogDisp.btn_forward.toolTipText = "dialog_questInfo_showMe";
    this.dialogDisp.btn_forward.visible = false;
  };
  CastleUnderworldMoraleBoosterRewardDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleUnderworldMoraleBoosterRewardDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    if (this.dialogProp) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_item).addInfoBtn(this.dialogDisp.btn_info), this.dialogProp.decoCollectableItem, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(130, 130)));
    }
  };
  Object.defineProperty(CastleUnderworldMoraleBoosterRewardDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldMoraleBoosterRewardDialog.NAME = "CastleUnderworldMoraleBoosterRewardDialog";
  return CastleUnderworldMoraleBoosterRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleUnderworldMoraleBoosterRewardDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
