Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function KingstowerMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingstowerMapobject, __s1param0);
  KingstowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawKingstower();
  };
  KingstowerMapobject.prototype.getFlamesClip = function () {
    var __s8local0 = this.getABGFlamesClip("Kingstower");
    return __s8local0 || __s1param0.prototype.getFlamesClip.call(this);
  };
  KingstowerMapobject.prototype.drawKingstower = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.kingsTowerMapObjectVO.getDisplayObjectClipContainer(true, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  KingstowerMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  KingstowerMapobject.prototype.onRollOver = function (__s16param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s16param0);
    }
  };
  KingstowerMapobject.prototype.onRollOut = function (__s20param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s20param0);
  };
  KingstowerMapobject.prototype.onMouseUp = function (__s22param0) {
    __s1param0.prototype.onMouseUp.call(this, __s22param0);
    this.showOwnerLines();
  };
  Object.defineProperty(KingstowerMapobject.prototype, "kingsTowerMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobject.prototype, "line1Content", {
    get: function () {
      if (this.kingsTowerMapObjectVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.kingsTowerMapObjectVO.ownerInfo));
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.kingsTowerMapObjectVO.areaNameString);
      }
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.TextVO(this.kingsTowerMapObjectVO.worldmapToolTipDescription);
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobject.prototype, "line3Content", {
    get: function () {
      if (this.kingsTowerMapObjectVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  return KingstowerMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.KingstowerMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
