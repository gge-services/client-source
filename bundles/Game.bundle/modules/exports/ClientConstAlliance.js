Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ClientConstAlliance() {}
  ClientConstAlliance.getInferiorRanks = function (__s5param0) {
    var __s5local0 = [];
    if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__s5param0, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_NEW_LEADER)) {
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_COLEADER);
    }
    if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__s5param0, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_HANDLE_GENERAL)) {
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_MARSHAL);
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_TREASURER);
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_DIPLOMAT);
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_RECRUITER);
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_GENERAL);
    }
    if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__s5param0, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_HANDLE_SEAGANT)) {
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_SERGEANT);
    }
    if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__s5param0, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_KICK_MEMBER)) {
      __s5local0.push(__dep_exact_26a421b704832cff.AllianceConst.RANK_MEMBER);
    }
    return __s5local0;
  };
  ClientConstAlliance.CAT_NONE = "cat_none";
  ClientConstAlliance.CAT_OVERVIEW = "cat_overview";
  ClientConstAlliance.CAT_MEMBERLIST = "cat_memberlist";
  ClientConstAlliance.CAT_MANAGEMENT = "cat_management";
  ClientConstAlliance.CAT_TREASURY = "cat_treasury";
  ClientConstAlliance.CAT_COMMUNICATION = "cat_chat";
  ClientConstAlliance.CAT_DIPLOMACY = "cat_diplomacy";
  ClientConstAlliance.CAT_FAME = "cat_fame";
  ClientConstAlliance.CAT_FORGE = "cat_forge";
  ClientConstAlliance.CAT_FORGE_HIGH = "cat_forgeHigh";
  ClientConstAlliance.CAT_BOOKMARKS = "cat_bookmarks";
  ClientConstAlliance.CAT_ABG = "cat_abg";
  ClientConstAlliance.MIN_LEVEL_ALLIANCE_GIFTS = 6;
  ClientConstAlliance.STATUS_REQUEST_POSSIBLE = 1;
  ClientConstAlliance.STATUS_REQUEST_PROCESSING = 2;
  ClientConstAlliance.STATUS_REQUEST_CONFIRMED = 3;
  return ClientConstAlliance;
}();
exports.ClientConstAlliance = __s0local0;
