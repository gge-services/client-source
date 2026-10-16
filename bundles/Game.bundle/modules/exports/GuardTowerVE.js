Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function GuardTowerVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GuardTowerVE, __s1param0);
  GuardTowerVE.prototype.createDisp = function () {
    if (this.guardTowerVO.hasTowerBase) {
      this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.baseClipClassName, this.baseClipAssetFileName));
    }
    if (this.towerVO.level > 0) {
      this.dispComponent.addClip(this.loadExternalClip(this.topClipClassName));
    }
    this.addScaffoldClip();
  };
  Object.defineProperty(GuardTowerVE.prototype, "topClipClassName", {
    get: function () {
      if (this.isTransparent) {
        return "Basic_" + this.vo.group + "_Transparent" + this.getIsoEventSkinSkinSuffix();
      } else {
        return this.vo.getVisualClassName() + this.getIsoEventSkinSkinSuffix();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GuardTowerVE.prototype, "baseClipClassName", {
    get: function () {
      var __s13local0 = __dep_exact_f855840627e6e145.int(this.towerVO.isoData.objects.defences.currentWallLevel);
      if (this.isTransparent) {
        return "Basic_Towerbase_Transparent" + this.getIsoEventSkinSkinSuffix(__s13local0);
      } else {
        return "Basic_Towerbase_Level" + this.towerVO.isoData.objects.defences.currentWallLevel + this.getIsoEventSkinSkinSuffix(__s13local0);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GuardTowerVE.prototype, "guardTowerVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return GuardTowerVE;
}(require("gge-module:export_ATowerVE").ATowerVE);
exports.GuardTowerVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
