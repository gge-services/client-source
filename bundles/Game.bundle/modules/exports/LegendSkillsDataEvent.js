Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LegendSkillsDataEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LegendSkillsDataEvent, __s1param0);
  LegendSkillsDataEvent.__initialize_static_members = function () {
    LegendSkillsDataEvent.LEGEND_SKILLS_RESET = "legendSkillsReset";
    LegendSkillsDataEvent.LEGEND_SKILL_ADDED = "legendSkillAdded";
    LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED = "legendSkillsUpdated";
  };
  return LegendSkillsDataEvent;
}(createjs.Event);
exports.LegendSkillsDataEvent = __s0local0;
__s0local0.__initialize_static_members();
