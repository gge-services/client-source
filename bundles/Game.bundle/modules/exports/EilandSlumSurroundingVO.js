Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __s0local0 = function (__s1param0) {
  function EilandSlumSurroundingVO(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._name = "EilandSlum";
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EilandSlumSurroundingVO, __s1param0);
  EilandSlumSurroundingVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_eiland_aquamarinShop_tooltip");
  };
  EilandSlumSurroundingVO.prototype.getInfoTooltipLine2 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("clickToOpen");
  };
  EilandSlumSurroundingVO.prototype.getInfoTooltipLine3 = function () {
    return "";
  };
  return EilandSlumSurroundingVO;
}(require("gge-module:export_SlumSurroundingsVO").SlumSurroundingsVO);
exports.EilandSlumSurroundingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
