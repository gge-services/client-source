Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemSeasonLeagueSeasonPassVO = require("gge-module:export_CollectableItemSeasonLeagueSeasonPassVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CollectableItemSeasonLeagueEventPassVO = require("gge-module:export_CollectableItemSeasonLeagueEventPassVO");
var __dep_export_CollectableItemSeasonLeaguePromotionPassVO = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVO");
var __dep_export_ConfirmC2Dialog = require("gge-module:export_ConfirmC2Dialog");
var __dep_export_ConfirmC2DialogProperties = require("gge-module:export_ConfirmC2DialogProperties");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_C2SBuySeasonPassEventVO = require("gge-module:export_C2SBuySeasonPassEventVO");
var __dep_export_C2SBuySeasonPassEventEventVO = require("gge-module:export_C2SBuySeasonPassEventEventVO");
var __dep_export_C2SBuySeasonPassPromotionEventVO = require("gge-module:export_C2SBuySeasonPassPromotionEventVO");
var __dep_export_CollectableItemUnlockAllPassVO = require("gge-module:export_CollectableItemUnlockAllPassVO");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
var __dep_export_MicroServiceRequestPreloader = require("gge-module:export_MicroServiceRequestPreloader");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = createjs.Point;
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __s0local1 = function (__s1param0) {
  function SeasonLeagueBuyPassConfirmDialog(__s3param0 = null) {
    return __s1param0.call(this, __s3param0 || SeasonLeagueBuyPassConfirmDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueBuyPassConfirmDialog, __s1param0);
  SeasonLeagueBuyPassConfirmDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("buy")));
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onBoughtSeason));
    this.updateCollectables();
    this.updateSale();
    this.updateInfos();
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onBoughtSeason));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.updateCollectables = function () {
    this.destroyCollectableRenderList();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_reward).addInfoBtn(this.dialogDisp.btn_info), this.dialogProps.pass, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(136, 132)));
    var __s11local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(44, 35));
    __s11local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_cost), new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.dialogProps.price), __s11local0);
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.updateSale = function () {
    if (this.dialogProps.discountPercent > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage_subtract", [this.dialogProps.discountPercent])).autoFitToBounds = true;
    }
    this.dialogDisp.mc_discount.visible = this.dialogProps.discountPercent > 0;
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.updateInfos = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO();
    var __s16local1 = __dep_exact_f855840627e6e145.int(__s16local0 ? __s16local0.remainingEventTimeInSeconds : -1);
    var __s16local2 = this.dialogProps.price;
    var __s16local3 = "";
    if (this.dialogProps.pass instanceof __dep_export_CollectableItemSeasonLeagueSeasonPassVO.CollectableItemSeasonLeagueSeasonPassVO) {
      __s16local3 = "dialog_seasonLeague_seasonPass_purchase_copy";
    } else if (this.dialogProps.pass instanceof __dep_export_CollectableItemSeasonLeagueEventPassVO.CollectableItemSeasonLeagueEventPassVO) {
      __s16local3 = "dialog_seasonLeague_eventPass_purchase_copy";
    } else if (this.dialogProps.pass instanceof __dep_export_CollectableItemSeasonLeaguePromotionPassVO.CollectableItemSeasonLeaguePromotionPassVO) {
      __s16local3 = "dialog_seasonLeague_promotionPass_purchase_copy";
    } else if (this.dialogProps.pass instanceof __dep_export_CollectableItemUnlockAllPassVO.CollectableItemUnlockAllPassVO) {
      switch (this.dialogProps.source) {
        case __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_PROMOTION:
          __s16local3 = "dialog_rewardHub_unlockPromotionReward_rewardPasses_desc";
          break;
        case __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_EVENT_END:
          __s16local3 = "dialog_rewardHub_unlockEventEndRewards_rewardPasses_desc";
          break;
        case __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_ALL:
        default:
          __s16local3 = "dialog_rewardHub_unlockAll_rewardPasses_desc";
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s16local3, [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s16local1, __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY, 1)])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s16local2)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costs, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialoge_shapeshifter_Travel_title")).autoFitToBounds = true;
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onClick = function (__s23param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      __s1param0.prototype.onClick.call(this, __s23param0);
      switch (__s23param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          if (this.dialogProps.pass instanceof __dep_export_CollectableItemSeasonLeagueSeasonPassVO.CollectableItemSeasonLeagueSeasonPassVO) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuySeasonPassEventVO.C2SBuySeasonPassEventVO());
          } else if (this.dialogProps.pass instanceof __dep_export_CollectableItemSeasonLeagueEventPassVO.CollectableItemSeasonLeagueEventPassVO) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuySeasonPassEventEventVO.C2SBuySeasonPassEventEventVO(this.dialogProps.eventID, this.dialogProps.instanceID));
          } else if (this.dialogProps.pass instanceof __dep_export_CollectableItemSeasonLeaguePromotionPassVO.CollectableItemSeasonLeaguePromotionPassVO) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuySeasonPassPromotionEventVO.C2SBuySeasonPassPromotionEventVO(this.dialogProps.rankID, this.dialogProps.seasonID));
          } else if (this.dialogProps.pass instanceof __dep_export_CollectableItemUnlockAllPassVO.CollectableItemUnlockAllPassVO) {
            this.buyUnlockAllPass();
          }
          __dep_export_MicroServiceRequestPreloader.MicroServiceRequestPreloader.showPreloader(new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), 5000);
          this.hide();
      }
    }
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.buyUnlockAllPass = function () {
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.dialogProps.price) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    } else {
      var __s31local0 = {
        rewardIdsToUnlock: this.dialogProps.pass.hubRewardIdsToUnlock,
        price: this.dialogProps.price
      };
      if (__dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold > 0 && this.dialogProps.price >= __dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ConfirmC2Dialog.ConfirmC2Dialog, new __dep_export_ConfirmC2DialogProperties.ConfirmC2DialogProperties(this.dialogProps.price, null, __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal, __s31local0));
      } else {
        __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal.dispatch(__s31local0);
      }
    }
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onTickEvent = function (__s37param0) {
    this.updateInfos();
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onRefreshSpecialEvent = function (__s39param0) {
    this.updateSale();
    this.updateInfos();
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onBoughtSeason = function (__s41param0) {
    this.hide();
  };
  Object.defineProperty(SeasonLeagueBuyPassConfirmDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassConfirmDialog.NAME = "SeasonLeaguePassBuyConfirm";
  return SeasonLeagueBuyPassConfirmDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeagueBuyPassConfirmDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
