Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_IsoMovementWaypointClassesVO = require("gge-module:export_IsoMovementWaypointClassesVO");
var __s0local0 = function (__s1param0) {
  function WoodcutterMovementVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Woodcutter";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WoodcutterMovementVO, __s1param0);
  WoodcutterMovementVO.prototype.getWaypoints = function () {
    return new __dep_export_IsoMovementWaypointClassesVO.IsoMovementWaypointClassesVO([__dep_export_WoodcutterBuildingVO.WoodcutterBuildingVO, __dep_export_KeepBuildingVO.KeepBuildingVO, __dep_export_LumbermillBuildingVO.LumbermillBuildingVO, __dep_export_TavernBuildingVO.TavernBuildingVO, __dep_export_MarketBuildingVO.MarketBuildingVO, __dep_export_StorehouseBuildingVO.StorehouseBuildingVO, __dep_export_AHunterBuildingVO.AHunterBuildingVO]);
  };
  return WoodcutterMovementVO;
}(require("gge-module:export_AIsoMovementVO").AIsoMovementVO);
exports.WoodcutterMovementVO = __s0local0;
var __dep_export_AHunterBuildingVO = require("gge-module:export_AHunterBuildingVO");
var __dep_export_KeepBuildingVO = require("gge-module:export_KeepBuildingVO");
var __dep_export_LumbermillBuildingVO = require("gge-module:export_LumbermillBuildingVO");
var __dep_export_MarketBuildingVO = require("gge-module:export_MarketBuildingVO");
var __dep_export_StorehouseBuildingVO = require("gge-module:export_StorehouseBuildingVO");
var __dep_export_TavernBuildingVO = require("gge-module:export_TavernBuildingVO");
var __dep_export_WoodcutterBuildingVO = require("gge-module:export_WoodcutterBuildingVO");
