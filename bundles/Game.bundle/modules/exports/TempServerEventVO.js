Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = function (__s1param0) {
  function TempServerEventVO() {
    var __s3local0 = this;
    __s3local0._dailyResetTimeStamp = 0;
    __s3local0._castleBought = false;
    __s3local0.ownOverallRank = 0;
    __s3local0.ownOverallPoints = 0;
    __s3local0.ownDailyRank = 0;
    __s3local0.ownDailyPoints = 0;
    __s3local0._isCrossPlay = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TempServerEventVO, __s1param0);
  TempServerEventVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0.RD) {
      this._dailyResetTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0.RD * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
    if (__s5param0.TSID) {
      this.settingVO = __dep_export_CastleModel.CastleModel.tempServerData.getConfigVOByID(__s5param0.TSID);
    }
    if (__s5param0.IPS != null) {
      this._castleBought = __s5param0.IPS == 1;
    } else {
      this._castleBought = true;
    }
    if (__s5param0[__dep_exact_26a421b704832cff.CommKeys.IS_CROSSPLAY_SERVER_EVENT]) {
      this._isCrossPlay = __s5param0[__dep_exact_26a421b704832cff.CommKeys.IS_CROSSPLAY_SERVER_EVENT] == 1;
    }
  };
  TempServerEventVO.prototype.parseOwnRanks = function (__s12param0) {
    this.ownDailyPoints = __dep_exact_f855840627e6e145.int(__s12param0.DHS);
    this.ownDailyRank = __dep_exact_f855840627e6e145.int(Math.max(0, __s12param0.DR));
    this.ownOverallPoints = __dep_exact_f855840627e6e145.int(__s12param0.HS);
    this.ownOverallRank = __dep_exact_f855840627e6e145.int(Math.max(0, __s12param0.R));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleHighscoreEvent.CastleHighscoreEvent(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE));
  };
  TempServerEventVO.prototype.openDialog = function (__s14param0 = true) {
    var __s14local0 = this.getEventTeaserMessageVO();
    if (__s14local0 && !__s14local0.read) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, __s14local0);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleTemporaryServerEventDialog.CastleTemporaryServerEventDialog);
    }
  };
  TempServerEventVO.prototype.getMerchantProperties = function () {
    var __s18local0 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
    __s18local0.eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.settingVO.boosterCurrencyPackageID);
    __s18local0.specialEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ARMORER);
    var __s18local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s18local1.parseDataFromScrollItem(__s18local0);
    return __s18local1;
  };
  TempServerEventVO.prototype.getEventTeaserMessageVO = function () {
    for (var __s20local0 = 0, __s20local1 = __dep_export_CastleModel.CastleModel.messageData.incomingMails; __s20local0 < __s20local1.length; __s20local0++) {
      var __s20local2 = __s20local1[__s20local0];
      if (__s20local2 !== undefined && __dep_exact_81dacdf05bd32292.instanceOfClass(__s20local2, "MessageSpecialEventVO")) {
        var __s20local3 = __s20local2;
        if (__s20local3 && __s20local3.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && __s20local3.additionalInformation[0] == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_TEMPSERVER) {
          return __s20local3;
        }
      }
    }
    return null;
  };
  Object.defineProperty(TempServerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_TempServer";
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  TempServerEventVO.prototype.getRewardList = function () {
    this._rewardList ||= __dep_export_CastleModel.CastleModel.tempServerData.getRewardsByRewardSetID(this.settingVO.rewardSetID);
    this._rewardList.sort(this.bindFunction(this.sortRewards));
    return this._rewardList;
  };
  TempServerEventVO.prototype.sortRewards = function (__s32param0, __s32param1) {
    if (__s32param0.usePoints && !__s32param1.usePoints) {
      return -1;
    } else if (!__s32param0.usePoints && __s32param1.usePoints) {
      return 1;
    } else {
      return __s32param1.rank - __s32param0.rank;
    }
  };
  Object.defineProperty(TempServerEventVO.prototype, "remainingTimeInSecondsUntilDailyReset", {
    get: function () {
      return Math.max(0, (this._dailyResetTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "castleBought", {
    get: function () {
      return this._castleBought;
    },
    set: function (__s41param0) {
      this._castleBought = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isRankSwapScoring", {
    get: function () {
      return this.settingVO.scoringSystem == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isMightScoring", {
    get: function () {
      return this.settingVO.scoringSystem == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isCollectorScoring", {
    get: function () {
      return this.settingVO.scoringSystem == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerEventVO.prototype, "isCrossPlay", {
    get: function () {
      return this._isCrossPlay;
    },
    enumerable: true,
    configurable: true
  });
  return TempServerEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.TempServerEventVO = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTemporaryServerEventDialog = require("gge-module:export_CastleTemporaryServerEventDialog");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IEventOverviewable");
