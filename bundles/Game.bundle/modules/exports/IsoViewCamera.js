Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_AIsoViewComponent = require("gge-module:export_AIsoViewComponent");
var __dep_export_IsoViewScaleScheduler = require("gge-module:export_IsoViewScaleScheduler");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function IsoViewCamera() {
    var __s3local0 = this;
    __s3local0._isActive = true;
    __s3local0._currentZoomIndex = 0;
    __s3local0._scrollBounds = new __s0local1();
    __s3local0._cameraBounds = new __s0local1();
    __s3local0._currentScrollPos = new __s0local0();
    __s3local0._shakeFactor = 0;
    __s3local0._shakeOffset = new __s0local0();
    __s3local0._scratchScrollPos = new __s0local0();
    __s3local0._zoomAnimActive = false;
    __s3local0._zoomAnimFrom = 1;
    __s3local0._zoomAnimTo = 1;
    __s3local0._zoomAnimElapsed = 0;
    __s3local0._zoomAnimScreenPivot = new __s0local0();
    __s3local0._zoomAnimWorldPivot = new __s0local0();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewCamera, __s1param0);
  IsoViewCamera.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._isActive = true;
  };
  IsoViewCamera.prototype.setup = function () {
    __s1param0.prototype.setup.call(this);
    this._backgroundLayer = this.isoRenderer.layers.backgroundLayer;
    this._staticIsoObjectLayer = this.isoRenderer.layers.staticIsoObjectLayer;
    this._schedule = this._schedule || new __dep_export_IsoViewScaleScheduler.IsoViewScaleScheduler(this);
    this._currentZoomIndex = 0;
    this._forceNextScroll = true;
    this.calcScreenDimension();
    this.calcScrollBounds();
    this.calcCameraBounds();
    this.zoomToDefault();
    this.scrollToCenter();
  };
  IsoViewCamera.prototype.calcScrollBounds = function () {
    var __s9local0 = this.isoRenderer.isoData.grid.origins;
    var __s9local1 = new __s0local1();
    __s9local1.top = this.getScreenPosByGridPos(__s9local0.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER)).y;
    __s9local1.bottom = this.getScreenPosByGridPos(__s9local0.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER)).y;
    __s9local1.left = this.getScreenPosByGridPos(__s9local0.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER)).x;
    __s9local1.right = this.getScreenPosByGridPos(__s9local0.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER)).x;
    var __s9local2 = this.isoRenderer.settings.scrollBounds;
    var __s9local3 = this.isoRenderer.settings.minScrollBounds;
    this.scrollBounds.top = __dep_exact_9e901e8e2483a22f.MathBase.min(__s9local3.top, __s9local1.top + __s9local2.top);
    this.scrollBounds.bottom = __dep_exact_9e901e8e2483a22f.MathBase.max(__s9local3.bottom, __s9local1.bottom + __s9local2.bottom);
    this.scrollBounds.left = __dep_exact_9e901e8e2483a22f.MathBase.min(__s9local3.left, __s9local1.left + __s9local2.left);
    this.scrollBounds.right = __dep_exact_9e901e8e2483a22f.MathBase.max(__s9local3.right, __s9local1.right + __s9local2.right);
  };
  IsoViewCamera.prototype.calcCameraBounds = function () {
    var __s11local0 = Math.ceil(IsoViewCamera.screenDimension.x * 0.5 / this.getCurrentZoomValue());
    var __s11local1 = Math.ceil(IsoViewCamera.screenDimension.y * 0.5 / this.getCurrentZoomValue());
    this.cameraBounds.left = this.scrollBounds.left + __s11local0;
    this.cameraBounds.right = this.scrollBounds.right - __s11local0;
    this.cameraBounds.top = this.scrollBounds.top + __s11local1;
    this.cameraBounds.bottom = this.scrollBounds.bottom - __s11local1;
  };
  IsoViewCamera.prototype.calcScreenDimension = function () {
    var __s13local0 = __dep_export_IsoHelper.IsoHelper.view.stage;
    IsoViewCamera._screenDimension.x = __s13local0.stageWidth;
    IsoViewCamera._screenDimension.y = __s13local0.stageHeight;
  };
  IsoViewCamera.prototype.zoomRel = function (__s15param0, __s15param1 = false, __s15param2 = false) {
    if (this.isActive || __s15param1) {
      var __s15local0 = __s15param0 > 0 ? 1 : -1;
      var __s15local1 = this.getCurrentZoomValue();
      var __s15local2 = this.worldLayer.scaleX;
      var __s15local3 = new __s0local0(this._currentScrollPos.x, this._currentScrollPos.y);
      if (__s15local0 == IsoViewCamera.ZOOM_OUT) {
        if (this.canZoomOut) {
          this._currentZoomIndex += IsoViewCamera.ZOOM_OUT;
          this.updateScale();
          if (__s15param2) {
            this.startZoomAnim(__s15local2, __s15local1, __s15local3, this.getScreenCenter());
          }
        } else {
          this.scrollToCenter();
        }
      } else if (__s15local0 == IsoViewCamera.ZOOM_IN && this.canZoomIn) {
        this._currentZoomIndex += IsoViewCamera.ZOOM_IN;
        this.updateScale();
        if (__s15param2) {
          this.startZoomAnim(__s15local2, __s15local1, __s15local3, this.getScreenCenter());
        }
      }
    }
  };
  IsoViewCamera.prototype.zoomRelToScreenPos = function (__s24param0, __s24param1) {
    if (this.isActive) {
      var __s24local0 = this.getCurrentZoomValue();
      var __s24local1 = this.worldLayer.scaleX;
      var __s24local2 = new __s0local0(this._currentScrollPos.x, this._currentScrollPos.y);
      var __s24local3 = __s24param0 > 0 ? 1 : -1;
      if (__s24local3 == IsoViewCamera.ZOOM_OUT) {
        if (this.canZoomOut) {
          this._currentZoomIndex += IsoViewCamera.ZOOM_OUT;
          this.updateScale();
          this.anchorScrollToScreenPos(__s24param1, __s24local2, __s24local0);
          this.startZoomAnim(__s24local1, __s24local0, __s24local2, __s24param1);
        } else {
          this.scrollToCenter();
        }
      } else if (__s24local3 == IsoViewCamera.ZOOM_IN && this.canZoomIn) {
        this._currentZoomIndex += IsoViewCamera.ZOOM_IN;
        this.updateScale();
        this.anchorScrollToScreenPos(__s24param1, __s24local2, __s24local0);
        this.startZoomAnim(__s24local1, __s24local0, __s24local2, __s24param1);
      }
    }
  };
  IsoViewCamera.prototype.anchorScrollToScreenPos = function (__s31param0, __s31param1, __s31param2) {
    var __s31local0 = this.getCurrentZoomValue();
    if (__s31param2 != __s31local0) {
      var __s31local1 = __s31param0.x - Math.floor(IsoViewCamera.screenDimension.x * 0.5);
      var __s31local2 = __s31param0.y - Math.floor(IsoViewCamera.screenDimension.y * 0.5);
      var __s31local3 = 1 / __s31param2 - 1 / __s31local0;
      this._scratchScrollPos.x = __s31param1.x + __s31local1 * __s31local3;
      this._scratchScrollPos.y = __s31param1.y + __s31local2 * __s31local3;
      this.scrollAbs(this._scratchScrollPos);
    }
  };
  IsoViewCamera.prototype.zoomAbs = function (__s34param0) {
    if (this.isActive) {
      this._currentZoomIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s34param0, 0, this.getMaxZoomOutIndex()));
      this.updateScale();
    }
  };
  IsoViewCamera.prototype.zoomMaxIn = function () {
    this.zoomAbs(0);
  };
  IsoViewCamera.prototype.zoomMaxOut = function () {
    this.zoomAbs(this.getMaxPossibleZoomOutIndex());
  };
  IsoViewCamera.prototype.zoomToDefault = function () {
    var __s41local0 = this.getMaxPossibleZoomOutIndex();
    var __s41local1 = __dep_exact_f855840627e6e145.int(__dep_export_IsoConst.IsoConst.CAMERA_ZOOM_DEFAULT_INDEX > __s41local0 ? __s41local0 : __dep_export_IsoConst.IsoConst.CAMERA_ZOOM_DEFAULT_INDEX);
    if (this.isoRenderer.isoData.areaData.isKingdomCastle) {
      __s41local1 += IsoViewCamera.ZOOM_IN;
    }
    this.zoomAbs(__s41local1);
  };
  Object.defineProperty(IsoViewCamera.prototype, "canZoomIn", {
    get: function () {
      return this._currentZoomIndex > 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "canZoomOut", {
    get: function () {
      return this._currentZoomIndex < this.getMaxZoomOutIndex() && this.doesWorldFitIntoScreen(this._currentZoomIndex + IsoViewCamera.ZOOM_OUT);
    },
    enumerable: true,
    configurable: true
  });
  IsoViewCamera.prototype.getMaxZoomOutIndex = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_IsoConst.IsoConst.CAMERA_ZOOM_STEPS.length - 1);
  };
  IsoViewCamera.prototype.getMaxPossibleZoomOutIndex = function () {
    for (var __s50local0 = this.getMaxZoomOutIndex(), __s50local1 = 0; __s50local1 + IsoViewCamera.ZOOM_OUT <= __s50local0 && this.doesWorldFitIntoScreen(__s50local1 + IsoViewCamera.ZOOM_OUT);) {
      __s50local1 += IsoViewCamera.ZOOM_OUT;
    }
    return __s50local1;
  };
  IsoViewCamera.prototype.doesWorldFitIntoScreen = function (__s54param0) {
    return this.scrollBounds.width * this.getZoomValue(__s54param0) >= IsoViewCamera.screenDimension.x && this.scrollBounds.height * this.getZoomValue(__s54param0) >= IsoViewCamera.screenDimension.y;
  };
  IsoViewCamera.prototype.updateScale = function () {
    var __s56local0 = this.worldLayer.scaleX;
    var __s56local1 = this.getCurrentZoomValue();
    this.worldLayer.scaleX = this.worldLayer.scaleY = __s56local1;
    this.calcScrollBounds();
    this.calcCameraBounds();
    if (!__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isEdge && !__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isIE && __s56local0 < 0.5 && __s56local1 >= 0.5 || __s56local0 >= 0.5 && __s56local1 < 0.5) {
      this.updateBuildingZoom();
    }
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_CAMERA_ZOOM_CHANGED, [this.getCurrentZoomValue()]));
    this.scrollAbs(this._currentScrollPos);
  };
  IsoViewCamera.prototype.startZoomAnim = function (__s59param0, __s59param1, __s59param2, __s59param3) {
    var __s59local0 = this.getCurrentZoomValue();
    if (IsoViewCamera.ZOOM_ANIM_FRAMES <= 1 || __s59param0 <= 0 || __s59param0 == __s59local0) {
      this._zoomAnimActive = false;
    } else {
      var __s59local1 = Math.floor(IsoViewCamera.screenDimension.x * 0.5);
      var __s59local2 = Math.floor(IsoViewCamera.screenDimension.y * 0.5);
      this._zoomAnimWorldPivot.x = (__s59param3.x - __s59local1) / __s59param1 + __s59param2.x;
      this._zoomAnimWorldPivot.y = (__s59param3.y - __s59local2) / __s59param1 + __s59param2.y;
      this._zoomAnimScreenPivot.x = __s59param3.x;
      this._zoomAnimScreenPivot.y = __s59param3.y;
      this._zoomAnimFrom = __s59param0;
      this._zoomAnimTo = __s59local0;
      this._zoomAnimElapsed = 0;
      this._zoomAnimActive = true;
      this.applyDisplayZoom(__s59param0);
    }
  };
  IsoViewCamera.prototype.getScreenCenter = function () {
    return new __s0local0(Math.floor(IsoViewCamera.screenDimension.x * 0.5), Math.floor(IsoViewCamera.screenDimension.y * 0.5));
  };
  IsoViewCamera.prototype.updateZoomAnim = function () {
    if (this._zoomAnimActive) {
      this._zoomAnimElapsed++;
      var __s65local0 = this._zoomAnimElapsed / IsoViewCamera.ZOOM_ANIM_FRAMES;
      if (__s65local0 >= 1) {
        __s65local0 = 1;
        this._zoomAnimActive = false;
      }
      var __s65local1 = 1 - (1 - __s65local0) * (1 - __s65local0);
      var __s65local2 = this._zoomAnimFrom + (this._zoomAnimTo - this._zoomAnimFrom) * __s65local1;
      this.applyDisplayZoom(__s65local2);
    }
  };
  IsoViewCamera.prototype.applyDisplayZoom = function (__s69param0) {
    this.worldLayer.scaleX = this.worldLayer.scaleY = __s69param0;
    this.worldLayer.x = this._zoomAnimScreenPivot.x - this._zoomAnimWorldPivot.x * __s69param0 + this._shakeOffset.x * this._shakeFactor;
    this.worldLayer.y = this._zoomAnimScreenPivot.y - this._zoomAnimWorldPivot.y * __s69param0 + this._shakeOffset.y * this._shakeFactor;
    this.applyPositionToBackgroundLayer();
  };
  IsoViewCamera.prototype.updateBuildingZoom = function () {
    if (!this._schedule.isRunning) {
      this._schedule.start();
    }
  };
  IsoViewCamera.prototype.getZoomValue = function (__s74param0) {
    return __dep_export_IsoConst.IsoConst.CAMERA_ZOOM_STEPS[__s74param0];
  };
  IsoViewCamera.prototype.getCurrentZoomValue = function () {
    return __dep_export_IsoConst.IsoConst.CAMERA_ZOOM_STEPS[this.currentZoomIndex];
  };
  IsoViewCamera.prototype.scrollRel = function (__s78param0, __s78param1 = true) {
    if (this.isActive) {
      this._scratchScrollPos.x = this.currentScrollPos.x - Math.floor(__s78param0.x);
      this._scratchScrollPos.y = this.currentScrollPos.y - Math.floor(__s78param0.y);
      this.scrollAbs(this._scratchScrollPos, __s78param1);
    }
  };
  IsoViewCamera.prototype.scrollToGridPos = function (__s81param0, __s81param1 = true) {
    this.scrollAbs(this.getScreenPosByGridPos(__s81param0), __s81param1);
  };
  IsoViewCamera.prototype.scrollAbs = function (__s83param0, __s83param1 = true, __s83param2 = false) {
    if (this.isActive && !__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDisplayingAnyDialog || __s83param2 || this._forceNextScroll) {
      this._forceNextScroll = false;
      if (__s83param1) {
        this._currentScrollPos.x = Math.max(this.cameraBounds.left, Math.min(this.cameraBounds.right, __s83param0.x));
        this._currentScrollPos.y = Math.max(this.cameraBounds.top, Math.min(this.cameraBounds.bottom, __s83param0.y));
      } else {
        this._currentScrollPos.x = __s83param0.x;
        this._currentScrollPos.y = __s83param0.y;
      }
      var __s83local0 = -this.currentScrollPos.x * this.getCurrentZoomValue() + Math.floor(IsoViewCamera.screenDimension.x * 0.5) + this._shakeOffset.x * this._shakeFactor;
      var __s83local1 = -this.currentScrollPos.y * this.getCurrentZoomValue() + Math.floor(IsoViewCamera.screenDimension.y * 0.5) + this._shakeOffset.y * this._shakeFactor;
      this.worldLayer.x = __s83local0;
      this.worldLayer.y = __s83local1;
      this.applyPositionToBackgroundLayer();
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_CAMERA_POS_CHANGED, [new __s0local0(__s83local0, __s83local1)]));
    }
  };
  IsoViewCamera.prototype.scrollToCenter = function () {
    if (this.isActive) {
      this.scrollToGridPos(__dep_export_IsoConst.IsoConst.CAMERA_CENTER_TILE);
    }
  };
  IsoViewCamera.prototype.updateShake = function () {
    if (this._shakeFactor > 0) {
      this._shakeFactor -= 0.2;
      if (this._shakeFactor < 0) {
        this._shakeFactor = 0;
      }
      this.scrollAbs(this.currentScrollPos, true);
    }
  };
  IsoViewCamera.prototype.shakeCamera = function () {
    this._shakeFactor = 1;
    this._shakeOffset.x = __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(-30, 30);
    this._shakeOffset.y = __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(-30, 30);
  };
  IsoViewCamera.prototype.applyPositionToBackgroundLayer = function () {
    this._backgroundLayer.x = this.worldLayer.x;
    this._backgroundLayer.y = this.worldLayer.y;
    this._backgroundLayer.scaleX = this.worldLayer.scaleX;
    this._backgroundLayer.scaleY = this.worldLayer.scaleY;
    this._staticIsoObjectLayer.x = this.worldLayer.x;
    this._staticIsoObjectLayer.y = this.worldLayer.y;
    this._staticIsoObjectLayer.scaleX = this.worldLayer.scaleX;
    this._staticIsoObjectLayer.scaleY = this.worldLayer.scaleY;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
  };
  IsoViewCamera.prototype.getScreenPosByGridPos = function (__s99param0, __s99param1 = null) {
    var __s99local0 = __s99param1 || new __s0local0();
    var __s99local1 = (__s99param0.x - __dep_export_IsoConst.IsoConst.CAMERA_CENTER_TILE.x) * (__dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * 0.5);
    var __s99local2 = (__s99param0.y - __dep_export_IsoConst.IsoConst.CAMERA_CENTER_TILE.y) * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y;
    __s99local0.x = __s99local1 - __s99local2;
    __s99local0.y = (__s99local0.x + __s99local2 * 2) * 0.5;
    return __s99local0;
  };
  IsoViewCamera.prototype.getScreenPosByGridPosDelta = function (__s101param0, __s101param1 = null) {
    var __s101local0 = __s101param1 || new __s0local0();
    var __s101local1 = (__s101param0.x - __s101param0.y) * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * 0.5;
    var __s101local2 = (__s101param0.x + __s101param0.y) * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y * 0.5;
    __s101local0.x = __s101local1;
    __s101local0.y = __s101local2;
    return __s101local0;
  };
  IsoViewCamera.prototype.getGridPosByScreenPos = function (__s103param0, __s103param1 = null) {
    var __s103local0 = __s103param1 || new __s0local0();
    var __s103local1 = (__s103param0.y * 2 - __s103param0.x) * 0.5;
    var __s103local2 = __s103param0.x + __s103local1;
    __s103local2 /= __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * 0.5;
    __s103local1 /= __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y;
    __s103local0.x = Math.floor(__s103local2 + __dep_export_IsoConst.IsoConst.CAMERA_CENTER_TILE.x);
    __s103local0.y = Math.floor(__s103local1 + __dep_export_IsoConst.IsoConst.CAMERA_CENTER_TILE.y);
    return __s103local0;
  };
  IsoViewCamera.prototype.recheckCameraValues = function () {
    this.calcScreenDimension();
    this.calcScrollBounds();
    this.calcCameraBounds();
    if (!this.doesWorldFitIntoScreen(this._currentZoomIndex)) {
      this.zoomAbs(this.getMaxPossibleZoomOutIndex());
    }
    this.scrollAbs(this.currentScrollPos, true, true);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().updateGameStage();
  };
  IsoViewCamera.prototype.onScreenResize = function () {
    this.recheckCameraValues();
  };
  IsoViewCamera.prototype.onExpansion = function () {
    this.recheckCameraValues();
  };
  Object.defineProperty(IsoViewCamera.prototype, "worldLayer", {
    get: function () {
      return this.isoRenderer.layers.transformLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "currentScrollPos", {
    get: function () {
      return this._currentScrollPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "scrollBounds", {
    get: function () {
      return this._scrollBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera, "screenDimension", {
    get: function () {
      return IsoViewCamera._screenDimension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (__s122param0) {
      this._isActive = __s122param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "cameraBounds", {
    get: function () {
      return this._cameraBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "currentZoomIndex", {
    get: function () {
      return this._currentZoomIndex;
    },
    enumerable: true,
    configurable: true
  });
  IsoViewCamera.__initialize_static_members = function () {
    IsoViewCamera.ZOOM_OUT = 1;
    IsoViewCamera._screenDimension = new __s0local0(-1, -1);
  };
  IsoViewCamera.ZOOM_IN = -1;
  IsoViewCamera.ZOOM_ANIM_FRAMES = 6;
  return IsoViewCamera;
}(__dep_export_AIsoViewComponent.AIsoViewComponent);
exports.IsoViewCamera = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
