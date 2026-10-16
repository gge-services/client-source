Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function LegendSkillIconHelper() {}
  LegendSkillIconHelper.hideToolTip = function () {
    LegendSkillIconHelper._legendSkillToolTip.disp.visible = false;
    LegendSkillIconHelper._currentTarget = null;
  };
  LegendSkillIconHelper.showToolTip = function (__s7param0, __s7param1) {
    LegendSkillIconHelper._currentTarget = __s7param0;
    LegendSkillIconHelper._legendSkillToolTip.initToolTip(__s7param1);
    var __s7local0 = __s7param0.localToGlobal(new __s0local0(0, 0));
    LegendSkillIconHelper._legendSkillToolTip.disp.x = __s7local0.x;
    LegendSkillIconHelper._legendSkillToolTip.disp.y = Math.max(LegendSkillIconHelper._legendSkillToolTip.disp.bg.height, __s7local0.y) - __s7param0.height / 2;
    if (LegendSkillIconHelper._legendSkillToolTip.disp.y - LegendSkillIconHelper._legendSkillToolTip.disp.bg.height < 0) {
      LegendSkillIconHelper._legendSkillToolTip.disp.y = __s7local0.y + __s7param0.height / 2 + LegendSkillIconHelper._legendSkillToolTip.disp.bg.height;
    }
    LegendSkillIconHelper._legendSkillToolTip.disp.visible = true;
  };
  Object.defineProperty(LegendSkillIconHelper, "disp", {
    get: function () {
      return LegendSkillIconHelper._legendSkillToolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LegendSkillIconHelper, "currentTarget", {
    get: function () {
      return LegendSkillIconHelper._currentTarget;
    },
    enumerable: true,
    configurable: true
  });
  LegendSkillIconHelper.__initialize_static_members = function () {
    LegendSkillIconHelper._legendSkillToolTip = new __dep_export_CastleLegendSkillTooltip.CastleLegendSkillTooltip();
  };
  return LegendSkillIconHelper;
}();
exports.LegendSkillIconHelper = __s0local1;
var __dep_export_CastleLegendSkillTooltip = require("gge-module:export_CastleLegendSkillTooltip");
__s0local1.__initialize_static_members();
