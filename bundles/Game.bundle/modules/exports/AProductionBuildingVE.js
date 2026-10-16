Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AProductionBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AProductionBuildingVE, __s1param0);
  AProductionBuildingVE.prototype.addEventListener = function () {
    if (this.productionBuildingVO.isBoostableBuilding) {
      __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterUpdate));
    }
    __s1param0.prototype.addEventListener.call(this);
  };
  AProductionBuildingVE.prototype.removeEventListener = function () {
    if (this.productionBuildingVO.isBoostableBuilding) {
      __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterUpdate));
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  AProductionBuildingVE.prototype.onBoosterUpdate = function (__s11param0) {
    this.updateStatusIcon();
  };
  Object.defineProperty(AProductionBuildingVE.prototype, "productionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AProductionBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.AProductionBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
