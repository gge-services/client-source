Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ATowerVE = require("gge-module:export_ATowerVE");
var __s0local0 = function (__s1param0) {
  function EmptyTowerVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EmptyTowerVE, __s1param0);
  EmptyTowerVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, this.baseClipAssetFileName));
  };
  EmptyTowerVE.prototype.createAdditionalClips = function () {};
  Object.defineProperty(EmptyTowerVE.prototype, "assetClipName", {
    get: function () {
      var __s9local0 = __dep_exact_f855840627e6e145.int(this.towerVO.isoData.objects.defences.currentWallLevel);
      if (this.isTransparent) {
        return "Basic_Towerbase_Transparent" + this.getIsoEventSkinSkinSuffix(__s9local0);
      } else {
        return "Basic_Tower_CornerLevel" + __s9local0 + "_" + this.getDirectionAssetIndex() + this.getIsoEventSkinSkinSuffix(__s9local0);
      }
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ATowerVE.ATowerVE.prototype, "assetClipName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  EmptyTowerVE.prototype.getDirectionAssetIndex = function () {
    switch (this.towerVO.rotation) {
      case 0:
        return 0;
      case 1:
        return 3;
      case 2:
        return 1;
      case 3:
        return 2;
      default:
        return 0;
    }
  };
  return EmptyTowerVE;
}(__dep_export_ATowerVE.ATowerVE);
exports.EmptyTowerVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
