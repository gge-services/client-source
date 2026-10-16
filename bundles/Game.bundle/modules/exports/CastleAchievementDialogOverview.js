Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleAchievementDialogOverview(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_totalProgress, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_achv_totalProgress"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_nextProgress, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_achv_progressNextReward"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_lastAchievements, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_achv_lastAchievements"));
    __s3local0.itxt_totalProgress_value = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_totalProgress_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [0]));
    __s3local0.itxt_nextProgress_value = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_nextProgress_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [0]));
    __s3local0.itxt_rewardAmount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.mc_rewards.txt_rewardAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_description = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_achv_desc"));
    __s3local0.sublayerDisp.mc_rewards.mc_symbolHolder_tooltip.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.SYMBOL;
    __s3local0.sublayerDisp.mc_rewards.mc_ruby_tooltip.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAchievementDialogOverview, __s1param0);
  CastleAchievementDialogOverview.prototype.show = function (__s5param0) {
    this.setProgress();
    this.setLastAchievements();
    __s1param0.prototype.show.call(this, __s5param0);
  };
  CastleAchievementDialogOverview.prototype.setProgress = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.castleAchievementData.calculateMainAchievementByAP();
    var __s7local1 = __dep_export_CastleModel.CastleModel.crestSymbolData.getCrestSymbolVOByID(__s7local0.rewards.getItemByType(__dep_export_CollectableEnum.CollectableEnum.CREST_SYMBOL).id);
    this.itxt_totalProgress_value.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.castleAchievementData.userProgressInPercent];
    this.itxt_nextProgress_value.textContentVO.textReplacements = [Math.min(Math.round(__s7local0.currentRelativeProgress() * 100), 100)];
    this.itxt_rewardAmount.textContentVO.numberValue = __s7local0.rewards.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_rewards.mc_symbolHolder);
    this.sublayerDisp.mc_rewards.mc_symbolHolder.addChild(__dep_export_CrestHelper.CrestHelper.getCrestSymbolGraphic(__s7local1, 45, 45, null));
    this.sublayerDisp.mc_rewards.mc_symbolHolder_tooltip.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_achv_crest", [__s7local1 ? __s7local1.toolTipText : ""]);
    var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.castleAchievementData.achievementPoints);
    this.sublayerDisp.mc_nextProgressBar.scaleX = Math.min(1, __s7local0.currentRelativeProgress());
    var __s7local3 = __s7local0.currentRelativeAchievementPoints() > __s7local0.requiredRelativeAchievementPoints();
    this.subLayerDisp.mc_rewards.visible = !__s7local3;
    this.sublayerDisp.mc_nextProgressBarOverlay.toolTipText = this.sublayerDisp.mc_nextProgressBar.toolTipText = __s7local3 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_achievement_progress_final_tooltip", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local0.currentRelativeAchievementPoints(), false), new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local0.requiredRelativeAchievementPoints(), false)]) : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_achv_progress_tooltip", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local0.currentRelativeAchievementPoints(), false), new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local0.requiredRelativeAchievementPoints(), false)]);
    this.sublayerDisp.mc_totalProgressBar.scaleX = Math.max(Math.min(__s7local2 / __dep_export_CastleModel.CastleModel.castleAchievementData.totalPossibleAchievementPoints, 1), 0);
    this.sublayerDisp.mc_totalProgressBarOverlay.toolTipText = this.sublayerDisp.mc_totalProgressBar.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_achv_progress_tooltip", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local2, false), new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.castleAchievementData.totalPossibleAchievementPoints, false)]);
  };
  CastleAchievementDialogOverview.prototype.setLastAchievements = function () {
    for (var __s9local0 = 0; __s9local0 < 3; ++__s9local0) {
      var __s9local1 = this.sublayerDisp["achv_item" + __s9local0];
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s9local1);
      if (__dep_export_CastleModel.CastleModel.castleAchievementData.lastThreeAchievementIDs[__s9local0] > 0) {
        var __s9local2 = __dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementByID(__dep_export_CastleModel.CastleModel.castleAchievementData.lastThreeAchievementIDs[__s9local0]);
        __s9local1.addChild(__s9local2.displayDisp);
        __s9local1.mouseChildren = false;
        __dep_exact_9e901e8e2483a22f_2.info("tooltip: " + __s9local2.achievementSerieVO.nameString + " " + __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [__s9local2.achievementSeriesNumber]));
        __s9local1.toolTipText = __s9local2.achievementSerieVO.nameString + " " + __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [__s9local2.achievementSeriesNumber]);
        __s9local1.mouseChildren = false;
        if (__s9local2.hasYellowBar && !__s9local2.achievementSerieVO.hideIconText) {
          this.sublayerDisp["itxt_achievement_value" + __s9local0] = this.textFieldManager.registerTextField(this.sublayerDisp["txt_achievement_value" + __s9local0], new __dep_exact_92d05af59ee2ff30_3.TextVO(__s9local2.achievementSerieVO.getYellowBarString(__s9local2.achievementSeriesNumber)));
        } else {
          this.sublayerDisp["itxt_achievement_value" + __s9local0] = this.textFieldManager.registerTextField(this.sublayerDisp["txt_achievement_value" + __s9local0], new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
        }
      } else {
        __s9local1.toolTipText = null;
        this.sublayerDisp["itxt_achievement_value" + __s9local0] = this.textFieldManager.registerTextField(this.sublayerDisp["txt_achievement_value" + __s9local0], new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
        __s9local1.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleAchievementDialogOverview.NO_ACHIEVEMENT_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleAchievementDialogOverview.NO_ACHIEVEMENT_NAME), null, 0, false).asDisplayObject());
      }
    }
  };
  Object.defineProperty(CastleAchievementDialogOverview.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementDialogOverview.__initialize_static_members = function () {
    CastleAchievementDialogOverview.NO_ACHIEVEMENT_NAME = "Achievement_0";
  };
  return CastleAchievementDialogOverview;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAchievementDialogOverview = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
