Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RankingRewardVO(__s3param0, __s3param1, __s3param2) {
    this._rank = 0;
    this._usePoints = false;
    this._listIndex = 0;
    this._collectableList = __s3param0;
    this._rank = __s3param1;
    this._usePoints = __s3param2;
  }
  Object.defineProperty(RankingRewardVO.prototype, "collectableList", {
    get: function () {
      return this._collectableList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RankingRewardVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RankingRewardVO.prototype, "usePoints", {
    get: function () {
      return this._usePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RankingRewardVO.prototype, "listIndex", {
    get: function () {
      return this._listIndex;
    },
    set: function (__s13param0) {
      this._listIndex = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  return RankingRewardVO;
}();
exports.RankingRewardVO = __s0local0;
