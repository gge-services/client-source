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
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_AdvisorActivationInfoVO = require("gge-module:export_AdvisorActivationInfoVO");
var __dep_export_EventOverviewDetailEnum = require("gge-module:export_EventOverviewDetailEnum");
var __dep_export_DifficultyScalingSelectDialog = require("gge-module:export_DifficultyScalingSelectDialog");
var __dep_export_DifficultyScalingSelectDialogProperties = require("gge-module:export_DifficultyScalingSelectDialogProperties");
var __dep_export_CastleAllianceNomadInvasionDialog = require("gge-module:export_CastleAllianceNomadInvasionDialog");
var __dep_export_CastleAllianceNomadInvasionEventDialogProperties = require("gge-module:export_CastleAllianceNomadInvasionEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function AllianceNomadInvasionEventVO() {
    var __s3local0 = this;
    __s3local0._allianceRage = 0;
    __s3local0._playerRage = 0;
    __s3local0._playerTotalRage = 0;
    __s3local0._isAdvisorActive = false;
    __s3local0._isAdvisorActivationFree = false;
    __s3local0._advisorActivationCurrencyId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.allianceEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.eventOverviewConfig.eventOverviewDetails = __dep_export_EventOverviewDetailEnum.EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT;
    __s3local0.eventOverviewConfig.hasAllianceMode = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceNomadInvasionEventVO, __s1param0);
  AllianceNomadInvasionEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    if (__s5param2.SP) {
      this.scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
      this.scoreEventVO.eventId = __dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
      this.scoreEventVO.parseData(__s5param0, __s5param1, __s5param2.SP);
      this.scoreEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
      this.scoreEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
    }
    if (__s5param2.A) {
      this.allianceEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff_2.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE);
      this.allianceEventVO.eventId = __dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
      this.allianceEventVO.parseData(__s5param0, __s5param1, __s5param2.A);
      this.allianceEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
      this.allianceEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
      this.allianceEventVO.isAllianceRewardScore = true;
    }
    if (__s5param2.ACE == 1) {
      this.khanEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff_2.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_CAMP_INVASION);
      this.khanEventVO.eventId = __dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
      this.khanEventVO.parseData(__s5param0, __s5param1, __s5param2.AC ? __s5param2.AC : {
        LID: 1,
        RSID: __s5param2.RSID
      });
      if (__s5param2.AC) {
        this._allianceRage = __dep_exact_f855840627e6e145.int(__s5param2.AC.AR);
        this._playerRage = __dep_exact_f855840627e6e145.int(__s5param2.AC.PCRP);
        this._playerTotalRage = __dep_exact_f855840627e6e145.int(__s5param2.AC.PTRP);
        this._allianceCamp = __dep_export_CastleModel.CastleModel.allianceInvasionCampData.getAllianceCamp(__s5param2.AC.ACID, this.isDifficultyScalingActivated ? __s5param2.AC.ACID : -1);
        this.khanEventVO.setRankAndPoints(null, [this._allianceCamp.level], null);
      }
    }
    this._isAdvisorActive = !!__s5param2[__dep_exact_26a421b704832cff_1.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED] && __s5param2[__dep_exact_26a421b704832cff_1.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED];
    this._isAdvisorActivationFree = !!__s5param2[__dep_exact_26a421b704832cff_1.CommKeys.ADVISOR_ATTACK_IS_FREE] && __s5param2[__dep_exact_26a421b704832cff_1.CommKeys.ADVISOR_ATTACK_IS_FREE];
    this._advisorActivationCurrencyId = __s5param2[__dep_exact_26a421b704832cff_1.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] ? __s5param2[__dep_exact_26a421b704832cff_1.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] : 0;
  };
  AllianceNomadInvasionEventVO.prototype.parseParamObject = function (__s11param0) {
    __dep_exact_9e901e8e2483a22f.debug("------------------- NomadInvasionEventVO loading from paramObject");
    __s1param0.prototype.parseParamObject.call(this, __s11param0);
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP) {
      __dep_exact_9e901e8e2483a22f.debug("---------------------------- trying to re-render nomad/alien positions");
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
      var __s11local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s11local0.x, __s11local0.y, __s11local0.x + __s11local0.width, __s11local0.y + __s11local0.height);
    }
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "scoreBarVO", {
    get: function () {
      return this.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "allianceBarVO", {
    get: function () {
      return this.allianceEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "khanCampBarVO", {
    get: function () {
      return this.khanEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AllianceNomadInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_NomadInvasion";
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_HERALD;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.openDialog = function (__s32param0 = true) {
    if (this.needToOpenDifficultyDialog()) {
      if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDialogRegistered(__dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog, new __dep_export_DifficultyScalingSelectDialogProperties.DifficultyScalingSelectDialogProperties(this.eventId));
      }
    } else {
      this.executeOpenDialog(__s32param0, __dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog, new __dep_export_CastleAllianceNomadInvasionEventDialogProperties.CastleAllianceNomadInvasionEventDialogProperties(__dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT));
    }
  };
  AllianceNomadInvasionEventVO.prototype.baseCampLevel = function () {
    return __dep_exact_f855840627e6e145.int(this.scoreEventVO.countVictories(this.scoreEventVO.leagueID)[0]);
  };
  AllianceNomadInvasionEventVO.prototype.setRankAndPoints = function (__s39param0, __s39param1, __s39param2) {
    this.scoreEventVO.setRankAndPoints([__s39param0[0]], [__s39param1[0]], null);
    this.allianceEventVO.setRankAndPoints([__s39param0[1]], [__s39param1[1]], null);
  };
  AllianceNomadInvasionEventVO.prototype.leagueLevels = function (__s41param0) {
    return this.allianceEventVO.leagueLevels(__s41param0);
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "addToOverview").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.hasRewards = function () {
    return true;
  };
  AllianceNomadInvasionEventVO.prototype.getRewards = function (__s49param0) {
    if (__s49param0) {
      return this.allianceEventVO.rewardLists;
    } else {
      return this.scoreEventVO.rewardLists;
    }
  };
  AllianceNomadInvasionEventVO.prototype.getRank = function (__s53param0) {
    return __dep_exact_f855840627e6e145.int(__s53param0 ? this.allianceEventVO.ownRank : this.scoreEventVO.ownRank);
  };
  AllianceNomadInvasionEventVO.prototype.getScore = function (__s55param0) {
    return __dep_exact_f855840627e6e145.int(__s55param0 ? this.allianceEventVO.ownPoints : this.scoreEventVO.ownPoints);
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "khanCampLevel", {
    get: function () {
      return this._allianceCamp.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "allianceRage", {
    get: function () {
      return this._allianceRage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "playerRage", {
    get: function () {
      return this._playerRage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "neededPlayerRage", {
    get: function () {
      return this._allianceCamp.playerRageCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "allianceCamp", {
    get: function () {
      return this._allianceCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "canGetKhanRewards", {
    get: function () {
      return this._playerTotalRage >= __dep_exact_26a421b704832cff.AllianceInvasionConst.PLAYER_PARTICIPATION_RAGE_THRESHOLD;
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.parse_RPR = function (__s69param0) {
    this._playerRage = __dep_exact_f855840627e6e145.int(__s69param0.PCRP);
    this._playerTotalRage = __dep_exact_f855840627e6e145.int(__s69param0.PTRP);
  };
  AllianceNomadInvasionEventVO.prototype.parse_AIC = function (__s71param0, __s71param1) {
    this._allianceRage = __s71param1;
    this.khanEventVO.setRankAndPoints(null, [__s71param0.level], null);
    this._allianceCamp = __s71param0;
  };
  AllianceNomadInvasionEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.scoreEventVO.isPlayerQualifiedForAllianceRewards;
  };
  AllianceNomadInvasionEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.scoreEventVO.allianceRewardThresholdPoints;
  };
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "isAdvisorActive", {
    get: function () {
      return this._isAdvisorActive;
    },
    set: function (__s79param0) {
      this._isAdvisorActive = __s79param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "isAdvisorActivationFree", {
    get: function () {
      return this._isAdvisorActivationFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceNomadInvasionEventVO.prototype, "advisorActivationCurrencyId", {
    get: function () {
      return this._advisorActivationCurrencyId;
    },
    enumerable: true,
    configurable: true
  });
  AllianceNomadInvasionEventVO.prototype.getAdvisorActivationInfo = function () {
    return new __dep_export_AdvisorActivationInfoVO.AdvisorActivationInfoVO(this._isAdvisorActive, this._isAdvisorActivationFree, this._advisorActivationCurrencyId);
  };
  AllianceNomadInvasionEventVO.EVENT_BUILDING_WOD = 74;
  return AllianceNomadInvasionEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.AllianceNomadInvasionEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreUpdatable", "IAllianceCampUpdateable", "IAllianceRewardsQualifiable", "IAdvisorEventVO");
