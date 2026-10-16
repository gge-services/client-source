Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_4 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_VisualMapObjectEvent = require("gge-module:export_VisualMapObjectEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_PoolManager = require("gge-module:export_PoolManager");
var __dep_export_CastleWorldmapBitmap = require("gge-module:export_CastleWorldmapBitmap");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_SectorHelper = require("gge-module:export_SectorHelper");
var __dep_export_ConnectionMapObject = require("gge-module:export_ConnectionMapObject");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = createjs.Point;
var __s0local4 = function (__s1param0) {
  function CastleWorldmapRenderer(__s3param0, __s3param1 = -1, __s3param2 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.isNaviVisible = false;
    __s3local0._mode = 0;
    __s3local0.viewPortWidthInPixels = 0;
    __s3local0.viewPortHeightInPixels = 0;
    __s3local0.viewPortInvalidated = false;
    __s3local0._movementsFirstRealRendered = false;
    __s3local0._isUsingMouse = false;
    __s3local0.lastTimeNaivRotationUpdate = 0;
    __s3local0.layer = __s3param0;
    __s3local0.layer.name = "worldmapContainer";
    __s3local0._bgLayer = new __s0local0();
    __s3local0._bgLayer.name = "worldMapRendererBgLayer";
    __s3local0.layoutManager.bgStage.addChild(__s3local0.bgLayer);
    __s3local0._staticLayer = new __s0local0();
    __s3local0._staticLayer.name = "worldMapRendererStaticLayer";
    __s3local0.layoutManager.staticStage.addChild(__s3local0._staticLayer);
    __s3local0.nonInteractiveLayer = new __s0local0();
    __s3local0.nonInteractiveLayer.name = "nonInteractiveLayer";
    __s3local0.nonInteractiveLayer.mouseChildren = false;
    __s3local0.nonInteractiveLayer.mouseEnabled = true;
    __s3local0.mapObjectsLayer = new __s0local0();
    __s3local0.mapObjectsLayer.name = "mapObjectsLayer";
    __s3local0.mapMovementsLayer = new __s0local0();
    __s3local0.mapMovementsLayer.name = "mapMovementsLayer";
    __s3local0.mapLabelsLayer = new __s0local0();
    __s3local0.mapLabelsLayer.name = "mapLabelsLayer";
    __s3local0.mapLabelsLayer.addEventListener(__s0local2.MOUSE_OVER, __s3local0.bindFunction(__s3local0._onMapMouseOver));
    __s3local0.mapLabelsLayer.addEventListener(__s0local2.MOUSE_OUT, __s3local0.bindFunction(__s3local0._onMapMouseOut));
    __s3local0.updateGlobalEventListener();
    __s3local0.connectionLines = new __dep_export_ConnectionMapObject.ConnectionMapObject();
    __s3local0.naviArrow = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleNavigationArrow"))();
    __s3local0.itxt_distance = __s3local0.textFieldManager.registerTextField(__s3local0.naviArrow.mc_circle.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO("---"));
    __s3local0.bgLayer.addChild(__s3local0.nonInteractiveLayer);
    __s3local0.staticLayer.addChild(__s3local0.mapObjectsLayer);
    __s3local0.layer.addChild(__s3local0.connectionLines);
    __s3local0.staticLayer.addChild(__s3local0.mapLabelsLayer);
    __s3local0.layer.addChild(__s3local0.mapMovementsLayer);
    __s3local0.mapLabelsLayer.stage.addEventListener(__s0local2.MOUSE_OUT, __s3local0.bindFunction(__s3local0._onMapMouseOut));
    for (var __s3local1 = 0; __s3local1 < __s3local0.layer.children.length; __s3local1++) {
      var __s3local2 = __s3local0.layer.children[__s3local1];
      __s3local2.tickEnabled = false;
      __s3local2.tickChildren = false;
    }
    __s3local0.layer.addEventListener(__s0local2.ROLL_OVER, __s3local0.bindFunction(__s3local0.showNavi));
    __s3local0._domNaviContainer = document.getElementById("naviCursorContainer");
    var __s3local3 = __s3local0.naviArrow.width;
    var __s3local4 = __s3local0.naviArrow.height;
    __s3local0._domNaviContainer.style.width = __s3local3 + "px";
    __s3local0._domNaviContainer.style.height = __s3local4 + "px";
    __s3local0._domNaviCircleCanvas = document.getElementById("naviCircle");
    __s3local0._domNaviCircleCanvas.width = __s3local3;
    __s3local0._domNaviCircleCanvas.height = __s3local4;
    __s3local0._domNaviCtx = __s3local0._domNaviCircleCanvas.getContext("2d");
    __s3local0.naviArrow.mc_arrow.visible = false;
    __s3local0.naviArrow.mc_cursor.visible = false;
    __s3local0.naviArrow.mc_circle.txt_value.visible = false;
    __s3local0.naviArrow.draw(__s3local0._domNaviCtx, true);
    __s3local0._domNaviTxt = document.getElementById("naviTxt");
    __s3local0.naviArrow.mc_arrow.visible = true;
    __s3local0._domNaviArrowCanvas = document.getElementById("naviArrow");
    __s3local0._domNaviArrowCanvas.width = __s3local0.naviArrow.mc_arrow.width;
    __s3local0._domNaviArrowCanvas.height = __s3local0.naviArrow.mc_arrow.height;
    __s3local0.naviArrow.mc_arrow.bitmap_1.draw(__s3local0._domNaviArrowCanvas.getContext("2d"), true);
    __s3local0._domNaviArrowCanvas.style.top = __s3local0.naviArrow.mc_arrow.y + __s3local0.naviArrow.mc_arrow.bitmap_1.y - 5 + "px";
    __s3local0._domNaviArrowCanvas.style.left = __s3local0.naviArrow.mc_arrow.x + __s3local0.naviArrow.mc_arrow.bitmap_1.x + "px";
    __s3local0._domNaviCursorCanvas = document.getElementById("naviCursor");
    __s3local0._domNaviCursorCanvas.width = __s3local0.naviArrow.mc_cursor.width;
    __s3local0._domNaviCursorCanvas.height = __s3local0.naviArrow.mc_cursor.height;
    __s3local0.naviArrow.mc_cursor.visible = true;
    __s3local0.naviArrow.mc_cursor.draw(__s3local0._domNaviCursorCanvas.getContext("2d"), true);
    __s3local0.showNavi(null);
    __s3local0.camera = new __dep_export_CastleWorldmapCamera.CastleWorldmapCamera(__s3local0.layer, __s3local0.bgLayer, 0, 0, 1);
    __s3local0.camera.update.add(__s3local0.bindFunction(__s3local0.onCameraUpdate));
    __s3local0.viewPortWidthInPixels = __s3param1 != -1 ? __s3param1 : __s3param0.width;
    __s3local0.viewPortHeightInPixels = __s3param2 != -1 ? __s3param2 : __s3param0.height;
    __s3local0.initNonInteractiveContent();
    __s3local0.initNaviArrow();
    __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.checkResetOnKingdomChange();
    __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.directoryChanged.add(__s3local0.bindFunction(__s3local0.invalidateMap));
    __s3local0.interactiveMapObjects = new Map();
    __s3local0.movements = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapRenderer, __s1param0);
  CastleWorldmapRenderer.prototype.updateGlobalEventListener = function () {
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_SWITCHED, this.bindFunction(this._onKingdomSwitched));
  };
  CastleWorldmapRenderer.prototype._onMapMouseOver = function (__s9param0) {
    var __s9local0 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s9param0.target);
    if (__dep_exact_9e901e8e2483a22f_1.BasicToolTipManager.TOOLTIP_LABEL in __s9local0 && __s9local0.toolTipText) {
      this.layoutManager.tooltipManager.show(__s9local0.toolTipText, __s9local0);
    }
  };
  CastleWorldmapRenderer.prototype._onMapMouseOut = function (__s12param0) {
    this.layoutManager.tooltipManager.hide();
  };
  CastleWorldmapRenderer.prototype.showNavi = function (__s14param0) {
    if (!this.isNaviVisible && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().numVisibleDialogs == 0) {
      this.isNaviVisible = true;
      this._domNaviContainer.style.display = "block";
      this.layoutManager.nativeCursor.hideCustomCursor();
      __dep_exact_81dacdf05bd32292.Mouse.instance().showCssCursor(__dep_exact_81dacdf05bd32292_3.CSSMouseCursor.NONE);
      document.body.classList.add("cursor-none");
    }
  };
  CastleWorldmapRenderer.prototype.hideNavi = function (__s17param0 = null) {
    if (this.isNaviVisible) {
      this.isNaviVisible = false;
      this.setNaviArrowRotation(new __s0local3(0, 0));
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      this._domNaviContainer.style.display = "none";
      document.body.classList.remove("cursor-none");
    }
  };
  CastleWorldmapRenderer.prototype.isNaviUsingMouse = function (__s20param0) {
    this._isUsingMouse = __s20param0;
  };
  CastleWorldmapRenderer.prototype.hideTooltips = function () {
    this.layoutManager.tooltipManager.hide();
  };
  CastleWorldmapRenderer.prototype.initNonInteractiveContent = function () {
    this.viewportBackgroundSectorBitmaps = new Map();
    this.nonInteractiveLayer.removeChildren();
  };
  CastleWorldmapRenderer.prototype.invalidateMap = function () {
    this.viewPortInvalidated = true;
  };
  Object.defineProperty(CastleWorldmapRenderer.prototype, "mode", {
    set: function (__s28param0) {
      if (this._mode !== __s28param0) {
        this._mode = __s28param0;
        switch (__s28param0) {
          case CastleWorldmapRenderer.PAUSE:
            this.switchToPause();
            break;
          case CastleWorldmapRenderer.RUNNING:
            this.switchToRunMode();
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapRenderer.prototype.switchToRunMode = function () {
    this.layer.addEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.layoutManager.uiStage.addEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.showNavi));
    this.layoutManager.uiStage.addEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.hideNavi));
    this.camera.activate();
    this.viewPortInvalidated = true;
    __dep_exact_9e901e8e2483a22f_3.debug("Worldmap Renderer engaged.");
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState === __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.UPDATE_AREA_INFO));
    }
    __dep_export_CastleModel.CastleModel.worldmapData.requestExtraData();
    this.updateMovementsFromModel();
    this.showNavi(null);
  };
  CastleWorldmapRenderer.prototype.switchToPause = function () {
    this.layer.removeEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.layoutManager.uiStage.removeEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.hideNavi));
    this.layoutManager.uiStage.removeEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.showNavi));
    this.camera.deactivate();
    this.clearMapobjects();
    this.clearBackground();
    this.clearMovements();
    this.hideLines();
    this.hideNavi();
    this.hideTooltips();
    __dep_exact_9e901e8e2483a22f_3.debug("Worldmap Renderer suspended.");
  };
  CastleWorldmapRenderer.prototype.onEnterFrame = function (__s37param0) {
    if (this.layer.stage) {
      this.layer.stage.invalidate();
    }
    if (this._movementsFirstRealRendered) {
      this.updateMovements();
    }
    if (this.isNaviVisible && this._isUsingMouse) {
      if (__s37param0.timeStamp - this.lastTimeNaivRotationUpdate > 500) {
        this.setNaviArrowRotation(this.camera.relativeMousePos, true);
        this.lastTimeNaivRotationUpdate = __s37param0.timeStamp;
      } else {
        this.setNaviArrowRotation(this.camera.relativeMousePos, false);
      }
      this._domNaviContainer.style.top = Math.round(this.camera.lastMouseStage.y) + "px";
      this._domNaviContainer.style.left = Math.round(this.camera.lastMouseStage.x) + "px";
    }
    this.checkExpiredRelocationObjects();
    this.renderLayer();
  };
  CastleWorldmapRenderer.prototype.checkExpiredRelocationObjects = function () {
    if (__dep_export_CastleModel.CastleModel.worldmapData.getExpiredRelocationObject()) {
      var __s44local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s44local0.x, __s44local0.y, __s44local0.x + __s44local0.width, __s44local0.y + __s44local0.height);
    }
  };
  CastleWorldmapRenderer.prototype.renderNavForMobile = function (__s47param0 = false) {
    if (!this._isUsingMouse) {
      if (__s47param0) {
        this._domNaviContainer.style.display = "none";
        return;
      }
      this.setNaviArrowRotation(this.camera.relativeMousePos, true);
      this._domNaviContainer.style.top = Math.round(this.camera.lastMouseStage.y) + "px";
      this._domNaviContainer.style.left = Math.round(this.camera.lastMouseStage.x) + "px";
      if (this.naviArrow.width + this.camera.lastMouseStage.x > document.documentElement.clientWidth || this.naviArrow.height + this.camera.lastMouseStage.y > document.documentElement.clientHeight) {
        this._domNaviContainer.style.display = "none";
      } else {
        this._domNaviContainer.style.display = "block";
      }
    }
  };
  CastleWorldmapRenderer.prototype.onRender = function (__s53param0) {
    if (this.layer.hasEventListener(__s0local1.RENDER)) {
      this.layer.removeEventListener(__s0local1.RENDER, this.bindFunction(this.onRender));
    }
    this.renderLayer();
  };
  CastleWorldmapRenderer.prototype.onCameraUpdate = function () {
    this.viewPortInvalidated = true;
  };
  CastleWorldmapRenderer.prototype.renderLayer = function () {
    if (this.viewPortInvalidated) {
      this.viewPortInvalidated = false;
      this.renderBackgrounds();
      if (__dep_export_CastleModel.CastleModel.worldmapData.areaTiles.allSectorsInitialized) {
        this.finishRendering();
      } else {
        __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.SGN_SECTORS_INITIALIZED.add(this.bindFunction(this.finishRendering));
      }
    }
  };
  CastleWorldmapRenderer.prototype.finishRendering = function () {
    this.renderDecoObjects();
    this.renderMapObjects();
    this.updateConnections();
    if (!this._movementsFirstRealRendered) {
      this.updateMovementsFromModel();
      this._movementsFirstRealRendered = true;
      this.updateMovements();
    }
    __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.SGN_SECTORS_INITIALIZED.remove(this.bindFunction(this.finishRendering));
  };
  CastleWorldmapRenderer.prototype.destroy = function () {
    this.camera.update.remove(this.bindFunction(this.onCameraUpdate));
    this.mapLabelsLayer.removeEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this._onMapMouseOver));
    this.mapLabelsLayer.removeEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this._onMapMouseOut));
    this.mapLabelsLayer.stage.removeEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this._onMapMouseOut));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_SWITCHED, this.bindFunction(this._onKingdomSwitched));
  };
  CastleWorldmapRenderer.prototype._onKingdomSwitched = function (__s68param0) {
    this.kingdomChanged();
  };
  CastleWorldmapRenderer.prototype.renderBackgrounds = function () {
    if (this.camera) {
      var __s70local0;
      var __s70local1;
      var __s70local2 = Math.ceil(__dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X * this.camera.viewPortZoom);
      var __s70local3 = this.camera.getPixelOffset(__dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X, __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y);
      for (var __s70local4 = this.camera.getSectorViewportRectangle(), __s70local5 = new __s0local3(0, 0), __s70local6 = 0; __s70local6 < __s70local4.height; ++__s70local6) {
        for (var __s70local7 = 0; __s70local7 < __s70local4.width; ++__s70local7) {
          __s70local5.x = __s70local4.x + __s70local7;
          __s70local5.y = __s70local4.y + __s70local6;
          if (!(__s70local2 > 3000)) {
            __s70local5 = __dep_export_SectorHelper.SectorHelper.getLoopedSectorPosition(__s70local5);
            var __s70local8 = __s70local7 + ":" + __s70local6;
            __s70local0 = this.viewportBackgroundSectorBitmaps.get(__s70local8);
            __s70local1 = __dep_export_CastleModel.CastleModel.worldmapData.bgTiles.getBitmapForSectorByXY(__s70local5.x, __s70local5.y);
            var __s70local9 = __dep_exact_9e901e8e2483a22f_2.MathBase.clamp(this.camera.viewPortZoom + 0.001, __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MIN, __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX);
            if (__s70local0 instanceof __dep_export_CastleWorldmapBitmap.CastleWorldmapBitmap) {
              if (__s70local1 != null && this.isBitmapDataValid(__s70local1)) {
                if (!__s70local4.contains(__s70local0.sectorX, __s70local0.sectorY)) {
                  __dep_export_CastleModel.CastleModel.worldmapData.bgTiles.freeBitmapDataMemory(__s70local0.sectorX, __s70local0.sectorY);
                }
                try {
                  __s70local0.bitmapData = __s70local1;
                } catch (__s82local0) {
                  continue;
                }
                __s70local0.x = __s70local7 * __s70local2;
                __s70local0.y = __s70local6 * __s70local2;
                __s70local0.sectorX = __dep_exact_f855840627e6e145.int(__s70local7 + __s70local4.x);
                __s70local0.sectorY = __dep_exact_f855840627e6e145.int(__s70local6 + __s70local4.y);
                if (__s70local0.scaleX != __s70local9) {
                  __s70local0.scaleX = __s70local9;
                  __s70local0.scaleY = __s70local9;
                }
              }
            } else {
              if (__s70local1 == null || !this.isBitmapDataValid(__s70local1)) {
                continue;
              }
              __s70local0 = new __dep_export_CastleWorldmapBitmap.CastleWorldmapBitmap(__s70local1, __dep_exact_81dacdf05bd32292_4.PixelSnapping.ALWAYS, true);
              this.viewportBackgroundSectorBitmaps.set(__s70local8, __s70local0);
              __s70local0.x = __s70local7 * __s70local2;
              __s70local0.y = __s70local6 * __s70local2;
              __s70local0.sectorX = __dep_exact_f855840627e6e145.int(__s70local7 + __s70local4.x);
              __s70local0.sectorY = __dep_exact_f855840627e6e145.int(__s70local6 + __s70local4.y);
              if (__s70local0.scaleX != __s70local9) {
                __s70local0.scaleX = __s70local9 + 0.001;
                __s70local0.scaleY = __s70local9 + 0.001;
              }
              this.nonInteractiveLayer.addChild(__s70local0);
            }
          }
        }
      }
      this.removeOffscreenBackgroundBitmaps(__s70local4);
      this.nonInteractiveLayer.x = __s70local3.x;
      this.nonInteractiveLayer.y = __s70local3.y;
      this.layoutManager.renderBGStage();
    }
  };
  CastleWorldmapRenderer.prototype.removeOffscreenBackgroundBitmaps = function (__s88param0) {
    if (this.viewportBackgroundSectorBitmaps != null) {
      for (var __s88local0 = 0, __s88local1 = Array.from(this.viewportBackgroundSectorBitmaps.keys()); __s88local0 < __s88local1.length; __s88local0++) {
        var __s88local2 = __s88local1[__s88local0];
        if (__s88local2 !== undefined) {
          var __s88local3 = __s88local2.split(":");
          if (parseInt(__s88local3[0]) >= __s88param0.width || parseInt(__s88local3[1]) >= __s88param0.height) {
            var __s88local4 = this.viewportBackgroundSectorBitmaps.get(__s88local2);
            if (!__s88param0.contains(__s88local4.sectorX, __s88local4.sectorY)) {
              __dep_export_CastleModel.CastleModel.worldmapData.bgTiles.freeBitmapDataMemory(__s88local4.sectorX, __s88local4.sectorY);
            }
            if (this.nonInteractiveLayer.contains(__s88local4)) {
              this.nonInteractiveLayer.removeChild(__s88local4);
            }
            this.viewportBackgroundSectorBitmaps.delete(__s88local2);
          }
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.renderDecoObjects = function () {
    var __s97local0;
    var __s97local1 = new Map();
    for (var __s97local2 = this.camera.getAreaViewportRectangle(), __s97local3 = -1; __s97local3 < __s97local2.height + 2; ++__s97local3) {
      for (var __s97local4 = -1; __s97local4 < __s97local2.width + 2; ++__s97local4) {
        var __s97local5 = __dep_exact_f855840627e6e145.int(__dep_export_SectorHelper.SectorHelper.getLoopedAreaPositionX(__s97local2.x + __s97local4));
        var __s97local6 = __dep_exact_f855840627e6e145.int(__s97local2.y + __s97local3);
        __s97local0 = null;
        if ((__s97local0 = __dep_export_CastleModel.CastleModel.worldmapData.bgTiles.drawDecoAreaForAreaByXY(__s97local5, __s97local6)) && !__s97local1.get(__s97local0)) {
          __s97local1.set(__s97local0, __s97local0);
        }
      }
    }
    if (__s97local1 != null) {
      for (var __s97local7 = 0, __s97local8 = Array.from(__s97local1.values()); __s97local7 < __s97local8.length; __s97local7++) {
        var __s97local9 = __s97local8[__s97local7];
        if (__s97local9 !== undefined) {
          __s97local9.unlock();
          this.invalidateMap();
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.renderMapObjects = function () {
    for (var __s108local0 = this.camera.getAreaViewportRectangle(), __s108local1 = new Map(), __s108local2 = 0, __s108local3 = -1; __s108local3 < __s108local0.height + 2; ++__s108local3) {
      for (var __s108local4 = -1; __s108local4 < __s108local0.width + 2; ++__s108local4) {
        var __s108local5 = __dep_exact_f855840627e6e145.int(__dep_export_SectorHelper.SectorHelper.getLoopedAreaPositionX(__s108local0.x + __s108local4));
        var __s108local6 = __dep_exact_f855840627e6e145.int(__s108local0.y + __s108local3);
        var __s108local7 = __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s108local5, __s108local6);
        var __s108local8 = CastleWorldmapRenderer.locationToInt(__s108local5, __s108local6);
        var __s108local9 = this.interactiveMapObjects.get(__s108local8);
        if (__s108local7 && __s108local7 instanceof __dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO && __s108local7.isVisibleOnMap) {
          __s108local1.set(__s108local8, true);
          if (__s108local9) {
            if (__s108local9.worldmapObjectVO != __s108local7) {
              this.removeMapobject(__s108local9);
              this.interactiveMapObjects.set(__s108local8, this.initializeNewMapobject(__s108local7, __s108local4, __s108local3, __s108local2));
              __s108local2++;
            } else {
              this.updateMapobject(__s108local9, __s108local4, __s108local3);
              __s108local2++;
            }
          } else {
            this.interactiveMapObjects.set(__s108local8, this.initializeNewMapobject(__s108local7, __s108local4, __s108local3, __s108local2));
            __s108local2++;
          }
        } else if (__s108local9) {
          this.removeMapobject(__s108local9);
          this.interactiveMapObjects.delete(__s108local8);
        }
      }
    }
    this.removeOffscreenMapobjects(__s108local1);
    this.layoutManager.renderStaticStage();
  };
  CastleWorldmapRenderer.pointToInt = function (__s120param0) {
    return __dep_exact_f855840627e6e145.int(__s120param0.x + __s120param0.y * 10000);
  };
  CastleWorldmapRenderer.locationToInt = function (__s122param0, __s122param1) {
    return __s122param0 + __s122param1 * 10000;
  };
  CastleWorldmapRenderer.prototype.removeOffscreenMapobjects = function (__s124param0) {
    if (this.interactiveMapObjects != null) {
      for (var __s124local0 = 0, __s124local1 = Array.from(this.interactiveMapObjects.keys()); __s124local0 < __s124local1.length; __s124local0++) {
        var __s124local2 = __s124local1[__s124local0];
        if (__s124local2 !== undefined && (0, !__s124param0.get(__s124local2))) {
          var __s124local3 = this.interactiveMapObjects.get(__s124local2);
          if (__s124local3 instanceof __dep_export_InteractiveMapobject.InteractiveMapobject) {
            this.removeMapobject(__s124local3);
            0;
          }
          this.interactiveMapObjects.delete(__s124local2);
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.initializeNewMapobject = function (__s131param0, __s131param1, __s131param2, __s131param3 = -1) {
    var __s131local0 = __s131param0.name + __s131param0.group;
    var __s131local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s131local0))();
    __s131local1.initialize(__s131param0, this);
    var __s131local2 = this.camera.getPixelOffset();
    __s131local1.visualX = __s131local2.x + __s131param1 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X * this.camera.viewPortZoom;
    __s131local1.visualY = __s131local2.y + __s131param2 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y * this.camera.viewPortZoom;
    __s131local1.scale = this.camera.viewPortZoom;
    __s131local1.addDispToLayer(this.mapObjectsLayer, __s131param3);
    __s131local1.disp.addEventListener(__dep_export_VisualMapObjectEvent.VisualMapObjectEvent.VE_UPDATED, this.bindFunction(this.onVeUpdated));
    __dep_export_renderScheduler.renderScheduler.addTask(this.updateMapObjectVe.bind(this, __s131local1));
    return __s131local1;
  };
  CastleWorldmapRenderer.prototype.updateMapObjectVe = function (__s133param0) {
    return !__s133param0 || !__s133param0.disp || !__s133param0.disp.stage || (this.drawCastleName(__s133param0, __s133param0.visualX, __s133param0.visualY), false);
  };
  CastleWorldmapRenderer.prototype.updateMapobject = function (__s135param0, __s135param1, __s135param2) {
    var __s135local0 = this.camera.getPixelOffset();
    __s135param0.visualX = __s135local0.x + __s135param1 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X * this.camera.viewPortZoom;
    __s135param0.visualY = __s135local0.y + __s135param2 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y * this.camera.viewPortZoom;
    __s135param0.scale = this.camera.viewPortZoom;
    this.updateCastleName(__s135param0, __s135local0.x + __s135param1 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X * this.camera.viewPortZoom, __s135local0.y + __s135param2 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y * this.camera.viewPortZoom);
  };
  CastleWorldmapRenderer.prototype.clearMapobjects = function (__s137param0 = true, __s137param1 = false) {
    if (this.interactiveMapObjects != null) {
      for (var __s137local0 = 0, __s137local1 = Array.from(this.interactiveMapObjects.values()); __s137local0 < __s137local1.length; __s137local0++) {
        var __s137local2 = __s137local1[__s137local0];
        if (__s137local2 !== undefined) {
          this.removeMapobject(__s137local2);
        }
      }
    }
    this.interactiveMapObjects = new Map();
    if (__s137param1) {
      this.layoutManager.updateGameStage();
    }
    if (__s137param0) {
      this.layoutManager.renderStaticStage();
    }
  };
  CastleWorldmapRenderer.prototype.removeMapobject = function (__s145param0) {
    if (__s145param0.infoComponent) {
      var __s145local0 = __s145param0.getNameMC();
      if (__s145local0 && this.mapLabelsLayer.contains(__s145local0)) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s145local0);
        this.mapLabelsLayer.removeChild(__s145local0);
      }
    }
    __s145param0.disp.removeEventListener(__dep_export_VisualMapObjectEvent.VisualMapObjectEvent.VE_UPDATED, this.bindFunction(this.onVeUpdated));
    if (__dep_export_PoolManager.isPoolable(__s145param0)) {
      __dep_export_PoolManager.mapObjectsPool.recycle(__s145param0);
    } else {
      __s145param0.remove();
    }
    __s145param0.die(-1);
    __s145param0.removeDispFromWorld();
    __s145param0 = null;
  };
  CastleWorldmapRenderer.prototype.clearBackground = function () {
    if (this.viewportBackgroundSectorBitmaps != null && !__dep_exact_7e3e67aee786bc23.isNullOrUndefined(__dep_export_CastleModel.CastleModel.worldmapData)) {
      var __s151local0 = __dep_export_CastleModel.CastleModel.worldmapData.bgTiles;
      for (var __s151local1 = 0, __s151local2 = Array.from(this.viewportBackgroundSectorBitmaps.keys()); __s151local1 < __s151local2.length; __s151local1++) {
        var __s151local3 = __s151local2[__s151local1];
        if (__s151local3 !== undefined) {
          var __s151local4 = this.viewportBackgroundSectorBitmaps.get(__s151local3);
          __s151local0.freeBitmapDataMemory(__s151local4.sectorX, __s151local4.sectorY);
          if (this.nonInteractiveLayer.contains(__s151local4)) {
            this.nonInteractiveLayer.removeChild(__s151local4);
          }
          this.viewportBackgroundSectorBitmaps.delete(__s151local3);
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.kingdomChanged = function () {
    this.clearMapobjects();
    this.clearBackground();
    if (__dep_export_CastleModel.CastleModel.worldmapData) {
      __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.checkResetOnKingdomChange();
    }
    this.invalidateMap();
    this.clearMovements();
  };
  CastleWorldmapRenderer.prototype.getVEforAreaXY = function (__s161param0, __s161param1, __s161param2 = false) {
    if (__s161param2) {
      this.viewPortInvalidated = true;
      this.renderLayer();
    }
    return this.interactiveMapObjects.get(CastleWorldmapRenderer.pointToInt(new __s0local3(__s161param0, __s161param1)));
  };
  CastleWorldmapRenderer.prototype.drawCastleName = function (__s164param0, __s164param1, __s164param2) {
    var __s164local0 = __s164param0.getNameMC();
    if (__s164local0) {
      if (__s164param0.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL) {
        __s164param2 += 10;
      }
      __s164local0.x = __s164param1;
      __s164local0.y = __s164param2;
      __s164local0.scaleX = __s164local0.scaleY = this.camera.viewPortZoom;
      this.mapLabelsLayer.addChild(__s164local0);
      this.cacheScaledNameMC(__s164local0);
    }
  };
  CastleWorldmapRenderer.prototype.cacheScaledNameMC = function (__s168param0) {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s168param0);
    var __s168local0 = __s168param0.getBounds();
    if (__s168local0 && __s168local0.width && __s168local0.height) {
      __s168param0.cache(Math.floor(__s168local0.x), Math.floor(__s168local0.y), Math.ceil(__s168local0.width), Math.ceil(__s168local0.height), 2);
    }
  };
  CastleWorldmapRenderer.prototype.updateCastleName = function (__s171param0, __s171param1, __s171param2) {
    if (__s171param0.infoComponent) {
      var __s171local0 = __s171param0.getNameMC();
      if (__s171local0) {
        if (__s171param0.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL) {
          __s171param2 += 10;
        }
        __s171local0.x = __s171param1;
        __s171local0.y = __s171param2;
        if (this.camera.viewPortZoom != __s171local0.scaleX) {
          __s171local0.scaleX = __s171local0.scaleY = this.camera.viewPortZoom;
        }
        if (__s171param0.infoComponent.updateNamePlateBgColor()) {
          this.cacheScaledNameMC(__s171local0);
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.onVeUpdated = function (__s178param0 = null) {
    var __s178local0 = __s178param0.params.shift();
    if (__s178local0 instanceof __dep_export_InteractiveMapobject.InteractiveMapobject && __s178local0.worldmapObjectVO.isVisibleOnMap) {
      this.drawCastleName(__s178local0, __s178local0.visualX, __s178local0.visualY);
    }
  };
  CastleWorldmapRenderer.prototype.drawHeatmap = function () {
    var __s181local0 = __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.activityHeatMap;
    var __s181local1 = 0;
    var __s181local2 = 0;
    var __s181local3 = this.heatMapSprite.graphics;
    __s181local3.clear();
    if (__s181local0 != null) {
      for (var __s181local4 = 0, __s181local5 = __s181local0; __s181local4 < __s181local5.length; __s181local4++) {
        var __s181local6 = __s181local5[__s181local4];
        if (__s181local6 !== undefined) {
          __s181local1 = 0;
          if (__s181local6 != null) {
            for (var __s181local7 = 0, __s181local8 = __s181local6; __s181local7 < __s181local8.length; __s181local7++) {
              var __s181local9 = __s181local8[__s181local7];
              if (__s181local9 !== undefined) {
                if (__s181local9 < 0) {
                  __s181local3.beginFill(__dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK, 0.7);
                } else {
                  __s181local3.beginFill(__dep_export_ClientConstColor.ClientConstColor.rgbToUint(0, __s181local9 * 255, 0), 0.7);
                }
                __s181local3.drawRect(__s181local1 * 4, __s181local2 * 4, 4, 4);
                __s181local3.endFill();
                __s181local1++;
              }
            }
          }
          __s181local2++;
        }
      }
    }
    this.heatMapSprite.x = this.camera.viewPortWidth / 2 - this.heatMapSprite.width / 2;
    this.heatMapSprite.y = this.camera.viewPortHeight - 75 - this.heatMapSprite.height;
  };
  CastleWorldmapRenderer.prototype.addMovement = function (__s193param0) {
    var __s193local0;
    if (!__dep_exact_81dacdf05bd32292_5.instanceOfClass(__s193param0, "TreasureHuntMovementVO")) {
      (__s193local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s193param0.name + __s193param0.group))()).initialize(__s193param0, this);
      __s193local0.addDispToLayer(this.mapMovementsLayer);
      this.movements.push(__s193local0);
    }
  };
  CastleWorldmapRenderer.prototype.removeMovement = function (__s196param0) {
    var __s196local0;
    if (this.movements != null) {
      for (var __s196local1 = 0, __s196local2 = this.movements; __s196local1 < __s196local2.length; __s196local1++) {
        var __s196local3 = __s196local2[__s196local1];
        if (__s196local3 !== undefined && __s196local3.objectID == __s196param0) {
          __s196local0 = __s196local3;
          break;
        }
      }
    }
    if (__s196local0) {
      this.movements.splice(this.movements.indexOf(__s196local0), 1);
      __s196local0.die(-1);
      __s196local0.remove();
      __s196local0.removeDispFromWorld();
      __s196local0 = null;
    }
  };
  CastleWorldmapRenderer.prototype.updateMovements = function () {
    var __s203local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    if (this.movements != null) {
      for (var __s203local1 = 0, __s203local2 = this.movements; __s203local1 < __s203local2.length; __s203local1++) {
        var __s203local3 = __s203local2[__s203local1];
        if (__s203local3 !== undefined) {
          __s203local3.update(__s203local0);
          __s203local3.updateMovementPositionByViewport(this.camera.viewPort, this.camera.viewPortZoom);
          __s203local3.disp.scaleX = __s203local3.disp.scaleY = this.camera.viewPortZoom;
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.clearMovements = function () {
    if (this.movements && this.movements != null) {
      for (var __s209local0 = 0, __s209local1 = this.movements; __s209local0 < __s209local1.length; __s209local0++) {
        var __s209local2 = __s209local1[__s209local0];
        if (__s209local2 !== undefined) {
          __s209local2.die(-1);
          __s209local2.remove();
          __s209local2.removeDispFromWorld();
          __s209local2 = null;
        }
      }
    }
    this.movements = [];
  };
  CastleWorldmapRenderer.prototype.updateMovementsFromModel = function () {
    this.clearMovements();
    for (var __s215local0 = 0, __s215local1 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s215local0 < __s215local1.length; __s215local0++) {
      var __s215local2 = __s215local1[__s215local0];
      if (__s215local2 !== undefined && __s215local2.kingdomID === __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
        this.addMovement(__s215local2);
      }
    }
  };
  CastleWorldmapRenderer.prototype.invalideteMovements = function () {
    this._movementsFirstRealRendered = false;
  };
  CastleWorldmapRenderer.prototype.showLines = function (__s222param0, __s222param1, __s222param2, __s222param3 = true, __s222param4 = true) {
    if (__s222param3) {
      this.connectionLines.reset();
    }
    if (__s222param4) {
      var __s222local0 = this.camera.getPixelPosForArea(__s222param0, true, false);
      if (__s222local0) {
        this.connectionLines.x = __s222local0.x;
        this.connectionLines.y = __s222local0.y;
        this.connectionLines.originPos = __s222param0;
      } else {
        console.warn("The connection line point is undefined");
      }
    }
    this.connectionLines.scaleX = this.connectionLines.scaleY = this.camera.viewPortZoom;
    this.connectionLines.showLines(__s222param0, __s222param1, __s222param2, __s222param3);
  };
  CastleWorldmapRenderer.prototype.hideLines = function () {
    this.connectionLines.reset();
  };
  CastleWorldmapRenderer.prototype.updateConnections = function () {
    if (this.connectionLines.visible) {
      if (this.connectionLines.sourceAreaPos) {
        var __s230local0 = this.camera.getPixelPosForArea(this.connectionLines.originPos, true);
        this.connectionLines.x = __s230local0.x;
        this.connectionLines.y = __s230local0.y;
        this.connectionLines.scaleX = this.connectionLines.scaleY = this.camera.viewPortZoom;
      } else {
        this.hideLines();
      }
    }
  };
  CastleWorldmapRenderer.prototype.getNextDungeonMapobject = function (__s235param0, __s235param1 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE), __s235param2 = 3, __s235param3 = true) {
    for (var __s235local0 = __s235param2, __s235local1 = __s235local0, __s235local2 = null, __s235local3 = -__s235local0; __s235local3 <= __s235local0; __s235local3++) {
      for (var __s235local4 = -__s235local0; __s235local4 <= __s235local0; __s235local4++) {
        var __s235local5 = __s235param0.absAreaPosX + __s235local4;
        var __s235local6 = __s235param0.absAreaPosY + __s235local3;
        var __s235local7 = __dep_exact_81dacdf05bd32292_2.castAs(this.getVEforAreaXY(__s235local5, __s235local6), "InteractiveMapobject");
        if (__s235local7 && __dep_exact_81dacdf05bd32292_5.instanceOfClass(__s235local7, "DungeonMapobject") && __s235local7.dungeonMapObjectVO.dungeonLevel <= __s235param1 && (__s235param3 || !__s235local7.dungeonMapObjectVO.isCoolingDown)) {
          var __s235local8 = __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(__s235local7.worldmapObjectVO, __s235param0);
          if (__s235local8 < __s235local1) {
            __s235local1 = __s235local8;
            __s235local2 = __s235local7;
          }
        }
      }
    }
    return __s235local2;
  };
  CastleWorldmapRenderer.prototype.initNaviArrow = function () {
    if (!this.layoutManager.nativeCursor.additionalCursorGfx.contains(this.naviArrow)) {
      this.layoutManager.nativeCursor.additionalCursorGfx.addChild(this.naviArrow);
      this.naviArrow.mc_circle.visible = true;
      this.itxt_distance = this.textFieldManager.registerTextField(this.naviArrow.mc_circle.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO("---"));
      this.itxt_distance.width = 42.05;
      this.setNaviArrowRotation(this.camera.relativeMousePos);
    }
  };
  CastleWorldmapRenderer.prototype.setNaviArrowRotation = function (__s246param0, __s246param1 = true) {
    if (!this.isNaviVisible) {
      this.naviArrow.visible = false;
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      return;
    }
    var __s246local0 = __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel;
    if (!__s246local0) {
      this.naviArrow.visible = false;
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      return;
    }
    this.naviArrow.visible = true;
    if (__s246local0.kingdomID != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
      __s246local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    }
    if (!__s246local0) {
      this.naviArrow.mc_circle.visible = false;
      this.naviArrow.mc_arrow.visible = false;
      return;
    }
    var __s246local1 = __s246local0.absAreaPos;
    var __s246local2 = __dep_export_MapHelper.MapHelper.getRealPos(__dep_export_MapHelper.MapHelper.pixelPosToAreaGridPos(__s246param0));
    var __s246local3 = this.calculateDistance(__s246local1, __s246local2);
    this.naviArrow.mc_arrow.rotation = __dep_export_MapHelper.MapHelper.getRotationToShortestDistance(__s246local2, __s246local1);
    this._domNaviArrowCanvas.style.transform = "rotate(" + this.naviArrow.mc_arrow.rotation + "deg)";
    var __s246local4 = __dep_exact_81dacdf05bd32292_2.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && __dep_exact_81dacdf05bd32292_5.instanceOfClass(__s246local4, "FactionEventVO") && __s246local4.isSpectator) {
      __s246local3 = 0;
    }
    if (this._cacheDistance !== __s246local3 && __s246local3 && __s246param1) {
      this._domNaviTxt.value = __dep_exact_92d05af59ee2ff30.Localize.number(__s246local3, true, 1);
      this._cacheDistance = __s246local3;
    }
    var __s246local5 = __s246local3 < 1 ? 0 : __s246local3;
    var __s246local6 = Math.min(__s246local5 / 4, 1).toFixed(1);
    if (this._domNaviArrowCanvas.style.opacity !== __s246local6) {
      this._domNaviArrowCanvas.style.opacity = __s246local6;
      this._domNaviCircleCanvas.style.opacity = __s246local6;
      this._domNaviTxt.style.opacity = __s246local6;
    }
  };
  CastleWorldmapRenderer.prototype.calculateDistance = function (__s255param0, __s255param1) {
    var __s255local0 = __dep_export_MapHelper.MapHelper.getShortestDistance(__s255param0, __s255param1);
    return __s255local0 = __s255local0 < 100 ? __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s255local0, 1) : __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s255local0, 0);
  };
  Object.defineProperty(CastleWorldmapRenderer.prototype, "amountMovementsToRender", {
    get: function () {
      return this.movements.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "bgLayer", {
    get: function () {
      return this._bgLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "staticLayer", {
    get: function () {
      return this._staticLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapRenderer.prototype.isBitmapDataValid = function (__s267param0) {
    try {
      return __s267param0.width > 0;
    } catch (__s270local0) {
      return false;
    }
  };
  CastleWorldmapRenderer.PAUSE = 0;
  CastleWorldmapRenderer.RUNNING = 1;
  CastleWorldmapRenderer.SHOW_HEATMAP = false;
  return CastleWorldmapRenderer;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleWorldmapRenderer = __s0local4;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleWorldmapCamera = require("gge-module:export_CastleWorldmapCamera");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_exact_81dacdf05bd32292_5 = require("gge-module:exact_81dacdf05bd32292");
