Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_FactionLaneRenderHelper = require("gge-module:export_FactionLaneRenderHelper");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function FactionVillageMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionVillageMapobject, __s1param0);
  FactionVillageMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  FactionVillageMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("FactionVillage_FlamesLayer", this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT));
  };
  Object.defineProperty(FactionVillageMapobject.prototype, "areaNameString", {
    get: function () {
      return "VILLAGE PEOPLE";
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  FactionVillageMapobject.prototype.onRollOver = function (__s16param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s16param0);
    }
  };
  FactionVillageMapobject.prototype.onRollOut = function (__s20param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s20param0);
  };
  FactionVillageMapobject.prototype.onMouseUp = function (__s22param0) {
    __s1param0.prototype.onMouseUp.call(this, __s22param0);
    if (this.villageVO.aliveProtectorPositions.length > 0) {
      this.showOwnerLines();
    }
  };
  FactionVillageMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.hideLines();
    var __s25local0 = FactionVillageMapobject.factionEventVO.getVillageByPosition(this.villageVO.absAreaPos);
    if (__s25local0) {
      var __s25local1 = FactionVillageMapobject.factionEventVO.getTowerByID(__s25local0.towerID);
      var __s25local2 = FactionVillageMapobject.factionEventVO.getTowersByLane(__s25local1.laneID);
      var __s25local3 = FactionVillageMapobject.factionEventVO.getVillagesByTower(__s25local1.specialCampID);
      var __s25local4 = FactionVillageMapobject.factionEventVO.getCapitalByLane(__s25local1.laneID);
      __dep_export_FactionLaneRenderHelper.FactionLaneRenderHelper.showLane(this.worldmapRenderer, __s25local2, __s25local4, __s25local1, __s25local3);
    }
  };
  Object.defineProperty(FactionVillageMapobject.prototype, "villageVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobject.prototype, "line2Content", {
    get: function () {
      var __s30local0 = this.villageVO.ownerInfo;
      if (__s30local0) {
        if (__s30local0.factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("blue_faction");
        } else {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobject.prototype, "line3Content", {
    get: function () {
      return null;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobject, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionVillageMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.FactionVillageMapobject = __s0local1;
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
