Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_RewardHubItemTextVO = require("gge-module:export_RewardHubItemTextVO");
var __s0local0 = function () {
  function RewardHubTextsFactory() {}
  RewardHubTextsFactory.createRewardHubItemTextVO = function (__s5param0) {
    var __s5local0;
    switch (__s5param0.mainEventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        var __s5local1 = "event_title_" + __s5param0.mainEventID;
        __s5local0 = isNaN(__s5param0.promotionID) || __s5param0.promotionID == 0 ? new __dep_export_RewardHubItemTextVO.RewardHubItemTextVO(__s5local1, "dialog_rewardHub_eventEndReward") : new __dep_export_RewardHubItemTextVO.RewardHubItemTextVO(__s5local1, "dialog_rewardHub_promotionReward");
        break;
      default:
        __s5local0 = new __dep_export_RewardHubItemTextVO.RewardHubItemTextVO("event_title_" + __s5param0.mainEventID, "dialog_rewardHub_eventEndReward");
    }
    return __s5local0;
  };
  return RewardHubTextsFactory;
}();
exports.RewardHubTextsFactory = __s0local0;
