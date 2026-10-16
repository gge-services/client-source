Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ColossusRankingItemVO() {
    this._playerRank = 0;
    this._playerPoints = 0;
    this._playerId = 0;
  }
  ColossusRankingItemVO.prototype.updateVO = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    this._playerRank = __s5param0;
    this._playerName = __s5param1;
    this._playerPoints = __dep_exact_f855840627e6e145.int(__s5param2);
    this._playerId = __s5param3;
  };
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerRank", {
    get: function () {
      return this._playerRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerPoints", {
    get: function () {
      return this._playerPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusRankingItemVO.prototype, "playerId", {
    get: function () {
      return this._playerId;
    },
    enumerable: true,
    configurable: true
  });
  return ColossusRankingItemVO;
}();
exports.ColossusRankingItemVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
