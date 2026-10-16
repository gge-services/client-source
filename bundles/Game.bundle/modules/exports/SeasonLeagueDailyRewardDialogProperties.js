Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueDailyRewardDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._eventId = 0;
    __s3local0._rank = -1;
    __s3local0._allianceRank = -1;
    __s3local0._eventId = __dep_exact_f855840627e6e145.int(__s3param0.EID);
    __s3local0._rank = __dep_exact_f855840627e6e145.int(__s3param0.R);
    __s3local0._reward = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, __s3param0.KLMID);
    __s3local0._allianceRank = __dep_exact_f855840627e6e145.int(__s3param0.hasOwnProperty("KLAR") ? __s3param0.KLAR : -1);
    __s3local0._allianceReward = __s3param0.hasOwnProperty("KLAMID") ? __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, __s3param0.KLAMID) : null;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueDailyRewardDialogProperties, __s1param0);
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "reward", {
    get: function () {
      return this._reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueDailyRewardDialogProperties.prototype, "allianceReward", {
    get: function () {
      return this._allianceReward;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueDailyRewardDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SeasonLeagueDailyRewardDialogProperties = __s0local0;
