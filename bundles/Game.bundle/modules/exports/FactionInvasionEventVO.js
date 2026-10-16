Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __s0local0 = function (__s1param0) {
  function FactionInvasionEventVO() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).factionInvasionEventVOPlayerBlue = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.factionInvasionEventVOPlayerRed = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.factionInvasionEventVOAlliance = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.eventOverviewConfig.eventOverviewDetails = __dep_export_EventOverviewDetailEnum.EventOverviewDetailEnum.DETAILS_FACTION_INVASION;
    __s3local0.eventOverviewConfig.hasAllianceMode = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionInvasionEventVO, __s1param0);
  FactionInvasionEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this.factionInvasionEventVOPlayerBlue = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff_1.EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_BLUE);
    this.factionInvasionEventVOPlayerBlue.eventId = __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION;
    this.factionInvasionEventVOPlayerBlue.parseData(__s5param0, __s5param1, __s5param2.FB);
    this.factionInvasionEventVOPlayerRed = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff_1.EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_RED);
    this.factionInvasionEventVOPlayerRed.eventId = __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION;
    this.factionInvasionEventVOPlayerRed.parseData(__s5param0, __s5param1, __s5param2.FR);
    this.factionInvasionEventVOAlliance = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff_1.EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_ALLIANCE);
    this.factionInvasionEventVOAlliance.eventId = __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION;
    this.factionInvasionEventVOAlliance.parseData(__s5param0, __s5param1, __s5param2.A);
  };
  FactionInvasionEventVO.prototype.singleRewards = function (__s7param0) {
    if (__s7param0) {
      if (this.factionInvasionEventVOPlayerBlue) {
        return this.factionInvasionEventVOPlayerBlue.rewardLists;
      }
    } else if (this.factionInvasionEventVOPlayerRed) {
      return this.factionInvasionEventVOPlayerRed.rewardLists;
    }
    return null;
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "allianceRewards", {
    get: function () {
      if (this.factionInvasionEventVOAlliance) {
        return this.factionInvasionEventVOAlliance.rewardLists;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.singleEventVO = function (__s16param0) {
    if (__s16param0) {
      return this.factionInvasionEventVOPlayerBlue;
    } else {
      return this.factionInvasionEventVOPlayerRed;
    }
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "allianceEventVO", {
    get: function () {
      return this.factionInvasionEventVOAlliance;
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.openDialog = function (__s22param0 = true) {
    if (this.pointThresholds) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_INVASION_EVENT_MAIN_DIALOG);
    }
  };
  FactionInvasionEventVO.prototype.parseParamObject = function (__s25param0) {
    __s1param0.prototype.parseParamObject.call(this, __s25param0);
    this.refreshWorldMap();
  };
  FactionInvasionEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  FactionInvasionEventVO.prototype.setRankAndPoints = function (__s29param0, __s29param1, __s29param2) {
    this.factionInvasionEventVOPlayerBlue.setRankAndPoints([__s29param0[0]], [__s29param1[0]], __s29param2 ? [__s29param2[0]] : null);
    this.factionInvasionEventVOPlayerRed.setRankAndPoints([__s29param0[1]], [__s29param1[1]], __s29param2 ? [__s29param2[1]] : null);
    this.factionInvasionEventVOAlliance.setRankAndPoints([__s29param0[2]], [__s29param1[2]], __s29param2 ? [__s29param2[2]] : null);
  };
  FactionInvasionEventVO.prototype.baseCampLevel = function (__s31param0) {
    if (__s31param0 == __dep_exact_26a421b704832cff.DungeonConst.BLUE_FACTION_KING) {
      return __dep_exact_f855840627e6e145.int(this.factionInvasionEventVOPlayerBlue.countVictories(this.factionInvasionEventVOPlayerBlue.leagueID)[0]);
    } else {
      return __dep_exact_f855840627e6e145.int(this.factionInvasionEventVOPlayerRed.countVictories(this.factionInvasionEventVOPlayerRed.leagueID)[0]);
    }
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_berimondInvasion";
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "maxPointsBlue", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue.maxPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "maxPointsRed", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed.maxPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "rewardsReceivedBlue", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue.rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "rewardsReceivedRed", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed.rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "rewardsReceivedAlliance", {
    get: function () {
      return this.factionInvasionEventVOAlliance.rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "bluePoints", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue.ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "redPoints", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed.ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "currentReputationFactionScale", {
    get: function () {
      if (this.factionInvasionEventVOPlayerRed.ownPoints + this.factionInvasionEventVOPlayerBlue.ownPoints == 0) {
        return 0.5;
      } else {
        return this.factionInvasionEventVOPlayerRed.ownPoints / (this.factionInvasionEventVOPlayerRed.ownPoints + this.factionInvasionEventVOPlayerBlue.ownPoints);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "redEventVO", {
    get: function () {
      return this.factionInvasionEventVOPlayerRed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventVO.prototype, "blueEventVO", {
    get: function () {
      return this.factionInvasionEventVOPlayerBlue;
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.isOwnWmoVO = function (__s65param0) {
    return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s65param0, "FactionInvasionCampMapObjectVO");
  };
  Object.defineProperty(FactionInvasionEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (__s69param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "addToOverview").set.call(this, __s69param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventVO.prototype.hasRewards = function () {
    return true;
  };
  FactionInvasionEventVO.prototype.getRewards = function (__s73param0) {
    if (__s73param0) {
      return this.factionInvasionEventVOAlliance.rewardLists;
    } else {
      return this.factionInvasionEventVOPlayerBlue.rewardLists;
    }
  };
  FactionInvasionEventVO.prototype.getRank = function (__s77param0) {
    return __dep_exact_f855840627e6e145.int(__s77param0 ? this.factionInvasionEventVOAlliance.ownRank : this.factionInvasionEventVOPlayerBlue.ownRank);
  };
  FactionInvasionEventVO.prototype.getScore = function (__s79param0) {
    return __dep_exact_f855840627e6e145.int(__s79param0 ? this.factionInvasionEventVOAlliance.ownPoints : this.factionInvasionEventVOPlayerBlue.ownPoints);
  };
  FactionInvasionEventVO.__initialize_static_members = function () {
    FactionInvasionEventVO.EVENT_BUILDING_WOD = 760;
  };
  return FactionInvasionEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.FactionInvasionEventVO = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_EventOverviewDetailEnum = require("gge-module:export_EventOverviewDetailEnum");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
__s0local0.__initialize_static_members();
