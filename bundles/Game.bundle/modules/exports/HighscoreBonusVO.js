Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function HighscoreBonusVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8) {
    this._highestRank = 0;
    this._lowestRank = 0;
    this._c1Reward = 0;
    this._minAmount = 0;
    this._toolRewardWod = 0;
    this._toolOffset = 0;
    this._toolMinAmount = 0;
    this._leagueId = 0;
    this._leagueId = __s3param0;
    this._lowestRank = __s3param1;
    this._highestRank = __s3param2;
    this._c1Reward = __s3param3;
    this._unitRewards = [];
    this._toolRewardWod = __s3param5;
    this._minAmount = __s3param6;
    this._toolOffset = __s3param7;
    this._toolMinAmount = __s3param8;
    var __s3local0 = __s3param4.split("#");
    if (__s3local0 != null) {
      for (var __s3local1 = 0, __s3local2 = __s3local0; __s3local1 < __s3local2.length; __s3local1++) {
        var __s3local3 = __s3local2[__s3local1];
        if (__s3local3 !== undefined) {
          var __s3local4 = __s3local3.split("+");
          if (parseInt(__s3local4[0]) > 0) {
            this._unitRewards.push(new __dep_export_HighscoreBonusUnitRewardVO.HighscoreBonusUnitRewardVO(parseInt(__s3local4[0]), parseInt(__s3local4[1])));
          }
        }
      }
    }
  }
  Object.defineProperty(HighscoreBonusVO.prototype, "highestRank", {
    get: function () {
      return this._highestRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "lowestRank", {
    get: function () {
      return this._lowestRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "c1Reward", {
    get: function () {
      return this._c1Reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "unitRewards", {
    get: function () {
      return this._unitRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "toolRewardWod", {
    get: function () {
      return this._toolRewardWod;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "toolOffset", {
    get: function () {
      return this._toolOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "toolMinAmount", {
    get: function () {
      return this._toolMinAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighscoreBonusVO.prototype, "leagueId", {
    get: function () {
      return this._leagueId;
    },
    enumerable: true,
    configurable: true
  });
  return HighscoreBonusVO;
}();
exports.HighscoreBonusVO = __s0local0;
var __dep_export_HighscoreBonusUnitRewardVO = require("gge-module:export_HighscoreBonusUnitRewardVO");
