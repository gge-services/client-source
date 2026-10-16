Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function NomadKhanCampMapobject() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NomadKhanCampMapobject, __s1param0);
  NomadKhanCampMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawNomad();
  };
  NomadKhanCampMapobject.prototype.drawNomad = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.nomadKhanCampMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  NomadKhanCampMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  NomadKhanCampMapobject.prototype.onRollOver = function (__s14param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s14param0);
    }
  };
  NomadKhanCampMapobject.prototype.onRollOut = function (__s18param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s18param0);
  };
  Object.defineProperty(NomadKhanCampMapobject.prototype, "nomadKhanCampMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level_placeholder", [this.nomadKhanCampMapObjectVO.dungeonLevel]);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapobject.prototype, "line3Content", {
    get: function () {
      var __s26local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO");
      if (__s26local0) {
        if (this.nomadKhanCampMapObjectVO.allianceInvasionCampNode.rageNeededForLevelUp < 1) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelCapReached");
        } else {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("khanCamp_rageLevelUp_tooltip", [__s26local0.allianceRage, this.nomadKhanCampMapObjectVO.allianceInvasionCampNode.rageNeededForLevelUp]);
        }
      } else {
        return null;
      }
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  return NomadKhanCampMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.NomadKhanCampMapobject = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
