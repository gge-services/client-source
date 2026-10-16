Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ItemCenterAlignComponent = require("gge-module:export_ItemCenterAlignComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function ModernGenericRewardDialog(__s3param0 = null) {
    return __s1param0.call(this, __s3param0 || ModernGenericRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernGenericRewardDialog, __s1param0);
  ModernGenericRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.dialogDisp.mc_items, true, true, 7);
    this._rewardAlign = new __dep_export_ItemCenterAlignComponent.ItemCenterAlignComponent(this.dialogDisp.mc_items, "mc_item", true);
  };
  ModernGenericRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._rewards.onShow();
    this.updateRewards();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProps.copy)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title))).autoFitToBounds = true;
  };
  ModernGenericRewardDialog.prototype.hide = function () {
    this._rewards.onHide();
    __s1param0.prototype.hide.call(this);
  };
  ModernGenericRewardDialog.prototype.updateRewards = function () {
    this._rewardAlign.align(this.dialogProps.rewardList.length);
    this._rewards.updateWithNewData(this.dialogProps.rewardList);
  };
  ModernGenericRewardDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        if (this.dialogProps.additionalInfo && __dep_exact_81dacdf05bd32292.instanceOfClass(this.dialogProps.additionalInfo, "RewardHubVO")) {
          __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch([this.dialogProps.additionalInfo.hubRewardID]);
        }
        this.hide();
    }
  };
  Object.defineProperty(ModernGenericRewardDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernGenericRewardDialog.NAME = "SeasonLeaguePassGained";
  return ModernGenericRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ModernGenericRewardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
