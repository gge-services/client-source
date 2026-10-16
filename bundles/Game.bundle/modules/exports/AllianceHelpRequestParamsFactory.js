Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceHelpRequestParamsFactory() {}
  AllianceHelpRequestParamsFactory.parseParams = function (__s5param0, __s5param1) {
    var __s5local0;
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        __s5local0 = new __dep_export_AllianceHelpRequestRecruitParamsVO.AllianceHelpRequestRecruitParamsVO();
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
        __s5local0 = new __dep_export_AllianceHelpRequestHealParamsVO.AllianceHelpRequestHealParamsVO();
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR:
        __s5local0 = new __dep_export_AllianceHelpRequestRepairParamsVO.AllianceHelpRequestRepairParamsVO();
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD:
        __s5local0 = new __dep_export_AllianceHelpRequestConstructionParamsVO.AllianceHelpRequestConstructionParamsVO();
    }
    __s5local0.parseParams(__s5param1);
    return __s5local0;
  };
  return AllianceHelpRequestParamsFactory;
}();
exports.AllianceHelpRequestParamsFactory = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AllianceHelpRequestConstructionParamsVO = require("gge-module:export_AllianceHelpRequestConstructionParamsVO");
var __dep_export_AllianceHelpRequestHealParamsVO = require("gge-module:export_AllianceHelpRequestHealParamsVO");
var __dep_export_AllianceHelpRequestRecruitParamsVO = require("gge-module:export_AllianceHelpRequestRecruitParamsVO");
var __dep_export_AllianceHelpRequestRepairParamsVO = require("gge-module:export_AllianceHelpRequestRepairParamsVO");
