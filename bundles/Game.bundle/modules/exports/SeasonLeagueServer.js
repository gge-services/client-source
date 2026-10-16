Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SBuySeasonPassEventVO = require("gge-module:export_C2SBuySeasonPassEventVO");
var __dep_export_C2SGetSeasonInfoEventVO = require("gge-module:export_C2SGetSeasonInfoEventVO");
var __dep_export_C2SGetSeasonLeagueHighscoreEventVO = require("gge-module:export_C2SGetSeasonLeagueHighscoreEventVO");
var __dep_export_C2SSetSeasonEventStartSeenEventVO = require("gge-module:export_C2SSetSeasonEventStartSeenEventVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __s0local0 = function () {
  function SeasonLeagueServer() {
    this._divisionId = 0;
    this._divisionSize = 0;
    this._passSeasonActive = false;
    this._passEventActive = false;
    this._passPromotionBought = [];
    this._promotionId = 0;
    this._medalPoints = 0;
    this._nextMedalPayoutTimestamp = 0;
    this._seasonEventStartDialogSeen = false;
    this._seasonStartDialogSeen = false;
    this._playerSeasonEventRank = 0;
    this._playerSeasonRank = 0;
    this.seasonPassPrice = 0;
    this.seasonPassDiscount = 0;
    this.resetMedals();
  }
  SeasonLeagueServer.prototype.reset = function () {
    this._divisionId = 0;
    this._divisionSize = 0;
    this._passSeasonActive = false;
    this._passEventActive = false;
    this._passPromotionBought = [];
    this._promotionId = 0;
    this._medalPoints = 0;
    this._nextMedalPayoutTimestamp = 0;
    this._seasonEventStartDialogSeen = false;
    this._seasonStartDialogSeen = false;
    this.resetMedals();
  };
  SeasonLeagueServer.prototype.resetMedals = function () {
    this._playerMedals = new __dep_export_CollectableList.CollectableList();
    for (var __s7local0 = 0, __s7local1 = __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_IDS; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2 !== undefined) {
        this._playerMedals.addItem(new __dep_export_CollectableItemSeasonLeagueMedalVO.CollectableItemSeasonLeagueMedalVO(__s7local2, 0));
      }
    }
    this._allianceMedals = new __dep_export_CollectableList.CollectableList();
    for (var __s7local3 = 0, __s7local4 = __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_IDS; __s7local3 < __s7local4.length; __s7local3++) {
      __s7local2 = __s7local4[__s7local3];
      this._allianceMedals.addItem(new __dep_export_CollectableItemSeasonLeagueMedalVO.CollectableItemSeasonLeagueMedalVO(__s7local2, 0));
    }
  };
  SeasonLeagueServer.prototype.requestKLI = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSeasonInfoEventVO.C2SGetSeasonInfoEventVO());
  };
  SeasonLeagueServer.prototype.parseKLI = function (__s16param0) {
    this.parseDivisionInfo(__s16param0.KLD);
    this.parseMedalInfo(this._playerMedals, __s16param0.KLM);
    this.parseMedalInfo(this._allianceMedals, __s16param0.KLAM);
    this.parsePassInfo(__s16param0.KLSP);
    this.parseRankInfo(__s16param0.KLR);
    this.parseRemainingTimeInfo(__s16param0.RD);
    this.parseDialogInfo(__s16param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SeasonLeagueEvent.SeasonLeagueEvent(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED));
  };
  SeasonLeagueServer.prototype.parseSPP = function (__s18param0) {
    this.seasonPassPrice = __s18param0[__dep_exact_26a421b704832cff.CommKeys.COST_C2];
    this.seasonPassDiscount = __s18param0[__dep_exact_26a421b704832cff.CommKeys.DISCOUNT];
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SeasonLeagueEvent.SeasonLeagueEvent(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED));
  };
  SeasonLeagueServer.prototype.parseDivisionInfo = function (__s20param0) {
    if (__s20param0) {
      this._divisionId = __dep_exact_f855840627e6e145.int(__s20param0.KLDID);
      this._divisionSize = __dep_exact_f855840627e6e145.int(__s20param0.KLDS);
    }
  };
  SeasonLeagueServer.prototype.parseMedalInfo = function (__s23param0, __s23param1) {
    if (__s23param1 && __s23param1 != null) {
      for (var __s23local0 = 0, __s23local1 = __s23param1; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          var __s23local3 = __dep_exact_f855840627e6e145.int(__s23local2[0]);
          var __s23local4 = __dep_exact_f855840627e6e145.int(__s23local2[1]);
          var __s23local5 = __dep_exact_81dacdf05bd32292.castAs(__s23param0.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, __s23local3)), "CollectableItemSeasonLeagueMedalVO");
          if (__s23local5) {
            __s23local5.amount = __s23local4;
          } else {
            __dep_exact_9e901e8e2483a22f.error("SeasonLeagueServer.parseMedalInfo(): Id '" + __s23local3 + "' is unknown.");
          }
        }
      }
    }
  };
  SeasonLeagueServer.prototype.parsePassInfo = function (__s31param0) {
    if (__s31param0) {
      this._passSeasonActive = __s31param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_PASS_ENABLED] == 1;
      this._passEventActive = __s31param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_EVENT_PASS_ENABLED] == 1;
      this._passPromotionBought = __s31param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_PROMOTION_PASSES] ? __s31param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_PROMOTION_PASSES] : [];
    }
  };
  SeasonLeagueServer.prototype.boughtPromoPassForPromoID = function (__s34param0) {
    return this._passPromotionBought.indexOf(__s34param0) > -1;
  };
  Object.defineProperty(SeasonLeagueServer.prototype, "amountOfBoughtPromoPasses", {
    get: function () {
      return this._passPromotionBought.length;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueServer.prototype.parseRankInfo = function (__s38param0) {
    if (__s38param0) {
      this._promotionId = __dep_exact_f855840627e6e145.int(__s38param0.KLRID);
      this._medalPoints = __dep_exact_f855840627e6e145.int(__s38param0.KLMP);
    }
  };
  SeasonLeagueServer.prototype.parseRemainingTimeInfo = function (__s41param0) {
    if (__s41param0) {
      var __s41local0 = __dep_exact_f855840627e6e145.int(__s41param0);
      this._nextMedalPayoutTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s41local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
  };
  SeasonLeagueServer.prototype.parseDialogInfo = function (__s44param0) {
    if (__s44param0) {
      if (__s44param0.hasOwnProperty("KLSE")) {
        this._seasonEventStartDialogSeen = __s44param0.KLSE == 1;
      }
      if (__s44param0.hasOwnProperty("KLS")) {
        this._seasonStartDialogSeen = __s44param0.KLS == 1;
      }
    }
  };
  SeasonLeagueServer.prototype.requestKLH = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSeasonLeagueHighscoreEventVO.C2SGetSeasonLeagueHighscoreEventVO());
  };
  SeasonLeagueServer.prototype.parseKLH = function (__s51param0) {
    if (__s51param0) {
      if (__s51param0 != null) {
        for (var __s51local0 = 0, __s51local1 = __s51param0; __s51local0 < __s51local1.length; __s51local0++) {
          var __s51local2 = __s51local1[__s51local0];
          if (__s51local2 !== undefined) {
            var __s51local3 = __dep_exact_f855840627e6e145.int(__s51local2[0]);
            var __s51local4 = __dep_exact_f855840627e6e145.int(__s51local2[1]);
            switch (__s51local3) {
              case __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON:
                this._playerSeasonRank = __s51local4;
                break;
              case __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON_EVENT:
                this._playerSeasonEventRank = __s51local4;
            }
          }
        }
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SeasonLeagueEvent.SeasonLeagueEvent(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED));
    }
  };
  SeasonLeagueServer.prototype.requestKSS = function (__s59param0, __s59param1) {
    this._seasonEventStartDialogSeen = __s59param0;
    this._seasonStartDialogSeen = __s59param1;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetSeasonEventStartSeenEventVO.C2SSetSeasonEventStartSeenEventVO(__s59param0, __s59param1));
  };
  SeasonLeagueServer.prototype.requestKBP = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuySeasonPassEventVO.C2SBuySeasonPassEventVO());
  };
  SeasonLeagueServer.prototype.getPlayerMedalAmount = function (__s63param0) {
    var __s63local0 = this._playerMedals.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, __s63param0));
    return __dep_exact_f855840627e6e145.int(__s63local0 ? __s63local0.amount : 0);
  };
  SeasonLeagueServer.prototype.getAllianceMedalAmount = function (__s65param0) {
    var __s65local0 = this._allianceMedals.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, __s65param0));
    return __dep_exact_f855840627e6e145.int(__s65local0 ? __s65local0.amount : 0);
  };
  SeasonLeagueServer.prototype.getNextPayoutTimeInSec = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, (this.nextMedalPayoutTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC));
  };
  SeasonLeagueServer.prototype.hasAnyPlayerMedals = function () {
    for (var __s69local0 = 0, __s69local1 = this._playerMedals.list; __s69local0 < __s69local1.length; __s69local0++) {
      var __s69local2 = __s69local1[__s69local0];
      if (__s69local2 !== undefined && __s69local2 && __s69local2.amount > 0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(SeasonLeagueServer.prototype, "divisionId", {
    get: function () {
      return this._divisionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "divisionSize", {
    get: function () {
      return this._divisionSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "playerMedals", {
    get: function () {
      return this._playerMedals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "passSeasonActive", {
    get: function () {
      return this._passSeasonActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "passEventActive", {
    get: function () {
      return this._passEventActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "promotionId", {
    get: function () {
      return this._promotionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "medalPoints", {
    get: function () {
      return this._medalPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "seasonEventStartDialogSeen", {
    get: function () {
      return this._seasonEventStartDialogSeen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "nextMedalPayoutTimestamp", {
    get: function () {
      return this._nextMedalPayoutTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "playerSeasonEventRank", {
    get: function () {
      return this._playerSeasonEventRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "playerSeasonRank", {
    get: function () {
      return this._playerSeasonRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "seasonStartDialogSeen", {
    get: function () {
      return this._seasonStartDialogSeen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "allianceMedals", {
    get: function () {
      return this._allianceMedals;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueServer;
}();
exports.SeasonLeagueServer = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableItemSeasonLeagueMedalVO = require("gge-module:export_CollectableItemSeasonLeagueMedalVO");
