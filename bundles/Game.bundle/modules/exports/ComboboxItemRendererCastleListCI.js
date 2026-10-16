Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ComboboxItemRendererCastleList = require("gge-module:export_ComboboxItemRendererCastleList");
var __s0local0 = function (__s1param0) {
  function ComboboxItemRendererCastleListCI() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ComboboxItemRendererCastleListCI, __s1param0);
  Object.defineProperty(ComboboxItemRendererCastleListCI.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_CI;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ComboboxItemRendererCastleList.ComboboxItemRendererCastleList.prototype, "itemMCClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererCastleListCI;
}(__dep_export_ComboboxItemRendererCastleList.ComboboxItemRendererCastleList);
exports.ComboboxItemRendererCastleListCI = __s0local0;
