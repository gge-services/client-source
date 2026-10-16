Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicGateVE = require("gge-module:export_BasicGateVE");
var __s0local0 = function (__s1param0) {
  function FactionGateGateVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionGateGateVE, __s1param0);
  Object.defineProperty(FactionGateGateVE.prototype, "isTransparent", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicGateVE.BasicGateVE.prototype, "isTransparent").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionGateGateVE.prototype, "assetClipName", {
    get: function () {
      var __s9local0 = this.vo;
      return __s9local0.name + "_" + __s9local0.group + "_Level" + Math.min(__dep_exact_f855840627e6e145.int(__s9local0.level), 3);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicGateVE.BasicGateVE.prototype, "assetClipName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionGateGateVE;
}(__dep_export_BasicGateVE.BasicGateVE);
exports.FactionGateGateVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
