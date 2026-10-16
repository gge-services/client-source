Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ComboboxItemRenderer = require("gge-module:export_ComboboxItemRenderer");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererServerSelection() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererServerSelection, __s1param0);
  Object.defineProperty(ComboboxItemRendererServerSelection.prototype, "itemMCClass", {
    get: function () {
      return __dep_exact_81dacdf05bd32292.getDefinitionByName("CastleComboboxItemNew_Toaster");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererServerSelection;
}(__dep_export_ComboboxItemRenderer.ComboboxItemRenderer);
exports.ComboboxItemRendererServerSelection = __s0local0;
