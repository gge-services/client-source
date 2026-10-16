Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_FactionLaneRenderHelper = require("gge-module:export_FactionLaneRenderHelper");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function FactionCapitalMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionCapitalMapobject, __s1param0);
  FactionCapitalMapobject.prototype.initialize = function (__s5param0, __s5param1) {
    __s1param0.prototype.initialize.call(this, __s5param0, __s5param1);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
  };
  FactionCapitalMapobject.prototype.onAttackableDataUpdate = function (__s7param0) {
    if (this.hasRingMenu) {
      this.showRingMenu();
    }
  };
  FactionCapitalMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  Object.defineProperty(FactionCapitalMapobject.prototype, "areaNameString", {
    get: function () {
      return "DUMMY CAPITAL";
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalMapobject.prototype.showRingMenu = function () {
    if (!this.capitalVO.isDestroyed) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    }
    this.showOwnerLines();
  };
  FactionCapitalMapobject.prototype.onRollOver = function (__s19param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s19param0);
    }
  };
  FactionCapitalMapobject.prototype.onRollOut = function (__s23param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s23param0);
  };
  FactionCapitalMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.hideLines();
    var __s25local0 = FactionCapitalMapobject.factionEventVO.getCapitalByID(this.capitalVO.specialCampID);
    var __s25local1 = FactionCapitalMapobject.factionEventVO.getTowerLanesByCapitalID(__s25local0.specialCampID);
    if (__s25local1 != null) {
      for (var __s25local2 = 0, __s25local3 = __s25local1; __s25local2 < __s25local3.length; __s25local2++) {
        var __s25local4 = __s25local3[__s25local2];
        if (__s25local4 !== undefined) {
          __dep_export_FactionLaneRenderHelper.FactionLaneRenderHelper.showLane(this.worldmapRenderer, __s25local4, __s25local0);
        }
      }
    }
  };
  FactionCapitalMapobject.prototype.remove = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
    __s1param0.prototype.remove.call(this);
  };
  Object.defineProperty(FactionCapitalMapobject.prototype, "capitalVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobject.prototype, "line2Content", {
    get: function () {
      var __s35local0 = this.capitalVO.ownerInfo;
      if (__s35local0) {
        if (__s35local0.factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("blue_faction");
        } else {
          return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobject.prototype, "line3Content", {
    get: function () {
      if (this.capitalVO.isDestroyed) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("mapobject_destroyed");
      } else {
        return null;
      }
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobject, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCapitalMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.FactionCapitalMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
