Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ATriggerEventVO = require("gge-module:export_ATriggerEventVO");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueEventVO() {
    var __s3local0 = this;
    __s3local0._originalEventDays = 0;
    __s3local0._remainingEventDays = 0;
    __s3local0._rewardSetId = 0;
    __s3local0._hasAllianceRanking = false;
    __s3local0._leaguetypeID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEventVO, __s1param0);
  SeasonLeagueEventVO.prototype.parseParamObject = function (__s5param0) {
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
    this._remainingEventDays = __dep_exact_f855840627e6e145.int(__s5param0.KLRD);
    this._originalEventDays = __dep_exact_f855840627e6e145.int(__s5param0.KLRT);
    this._rewardSetId = __dep_exact_f855840627e6e145.int(__s5param0.RSID);
    this._hasAllianceRanking = __s5param0.KLARE == 1;
    this._leaguetypeID = __s5param0.KLLID || 0;
  };
  SeasonLeagueEventVO.prototype.openDialog = function (__s7param0 = true) {
    __dep_export_CastleModel.CastleModel.seasonLeagueData.openEventDialog();
  };
  Object.defineProperty(SeasonLeagueEventVO.prototype, "endTimestamp", {
    get: function () {
      if (this._remainingEventDays <= 1) {
        var __s9local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
        if (__s9local0) {
          return __s9local0.endTimestamp;
        }
      }
      return __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this.remainingEventDays * __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATriggerEventVO.ATriggerEventVO.prototype, "endTimestamp").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "remainingEventDays", {
    get: function () {
      return this._remainingEventDays;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "originalEventDays", {
    get: function () {
      return this._originalEventDays;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "hasAllianceRanking", {
    get: function () {
      return this._hasAllianceRanking;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEventVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEventVO;
}(__dep_export_ATriggerEventVO.ATriggerEventVO);
exports.SeasonLeagueEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
