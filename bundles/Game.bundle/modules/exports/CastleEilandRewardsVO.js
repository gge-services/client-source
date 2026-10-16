Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastleEilandRewardsVO(__s3param0) {
    this.fillFromParamXML(__s3param0);
  }
  CastleEilandRewardsVO.prototype.fillFromParamXML = function (__s5param0) {
    this._rewardList = [];
    this._rewardPlayerList = [];
    var __s5local0;
    var __s5local1;
    var __s5local2 = __s5param0.islandrewardranks;
    var __s5local3 = 0;
    var __s5local4 = 0;
    var __s5local5 = 0;
    var __s5local6 = 0;
    if (__s5local2 != null) {
      for (var __s5local7 = 0, __s5local8 = __s5local2; __s5local7 < __s5local8.length; __s5local7++) {
        if ((__s5local1 = __s5local8[__s5local7]) !== undefined) {
          __s5local4 = parseInt(__s5local1.islandRewardRankID || "");
          __s5local3 = parseInt(__s5local1.cargoPointRequirement || "0");
          __s5local5 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("topXValue", __s5local1, "-1"));
          __s5local0 = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5local1.rewardIDs || "");
          __s5local6 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("islandRewardSetID", __s5local1, "-1"));
          this._rewardList.push(new __dep_export_CastleEilandRewardItemVO.CastleEilandRewardItemVO(__s5local4, __s5local3, __s5local0, __s5local5, __s5local6));
        }
      }
    }
    if ((__s5local2 = __s5param0.islandPlayerRewards) != null) {
      for (var __s5local9 = 0, __s5local10 = __s5local2; __s5local9 < __s5local10.length; __s5local9++) {
        if ((__s5local1 = __s5local10[__s5local9]) !== undefined) {
          __s5local4 = parseInt(__s5local1.islandPlayerRewardID || "");
          __s5local3 = parseInt(__s5local1.cargoPointRequirement || "0");
          __s5local5 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("topXValue", __s5local1, "-1"));
          __s5local0 = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5local1.rewardIDs || "");
          __s5local6 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("islandRewardSetID", __s5local1, "-1"));
          this._rewardPlayerList.push(new __dep_export_CastleEilandRewardItemVO.CastleEilandRewardItemVO(__s5local4, __s5local3, __s5local0, __s5local5, __s5local6));
        }
      }
    }
  };
  CastleEilandRewardsVO.prototype.getActiveRewardItems = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).rewardSet;
    return this._rewardList.filter(function (__s17param0) {
      var __s17local0 = [];
      for (var __s17local1 = 1; __s17local1 < arguments.length; __s17local1++) {
        __s17local0[__s17local1 - 1] = arguments[__s17local1];
      }
      return __s17param0.rewardSetID == __s15local0;
    });
  };
  CastleEilandRewardsVO.prototype.getActivePlayerRewardItems = function () {
    var __s21local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).rewardSet;
    return this._rewardPlayerList.filter(function (__s23param0) {
      var __s23local0 = [];
      for (var __s23local1 = 1; __s23local1 < arguments.length; __s23local1++) {
        __s23local0[__s23local1 - 1] = arguments[__s23local1];
      }
      return __s23param0.rewardSetID == __s21local0;
    });
  };
  CastleEilandRewardsVO.prototype.getReward = function (__s27param0) {
    if (this._rewardList != null) {
      for (var __s27local0 = 0, __s27local1 = this._rewardList; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined && __s27local2.id == __s27param0) {
          return __s27local2;
        }
      }
    }
    return null;
  };
  CastleEilandRewardsVO.__initialize_static_members = function () {
    CastleEilandRewardsVO.REWARD_BOOBY1 = 0;
    CastleEilandRewardsVO.REWARD_BOOBY2 = 1;
    CastleEilandRewardsVO.REWARD_BOOBY3 = 2;
    CastleEilandRewardsVO.REWARD_BOOBY4 = 3;
    CastleEilandRewardsVO.REWARD_BOOBY5 = 4;
    CastleEilandRewardsVO.REWARD_BOOBY6 = 5;
    CastleEilandRewardsVO.REWARD_TOPX = 6;
    CastleEilandRewardsVO.TOPX_MIN_RANK = 5;
  };
  return CastleEilandRewardsVO;
}();
exports.CastleEilandRewardsVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleEilandRewardItemVO = require("gge-module:export_CastleEilandRewardItemVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__s0local0.__initialize_static_members();
