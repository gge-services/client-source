Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ADefenceBuildingVE = require("gge-module:export_ADefenceBuildingVE");
var __s0local0 = function (__s1param0) {
  function ATowerVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ATowerVE, __s1param0);
  ATowerVE.prototype.onRenderStrategyChanged = function (__s5param0) {
    this.updateDisp();
  };
  Object.defineProperty(ATowerVE.prototype, "damageScale", {
    get: function () {
      return 1 + this.buildingVO.damageFactor;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "damageScale").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "towerVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix();
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "baseClipAssetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix(this.towerVO.isoData.objects.defences.currentWallLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Tower;
    },
    enumerable: true,
    configurable: true
  });
  return ATowerVE;
}(__dep_export_ADefenceBuildingVE.ADefenceBuildingVE);
exports.ATowerVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
