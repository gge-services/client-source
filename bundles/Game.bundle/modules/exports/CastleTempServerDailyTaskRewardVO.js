Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CastleTempServerDailyTaskRewardVO() {
    this.id = 0;
    this.minDailyTaskPointsPerDay = 0;
  }
  CastleTempServerDailyTaskRewardVO.prototype.parseXML = function (__s5param0) {
    this.id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tempServerDailyTaskRewardID", __s5param0, "0"));
    var __s5local0 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "0"));
    this.minDailyTaskPointsPerDay = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minDailyTaskPointsPerDay", __s5param0, "0"));
    this.rankRewards = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5local0.toString());
  };
  Object.defineProperty(CastleTempServerDailyTaskRewardVO.prototype, "minDailyTaskPoints", {
    get: function () {
      return this.minDailyTaskPointsPerDay;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTempServerDailyTaskRewardVO;
}();
exports.CastleTempServerDailyTaskRewardVO = __s0local0;
