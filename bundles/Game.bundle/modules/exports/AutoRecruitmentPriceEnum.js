Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentPriceEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentPriceEnum, __s1param0);
  AutoRecruitmentPriceEnum.getTypeByName = function (__s5param0) {
    return this.getByProperty(AutoRecruitmentPriceEnum, "name", __dep_export_ClientConstUtils.ClientConstUtils.lowercaseFirstLetter(__s5param0), AutoRecruitmentPriceEnum.SOLDIERS);
  };
  AutoRecruitmentPriceEnum.getTypeByListId = function (__s7param0) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.UnitProductionConst.UNIT_LIST:
        return AutoRecruitmentPriceEnum.SOLDIERS;
      case __dep_exact_26a421b704832cff.UnitProductionConst.TOOLS_LIST:
        return AutoRecruitmentPriceEnum.TOOLS;
      case __dep_exact_26a421b704832cff.UnitProductionConst.AUXILIARY_LIST:
        return AutoRecruitmentPriceEnum.AUXILIARIES;
      default:
        return AutoRecruitmentPriceEnum.SOLDIERS;
    }
  };
  AutoRecruitmentPriceEnum.__initialize_static_members = function () {
    AutoRecruitmentPriceEnum.SOLDIERS = new AutoRecruitmentPriceEnum("soldiers");
    AutoRecruitmentPriceEnum.TOOLS = new AutoRecruitmentPriceEnum("tools");
    AutoRecruitmentPriceEnum.AUXILIARIES = new AutoRecruitmentPriceEnum("auxiliaries");
  };
  return AutoRecruitmentPriceEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.AutoRecruitmentPriceEnum = __s0local0;
__s0local0.__initialize_static_members();
