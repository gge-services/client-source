Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattleGroundEventEndDialogProperties(__s3param0 = -1, __s3param1 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.playerRank = 0;
    __s3local0.allianceRank = 0;
    __s3local0.playerPoints = 0;
    __s3local0.alliancePoints = 0;
    __s3local0.settingID = 1;
    __s3local0.isCrossplay = false;
    if (__s3param0 > 0) {
      __s3local0.playerRewards = __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(__s3param0);
    }
    if (__s3param1 > 0) {
      __s3local0.allianceRewards = __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(__s3param1);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundEventEndDialogProperties, __s1param0);
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialogProperties.prototype, "playerDailyRewardIDs", {
    set: function (__s7param0) {
      this.dailyPlayerRewards = null;
      if (__s7param0) {
        this.dailyPlayerRewards = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(Array.isArray(__s7param0) ? __s7param0 : [__s7param0]);
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattleGroundEventEndDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleAllianceBattleGroundEventEndDialogProperties = __s0local0;
