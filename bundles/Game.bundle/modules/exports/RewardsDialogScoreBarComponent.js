Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function RewardsDialogScoreBarComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0, __s3param4) || this;
    if (__s3param1 && __s3param0.mc_iconContainer) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s3param0.mc_iconContainer);
      __s3param1.width = RewardsDialogScoreBarComponent.ICON_SIZE;
      __s3param1.scaleY = __s3param1.scaleX;
      __s3param0.mc_iconContainer.addChild(__s3param1);
    }
    if (__s3param2 && __s3param0.reward0.background) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s3param0.reward0.background);
      __s3param0.reward0.background.addChild(__s3param2);
      var __s3local1 = __s3local0.scorebarProperties.nextRewardTextColor;
      __s3param0.reward0.mc_text.tf_text.textColor = __s3local1 > -1 ? __s3local1 : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    __s3local0._onClickRewardOverviewFunction = __s3param3;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_rewardOverview);
    __s3local0.itxt_receivedRewards = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_receivedRewards, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_allRewards.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pointsEvent_scoreBar_allRewardsEarned")).autoFitToBounds = true;
    var __s3local2 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.btn_rewardOverview.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pointsEvent_scoreBar_rewardList"));
    __s3local2.autoFitToBounds = true;
    __s3local2.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_background_nextReward.txt_static_nextReward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pointsEvent_scoreBar_nextReward")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3param0.btn_rewardOverview.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClickRewardOverview));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardsDialogScoreBarComponent, __s1param0);
  RewardsDialogScoreBarComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.disp.btn_rewardOverview.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickRewardOverview));
  };
  RewardsDialogScoreBarComponent.prototype.onClickRewardOverview = function (__s9param0) {
    this._onClickRewardOverviewFunction();
  };
  RewardsDialogScoreBarComponent.prototype.updateThresholdRewards = function () {
    var __s11local0 = this.scorebarProperties.thresholdProgress(0, this.scoreBarProgress.pointThresholds, this.scoreBarProgress.ownPoints);
    var __s11local1 = this.scoreBarProgress.pointThresholds[this.scoreBarProgress.pointThresholds.length - 1] <= this.scoreBarProgress.ownPoints;
    if (!__s11local1) {
      this.updateReward(0, __s11local0);
    }
    if (this.scoreBarProgress.isAlliance) {
      this.disp.reward0.visible = !__s11local1 && this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      this.disp.mc_allRewards.visible = __s11local1 && this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      this.disp.mc_background_nextReward.visible = !__s11local1 || !this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      this.disp.mc_background_allRewards.visible = __s11local1 && this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
    } else {
      this.disp.reward0.visible = !__s11local1;
      this.disp.mc_allRewards.visible = __s11local1;
      this.disp.mc_background_nextReward.visible = !__s11local1;
      this.disp.mc_background_allRewards.visible = __s11local1;
    }
  };
  RewardsDialogScoreBarComponent.prototype.update = function (__s16param0) {
    if (__s16param0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this.scorebarProperties.getOwnPointsText(__s16param0.ownPoints));
      this.scoreBarProgress = __s16param0;
      if (this.itxt_receivedRewards && this.itxt_receivedRewards.textContentVO) {
        this.itxt_receivedRewards.textContentVO.textId = "dialog_pointsEvent_scoreBar_rewards";
        this.itxt_receivedRewards.textContentVO.textReplacements = [__s16param0.rewardsReceived, __s16param0.pointThresholds.length];
      }
      this.updateThresholdRewards();
      this.updateRankRewards();
      this.displayRewardList();
      this.setLabels();
      this.setDescriptions();
      this.updateQualifiedForRewardsInfo();
    }
  };
  RewardsDialogScoreBarComponent.prototype.updateQualifiedForRewardsInfo = function () {
    if (this.disp.info_not_qualified) {
      this.disp.info_not_qualified.visible = !this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.info_not_qualified.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_pointsEvent_scoreBar_allianceContest_notQualified", [this.scoreBarProgress.allianceRewardThresholdPoints]));
    }
  };
  RewardsDialogScoreBarComponent.__initialize_static_members = function () {
    RewardsDialogScoreBarComponent.ICON_SIZE = 36;
  };
  return RewardsDialogScoreBarComponent;
}(__dep_export_CastleScoreBarComponent.CastleScoreBarComponent);
exports.RewardsDialogScoreBarComponent = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
