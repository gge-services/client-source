Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererBuildingTypeSelector() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererBuildingTypeSelector, __s1param0);
  ComboboxItemRendererBuildingTypeSelector.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __s1param0.prototype.renderItem.call(this, __s5param0, __s5param1, __s5param2, __s5param3, __s5param4);
    if (__s5local0.itxt_item) {
      __s5local0.itxt_item.autoFitToBounds = true;
      __s5local0.itxt_item.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    }
    var __s5local1 = __s5param0.data;
    var __s5local2 = __dep_exact_81dacdf05bd32292.castAs(__s5local1.buildingType, "ABasicBuildingVO");
    var __s5local3 = __dep_exact_f855840627e6e145.int(__s5local1.iconSize);
    if (__s5local2) {
      var __s5local4 = new Library.CastleInterfaceElements.BuildingGroundBg();
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s5local4, __s5local3, __s5local3);
      __s5local0.mc_icon.addChild(__s5local4);
      var __s5local5 = new (__dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(__s5local2).buildingGroundIconClass)();
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s5local5, __s5local3 * ComboboxItemRendererBuildingTypeSelector.ICON_SCALE, __s5local3 * ComboboxItemRendererBuildingTypeSelector.ICON_SCALE);
      __s5local0.mc_icon.addChild(__s5local5);
      __s5local0.mc_icon.x = __s5local0.bg.x + __s5local0.bg.width - __s5local0.mc_icon.width / 2;
    }
    return __s5local0;
  };
  Object.defineProperty(ComboboxItemRendererBuildingTypeSelector.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ComboboxItemRendererBuildingTypeSelector.__initialize_static_members = function () {
    ComboboxItemRendererBuildingTypeSelector.ICON_SCALE = 0.7;
  };
  return ComboboxItemRendererBuildingTypeSelector;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererBuildingTypeSelector = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__s0local0.__initialize_static_members();
