Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_SeasonLeagueBuyPassConfirmDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmDialog");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_CollectableItemSeasonLeagueEventPassVO = require("gge-module:export_CollectableItemSeasonLeagueEventPassVO");
var __dep_export_CollectableItemUnlockAllPassVO = require("gge-module:export_CollectableItemUnlockAllPassVO");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_MicroServiceRequestPreloader = require("gge-module:export_MicroServiceRequestPreloader");
var __s0local1 = function (__s1param0) {
  function SeasonLeagueEndDialogRewardsEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.hasBoughtSeasonPassInThisDialog = false;
    __s3local0.hasBoughtEventPassInThisDialog = false;
    __s3local0.hasBoughtRewardHubPassInThisDialog = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEndDialogRewardsEvent, __s1param0);
  SeasonLeagueEndDialogRewardsEvent.prototype.reset = function () {
    this.hasBoughtSeasonPassInThisDialog = false;
    this.hasBoughtEventPassInThisDialog = false;
    this.hasBoughtRewardHubPassInThisDialog = false;
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onEventPassPurchased));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.add(this.bindFunction(this.onRewardHubPassPurchased));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_standardRewards_desc")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_bonusRewards_desc")));
    this.subLayerDisp.btn_buy.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.btn_buy.visible = !this.isPassActive;
    this.subLayerDisp.mc_item0.mc_overlay.visible = false;
    this.subLayerDisp.mc_item1.mc_overlay.visible = false;
    this.subLayerDisp.mc_item0.mc_background.visible = false;
    this.subLayerDisp.mc_item1.mc_background.visible = false;
    this.subLayerDisp.mc_items.mc_item0.mc_background.visible = false;
    this.subLayerDisp.mc_items.mc_item1.mc_background.visible = false;
    this.subLayerDisp.mc_item0.mc_left.visible = false;
    this.subLayerDisp.mc_item1.mc_left.visible = false;
    this.subLayerDisp.mc_items.mc_item0.mc_left.visible = false;
    this.subLayerDisp.mc_items.mc_item1.mc_left.visible = false;
    this.subLayerDisp.mc_item0.mc_right.visible = false;
    this.subLayerDisp.mc_item1.mc_right.visible = false;
    this.subLayerDisp.mc_items.mc_item0.mc_right.visible = false;
    this.subLayerDisp.mc_items.mc_item1.mc_right.visible = false;
    this.subLayerDisp.mc_items.mc_lock.toolTipText = "dialog_seasonLeague_infoSection_eventPassInactive_text";
    this.hasBoughtSeasonPassInThisDialog = false;
    this.hasBoughtRewardHubPassInThisDialog = false;
    this.updateRewards();
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onEventPassPurchased));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.remove(this.bindFunction(this.onRewardHubPassPurchased));
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (__s11param0.target == this.subLayerDisp.btn_buy) {
      if (this.dialogProperties.rewardHubVO) {
        var __s11local0 = new __dep_export_CollectableItemUnlockAllPassVO.CollectableItemUnlockAllPassVO();
        __s11local0.hubRewardIdsToUnlock = [this.dialogProperties.rewardHubVO.hubRewardID];
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(__s11local0, this.dialogProperties.rewardHubVO.extraTierUnlockCostC2, 0, -1, -1, -1, -1, __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_EVENT_END));
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeagueEventPassVO.CollectableItemSeasonLeagueEventPassVO(), __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassEventEndPrice, 0, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId, this.dialogProperties.eventId, this.dialogProperties.instanceID, this.dialogProperties.seasonID));
      }
    }
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.updateInfo = function () {
    __dep_export_MicroServiceRequestPreloader.MicroServiceRequestPreloader.hidePreloader();
    var __s16local0 = this.hasBoughtSeasonPassInThisDialog || this.dialogProperties.isSeasonPassEnabled ? "status_active" : "status_inactive";
    var __s16local1 = this.hasBoughtEventPassInThisDialog || this.dialogProperties.isEventPassEnabled ? "status_active" : "status_inactive";
    this.subLayerDisp.mc_help.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonLeague_promotionRanks_evenEndReward_tooltip", [__s16local0, __s16local1]);
    this.subLayerDisp.mc_help.visible = !this.dialogProperties.rewardHubVO;
    if (this.isPassActive) {
      this.subLayerDisp.mc_items.mc_item0.mc_overlay.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_items.mc_item1.mc_overlay.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_items.mc_item0.mc_background.visible = this.hasBoughtSeasonPassInThisDialog || this.hasBoughtEventPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_items.mc_item1.mc_background.visible = this.hasBoughtSeasonPassInThisDialog || this.hasBoughtEventPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.isRewardHubTierUnlocked;
      var __s16local2 = this.isRewardHubTierUnlocked ? 2 : 1;
      this.subLayerDisp.mc_items.mc_item0.mc_background.gotoAndStop(__s16local2);
      this.subLayerDisp.mc_items.mc_item1.mc_background.gotoAndStop(__s16local2);
      this.subLayerDisp.mc_items.mc_blockedBg.visible = false;
      this.subLayerDisp.mc_items.mc_lock.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.btn_buy.visible = !this.isRewardHubTierUnlocked;
      this.subLayerDisp.mc_check2.visible = this.isRewardHubTierUnlocked;
    } else {
      this.subLayerDisp.mc_items.mc_item0.mc_overlay.visible = true;
      this.subLayerDisp.mc_items.mc_item1.mc_overlay.visible = true;
      this.subLayerDisp.mc_items.mc_blockedBg.visible = false;
      this.subLayerDisp.mc_items.mc_lock.visible = false;
      this.subLayerDisp.btn_buy.visible = true;
      this.subLayerDisp.mc_check2.visible = false;
    }
    this.subLayerDisp.mc_items.mc_item0.mc_overlay.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.mc_items.mc_item0.mc_overlay.mouseChildren = false;
    this.subLayerDisp.mc_items.mc_item1.mc_overlay.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.mc_items.mc_item1.mc_overlay.mouseChildren = false;
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onPassPurchased = function (__s20param0 = null) {
    this.hasBoughtSeasonPassInThisDialog ||= true;
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onEventPassPurchased = function (__s22param0 = null) {
    this.hasBoughtEventPassInThisDialog ||= true;
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.onRewardHubPassPurchased = function (__s24param0 = null) {
    this.hasBoughtRewardHubPassInThisDialog ||= true;
    this.updateInfo();
  };
  SeasonLeagueEndDialogRewardsEvent.prototype.updateRewards = function () {
    var __s26local0 = this.dialogProperties.getPromotionRewardsVO();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s26local0.normalRewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s28param0) {
      __s28param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s28param0.itemVE && __s28param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp.mc_items, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s26local0.premiumRewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s30param0) {
      __s30param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s30param0.itemVE && __s30param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  Object.defineProperty(SeasonLeagueEndDialogRewardsEvent.prototype, "dialogProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogRewardsEvent.prototype, "isPassActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive || this.dialogProperties.isEventPassEnabled || this.hasBoughtSeasonPassInThisDialog || this.hasBoughtEventPassInThisDialog || this.hasBoughtRewardHubPassInThisDialog || this.isRewardHubTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogRewardsEvent.prototype, "isRewardHubTierUnlocked", {
    get: function () {
      return this.dialogProperties.rewardHubVO && this.dialogProperties.rewardHubVO.isExtraTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogRewardsEvent;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.SeasonLeagueEndDialogRewardsEvent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
