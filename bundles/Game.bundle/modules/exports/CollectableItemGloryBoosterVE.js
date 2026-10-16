Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ACollectableItemPercentageBoosterVE = require("gge-module:export_ACollectableItemPercentageBoosterVE");
var __s0local0 = function (__s1param0) {
  function CollectableItemGloryBoosterVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGloryBoosterVE, __s1param0);
  Object.defineProperty(CollectableItemGloryBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_GloryBooster;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollectableItemPercentageBoosterVE.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGloryBoosterVE.prototype.tooltipCreate = function () {
    var __s9local0 = this.itemPercentageBoosterVO.percentageBoosterVO.duration / 3600;
    if (__s9local0 > 1) {
      return {
        t: "fameBoost_package_hours_plural",
        p: [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemPercentageBoosterVO.percentageBoosterVO.percentage), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local0)]
      };
    } else {
      return {
        t: "fameBoost_package_hours_singular",
        p: [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemPercentageBoosterVO.percentageBoosterVO.percentage)]
      };
    }
  };
  return CollectableItemGloryBoosterVE;
}(__dep_export_ACollectableItemPercentageBoosterVE.ACollectableItemPercentageBoosterVE);
exports.CollectableItemGloryBoosterVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
