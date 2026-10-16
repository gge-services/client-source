Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoStatusIconProgressBarTax() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoStatusIconProgressBarTax, __s1param0);
  IsoStatusIconProgressBarTax.prototype.getDispFrame = function () {
    return 5;
  };
  IsoStatusIconProgressBarTax.prototype.getBarText = function () {
    return this.keepBuildingVE.keepBuildingVO.taxInfoVO.taxAmountString;
  };
  IsoStatusIconProgressBarTax.prototype.getBarFillFactor = function () {
    return this.keepBuildingVE.keepBuildingVO.taxCollectProgressAsFactor;
  };
  Object.defineProperty(IsoStatusIconProgressBarTax.prototype, "keepBuildingVE", {
    get: function () {
      return this.ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconProgressBarTax;
}(require("gge-module:export_AIsoStatusIconProgressBar").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarTax = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
