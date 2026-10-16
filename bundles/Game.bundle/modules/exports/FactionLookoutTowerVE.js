Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ATowerVE = require("gge-module:export_ATowerVE");
var __s0local0 = function (__s1param0) {
  function FactionLookoutTowerVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionLookoutTowerVE, __s1param0);
  Object.defineProperty(FactionLookoutTowerVE.prototype, "isTransparent", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVE.ATowerVE.prototype, "isTransparent").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionLookoutTowerVE;
}(__dep_export_ATowerVE.ATowerVE);
exports.FactionLookoutTowerVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
