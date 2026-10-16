Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __s0local0 = function (__s1param0) {
  function OutpostSurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Outpost";
    __s3local0._height = 6;
    __s3local0._width = 9;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._minLevel = 7;
    __s3local0._maxLevel = 13;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OutpostSurroundingsVO, __s1param0);
  OutpostSurroundingsVO.prototype.updatePosition = function () {
    var __s5local0 = this.isoData.objects.surroundings.getFoodField();
    if (__s5local0) {
      this._posOffset = __s5local0.getLastPartStartOffset();
      this._posOffset.x = 21;
      this._posOffset.y = -9;
    }
    __s1param0.prototype.updatePosition.call(this);
  };
  return OutpostSurroundingsVO;
}(require("gge-module:export_ASurroundingBuildingVO").ASurroundingBuildingVO);
exports.OutpostSurroundingsVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
