Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CollectableListTooltip = require("gge-module:export_CollectableListTooltip");
var __s0local0 = function () {
  function CollectableListTooltipHelper() {}
  CollectableListTooltipHelper.hideToolTip = function () {
    this.tooltip.hide();
  };
  CollectableListTooltipHelper.showToolTip = function (__s7param0, __s7param1, __s7param2) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().addInteractiveToolTip(CollectableListTooltipHelper.disp);
    this.tooltip.show(__s7param0, [__s7param1], [__s7param2]);
  };
  CollectableListTooltipHelper.showToolTipMultiple = function (__s9param0, __s9param1, __s9param2) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().addInteractiveToolTip(CollectableListTooltipHelper.disp);
    this.tooltip.show(__s9param0, __s9param1, __s9param2);
  };
  Object.defineProperty(CollectableListTooltipHelper, "disp", {
    get: function () {
      return CollectableListTooltipHelper.tooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableListTooltipHelper, "tooltip", {
    get: function () {
      CollectableListTooltipHelper._tooltip ||= new __dep_export_CollectableListTooltip.CollectableListTooltip();
      return CollectableListTooltipHelper._tooltip;
    },
    enumerable: true,
    configurable: true
  });
  CollectableListTooltipHelper.destroy = function () {
    CollectableListTooltipHelper._tooltip.destroy();
    CollectableListTooltipHelper._tooltip = null;
  };
  return CollectableListTooltipHelper;
}();
exports.CollectableListTooltipHelper = __s0local0;
