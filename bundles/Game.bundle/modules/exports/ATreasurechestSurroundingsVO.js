Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __s0local0 = function (__s1param0) {
  function ATreasurechestSurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._type = "Treasurechest";
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ATreasurechestSurroundingsVO, __s1param0);
  ATreasurechestSurroundingsVO.prototype.getVisualClassName = function () {
    return this._type + "_" + this._group;
  };
  ATreasurechestSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("eventBuilding_treasure");
  };
  ATreasurechestSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("clickToSalvage");
  };
  Object.defineProperty(ATreasurechestSurroundingsVO.prototype, "offerVO", {
    get: function () {
      return this._offerVO;
    },
    set: function (__s13param0) {
      this._offerVO = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  return ATreasurechestSurroundingsVO;
}(require("gge-module:export_ASurroundingBuildingVO").ASurroundingBuildingVO);
exports.ATreasurechestSurroundingsVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
