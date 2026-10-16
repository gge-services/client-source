Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function BossdungeonMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BossdungeonMapobject, __s1param0);
  BossdungeonMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDungeon();
  };
  BossdungeonMapobject.prototype.drawDungeon = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.bossDungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  BossdungeonMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  BossdungeonMapobject.prototype.onRollOver = function (__s13param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s13param0);
    }
  };
  BossdungeonMapobject.prototype.onRollOut = function (__s17param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s17param0);
  };
  Object.defineProperty(BossdungeonMapobject.prototype, "bossDungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobject.prototype, "line2Content", {
    get: function () {
      if (this.bossDungeonMapObjectVO.isCoolingDown) {
        var __s21local0 = this.bossDungeonMapObjectVO.defeaterInfo;
        if (__s21local0) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("bossDungeon_defeated_by", [__s21local0.playerName]);
        } else {
          return new __dep_exact_92d05af59ee2ff30_1.TextVO("");
        }
      }
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("bossDungeon_attackable");
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobject.prototype, "line3Content", {
    get: function () {
      if (this.bossDungeonMapObjectVO.isCoolingDown) {
        var __s28local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this.bossDungeonMapObjectVO.remainingCooldownTimeInSeconds * 1000, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("bossDungeon_attackable_in", [__s28local0]);
      }
      return null;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return this.bossDungeonMapObjectVO.isCoolingDown;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  return BossdungeonMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.BossdungeonMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
