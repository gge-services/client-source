Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererConstructionItemSlotGray() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererConstructionItemSlotGray, __s1param0);
  ComboboxItemRendererConstructionItemSlotGray.prototype.renderItem = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0;
    var __s5local1 = __s1param0.prototype.renderItem.call(this, __s5param0, __s5param1, __s5param2, __s5param3, __s5param4);
    if (__s5local1.itxt_item) {
      __s5local1.itxt_item.autoFitToBounds = true;
    }
    switch (__s5param0.data.slotVO.slotType) {
      case __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE:
        __s5local0 = new Library.CastleInterfaceElements.SmallSlotAppearanceItem();
        break;
      case __dep_exact_26a421b704832cff.ConstructionItemConst.PRIMARY_SLOT_TYPE:
        __s5local0 = new Library.CastleInterfaceElements.SmallSlotPrimaryItem();
        break;
      case __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE:
        __s5local0 = new Library.CastleInterfaceElements.SmallSlotSecondaryItem();
    }
    if (__s5local0) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s5local0, 17, 17);
      __s5local1.mc_icon.addChild(__s5local0);
    }
    return __s5local1;
  };
  Object.defineProperty(ComboboxItemRendererConstructionItemSlotGray.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder_grey;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererConstructionItemSlotGray;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererConstructionItemSlotGray = __s0local0;
