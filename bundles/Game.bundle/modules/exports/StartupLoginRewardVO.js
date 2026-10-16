Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function StartupLoginRewardVO() {
    this._startupLoginBonusRewardID = 0;
    this._rewardID = 0;
  }
  StartupLoginRewardVO.prototype.fillFromParamXML = function (__s5param0) {
    this._startupLoginBonusRewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("beginnerLoginRewardID", __s5param0, "-1", true));
    this._rewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "-1", true));
  };
  StartupLoginRewardVO.prototype.setReward = function (__s7param0) {
    this._rewardList = __s7param0;
  };
  Object.defineProperty(StartupLoginRewardVO.prototype, "startupLoginBonusRewardID", {
    get: function () {
      return this._startupLoginBonusRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartupLoginRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartupLoginRewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  return StartupLoginRewardVO;
}();
exports.StartupLoginRewardVO = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
