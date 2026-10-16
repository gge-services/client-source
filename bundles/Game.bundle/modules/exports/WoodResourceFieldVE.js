Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AResourceFieldVE = require("gge-module:export_AResourceFieldVE");
var __s0local0 = function (__s1param0) {
  function WoodResourceFieldVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WoodResourceFieldVE, __s1param0);
  Object.defineProperty(WoodResourceFieldVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceFieldVE.AResourceFieldVE.prototype, "hasBuildingPlaceHolder").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return WoodResourceFieldVE;
}(__dep_export_AResourceFieldVE.AResourceFieldVE);
exports.WoodResourceFieldVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
