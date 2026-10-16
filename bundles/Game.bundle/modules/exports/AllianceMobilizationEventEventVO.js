Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceQuestStatusVO = require("gge-module:export_C2SAllianceQuestStatusVO");
var __dep_export_C2SCancelActiveAllianceQuestVO = require("gge-module:export_C2SCancelActiveAllianceQuestVO");
var __dep_export_C2SCompleteAllianceQuestVO = require("gge-module:export_C2SCompleteAllianceQuestVO");
var __dep_export_C2SRerollAllianceQuestVO = require("gge-module:export_C2SRerollAllianceQuestVO");
var __dep_export_C2SSkipCooldownAllianceQuestVO = require("gge-module:export_C2SSkipCooldownAllianceQuestVO");
var __dep_export_C2SStartAllianceQuestVO = require("gge-module:export_C2SStartAllianceQuestVO");
var __dep_export_AllianceQuestEvent = require("gge-module:export_AllianceQuestEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_AllianceMobilizationEventDialog = require("gge-module:export_AllianceMobilizationEventDialog");
var __dep_export_AllianceMobilizationEventDialogProperties = require("gge-module:export_AllianceMobilizationEventDialogProperties");
var __dep_export_AllianceMobilizationEventStartDialog = require("gge-module:export_AllianceMobilizationEventStartDialog");
var __dep_export_AllianceMobilizationEventStartDialogProperties = require("gge-module:export_AllianceMobilizationEventStartDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_AllianceQuestSlotVO = require("gge-module:export_AllianceQuestSlotVO");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventEventVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.allianceScoreEventVOs = [];
    __s3local0._questSlots = [];
    __s3local0._participants = 0;
    __s3local0._subDivisionId = 0;
    __s3local0.scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.alliancescoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.buyPackagesEventVO = new __dep_export_BuyPackagesEventVO.BuyPackagesEventVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventEventVO, __s1param0);
  AllianceMobilizationEventEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param2.A.LID);
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param2.RSID);
    this._subDivisionId = __dep_exact_f855840627e6e145.int(__s5param2.A.SDI);
    this._leagueID = __s5local0;
    __s5param2.SP.LID = __s5local0;
    __s5param2.SP.RSID = __s5local1;
    __s5param2.A.LID = __s5local0;
    __s5param2.A.RSID = __s5local1;
    this._divisionRoundID = __dep_exact_f855840627e6e145.int(__s5param2.DRI);
    this._divisionRoundVO = __dep_export_CastleModel.CastleModel.divisionData.getDivisionRoundByID(this._divisionRoundID);
    this.scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    this.scoreEventVO.eventId = this.eventId;
    this.scoreEventVO.parseData(__s5param0, __s5param1, __s5param2.SP);
    this.allianceScoreEventVOs = [];
    for (var __s5local2 = 1; __s5local2 <= this.getMaxLeagueID(); __s5local2++) {
      var __s5local3 = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(1);
      __s5local3.eventId = this.eventId;
      __s5param2.A.LID = __s5local2;
      __s5local3.parseData(__s5param0, __s5param1, __s5param2.A);
      __s5local3.isAllianceRewardScore = true;
      this.allianceScoreEventVOs.push(__s5local3);
    }
    this.alliancescoreEventVO = this.allianceScoreEventVOs[__s5local0 - 1];
    this.buyPackagesEventVO.parseData(__s5param0, __s5param1, __s5param2);
  };
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "scoreBarVO", {
    get: function () {
      return this.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "allianceBarVO", {
    get: function () {
      return this.alliancescoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AllianceMobilizationEventEventVO.EVENT_BUILDING_WOD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "event_title_129";
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventEventVO.prototype.openDialog = function (__s19param0 = true) {
    if (__dep_export_CastleModel.CastleModel.localData.readPlayerValue(AllianceMobilizationEventEventVO.SEEN_EVENT_KEY) == 1) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceMobilizationEventDialog.AllianceMobilizationEventDialog, new __dep_export_AllianceMobilizationEventDialogProperties.AllianceMobilizationEventDialogProperties(__dep_export_AllianceMobilizationEventDialog.AllianceMobilizationEventDialog.TAB_QUESTS, this.eventId));
      __dep_export_CastleModel.CastleModel.localData.savePlayerValue(AllianceMobilizationEventEventVO.SEEN_EVENT_KEY, 1, this._endTimestamp);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceMobilizationEventStartDialog.AllianceMobilizationEventStartDialog, new __dep_export_AllianceMobilizationEventStartDialogProperties.AllianceMobilizationEventStartDialogProperties(this.eventId));
    }
  };
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "ownRank", {
    get: function () {
      return this.scoreEventVO.ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "ownPoints", {
    get: function () {
      return this.scoreEventVO.ownPoints;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventEventVO.prototype.hasRewards = function () {
    return true;
  };
  AllianceMobilizationEventEventVO.prototype.getRewards = function (__s29param0) {
    if (__s29param0) {
      return this.alliancescoreEventVO.rewardLists;
    } else {
      return this.scoreEventVO.rewardLists;
    }
  };
  AllianceMobilizationEventEventVO.prototype.getRank = function (__s33param0) {
    return __dep_exact_f855840627e6e145.int(__s33param0 ? this.alliancescoreEventVO.ownRank : this.scoreEventVO.ownRank);
  };
  AllianceMobilizationEventEventVO.prototype.getScore = function (__s35param0) {
    return __dep_exact_f855840627e6e145.int(__s35param0 ? this.alliancescoreEventVO.ownPoints : this.scoreEventVO.ownPoints);
  };
  AllianceMobilizationEventEventVO.prototype.setRankAndPoints = function (__s37param0, __s37param1, __s37param2) {
    this.scoreEventVO.setRankAndPoints([__s37param0[0]], [__s37param1[0]], null);
    this.alliancescoreEventVO.setRankAndPoints([__s37param0[1]], [__s37param1[1]], null);
  };
  AllianceMobilizationEventEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.scoreEventVO.isPlayerQualifiedForAllianceRewards;
  };
  AllianceMobilizationEventEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.scoreEventVO.allianceRewardThresholdPoints;
  };
  AllianceMobilizationEventEventVO.prototype.parseQuestSlots = function (__s43param0) {
    var __s43local0 = this;
    if (__s43param0) {
      this._questSlots = [];
      var __s43local1 = 0;
      __s43param0.forEach(function (__s46param0) {
        var __s46local0 = new __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO();
        __s46local0.fillFromParams(__s43local1, __s46param0);
        __s46local0.eventID = __s43local0.eventId;
        __s43local0._questSlots.push(__s46local0);
        __s43local1++;
      });
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AllianceQuestEvent.AllianceQuestEvent(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED));
    }
  };
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "questSlots", {
    get: function () {
      return this._questSlots;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventEventVO.prototype.startAllianceQuest = function (__s50param0, __s50param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SStartAllianceQuestVO.C2SStartAllianceQuestVO(__s50param0, __s50param1, this.eventId));
  };
  AllianceMobilizationEventEventVO.prototype.rerollAllianceQuest = function (__s52param0, __s52param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRerollAllianceQuestVO.C2SRerollAllianceQuestVO(__s52param0, __s52param1, this.eventId));
  };
  AllianceMobilizationEventEventVO.prototype.completeAllianceQuest = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCompleteAllianceQuestVO.C2SCompleteAllianceQuestVO(this.eventId));
  };
  AllianceMobilizationEventEventVO.prototype.skipCooldown = function (__s56param0, __s56param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkipCooldownAllianceQuestVO.C2SSkipCooldownAllianceQuestVO(__s56param0, __s56param1, this.eventId));
  };
  AllianceMobilizationEventEventVO.prototype.requestAllianceQuestStatus = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceQuestStatusVO.C2SAllianceQuestStatusVO(this.eventId));
  };
  AllianceMobilizationEventEventVO.prototype.cancelAllianceQuest = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCancelActiveAllianceQuestVO.C2SCancelActiveAllianceQuestVO(this.eventId));
  };
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "nextRewardThresholdIndex", {
    get: function () {
      var __s62local0 = this;
      var __s62local1 = this.allianceBarVO.pointThresholds.findIndex(function (__s64param0) {
        return __s64param0 > __s62local0.allianceBarVO.ownPoints;
      });
      if (__s62local1 == -1) {
        __s62local1 = this.allianceBarVO.pointThresholds.length - 1;
      }
      return __s62local1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "divisionRoundVO", {
    get: function () {
      return this._divisionRoundVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "mode", {
    get: function () {
      return this._divisionRoundVO.type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "isDefaultMode", {
    get: function () {
      return this._divisionRoundVO.type == AllianceMobilizationEventEventVO.MODE_NORMAL;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventEventVO.prototype.getMaxLeagueID = function () {
    return this._divisionRoundVO.promotes.length;
  };
  AllianceMobilizationEventEventVO.prototype.getDivisionLevelRewards = function (__s75param0) {
    var __s75local0 = this.allianceScoreEventVOs[__s75param0 - 1];
    if (__s75local0) {
      return __s75local0.rewardLists;
    } else {
      return [];
    }
  };
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "participants", {
    get: function () {
      return this._participants;
    },
    set: function (__s81param0) {
      this._participants = __s81param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "subDivisionId", {
    get: function () {
      return this._subDivisionId;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventEventVO.prototype.getRewardBracketFromRank = function (__s85param0) {
    return this.getGlobalLeaderBoardRewards(this.leagueID).findIndex(function (__s87param0) {
      return __s85param0 <= __s87param0.rank[__s87param0.rank.length - 1];
    }) + 1;
  };
  Object.defineProperty(AllianceMobilizationEventEventVO.prototype, "ticketCurrencyID", {
    get: function () {
      var __s89local0 = this.eventPackagesVO.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, 0);
      if (__s89local0.length > 0) {
        return __s89local0[0].rewards.getItemByType(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY).id;
      }
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventEventVO.prototype.getEventSpecificTextID = function (__s92param0) {
    return __s92param0;
  };
  AllianceMobilizationEventEventVO.getActiveEventVO = function (__s94param0) {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s94param0);
  };
  AllianceMobilizationEventEventVO.getDivisionIconClip = function (__s96param0) {
    var __s96local0 = "AllianceMobilizationDivisionIcons_" + AllianceMobilizationEventEventVO.getDivsionName(__s96param0);
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s96local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("AllianceMobilizationDivisionIcons"), null, 0, false);
  };
  AllianceMobilizationEventEventVO.getDivsionName = function (__s98param0) {
    switch (__s98param0) {
      case 1:
        return "Copper";
      case 2:
        return "Glass";
      case 3:
        return "Bronze";
      case 4:
        return "Silver";
      case 5:
        return "Gold";
      case 6:
        return "Diamond";
      default:
        return "Copper";
    }
  };
  AllianceMobilizationEventEventVO.EVENT_BUILDING_WOD = 4311;
  AllianceMobilizationEventEventVO.MODE_NORMAL = "normal";
  AllianceMobilizationEventEventVO.MODE_QUALIFICATION = "qualification";
  AllianceMobilizationEventEventVO.MODE_ADJUSTMENT = "adjustment";
  AllianceMobilizationEventEventVO.SEEN_EVENT_KEY = "seenAllianceMobilizationEvent";
  return AllianceMobilizationEventEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.AllianceMobilizationEventEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "IAllianceRewardsQualifiable");
