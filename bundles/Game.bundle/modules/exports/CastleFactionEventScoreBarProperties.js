Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePaginatedScoreEventScoreBarProperties = require("gge-module:export_CastlePaginatedScoreEventScoreBarProperties");
var __s0local0 = function (__s1param0) {
  function CastleFactionEventScoreBarProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null, __s3param5 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionEventScoreBarProperties, __s1param0);
  Object.defineProperty(CastleFactionEventScoreBarProperties.prototype, "numThresholdRewards", {
    get: function () {
      return CastleFactionEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_1;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaginatedScoreEventScoreBarProperties.CastlePaginatedScoreEventScoreBarProperties.prototype, "numThresholdRewards").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionEventScoreBarProperties.prototype, "numRankRewards", {
    get: function () {
      return CastleFactionEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_1;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaginatedScoreEventScoreBarProperties.CastlePaginatedScoreEventScoreBarProperties.prototype, "numRankRewards").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionEventScoreBarProperties.prototype.currentPage = function () {
    return __dep_exact_f855840627e6e145.int(this._pagination.currentPage);
  };
  CastleFactionEventScoreBarProperties.prototype.maxPages = function () {
    return __dep_exact_f855840627e6e145.int(this._pagination.maxPages);
  };
  CastleFactionEventScoreBarProperties.prototype.getOwnPointsText = function (__s17param0) {
    return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION).ownPoints);
  };
  CastleFactionEventScoreBarProperties.prototype.nextThresholdProgress = function (__s19param0, __s19param1, __s19param2) {
    var __s19local0 = __s19param1[__s19param0 = __dep_exact_f855840627e6e145.int(this.getPaginatedIndex(__s19param0) + 1)];
    var __s19local1 = __s19param0 > 0 ? __s19param1[__s19param0 - 1] : 0;
    return Math.min(1, Math.max(__s19param2 - __s19local1, 0) / (__s19local0 - __s19local1));
  };
  CastleFactionEventScoreBarProperties.__initialize_static_members = function () {
    CastleFactionEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_1 = 3;
    CastleFactionEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_1 = 3;
  };
  return CastleFactionEventScoreBarProperties;
}(__dep_export_CastlePaginatedScoreEventScoreBarProperties.CastlePaginatedScoreEventScoreBarProperties);
exports.CastleFactionEventScoreBarProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IScorebarProperties");
__s0local0.__initialize_static_members();
