Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEilandRewardItemVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    this._id = 0;
    this._topXValue = -1;
    this._cargoPointsNeeded = 0;
    this._id = __s3param0;
    this._cargoPointsNeeded = __s3param1;
    this._rewardList = __s3param2;
    this._topXValue = __s3param3;
    this._rewardSetID = __s3param4;
  }
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "cargoPointsNeeded", {
    get: function () {
      return this._cargoPointsNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "isTopXReward", {
    get: function () {
      return this._topXValue > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "topXValue", {
    get: function () {
      return this._topXValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandRewardItemVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandRewardItemVO;
}();
exports.CastleEilandRewardItemVO = __s0local0;
