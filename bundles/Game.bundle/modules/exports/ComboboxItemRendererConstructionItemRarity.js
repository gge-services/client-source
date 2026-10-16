Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererConstructionItemRarity() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererConstructionItemRarity, __s1param0);
  ComboboxItemRendererConstructionItemRarity.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __s1param0.prototype.renderItem.call(this, __s5param0, __s5param1, __s5param2, __s5param3, __s5param4);
    if (__s5local0.itxt_item) {
      __s5local0.itxt_item.autoFitToBounds = true;
      __s5local0.itxt_item.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
      __s5local0.itxt_item.y = 2;
    }
    var __s5local1 = __s5param0.data + 2;
    var __s5local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Icon_ComboboxRarity"))();
    if (__s5local2) {
      __s5local2.gotoAndStop(__s5local1);
      __s5local0.mc_icon.addChild(__s5local2);
      __s5local0.mc_icon.x = __s5param2 - __s5local2.width;
    }
    return __s5local0;
  };
  Object.defineProperty(ComboboxItemRendererConstructionItemRarity.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder;
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererConstructionItemRarity;
}(require("gge-module:export_ComboboxItemRenderer").ComboboxItemRenderer);
exports.ComboboxItemRendererConstructionItemRarity = __s0local0;
