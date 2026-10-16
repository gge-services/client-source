Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstLegendSkills() {}
  ClientConstLegendSkills.getGenericTextReplacementIDForEffectType = function (__s5param0) {
    if (ClientConstLegendSkills.GROUP_ABSOLUTE_SKILLS.indexOf(__s5param0) > -1) {
      return "";
    } else {
      return __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE;
    }
  };
  ClientConstLegendSkills.getBBColorCode = function (__s9param0) {
    return __s9param0.replace("0x", "#");
  };
  ClientConstLegendSkills.getHexColorValue = function (__s11param0) {
    return __dep_exact_f855840627e6e145.int(__s11param0);
  };
  ClientConstLegendSkills.__initialize_static_members = function () {
    ClientConstLegendSkills.GROUP_ABSOLUTE_SKILLS = [__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_WAVE, __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_ATTACK_TOOL_AMOUNT_FLANK, __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.LOOT_CAPACITY_BONUS, __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.SPY_AMOUNT_BONUS, __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_DEFENSE_TOOL_SLOT_FLANK, __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.HIDEOUT_CAPACITY_BONUS];
  };
  ClientConstLegendSkills.COLORCODE_RED = "#F86D6D";
  ClientConstLegendSkills.COLORCODE_LIGHTWHITE = "#F2F2F2";
  ClientConstLegendSkills.COLORCODE_GREEN = "#A0CC3A";
  ClientConstLegendSkills.COLORCODE_YELLOW = "#F9BB23";
  ClientConstLegendSkills.COLORCODE_TEXT = "#CCCCCC";
  return ClientConstLegendSkills;
}();
exports.ClientConstLegendSkills = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
__s0local0.__initialize_static_members();
