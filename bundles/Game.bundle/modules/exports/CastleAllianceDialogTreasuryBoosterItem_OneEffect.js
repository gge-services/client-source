Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogTreasuryBoosterItem_OneEffect(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2 || CastleAllianceDialogTreasuryBoosterItem_OneEffect.ASSET_CLIP_NAME, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3local0.itemMc.btn_add, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasuryBoosterItem_OneEffect, __s1param0);
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this.updateText();
    this.updateButton();
    this.updateProgressBar();
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.updateText = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_name0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_colon", [__dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleEffectsHelper.CastleEffectsHelper.getNameTextId(this.buffVO.seriesID))]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_amount0, this.getBoosterAmountText());
    this.itemMc.mc_progress.txt_countdown_name_full.visible = this.itemMc.mc_progress.txt_countdown_full.visible = this.itemMc.mc_progress.txt_countdown_name_middle.visible = this.itemMc.mc_progress.txt_countdown_middle.visible = this.itemMc.mc_progress.txt_empty.visible = false;
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.getBoosterAmountText = function () {
    if (this.buffVO.seriesID == __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [String(this.allianceInfoVO.memberAmount), String(this.allianceInfoVO.memberMax)]);
    } else {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_add", [String(this.allianceInfoVO.getCurrentBoostValue(this.buffVO.seriesID, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN))]);
    }
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.updateButton = function () {
    var __s13local0;
    var __s13local1 = true;
    if (this.allianceInfoVO.isBoostUpgradeable(this.buffVO.seriesID)) {
      if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_UPGRADE)) {
        __s13local0 = this.buffVO.seriesID == __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS ? "dialog_alliance_raiseMemberLimit" : "dialog_alliance_raiseEffect";
      } else {
        __s13local1 = false;
        __s13local0 = "dialog_alliance_rankToLow";
      }
    } else {
      __s13local1 = false;
      __s13local0 = "dialog_alliance_maxUpgradeLevel";
    }
    this.itemMc.btn_add.toolTipText = __s13local0;
    this.itemMc.btn_add.mc_icon.gotoAndStop(this.buffVO.seriesID == __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS ? 4 : 1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.btn_add, __s13local1);
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.updateProgressBar = function () {
    var __s19local0 = this.allianceInfoVO.getBoostLevel(this.buffVO.seriesID) / this.allianceInfoVO.getBoostMaxLevel(this.buffVO.seriesID);
    this.itemMc.mc_progress.mc_bar_full.scaleX = this.itemMc.mc_progress.mc_bar_middle.scaleX = this.itemMc.mc_progress.mc_bar_low.scaleX = __s19local0;
    this.itemMc.mc_progress.mc_bar_full.visible = __s19local0 < 0.2;
    this.itemMc.mc_progress.mc_bar_middle.visible = __s19local0 >= 0.2 && __s19local0 < 0.9;
    this.itemMc.mc_progress.mc_bar_low.visible = __s19local0 >= 0.9;
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.itemMc.btn_add:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ALLIANCE_BUY_BOOSTER_COMMAND, [__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO, this.buffVO.seriesID, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN]);
      }
    }
  };
  CastleAllianceDialogTreasuryBoosterItem_OneEffect.ASSET_CLIP_NAME = "CastleAlliance_Treasury_Item_Booster_OneEffect";
  return CastleAllianceDialogTreasuryBoosterItem_OneEffect;
}(require("gge-module:export_ACastleAllianceDialogTreasuryBoosterItem").ACastleAllianceDialogTreasuryBoosterItem);
exports.CastleAllianceDialogTreasuryBoosterItem_OneEffect = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
