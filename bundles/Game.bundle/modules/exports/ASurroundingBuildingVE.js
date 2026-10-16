Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __s0local0 = function (__s1param0) {
  function ASurroundingBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASurroundingBuildingVE, __s1param0);
  ASurroundingBuildingVE.prototype.destroyDisp = function () {
    this._buildingClip = null;
    __s1param0.prototype.destroyDisp.call(this);
  };
  ASurroundingBuildingVE.prototype.createDisp = function () {
    this.loadResourceAsset();
  };
  ASurroundingBuildingVE.prototype.loadResourceAsset = function () {
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(this.assetFileName)) {
      this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, null, this.getDispClipColor(), 0, false, this.hasBuildingPlaceHolder ? __dep_export_IsoHelper.IsoHelper.view.getBuildingPlaceHolderClass(this.vo.width, this.vo.height) : null));
    } else {
      console.warn(this.assetFileName + " not versioned.");
    }
  };
  ASurroundingBuildingVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS;
  };
  Object.defineProperty(ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVE.prototype, "surroundingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ASurroundingBuildingVE;
}(require("gge-module:export_AInteractiveIsoObjectVE").AInteractiveIsoObjectVE);
exports.ASurroundingBuildingVE = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
