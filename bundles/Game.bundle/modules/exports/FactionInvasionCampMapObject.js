Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function FactionInvasionCampMapObject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionInvasionCampMapObject, __s1param0);
  FactionInvasionCampMapObject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawCamp();
  };
  FactionInvasionCampMapObject.prototype.drawCamp = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.factionInvasionMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        if (this.disp.visible) {
          this.disp.visible = false;
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideWorldMapCastleInfoMenuWithMapObject(this);
        }
      } else {
        this.disp.visible = true;
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  FactionInvasionCampMapObject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  FactionInvasionCampMapObject.prototype.onRollOver = function (__s16param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s16param0);
    }
  };
  FactionInvasionCampMapObject.prototype.onRollOut = function (__s20param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s20param0);
  };
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "factionInvasionMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "line1Content", {
    get: function () {
      var __s24local0 = this.vo;
      var __s24local1 = __s24local0.ownerInfo;
      if (__s24local0.ownerInfo) {
        if (__s24local1.factionID == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_blueCamp");
        } else {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_redCamp");
        }
      } else {
        return null;
      }
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("level"), this.factionInvasionMapObjectVO.dungeonLevel]);
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "line3Content", {
    get: function () {
      var __s36local0 = this.vo;
      if (__s36local0.ownerInfo) {
        if (__s36local0.ownerInfo.factionID == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_blueFaction_name");
        } else {
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_redFaction_name");
        }
      } else {
        return null;
      }
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionInvasionCampMapObject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.FactionInvasionCampMapObject = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
