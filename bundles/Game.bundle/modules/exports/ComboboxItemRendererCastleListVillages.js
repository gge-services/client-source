Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererCastleListVillages() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererCastleListVillages, __s1param0);
  ComboboxItemRendererCastleListVillages.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __dep_exact_81dacdf05bd32292.castAs(new this.itemMCClass(), "MovieClip");
    __s5local0.actLikeButton = true;
    __s5local0.mouseChildren = false;
    __s5local0.itxt_item = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s5local0.txt_item, new __s5param4(__s5param0.itemLabel), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    __s5local0.itxt_item.mouseEnabled = false;
    __s5local0.bg.gotoAndStop(1);
    if (__s5param2 > 0) {
      __s5local0.bg.width = __s5param2;
      __s5local0.itxt_item.width = __s5param2;
    }
    __s5local0.bg.height = __s5param3;
    __s5local0.id = __s5param1;
    __s5local0.tooltip.x = __s5param2 / 2;
    var __s5local1 = __dep_exact_81dacdf05bd32292.castAs(__s5param0.data, "IWorldmapObjectVO");
    if (__s5local0 && __s5local1) {
      __s5local0.mc_kingdomPoint.x = __s5local0.bg.x + __s5local0.bg.width - __s5local0.mc_kingdomPoint.width;
      __s5local0.mc_kingdomPoint.gotoAndStop(__s5local1.kingdomID + 1);
      __s5local0.itxt_item.autoFitToBounds = true;
      __s5local0.itxt_item.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    }
    if (!__s5param0.enabled) {
      __s5local0.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX;
    }
    __s5local0.toolTipText = __s5param0.tooltipText;
    return __s5local0;
  };
  Object.defineProperty(ComboboxItemRendererCastleListVillages.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItemVillages;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererCastleListVillages;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererCastleListVillages = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
