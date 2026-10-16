Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ArmyMapmovement = require("gge-module:export_ArmyMapmovement");
var __s0local0 = function (__s1param0) {
  function SpyMapmovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SpyMapmovement, __s1param0);
  Object.defineProperty(SpyMapmovement.prototype, "arrowColor", {
    get: function () {
      switch (this.spyMapmovementVO.kingdomID) {
        case __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID:
          return 12961221;
        default:
          return 4473924;
      }
    },
    set: function (__s8param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "arrowColor").set.call(this, __s8param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovement.prototype, "baseClipName", {
    get: function () {
      return "Spy_Mapmovement";
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "baseClipName").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovement.prototype, "spyMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return SpyMapmovement;
}(__dep_export_ArmyMapmovement.ArmyMapmovement);
exports.SpyMapmovement = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldmapTooltipData");
