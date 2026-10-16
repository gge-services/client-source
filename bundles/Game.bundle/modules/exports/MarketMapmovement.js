Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ArmyMapmovement = require("gge-module:export_ArmyMapmovement");
var __s0local0 = function (__s1param0) {
  function MarketMapmovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MarketMapmovement, __s1param0);
  Object.defineProperty(MarketMapmovement.prototype, "baseClipName", {
    get: function () {
      return "Market_Mapmovement";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "baseClipName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MarketMapmovement.prototype, "arrowColor", {
    get: function () {
      return 15785476;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "arrowColor").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return MarketMapmovement;
}(__dep_export_ArmyMapmovement.ArmyMapmovement);
exports.MarketMapmovement = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldmapTooltipData");
