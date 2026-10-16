Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __dep_export_CastleSplitRunData = require("gge-module:export_CastleSplitRunData");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_export_MinWorldMapCastleInfoVO = require("gge-module:export_MinWorldMapCastleInfoVO");
var __s0local0 = function () {
  function WorldMapOwnerInfoVO() {
    this._playerID = 0;
    this._playerLevel = 0;
    this._playerLegendLevel = 0;
    this._remainingNoobTime = 0;
    this._noobTimeOffset = 0;
    this._remainingPeaceTime = 0;
    this._peaceTimeOffset = 0;
    this._honor = 0;
    this._might = 0;
    this._isRuin = false;
    this._allianceID = -1;
    this._allianceRank = 0;
    this._allianceName = "";
    this._isSearchingAlliance = false;
    this._isDungeonOwner = false;
    this._isKingstowerOwner = false;
    this._isMonumentOwner = false;
    this._isShareableDungeon = false;
    this._isOutpostOwner = false;
    this._castlePosList = [];
    this._villagePosList = [];
    this._hasPremiumFlag = false;
    this._hasVIPFlag = false;
    this._isDummy = false;
    this._achievementPoints = 0;
    this._relocateDurationEndTimestamp = 0;
    this._factionID = 0;
    this._factionProtectionStatus = 0;
    this._factionProtectionEndTime = 0;
    this._factionTitleID = 0;
    this._topX = 0;
    this._viaReferAFriend = false;
    this._splitRunData = new __dep_export_CastleSplitRunData.CastleSplitRunData(this);
  }
  WorldMapOwnerInfoVO.createDummy = function (__s5param0 = 0, __s5param1 = false) {
    var __s5local0 = new WorldMapOwnerInfoVO();
    __s5local0._playerID = __s5param0;
    __s5local0._crest = __dep_export_CrestVO.CrestVO.createDummyCrest();
    __s5local0._playerName = "";
    __s5local0._isDummy = true;
    __s5local0._isRuin = __s5param1;
    return __s5local0;
  };
  WorldMapOwnerInfoVO.prototype.fillFromParamObject = function (__s7param0, __s7param1 = -1) {
    this._playerID = parseInt(__s7param0.OID);
    this.playerName = __s7param0.N;
    this._crest = new __dep_export_CrestVO.CrestVO();
    this._crest.loadFromParamObject(__s7param0.E);
    this._playerLevel = parseInt(__s7param0.L);
    this._playerLegendLevel = parseInt(__s7param0.LL);
    this._remainingNoobTime = parseInt(__s7param0.RNP);
    this._honor = parseInt(__s7param0.H);
    this._might = parseInt(__s7param0.MP);
    this._topX = parseInt(__s7param0.TOPX);
    this._isRuin = parseInt(__s7param0.R) == 1;
    this._allianceID = parseInt(__s7param0.AID);
    this._allianceRank = parseInt(__s7param0.AR);
    this._allianceName = __s7param0.AN ? __s7param0.AN : "";
    this._isSearchingAlliance = !!__s7param0.SA;
    this._remainingPeaceTime = parseInt(__s7param0.RPT);
    this._noobTimeOffset = __dep_exact_f855840627e6e145.int(this._peaceTimeOffset = __dep_exact_f855840627e6e145.int(__s7param1));
    this._castlePosList = WorldMapOwnerInfoVO.parsePosList(__s7param0.AP);
    this._villagePosList = WorldMapOwnerInfoVO.parsePosList(__s7param0.VP);
    this._hasPremiumFlag = !!__s7param0.PF;
    this._hasVIPFlag = !!__s7param0.VF;
    this._isDummy = __s7param0.DUM == 1;
    this._achievementPoints = parseInt(__s7param0.AVP);
    this._relocateDurationEndTimestamp = Math.max(0, __s7param1 + parseInt(__s7param0.RRD) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    if (__s7param0.FN) {
      this._factionID = parseInt(__s7param0.FN.FID);
      this._factionProtectionStatus = parseInt(__s7param0.FN.PMS);
      this._factionProtectionEndTime = parseInt(__s7param0.FN.PMT) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC + __s7param1;
      this._factionTitleID = parseInt(__s7param0.FN.TID);
    }
    this._allianceCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    if (this.isInAlliance && __s7param0.aee && __s7param0.aee.ACCA) {
      this._allianceCrestVO.fillWithData(__s7param0.aee.ACCA);
    }
    this._playerSuffix = null;
    this._playerPrefix = null;
    if (__s7param0.hasOwnProperty("SUF")) {
      this._playerSuffix = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s7param0.SUF);
    }
    if (__s7param0.hasOwnProperty("PRE")) {
      this._playerPrefix = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s7param0.PRE);
    }
    this._viaReferAFriend = !!parseInt(__s7param0.IRF);
  };
  WorldMapOwnerInfoVO.parsePosList = function (__s13param0) {
    var __s13local0 = [];
    var __s13local1 = __s13param0;
    if (__s13local1) {
      var __s13local2;
      for (var __s13local3 = 0; __s13local3 < __s13local1.length; ++__s13local3) {
        (__s13local2 = new __dep_export_MinWorldMapCastleInfoVO.MinWorldMapCastleInfoVO()).fillFromParamObject(__s13local1[__s13local3]);
        __s13local0.push(__s13local2);
      }
    }
    return __s13local0;
  };
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingFactionProtectionTimeInSeconds", {
    get: function () {
      return Math.max((this._factionProtectionEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingNoobTime", {
    get: function () {
      return this._remainingNoobTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 - this._noobTimeOffset / 1000);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingPeaceTime", {
    get: function () {
      return this._remainingPeaceTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 - this._peaceTimeOffset / 1000);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isNoobProtected", {
    get: function () {
      return this.remainingNoobTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isPeaceProtected", {
    get: function () {
      return this.remainingPeaceTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isFactionProtected", {
    get: function () {
      return this.remainingFactionProtectionTimeInSeconds > 0 && this._factionProtectionStatus == __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceID", {
    get: function () {
      return this._allianceID;
    },
    set: function (__s32param0) {
      this._allianceID = __s32param0;
      if (!this.isInAlliance) {
        this._allianceCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isRuin", {
    get: function () {
      return this._isRuin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "honor", {
    get: function () {
      return this._honor;
    },
    set: function (__s41param0) {
      this._honor = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerLevel", {
    get: function () {
      return this._playerLevel;
    },
    set: function (__s45param0) {
      this._playerLevel = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "crest", {
    get: function () {
      return this._crest;
    },
    set: function (__s49param0) {
      this._crest = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerName", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_PlayerHelper.PlayerHelper.isEmptyMapObjectOwner(this.playerID)) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dungeon_playerName"));
      } else {
        return this._playerName || "";
      }
    },
    set: function (__s55param0) {
      this._playerName = __s55param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    set: function (__s59param0) {
      this._playerID = __s59param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isInAlliance", {
    get: function () {
      return this._allianceID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceName", {
    get: function () {
      if (this._allianceName) {
        return this._allianceName;
      } else {
        return "";
      }
    },
    set: function (__s67param0) {
      this._allianceName = __s67param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "castlePosList", {
    get: function () {
      return this._castlePosList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerPrefix", {
    get: function () {
      return this._playerPrefix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerSuffix", {
    get: function () {
      return this._playerSuffix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasCapital", {
    get: function () {
      return this.hasAreaType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasMetropolis", {
    get: function () {
      return this.hasAreaType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasMonument", {
    get: function () {
      return this.hasAreaType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasLaboratory", {
    get: function () {
      return this.hasAreaType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasKingstower", {
    get: function () {
      return this.hasAreaType(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER);
    },
    enumerable: true,
    configurable: true
  });
  WorldMapOwnerInfoVO.prototype.hasAreaType = function (__s85param0) {
    for (var __s85local0 = 0; __s85local0 < this.castlePosList.length; ++__s85local0) {
      if (this.castlePosList[__s85local0].areaType == __s85param0) {
        return true;
      }
    }
    return false;
  };
  WorldMapOwnerInfoVO.prototype.getMainCastlePositionByKingdomID = function (__s90param0) {
    var __s90local0;
    for (var __s90local1 = this.getCastlePosListByKingdomID(__s90param0), __s90local2 = 0; __s90local2 < __s90local1.length; ++__s90local2) {
      if ((__s90local0 = __s90local1[__s90local2]).areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE || __s90local0.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
        return __s90local0.absAreaPos;
      }
    }
    return null;
  };
  WorldMapOwnerInfoVO.prototype.getCastlePosListByKingdomID = function (__s95param0) {
    var __s95local0 = [];
    for (var __s95local1 = 0; __s95local1 < this._castlePosList.length; __s95local1++) {
      if (__dep_exact_f855840627e6e145.int(this._castlePosList[__s95local1].kingdomId) == __s95param0) {
        __s95local0.push(this._castlePosList[__s95local1]);
      }
    }
    if (this._villagePosList) {
      for (var __s95local2 = 0; __s95local2 < this._villagePosList.length; __s95local2++) {
        if (__dep_exact_f855840627e6e145.int(this._villagePosList[__s95local2].kingdomId) == __s95param0) {
          __s95local0.push(this._villagePosList[__s95local2]);
        }
      }
    }
    return __s95local0;
  };
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isOwnOwnerInfo", {
    get: function () {
      return this._playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isSearchingAlliance", {
    get: function () {
      return this._isSearchingAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasPremiumFlag", {
    get: function () {
      return this._hasPremiumFlag;
    },
    set: function (__s110param0) {
      this._hasPremiumFlag = __s110param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isDummy", {
    get: function () {
      return this._isDummy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "achievementPoints", {
    get: function () {
      return this._achievementPoints;
    },
    set: function (__s116param0) {
      this._achievementPoints = __s116param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingRelocateDuration", {
    get: function () {
      return Math.max(0, (this._relocateDurationEndTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "factionID", {
    get: function () {
      return this._factionID;
    },
    set: function (__s122param0) {
      this._factionID = __s122param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasVIPFlag", {
    get: function () {
      return this._hasVIPFlag;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerLegendLevel", {
    get: function () {
      return this._playerLegendLevel;
    },
    set: function (__s128param0) {
      this._playerLegendLevel = __s128param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isLegend", {
    get: function () {
      return this.playerLegendLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "might", {
    get: function () {
      return this._might;
    },
    set: function (__s134param0) {
      this._might = __s134param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "level", {
    get: function () {
      return this.playerLevel + this.playerLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceCrestVO", {
    get: function () {
      return this._allianceCrestVO;
    },
    set: function (__s140param0) {
      this._allianceCrestVO = __s140param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "factionTitleID", {
    get: function () {
      return this._factionTitleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isOutpostOwner", {
    get: function () {
      return this._isOutpostOwner;
    },
    set: function (__s148param0) {
      this._isOutpostOwner = __s148param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isDungeonOwner", {
    get: function () {
      return this._isDungeonOwner;
    },
    set: function (__s152param0) {
      this._isDungeonOwner = __s152param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isKingstowerOwner", {
    get: function () {
      return this._isKingstowerOwner;
    },
    set: function (__s156param0) {
      this._isKingstowerOwner = __s156param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isMonumentOwner", {
    get: function () {
      return this._isMonumentOwner;
    },
    set: function (__s160param0) {
      this._isMonumentOwner = __s160param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isShareableDungeon", {
    get: function () {
      return this._isShareableDungeon;
    },
    set: function (__s164param0) {
      this._isShareableDungeon = __s164param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "splitRunData", {
    get: function () {
      return this._splitRunData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "viaReferAFriend", {
    get: function () {
      return this._viaReferAFriend;
    },
    enumerable: true,
    configurable: true
  });
  return WorldMapOwnerInfoVO;
}();
exports.WorldMapOwnerInfoVO = __s0local0;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPlayer", "IWorldMapOwnerInfoVO");
