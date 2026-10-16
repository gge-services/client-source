Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function ABGResourceTowerMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGResourceTowerMapobject, __s1param0);
  ABGResourceTowerMapobject.prototype.getFlamesClip = function () {
    var __s5local0 = this.getABGFlamesClip("ResourceTower");
    return __s5local0 || __s1param0.prototype.getFlamesClip.call(this);
  };
  ABGResourceTowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawResourceTower();
  };
  ABGResourceTowerMapobject.prototype.drawResourceTower = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.abgResourceTowerMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  ABGResourceTowerMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  ABGResourceTowerMapobject.prototype.onRollOver = function (__s16param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s16param0);
    }
  };
  ABGResourceTowerMapobject.prototype.onRollOut = function (__s20param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s20param0);
  };
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "abgResourceTowerMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level_placeholder", [this.abgResourceTowerMapObjectVO.dungeonLevel]);
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "line3Content", {
    get: function () {
      if (this.abgAlliCampCamp.isMaxLevel) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_maxUpgradeLevel");
      }
      var __s28local0 = __dep_export_CastleModel.CastleModel.allianceInvasionCampData.getAllianceCampByLevel(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND, this.abgAlliCampCamp.level + 1);
      if (!__s28local0) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_maxUpgradeLevel");
      }
      var __s28local1 = __dep_exact_f855840627e6e145.int(__s28local0.countVictory - this.abgResourceTowerMapObjectVO.victoryCount);
      if (__s28local1 > 1) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dungeonToolTip_LevelUp_Plural", [__s28local1, __s28local0.dungeonlevel]);
      } else {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dungeonToolTip_LevelUp_Singular", [__s28local1, __s28local0.dungeonlevel]);
      }
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "abgAlliCampCamp", {
    get: function () {
      return this.abgResourceTowerMapObjectVO.allianceInvasionCampNode;
    },
    enumerable: true,
    configurable: true
  });
  return ABGResourceTowerMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.ABGResourceTowerMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
