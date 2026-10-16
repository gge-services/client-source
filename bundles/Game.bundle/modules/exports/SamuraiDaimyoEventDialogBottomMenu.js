Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoEvent = require("gge-module:export_SamuraiDaimyoEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SeasonLeagueRewardOverviewDialogProperties = require("gge-module:export_SeasonLeagueRewardOverviewDialogProperties");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogBottomMenu(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogBottomMenu, __s1param0);
  SamuraiDaimyoEventDialogBottomMenu.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.btn_rewards, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.btn_rewards.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards"))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_samuraiInvasionDaimyo_rewards_desc")).autoFitToBounds = true;
    this.disp.mc_points.mouseChildren = false;
    this.disp.mc_rank.mouseChildren = false;
    this.disp.mc_points.toolTipText = "warEffortPoints";
    this.disp.mc_rank.toolTipText = "allianceRanking";
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.updateInfos(true);
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.requestGDW();
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onHide = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.onHide.call(this);
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.updateInfos = function (__s11param0 = false) {
    if (__s11param0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_points.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_points.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.ownHighscorePoints));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.ownHighscoreRank));
    }
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.disp.btn_rewards:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogs(__dep_export_SeasonLeagueRewardOverviewDialog.SeasonLeagueRewardOverviewDialog, new __dep_export_SeasonLeagueRewardOverviewDialogProperties.SeasonLeagueRewardOverviewDialogProperties(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getRewardOverviewItems(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION).allianceBarVO.rewardSetId), "dialog_samuraiInvasionDaimyo_allianceReward_header", "dialog_samuraiInvasionDaimyo_allianceReward_desc", "help_samuraiInvasionDaimyo_allianceReward"));
      }
    }
  };
  SamuraiDaimyoEventDialogBottomMenu.prototype.onDataUpdated = function (__s19param0) {
    this.updateInfos();
  };
  return SamuraiDaimyoEventDialogBottomMenu;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SamuraiDaimyoEventDialogBottomMenu = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SeasonLeagueRewardOverviewDialog = require("gge-module:export_SeasonLeagueRewardOverviewDialog");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
