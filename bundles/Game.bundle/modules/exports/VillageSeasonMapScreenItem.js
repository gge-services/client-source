Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAttackInfoTreasureDungeonVO = require("gge-module:export_C2SAttackInfoTreasureDungeonVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSimpleWorldMapItem = require("gge-module:export_BasicSimpleWorldMapItem");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = function (__s1param0) {
  function VillageSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VillageSeasonMapScreenItem, __s1param0);
  VillageSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.isUnlocked) {
      if (this._tMapNodeVO.hasCoolDown || this._tMapNodeVO.isDefeated) {
        this._disp.gotoAndStop(2);
        this.showPlayerCrest();
      } else {
        this._disp.gotoAndStop(1);
      }
    } else {
      this._disp.gotoAndStop(3);
    }
    this.showResourceFrame();
    for (var __s5local0 = 0; __s5local0 < 3; __s5local0++) {
      if (this._disp["ship" + __s5local0]) {
        this._disp["ship" + __s5local0].gotoAndStop(this._disp.currentFrame + 1);
      }
    }
  };
  VillageSeasonMapScreenItem.prototype.addEventListeners = function () {
    __s1param0.prototype.addEventListeners.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  VillageSeasonMapScreenItem.prototype.removeEventListeners = function () {
    __s1param0.prototype.removeEventListeners.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  VillageSeasonMapScreenItem.prototype.onTimer = function (__s18param0) {
    if (this._tMapNodeVO) {
      this.setItem();
    }
  };
  VillageSeasonMapScreenItem.prototype.showPlayerCrest = function () {
    if (this._disp.mc_flag) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.mc_flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    }
  };
  VillageSeasonMapScreenItem.prototype.showResourceFrame = function () {
    if (this._tMapNodeVO.capturedProduction) {
      this._disp.mc_resources.gotoAndStop(this._tMapNodeVO.capturedProduction.productionType);
    }
  };
  VillageSeasonMapScreenItem.prototype.onMouseOver = function (__s27param0) {
    if (this._tMapNodeVO.hasCoolDown || this._tMapNodeVO.isDefeated) {
      this.setToolTip();
    }
    __s1param0.prototype.onMouseOver.call(this, __s27param0);
  };
  VillageSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    this._line3Content = {
      t: "",
      p: []
    };
    if (__dep_export_TMapHelper.TMapHelper.isThornKingMap(this._tMapNodeVO.mapID)) {
      this._line1Content.t = "village";
      this._line2Content.t = this.getVillageLevelString();
    }
    if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this._tMapNodeVO.mapID)) {
      this._line1Content.t = "dialog_seasonEvent_4_konvy";
      this._line2Content.t = this.getVillageLevelString();
    }
    if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(this._tMapNodeVO.mapID)) {
      this._line1Content.t = "dialog_seasonEvent_64_village";
      this._line2Content.t = this.getVillageLevelString();
    }
    if (this._tMapNodeVO.isUnlocked) {
      if (this._tMapNodeVO.hasCoolDown) {
        if (__dep_export_TMapHelper.TMapHelper.isThornKingMap(this._tMapNodeVO.mapID)) {
          this._line3Content.t = "seasonVillageHasCooldown";
          this._line3Content.p = [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text)];
        }
        if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this._tMapNodeVO.mapID)) {
          this._line3Content.t = "cooldownX_colon";
          this._line3Content.p = [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text)];
        }
        if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(this._tMapNodeVO.mapID)) {
          this._line3Content.t = "seasonVillageHasCooldown64";
          this._line3Content.p = [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text)];
        }
      } else if (this._tMapNodeVO.isDefeated) {
        this._line3Content.t = "dialog_lowLevelUnderworld_location_conquered";
      } else {
        this._line3Content.t = "dialog_lowLevelUnderworld_location_attackable";
      }
    } else {
      this._line3Content.t = "dialog_lowLevelUnderworld_location_locked";
    }
  };
  VillageSeasonMapScreenItem.prototype.getCapturedProductionString = function () {
    return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_village_" + this._tMapNodeVO.capturedProduction.productionType, [this._tMapNodeVO.capturedProduction.capturedProductionValue]);
  };
  VillageSeasonMapScreenItem.prototype.onClickMapItem = function (__s45param0) {
    if (this._isActive && !this._tMapNodeVO.hasCoolDown) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAttackInfoTreasureDungeonVO.C2SAttackInfoTreasureDungeonVO(this._tMapNodeVO.mapID, this._tMapNodeVO.nodeID));
      __s1param0.prototype.onClickMapItem.call(this, null);
    }
  };
  VillageSeasonMapScreenItem.prototype.getVillageLevelString = function () {
    return __dep_exact_92d05af59ee2ff30_1.Localize.text("level_placeholder", [this._tMapNodeVO.villageSize + 1]);
  };
  VillageSeasonMapScreenItem.prototype.getVillageSizeString = function () {
    var __s50local0 = __dep_exact_f855840627e6e145.int(this._tMapNodeVO.villageSize);
    if (__s50local0 < 3) {
      return "small";
    } else if (__s50local0 >= 3 && __s50local0 < 6) {
      return "medium";
    } else {
      return "large";
    }
  };
  Object.defineProperty(VillageSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line1Content.t, this._line1Content.p);
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageSeasonMapScreenItem.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line2Content.t, this._line2Content.p);
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line2Content").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageSeasonMapScreenItem.prototype, "line3Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line3Content.t, this._line3Content.p);
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line3Content").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  return VillageSeasonMapScreenItem;
}(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem);
exports.VillageSeasonMapScreenItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
