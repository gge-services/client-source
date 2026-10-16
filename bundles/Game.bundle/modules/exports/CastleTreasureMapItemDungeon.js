Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAttackInfoTreasureDungeonVO = require("gge-module:export_C2SAttackInfoTreasureDungeonVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapItemDungeon(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapItemDungeon, __s1param0);
  CastleTreasureMapItemDungeon.prototype.setItem = function () {
    var __s5local0;
    if (this._tMapNodeVO.isStartNode) {
      __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_CampTooltip");
    } else if (this._tMapNodeVO.isEndNode) {
      __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_TreasureTooltip");
      __s5local0 += this.getAdditionalTooltipInfos();
    } else {
      __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_DungeonTooltip");
      __s5local0 += this.getAdditionalTooltipInfos();
    }
    this._disp.toolTipText = __s5local0;
    this._disp.mouseChildren = false;
    __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(2);
    } else {
      this._disp.gotoAndStop(1);
    }
  };
  CastleTreasureMapItemDungeon.prototype.onMouseOver = function (__s12param0) {
    if (this._isActive) {
      __s1param0.prototype.onMouseOver.call(this, __s12param0);
    }
  };
  CastleTreasureMapItemDungeon.prototype.onClickMapItem = function (__s15param0) {
    if (this._isActive) {
      __s1param0.prototype.onClickMapItem.call(this, null);
      __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoTreasureDungeonVO.C2SAttackInfoTreasureDungeonVO(this._tMapNodeVO.mapID, this._tMapNodeVO.nodeID));
    }
  };
  CastleTreasureMapItemDungeon.prototype.getAdditionalTooltipInfos = function () {
    if (this._isActive) {
      if (this._tMapNodeVO.isDefeated) {
        return "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_DefeatedTooltipp");
      }
      if (!this._tMapNodeVO.isUnlocked) {
        return "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_LockedTooltipp");
      }
    }
    return "";
  };
  return CastleTreasureMapItemDungeon;
}(require("gge-module:export_BasicSimpleWorldMapItem").BasicSimpleWorldMapItem);
exports.CastleTreasureMapItemDungeon = __s0local0;
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
