Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollectableItemCurrencyVE = require("gge-module:export_ACollectableItemCurrencyVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemC2VE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemC2VE, __s1param0);
  Object.defineProperty(CollectableItemC2VE.prototype, "iconClass", {
    get: function () {
      if (!!this.options && this.options.icon.useDropShadowIcon) {
        return Library.CastleInterfaceElements_Icons.Icon_C2_Big_DropShadow;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_C2_Big;
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemCurrencyVE.ACollectableItemCurrencyVE.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemC2VE;
}(__dep_export_ACollectableItemCurrencyVE.ACollectableItemCurrencyVE);
exports.CollectableItemC2VE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
