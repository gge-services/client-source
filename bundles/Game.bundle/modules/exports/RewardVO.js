Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RewardVO() {
    this._id = -1;
    this._grantType = -1;
  }
  RewardVO.prototype.fillFromParamXml = function (__s5param0) {
    this._id = parseInt(__s5param0.rewardID || "");
    this._grantType = parseInt(__s5param0.grantType || __dep_exact_26a421b704832cff.RewardConst.PLAYER + "");
    this._rewardList = __dep_export_CollectableManager.CollectableManager.parser.x2cRewards.createList(__s5param0);
  };
  Object.defineProperty(RewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardVO.prototype, "grantType", {
    get: function () {
      return this._grantType;
    },
    enumerable: true,
    configurable: true
  });
  return RewardVO;
}();
exports.RewardVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
