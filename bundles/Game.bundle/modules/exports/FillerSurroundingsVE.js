Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = function (__s1param0) {
  function FillerSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FillerSurroundingsVE, __s1param0);
  FillerSurroundingsVE.prototype.getVELayerType = function () {
    var __s5local0 = this.fillerSurroundingVO.getVisualClassName();
    if (__s5local0.indexOf("Road_Surroundings") > -1) {
      return __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND;
    } else if (this.fillerSurroundingVO.isPath) {
      return __dep_export_IsoLayerEnum.IsoLayerEnum.GROUND_FILLER;
    } else if (__s5local0.indexOf("Paving_Surroundings") > -1 || __s5local0.indexOf("Snowpile_Surroundings") > -1) {
      return __dep_export_IsoLayerEnum.IsoLayerEnum.STATIC_SURROUNDINGS;
    } else {
      return __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS;
    }
  };
  Object.defineProperty(FillerSurroundingsVE.prototype, "fillerSurroundingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FillerSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingsVE.prototype.onMouseDown = function (__s17param0) {
    if (__dep_export_FillerSurroundingEditor.FillerSurroundingEditor.IS_ACTIVE) {
      __dep_export_FillerSurroundingEditor.FillerSurroundingEditor.getInstance().onSelect(this);
    }
    __s1param0.prototype.onMouseDown.call(this, __s17param0);
  };
  FillerSurroundingsVE.prototype.updateInteractionVisibility = function () {
    if (!__dep_export_FillerSurroundingEditor.FillerSurroundingEditor.IS_ACTIVE) {
      __s1param0.prototype.updateInteractionVisibility.call(this);
    }
  };
  return FillerSurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.FillerSurroundingsVE = __s0local0;
var __dep_export_FillerSurroundingEditor = require("gge-module:export_FillerSurroundingEditor");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
