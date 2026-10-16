Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = function (__s1param0) {
  function AResourceFieldVO() {
    var __s3local0 = this;
    __s3local0._resourceType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._group = "ResourceField";
    __s3local0._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.NONE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResourceFieldVO, __s1param0);
  AResourceFieldVO.prototype.getTooltipName = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("resourcesName_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__dep_export_CollectableHelper.CollectableHelper.createVO(this.resourceType).getTooltipTextId(), false));
  };
  AResourceFieldVO.prototype.getGfxLevel = function () {
    var __s7local0 = this.fieldEfficiency;
    if (__s7local0 >= 4) {
      return 3;
    } else if (__s7local0 > 0 && __s7local0 < 4) {
      return 2;
    } else {
      return 1;
    }
  };
  AResourceFieldVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.getTooltipName());
  };
  AResourceFieldVO.prototype.getInfoTooltipLine2 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("resourcesAmount_" + this.fieldEfficiency);
  };
  AResourceFieldVO.prototype.getInfoTooltipLine3 = function () {
    if (this.fieldEfficiency > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("resources_description", [this.fieldEfficiency]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("resources_description_none");
    }
  };
  Object.defineProperty(AResourceFieldVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return !this.isoData.areaData.isSeasonCamp;
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "assignedStorage", {
    get: function () {
      return this.isoData.areaData.storage.getItem(this.resourceType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "fieldEfficiency", {
    get: function () {
      return this.assignedStorage.fieldEfficiency;
    },
    enumerable: true,
    configurable: true
  });
  return AResourceFieldVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.AResourceFieldVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
