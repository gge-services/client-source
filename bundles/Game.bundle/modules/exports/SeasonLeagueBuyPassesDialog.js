Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueBuyPassesDialog() {
    return __s1param0.call(this, SeasonLeagueBuyPassesDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueBuyPassesDialog, __s1param0);
  SeasonLeagueBuyPassesDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.mc_bottom_season.mc_inactive.btn_buy, this.dialogDisp.mc_bottom_event.mc_inactive.btn_buy, this.dialogDisp.mc_bottom_promotion.mc_inactive.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  SeasonLeagueBuyPassesDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSeasonPassPriceInfoEventVO.C2SGetSeasonPassPriceInfoEventVO());
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onRefreshSpecialEvent));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_rewardPassHub_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("seasonLeague_seasonPass_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("seasonLeague_eventPass_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("seasonLeague_promotionPass_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("seasonLeague_seasonPass_short_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("seasonLeague_eventPass_short_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("seasonLeague_promotionPass_short_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1_1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_rewardPassHub_seasonPass_rewards_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_activeEvent.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eventEnd_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_activeEvent.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eventEnd_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_activeEvent.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eventEnd_colon"));
    this.updateInfos();
    this.updateSale();
    this.updateRewards();
  };
  SeasonLeagueBuyPassesDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onRefreshSpecialEvent));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  SeasonLeagueBuyPassesDialog.prototype.updateSale = function () {
    this.dialogDisp.mc_bottom_season.mc_inactive.mc_discount.visible = this.seasonPassSale > 0;
    this.dialogDisp.mc_bottom_event.mc_inactive.mc_discount.visible = this.dialogProps.useEventSale;
    this.dialogDisp.mc_bottom_promotion.mc_inactive.mc_discount.visible = this.isPromotionOnSale;
    if (this.seasonPassSale > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_inactive.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_subtract", [this.seasonPassSale])).autoFitToBounds = true;
    }
    if (this.dialogProps.useEventSale) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_inactive.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_subtract", [__dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount])).autoFitToBounds = true;
    }
    if (this.isPromotionOnSale) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_inactive.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_subtract", [__dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount])).autoFitToBounds = true;
    }
  };
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "isPromotionOnSale", {
    get: function () {
      return this.dialogProps.usePromotionSale || this.dialogProps.promotionID > __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "seasonPassSale", {
    get: function () {
      return Math.max(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.seasonPassDiscount, __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassFullDiscount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "eventPassPrice", {
    get: function () {
      if (this.dialogProps.useEventSale) {
        return __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassEventSalePrice;
      } else {
        return __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassEventEndPrice;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "promotionPassPrice", {
    get: function () {
      if (this.isPromotionOnSale) {
        return __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionSalePrice;
      } else {
        return __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "promotionPassActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(this.dialogProps.promotionID);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassesDialog.prototype.updateInfos = function () {
    __dep_export_MicroServiceRequestPreloader.MicroServiceRequestPreloader.hidePreloader();
    var __s30local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale());
    this.dialogDisp.mc_bottom_season.mc_inactive.visible = !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && __s30local0 > 0;
    this.dialogDisp.mc_bottom_event.mc_inactive.visible = !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive && !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && this.activeEventID > 0;
    this.dialogDisp.mc_bottom_promotion.mc_inactive.visible = !this.promotionPassActive && !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive && this.promotionRewards.length > 0;
    this.dialogDisp.mc_bottom_season.mc_activeEvent.visible = false;
    this.dialogDisp.mc_bottom_event.mc_activeEvent.visible = (__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive || __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive) && __dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive();
    this.dialogDisp.mc_bottom_promotion.mc_activeEvent.visible = false;
    this.dialogDisp.mc_bottom_season.mc_active.visible = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive;
    this.dialogDisp.mc_bottom_event.mc_active.visible = false;
    this.dialogDisp.mc_bottom_promotion.mc_active.visible = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive || this.promotionPassActive;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_inactive.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s30local0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_inactive.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.eventPassPrice)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_inactive.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.promotionPassPrice)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_season.mc_active.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rewardPass_condition_durationSeasonEnd_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_active.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(" "));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_promotion.mc_active.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rewardPass_condition_toNextPromotion_desc"));
    if (this.dialogDisp.mc_bottom_event.mc_activeEvent.visible) {
      var __s30local1 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
      var __s30local2 = __dep_exact_f855840627e6e145.int(__s30local1 ? __s30local1.remainingEventTimeInSeconds : -1);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_bottom_event.mc_activeEvent.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s30local2, __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY, 1))).autoFitToBounds = true;
    }
  };
  SeasonLeagueBuyPassesDialog.prototype.updateRewards = function () {
    var __s33local0 = new __dep_export_CollectableList.CollectableList();
    if (this.activeEventID > 0) {
      __s33local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(this.dialogProps.rewardSetID, this.activeEventID, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId, true);
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item1_").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s33local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s36param0) {
      __s36param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s36param0.itemVE && __s36param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_item2_").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), this.promotionRewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), function (__s38param0) {
      __s38param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s38param0.itemVE && __s38param0.itemVE.textfieldBackgroundVisible() ? 0 : 7;
    });
  };
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "activeEventID", {
    get: function () {
      if (this.dialogProps.eventID > 0) {
        return this.dialogProps.eventID;
      } else if (__dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
        return __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO().eventId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "promotionRewards", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotionRewards(this.dialogProps.rewardSetID, this.dialogProps.promotionID > 0 ? this.dialogProps.promotionID : __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id, true, this.dialogProps.leagueTypeID);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassesDialog.prototype.onClick = function (__s47param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s47param0.target)) {
      __s1param0.prototype.onClick.call(this, __s47param0);
      switch (__s47param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_bottom_season.mc_inactive.btn_buy:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeagueSeasonPassVO.CollectableItemSeasonLeagueSeasonPassVO(), __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale(), this.seasonPassSale, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId, this.activeEventID, this.dialogProps.instanceID));
          break;
        case this.dialogDisp.mc_bottom_event.mc_inactive.btn_buy:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeagueEventPassVO.CollectableItemSeasonLeagueEventPassVO(), this.eventPassPrice, this.dialogProps.useEventSale ? __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount : 0, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId, this.dialogProps.eventID, this.dialogProps.instanceID));
          break;
        case this.dialogDisp.mc_bottom_promotion.mc_inactive.btn_buy:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeaguePromotionPassVO.CollectableItemSeasonLeaguePromotionPassVO(), this.promotionPassPrice, this.dialogProps.usePromotionSale ? __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassSingleDiscount : 0, this.dialogProps.promotionID > -1 ? this.dialogProps.promotionID : __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId, this.activeEventID, this.dialogProps.instanceID));
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(" ", __dep_exact_92d05af59ee2ff30_3.Localize.text("help_seasonLeague_rewardPassHub"));
      }
    }
  };
  SeasonLeagueBuyPassesDialog.prototype.onTickEvent = function (__s51param0) {
    this.updateInfos();
  };
  SeasonLeagueBuyPassesDialog.prototype.onRefreshSpecialEvent = function (__s53param0) {
    this.updateSale();
    this.updateInfos();
  };
  Object.defineProperty(SeasonLeagueBuyPassesDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassesDialog.NAME = "SeasonLeagueBuyPasses";
  return SeasonLeagueBuyPassesDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeagueBuyPassesDialog = __s0local1;
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_C2SGetSeasonPassPriceInfoEventVO = require("gge-module:export_C2SGetSeasonPassPriceInfoEventVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SeasonLeagueBuyPassConfirmDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmDialog");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_CollectableItemSeasonLeagueSeasonPassVO = require("gge-module:export_CollectableItemSeasonLeagueSeasonPassVO");
var __dep_export_CollectableItemSeasonLeagueEventPassVO = require("gge-module:export_CollectableItemSeasonLeagueEventPassVO");
var __dep_export_CollectableItemSeasonLeaguePromotionPassVO = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVO");
var __dep_export_MicroServiceRequestPreloader = require("gge-module:export_MicroServiceRequestPreloader");
var __dep_export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmWithSeasonOptionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
