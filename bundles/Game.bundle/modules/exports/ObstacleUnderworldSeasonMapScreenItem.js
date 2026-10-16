Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSeasonBaseRepairDialogProperties = require("gge-module:export_CastleSeasonBaseRepairDialogProperties");
var __s0local0 = function (__s1param0) {
  function ObstacleUnderworldSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ObstacleUnderworldSeasonMapScreenItem, __s1param0);
  ObstacleUnderworldSeasonMapScreenItem.prototype.onClickMapItem = function (__s5param0) {
    __dep_export_CastleModel.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleUnderworldSeasonRepairBridge.CastleUnderworldSeasonRepairBridge, new __dep_export_CastleSeasonBaseRepairDialogProperties.CastleSeasonBaseRepairDialogProperties(this._tMapNodeVO, "dialog_repairBridge"));
  };
  return ObstacleUnderworldSeasonMapScreenItem;
}(require("gge-module:export_ObstacleSeasonMapScreenItem").ObstacleSeasonMapScreenItem);
exports.ObstacleUnderworldSeasonMapScreenItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleUnderworldSeasonRepairBridge = require("gge-module:export_CastleUnderworldSeasonRepairBridge");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
