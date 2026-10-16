Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ShipSurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Ship";
    __s3local0._type = "Level" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel;
    __s3local0._width = 6;
    __s3local0._height = 6;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset = new __s0local0(32, -1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ShipSurroundingsVO, __s1param0);
  ShipSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    if (this.isClickAvailable) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("clickToUpgrade");
    } else {
      return "";
    }
  };
  Object.defineProperty(ShipSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      return __s9local0.portLevel < __s9local0.maxPortLevel;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return ShipSurroundingsVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.ShipSurroundingsVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
