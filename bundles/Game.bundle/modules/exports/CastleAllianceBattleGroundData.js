Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_ABGAllianceTowerBuffInfoVO = require("gge-module:export_ABGAllianceTowerBuffInfoVO");
var __dep_export_ABGAllianceTowerEffectActivationVO = require("gge-module:export_ABGAllianceTowerEffectActivationVO");
var __dep_export_ABGAllianceTowerEffectVO = require("gge-module:export_ABGAllianceTowerEffectVO");
var __dep_export_ABGAllianceTowerEffectXmlVO = require("gge-module:export_ABGAllianceTowerEffectXmlVO");
var __dep_export_ABGAllianceTowerInfoVO = require("gge-module:export_ABGAllianceTowerInfoVO");
var __dep_export_AllianceBattleGroundConfigurationVO = require("gge-module:export_AllianceBattleGroundConfigurationVO");
var __dep_export_AllianceBattleGroundDungeonVO = require("gge-module:export_AllianceBattleGroundDungeonVO");
var __dep_export_SpecialServerPreBuiltCastleVO = require("gge-module:export_SpecialServerPreBuiltCastleVO");
var __dep_export_AllianceBattleGroundScoringVO = require("gge-module:export_AllianceBattleGroundScoringVO");
var __dep_export_StartResourcesVO = require("gge-module:export_StartResourcesVO");
var __dep_export_AllianceBattlegroundAlliancePerformanceVO = require("gge-module:export_AllianceBattlegroundAlliancePerformanceVO");
var __dep_export_AllianceBattlegroundRewardVO = require("gge-module:export_AllianceBattlegroundRewardVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattleGroundData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._configs = new Map();
    __s3local0._preBuildCastles = new Map();
    __s3local0._startResources = new Map();
    __s3local0._scoringSystems = new Map();
    __s3local0._rewardVO = [];
    __s3local0._dungeonVOs = [];
    __s3local0._allianceTowerVOs = [];
    __s3local0._allianceTowerEffectXmlVOs = [];
    __s3local0._allianceTowerEffectActivationVOs = [];
    __s3local0.timestampTillNextTowerRevive = 0;
    __s3local0.timestampTillNextTowerRelink = 0;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundData, __s1param0);
  CastleAllianceBattleGroundData.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.allianceTowerEffectsActivations; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_ABGAllianceTowerEffectActivationVO.ABGAllianceTowerEffectActivationVO();
        __s5local3.parseXML(__s5local2);
        this._allianceTowerEffectActivationVOs.push(__s5local3);
      }
    }
    for (var __s5local4 = 0, __s5local5 = __s5param0.allianceTowerEffects; __s5local4 < __s5local5.length; __s5local4++) {
      var __s5local6 = __s5local5[__s5local4];
      if (__s5local6 !== undefined) {
        var __s5local7 = new __dep_export_ABGAllianceTowerEffectXmlVO.ABGAllianceTowerEffectXmlVO();
        __s5local7.parseXML(__s5local6);
        this._allianceTowerEffectXmlVOs.push(__s5local7);
      }
    }
    for (var __s5local8 = 0, __s5local9 = __s5param0.allianceTowers; __s5local8 < __s5local9.length; __s5local8++) {
      var __s5local10 = __s5local9[__s5local8];
      if (__s5local10 !== undefined) {
        var __s5local11 = new __dep_export_ABGAllianceTowerInfoVO.ABGAllianceTowerInfoVO();
        __s5local11.parseXML(__s5local10);
        this._allianceTowerVOs.push(__s5local11);
      }
    }
    for (var __s5local12 = 0, __s5local13 = __s5param0.allianceBattleGroundDungeons; __s5local12 < __s5local13.length; __s5local12++) {
      var __s5local14 = __s5local13[__s5local12];
      if (__s5local14 !== undefined) {
        var __s5local15 = new __dep_export_AllianceBattleGroundDungeonVO.AllianceBattleGroundDungeonVO();
        __s5local15.parseXML(__s5local14);
        this._dungeonVOs.push(__s5local15);
      }
    }
    for (var __s5local16 = 0, __s5local17 = __s5param0.allianceBattleGroundScorings; __s5local16 < __s5local17.length; __s5local16++) {
      var __s5local18 = __s5local17[__s5local16];
      if (__s5local18 !== undefined) {
        var __s5local19 = new __dep_export_AllianceBattleGroundScoringVO.AllianceBattleGroundScoringVO();
        __s5local19.parseXML(__s5local18);
        this._scoringSystems.set(__s5local19.scoringID, __s5local19);
      }
    }
    for (var __s5local20 = 0, __s5local21 = __s5param0.startResources; __s5local20 < __s5local21.length; __s5local20++) {
      var __s5local22 = __s5local21[__s5local20];
      if (__s5local22 !== undefined) {
        var __s5local23 = new __dep_export_StartResourcesVO.StartResourcesVO();
        __s5local23.parseXML(__s5local22);
        this._startResources.set(__s5local23.startResourceID, __s5local23);
      }
    }
    for (var __s5local24 = 0, __s5local25 = __s5param0.allianceBattleGroundPreBuiltCastles; __s5local24 < __s5local25.length; __s5local24++) {
      var __s5local26 = __s5local25[__s5local24];
      if (__s5local26 !== undefined) {
        var __s5local27 = new __dep_export_SpecialServerPreBuiltCastleVO.SpecialServerPreBuiltCastleVO();
        __s5local27.parseXML(__s5local26);
        this._preBuildCastles.set(__s5local27.preBuiltCastleID, __s5local27);
      }
    }
    for (var __s5local28 = 0, __s5local29 = __s5param0.allianceBattleGroundRankRewards; __s5local28 < __s5local29.length; __s5local28++) {
      var __s5local30 = __s5local29[__s5local28];
      if (__s5local30 !== undefined) {
        var __s5local31 = new __dep_export_AllianceBattlegroundRewardVO.AllianceBattlegroundRewardVO();
        __s5local31.parseXML(__s5local30);
        this._rewardVO.push(__s5local31);
      }
    }
    for (var __s5local32 = 0, __s5local33 = __s5param0.allianceBattleGroundSettings; __s5local32 < __s5local33.length; __s5local32++) {
      var __s5local34 = __s5local33[__s5local32];
      if (__s5local34 !== undefined) {
        var __s5local35 = new __dep_export_AllianceBattleGroundConfigurationVO.AllianceBattleGroundConfigurationVO();
        __s5local35.parseXML(__s5local34);
        this._configs.set(__s5local35.settingID, __s5local35);
      }
    }
  };
  CastleAllianceBattleGroundData.prototype.getRewardsByRewardSetID = function (__s34param0) {
    var __s34local0 = [];
    if (this._rewardVO != null) {
      for (var __s34local1 = 0, __s34local2 = this._rewardVO; __s34local1 < __s34local2.length; __s34local1++) {
        var __s34local3 = __s34local2[__s34local1];
        if (__s34local3 !== undefined && __s34local3.rewardSetID == __s34param0) {
          __s34local0.push(__s34local3.rankReward);
        }
      }
    }
    return __s34local0;
  };
  CastleAllianceBattleGroundData.prototype.getConfigVOByID = function (__s40param0) {
    return this._configs.get(__s40param0);
  };
  CastleAllianceBattleGroundData.prototype.getPreBuildCastleVOByID = function (__s42param0) {
    return this._preBuildCastles.get(__s42param0);
  };
  CastleAllianceBattleGroundData.prototype.getStartResourcesVOByID = function (__s44param0) {
    return this._startResources.get(__s44param0);
  };
  CastleAllianceBattleGroundData.prototype.getScoringSystemByID = function (__s46param0) {
    return this._scoringSystems.get(__s46param0);
  };
  CastleAllianceBattleGroundData.prototype.getDungeonMaxLevel = function () {
    if (!__dep_export_ABGHelper.ABGHelper.abgEvent) {
      return 0;
    }
    var __s48local0 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID);
    var __s48local1 = 1;
    if (this._dungeonVOs != null) {
      for (var __s48local2 = 0, __s48local3 = this._dungeonVOs; __s48local2 < __s48local3.length; __s48local2++) {
        var __s48local4 = __s48local3[__s48local2];
        if (__s48local4 !== undefined && __s48local4.allianceBattleGroundScoringID == __s48local0 && __s48local4.dungeonlevel > __s48local1) {
          __s48local1 = __s48local4.dungeonlevel;
        }
      }
    }
    return __s48local1;
  };
  CastleAllianceBattleGroundData.prototype.getDungeonVOByVictoryCount = function (__s55param0) {
    if (!__dep_export_ABGHelper.ABGHelper.abgEvent) {
      return null;
    }
    var __s55local0;
    var __s55local1 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID);
    if (this._dungeonVOs != null) {
      for (var __s55local2 = 0, __s55local3 = this._dungeonVOs; __s55local2 < __s55local3.length; __s55local2++) {
        var __s55local4 = __s55local3[__s55local2];
        if (__s55local4 !== undefined && __s55local4.allianceBattleGroundScoringID == __s55local1 && ((!__s55local0 || __s55local0.dungeonlevel < __s55local4.dungeonlevel) && (__s55local0 = __s55local4), __s55local4.countVictory == __s55param0)) {
          return __s55local4;
        }
      }
    }
    return __s55local0;
  };
  CastleAllianceBattleGroundData.prototype.getDungeonVOByDungeonLevel = function (__s62param0) {
    var __s62local0 = __dep_export_ABGHelper.ABGHelper.abgEvent ? __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoringID) : -1;
    var __s62local1 = this.getDungeonMaxLevel();
    if (__s62param0 > __s62local1) {
      __s62param0 = __s62local1;
    }
    if (this._dungeonVOs != null) {
      for (var __s62local2 = 0, __s62local3 = this._dungeonVOs; __s62local2 < __s62local3.length; __s62local2++) {
        var __s62local4 = __s62local3[__s62local2];
        if (__s62local4 !== undefined && (__s62local4.allianceBattleGroundScoringID == __s62local0 || __s62local0 == -1) && (__s62local4.dungeonlevel == __s62param0 || __s62local0 == -1)) {
          return __s62local4;
        }
      }
    }
    return null;
  };
  CastleAllianceBattleGroundData.prototype.getDungeonSkipCost = function (__s69param0, __s69param1) {
    var __s69local0 = this.getDungeonVOByVictoryCount(__s69param0);
    return __dep_exact_f855840627e6e145.int(Math.max(1, __s69local0.skipCost * __s69param1 / 180 / 60));
  };
  CastleAllianceBattleGroundData.prototype.parseAlliancePerformance = function (__s71param0) {
    this.alliancePerformanceVOs = [];
    for (var __s71local0 = 0, __s71local1 = __s71param0.AME; __s71local0 < __s71local1.length; __s71local0++) {
      var __s71local2 = __s71local1[__s71local0];
      if (__s71local2 !== undefined) {
        var __s71local3 = new __dep_export_AllianceBattlegroundAlliancePerformanceVO.AllianceBattlegroundAlliancePerformanceVO();
        __s71local3.parseData(__s71local2);
        this.alliancePerformanceVOs.push(__s71local3);
      }
    }
  };
  CastleAllianceBattleGroundData.prototype.getTowerInfoByCountVictory = function (__s76param0) {
    var __s76local0;
    var __s76local1 = 0;
    if (this._allianceTowerVOs != null) {
      for (var __s76local2 = 0, __s76local3 = this._allianceTowerVOs; __s76local2 < __s76local3.length; __s76local2++) {
        var __s76local4 = __s76local3[__s76local2];
        if (__s76local4 !== undefined && __s76local4.countVictory <= __s76param0 && __s76local4.countVictory >= __s76local1) {
          __s76local1 = __s76local4.countVictory;
          __s76local0 = __s76local4;
        }
      }
    }
    return __s76local0;
  };
  CastleAllianceBattleGroundData.prototype.getTowerInfoByCountLevel = function (__s82param0) {
    if (this._allianceTowerVOs != null) {
      for (var __s82local0 = 0, __s82local1 = this._allianceTowerVOs; __s82local0 < __s82local1.length; __s82local0++) {
        var __s82local2 = __s82local1[__s82local0];
        if (__s82local2 !== undefined && __s82local2.level == __s82param0) {
          return __s82local2;
        }
      }
    }
    return null;
  };
  CastleAllianceBattleGroundData.prototype.parseTRT = function (__s88param0) {
    this.timestampTillNextTowerRelink = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s88param0[__dep_exact_26a421b704832cff.CommKeys.SECONDS_TILL_NEXT_RE_LINK] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.timestampTillNextTowerRevive = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s88param0[__dep_exact_26a421b704832cff.CommKeys.SECONDS_TILL_NEXT_REVIVE] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TIMERS, []));
  };
  Object.defineProperty(CastleAllianceBattleGroundData.prototype, "remainingSecondsTillRelink", {
    get: function () {
      return (this.timestampTillNextTowerRelink - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundData.prototype, "remainingSecondsTillRevive", {
    get: function () {
      return (this.timestampTillNextTowerRevive - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundData.prototype, "allianceTowerEffectXmlVOs", {
    get: function () {
      return this._allianceTowerEffectXmlVOs;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundData.prototype.parseTBI = function (__s96param0) {
    var __s96local0;
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      var __s96local1 = new Map();
      for (var __s96local2 = 0; __s96local2 < __s96param0.TE.length; __s96local2++) {
        var __s96local3 = __s96param0.TE[__s96local2];
        __s96local1.set(__s96local3.TEID, __s96local3);
      }
      var __s96local4 = this.getAvailableAllianceTowerEffects();
      for (__s96local2 = 0; __s96local2 < __s96local4.length; __s96local2++) {
        var __s96local5 = __s96local4[__s96local2];
        var __s96local6 = __s96local1.get(__s96local5.allianceTowerEffectID);
        if (__s96local6) {
          __s96local5.parseServerParams(__s96local6);
        } else {
          __s96local5.reset();
        }
      }
      __s96local0 = new __dep_export_ABGAllianceTowerBuffInfoVO.ABGAllianceTowerBuffInfoVO(__s96local4, __s96param0.TEA);
    } else {
      __s96local0 = new __dep_export_ABGAllianceTowerBuffInfoVO.ABGAllianceTowerBuffInfoVO([], false);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, [__s96local0]));
    return __s96local0;
  };
  CastleAllianceBattleGroundData.prototype.getAvailableAllianceTowerEffects = function () {
    var __s106local0 = [];
    for (var __s106local1 = 0; __s106local1 < this._allianceTowerEffectXmlVOs.length; __s106local1++) {
      var __s106local2 = this._allianceTowerEffectXmlVOs[__s106local1];
      if (__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.availableAllianceTowerEffectIDs.indexOf(__s106local2.allianceTowerEffectID) > -1) {
        __s106local0.push(new __dep_export_ABGAllianceTowerEffectVO.ABGAllianceTowerEffectVO(__s106local2));
      }
    }
    return __s106local0;
  };
  CastleAllianceBattleGroundData.prototype.getAllianceTowerEffectActivationCost = function () {
    var __s111local0;
    for (var __s111local1 = 0; __s111local1 < this._allianceTowerEffectActivationVOs.length; __s111local1++) {
      var __s111local2 = this._allianceTowerEffectActivationVOs[__s111local1];
      if (this.remainingSecondsTillRevive < __s111local2.remainingTime && (!__s111local0 || __s111local0 && __s111local2.remainingTime < __s111local0.remainingTime)) {
        __s111local0 = __s111local2;
      }
    }
    return __dep_exact_f855840627e6e145.int(__s111local0 ? __s111local0.costC2 : 0);
  };
  return CastleAllianceBattleGroundData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleAllianceBattleGroundData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
