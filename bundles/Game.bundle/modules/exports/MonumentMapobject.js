Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function MonumentMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MonumentMapobject, __s1param0);
  MonumentMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawMonument();
  };
  MonumentMapobject.prototype.drawMonument = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.monumentMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  Object.defineProperty(MonumentMapobject.prototype, "monumentMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  MonumentMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  MonumentMapobject.prototype.onRollOver = function (__s15param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s15param0);
    }
  };
  MonumentMapobject.prototype.onRollOut = function (__s19param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s19param0);
  };
  MonumentMapobject.prototype.onMouseUp = function (__s21param0) {
    __s1param0.prototype.onMouseUp.call(this, __s21param0);
    this.showOwnerLines();
  };
  Object.defineProperty(MonumentMapobject.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(MonumentMapobject.MONUMENT_TYPE_TOOLTIPS[this.monumentMapObjectVO.monumentType], [this.monumentMapObjectVO.level]);
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("monument_worldmap_tooltip", [this.monumentMapObjectVO.landmarkBonus]);
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobject.prototype, "line3Content", {
    get: function () {
      var __s31local0;
      var __s31local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_export_CastleModel.CastleModel.monumentsData.remainingResetTime);
      var __s31local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_monument_resetTimer_tooltip", [__s31local1]);
      if (this.monumentMapObjectVO.isPlayerOwned) {
        var __s31local3 = this.monumentMapObjectVO.ownerInfo.isInAlliance ? this.getAllianceString() : this.monumentMapObjectVO.ownerInfo.playerName;
        __s31local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_landmarkList_Owner") + ": " + __s31local3 + "\n" + __s31local2;
      } else {
        __s31local0 = __s31local2;
      }
      return new __dep_exact_92d05af59ee2ff30_2.TextVO(__s31local0);
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  MonumentMapobject.MONUMENT_TYPE_TOOLTIPS = ["monument_small", "monument_big"];
  return MonumentMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.MonumentMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
