Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_C2SAttackInfoTreasureDungeonVO = require("gge-module:export_C2SAttackInfoTreasureDungeonVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSimpleWorldMapItem = require("gge-module:export_BasicSimpleWorldMapItem");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = function (__s1param0) {
  function DungeonSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DungeonSeasonMapScreenItem, __s1param0);
  DungeonSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(2);
      this.showPlayerCrest();
    } else if (this._tMapNodeVO.isUnlocked) {
      this._disp.gotoAndStop(1);
    } else {
      this._disp.gotoAndStop(3);
    }
    this.onChangeCrest(null);
  };
  DungeonSeasonMapScreenItem.prototype.addEventListeners = function () {
    __s1param0.prototype.addEventListeners.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  DungeonSeasonMapScreenItem.prototype.removeEventListeners = function () {
    __s1param0.prototype.removeEventListeners.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  DungeonSeasonMapScreenItem.prototype.onTimer = function (__s14param0) {
    if (this._tMapNodeVO) {
      this.setItem();
    }
  };
  DungeonSeasonMapScreenItem.prototype.showPlayerCrest = function () {
    if (this._disp.mc_flag) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.mc_flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    }
  };
  DungeonSeasonMapScreenItem.prototype.onChangeCrest = function (__s20param0) {
    if (this._disp.dungeon) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.dungeon.flag0, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    }
    __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.flag0, __dep_export_CastleModel.CastleModel.userData.playerCrest);
  };
  DungeonSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    if (this._tMapNodeVO.ownerID != __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON && this._tMapNodeVO.nodeID != __dep_exact_26a421b704832cff.TreasureMapsConst.NODE_ID_HIDDEN_COW_DUNGEON) {
      if (this._tMapNodeVO.isEndNode) {
        if (this.tMapNodeVO.eventID != __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN || this._tMapNodeVO.isUnlocked) {
          this._line1Content.t = "dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_FinalCastle";
        } else {
          this._line1Content.t = "Castle";
        }
      } else if (this._tMapNodeVO.isMoralBooster) {
        this._line1Content.t = "dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_moraleBoosterDungeon";
      } else {
        this._line1Content.t = "dialog_seasonEvent_2_Dungeon";
      }
      if (this._tMapNodeVO.isUnlocked) {
        if (this._tMapNodeVO.isDefeated) {
          this._line2Content.t = "dialog_lowLevelUnderworld_location_conquered";
        } else {
          this._line2Content.t = "dialog_lowLevelUnderworld_location_attackable";
        }
      } else {
        this._line2Content.t = "dialog_lowLevelUnderworld_location_locked";
      }
      if (!this._tMapNodeVO.isUnockedByPortLevel && !this._tMapNodeVO.isUnlocked && this._tMapNodeVO.isEndNode && __dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this.tMapNodeVO.mapID)) {
        this._line2Content.t = "";
      }
    }
  };
  DungeonSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return __s1param0.prototype.isMouseInteractive.call(this) && this._tMapNodeVO.isUnlocked;
  };
  DungeonSeasonMapScreenItem.prototype.onClickMapItem = function (__s38param0) {
    if (this._isActive && !this._tMapNodeVO.hasCoolDown) {
      __s1param0.prototype.onClickMapItem.call(this, null);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoTreasureDungeonVO.C2SAttackInfoTreasureDungeonVO(this._tMapNodeVO.mapID, this._tMapNodeVO.nodeID));
    }
  };
  Object.defineProperty(DungeonSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line1Content.t, this._line1Content.p);
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonSeasonMapScreenItem.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line2Content.t, this._line2Content.p);
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line2Content").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  return DungeonSeasonMapScreenItem;
}(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem);
exports.DungeonSeasonMapScreenItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
