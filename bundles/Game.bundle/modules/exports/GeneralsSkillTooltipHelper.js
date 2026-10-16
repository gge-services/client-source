Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_GeneralSkillTooltip = require("gge-module:export_GeneralSkillTooltip");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function GeneralsSkillTooltipHelper() {}
  GeneralsSkillTooltipHelper.hideToolTip = function () {
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.visible = false;
    GeneralsSkillTooltipHelper._currentTarget = null;
  };
  GeneralsSkillTooltipHelper.showToolTip = function (__s7param0, __s7param1, __s7param2) {
    GeneralsSkillTooltipHelper._currentTarget = __s7param0;
    GeneralsSkillTooltipHelper._generalsSkillTooltip.initToolTip(__s7param1, __s7param2);
    var __s7local0 = __s7param0.localToGlobal(new __s0local0(0, 0));
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x = __s7local0.x;
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y = Math.max(GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.height, __s7local0.y) - __s7param0.height / 2;
    if (GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y - GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.height < 0) {
      GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y = __s7local0.y + __s7param0.height / 2 + GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.height;
    }
    if (GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y > GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.stage.stageHeight) {
      GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y = GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.stage.stageHeight;
      GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x = __s7local0.x + __s7param0.width / 2 + GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.width / 2;
      if (GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x + GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.width / 2 > GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.stage.stageWidth) {
        GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x = __s7local0.x - __s7param0.width / 2 - GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.width / 2;
      }
    }
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.visible = true;
  };
  Object.defineProperty(GeneralsSkillTooltipHelper, "disp", {
    get: function () {
      return GeneralsSkillTooltipHelper._generalsSkillTooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTooltipHelper, "currentTarget", {
    get: function () {
      return GeneralsSkillTooltipHelper._currentTarget;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTooltipHelper.__initialize_static_members = function () {
    GeneralsSkillTooltipHelper._generalsSkillTooltip = new __dep_export_GeneralSkillTooltip.GeneralSkillTooltip();
  };
  return GeneralsSkillTooltipHelper;
}();
exports.GeneralsSkillTooltipHelper = __s0local1;
__s0local1.__initialize_static_members();
