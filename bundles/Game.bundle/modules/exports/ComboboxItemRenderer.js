Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ComboboxItemRenderer() {}
  ComboboxItemRenderer.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = new this.itemMCClass();
    __s5local0.actLikeButton = true;
    __s5local0.mouseChildren = false;
    __s5local0.txt_item.defaultCacheScale = 2;
    __s5local0.itxt_item = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5local0.txt_item, new __s5param4(__s5param0.itemLabel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s5local0.mouseChildren = false;
    __s5local0.itxt_item.mouseEnabled = false;
    __s5local0.bg.gotoAndStop(1);
    if (__s5param2 > 0) {
      __s5local0.bg.width = __s5param2;
      __s5local0.itxt_item.width = __s5param2;
    }
    __s5local0.bg.height = __s5param3;
    __s5local0.id = __s5param1;
    if (__s5param0.autoFitToBounds) {
      __s5local0.itxt_item.autoFitToBounds = __s5param0.autoFitToBounds;
    }
    return __s5local0;
  };
  Object.defineProperty(ComboboxItemRenderer.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleComboboxItem;
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRenderer;
}();
exports.ComboboxItemRenderer = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
