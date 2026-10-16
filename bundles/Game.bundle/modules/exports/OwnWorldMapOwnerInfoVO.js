Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MinWorldMapCastleInfoVO = require("gge-module:export_MinWorldMapCastleInfoVO");
var __s0local0 = function () {
  function OwnWorldMapOwnerInfoVO() {}
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasPremiumFlag", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.hasPremiumFlag;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerID", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerName", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userLevel;
    },
    set: function (__s13param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerLegendLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceID", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceRank", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceName", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.allianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "crest", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.playerCrest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "honor", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userHonor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "might", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.mightData.userCurrentMight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasVIPFlag", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.vipData.vipModeActive && __dep_export_CastleModel.CastleModel.settingsData.showVIPFlagToOthers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isSearchingAlliance", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.isSearchingAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "achievementPoints", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.castleAchievementData.achievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerPrefix", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerSuffix", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "factionID", {
    get: function () {
      if (OwnWorldMapOwnerInfoVO.factionEventVO) {
        return OwnWorldMapOwnerInfoVO.factionEventVO.ownFaction;
      } else {
        return -1;
      }
    },
    set: function (__s43param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isFactionProtected", {
    get: function () {
      return !!OwnWorldMapOwnerInfoVO.factionEventVO && OwnWorldMapOwnerInfoVO.factionEventVO.factionProtectionStatus == __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE && OwnWorldMapOwnerInfoVO.factionEventVO.remainingEventTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingFactionProtectionTimeInSeconds", {
    get: function () {
      if (OwnWorldMapOwnerInfoVO.factionEventVO) {
        return OwnWorldMapOwnerInfoVO.factionEventVO.remainingFactionProtectionTimeInSeconds;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  OwnWorldMapOwnerInfoVO.prototype.getMainCastlePositionByKingdomID = function (__s53param0) {
    if (__dep_export_CastleModel.CastleModel.userData.castleList) {
      var __s53local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s53param0);
      if (__s53local0) {
        return __s53local0.absAreaPos;
      }
    }
    return null;
  };
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isOutpostOwner", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isInAlliance", {
    get: function () {
      return this.allianceID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isLegend", {
    get: function () {
      return this.playerLegendLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingPeaceTime", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME) {
        return __dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime();
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingNoobTime", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.getRemainingNoobTime();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isNoobProtected", {
    get: function () {
      return this.remainingNoobTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isPeaceProtected", {
    get: function () {
      return this.remainingPeaceTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isRuin", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isDungeonOwner", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isShareableDungeon", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isOwnOwnerInfo", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingRelocateDuration", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceCrestVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "splitRunData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.splitRunData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isDummy", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasCapital", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasMetropolis", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasMonument", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_MONUMENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasLaboratory", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_LABORATORY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasKingstower", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_KINGS_TOWER);
    },
    enumerable: true,
    configurable: true
  });
  OwnWorldMapOwnerInfoVO.hasAreaType = function (__s101param0) {
    return __dep_export_CastleModel.CastleModel.userData.castleList.getMapVOByAreaType(__s101param0) != null;
  };
  OwnWorldMapOwnerInfoVO.prototype.getCastlePosListByKingdomID = function (__s103param0) {
    var __s103local0;
    var __s103local1 = [];
    var __s103local2 = __dep_export_CastleModel.CastleModel.userData.getOwnMapObjects(-1, __s103param0);
    if (__s103local2 != null) {
      for (var __s103local3 = 0, __s103local4 = __s103local2; __s103local3 < __s103local4.length; __s103local3++) {
        var __s103local5 = __s103local4[__s103local3];
        if (__s103local5 !== undefined) {
          (__s103local0 = new __dep_export_MinWorldMapCastleInfoVO.MinWorldMapCastleInfoVO()).copyFromWorldmapObjectVO(__s103local5);
          __s103local1.push(__s103local0);
        }
      }
    }
    return __s103local1;
  };
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "level", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "viaReferAFriend", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return OwnWorldMapOwnerInfoVO;
}();
exports.OwnWorldMapOwnerInfoVO = __s0local0;
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapOwnerInfoVO");
