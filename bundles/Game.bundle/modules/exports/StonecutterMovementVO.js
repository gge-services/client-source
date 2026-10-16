Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_IsoMovementWaypointClassesVO = require("gge-module:export_IsoMovementWaypointClassesVO");
var __s0local0 = function (__s1param0) {
  function StonecutterMovementVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Stonecutter";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StonecutterMovementVO, __s1param0);
  StonecutterMovementVO.prototype.getWaypoints = function () {
    return new __dep_export_IsoMovementWaypointClassesVO.IsoMovementWaypointClassesVO([__dep_export_QuarryBuildingVO.QuarryBuildingVO, __dep_export_KeepBuildingVO.KeepBuildingVO, __dep_export_StonemasonBuildingVO.StonemasonBuildingVO, __dep_export_TavernBuildingVO.TavernBuildingVO, __dep_export_MarketBuildingVO.MarketBuildingVO, __dep_export_StorehouseBuildingVO.StorehouseBuildingVO, __dep_export_AHunterBuildingVO.AHunterBuildingVO]);
  };
  return StonecutterMovementVO;
}(require("gge-module:export_AIsoMovementVO").AIsoMovementVO);
exports.StonecutterMovementVO = __s0local0;
var __dep_export_AHunterBuildingVO = require("gge-module:export_AHunterBuildingVO");
var __dep_export_KeepBuildingVO = require("gge-module:export_KeepBuildingVO");
var __dep_export_MarketBuildingVO = require("gge-module:export_MarketBuildingVO");
var __dep_export_QuarryBuildingVO = require("gge-module:export_QuarryBuildingVO");
var __dep_export_StonemasonBuildingVO = require("gge-module:export_StonemasonBuildingVO");
var __dep_export_StorehouseBuildingVO = require("gge-module:export_StorehouseBuildingVO");
var __dep_export_TavernBuildingVO = require("gge-module:export_TavernBuildingVO");
