Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function ConstructionItemTooltipHelper() {}
  ConstructionItemTooltipHelper.hideToolTip = function () {
    if (ConstructionItemTooltipHelper.toolTip.disp) {
      ConstructionItemTooltipHelper.toolTip.disp.visible = false;
    }
  };
  ConstructionItemTooltipHelper.showConstructionItemToolTip = function (__s8param0, __s8param1) {
    ConstructionItemTooltipHelper.toolTip.initToolTipByConstructionItem(__s8param1);
    ConstructionItemTooltipHelper.setPosition(__s8param0);
  };
  ConstructionItemTooltipHelper.showBlueprintToolTip = function (__s10param0, __s10param1, __s10param2 = null) {
    ConstructionItemTooltipHelper.toolTip.initToolTipByBlueprint(__s10param1, __s10param2);
    ConstructionItemTooltipHelper.setPosition(__s10param0);
  };
  ConstructionItemTooltipHelper.setPosition = function (__s12param0) {
    var __s12local0 = __s12param0.localToGlobal(new __s0local0(0, 0));
    if (__s12local0.y - ConstructionItemTooltipHelper.toolTip.disp.bg.height - __s12param0.height / 2 > 0) {
      ConstructionItemTooltipHelper.toolTip.disp.x = __s12local0.x;
      ConstructionItemTooltipHelper.toolTip.disp.y = Math.max(ConstructionItemTooltipHelper.toolTip.disp.bg.height, __s12local0.y) - __s12param0.height / 2;
    } else if (__s12local0.y + ConstructionItemTooltipHelper.toolTip.disp.bg.height + __s12param0.height / 2 < ConstructionItemTooltipHelper.toolTip.disp.stage.stageHeight) {
      ConstructionItemTooltipHelper.toolTip.disp.x = __s12local0.x;
      ConstructionItemTooltipHelper.toolTip.disp.y = __s12local0.y + ConstructionItemTooltipHelper.toolTip.disp.bg.height + __s12param0.height / 2;
    } else if (__s12local0.x - ConstructionItemTooltipHelper.toolTip.disp.bg.width - __s12param0.width / 2 > 0) {
      ConstructionItemTooltipHelper.toolTip.disp.x = __s12local0.x - ConstructionItemTooltipHelper.toolTip.disp.bg.width / 2 - __s12param0.width / 2;
      ConstructionItemTooltipHelper.toolTip.disp.y = ConstructionItemTooltipHelper.toolTip.disp.bg.height;
    } else if (__s12local0.x + ConstructionItemTooltipHelper.toolTip.disp.bg.width + __s12param0.width / 2 < __s12param0.stage.stageWidth) {
      ConstructionItemTooltipHelper.toolTip.disp.x = __s12local0.x + ConstructionItemTooltipHelper.toolTip.disp.bg.width / 2 + __s12param0.width / 2;
      ConstructionItemTooltipHelper.toolTip.disp.y = ConstructionItemTooltipHelper.toolTip.disp.bg.height;
    }
    ConstructionItemTooltipHelper.toolTip.disp.visible = true;
  };
  Object.defineProperty(ConstructionItemTooltipHelper, "disp", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isUndefined(ConstructionItemTooltipHelper.toolTip)) {
        ConstructionItemTooltipHelper.toolTip = new __dep_export_ConstructionItemToolTip.ConstructionItemToolTip();
      }
      return ConstructionItemTooltipHelper.toolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemTooltipHelper.__initialize_static_members = function () {
    ConstructionItemTooltipHelper.toolTip = new __dep_export_ConstructionItemToolTip.ConstructionItemToolTip();
  };
  return ConstructionItemTooltipHelper;
}();
exports.ConstructionItemTooltipHelper = __s0local1;
var __dep_export_ConstructionItemToolTip = require("gge-module:export_ConstructionItemToolTip");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
__s0local1.__initialize_static_members();
