Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_SectorHelper = require("gge-module:export_SectorHelper");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.TimerEvent;
var __s0local3 = createjs.Point;
var __s0local4 = createjs.Rectangle;
var __s0local5 = function (__s1param0) {
  function CastleWorldmapCamera(__s3param0, __s3param1, __s3param2 = 0, __s3param3 = 0, __s3param4 = 1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.isEnabled = false;
    __s3local0.wrapAroundX = true;
    __s3local0.wrapAroundY = false;
    __s3local0._viewPort = new __s0local3();
    __s3local0.viewPortWidth = 0;
    __s3local0.viewPortHeight = 0;
    __s3local0.viewPortZoom = 0;
    __s3local0.isWorldDragging = false;
    __s3local0.speedUpDown = 0;
    __s3local0.speedLeftRight = 0;
    __s3local0.isMouseDown = false;
    __s3local0.mouseOffset = new __s0local3();
    __s3local0.invalidateTimer = new __dep_exact_81dacdf05bd32292_1.Timer(__dep_export_CastleWorldmapData.CastleWorldmapData.AREA_INVALIDATION_TIME);
    __s3local0.lastTarget = new __s0local3();
    __s3local0._isLocked = false;
    __s3local0._wasMovedByKeys = false;
    __s3local0._pixelOffset = new __s0local3();
    __s3local0._relativeMousePos = new __s0local3();
    __s3local0.layer = __s3param0;
    __s3local0.bgLayer = __s3param1;
    __s3local0._viewPort.x = __s3param2;
    __s3local0._viewPort.y = __s3param3;
    __s3local0.viewPortZoom = __s3param4;
    __s3local0.viewPortWidth = __s3local0.layer.stage.stageWidth;
    __s3local0.viewPortHeight = __s3local0.layer.stage.stageHeight;
    __s3local0.update = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.lastMouseStage = new __s0local3(0, 0);
    __s3local0.touchController = new __dep_export_CastleTouchZoomController.CastleTouchZoomController(__s3local0.adjustZoom.bind(__s3local0, __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_STEP), __s3local0.adjustZoom.bind(__s3local0, -__dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_STEP));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapCamera, __s1param0);
  CastleWorldmapCamera.prototype.activate = function () {
    this.layoutManager.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, this.bindFunction(this.onLockCamera));
    this.layer.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layer.stage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layer.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layer.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.bgLayer.stage.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.bgLayer.stage.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.bgLayer.stage.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.bgLayer.stage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layoutManager.staticStage.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layoutManager.staticStage.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layoutManager.staticStage.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.layoutManager.staticStage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.inputKey = __dep_exact_9e901e8e2483a22f.Input.instance;
    this.layer.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.handleKeyInput));
    window.addEventListener(__s0local0.RESIZE, this.bindFunction(this.onResize), false, 1);
    this.isEnabled = true;
    this.isMouseDown = false;
    this.isWorldDragging = false;
    this.invalidateTimer.addEventListener(__s0local2.TIMER, this.bindFunction(this.onCheckInvalidate));
    this.invalidateTimer.start();
    window.focus();
  };
  CastleWorldmapCamera.prototype.deactivate = function () {
    this.layoutManager.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, this.bindFunction(this.onLockCamera));
    this.layer.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layer.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layer.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layer.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.layer.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.handleKeyInput));
    window.removeEventListener(__s0local0.RESIZE, this.bindFunction(this.onResize));
    this.bgLayer.stage.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.bgLayer.stage.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.bgLayer.stage.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.bgLayer.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layoutManager.staticStage.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layoutManager.staticStage.stage.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layoutManager.staticStage.stage.removeEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.layoutManager.staticStage.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.inputKey = null;
    this.isEnabled = false;
    this.isMouseDown = false;
    this.isWorldDragging = false;
    this.invalidateTimer.removeEventListener(__s0local2.TIMER, this.bindFunction(this.onCheckInvalidate));
    this.invalidateTimer.stop();
  };
  CastleWorldmapCamera.prototype.onCheckInvalidate = function (__s9param0) {
    this.validateAndUpdate();
  };
  CastleWorldmapCamera.prototype.onResize = function (__s11param0) {
    var __s11local0 = this.viewPortWidth;
    var __s11local1 = this.viewPortHeight;
    this.viewPortWidth = this.layer.width = this.layer.stage.stageWidth;
    this.viewPortHeight = this.layer.height = this.layer.stage.stageHeight;
    this.layer.scaleX = this.layer.scaleY = 1;
    __s11local0 -= this.viewPortWidth;
    __s11local1 -= this.viewPortHeight;
    var __s11local2 = new __s0local3((this._viewPort.x + (this.viewPortWidth + __s11local0) / this.viewPortZoom / 2) / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X, (this._viewPort.y + (this.viewPortHeight + __s11local1) / this.viewPortZoom / 2) / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y);
    this.layoutManager.worldmapScreen.camera.centerArea(__s11local2);
    this.applyPositionToBackgroundLayer();
  };
  CastleWorldmapCamera.prototype.applyPositionToBackgroundLayer = function () {
    this.bgLayer.x = this.layer.x;
    this.bgLayer.y = this.layer.y;
    this.bgLayer.scaleX = this.layer.scaleX;
    this.bgLayer.scaleY = this.layer.scaleY;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
  };
  CastleWorldmapCamera.prototype.onLockCamera = function (__s15param0) {
    this._isLocked = __s15param0.params[0];
  };
  CastleWorldmapCamera.prototype.onMouseWheel = function (__s17param0) {
    if (!this._isLocked) {
      var __s17local0 = __s17param0.delta;
      this.adjustZoom(__s17local0 < 0 ? __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_STEP : -__dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_STEP);
    }
  };
  CastleWorldmapCamera.prototype.onMouseUp = function (__s20param0) {
    this.lastMouseStage.x = __s20param0.stageX;
    this.lastMouseStage.y = __s20param0.stageY;
    if (this.isMouseDown && !this._isLocked) {
      this.isMouseDown = false;
      if (__dep_exact_81dacdf05bd32292_2.currentBrowserInfo.isTouchEvent(__s20param0) && __s20param0.target.name === "nonInteractiveLayer") {
        this.objectUnderMouse = null;
        this.layoutManager.worldmapScreen.renderer.renderNavForMobile();
      }
      if (!this.objectUnderMouse && !this.isWorldDragging) {
        this.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.WORLDMAP_CLICK));
      }
      if (this.isWorldDragging) {
        this.layoutManager.worldmapScreen.renderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.WORLDMAP_MOUSEUP));
        window.restrictedInteractiveArea = null;
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.tickEnabled = true;
        __dep_export_renderScheduler.renderScheduler.RENDER_SCHEDULER_ACTIVE = false;
      }
      this.isWorldDragging = false;
      this.updateDelta(this.mouseOffset.x - __s20param0.stageX, this.mouseOffset.y - __s20param0.stageY);
      this.viewPortOffset = null;
      this.invalidateTimer.start();
    }
  };
  CastleWorldmapCamera.prototype.onMouseMove = function (__s26param0) {
    var __s26local0 = __s26param0.stageX;
    var __s26local1 = __s26param0.stageY;
    this.lastMouseStage.x = __s26local0;
    this.lastMouseStage.y = __s26local1;
    var __s26local2 = __dep_exact_81dacdf05bd32292_2.currentBrowserInfo.getTouchEvent(__s26param0);
    this.layoutManager.worldmapScreen.renderer.isNaviUsingMouse(!__s26local2);
    if (this.isMouseDown && !this._isLocked) {
      if (__s26local2 && __s26local2.touches.length > 1) {
        this.touchController.handleTouchZoom(__s26param0);
      } else {
        this.updateDelta(this.mouseOffset.x - __s26local0, this.mouseOffset.y - __s26local1);
        if ((this.mouseOffset.x !== __s26local0 || this.mouseOffset.y !== __s26local1) && !this.isWorldDragging) {
          this.isWorldDragging = true;
          __dep_export_renderScheduler.renderScheduler.RENDER_SCHEDULER_ACTIVE = true;
          window.restrictedInteractiveArea = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage.children[0];
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
          var __s26local3 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideWorldmapIngameUIComponents();
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.tickEnabled = false;
          if (__s26local3) {
            __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage.update();
          }
        }
      }
    }
  };
  CastleWorldmapCamera.prototype.onMouseDown = function (__s33param0) {
    this.lastMouseStage.x = __s33param0.stageX;
    this.lastMouseStage.y = __s33param0.stageY;
    if (!this.isMouseDown && !this._isLocked) {
      this.isMouseDown = true;
      this.mouseOffset.x = __s33param0.stageX;
      this.mouseOffset.y = __s33param0.stageY;
      this.viewPortOffset = this._viewPort.clone();
      this.invalidateTimer.stop();
      if (__dep_exact_81dacdf05bd32292_2.currentBrowserInfo.isTouchEvent(__s33param0)) {
        this.layoutManager.worldmapScreen.renderer.renderNavForMobile(true);
      }
    }
  };
  CastleWorldmapCamera.prototype.updateDelta = function (__s37param0, __s37param1) {
    this._viewPort.x = this.viewPortOffset.x + __s37param0 / this.viewPortZoom;
    this._viewPort.y = this.viewPortOffset.y + __s37param1 / this.viewPortZoom;
    this.validateAndUpdate();
  };
  CastleWorldmapCamera.prototype.handleKeyInput = function (__s39param0) {
    if (!this._isLocked && !(this.layoutManager.numVisibleDialogs > 0) && !!this.inputKey && (!document.activeElement || document.activeElement.className != "ggsTextField")) {
      if (this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.DOWN) || this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.S)) {
        this.speedUpDown = __dep_exact_f855840627e6e145.int(Math.max(this.speedUpDown - __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, -__dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP_MAX));
      } else if (this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.UP) || this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.W)) {
        this.speedUpDown = __dep_exact_f855840627e6e145.int(Math.min(this.speedUpDown + __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP_MAX));
      } else {
        this.speedUpDown = __dep_exact_f855840627e6e145.int(this.speedUpDown > 0 ? Math.max(this.speedUpDown - __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, 0) : Math.min(this.speedUpDown + __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, 0));
      }
      if (this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.RIGHT) || this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.D)) {
        this.speedLeftRight = __dep_exact_f855840627e6e145.int(Math.max(this.speedLeftRight - __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, -__dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP_MAX));
      } else if (this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.LEFT) || this.inputKey.isKeyDown(__dep_exact_81dacdf05bd32292.Keyboard.A)) {
        this.speedLeftRight = __dep_exact_f855840627e6e145.int(Math.min(this.speedLeftRight + __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP_MAX));
      } else {
        this.speedLeftRight = __dep_exact_f855840627e6e145.int(this.speedLeftRight > 0 ? Math.max(this.speedLeftRight - __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, 0) : Math.min(this.speedLeftRight + __dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP, 0));
      }
      if (this.speedUpDown != 0 || this.speedLeftRight != 0) {
        this._viewPort.y -= Math.min(__dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP_MAX, this.speedUpDown);
        this._viewPort.x -= Math.min(__dep_export_CastleWorldmapConst.CastleWorldmapConst.KEY_STEP_MAX, this.speedLeftRight);
        window.restrictedInteractiveArea = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage.children[0];
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
        this._wasMovedByKeys = true;
        this.validateAndUpdate();
      } else if (this._wasMovedByKeys) {
        this._wasMovedByKeys = false;
        window.restrictedInteractiveArea = null;
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
      }
    }
  };
  CastleWorldmapCamera.prototype.getPixelOffset = function (__s50param0 = __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X, __s50param1 = __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y) {
    this._pixelOffset.x = -this._viewPort.x % __s50param0;
    this._pixelOffset.y = -this._viewPort.y % __s50param1;
    this._pixelOffset.x = this._pixelOffset.x > 0 ? this._pixelOffset.x - __s50param0 : this._pixelOffset.x;
    this._pixelOffset.y = this._pixelOffset.y > 0 ? this._pixelOffset.y - __s50param1 : this._pixelOffset.y;
    this._pixelOffset.x = this._pixelOffset.x * this.viewPortZoom;
    this._pixelOffset.y = this._pixelOffset.y * this.viewPortZoom;
    return this._pixelOffset;
  };
  CastleWorldmapCamera.prototype.getAreaViewportRectangle = function () {
    for (var __s52local0 = Math.ceil(this.viewPortWidth / this.viewPortZoom / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X), __s52local1 = Math.ceil(this.viewPortHeight / this.viewPortZoom / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y); this.getPixelOffset().x + __s52local0 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X * this.viewPortZoom < this.viewPortWidth;) {
      __s52local0++;
    }
    while (this.getPixelOffset().y + __s52local1 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y * this.viewPortZoom < this.viewPortHeight) {
      __s52local1++;
    }
    var __s52local2 = Math.floor(this._viewPort.x / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X);
    var __s52local3 = Math.floor(this._viewPort.y / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y);
    return new __s0local4(__s52local2, __s52local3, __s52local0, __s52local1);
  };
  CastleWorldmapCamera.prototype.getSectorViewportRectangle = function () {
    for (var __s58local0 = this.getPixelOffset(__dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X, __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y), __s58local1 = Math.ceil(this.viewPortWidth / this.viewPortZoom / __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X), __s58local2 = Math.ceil(this.viewPortHeight / this.viewPortZoom / __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y); __s58local0.x + __s58local1 * __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X * this.viewPortZoom < this.viewPortWidth;) {
      __s58local1++;
    }
    while (__s58local0.y + __s58local2 * __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y * this.viewPortZoom < this.viewPortHeight) {
      __s58local2++;
    }
    var __s58local3 = Math.floor(this._viewPort.x / __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X);
    var __s58local4 = Math.floor(this._viewPort.y / __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y);
    return new __s0local4(__s58local3, __s58local4, __s58local1, __s58local2);
  };
  Object.defineProperty(CastleWorldmapCamera.prototype, "relativeMousePos", {
    get: function () {
      this._relativeMousePos.x = this._viewPort.x + this.lastMouseStage.x / this.viewPortZoom;
      this._relativeMousePos.y = this._viewPort.y + this.lastMouseStage.y / this.viewPortZoom;
      return this._relativeMousePos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCamera.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapCamera.prototype.centerArea = function (__s68param0) {
    var __s68local0 = __dep_export_SectorHelper.SectorHelper.getLoopedAreaPosition(__s68param0);
    var __s68local1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X * __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X);
    this.lastTarget = __s68local0;
    var __s68local2 = __dep_exact_f855840627e6e145.int(__s68local0.x * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X / 2 - this.viewPortWidth / this.viewPortZoom / 2);
    var __s68local3 = __dep_exact_f855840627e6e145.int(__s68local0.y * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y / 2 - this.viewPortHeight / this.viewPortZoom / 2);
    var __s68local4 = new __s0local3(__s68local2, __s68local3);
    this.layoutManager.hideAllIngameUIComponents();
    if (__s68local4.x < 0) {
      __s68local4.x += __s68local1;
    }
    this._viewPort.x = __s68local4.x;
    this._viewPort.y = __s68local4.y;
    this.validateAndUpdate();
  };
  Object.defineProperty(CastleWorldmapCamera.prototype, "viewPortCenter", {
    get: function () {
      return __dep_export_SectorHelper.SectorHelper.getLoopedAreaPosition(new __s0local3(Math.floor((this._viewPort.x + this.viewPortWidth / this.viewPortZoom / 2) / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X), Math.floor((this._viewPort.y + this.viewPortHeight / this.viewPortZoom / 2) / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y)));
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapCamera.prototype.getPixelPosForArea = function (__s73param0, __s73param1 = true, __s73param2 = false) {
    if (!__s73param0) {
      return null;
    }
    var __s73local0 = new __s0local3();
    var __s73local1 = __dep_export_SectorHelper.SectorHelper.getLoopedAreaPosition(__s73param0);
    __s73local1.x *= __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X;
    __s73local1.y *= __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y;
    __s73local0.x = -this._viewPort.x + __s73local1.x + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X * 0.5;
    __s73local0.y = -this._viewPort.y + __s73local1.y + __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y * 0.5;
    if (__s73param1) {
      __s73local0.x = __dep_export_SectorHelper.SectorHelper.getScreenLoopedXPixelPosition(__s73local0.x);
    }
    if (__s73param2) {
      __s73local0.y = __dep_export_SectorHelper.SectorHelper.getLoopedPixelPosition(__s73local0).y;
    }
    __s73local0.x *= this.viewPortZoom;
    __s73local0.y *= this.viewPortZoom;
    return __s73local0;
  };
  CastleWorldmapCamera.prototype.validateAndUpdate = function () {
    if (!this.wrapAroundY) {
      if (this._viewPort.y < -__dep_export_CastleWorldmapConst.CastleWorldmapConst.VIEWPORT_MARGIN) {
        this._viewPort.y = -__dep_export_CastleWorldmapConst.CastleWorldmapConst.VIEWPORT_MARGIN;
      }
      if (this._viewPort.y + this.viewPortHeight / this.viewPortZoom > __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y + __dep_export_CastleWorldmapConst.CastleWorldmapConst.VIEWPORT_MARGIN) {
        this._viewPort.y = __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y - this.viewPortHeight / this.viewPortZoom + __dep_export_CastleWorldmapConst.CastleWorldmapConst.VIEWPORT_MARGIN;
      }
    }
    if (!this.wrapAroundX) {
      if (this._viewPort.x < 0) {
        this._viewPort.x = 0;
      }
      if (this._viewPort.x + this.viewPortWidth / this.viewPortZoom > __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X) {
        this._viewPort.x = __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X - this.viewPortWidth / this.viewPortZoom;
      }
    }
    if (this._viewPort.x > __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X) {
      this._viewPort.x -= __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X;
    }
    if (this._viewPort.x < 0) {
      this._viewPort.x += __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_X;
    }
    if (this._viewPort.y > __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y) {
      this._viewPort.y -= __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y;
    }
    if (this._viewPort.y < -__dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y) {
      this._viewPort.y += __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPPIXELSIZE_Y;
    }
    this.applyPositionToBackgroundLayer();
    this.update.dispatch();
  };
  CastleWorldmapCamera.prototype.stepZoomIn = function () {
    if (!this._isLocked) {
      this.adjustZoom(__dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_STEP);
    }
  };
  CastleWorldmapCamera.prototype.stepZoomOut = function () {
    if (!this._isLocked) {
      this.adjustZoom(-__dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_STEP);
    }
  };
  CastleWorldmapCamera.prototype.adjustZoom = function (__s96param0) {
    var __s96local0 = this.adjustAndRestrictZoom(__s96param0);
    if (__s96local0 != this.viewPortZoom) {
      this.adjustViewPort(__s96local0);
      this.validateAndUpdate();
    }
  };
  CastleWorldmapCamera.prototype.adjustViewPort = function (__s99param0) {
    this._viewPort.x -= (this.viewPortWidth / this.viewPortZoom - this.viewPortWidth / __s99param0) / 2;
    this._viewPort.y -= (this.viewPortHeight / this.viewPortZoom - this.viewPortHeight / __s99param0) / 2;
  };
  CastleWorldmapCamera.prototype.adjustAndRestrictZoom = function (__s101param0) {
    var __s101local0 = this.viewPortZoom;
    this.viewPortZoom += __s101param0;
    if (this.viewPortZoom < __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MIN) {
      this.viewPortZoom = __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MIN;
    } else if (this.viewPortZoom > __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX) {
      this.viewPortZoom = __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
    }
    return __s101local0;
  };
  Object.defineProperty(CastleWorldmapCamera.prototype, "viewPort", {
    get: function () {
      return this._viewPort;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCamera.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapCamera.__initialize_static_members = function () {
    CastleWorldmapCamera.zoom_min = 0.8;
    if (__dep_exact_81dacdf05bd32292_2.currentBrowserInfo.isEdge || __dep_exact_81dacdf05bd32292_2.currentBrowserInfo.isIE) {
      CastleWorldmapCamera.zoom_min = 1;
    }
    CastleWorldmapCamera.ZOOM_MAX = 1.5;
    CastleWorldmapCamera.ZOOM_STEP = 0.05;
    CastleWorldmapCamera.VIEWPORT_MARGIN = 100;
    CastleWorldmapCamera.KEY_STEP = 3;
    CastleWorldmapCamera.KEY_STEP_MAX = 50;
  };
  return CastleWorldmapCamera;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleWorldmapCamera = __s0local5;
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleWorldmapData = require("gge-module:export_CastleWorldmapData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_CastleTouchZoomController = require("gge-module:export_CastleTouchZoomController");
__s0local5.__initialize_static_members();
