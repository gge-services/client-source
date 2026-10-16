Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_FactionLaneRenderHelper = require("gge-module:export_FactionLaneRenderHelper");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function FactionTowerMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionTowerMapobject, __s1param0);
  FactionTowerMapobject.prototype.initialize = function (__s5param0, __s5param1) {
    __s1param0.prototype.initialize.call(this, __s5param0, __s5param1);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
  };
  FactionTowerMapobject.prototype.onAttackableDataUpdate = function (__s7param0) {
    if (this.hasRingMenu) {
      this.showRingMenu();
    }
  };
  FactionTowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
    }
  };
  Object.defineProperty(FactionTowerMapobject.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("faction_tower");
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerMapobject.prototype.showRingMenu = function () {
    if (!this.towerVO.isDestroyed) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
    }
    this.showOwnerLines();
  };
  FactionTowerMapobject.prototype.onRollOver = function (__s20param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s20param0);
    }
  };
  FactionTowerMapobject.prototype.onRollOut = function (__s24param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s24param0);
  };
  FactionTowerMapobject.prototype.remove = function () {
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
    __s1param0.prototype.remove.call(this);
  };
  FactionTowerMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.hideLines();
    var __s28local0 = FactionTowerMapobject.factionEventVO.getTowerByID(this.towerVO.specialCampID);
    var __s28local1 = FactionTowerMapobject.factionEventVO.getTowersByLane(__s28local0.laneID);
    var __s28local2 = FactionTowerMapobject.factionEventVO.getVillagesByTower(__s28local0.specialCampID);
    var __s28local3 = FactionTowerMapobject.factionEventVO.getCapitalByLane(__s28local0.laneID);
    __dep_export_FactionLaneRenderHelper.FactionLaneRenderHelper.showLane(this.worldmapRenderer, __s28local1, __s28local3, __s28local0, __s28local2);
  };
  Object.defineProperty(FactionTowerMapobject.prototype, "towerVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobject.prototype, "line2Content", {
    get: function () {
      var __s32local0 = this.towerVO.ownerInfo;
      if (__s32local0) {
        if (__s32local0.factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("blue_faction");
        } else {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobject.prototype, "line3Content", {
    get: function () {
      var __s40local0 = __dep_exact_f855840627e6e145.int(this.towerVO.attacksLeft);
      if (__s40local0 > 0 && !this.towerVO.isDestroyed) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("factiontower_attacksLeft_tooltip", [__s40local0]);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("mapobject_destroyed");
      }
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobject, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionTowerMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.FactionTowerMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
