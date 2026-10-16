Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __s0local0 = function () {
  function EffectConditionHelper() {}
  EffectConditionHelper.isEffectApplicable = function (__s5param0, __s5param1) {
    return !!__s5param0 && (!__s5param1 || !!__s5param0.isForAreaType(__s5param1.areaType)) && EffectConditionHelper.isEffectForActiveRaidBoss(__s5param0);
  };
  EffectConditionHelper.isEffectForActiveRaidBoss = function (__s7param0) {
    if (!__s7param0) {
      return false;
    }
    if (__s7param0.raidBossIDs.length == 0) {
      return true;
    }
    var __s7local0 = __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    return !!__s7local0 && !!__s7local0.raidBossServerDataVO && __s7param0.isForRaidBoss(__s7local0.raidBossServerDataVO.raidBossID);
  };
  return EffectConditionHelper;
}();
exports.EffectConditionHelper = __s0local0;
