Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function AreaDataSlum() {
    var __s3local0 = this;
    __s3local0._slumLevel = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataSlum, __s1param0);
  AreaDataSlum.prototype.parseCSL = function (__s5param0) {
    this.setSlumLevel(__s5param0.SL);
  };
  AreaDataSlum.prototype.setSlumLevel = function (__s7param0) {
    if (this._slumLevel != __s7param0) {
      this._slumLevel = __s7param0;
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateSlumBuildings();
      }
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED));
    }
  };
  Object.defineProperty(AreaDataSlum.prototype, "slumLevel", {
    get: function () {
      return this._slumLevel;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataSlum;
}(require("gge-module:export_AAreaDataComponent").AAreaDataComponent);
exports.AreaDataSlum = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent");
