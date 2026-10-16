Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RecruitmentHelper() {}
  RecruitmentHelper.cancelCurrentSlot = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = "";
    var __s5local1 = "";
    if (__s5param1 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS || __s5param1 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES) {
      __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_recruit_abort_confirm_soldier_title");
      __s5local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_recruit_abort_confirm_soldier_copy");
    } else if (__s5param1 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_recruit_abort_confirm_tool_title");
      __s5local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_recruit_abort_confirm_tool_copy");
    }
    var __s5local2 = __s5param2 == __s5param3 ? __dep_export_CastleTimedYesNoDialog.CastleTimedYesNoDialog : __dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s5local2, new __dep_export_CastleTimedYesNoDialogProperties.CastleTimedYesNoDialogProperties(__s5local0, __s5local1, "countdown_restTime", __s5param0.remainingTimeInSeconds, false, __s5param4));
  };
  RecruitmentHelper.boostCurrentSlot = function (__s9param0, __s9param1, __s9param2, __s9param3, __s9param4 = null, __s9param5 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBoostUnitPackageVO.C2SBoostUnitPackageVO(__s9param1, __s9param0.pos, __dep_export_CastleModel.CastleModel.permanentCastleData.getCurrentCastle().areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __s9param0 == __s9param3 ? __dep_exact_26a421b704832cff.RecruitmentConst.PRODUCTION_SLOT_TYPE_NAME : __dep_exact_26a421b704832cff.RecruitmentConst.QUEUE_SLOT_TYPE_NAME));
  };
  RecruitmentHelper.skipSlot = function (__s11param0, __s11param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkipUnitPackageVO.C2SSkipUnitPackageVO(__s11param0, __s11param1));
  };
  RecruitmentHelper.getUnitDoublingCosts = function (__s13param0, __s13param1, __s13param2, __s13param3) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s13param0.cleavageOfCellsCosts[__s13param1] * __s13param2) * (__s13param3 + 1));
  };
  RecruitmentHelper.getDoubledUnitAmount = function (__s15param0, __s15param1, __s15param2 = true) {
    return __dep_exact_f855840627e6e145.int(__s15param0 * Math.pow(2, __s15param1 + (__s15param2 ? 1 : 0)));
  };
  RecruitmentHelper.isRecruitingUnits = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.militaryData.getPackageListByCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
    return !!__s17local0.currentProductionSlot && !__s17local0.currentProductionSlot.isFree;
  };
  RecruitmentHelper.isProducingTools = function (__s19param0 = null) {
    var __s19local0 = __dep_export_CastleModel.CastleModel.militaryData.getPackageListByCategory(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS);
    if (__s19local0.currentProductionSlot && !__s19local0.currentProductionSlot.isFree) {
      var __s19local1 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s19local0.currentProductionSlot.wodId);
      return !__s19param0 || __s19local1.unitType == __s19param0;
    }
    return false;
  };
  return RecruitmentHelper;
}();
exports.RecruitmentHelper = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLargeYesNoDialog = require("gge-module:export_CastleLargeYesNoDialog");
var __dep_export_CastleTimedYesNoDialog = require("gge-module:export_CastleTimedYesNoDialog");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SBoostUnitPackageVO = require("gge-module:export_C2SBoostUnitPackageVO");
var __dep_export_C2SSkipUnitPackageVO = require("gge-module:export_C2SSkipUnitPackageVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimedYesNoDialogProperties = require("gge-module:export_CastleTimedYesNoDialogProperties");
