Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function DungeonIsleMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DungeonIsleMapobject, __s1param0);
  DungeonIsleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDungeonIsle();
  };
  DungeonIsleMapobject.prototype.drawDungeonIsle = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.dungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  DungeonIsleMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  DungeonIsleMapobject.prototype.onRollOver = function (__s14param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s14param0);
    }
  };
  DungeonIsleMapobject.prototype.onRollOut = function (__s18param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s18param0);
  };
  Object.defineProperty(DungeonIsleMapobject.prototype, "dungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("level"), this.dungeonMapObjectVO.dungeonLevel]);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobject.prototype, "line3Content", {
    get: function () {
      if (this.dungeonMapObjectVO.remainingCooldownTimeInSeconds > 0) {
        var __s26local0 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeString(this.dungeonMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.ONE_TIME_FORMAT);
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eiland_dungeon_cooldownLocal", [__s26local0]);
      }
      var __s26local1 = __dep_exact_f855840627e6e145.int(this.dungeonMapObjectVO.remainingVictories);
      if (__s26local1 > 1) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eiland_dungeon_cooldownCountdown", [__s26local1]);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eiland_dungeon_cooldownCountdown_singular", [__s26local1]);
      }
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return this.dungeonMapObjectVO.remainingCooldownTimeInSeconds > 0;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  return DungeonIsleMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.DungeonIsleMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
