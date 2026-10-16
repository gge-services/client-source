Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollectableItemResourceVE = require("gge-module:export_ACollectableItemResourceVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemHoneyVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemHoneyVE, __s1param0);
  Object.defineProperty(CollectableItemHoneyVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Honey_Big;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemResourceVE.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemHoneyVE;
}(__dep_export_ACollectableItemResourceVE.ACollectableItemResourceVE);
exports.CollectableItemHoneyVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
