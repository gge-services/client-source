Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function ABGAllianceTowerMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGAllianceTowerMapobject, __s1param0);
  ABGAllianceTowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawABGAllianceTower();
  };
  ABGAllianceTowerMapobject.prototype.drawABGAllianceTower = function () {
    this.clearObjectContainer();
    this.objectContainer = this.abgAllianceTowerVO.getDisplayObjectClipContainer(false, null, false);
    this.addObjectContainer();
    this.addMouseListener();
  };
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "abgAllianceTowerVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
    this.showOwnerLines();
  };
  ABGAllianceTowerMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.showLines(this.abgAllianceTowerVO.absAreaPos, this.abgAllianceTowerVO.connections, 0);
  };
  ABGAllianceTowerMapobject.prototype.onRollOver = function (__s16param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s16param0);
    }
  };
  ABGAllianceTowerMapobject.prototype.onMouseUp = function (__s20param0) {
    __s1param0.prototype.onMouseUp.call(this, __s20param0);
    this.showOwnerLines();
  };
  ABGAllianceTowerMapobject.prototype.onRollOut = function (__s22param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s22param0);
  };
  ABGAllianceTowerMapobject.prototype.remove = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    __s1param0.prototype.remove.call(this);
  };
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.TextVO(this.abgAllianceTowerVO.areaNameString);
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.TextVO(this.abgAllianceTowerVO.allianceName);
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "line3Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allianceTower_worldmap_tooltip_Maya", [__dep_exact_92d05af59ee2ff30_2.Localize.number(this.abgAllianceTowerVO.currentTowerPoints)]);
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  return ABGAllianceTowerMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.ABGAllianceTowerMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
