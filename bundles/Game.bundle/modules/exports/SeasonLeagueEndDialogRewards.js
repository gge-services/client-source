Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_SeasonLeaguePromotionRewardsComponent = require("gge-module:export_SeasonLeaguePromotionRewardsComponent");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueEndDialogRewards(__s3param0) {
    var __s3local0 = this;
    __s3local0._hasBoughtSeasonPassInThisDialog = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEndDialogRewards, __s1param0);
  SeasonLeagueEndDialogRewards.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_noRewards.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_seasonEnd_rewards_notQualified_text")).autoFitToBounds = true;
    this._promotionRewards = new __dep_export_SeasonLeaguePromotionRewardsComponent.SeasonLeaguePromotionRewardsComponent(this.subLayerDisp);
  };
  SeasonLeagueEndDialogRewards.prototype.reset = function () {
    this._hasBoughtSeasonPassInThisDialog = false;
  };
  SeasonLeagueEndDialogRewards.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    this._promotionRewards.onShow();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_locked, true);
    this.subLayerDisp.btn_locked.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this._promotionRewards.updateWithNewData(this.dialogProperties.getPromotionRewardsVO(), this.dialogProperties.promotionVO.id, this.dialogProperties.seasonID);
    this.updateInfo();
    this.updateRewardPassButton();
  };
  SeasonLeagueEndDialogRewards.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    this._promotionRewards.onHide();
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueEndDialogRewards.prototype.updateInfo = function () {
    var __s13local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.isSeasonPassEnabled || this._hasBoughtSeasonPassInThisDialog ? "status_active" : "status_inactive");
    var __s13local1 = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.isEventPassEnabled || this._hasBoughtSeasonPassInThisDialog ? "status_active" : "status_inactive");
    var __s13local2 = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.isPromotionPassEnabled || this._hasBoughtSeasonPassInThisDialog ? "status_active" : "status_inactive");
    var __s13local3 = this.dialogProperties.isSeasonEventEndDialog ? "dialog_seasonLeague_promotionRanks_evenEndReward_tooltip" : "dialog_seasonLeague_seasonRanking_seasonRewards_tooltip";
    var __s13local4 = this.dialogProperties.isSeasonEventEndDialog ? [__s13local0, __s13local1] : [__s13local0, __s13local2];
    this.subLayerDisp.mc_info.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(__s13local3, __s13local4);
    this.subLayerDisp.mc_noRewards.visible = this._promotionRewards.vo.getNumberOfRewards() <= 0;
  };
  SeasonLeagueEndDialogRewards.prototype.updateRewardPassButton = function () {
    var __s15local0;
    this.subLayerDisp.btn_locked.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.btn_locked.visible = this.subLayerDisp.btn_locked.visible && !this._hasBoughtSeasonPassInThisDialog;
    for (var __s15local1 = 0; __s15local0 = this.subLayerDisp.getChildByName("mc_item" + __s15local1); ++__s15local1) {
      __s15local0.mc_overlay.toolTipText = this._hasBoughtSeasonPassInThisDialog ? "dialog_seasonLeague_seasonPass_inactiveState_eventEnd_tooltip" : "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
      __s15local0.mc_overlay.mouseChildren = false;
    }
  };
  SeasonLeagueEndDialogRewards.prototype.onPassPurchased = function (__s19param0) {
    this._hasBoughtSeasonPassInThisDialog = true;
    this.updateRewardPassButton();
  };
  Object.defineProperty(SeasonLeagueEndDialogRewards.prototype, "dialogProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogRewards.prototype, "hasBoughtSeasonPassInThisDialog", {
    get: function () {
      return this._hasBoughtSeasonPassInThisDialog;
    },
    set: function (__s25param0) {
      this._hasBoughtSeasonPassInThisDialog = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogRewards;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.SeasonLeagueEndDialogRewards = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
