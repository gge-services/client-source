Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function FactionCampMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionCampMapobject, __s1param0);
  FactionCampMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap && this.worldmapObjectVO.ownerInfo) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.ownerInfo.isFactionProtected || this.worldmapObjectVO.ownerInfo.isNoobProtected) {
        if (this.worldmapObjectVO.isOwnMapobject) {
          this.objectContainer.addItem(this.getAsExternalClip("Faction_Protection_Own", this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
        } else {
          this.objectContainer.addItem(this.getAsExternalClip("Faction_Protection_Other", this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
        }
      }
      this.addMouseListener();
      this.addObjectContainer();
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "FactionInteractiveMapobjectVO") && !this.worldmapObjectVO.isMyFaction) {
        this.showFlames();
      }
    }
  };
  FactionCampMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("FactionCamp_FlamesLayer", this.assetFileURL(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT));
  };
  FactionCampMapobject.prototype.showRingMenu = function () {
    if (!this.vo.isDestroyed) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
      this.showOwnerLines();
    }
  };
  FactionCampMapobject.prototype.onRollOver = function (__s18param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s18param0);
    }
  };
  FactionCampMapobject.prototype.onMouseUp = function (__s22param0) {
    if (!this.vo.isDestroyed) {
      __s1param0.prototype.onMouseUp.call(this, __s22param0);
      this.showOwnerLines();
    }
  };
  FactionCampMapobject.prototype.onRollOut = function (__s25param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s25param0);
  };
  FactionCampMapobject.prototype.onDoubleClick = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, [this.mapobjectVO]));
  };
  FactionCampMapobject.prototype.remove = function () {
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    __s1param0.prototype.remove.call(this);
  };
  Object.defineProperty(FactionCampMapobject.prototype, "line1Content", {
    get: function () {
      var __s31local0 = this.vo;
      var __s31local1 = __s31local0.ownerInfo;
      if (__s31local1 && !__s31local0.isDestroyed) {
        return new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(__s31local1));
      } else {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("faction_camp");
      }
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobject.prototype, "line2Content", {
    get: function () {
      var __s37local0 = this.vo;
      var __s37local1 = __s37local0.ownerInfo;
      if (__s37local1 && !__s37local0.isDestroyed) {
        if (__s37local1.isRuin) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ruin");
        } else {
          return new __dep_exact_92d05af59ee2ff30_1.TextVO(this.getLevelString());
        }
      } else if (__s37local0.isDestroyed && __s37local0.ownerInfo) {
        if (__s37local1.factionID == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("blue_faction");
        } else {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobject.prototype, "line3Content", {
    get: function () {
      var __s48local0 = this.vo;
      if (__s48local0.ownerInfo && !__s48local0.isDestroyed) {
        if (__s48local0.ownerInfo.factionID == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("blue_faction");
        } else {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("red_faction");
        }
      } else {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("mapobject_destroyed");
      }
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCampMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.FactionCampMapobject = __s0local1;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
