Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LoginBonusDailyRewardVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    this._day = 0;
    this._day = __s3param0;
    this._mainRewards = __s3param1;
    this._mainRewardPicked = __s3param2;
    this._alliReward = __s3param3;
    this._vipReward = __s3param4;
  }
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "day", {
    get: function () {
      return this._day;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "alliReward", {
    get: function () {
      return this._alliReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "vipReward", {
    get: function () {
      return this._vipReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "mainRewards", {
    get: function () {
      return this._mainRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoginBonusDailyRewardVO.prototype, "mainRewardPicked", {
    get: function () {
      return this._mainRewardPicked;
    },
    enumerable: true,
    configurable: true
  });
  return LoginBonusDailyRewardVO;
}();
exports.LoginBonusDailyRewardVO = __s0local0;
