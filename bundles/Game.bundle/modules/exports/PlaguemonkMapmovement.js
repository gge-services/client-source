Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ArmyMapmovement = require("gge-module:export_ArmyMapmovement");
var __s0local0 = function (__s1param0) {
  function PlaguemonkMapmovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlaguemonkMapmovement, __s1param0);
  PlaguemonkMapmovement.prototype.initVisualRep = function () {
    __s1param0.prototype.initVisualRep.call(this);
    var __s5local0 = this.mapMovementVO.sourceArea.getDisplayObjectClipContainer(false, null);
    this.baseCampLayer.addChild(__s5local0.asDisplayObject());
  };
  Object.defineProperty(PlaguemonkMapmovement.prototype, "arrowColor", {
    get: function () {
      switch (this.plaguemonkMapmovementVO.kingdomID) {
        case __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID:
          return 12961221;
        default:
          return 4473924;
      }
    },
    set: function (__s10param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "arrowColor").set.call(this, __s10param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovement.prototype, "baseClipName", {
    get: function () {
      return "Plaguemonk_Mapmovement";
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "baseClipName").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovement.prototype, "plaguemonkMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return PlaguemonkMapmovement;
}(__dep_export_ArmyMapmovement.ArmyMapmovement);
exports.PlaguemonkMapmovement = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldmapTooltipData");
