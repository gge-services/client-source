Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ASlumBuildingPartVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASlumBuildingPartVE, __s1param0);
  Object.defineProperty(ASlumBuildingPartVE.prototype, "parentVE", {
    get: function () {
      return this._parentVE;
    },
    set: function (__s7param0) {
      this._parentVE = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVE.prototype, "partVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  ASlumBuildingPartVE.prototype.preCacheGlow = function () {
    if (this.dispComponent.isLoaded) {
      this.addGlow();
      this.removeGlow();
    } else {
      this.dispComponent.onLoadedSignal.addOnce(this.bindFunction(this.preCacheGlow));
    }
  };
  return ASlumBuildingPartVE;
}(require("gge-module:export_ASurroundingBuildingVE").ASurroundingBuildingVE);
exports.ASlumBuildingPartVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
