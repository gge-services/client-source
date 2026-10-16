Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueMainDialogPromotion(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogPromotion, __s1param0);
  SeasonLeagueMainDialogPromotion.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_promotionRanks_header"))).autoFitToBounds = true;
    this._ranks = new __dep_export_SeasonLeagueMainDialogPromotionRanks.SeasonLeagueMainDialogPromotionRanks(this.subLayerDisp.mc_ranks);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_promotion.btn_buy, this.subLayerDisp.mc_event.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  SeasonLeagueMainDialogPromotion.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._ranks.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._ranks.onShow();
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogPromotion.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT, this.bindFunction(this.onSeasonInfoUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._ranks.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._ranks.onHide();
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogPromotion.prototype.updateAllInfos = function () {
    __dep_export_MicroServiceRequestPreloader.MicroServiceRequestPreloader.hidePreloader();
    this.updateRewards();
  };
  SeasonLeagueMainDialogPromotion.prototype.updateRewards = function () {
    var __s13local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(this._ranks.currentSelectedId).getNameTextId());
    var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getHighestPromotion().id);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this._ranks.currentSelectedId == __s13local1 ? "dialog_seasonLeague_promotionRanks_promotionRewardFinal_text" : "dialog_seasonLeague_promotionRanks_promotionReward_text", [__s13local0]))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_event.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_promotionRanks_evenEndReward_text", [__s13local0]))).autoFitToBounds = true;
    var __s13local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive ? "status_active" : "status_inactive");
    var __s13local3 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive ? "status_active" : "status_inactive");
    var __s13local4 = __dep_exact_92d05af59ee2ff30.Localize.text(this.promotionPassActive ? "status_active" : "status_inactive");
    this.subLayerDisp.mc_promotion.mc_info.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonLeague_promotionRanks_promotionReward_tooltip", [__s13local2, __s13local4]);
    this.subLayerDisp.mc_event.mc_info.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonLeague_promotionRanks_evenEndReward_tooltip", [__s13local2, __s13local3]);
    this.renderRewardColumn(this.subLayerDisp.mc_promotion, this.getCurrentPromotionRewardsVO(), false);
    this.renderRewardColumn(this.subLayerDisp.mc_event, this.getCurrentEventRewardsVO(), true);
  };
  Object.defineProperty(SeasonLeagueMainDialogPromotion.prototype, "promotionPassActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this._ranks.currentSelectedId);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogPromotion.prototype.renderRewardColumn = function (__s17param0, __s17param1, __s17param2) {
    __s17param0.mc_item0.mc_background.visible = false;
    __s17param0.mc_item0.mc_overlay.visible = false;
    __s17param0.mc_item1.mc_background.visible = false;
    __s17param0.mc_item1.mc_overlay.visible = false;
    __s17param0.mc_item0.mc_background_locked.visible = false;
    __s17param0.mc_item1.mc_background_locked.visible = false;
    this.renderRewards(__s17param1.normalRewards, __s17param0);
    this.renderRewards(__s17param1.premiumRewards, __s17param0.mc_premiumRewards);
    var __s17local0 = __s17param1.premiumRewards.length > 0;
    var __s17local1 = __s17param2 ? __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive : this.promotionPassActive;
    __s17param0.mc_check0.visible = __s17param1.hasCollectedNormal && __s17local0;
    __s17param0.mc_check1.visible = __s17param1.hasCollectedPremium && __s17local0;
    __s17param0.btn_buy.visible = !__s17param1.hasCollectedPremium && !__s17local1 && !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && __s17local0;
    __s17param0.btn_buy.toolTipText = "dialog_seasonLeague_infoSection_seasonPassPurchase_button";
    __s17param0.mc_promotionPass.visible = !__s17param2 && !__s17param1.hasCollectedPremium && __s17local1 && !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && __s17local0;
    __s17param0.mc_eventPass.visible = __s17param2 && !__s17param1.hasCollectedPremium && __s17local1 && !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && __s17local0;
    __s17param0.mc_seasonPass.visible = !__s17param1.hasCollectedPremium && __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && __s17local0;
    var __s17local2 = !__s17local1 && !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && __s17local0;
    __s17param0.mc_premiumRewards.mc_item0.mc_overlay.toolTipText = __s17param2 ? "dialog_seasonLeague_eventRewards_locked_tooltip" : "dialog_seasonLeague_promotionRewards_locked_tooltip";
    __s17param0.mc_premiumRewards.mc_item1.mc_overlay.toolTipText = __s17param2 ? "dialog_seasonLeague_eventRewards_locked_tooltip" : "dialog_seasonLeague_promotionRewards_locked_tooltip";
    __s17param0.mc_premiumRewards.mc_item0.mc_overlay.visible = __s17local2;
    __s17param0.mc_premiumRewards.mc_item0.mc_overlay.mouseChildren = false;
    __s17param0.mc_premiumRewards.mc_item1.mc_overlay.mouseChildren = false;
    __s17param0.mc_premiumRewards.mc_item0.mc_background_locked.visible = __s17local2;
    __s17param0.mc_premiumRewards.mc_item1.mc_background_locked.visible = __s17local2;
    __s17param0.mc_premiumRewards.mc_item1.mc_overlay.visible = __s17local2;
    __s17param0.mc_premiumRewards.mc_item0.mc_background.visible = (__s17local1 || __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive) && __s17local0;
    __s17param0.mc_premiumRewards.mc_item1.mc_background.visible = (__s17local1 || __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive) && __s17local0;
  };
  SeasonLeagueMainDialogPromotion.prototype.renderRewards = function (__s19param0, __s19param1) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s19param1, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s19param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s21param0) {
      __s21param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s21param0.itemVE && __s21param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  SeasonLeagueMainDialogPromotion.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    var __s23local0 = this._ranks.currentSelectedId > __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId;
    switch (__s23param0.target) {
      case this.subLayerDisp.mc_promotion.btn_buy:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeaguePromotionPassVO.CollectableItemSeasonLeaguePromotionPassVO(), __s23local0 ? __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionSalePrice : __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice, __s23local0 ? __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount : 0, this._ranks.currentSelectedId, -1, -1));
        break;
      case this.subLayerDisp.mc_event.btn_buy:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeagueEventPassVO.CollectableItemSeasonLeagueEventPassVO(), __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassEventSalePrice, __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount, this._ranks.currentSelectedId, -1, -1));
    }
  };
  SeasonLeagueMainDialogPromotion.prototype.getCurrentPromotionRewardsVO = function () {
    var __s26local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId);
    var __s26local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId);
    var __s26local2 = this._ranks.currentSelectedId;
    var __s26local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID);
    var __s26local4 = new __dep_export_SeasonLeaguePromotionRewardsComponentVO.SeasonLeaguePromotionRewardsComponentVO();
    __s26local4.normalRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotionRewards(__s26local0, __s26local2, false, __s26local3);
    __s26local4.premiumRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotionRewards(__s26local0, __s26local2, true, __s26local3);
    __s26local4.hasCollectedNormal = __s26local2 <= __s26local1;
    __s26local4.hasCollectedPremium = __s26local4.hasCollectedNormal && (__dep_export_CastleModel.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this._ranks.currentSelectedId) || __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive);
    __s26local4.isUnlocked = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive;
    return __s26local4;
  };
  SeasonLeagueMainDialogPromotion.prototype.getCurrentEventRewardsVO = function () {
    var __s28local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId);
    var __s28local1 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    var __s28local2 = __dep_exact_f855840627e6e145.int(__s28local1 ? __s28local1.eventId : -1);
    var __s28local3 = this._ranks.currentSelectedId;
    var __s28local4 = new __dep_export_SeasonLeaguePromotionRewardsComponentVO.SeasonLeaguePromotionRewardsComponentVO();
    __s28local4.normalRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(__s28local0, __s28local2, __s28local3, false);
    __s28local4.premiumRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(__s28local0, __s28local2, __s28local3, true);
    __s28local4.hasCollectedNormal = false;
    __s28local4.hasCollectedPremium = false;
    __s28local4.isUnlocked = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive;
    return __s28local4;
  };
  SeasonLeagueMainDialogPromotion.prototype.onSeasonInfoUpdated = function (__s30param0) {
    this.updateAllInfos();
    this._ranks.update();
  };
  SeasonLeagueMainDialogPromotion.prototype.onRemoveEvent = function (__s32param0) {
    if (__s32param0.specialEventVO.seasonLeague.isModeEnabled) {
      this.updateAllInfos();
    }
  };
  SeasonLeagueMainDialogPromotion.prototype.onSelectionChanged = function () {
    this.updateRewards();
  };
  return SeasonLeagueMainDialogPromotion;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.SeasonLeagueMainDialogPromotion = __s0local1;
var __dep_export_SeasonLeaguePromotionRewardsComponentVO = require("gge-module:export_SeasonLeaguePromotionRewardsComponentVO");
var __dep_export_SeasonLeagueMainDialogPromotionRanks = require("gge-module:export_SeasonLeagueMainDialogPromotionRanks");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_CollectableItemSeasonLeaguePromotionPassVO = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVO");
var __dep_export_CollectableItemSeasonLeagueEventPassVO = require("gge-module:export_CollectableItemSeasonLeagueEventPassVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_MicroServiceRequestPreloader = require("gge-module:export_MicroServiceRequestPreloader");
var __dep_export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
