Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ADecoBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADecoBuildingVE, __s1param0);
  Object.defineProperty(ADecoBuildingVE.prototype, "decoBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  ADecoBuildingVE.prototype.onMouseUp = function (__s7param0) {
    this.checkFireworksEasterEgg();
    __s1param0.prototype.onMouseUp.call(this, __s7param0);
  };
  ADecoBuildingVE.prototype.checkFireworksEasterEgg = function () {
    if (this.vo && __dep_export_FireworksEasterEgg.FireworksEasterEgg.isSpireType(this.vo.type) && this.buildingVO && this.buildingVO.buildingState.isFunctionally && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance() && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyProperCastle && this.isoRenderer) {
      var __s9local0 = this.isoRenderer.mouse;
      if (!!__s9local0 && !__s9local0.draggedTarget && (!__s9local0.isWorldDragging || !__s9local0.draggedWordOneTile)) {
        __dep_export_FireworksEasterEgg.FireworksEasterEgg.getInstance().registerClick(this.vo.type, this.getFireworksOrigin());
      }
    }
  };
  ADecoBuildingVE.prototype.getFireworksOrigin = function () {
    var __s13local0 = this.uiDisp;
    if (!__s13local0 || !__s13local0.stage) {
      return null;
    }
    var __s13local1 = this.uiBounds;
    if (!__s13local1 || __s13local1.width <= 0) {
      try {
        __s13local1 = __s13local0.getBounds();
      } catch (__s18local0) {
        __s13local1 = null;
      }
    }
    if (!__s13local1 || __s13local1.width <= 0) {
      return __s13local0.localToGlobal(0, 0);
    } else {
      return __s13local0.localToGlobal(__s13local1.x + __s13local1.width * 0.5, __s13local1.y + __s13local1.height * 0.5);
    }
  };
  return ADecoBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.ADecoBuildingVE = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_FireworksEasterEgg = require("gge-module:export_FireworksEasterEgg");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
