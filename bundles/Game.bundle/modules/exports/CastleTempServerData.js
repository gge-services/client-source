Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTempServerEventEvent = require("gge-module:export_CastleTempServerEventEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SeasonLeagueRewardOverviewDialogItemVO = require("gge-module:export_SeasonLeagueRewardOverviewDialogItemVO");
var __dep_export_CastleTempServerEffectRerollDialog = require("gge-module:export_CastleTempServerEffectRerollDialog");
var __dep_export_CastleTempServerEffectRerollDialogProperties = require("gge-module:export_CastleTempServerEffectRerollDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __dep_export_CastleTempServerDailyTaskRewardVO = require("gge-module:export_CastleTempServerDailyTaskRewardVO");
var __dep_export_CastleTempServerRewardVO = require("gge-module:export_CastleTempServerRewardVO");
var __dep_export_TempServerRankRangeVO = require("gge-module:export_TempServerRankRangeVO");
var __dep_export_SpecialServerPreBuiltCastleVO = require("gge-module:export_SpecialServerPreBuiltCastleVO");
var __s0local0 = function (__s1param0) {
  function CastleTempServerData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._configs = new Map();
    __s3local0._rankRanges = [];
    __s3local0._rewardVO = [];
    __s3local0._dailyTasksThresholds = [];
    __s3local0._preBuildCastles = new Map();
    __s3local0.openChargeEffectRerollDialogOnParse = false;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerData, __s1param0);
  CastleTempServerData.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.tempServerRankRewards; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_CastleTempServerRewardVO.CastleTempServerRewardVO();
        __s5local3.parseXML(__s5local2);
        this._rewardVO.push(__s5local3);
      }
    }
    for (var __s5local4 = 0, __s5local5 = __s5param0.tempServerRankPoints; __s5local4 < __s5local5.length; __s5local4++) {
      var __s5local6 = __s5local5[__s5local4];
      if (__s5local6 !== undefined) {
        var __s5local7 = new __dep_export_TempServerRankRangeVO.TempServerRankRangeVO();
        __s5local7.parseXML(__s5local6);
        this._rankRanges.push(__s5local7);
      }
    }
    for (var __s5local8 = 0, __s5local9 = __s5param0.tempServerSettings; __s5local8 < __s5local9.length; __s5local8++) {
      var __s5local10 = __s5local9[__s5local8];
      if (__s5local10 !== undefined) {
        var __s5local11 = new __dep_export_TempServerConfigurationVO.TempServerConfigurationVO();
        __s5local11.parseXML(__s5local10);
        this._configs.set(__s5local11.settingID, __s5local11);
      }
    }
    for (var __s5local12 = 0, __s5local13 = __s5param0.tempServerDailyTaskRewards; __s5local12 < __s5local13.length; __s5local12++) {
      var __s5local14 = __s5local13[__s5local12];
      if (__s5local14 !== undefined) {
        var __s5local15 = new __dep_export_CastleTempServerDailyTaskRewardVO.CastleTempServerDailyTaskRewardVO();
        __s5local15.parseXML(__s5local14);
        this._dailyTasksThresholds.push(__s5local15);
      }
    }
    for (var __s5local16 = 0, __s5local17 = __s5param0.tempServerPreBuiltCastles; __s5local16 < __s5local17.length; __s5local16++) {
      var __s5local18 = __s5local17[__s5local16];
      if (__s5local18 !== undefined) {
        var __s5local19 = new __dep_export_SpecialServerPreBuiltCastleVO.SpecialServerPreBuiltCastleVO();
        __s5local19.parseXML(__s5local18);
        this._preBuildCastles.set(__s5local19.preBuiltCastleID, __s5local19);
      }
    }
  };
  Object.defineProperty(CastleTempServerData.prototype, "dailyRewardLevels", {
    get: function () {
      if (this._dailyTasksThresholds) {
        return this._dailyTasksThresholds.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerData.prototype.getDailyTaskRewardsByPoints = function (__s26param0) {
    var __s26local0 = new __dep_export_CollectableList.CollectableList();
    if (this._dailyTasksThresholds != null) {
      for (var __s26local1 = 0, __s26local2 = this._dailyTasksThresholds; __s26local1 < __s26local2.length; __s26local1++) {
        var __s26local3 = __s26local2[__s26local1];
        if (__s26local3 !== undefined && __s26param0 >= __s26local3.minDailyTaskPoints) {
          __s26local0.addList(__s26local3.rankRewards);
        }
      }
    }
    __s26local0.combineDuplicatedItems();
    return __s26local0;
  };
  CastleTempServerData.prototype.getMaxMinDailyTaskThreshold = function () {
    var __s32local0 = 0;
    if (this._dailyTasksThresholds != null) {
      for (var __s32local1 = 0, __s32local2 = this._dailyTasksThresholds; __s32local1 < __s32local2.length; __s32local1++) {
        var __s32local3 = __s32local2[__s32local1];
        if (__s32local3 !== undefined && __s32local3.minDailyTaskPoints > __s32local0) {
          __s32local0 = __s32local3.minDailyTaskPoints;
        }
      }
    }
    return __s32local0;
  };
  CastleTempServerData.prototype.getDailyTaskRewardsAsOverviewItems = function () {
    var __s38local0 = [];
    var __s38local1 = this._dailyTasksThresholds;
    __s38local1.sort(this.bindFunction(this.sortByPoints));
    if (__s38local1 != null) {
      for (var __s38local2 = 0, __s38local3 = __s38local1; __s38local2 < __s38local3.length; __s38local2++) {
        var __s38local4 = __s38local3[__s38local2];
        if (__s38local4 !== undefined) {
          var __s38local5 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_tempServer_dailyTask_rewards_steps", [__s38local4.id, __s38local4.minDailyTaskPoints]);
          var __s38local6 = new __dep_export_SeasonLeagueRewardOverviewDialogItemVO.SeasonLeagueRewardOverviewDialogItemVO(__s38local5, __s38local4.rankRewards);
          __s38local0.push(__s38local6);
        }
      }
    }
    return __s38local0;
  };
  CastleTempServerData.prototype.sortByPoints = function (__s44param0, __s44param1) {
    return __s44param1.minDailyTaskPoints - __s44param0.minDailyTaskPoints;
  };
  CastleTempServerData.prototype.getReachedRewardStepsByPoints = function (__s46param0) {
    var __s46local0 = 0;
    var __s46local1 = 0;
    if (this._dailyTasksThresholds != null) {
      for (var __s46local2 = 0, __s46local3 = this._dailyTasksThresholds; __s46local2 < __s46local3.length; __s46local2++) {
        var __s46local4 = __s46local3[__s46local2];
        if (__s46local4 !== undefined) {
          if (__s46local4.minDailyTaskPoints <= __s46param0) {
            __s46local0++;
          }
          __s46local1++;
        }
      }
    }
    return [__s46local0, __s46local1];
  };
  CastleTempServerData.prototype.getConfigVOByID = function (__s53param0) {
    return this._configs.get(__s53param0);
  };
  CastleTempServerData.prototype.getRewardsByRewardSetID = function (__s55param0) {
    var __s55local0 = [];
    if (this._rewardVO != null) {
      for (var __s55local1 = 0, __s55local2 = this._rewardVO; __s55local1 < __s55local2.length; __s55local1++) {
        var __s55local3 = __s55local2[__s55local1];
        if (__s55local3 !== undefined && __s55local3.rewardSetID == __s55param0) {
          __s55local0.push(__s55local3.rankReward);
        }
      }
    }
    return __s55local0;
  };
  Object.defineProperty(CastleTempServerData.prototype, "tempServerMultiplierEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerData.prototype, "currentMinMultiplier", {
    get: function () {
      if (this.tempServerMultiplierEventVO) {
        return this.tempServerMultiplierEventVO.currentMinMultiplier;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerData.prototype, "currentMaxMultiplier", {
    get: function () {
      if (this.tempServerMultiplierEventVO) {
        return this.tempServerMultiplierEventVO.currentMaxMultiplier;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerData.prototype.getDailyRankVOByID = function (__s71param0) {
    if (this._dailyTasksThresholds != null) {
      for (var __s71local0 = 0, __s71local1 = this._dailyTasksThresholds; __s71local0 < __s71local1.length; __s71local0++) {
        var __s71local2 = __s71local1[__s71local0];
        if (__s71local2 !== undefined && __s71local2.id == __s71param0) {
          return __s71local2;
        }
      }
    }
    return null;
  };
  CastleTempServerData.prototype.getDailyRankPointsByRank = function (__s77param0) {
    var __s77local0 = 0;
    if (this._rankRanges != null) {
      for (var __s77local1 = 0, __s77local2 = this._rankRanges; __s77local1 < __s77local2.length; __s77local1++) {
        var __s77local3 = __s77local2[__s77local1];
        if (__s77local3 !== undefined && __s77param0 <= __s77local3.minRank && __s77param0 >= __s77local3.maxRank) {
          __s77local0 = __s77local3.rankPoints;
          break;
        }
      }
    }
    return __s77local0;
  };
  CastleTempServerData.prototype.getRankRangeByRank = function (__s83param0) {
    if (this._rankRanges != null) {
      for (var __s83local0 = 0, __s83local1 = this._rankRanges; __s83local0 < __s83local1.length; __s83local0++) {
        var __s83local2 = __s83local1[__s83local0];
        if (__s83local2 !== undefined && __s83param0 <= __s83local2.minRank && __s83param0 >= __s83local2.maxRank) {
          return __s83local2;
        }
      }
    }
    return null;
  };
  CastleTempServerData.prototype.parse_RerollChargeEffects = function (__s89param0) {
    var __s89local0 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s89param0.CCOE[0][0]);
    var __s89local1 = new __dep_export_BonusVO.BonusVO().parseFromValueArray(__s89local0, __s89param0.CCOE[0][1]);
    var __s89local2 = __dep_exact_f855840627e6e145.int(__s89param0.CCNE && __s89param0.CCNE.length > 0 ? __s89param0.CCNE[0][0] : -1);
    var __s89local3 = __s89local2 > 0 ? __s89param0.CCNE[0][1] : [-1];
    var __s89local4 = (__s89local0 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s89local2)) ? new __dep_export_BonusVO.BonusVO().parseFromValueArray(__s89local0, __s89local3) : null;
    if (this.openChargeEffectRerollDialogOnParse) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleTempServerEffectRerollDialog.CastleTempServerEffectRerollDialog, new __dep_export_CastleTempServerEffectRerollDialogProperties.CastleTempServerEffectRerollDialogProperties(this.lastTargetForRerollCharge, __s89local1, __s89local4));
      this.openChargeEffectRerollDialogOnParse = false;
    }
    this.dispatchEvent(new __dep_export_CastleTempServerEventEvent.CastleTempServerEventEvent(__dep_export_CastleTempServerEventEvent.CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED, [__s89local1, __s89local4]));
  };
  CastleTempServerData.prototype.getPreBuildCastleVOByID = function (__s92param0) {
    return this._preBuildCastles.get(__s92param0);
  };
  return CastleTempServerData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleTempServerData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
