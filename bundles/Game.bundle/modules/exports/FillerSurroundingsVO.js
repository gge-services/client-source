Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FillerSurroundingsVO(__s3param0, __s3param1, __s3param2 = null, __s3param3 = false, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0._isPath = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._name = "Filler";
    if (__s3param3) {
      __s3local0._width = 0;
      __s3local0._height = 0;
    } else {
      __s3local0._width = __s3param4 ? __s3param4.x : FillerSurroundingsVO.DEFAULT_DIMENSIONS.x;
      __s3local0._height = __s3param4 ? __s3param4.y : FillerSurroundingsVO.DEFAULT_DIMENSIONS.y;
    }
    __s3local0._posOrigin = __s3param2 || __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset.x = __s3param1.x;
    __s3local0._posOffset.y = __s3param1.y;
    __s3local0._assetName = __s3param0;
    __s3local0._isPath = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FillerSurroundingsVO, __s1param0);
  Object.defineProperty(FillerSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FillerSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FillerSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingsVO.prototype.getVisualClassName = function () {
    return this._assetName;
  };
  Object.defineProperty(FillerSurroundingsVO.prototype, "isPath", {
    get: function () {
      return this._isPath;
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingsVO.prototype.setAssetName = function (__s23param0) {
    this._assetName = __s23param0;
  };
  FillerSurroundingsVO.prototype.setPosOrigin = function (__s25param0) {
    this._posOrigin = __s25param0;
  };
  FillerSurroundingsVO.prototype.setPosOffset = function (__s27param0) {
    this._posOffset = __s27param0;
  };
  FillerSurroundingsVO.__initialize_static_members = function () {
    FillerSurroundingsVO.DEFAULT_DIMENSIONS = new __s0local0(5, 5);
  };
  return FillerSurroundingsVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.FillerSurroundingsVO = __s0local1;
__s0local1.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
