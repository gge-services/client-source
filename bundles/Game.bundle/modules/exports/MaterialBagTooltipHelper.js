Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function MaterialBagTooltipHelper() {}
  MaterialBagTooltipHelper.hideToolTip = function () {
    MaterialBagTooltipHelper._materialBagToolTip.disp.visible = false;
  };
  MaterialBagTooltipHelper.showToolTip = function (__s7param0, __s7param1, __s7param2 = 1) {
    MaterialBagTooltipHelper._materialBagToolTip.initToolTip(__s7param1, __s7param2);
    var __s7local0 = __s7param0.localToGlobal(new __s0local0(0, 0));
    MaterialBagTooltipHelper._materialBagToolTip.disp.x = __s7local0.x;
    MaterialBagTooltipHelper._materialBagToolTip.disp.y = Math.max(MaterialBagTooltipHelper._materialBagToolTip.disp.bg.height, __s7local0.y) - __s7param0.height / 2;
    if (MaterialBagTooltipHelper._materialBagToolTip.disp.y - MaterialBagTooltipHelper._materialBagToolTip.disp.bg.height < 0) {
      MaterialBagTooltipHelper._materialBagToolTip.disp.y = __s7local0.y + __s7param0.height / 2 + MaterialBagTooltipHelper._materialBagToolTip.disp.bg.height;
    }
    MaterialBagTooltipHelper._materialBagToolTip.disp.visible = true;
  };
  Object.defineProperty(MaterialBagTooltipHelper, "disp", {
    get: function () {
      return MaterialBagTooltipHelper._materialBagToolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagTooltipHelper.__initialize_static_members = function () {
    MaterialBagTooltipHelper._materialBagToolTip = new __dep_export_MaterialBagTooltip.MaterialBagTooltip();
  };
  return MaterialBagTooltipHelper;
}();
exports.MaterialBagTooltipHelper = __s0local1;
var __dep_export_MaterialBagTooltip = require("gge-module:export_MaterialBagTooltip");
__s0local1.__initialize_static_members();
