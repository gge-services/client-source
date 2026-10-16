Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleChestDialog = require("gge-module:export_CastleChestDialog");
var __dep_export_CastleMultiChestDialog = require("gge-module:export_CastleMultiChestDialog");
var __dep_export_CastlePrivateOfferDialogCreator = require("gge-module:export_CastlePrivateOfferDialogCreator");
var __dep_export_CastlePrivateOfferTimeChallengeDialog = require("gge-module:export_CastlePrivateOfferTimeChallengeDialog");
var __dep_export_CastlePrivatePrimeDayOfferDynamicDialog = require("gge-module:export_CastlePrivatePrimeDayOfferDynamicDialog");
var __dep_export_CastlePrivatePrimeTimeOfferDialog = require("gge-module:export_CastlePrivatePrimeTimeOfferDialog");
var __dep_export_CastlePrimeDayPODialog = require("gge-module:export_CastlePrimeDayPODialog");
var __dep_export_CastlePrimeDayPOSMSDialog = require("gge-module:export_CastlePrimeDayPOSMSDialog");
var __dep_export_CastlePrimeSaleDialog = require("gge-module:export_CastlePrimeSaleDialog");
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_AOfferHubItemStatusIcon = require("gge-module:export_AOfferHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconPrivateOffer(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._panelType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, StatusIconPrivateOffer.getButtonNameByType(__s3param0), new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE, {
      po: __s3param1,
      pt: __s3param3
    }) || this)._buttonType = __s3param0;
    __s3local0.verifyData();
    var __s3local1 = __s3local0._currentPrivateOfferVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_INTEGER_PLAYER_LEVEL + __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MIN);
    if (__s3local1 && __s3local1.conditionTextReplacements && __s3local1.conditionTextReplacements.length > 0) {
      __s3local0.setTooltip(__s3param2, [__s3local1.conditionTextReplacements[0]]);
    } else {
      __s3local0.setTooltip(__s3param2);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconPrivateOffer, __s1param0);
  StatusIconPrivateOffer.prototype.preInit = function (__s7param0 = null) {
    __s1param0.prototype.preInit.call(this, __s7param0);
    this._currentPrivateOfferVO = __s7param0.po;
    this._panelType = __dep_exact_f855840627e6e145.int(__s7param0.pt);
  };
  StatusIconPrivateOffer.getButtonNameByType = function (__s9param0) {
    switch (__s9param0) {
      case StatusIconPrivateOffer.NAME_ORIGINAL_BTN_PRIVATE_PRIME_TIME_OFFER:
        return StatusIconPrivateOffer.NAME_BTN_PRIVATE_PRIME_TIME_OFFER;
      default:
        return __s9param0;
    }
  };
  StatusIconPrivateOffer.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEvent));
  };
  StatusIconPrivateOffer.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEvent));
  };
  StatusIconPrivateOffer.prototype.onSpecialEvent = function (__s16param0) {
    this.setVisibility();
  };
  StatusIconPrivateOffer.prototype.verifyData = function () {
    if (!this._currentPrivateOfferVO) {
      throw new Error("StatusIconPrivateOffer StatusIcon is initialized without a private-offer");
    }
  };
  StatusIconPrivateOffer.prototype.initLoaded = function (__s21param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    if (this.iconDisp.barItem) {
      this.iconDisp.barItem.visible = false;
      if (this._currentPrivateOfferVO && this._currentPrivateOfferVO.isTimeDisplayedInPercentage) {
        this.iconDisp.barItem.visible = true;
      }
    }
  };
  StatusIconPrivateOffer.prototype.displayTimeInPercentage = function () {
    this.updateRemainingFromTimestamps(this._currentPrivateOfferVO.startTimestamp, this._currentPrivateOfferVO.endTimestamp);
  };
  StatusIconPrivateOffer.prototype.onOfferRemoved = function (__s27param0) {
    if (!__s27param0 || __s27param0.offerVO.id == this._currentPrivateOfferVO.id) {
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this._currentPrivateOfferVO = null;
      this.hide();
      var __s27local0 = __dep_exact_81dacdf05bd32292.castAs(this.layoutManager.getPanel(__dep_export_CastleStatusPanel.CastleStatusPanel), "CastleStatusPanel");
      if (__s27local0) {
        __s27local0.removeStatusIcon(this._panelType, this);
      }
    }
  };
  StatusIconPrivateOffer.prototype.onTimerUpdate = function (__s31param0 = null) {
    if (!this._currentPrivateOfferVO || this._currentPrivateOfferVO.id < 0) {
      this.onOfferRemoved(null);
    } else {
      if (this._currentPrivateOfferVO.remainingSeconds <= 0 && !this._currentPrivateOfferVO.hasInfiniteTime) {
        __dep_export_CastleModel.CastleModel.privateOfferData.sendCheckDuration(this._currentPrivateOfferVO.id);
      }
      if (this._currentPrivateOfferVO.hasInfiniteTime && this.itxt_label) {
        this.itxt_label.clearText();
      } else if (this._currentPrivateOfferVO.isTimeDisplayedInPercentage) {
        this.updateRemainingFromTimestamps(this._currentPrivateOfferVO.startTimestamp, this._currentPrivateOfferVO.endTimestamp);
      } else if (this.itxt_label) {
        this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._currentPrivateOfferVO.remainingSeconds);
      }
    }
  };
  StatusIconPrivateOffer.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrivateOffer.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrivateOffer.prototype.setVisibilityLoaded = function () {
    if (this._currentPrivateOfferVO) {
      var __s43local0;
      var __s43local1 = __dep_exact_81dacdf05bd32292.castAs(this._currentPrivateOfferVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var __s43local2 = __dep_exact_81dacdf05bd32292.castAs(this._currentPrivateOfferVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      var __s43local3 = this._currentPrivateOfferVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_INTERFACE_BUTTON);
      var __s43local4 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES), "PrimeSaleEventVO");
      if (__s43local4) {
        __s43local0 = __s43local4.primeSaleComponent;
      }
      if (__s43local1 && !__s43local1.primeSaleComponent.isAvailableInKingdom() || __s43local2 && !__s43local2.primeSaleComponent.isAvailableInKingdom() || __s43local1 && __s43local0 && __s43local0.wodID == __s43local1.primeSaleComponent.wodID && __s43local0.discount > __s43local1.primeSaleComponent.discount || __s43local3 && __s43local3.hiddenByABTest || this._currentPrivateOfferVO.isOneTimeOffer) {
        this.hide();
      } else {
        this.show();
      }
    } else {
      this.dispose();
    }
  };
  StatusIconPrivateOffer.prototype.onClick = function () {
    if (this.verifyOffer()) {
      var __s50local0 = __dep_exact_81dacdf05bd32292.castAs(this._currentPrivateOfferVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_CLIENT_TRACKING), "OfferDescriptionAdditionalClientTracking");
      if (__s50local0) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__s50local0.trackingKey, this._currentPrivateOfferVO.id));
      }
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, this._currentPrivateOfferVO);
    } else {
      this.onOfferRemoved(null);
    }
  };
  StatusIconPrivateOffer.prototype.showLoaded = function (__s55param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s55param0);
    this.onTimerUpdate();
  };
  Object.defineProperty(StatusIconPrivateOffer.prototype, "priority", {
    get: function () {
      if (this._currentPrivateOfferVO) {
        switch (__dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogName(this._currentPrivateOfferVO)) {
          case __dep_export_CastlePrivatePrimeTimeOfferDialog.CastlePrivatePrimeTimeOfferDialog.NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_PRIME_TIME;
          case __dep_export_CastlePrimeDayPODialog.CastlePrimeDayPODialog.NAME:
          case __dep_export_CastlePrimeDayPOSMSDialog.CastlePrimeDayPOSMSDialog.NAME:
          case __dep_export_CastlePrivatePrimeDayOfferDynamicDialog.CastlePrivatePrimeDayOfferDynamicDialog.OFFER_NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_PRIME_DAY;
          case __dep_export_CastleMultiChestDialog.CastleMultiChestDialog.NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_MULTIREWARD_CHEST;
          case __dep_export_CastleChestDialog.CastleChestDialog.NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_CHEST;
          case __dep_export_CastlePrimeSaleDialog.CastlePrimeSaleDialog.NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BUILDINGS;
          case __dep_export_CastlePrivateOfferTimeChallengeDialog.CastlePrivateOfferTimeChallengeDialog.NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_TIME_CHALLENGE;
          case __dep_export_CastlePrivateBestsellerShopDialog.CastlePrivateBestsellerShopDialog.OFFER_NAME:
            return __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_BESTSELLER_SHOP;
        }
      }
      return Object.getOwnPropertyDescriptor(__dep_export_ACastleStatusIcon.ACastleStatusIcon.prototype, "priority").get.call(this);
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AOfferHubItemStatusIcon.AOfferHubItemStatusIcon.prototype, "priority").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconPrivateOffer.prototype.verifyOffer = function () {
    return !!__dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(this._currentPrivateOfferVO.id);
  };
  StatusIconPrivateOffer.NAME_BTN_PRIVATE_PRIME_TIME_OFFER = "Btn_PrivatePrimeTimeOffer";
  StatusIconPrivateOffer.NAME_ORIGINAL_BTN_PRIVATE_PRIME_TIME_OFFER = "Btn_PrivatePrimeTimeOffer";
  return StatusIconPrivateOffer;
}(__dep_export_AOfferHubItemStatusIcon.AOfferHubItemStatusIcon);
exports.StatusIconPrivateOffer = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastlePrivateBestsellerShopDialog = require("gge-module:export_CastlePrivateBestsellerShopDialog");
