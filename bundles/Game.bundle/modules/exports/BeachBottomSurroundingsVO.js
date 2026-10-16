Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ABeachSurroundingsVO = require("gge-module:export_ABeachSurroundingsVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function BeachBottomSurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "BeachBottom";
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset = new __s0local0(15, 15);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BeachBottomSurroundingsVO, __s1param0);
  return BeachBottomSurroundingsVO;
}(__dep_export_ABeachSurroundingsVO.ABeachSurroundingsVO);
exports.BeachBottomSurroundingsVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
