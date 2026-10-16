Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function WolfkingCastleMapobject() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WolfkingCastleMapobject, __s1param0);
  WolfkingCastleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawWolfkingCastle();
  };
  WolfkingCastleMapobject.prototype.drawWolfkingCastle = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.wolfkingCastleMapobjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.wolfkingCastleMapobjectVO.isDefeated) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  WolfkingCastleMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  WolfkingCastleMapobject.prototype.onRollOver = function (__s14param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s14param0);
    }
  };
  WolfkingCastleMapobject.prototype.onRollOut = function (__s18param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s18param0);
  };
  Object.defineProperty(WolfkingCastleMapobject.prototype, "wolfkingCastleMapobjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return WolfkingCastleMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.WolfkingCastleMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
