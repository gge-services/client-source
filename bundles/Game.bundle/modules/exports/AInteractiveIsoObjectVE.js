Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AInteractiveIsoObjectVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AInteractiveIsoObjectVE, __s1param0);
  AInteractiveIsoObjectVE.prototype.updateInteractionVisibility = function () {
    var __s5local0 = this.isoRenderer.mouse.hoveredTarget == this;
    var __s5local1 = this.isoRenderer.mouse.focusedTarget == this;
    var __s5local2 = this.isoRenderer.mouse.selectedTarget == this;
    var __s5local3 = this.isoRenderer.mouse.draggedTarget == this;
    if (__s5local0 || __s5local1 || __s5local2 || __s5local3) {
      this.addGlow();
    } else {
      this.removeGlow();
    }
  };
  AInteractiveIsoObjectVE.prototype.addGlow = function () {
    if (this.interactiveVO.isHoverGlowAvailable && this.disp && (!this.disp.filters || this.disp.filters.length == 0)) {
      var __s9local0;
      var __s9local1 = __dep_export_Iso.Iso.data.areaData.areaInfo.kingdomID == __dep_exact_26a421b704832cff.WorldIce.KINGDOM_ID ? __dep_export_IsoConst.IsoConst.VE_GLOW_FILTER_BLUE : __dep_export_IsoConst.IsoConst.VE_GLOW_FILTER_STANDARD;
      var __s9local2 = this.disp.children;
      __s9local0 = __s9local2 && __s9local2.length === 1;
      var __s9local3 = __s9local2[0];
      if (__s9local0 && !__s9local3.allowCaching && __s9local3._running && __s9local3.numFrames > 1) {
        __s9local3.gotoAndStop(1);
        __s9local3.currentDisplayObject.tickChildren = false;
      }
      var __s9local4 = this.disp._cacheScale;
      var __s9local5 = this.disp.glowCache;
      if (__s9local0 && __s9local5 && __s9local3.sourceClassName && __s9local3.sourceClassName === this._prevSourceName && __s9local4 === this._prevGlowScale && this.disp.cacheCanvas) {
        this.disp.cacheCanvas.width = __s9local5.width;
        this.disp.cacheCanvas.height = __s9local5.height;
        var __s9local6 = this.disp.cacheCanvas.getContext("2d");
        __s9local6.clearRect(0, 0, this.disp.cacheCanvas.width, this.disp.cacheCanvas.height);
        __s9local6.drawImage(__s9local5, 0, 0);
        this.disp.filters = __s9local1;
        this.disp._filterOffsetX = this.glowOffsetX;
        this.disp._filterOffsetY = this.glowOffsetY;
      } else {
        this.disp.useFilters(__s9local1, true);
        this.glowOffsetX = this.disp._filterOffsetX = this.disp._filterOffsetX / __s9local4;
        this.glowOffsetY = this.disp._filterOffsetY = this.disp._filterOffsetY / __s9local4;
        if (this.disp.cacheCanvas && __s9local0) {
          var __s9local7 = document.createElement("canvas");
          var __s9local8 = __s9local7.getContext("2d");
          __s9local7.width = this.disp.cacheCanvas.width;
          __s9local7.height = this.disp.cacheCanvas.height;
          try {
            __s9local8.drawImage(this.disp.cacheCanvas, 0, 0);
          } catch (__s17local0) {
            throw new Error("drawImage function failed! more info: " + this.disp.cacheCanvas.width + " " + this.disp.cacheCanvas.height + " " + __s17local0);
          }
          this.invalidateGlowCache();
          this.disp.glowCache = __s9local7;
          this._prevSourceName = __s9local3.sourceClassName;
          this._prevGlowScale = this.disp._cacheScale;
        }
      }
    }
  };
  AInteractiveIsoObjectVE.prototype.removeGlow = function () {
    if (this.disp && this.interactiveVO.isHoverGlowAvailable) {
      try {
        this.disp.useFilters([], true);
      } catch (__s23local0) {
        console.warn("useFilters function failed in removeGlow:", __s23local0);
        this.disp.filters = [];
        if (this.disp.cacheCanvas) {
          try {
            this.disp.uncache();
          } catch (__s27local0) {}
        }
        return;
      }
      if (__dep_export_CastleModel.CastleModel.gfxData.animationActive) {
        var __s19local0 = this.disp.children[0];
        if (__s19local0 && !__s19local0.allowCaching && !__s19local0._running && __s19local0.numFrames > 1) {
          __s19local0.currentDisplayObject.tickChildren = true;
          __s19local0.gotoAndPlay(1);
        }
      }
    }
  };
  AInteractiveIsoObjectVE.prototype.invalidateGlowCache = function () {
    if (this.disp.glowCache instanceof HTMLCanvasElement) {
      this.disp.glowCache.width = 0;
      this.disp.glowCache = null;
    }
  };
  AInteractiveIsoObjectVE.prototype.destroyDisp = function () {
    __s1param0.prototype.destroyDisp.call(this);
    this.invalidateGlowCache();
  };
  AInteractiveIsoObjectVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    for (var __s36local0 = 0, __s36local1 = this.getInteractionDisps(); __s36local0 < __s36local1.length; __s36local0++) {
      var __s36local2 = __s36local1[__s36local0];
      __s36local2.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      __s36local2.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
      __s36local2.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      __s36local2.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
  };
  AInteractiveIsoObjectVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (__s40local2) {
      for (var __s40local0 = 0, __s40local1 = this.getInteractionDisps(); __s40local0 < __s40local1.length; __s40local0++) {
        var __s40local2 = __s40local1[__s40local0];
        __s40local2.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
        __s40local2.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
        __s40local2.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
        __s40local2.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      }
    }
  };
  AInteractiveIsoObjectVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().updateGameStage();
  };
  AInteractiveIsoObjectVE.prototype.getInteractionDisps = function () {
    return [this.elementContainer];
  };
  AInteractiveIsoObjectVE.prototype.onMouseClick = function () {};
  AInteractiveIsoObjectVE.prototype.onMouseUp = function (__s51param0) {
    this.objectInteractions.onMouseUpTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onMouseDown = function (__s53param0) {
    this.objectInteractions.onMouseDownTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onMouseOver = function (__s55param0) {
    this.objectInteractions.onMouseOverTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onMouseOut = function (__s57param0) {
    this.objectInteractions.onMouseOutTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onHoverTarget = function () {};
  AInteractiveIsoObjectVE.prototype.onUnHoverTarget = function () {};
  AInteractiveIsoObjectVE.prototype.onCameraZoomChanged = function () {
    __s1param0.prototype.onCameraZoomChanged.call(this);
    if (this.disp.glowCache) {
      this.disp.glowCache = null;
      if (this.disp.filters && this.disp.filters.length > 0) {
        this.removeGlow();
        this.addGlow();
      }
    }
  };
  Object.defineProperty(AInteractiveIsoObjectVE.prototype, "interactiveVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AInteractiveIsoObjectVE;
}(__dep_export_AIsoObjectVE.AIsoObjectVE);
exports.AInteractiveIsoObjectVE = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
var __dep_export_Iso = require("gge-module:export_Iso");
