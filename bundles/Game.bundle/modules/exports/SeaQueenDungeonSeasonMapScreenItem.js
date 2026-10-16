Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SkippableCooldownDialogProperties = require("gge-module:export_SkippableCooldownDialogProperties");
var __s0local0 = function (__s1param0) {
  function SeaQueenDungeonSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeaQueenDungeonSeasonMapScreenItem, __s1param0);
  SeaQueenDungeonSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.hasCoolDown) {
      this._disp.gotoAndStop(2);
      this.showPlayerCrest();
    } else if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(3);
      this.showPlayerCrest();
    } else if (this._tMapNodeVO.isUnlocked) {
      this._disp.gotoAndStop(1);
    } else {
      this._disp.gotoAndStop(4);
    }
    this.onChangeCrest(null);
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.onClickMapItem = function (__s11param0) {
    __s1param0.prototype.onClickMapItem.call(this, __s11param0);
    if (this._tMapNodeVO.hasCoolDown) {
      __dep_export_CastleModel.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
      var __s11local0 = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this.tMapNodeVO.mapID, false);
      var __s11local1 = new __dep_export_TreasureDungeonMapObjectVO.TreasureDungeonMapObjectVO();
      __s11local1.parseAreaInfo([__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 1, 0, 0, __s11local0.kingdomID]);
      __s11local1.ownerInfo = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateEventOwner(this._tMapNodeVO.eventID);
      __s11local1.type = this._tMapNodeVO.nodeType;
      __s11local1.mapID = this._tMapNodeVO.mapID;
      __s11local1.tMapNode = this._tMapNodeVO;
      var __s11local2 = new __dep_export_SkippableCooldownDialogProperties.SkippableCooldownDialogProperties(__s11local1, this.bindFunction(this.onHide), []);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SkippableCooldownDialog.SkippableCooldownDialog, __s11local2);
    }
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.onHide = function (__s14param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().onHideCurrentDialog();
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    this.toolTipLine1();
    this.toolTipLine2();
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.toolTipLine2 = function () {
    if (this._tMapNodeVO.isUnlocked) {
      if (this.tMapNodeVO.coolDownInRemainingSeconds > 0) {
        this._line2Content.t = "cooldownX_colon";
        this._line2Content.p = [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)];
      } else {
        this._line2Content.t = "dialog_lowLevelUnderworld_location_attackable";
      }
    } else {
      this._line2Content.t = "dialog_lowLevelUnderworld_location_locked";
    }
    if (!this._tMapNodeVO.isUnockedByPortLevel && !this._tMapNodeVO.isUnlocked && !!this._tMapNodeVO.isEndNode) {
      this._line2Content.t = "";
    }
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return this._tMapNodeVO.isUnlocked && this._isActive && this._tMapNodeVO.isUnlocked;
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.toolTipLine1 = function () {
    if (this._tMapNodeVO.isEndNode) {
      if (this.tMapNodeVO.eventID != __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN || this._tMapNodeVO.isUnlocked) {
        this._line1Content.t = "dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_FinalCastle";
      } else {
        this._line1Content.t = "Castle";
      }
    } else {
      this._line1Content.t = "dialog_seasonEvent_2_Dungeon";
    }
  };
  return SeaQueenDungeonSeasonMapScreenItem;
}(require("gge-module:export_DungeonSeasonMapScreenItem").DungeonSeasonMapScreenItem);
exports.SeaQueenDungeonSeasonMapScreenItem = __s0local0;
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SkippableCooldownDialog = require("gge-module:export_SkippableCooldownDialog");
var __dep_export_TreasureDungeonMapObjectVO = require("gge-module:export_TreasureDungeonMapObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
