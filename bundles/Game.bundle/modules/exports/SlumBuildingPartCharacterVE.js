Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function SlumBuildingPartCharacterVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumBuildingPartCharacterVE, __s1param0);
  SlumBuildingPartCharacterVE.prototype.createDisp = function () {
    var __s5local0 = "Slumdog_Surroundings_" + this.vo.getAreaKingdomName();
    this.dispComponent.addClip(this.loadExternalClip(__s5local0, __s5local0));
  };
  SlumBuildingPartCharacterVE.prototype.createAdditionalClips = function () {
    if (this.isoRenderer.isoData.areaData.isMyArea) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK3);
    }
  };
  SlumBuildingPartCharacterVE.prototype.getScreenPos = function () {
    return this.parentVE.isoRenderer.camera.getScreenPosByGridPosDelta(this.partVO.posOffset);
  };
  SlumBuildingPartCharacterVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.parentVE.updateDispBounds();
  };
  return SlumBuildingPartCharacterVE;
}(require("gge-module:export_ASlumBuildingPartVE").ASlumBuildingPartVE);
exports.SlumBuildingPartCharacterVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
