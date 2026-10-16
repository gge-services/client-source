Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SkippableCooldownDialogProperties = require("gge-module:export_SkippableCooldownDialogProperties");
var __s0local0 = function (__s1param0) {
  function SeaQueenVillageSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeaQueenVillageSeasonMapScreenItem, __s1param0);
  SeaQueenVillageSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return this._tMapNodeVO.isUnlocked && this._isActive && this._tMapNodeVO.isUnlocked;
  };
  SeaQueenVillageSeasonMapScreenItem.prototype.onClickMapItem = function (__s7param0) {
    __s1param0.prototype.onClickMapItem.call(this, __s7param0);
    if (this._tMapNodeVO.hasCoolDown) {
      __dep_export_CastleModel.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
      var __s7local0 = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this.tMapNodeVO.mapID, false);
      var __s7local1 = new __dep_export_TreasureDungeonMapObjectVO.TreasureDungeonMapObjectVO();
      __s7local1.parseAreaInfo([__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 1, 0, 0, __s7local0.kingdomID]);
      __s7local1.ownerInfo = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateEventOwner(this._tMapNodeVO.eventID);
      __s7local1.type = this._tMapNodeVO.nodeType;
      __s7local1.mapID = this._tMapNodeVO.mapID;
      __s7local1.tMapNode = this._tMapNodeVO;
      var __s7local2 = new __dep_export_SkippableCooldownDialogProperties.SkippableCooldownDialogProperties(__s7local1, this.bindFunction(this.onHide), []);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SkippableCooldownDialog.SkippableCooldownDialog, __s7local2);
    }
  };
  SeaQueenVillageSeasonMapScreenItem.prototype.onHide = function (__s10param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().onHideCurrentDialog();
  };
  return SeaQueenVillageSeasonMapScreenItem;
}(require("gge-module:export_VillageSeasonMapScreenItem").VillageSeasonMapScreenItem);
exports.SeaQueenVillageSeasonMapScreenItem = __s0local0;
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SkippableCooldownDialog = require("gge-module:export_SkippableCooldownDialog");
var __dep_export_TreasureDungeonMapObjectVO = require("gge-module:export_TreasureDungeonMapObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
