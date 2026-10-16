Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererWorldSelection() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererWorldSelection, __s1param0);
  Object.defineProperty(ComboboxItemRendererWorldSelection.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleWorldSelectionComboboxItem;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererWorldSelection;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererWorldSelection = __s0local0;
