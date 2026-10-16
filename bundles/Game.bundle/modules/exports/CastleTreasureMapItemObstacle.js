Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTreasureMapUnlockObstacleDialogProperties = require("gge-module:export_CastleTreasureMapUnlockObstacleDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapItemObstacle(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapItemObstacle, __s1param0);
  CastleTreasureMapItemObstacle.prototype.setItem = function () {
    var __s5local0;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID);
    if (this._tMapNodeVO.isSwamp) {
      switch (__s5local1) {
        case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
          __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_repairIce_Swamp_title");
          break;
        case __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID:
          __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_repairSAND_title");
          break;
        default:
          __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_repairSwamp_title");
      }
    } else if (this._tMapNodeVO.isBridge) {
      if (this._tMapNodeVO.isDefeated) {
        this._disp.gotoAndStop(2);
        __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_Bridge");
      } else {
        this._disp.gotoAndStop(1);
        __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_repairBridge_title");
      }
    } else if (this._tMapNodeVO.isQuickSand && __s5local1 == __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID) {
      __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_repairSAND_title");
    }
    __s5local0 += this.getAdditionalTooltipInfos();
    this._disp.toolTipText = __s5local0;
    this._disp.mouseChildren = false;
  };
  CastleTreasureMapItemObstacle.prototype.getAdditionalTooltipInfos = function () {
    if (this._tMapNodeVO.isDefeated) {
      return "";
    }
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
  CastleTreasureMapItemObstacle.prototype.onClickMapItem = function (__s19param0) {
    if (this._isActive) {
      __s1param0.prototype.onClickMapItem.call(this, null);
      CastleTreasureMapItemObstacle.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureMapUnlockObstacleDialog.CastleTreasureMapUnlockObstacleDialog, new __dep_export_CastleTreasureMapUnlockObstacleDialogProperties.CastleTreasureMapUnlockObstacleDialogProperties(this._tMapNodeVO));
    }
  };
  CastleTreasureMapItemObstacle.prototype.onMouseOver = function (__s22param0) {
    if (this._isActive) {
      __s1param0.prototype.onMouseOver.call(this, __s22param0);
    }
  };
  Object.defineProperty(CastleTreasureMapItemObstacle, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureMapItemObstacle;
}(require("gge-module:export_BasicSimpleWorldMapItem").BasicSimpleWorldMapItem);
exports.CastleTreasureMapItemObstacle = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTreasureMapUnlockObstacleDialog = require("gge-module:export_CastleTreasureMapUnlockObstacleDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
