Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AdvisorActivationInfoVO = require("gge-module:export_AdvisorActivationInfoVO");
var __dep_export_DifficultyScalingSelectDialog = require("gge-module:export_DifficultyScalingSelectDialog");
var __dep_export_DifficultyScalingSelectDialogProperties = require("gge-module:export_DifficultyScalingSelectDialogProperties");
var __dep_export_CastleAllianceSamuraiInvasionDialog = require("gge-module:export_CastleAllianceSamuraiInvasionDialog");
var __dep_export_CastleAllianceSamuraiInvasionEventDialogProperties = require("gge-module:export_CastleAllianceSamuraiInvasionEventDialogProperties");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __s0local0 = function (__s1param0) {
  function SamuraiInvasionEventVO() {
    var __s3local0 = this;
    __s3local0._daimyoInfoVO = new __dep_export_SamuraiInvasionDaimyoInfoVO.SamuraiInvasionDaimyoInfoVO();
    __s3local0._isAdvisorActive = false;
    __s3local0._isAdvisorActivationFree = false;
    __s3local0._advisorActivationCurrencyId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.alliancescoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    __s3local0.buyPackagesEventVO = new __dep_export_BuyPackagesEventVO.BuyPackagesEventVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiInvasionEventVO, __s1param0);
  SamuraiInvasionEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this.scoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO();
    this.scoreEventVO.eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION;
    this.scoreEventVO.parseData(__s5param0, __s5param1, __s5param2.SP);
    this.scoreEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
    this.scoreEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
    this.alliancescoreEventVO = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff.EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_INVASION);
    this.alliancescoreEventVO.eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION;
    this.alliancescoreEventVO.parseData(__s5param0, __s5param1, __s5param2.A);
    this.alliancescoreEventVO.difficultyIDChoosen = this._difficultyIDChoosen;
    this.alliancescoreEventVO.difficultyScalingEnabled = this._difficultyScalingEnabled;
    this.alliancescoreEventVO.isAllianceRewardScore = true;
    this.buyPackagesEventVO.parseData(__s5param0, __s5param1, __s5param2);
    this._daimyoInfoVO.parseServerObject(__s5param2.DY);
    this._isAdvisorActive = !!__s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED] && __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_ACTIVATED];
    this._isAdvisorActivationFree = !!__s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_FREE] && __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_IS_FREE];
    this._advisorActivationCurrencyId = __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] ? __s5param2[__dep_exact_26a421b704832cff.CommKeys.ADVISOR_ATTACK_CURRENCY_ID] : 0;
  };
  SamuraiInvasionEventVO.prototype.parseParamObject = function (__s7param0) {
    __s1param0.prototype.parseParamObject.call(this, __s7param0);
    this.refreshWorldMap();
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventPackagesVO").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "scoreBarVO", {
    get: function () {
      return this.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "allianceBarVO", {
    get: function () {
      return this.alliancescoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SamuraiInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_samuraiInvasion";
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SAMURAI_HUNTER;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.openDialog = function (__s29param0 = true) {
    if (this.needToOpenDifficultyDialog()) {
      if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDialogRegistered(__dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog, new __dep_export_DifficultyScalingSelectDialogProperties.DifficultyScalingSelectDialogProperties(this.eventId));
      }
    } else if (this.pointThresholds) {
      this.executeOpenDialog(__s29param0, __dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog, new __dep_export_CastleAllianceSamuraiInvasionEventDialogProperties.CastleAllianceSamuraiInvasionEventDialogProperties(this));
    }
  };
  SamuraiInvasionEventVO.prototype.baseCampLevel = function () {
    return __dep_exact_f855840627e6e145.int(this.scoreEventVO.countVictories(this.scoreEventVO.leagueID)[0]);
  };
  SamuraiInvasionEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  SamuraiInvasionEventVO.prototype.setRankAndPoints = function (__s38param0, __s38param1, __s38param2) {
    this.scoreEventVO.setRankAndPoints([__s38param0[0]], [__s38param1[0]], null);
    this.alliancescoreEventVO.setRankAndPoints([__s38param0[1]], [__s38param1[1]], null);
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "ownRank", {
    get: function () {
      return this.scoreEventVO.ownRank;
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "ownRank").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "ownPoints", {
    get: function () {
      return this.scoreEventVO.ownPoints;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "ownPoints").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.isOwnWmoVO = function (__s48param0) {
    return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s48param0, "SamuraiCampMapObjectVO");
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AScoreEventVO.AScoreEventVO.prototype, "addToOverview").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.hasRewards = function () {
    return true;
  };
  SamuraiInvasionEventVO.prototype.getRewards = function (__s56param0) {
    if (__s56param0) {
      return this.alliancescoreEventVO.rewardLists;
    } else {
      return this.scoreEventVO.rewardLists;
    }
  };
  SamuraiInvasionEventVO.prototype.getRank = function (__s60param0) {
    return __dep_exact_f855840627e6e145.int(__s60param0 ? this.alliancescoreEventVO.ownRank : this.scoreEventVO.ownRank);
  };
  SamuraiInvasionEventVO.prototype.getScore = function (__s62param0) {
    return __dep_exact_f855840627e6e145.int(__s62param0 ? this.alliancescoreEventVO.ownPoints : this.scoreEventVO.ownPoints);
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "daimyoInfoVO", {
    get: function () {
      return this._daimyoInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.isPlayerQualifiedForAllianceRewards = function () {
    return this.scoreEventVO.isPlayerQualifiedForAllianceRewards;
  };
  SamuraiInvasionEventVO.prototype.allianceRewardThresholdPoints = function () {
    return this.scoreEventVO.allianceRewardThresholdPoints;
  };
  SamuraiInvasionEventVO.__initialize_static_members = function () {
    SamuraiInvasionEventVO.EVENT_BUILDING_WOD = 635;
  };
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "isAdvisorActive", {
    get: function () {
      return this._isAdvisorActive;
    },
    set: function (__s74param0) {
      this._isAdvisorActive = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "isAdvisorActivationFree", {
    get: function () {
      return this._isAdvisorActivationFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionEventVO.prototype, "advisorActivationCurrencyId", {
    get: function () {
      return this._advisorActivationCurrencyId;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiInvasionEventVO.prototype.getAdvisorActivationInfo = function () {
    return new __dep_export_AdvisorActivationInfoVO.AdvisorActivationInfoVO(this._isAdvisorActive, this._isAdvisorActivationFree, this._advisorActivationCurrencyId);
  };
  SamuraiInvasionEventVO.EVENT_BUILDING_WOD = 635;
  return SamuraiInvasionEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.SamuraiInvasionEventVO = __s0local0;
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __dep_export_SamuraiInvasionDaimyoInfoVO = require("gge-module:export_SamuraiInvasionDaimyoInfoVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "IAllianceRewardsQualifiable");
__s0local0.__initialize_static_members();
