Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function EventdungeonMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventdungeonMapobject, __s1param0);
  EventdungeonMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDungeon();
  };
  EventdungeonMapobject.prototype.drawDungeon = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.eventdungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.eventdungeonMapObjectVO.isDefeated) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  EventdungeonMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("Eventdungeon_FlamesLayer");
  };
  EventdungeonMapobject.prototype.showRingMenu = function () {
    if (!this.eventdungeonMapObjectVO.isDefeated) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
    }
  };
  EventdungeonMapobject.prototype.onRollOver = function (__s17param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s17param0);
    }
  };
  EventdungeonMapobject.prototype.onRollOut = function (__s21param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s21param0);
  };
  Object.defineProperty(EventdungeonMapobject.prototype, "eventdungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.TextVO(this.eventdungeonMapObjectVO.ownerInfo.playerName);
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobject.prototype, "line3Content", {
    get: function () {
      if (this.eventdungeonMapObjectVO.isDefeated) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasureMap_DefeatedTooltipp");
      } else {
        return null;
      }
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  return EventdungeonMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.EventdungeonMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
