Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AllianceRaidEventDialogProperties = require("gge-module:export_AllianceRaidEventDialogProperties");
var __dep_export_AllianceRaidEventMainDialog = require("gge-module:export_AllianceRaidEventMainDialog");
var __dep_export_AllianceRaidEventStartDialog = require("gge-module:export_AllianceRaidEventStartDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_AllianceRaidbossServerDataVO = require("gge-module:export_AllianceRaidbossServerDataVO");
var __s0local0 = function (__s1param0) {
  function AllianceRaidbossEventEventVO() {
    var __s3local0 = this;
    __s3local0._availableBosses = [];
    __s3local0._currentBossLevelPoints = 0;
    __s3local0._allianceScore = 0;
    __s3local0._allianceRank = 0;
    __s3local0._leagueID = 0;
    __s3local0._subDivisionId = 0;
    __s3local0._divisionRoundID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._raidBossServerDataVO = new __dep_export_AllianceRaidbossServerDataVO.AllianceRaidbossServerDataVO();
    __s3local0._scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0._scoreEventVO.eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidbossEventEventVO, __s1param0);
  AllianceRaidbossEventEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    __s5param2.OP = __s5param2.SP.OP;
    this._scoreEventVO.parseData(__s5param0, __s5param1, __s5param2);
    if (__s5param2.A) {
      this._allianceScore = __dep_exact_f855840627e6e145.int(__s5param2.A.OP);
      this._leagueID = __dep_exact_f855840627e6e145.int(__s5param2.A.LID);
      this._subDivisionId = __dep_exact_f855840627e6e145.int(__s5param2.A[__dep_exact_26a421b704832cff.CommKeys.SUBDIVISION_ID]);
    }
    this._divisionRoundID = __dep_exact_f855840627e6e145.int(__s5param2[__dep_exact_26a421b704832cff.CommKeys.DIVISION_ROUND_ID]);
    this._divisionRoundVO = __dep_export_CastleModel.CastleModel.divisionData.getDivisionRoundByID(this._divisionRoundID);
  };
  AllianceRaidbossEventEventVO.prototype.parseParamObject = function (__s8param0) {
    this._availableBosses = __s8param0[__dep_exact_26a421b704832cff.CommKeys.RAID_BOSS_IDS];
    this._rewardSetID = __s8param0[__dep_exact_26a421b704832cff.CommKeys.REWARD_SET_ID];
    if (__s8param0.BSE) {
      this._raidBossServerDataVO.parse_bse(__s8param0.BSE);
    }
    if (__s8param0.BLPP != undefined) {
      this._currentBossLevelPoints = __s8param0.BLPP;
    }
  };
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AllianceRaidbossEventEventVO.EVENT_BUILDING_WOD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "event_title_133";
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossEventEventVO.getActiveEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
  };
  AllianceRaidbossEventEventVO.prototype.openDialog = function (__s18param0 = true) {
    if (__dep_export_CastleModel.CastleModel.localData.readPlayerValue(AllianceRaidbossEventEventVO.SEEN_EVENT_KEY) == 1) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog, new __dep_export_AllianceRaidEventDialogProperties.AllianceRaidEventDialogProperties(__dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog.TAB_OVERVIEW));
      __dep_export_CastleModel.CastleModel.localData.savePlayerValue(AllianceRaidbossEventEventVO.SEEN_EVENT_KEY, 1, this._endTimestamp);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceRaidEventStartDialog.AllianceRaidEventStartDialog);
    }
  };
  AllianceRaidbossEventEventVO.prototype.setRankAndPoints = function (__s22param0, __s22param1, __s22param2) {
    this._scoreEventVO.setRankAndPoints([__s22param0[0]], [__s22param1[0]], null);
    if (__s22param1.length > 1) {
      this._allianceScore = __dep_exact_f855840627e6e145.int(__s22param1[1]);
      this._allianceRank = __dep_exact_f855840627e6e145.int(__s22param0[1]);
    }
  };
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "raidBossServerDataVO", {
    get: function () {
      return this._raidBossServerDataVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "scoreEventVO", {
    get: function () {
      return this._scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "allianceScore", {
    get: function () {
      return this._allianceScore;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "leagueID", {
    get: function () {
      return this._leagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "subDivisionId", {
    get: function () {
      return this._subDivisionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "divisionRoundVO", {
    get: function () {
      return this._divisionRoundVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "mode", {
    get: function () {
      if (this._divisionRoundVO) {
        return this._divisionRoundVO.type;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "isDefaultMode", {
    get: function () {
      return this.mode == AllianceRaidbossEventEventVO.MODE_NORMAL;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossEventEventVO.prototype.getMaxLeagueID = function () {
    if (this._divisionRoundVO) {
      return this._divisionRoundVO.promotes.length;
    } else {
      return 0;
    }
  };
  AllianceRaidbossEventEventVO.prototype.getRewardBracketFromRank = function (__s49param0) {
    return this.getGlobalLeaderBoardRewards(this._leagueID).findIndex(function (__s51param0) {
      return __s49param0 <= __s51param0.rank[__s51param0.rank.length - 1];
    }) + 1;
  };
  AllianceRaidbossEventEventVO.prototype.getGlobalLeaderBoardRewards = function (__s53param0 = -1) {
    return this._scoreEventVO.getGlobalLeaderBoardRewards(__s53param0);
  };
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "leaderBoardRewardSetID", {
    get: function () {
      return this._scoreEventVO.leaderBoardRewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "scoreBarVO", {
    get: function () {
      return this._scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossEventEventVO.prototype.getEventSpecificTextID = function (__s59param0) {
    var __s59local0 = __s59param0.replace("_ame_", "_arme_");
    if (__dep_exact_92d05af59ee2ff30.Localize.text(__s59local0) != __s59local0) {
      return __s59local0;
    } else {
      return __s59param0;
    }
  };
  Object.defineProperty(AllianceRaidbossEventEventVO.prototype, "currentBossLevelPoints", {
    get: function () {
      if (isNaN(this._currentBossLevelPoints)) {
        return 0;
      } else {
        return this._currentBossLevelPoints;
      }
    },
    set: function (__s67param0) {
      this._currentBossLevelPoints = __s67param0;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossEventEventVO.EVENT_BUILDING_WOD = 4312;
  AllianceRaidbossEventEventVO.MODE_NORMAL = "normal";
  AllianceRaidbossEventEventVO.MODE_QUALIFICATION = "qualification";
  AllianceRaidbossEventEventVO.MODE_ADJUSTMENT = "adjustment";
  AllianceRaidbossEventEventVO.SEEN_EVENT_KEY = "seenAllianceRaidEvent";
  return AllianceRaidbossEventEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.AllianceRaidbossEventEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreUpdatable", "IAllianceCampUpdateable", "IAllianceRewardsQualifiable", "IAdvisorEventVO");
