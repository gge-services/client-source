Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeaShieldSurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "SeaShield";
    __s3local0._height = 4;
    __s3local0._width = 4;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset = new __s0local0(5, -4);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeaShieldSurroundingsVO, __s1param0);
  Object.defineProperty(SeaShieldSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return SeaShieldSurroundingsVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.SeaShieldSurroundingsVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
