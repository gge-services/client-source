Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ActivityRewardVO() {
    this._activityRewardID = 0;
    this._rewardID = 0;
    this._waitingTime = 0;
  }
  ActivityRewardVO.prototype.fillFromParamXML = function (__s5param0) {
    this._activityRewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("activityRewardID", __s5param0, "-1", true));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "-1", true));
    this._waitingTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("waitingTime", __s5param0, "-1", true));
  };
  ActivityRewardVO.prototype.setReward = function (__s7param0) {
    this._rewardList = __s7param0;
  };
  Object.defineProperty(ActivityRewardVO.prototype, "activityRewardID", {
    get: function () {
      return this._activityRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ActivityRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ActivityRewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  return ActivityRewardVO;
}();
exports.ActivityRewardVO = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
