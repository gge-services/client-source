Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function WelcomeBackRewardVO() {
    this._welcomeBackRewardID = -1;
    this._rewardIDs = [];
  }
  WelcomeBackRewardVO.prototype.fillFromParamXml = function (__s5param0) {
    this._welcomeBackRewardID = parseInt(__s5param0.welcomeBackRewardID || "");
    this._rewardIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s5param0);
  };
  Object.defineProperty(WelcomeBackRewardVO.prototype, "rewardList", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(this._rewardIDs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WelcomeBackRewardVO.prototype, "id", {
    get: function () {
      return this._welcomeBackRewardID;
    },
    enumerable: true,
    configurable: true
  });
  return WelcomeBackRewardVO;
}();
exports.WelcomeBackRewardVO = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
