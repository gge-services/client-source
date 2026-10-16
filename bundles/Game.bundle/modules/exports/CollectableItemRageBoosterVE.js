Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollectableItemPercentageBoosterVE = require("gge-module:export_ACollectableItemPercentageBoosterVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemRageBoosterVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemRageBoosterVE, __s1param0);
  Object.defineProperty(CollectableItemRageBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_RageBooster;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemPercentageBoosterVE.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemRageBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_rageBooster_boost_tt";
  };
  return CollectableItemRageBoosterVE;
}(__dep_export_ACollectableItemPercentageBoosterVE.ACollectableItemPercentageBoosterVE);
exports.CollectableItemRageBoosterVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
