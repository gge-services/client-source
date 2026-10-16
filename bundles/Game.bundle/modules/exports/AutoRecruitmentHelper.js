Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AutoRecruitmentHelper() {}
  AutoRecruitmentHelper.getCurrentListLoopCount = function (__s5param0) {
    return 0;
  };
  AutoRecruitmentHelper.createAutoRecruitSnapshot = function (__s7param0) {
    for (var __s7local0 = __dep_export_CastleModel.CastleModel.militaryData.getPackageListById(__s7param0).slotsArray, __s7local1 = [], __s7local2 = 0; __s7local2 < __s7local0.length; ++__s7local2) {
      var __s7local3 = __s7local0[__s7local2];
      if (__s7local3 && __s7local3.wodId >= 0) {
        __s7local1.push({
          ID: __s7local3.wodId,
          A: __s7local3.amount,
          CBS: __s7local3.numOfBoost,
          IA: __s7local3.amount
        });
      }
    }
    return __s7local1;
  };
  AutoRecruitmentHelper.isEventKingdom = function (__s12param0) {
    switch (__s12param0) {
      case __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID:
      case __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID:
        return true;
      default:
        return false;
    }
  };
  AutoRecruitmentHelper.getRemainingEventKingdomTime = function (__s15param0) {
    var __s15local0;
    switch (__s15param0) {
      case __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID).resetTime);
      case __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID:
        __s15local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
        return __dep_exact_f855840627e6e145.int(__s15local0 ? __s15local0.remainingEventTimeInSeconds : 0);
      default:
        return 0;
    }
  };
  return AutoRecruitmentHelper;
}();
exports.AutoRecruitmentHelper = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
