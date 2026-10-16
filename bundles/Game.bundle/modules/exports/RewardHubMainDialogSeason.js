Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ARewardHubDialogSublayer = require("gge-module:export_ARewardHubDialogSublayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardHubManageAllDialog = require("gge-module:export_RewardHubManageAllDialog");
var __dep_export_RewardHubManageAllDialogProperties = require("gge-module:export_RewardHubManageAllDialogProperties");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RewardHubMainDialogSeason(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubMainDialogSeason, __s1param0);
  RewardHubMainDialogSeason.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.mc_events.visible = false;
    this.subLayerDisp.mc_season.visible = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_season.btn_all.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_manageAll_button")));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_season.btn_all, __dep_export_CastleModel.CastleModel.rewardHubData.getAmountOfPendingRewards() > 0);
  };
  RewardHubMainDialogSeason.prototype.dataList = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_season.btn_all, __dep_export_CastleModel.CastleModel.rewardHubData.getAmountOfPendingRewards() > 0);
    this.updateTabButton(__dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.length);
    return __dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs;
  };
  RewardHubMainDialogSeason.prototype.updateTabButton = function (__s9param0) {
    this.parent.setSeasonAmount(__s9param0);
  };
  RewardHubMainDialogSeason.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target) && !this.isLoading) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.subLayerDisp.mc_season.btn_all:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RewardHubManageAllDialog.RewardHubManageAllDialog, new __dep_export_RewardHubManageAllDialogProperties.RewardHubManageAllDialogProperties());
      }
    }
  };
  return RewardHubMainDialogSeason;
}(__dep_export_ARewardHubDialogSublayer.ARewardHubDialogSublayer);
exports.RewardHubMainDialogSeason = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
