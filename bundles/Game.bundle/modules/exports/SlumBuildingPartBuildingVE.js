Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function SlumBuildingPartBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumBuildingPartBuildingVE, __s1param0);
  SlumBuildingPartBuildingVE.prototype.createDisp = function () {
    var __s5local0 = this.getAssetClipName();
    this.dispComponent.addClip(this.loadExternalClip(__s5local0, __s5local0));
  };
  SlumBuildingPartBuildingVE.prototype.getAssetClipName = function () {
    return this.vo.name + "_" + this.vo.group + "_" + this.vo.getAreaKingdomName() + "_" + this.slumBuildingVO.necessarySlumLevel + (this.slumBuildingVO.necessarySlumLevel > 0 && this.slumBuildingVO.isDamaged ? "_damaged" : "");
  };
  SlumBuildingPartBuildingVE.prototype.getScreenPos = function () {
    return this.parentVE.isoRenderer.camera.getScreenPosByGridPosDelta(this.partVO.posOffset);
  };
  SlumBuildingPartBuildingVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.parentVE.updateDispBounds();
  };
  Object.defineProperty(SlumBuildingPartBuildingVE.prototype, "slumBuildingVO", {
    get: function () {
      return this.partVO;
    },
    enumerable: true,
    configurable: true
  });
  return SlumBuildingPartBuildingVE;
}(require("gge-module:export_ASlumBuildingPartVE").ASlumBuildingPartVE);
exports.SlumBuildingPartBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
