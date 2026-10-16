Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererBuildingGroundTypeSelector() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererBuildingGroundTypeSelector, __s1param0);
  ComboboxItemRendererBuildingGroundTypeSelector.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __s1param0.prototype.renderItem.call(this, __s5param0, __s5param1, __s5param2, __s5param3, __s5param4);
    if (__s5local0.itxt_item) {
      __s5local0.itxt_item.autoFitToBounds = true;
      __s5local0.itxt_item.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    }
    var __s5local1;
    var __s5local2 = __s5param0.data;
    var __s5local3 = __dep_exact_f855840627e6e145.int(__s5local2.iconSize);
    switch (__s5local2.buildingGroundType) {
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL:
        __s5local1 = new Library.CastleInterfaceElements.Icon_Civil();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY:
        __s5local1 = new Library.CastleInterfaceElements.Icon_Military();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE:
        __s5local1 = new Library.CastleInterfaceElements_Icons.Icon_Defence();
    }
    if (__s5local1) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s5local1, __s5local3, __s5local3);
      __s5local0.mc_icon.addChild(__s5local1);
      __s5local0.mc_icon.x = __s5local0.bg.x + __s5local0.bg.width - __s5local0.mc_icon.width / 2;
    }
    return __s5local0;
  };
  Object.defineProperty(ComboboxItemRendererBuildingGroundTypeSelector.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererBuildingGroundTypeSelector;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererBuildingGroundTypeSelector = __s0local0;
