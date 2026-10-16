Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AGachaEventVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._freeChestResetTime = 0;
    __s3local0._currentMultiPull = 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AGachaEventVO, __s1param0);
  AGachaEventVO.prototype.parseEventXmlNode = function (__s5param0) {
    __s1param0.prototype.parseEventXmlNode.call(this, __s5param0);
  };
  AGachaEventVO.prototype.parseParamObject = function (__s7param0) {
    __s1param0.prototype.parseParamObject.call(this, __s7param0);
    this.parseGachaEvent(__s7param0);
  };
  AGachaEventVO.prototype.parseGachaEvent = function (__s9param0) {
    if (__s9param0.FCRT) {
      this._freeChestResetTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0.FCRT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
    if (__s9param0.OP) {
      this._ownPoints = __dep_exact_f855840627e6e145.int(__s9param0.OP);
    }
    if (__s9param0.OR) {
      this._ownRank = __dep_exact_f855840627e6e145.int(__s9param0.OR);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.UPDATED, this));
  };
  AGachaEventVO.prototype.setRankAndPoints = function (__s14param0, __s14param1, __s14param2) {
    __s1param0.prototype.setRankAndPoints.call(this, __s14param0, __s14param1, __s14param2);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.UPDATED, this));
  };
  AGachaEventVO.prototype.getGachaVOs = function () {
    return __dep_export_CastleModel.CastleModel.gachaData.getGachaVOs(this.eventId, this.rewardSetId, this.leagueID);
  };
  AGachaEventVO.prototype.getGachaVOByLevel = function (__s18param0) {
    return __dep_export_CastleModel.CastleModel.gachaData.getGachaVOByLevel(this.eventId, this.rewardSetId, this.leagueID, __s18param0);
  };
  AGachaEventVO.prototype.getCurrentGachaVO = function () {
    return __dep_export_CastleModel.CastleModel.gachaData.getCurrentGachaVO(this.eventId, this.rewardSetId, this.leagueID, this.ownPoints);
  };
  AGachaEventVO.prototype.getCurrentLevel = function () {
    return this.getCurrentGachaVO().gachaLevel;
  };
  AGachaEventVO.prototype.getCurrentLevelProgress = function (__s24param0 = 0) {
    return this._ownPoints + __s24param0 - this.getCurrentGachaVO().minPulls;
  };
  AGachaEventVO.prototype.getCurrentLevelMaxPulls = function () {
    return this.getCurrentGachaVO().maxPulls - this.getCurrentGachaVO().minPulls + 1;
  };
  AGachaEventVO.prototype.getIsMaxLevel = function () {
    return this.getCurrentGachaVO().isMaxLevel;
  };
  Object.defineProperty(AGachaEventVO.prototype, "freeChestResetTime", {
    get: function () {
      return this._freeChestResetTime;
    },
    enumerable: true,
    configurable: true
  });
  AGachaEventVO.prototype.assetName = function () {
    return this.eventType;
  };
  Object.defineProperty(AGachaEventVO.prototype, "eventName", {
    get: function () {
      return this.assetName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new __s0local0(275, 43);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "animationScale", {
    get: function () {
      return 0.25;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "animationFPS", {
    get: function () {
      return 30;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "tooltip_gachaName_" + this.assetName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "currentMultiPull", {
    get: function () {
      return this._currentMultiPull;
    },
    set: function (__s48param0) {
      this._currentMultiPull = __s48param0;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.MULTIPULL_CHANGED, this));
    },
    enumerable: true,
    configurable: true
  });
  return AGachaEventVO;
}(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO);
exports.AGachaEventVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IEventOverviewable");
