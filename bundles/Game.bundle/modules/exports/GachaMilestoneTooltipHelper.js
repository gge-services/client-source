Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_GachaMilestoneTooltip = require("gge-module:export_GachaMilestoneTooltip");
var __s0local0 = function () {
  function GachaMilestoneTooltipHelper() {}
  GachaMilestoneTooltipHelper.hideToolTip = function () {
    this.tooltip.hide();
  };
  GachaMilestoneTooltipHelper.showToolTip = function (__s7param0, __s7param1, __s7param2, __s7param3 = __dep_export_GachaMilestoneTooltip.GachaMilestoneTooltip.TARGET_DOWN) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().addInteractiveToolTip(GachaMilestoneTooltipHelper.disp);
    this.tooltip.show(__s7param0, __s7param1, __s7param2, __s7param3);
  };
  Object.defineProperty(GachaMilestoneTooltipHelper, "disp", {
    get: function () {
      return GachaMilestoneTooltipHelper.tooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaMilestoneTooltipHelper, "tooltip", {
    get: function () {
      GachaMilestoneTooltipHelper._tooltip ||= new __dep_export_GachaMilestoneTooltip.GachaMilestoneTooltip();
      return GachaMilestoneTooltipHelper._tooltip;
    },
    enumerable: true,
    configurable: true
  });
  GachaMilestoneTooltipHelper.destroy = function () {
    GachaMilestoneTooltipHelper._tooltip.destroy();
    GachaMilestoneTooltipHelper._tooltip = null;
  };
  return GachaMilestoneTooltipHelper;
}();
exports.GachaMilestoneTooltipHelper = __s0local0;
