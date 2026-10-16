Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LeaderboardRewardVO = require("gge-module:export_LeaderboardRewardVO");
var __s0local0 = function (__s1param0) {
  function CastleLeaderBoardRewardsData(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._leaderboardRewards = new Map();
    var __s3local1 = __s3param0.leaderboardRewards;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = parseInt(__s3local4.leaderboardRewardID || "");
          var __s3local6 = new __dep_export_LeaderboardRewardVO.LeaderboardRewardVO();
          __s3local6.fillFromParamXML(__s3local4);
          __s3local0._leaderboardRewards.set(__s3local5, __s3local6);
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLeaderBoardRewardsData, __s1param0);
  CastleLeaderBoardRewardsData.prototype.getRewardListForDialogList = function (__s9param0, __s9param1, __s9param2 = -1) {
    var __s9local0 = [];
    this._leaderboardRewards.forEach(function (__s11param0) {
      if (__s11param0.eventTypeID == __s9param0 && __s11param0.leaderboardRewardSetID == __s9param1 && (__s9param2 == -1 || __s11param0.leagueTypeID == __s9param2)) {
        __s9local0.push({
          rank: __s11param0.maxRank,
          rewards: __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s11param0.rewardIDs)
        });
      }
    });
    __s9local0.sort(function (__s14param0, __s14param1) {
      return __s14param0.rank - __s14param1.rank;
    });
    var __s9local1 = [];
    for (var __s9local2 = 0; __s9local2 < __s9local0.length; __s9local2++) {
      var __s9local3 = {};
      var __s9local4 = undefined;
      var __s9local5 = undefined;
      if (__s9local2 == 0) {
        __s9local4 = 1;
        __s9local5 = __s9local0[__s9local2].rank;
      } else {
        __s9local4 = __s9local0[__s9local2 - 1].rank + 1;
        __s9local5 = __s9local0[__s9local2].rank;
      }
      __s9local3.rank = __s9local4 == __s9local5 ? [__s9local5] : [__s9local4, __s9local5];
      __s9local3.rewards = __s9local0[__s9local2].rewards;
      __s9local3.index = __s9local2;
      __s9local1.push(__s9local3);
    }
    return __s9local1;
  };
  return CastleLeaderBoardRewardsData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleLeaderBoardRewardsData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
