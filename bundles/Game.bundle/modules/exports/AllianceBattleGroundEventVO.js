Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TempServerRankRangeVO = require("gge-module:export_TempServerRankRangeVO");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function AllianceBattleGroundEventVO() {
    var __s3local0 = this;
    __s3local0._dailyResetTimeStamp = 0;
    __s3local0._timeToJoinTimeStamp = 0;
    __s3local0._castleBought = false;
    __s3local0.ownAllianceRank = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceBattleGroundEventVO, __s1param0);
  AllianceBattleGroundEventVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0.RD) {
      this._dailyResetTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0.RD * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
    if (__s5param0[__dep_exact_26a421b704832cff_2.CommKeys.REMAINING_JOIN_TIME]) {
      this._timeToJoinTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0[__dep_exact_26a421b704832cff_2.CommKeys.REMAINING_JOIN_TIME] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
    if (__s5param0.TSID != null) {
      this.settingVO = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getConfigVOByID(__s5param0.TSID);
    } else {
      this.settingVO = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getConfigVOByID(2);
    }
    if (__s5param0.IPS != null) {
      this._castleBought = __s5param0.IPS == 1;
    } else {
      this._castleBought = true;
    }
    if (__s5param0.MAS) {
      this.settingVO.maxAllianceSize = __dep_exact_f855840627e6e145.int(__s5param0.MAS);
    }
  };
  AllianceBattleGroundEventVO.prototype.parseOwnRanks = function (__s14param0) {
    this.ownAllianceRank = __dep_exact_f855840627e6e145.int(__s14param0.R);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleHighscoreEvent.CastleHighscoreEvent(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE));
  };
  AllianceBattleGroundEventVO.prototype.openDialog = function (__s16param0 = true) {
    var __s16local0 = this.getEventTeaserMessageVO();
    if (__s16local0 && !__s16local0.read) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, __s16local0);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog);
    }
  };
  AllianceBattleGroundEventVO.prototype.getEventTeaserMessageVO = function () {
    for (var __s20local0 = 0, __s20local1 = __dep_export_CastleModel.CastleModel.messageData.incomingMails; __s20local0 < __s20local1.length; __s20local0++) {
      var __s20local2 = __s20local1[__s20local0];
      if (__s20local2 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s20local2, "MessageSpecialEventVO")) {
        var __s20local3 = __s20local2;
        if (__s20local3 && __s20local3.subtypeEvent == __dep_exact_26a421b704832cff.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && __s20local3.additionalInformation[0] == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND) {
          return __s20local3;
        }
      }
    }
    return null;
  };
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_AllianceBattleGround";
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundEventVO.prototype.getAllianceRewardList = function () {
    this._allianceRewardList ||= __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getRewardsByRewardSetID(this.settingVO.allianceRewardSetID);
    this._allianceRewardList.sort(this.bindFunction(this.sortRewards));
    this.allianceRankRanges = this.updateRankRanges(this._allianceRewardList);
    return this._allianceRewardList;
  };
  AllianceBattleGroundEventVO.prototype.getIndividualRewardList = function () {
    this._individualRewardList ||= __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getRewardsByRewardSetID(this.settingVO.playerRewardSetID);
    this._individualRewardList.sort(this.bindFunction(this.sortRewards));
    this.individualRankRanges = this.updateRankRanges(this._individualRewardList);
    return this._individualRewardList;
  };
  AllianceBattleGroundEventVO.prototype.updateRankRanges = function (__s34param0) {
    var __s34local0 = [];
    for (var __s34local1 = 0; __s34local1 < __s34param0.length; __s34local1++) {
      var __s34local2 = new __dep_export_TempServerRankRangeVO.TempServerRankRangeVO();
      __s34local2.minRank = __dep_exact_f855840627e6e145.int(__s34param0[__s34local1].rank);
      __s34local2.maxRank = __s34local1 - 1 >= 0 ? __dep_exact_f855840627e6e145.int(__s34param0[__s34local1 - 1].rank + 1) : __s34local2.minRank;
      __s34local0.push(__s34local2);
    }
    return __s34local0;
  };
  AllianceBattleGroundEventVO.prototype.getRankRangeByRank = function (__s38param0, __s38param1) {
    for (var __s38local0 = 0, __s38local1 = __s38param1 ? this.allianceRankRanges : this.individualRankRanges; __s38local0 < __s38local1.length; __s38local0++) {
      var __s38local2 = __s38local1[__s38local0];
      if (__s38param0 <= __s38local2.minRank && __s38param0 >= __s38local2.maxRank) {
        return __s38local2;
      }
    }
    return null;
  };
  AllianceBattleGroundEventVO.prototype.sortRewards = function (__s43param0, __s43param1) {
    if (__s43param0.usePoints && !__s43param1.usePoints) {
      return 1;
    } else if (!__s43param0.usePoints && __s43param1.usePoints) {
      return -1;
    } else {
      return __s43param0.rank - __s43param1.rank;
    }
  };
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "remainingTimeInSecondsUntilDailyReset", {
    get: function () {
      return Math.max(0, (this._dailyResetTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "remainingTimeInSecondsUntilJoinBlock", {
    get: function () {
      return Math.max(0, (this._timeToJoinTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundEventVO.prototype, "castleBought", {
    get: function () {
      return this._castleBought;
    },
    set: function (__s54param0) {
      this._castleBought = __s54param0;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundEventVO.prototype.getMerchantProperties = function () {
    var __s56local0 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
    __s56local0.eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.settingVO.boosterCurrencyPackageID);
    __s56local0.specialEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ARMORER);
    var __s56local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s56local1.parseDataFromScrollItem(__s56local0);
    return __s56local1;
  };
  return AllianceBattleGroundEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.AllianceBattleGroundEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
