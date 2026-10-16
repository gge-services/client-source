Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RewardHubVO = require("gge-module:export_RewardHubVO");
var __s0local0 = function () {
  function RewardHubParser() {}
  RewardHubParser.prototype.parse = function (__s5param0) {
    var __s5local0;
    __dep_export_CastleModel.CastleModel.rewardHubData.reset();
    for (var __s5local1 = 0; __s5local1 < __s5param0.length; __s5local1++) {
      (__s5local0 = new __dep_export_RewardHubVO.RewardHubVO()).parseData(__s5param0[__s5local1]);
      __dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.push(__s5local0);
    }
    __dep_export_CastleModel.CastleModel.rewardHubData.setAmountOfPendingRewards(__dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.length, false);
  };
  RewardHubParser.prototype.updateUnlockedRewards = function (__s9param0) {
    if (__s9param0) {
      var __s9local0;
      for (var __s9local1 = 0; __s9local1 < __dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.length; __s9local1++) {
        __s9local0 = __dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs[__s9local1];
        for (var __s9local2 = 0; __s9local2 < __s9param0.length; __s9local2++) {
          if (__s9param0[__s9local2] == __s9local0.hubRewardID) {
            __s9local0.extraTierUnlocked = true;
          }
        }
      }
    }
  };
  return RewardHubParser;
}();
exports.RewardHubParser = __s0local0;
