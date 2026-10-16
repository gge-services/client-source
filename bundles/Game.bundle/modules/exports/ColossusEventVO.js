Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleColossusEventDialogProperties = require("gge-module:export_CastleColossusEventDialogProperties");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_ColossusRankingItemVO = require("gge-module:export_ColossusRankingItemVO");
var __s0local0 = function (__s1param0) {
  function ColossusEventVO() {
    var __s3local0 = this;
    __s3local0._offsetRank = -1;
    __s3local0._ownPoints = 0;
    __s3local0._conversionRate = 0;
    __s3local0._hasHighestRank = false;
    __s3local0._lowestRankOnServer = 0;
    __s3local0._highestRankInList = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    __s3local0._lowestRankInList = 0;
    __s3local0._lastUpdateTimeStamp = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).initColossusModel();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ColossusEventVO, __s1param0);
  ColossusEventVO.prototype.initColossusModel = function () {
    this._ranking = new Map();
  };
  ColossusEventVO.prototype.updateRank = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4) {
    __dep_exact_26a421b704832cff_1.HighscoreConst.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS;
    if (__s7param1 < this._highestRankInList) {
      this._highestRankInList = __s7param1;
    }
    if (__s7param1 > this._lowestRankInList) {
      this._lowestRankInList = __s7param1;
    }
    if (!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._ranking, __s7param1)) {
      this._ranking.set(__s7param1, new __dep_export_ColossusRankingItemVO.ColossusRankingItemVO());
    }
    this._ranking.get(__s7param1).updateVO(__s7param1, __s7param2, __s7param3, __s7param4);
    this._lastUpdateTimeStamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
  };
  ColossusEventVO.prototype.getRankingEntryByRank = function (__s12param0) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._ranking, __s12param0)) {
      return this._ranking.get(__s12param0);
    } else {
      return null;
    }
  };
  ColossusEventVO.prototype.getRankingEntryByName = function (__s16param0) {
    if (this._ranking != null) {
      for (var __s16local0 = 0, __s16local1 = Array.from(this._ranking.values()); __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined && __s16local2.playerName.toLowerCase() == __s16param0.toLowerCase()) {
          return __s16local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(ColossusEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      if (this.isCoinColossusEvent()) {
        return ColossusEventVO.EVENT_COIN_BUILDING_WOD;
      } else if (this.isHorseColossusEvent()) {
        return ColossusEventVO.EVENT_HORSE_BUILDING_WOD;
      } else {
        return ColossusEventVO.EVENT_BUILDING_WOD;
      }
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      if (this.isCoinColossusEvent()) {
        return "eventBuilding_coinColossus";
      } else {
        return "eventBuilding_Colossus";
      }
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "offsetRank", {
    get: function () {
      return this._offsetRank;
    },
    set: function (__s37param0) {
      this._offsetRank = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "ownPoints", {
    get: function () {
      return this._ownPoints;
    },
    set: function (__s41param0) {
      this._ownPoints = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "hasHighestRank", {
    get: function () {
      return this._hasHighestRank;
    },
    set: function (__s45param0) {
      this._hasHighestRank = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  ColossusEventVO.prototype.openDialog = function (__s47param0 = true) {
    this.executeOpenDialog(__s47param0, __dep_export_CastleColossusEventDialog.CastleColossusEventDialog, new __dep_export_CastleColossusEventDialogProperties.CastleColossusEventDialogProperties(this));
  };
  Object.defineProperty(ColossusEventVO.prototype, "lowestRankOnServer", {
    get: function () {
      return this._lowestRankOnServer;
    },
    set: function (__s51param0) {
      this._lowestRankOnServer = __s51param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "highestRankInList", {
    get: function () {
      return this._highestRankInList;
    },
    set: function (__s55param0) {
      this._highestRankInList = __s55param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "lowestRankInList", {
    get: function () {
      return this._lowestRankInList;
    },
    set: function (__s59param0) {
      this._lowestRankInList = __s59param0;
    },
    enumerable: true,
    configurable: true
  });
  ColossusEventVO.prototype.clearRankingCache = function () {
    this._ranking = new Map();
    this._hasHighestRank = false;
    this._highestRankInList = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    this._lowestRankInList = 0;
    this._lowestRankOnServer = 0;
  };
  ColossusEventVO.prototype.clearRankingCacheOnTimeout = function () {
    if (!isNaN(this._lastUpdateTimeStamp)) {
      if (__dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer()) - this._lastUpdateTimeStamp > 15000) {
        this.clearRankingCache();
      }
    }
  };
  ColossusEventVO.prototype.getConversionRateForEvent = function () {
    if (this.isCoinColossusEvent()) {
      return ColossusEventVO.COIN_COLOSSUS_CONVERSION_RATE;
    } else {
      return ColossusEventVO.COLOSSUS_CONVERSION_RATE;
    }
  };
  ColossusEventVO.prototype.isCoinColossusEvent = function () {
    return this.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COIN_COLOSSUS;
  };
  ColossusEventVO.prototype.isHorseColossusEvent = function () {
    return this.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_HORSE_COLOSSUS;
  };
  ColossusEventVO.__initialize_static_members = function () {
    ColossusEventVO.COLOSSUS_CONVERSION_RATE = 0.01;
    ColossusEventVO.COIN_COLOSSUS_CONVERSION_RATE = 0.01093;
    ColossusEventVO.EVENT_BUILDING_WOD = 276;
    ColossusEventVO.EVENT_COIN_BUILDING_WOD = 57;
    ColossusEventVO.NUM_ENTRIES = 10;
  };
  ColossusEventVO.EVENT_HORSE_BUILDING_WOD = 2898;
  return ColossusEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.ColossusEventVO = __s0local0;
var __dep_export_CastleColossusEventDialog = require("gge-module:export_CastleColossusEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
