Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackFailDialog() {
    return __s1param0.call(this, AdvisorAttackFailDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackFailDialog, __s1param0);
  AdvisorAttackFailDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackFailed")));
    this._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.dialogDisp.mc_lord);
  };
  AdvisorAttackFailDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var __s7local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTeaserFileName(this.dialogProperties.advisorType);
    var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0 + "_Fail", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(__s7local1);
    var __s7local2 = __dep_export_CastleModel.CastleModel.lordData.getLordByID(this.dialogProperties.commanderId);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s7local2, this.dialogDisp.mc_lord, 61);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_commander, __s7local2.name);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("advisor_AttackFailed_reason" + this.dialogProperties.failureId));
    var __s7local3 = __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_ATTACK;
    this._lordTooltipTrigger.setProperties(__s7local2, null, null, __s7local3);
    this._lordTooltipTrigger.show();
    this.dialogDisp.mc_failIcon.gotoAndStop(this.dialogProperties.failureId + 1);
    if (this.dialogDisp.mc_failIcon.icon_fail_troops_tools) {
      this.dialogDisp.mc_failIcon.icon_fail_troops_tools.gotoAndStop(this.dialogProperties.advisorType);
    }
  };
  AdvisorAttackFailDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    this._lordTooltipTrigger.hide();
  };
  AdvisorAttackFailDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(AdvisorAttackFailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackFailDialog.NAME = "NomadAdvisorFailExt";
  return AdvisorAttackFailDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AdvisorAttackFailDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
