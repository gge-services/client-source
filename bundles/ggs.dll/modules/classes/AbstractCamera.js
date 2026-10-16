Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_CameraTargetPoint = require("gge-module:class_CameraTargetPoint");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = createjs.Rectangle;
var __s0local3 = function () {
  function AbstractCamera(__s3param0) {
    this.MIN_MAP_ZOOM = 0.7;
    this.MAX_MAP_ZOOM = 1.5;
    this.DEFAULT_START_ZOOM = 1;
    this.GFX_ZOOM_FACTOR = 1;
    this._dpiScaleFactor = 1;
    this.ZOOM_SPEED = 1;
    this.PAN_SLOPE = 50;
    this.isZooming = false;
    this.lastUpdate = -1;
    this._currentZoom = 1;
    this.leftBorder = Number.MAX_VALUE;
    this.rightBorder = -Number.MAX_VALUE;
    this.topBorder = Number.MAX_VALUE;
    this.bottomBorder = -Number.MAX_VALUE;
    this.unscaledLeftBorder = Number.MAX_VALUE;
    this.unscaledRightBorder = -Number.MAX_VALUE;
    this.unscaledTopBorder = Number.MAX_VALUE;
    this.unscaledBottomBorder = -Number.MAX_VALUE;
    this.isPanning = false;
    this.lastPanPosition = new __s0local1();
    this.panVelocity = new __s0local1();
    this.panDirectionVector = new __s0local1();
    this.enableSliding = true;
    this.slideDeceleration = 100;
    this.maxSlideSpeed = 1500;
    this.enableOverPan = true;
    this._overPanInPixels = 40;
    this.overPanSpeed = 150;
    this.deltaTargetPoint = new __s0local1();
    this._enableDoubleTap = true;
    this.currentPixelViewPort = new __s0local2();
    this.cameraMoveSignal = new __dep_exact_becd07da092f4a09.Signal();
    this.cameraInteractionSignal = new __dep_exact_becd07da092f4a09.Signal();
    this.notifyEndPanning = new __dep_exact_becd07da092f4a09.Signal();
    this.notifyZoomEndSignal = new __dep_exact_becd07da092f4a09.Signal();
    this.startPanningSignal = new __dep_exact_becd07da092f4a09.Signal();
    this._enableUserInteractions = false;
    this.viewPortBorderLeft = 0;
    this.viewPortBorderRight = 0;
    this.viewPortBorderTop = 0;
    this.viewPortBorderBottom = 0;
    this.keepRectInSightSpeed = 500;
    this.keepRectInSighBorder = 30;
    this._worldLayer = __s3param0;
    this._worldStage = __s3param0.stage;
    this.activateControls();
    this.refreshBounds();
  }
  AbstractCamera.prototype.activateControls = function () {
    if (!this._enableUserInteractions) {
      this._enableUserInteractions = true;
      this.worldStage.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
      this.worldStage.addEventListener("pressup", this.bindFunction(this.onMouseUp));
      this.worldStage.addEventListener("mousewheel", this.bindFunction(this.onMouseWheel));
    }
  };
  AbstractCamera.prototype.deactivateControls = function () {
    this._enableUserInteractions = false;
    this.worldStage.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this.worldStage.removeEventListener("pressup", this.bindFunction(this.onMouseUp));
    this.worldStage.removeEventListener("mousemove", this.bindFunction(this.onMouseMove));
    this.worldStage.removeEventListener("mousewheel", this.bindFunction(this.onMouseWheel));
  };
  AbstractCamera.prototype.onMouseMove = function (__s10param0) {
    this.panVelocity.x = this.worldStage.mouseX - this.lastPanPosition.x;
    this.panVelocity.y = this.worldStage.mouseY - this.lastPanPosition.y;
    this.setLastPanPosition(this.worldStage.mouseX, this.worldStage.mouseY);
    var __s10local0 = this.worldStage.mouseX - this.panPoint.x;
    var __s10local1 = this.worldStage.mouseY - this.panPoint.y;
    this.setWorldLayerPos(__s10local0, __s10local1);
  };
  AbstractCamera.prototype.onMouseUp = function (__s12param0) {
    this.worldStage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    var __s12local0 = (Date.now() - this.lastPanTimestamp) / 1000;
    this.slideSpeed = this.panVelocity.length / __s12local0;
    this.panDirectionVector = this.panVelocity.clone();
    this.panDirectionVector.normalize(1);
    this.panPoint = null;
    if (this.slideSpeed > this.maxSlideSpeed) {
      this.slideSpeed = this.maxSlideSpeed;
    }
    this.isPanning = false;
    this.onEndPanningFunction();
  };
  AbstractCamera.prototype.onMouseDown = function (__s15param0) {
    if (!this.isZooming) {
      this.stopSliding();
      this.stopAutoZoom();
      this.isPanning = true;
      this.panPoint = new __s0local1(this._worldLayer.mouseX, this._worldLayer.mouseY);
      this.setLastPanPosition(this.worldStage.mouseX, this.worldStage.mouseY);
      this.worldStage.addEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    }
  };
  AbstractCamera.prototype.onMouseWheel = function (__s18param0) {
    this.cameraInteractionSignal.dispatch();
    if (!this.targetPoint) {
      var __s18local0 = __s18param0.delta * 3 / 100;
      this.changeZoomByDelta(__s18local0);
      this._targetZoom = this._currentZoom;
      this.zoomEventFinish();
    }
  };
  AbstractCamera.prototype.zoomEventFinish = function () {};
  AbstractCamera.prototype.onWhilePanning = function () {};
  AbstractCamera.prototype.onTapGesture = function () {
    if (this._enableUserInteractions) {
      this.onEndPanningFunction();
      this.stopSliding();
    }
  };
  AbstractCamera.prototype.onDoubleTapGesture = function () {
    if (this._enableUserInteractions && this.enableOverPan && !this.isPanning && this._enableDoubleTap) {
      if (!this.isZooming) {
        this.autoZoomToTapPos();
      }
    }
  };
  AbstractCamera.prototype.autoZoomToTapPos = function () {
    if (this._currentZoom > this.DEFAULT_START_ZOOM) {
      this._targetZoom = this.MIN_MAP_ZOOM;
    } else {
      this._targetZoom = this.MAX_MAP_ZOOM;
    }
    var __s32local0 = Math.abs(this._targetZoom - this._currentZoom) / this.ZOOM_SPEED;
    var __s32local1 = new __s0local1(this._worldLayer.mouseX, this._worldLayer.mouseY);
    var __s32local2 = this.getCurrentCenterPos();
    var __s32local3 = __s32local1.subtract(__s32local2).length / __s32local0;
    __s32local3 /= this.GFX_ZOOM_FACTOR;
    var __s32local4 = new __s0local1(this.worldStage.stageWidth * 0.5, this.worldStage.stageHeight * 0.5);
    var __s32local5 = new __dep_class_CameraTargetPoint.CameraTargetPoint(__s32local1, __s32local4, __s32local3, __s32local3, __s32local3);
    this.moveToTargetPoint(__s32local5);
  };
  AbstractCamera.prototype.initCustomBorder = function (__s36param0, __s36param1, __s36param2, __s36param3) {
    this.unscaledLeftBorder = __s36param0;
    this.unscaledRightBorder = __s36param1;
    this.unscaledTopBorder = __s36param2;
    this.unscaledBottomBorder = __s36param3;
    var __s36local0 = this.unscaledRightBorder - this.unscaledLeftBorder - this._overPanInPixels * 3;
    var __s36local1 = this.unscaledBottomBorder - this.unscaledTopBorder - this._overPanInPixels * 3;
    var __s36local2 = this._worldLayer.stage.stageWidth / __s36local0;
    var __s36local3 = this._worldLayer.stage.stageHeight / __s36local1;
    this.MIN_MAP_ZOOM = Math.max(this.MIN_MAP_ZOOM, __s36local2);
    this.MIN_MAP_ZOOM = Math.max(this.MIN_MAP_ZOOM, __s36local3);
    this.DEFAULT_START_ZOOM = this.MIN_MAP_ZOOM + (this.MAX_MAP_ZOOM - this.MIN_MAP_ZOOM) / 2;
    this.setZoomTo(this.DEFAULT_START_ZOOM);
    this.refreshBounds();
  };
  AbstractCamera.prototype.update = function (__s38param0) {
    if (this.lastUpdate < 0) {
      this.lastUpdate = __s38param0;
    }
    this.updateCamera(__s38param0);
    this.lastUpdate = __s38param0;
  };
  AbstractCamera.prototype.refreshBounds = function () {
    this.leftBorder = this.unscaledLeftBorder * this._currentZoom;
    this.rightBorder = this._worldLayer.stage.stageWidth - this.unscaledRightBorder * this._currentZoom;
    this.topBorder = this.unscaledTopBorder * this._currentZoom;
    this.bottomBorder = this._worldLayer.stage.stageHeight - this.unscaledBottomBorder * this._currentZoom;
  };
  AbstractCamera.prototype.updateCamera = function (__s43param0) {
    this.handleZooming(__s43param0);
    this.handleSliding(__s43param0);
    this.handleOverPanning(__s43param0);
    this.handleTargetPoint(__s43param0);
  };
  AbstractCamera.prototype.handleTargetPoint = function (__s45param0) {
    if (this.targetPoint) {
      var __s45local0 = (__s45param0 - this.lastUpdate) / 1000;
      var __s45local1 = this.targetPoint.getCorrectedTargetPoint(this._currentZoom);
      this.deltaTargetPoint.x = this._worldLayer.x - __s45local1.x;
      this.deltaTargetPoint.y = this._worldLayer.y - __s45local1.y;
      if (this.deltaTargetPoint.length < __s45local0 * this.targetPoint.targetFollowSpeed) {
        this.setWorldLayerPos(__s45local1.x, __s45local1.y);
        this.onEndPanningFunction();
        this.resetTargetPoint();
      } else {
        this.deltaTargetPoint.normalize(1);
        this.setWorldLayerPos(this._worldLayer.x - this.deltaTargetPoint.x * this.targetPoint.targetFollowSpeed * __s45local0, this._worldLayer.y - this.deltaTargetPoint.y * this.targetPoint.targetFollowSpeed * __s45local0);
        this.targetPoint.targetFollowSpeed += this.targetPoint.targetFollowAcceleration * __s45local0;
        if (this.targetPoint.targetFollowSpeed > this.targetPoint.targetFollowMaxSpeed) {
          this.targetPoint.targetFollowSpeed = this.targetPoint.targetFollowMaxSpeed;
        }
      }
    }
  };
  AbstractCamera.prototype.moveToTargetPoint = function (__s51param0) {
    this.targetPoint = __s51param0;
  };
  AbstractCamera.prototype.resetTargetPoint = function () {
    this.targetPoint = null;
  };
  AbstractCamera.prototype.handleSliding = function (__s55param0) {
    if (this.enableSliding) {
      var __s55local0 = (__s55param0 - this.lastUpdate) / 1000;
      if (this.slideSpeed > 0) {
        this.setWorldLayerPos(this._worldLayer.x + this.panDirectionVector.x * this.slideSpeed * __s55local0, this._worldLayer.y + this.panDirectionVector.y * this.slideSpeed * __s55local0);
        this.slideSpeed -= this.slideDeceleration;
        if (this.slideSpeed <= 0) {
          this.stopSliding();
          this.onEndPanningFunction();
        }
      }
    }
  };
  AbstractCamera.prototype.handleZooming = function (__s60param0) {
    if (isNaN(this._targetZoom)) {
      this._targetZoom = this._currentZoom;
    }
    if (this._targetZoom != this._currentZoom && this.enableOverPan && !this.isPanning && this._enableDoubleTap) {
      var __s60local0 = (__s60param0 - this.lastUpdate) / 1000;
      var __s60local1 = this.ZOOM_SPEED * __s60local0;
      if (this._targetZoom > this._currentZoom) {
        this.changeZoomByDelta(__s60local1);
      } else if (this._targetZoom < this._currentZoom) {
        this.changeZoomByDelta(-__s60local1);
      }
    }
  };
  AbstractCamera.prototype.stopAutoZoom = function () {
    this._targetZoom = this._currentZoom;
  };
  AbstractCamera.prototype.handleOverPanning = function (__s68param0) {
    if (this.enableOverPan && !this.isPanning) {
      var __s68local0 = (__s68param0 - this.lastUpdate) / 1000 * this.overPanSpeed * this._currentZoom;
      if (this._worldLayer.x > this.leftBorder - this._overPanInPixels) {
        this._worldLayer.x -= __s68local0;
      } else if (this._worldLayer.x < this.rightBorder + this._overPanInPixels) {
        this._worldLayer.x += __s68local0;
      }
      if (this._worldLayer.y > this.topBorder - this._overPanInPixels) {
        this._worldLayer.y -= __s68local0;
      } else if (this._worldLayer.y < this.bottomBorder + this._overPanInPixels) {
        this._worldLayer.y += __s68local0;
      }
    }
  };
  AbstractCamera.prototype.onEndPanningFunction = function () {
    this.notifyEndPanning.dispatch();
  };
  AbstractCamera.prototype.onStartPanning = function () {
    this.startPanningSignal.dispatch();
  };
  AbstractCamera.prototype.centerCamera = function () {
    var __s79local0 = (this.unscaledRightBorder - this.unscaledLeftBorder) / 2;
    var __s79local1 = (this.unscaledBottomBorder - this.unscaledTopBorder) / 2;
    this.centerUnscaledPosition(__s79local0, __s79local1);
  };
  AbstractCamera.prototype.centerRectangle = function (__s81param0) {
    var __s81local0 = __s81param0.left + __s81param0.width / 2;
    var __s81local1 = __s81param0.top + __s81param0.height / 2;
    var __s81local2 = new __s0local1(this.worldStage.stageWidth * 0.5, this.worldStage.stageHeight * 0.5);
    var __s81local3 = new __dep_class_CameraTargetPoint.CameraTargetPoint(new __s0local1(__s81local0, __s81local1), __s81local2, this.GFX_ZOOM_FACTOR * 600, this.GFX_ZOOM_FACTOR * 1000, this.GFX_ZOOM_FACTOR * 1000);
    this.moveToTargetPoint(__s81local3);
  };
  AbstractCamera.prototype.keepObjectInSight = function (__s83param0) {
    var __s83local0 = 0;
    var __s83local1 = 0;
    if (__s83param0.right > (this.currentPixelViewPort.right - this.viewPortBorderRight) / this._currentZoom) {
      __s83local0 = __s83param0.right - (this.currentPixelViewPort.right - this.viewPortBorderRight) / this._currentZoom + this.keepRectInSighBorder;
    } else if (__s83param0.left < (this.currentPixelViewPort.left - this.viewPortBorderLeft) / this._currentZoom) {
      __s83local0 = __s83param0.left - (this.currentPixelViewPort.left - this.viewPortBorderLeft) / this._currentZoom - this.keepRectInSighBorder;
    }
    if (__s83param0.top < (this.currentPixelViewPort.top + this.viewPortBorderTop) / this._currentZoom) {
      __s83local1 = __s83param0.top - (this.currentPixelViewPort.top + this.viewPortBorderTop) / this._currentZoom - this.keepRectInSighBorder;
    } else if (__s83param0.bottom > (this.currentPixelViewPort.bottom - this.viewPortBorderBottom) / this._currentZoom) {
      __s83local1 = __s83param0.bottom - (this.currentPixelViewPort.bottom - this.viewPortBorderBottom) / this._currentZoom + this.keepRectInSighBorder;
    }
    if (__s83local0 != 0 || __s83local1 != 0) {
      var __s83local2 = new __s0local1(this._worldLayer.x - __s83local0, this._worldLayer.y - __s83local1);
      var __s83local3 = new __s0local1(this.worldStage.stageWidth * 0.5, this.worldStage.stageHeight * 0.5);
      var __s83local4 = new __dep_class_CameraTargetPoint.CameraTargetPoint(__s83local2, __s83local3, this.GFX_ZOOM_FACTOR * 600, this.GFX_ZOOM_FACTOR * 1000, this.GFX_ZOOM_FACTOR * 1000, false);
      this.moveToTargetPoint(__s83local4);
    } else {
      this.resetTargetPoint();
    }
  };
  AbstractCamera.prototype.centerUnscaledPosition = function (__s91param0, __s91param1) {
    this.setWorldLayerPos(this.worldStage.stageWidth * 0.5 - __s91param0 * this._currentZoom, this.worldStage.stageHeight * 0.5 - __s91param1 * this._currentZoom);
    this.resetTargetPoint();
  };
  AbstractCamera.prototype.centerUnscaledRectangle = function (__s93param0) {
    var __s93local0 = __s93param0.left + __s93param0.width / 2;
    var __s93local1 = __s93param0.top + __s93param0.height / 2;
    this.setWorldLayerPos(this.worldStage.stageWidth * 0.5 - __s93local0 * this._currentZoom, this.worldStage.stageHeight * 0.5 - __s93local1 * this._currentZoom);
    this.resetTargetPoint();
  };
  AbstractCamera.prototype.setWorldLayerPos = function (__s95param0, __s95param1) {
    this._worldLayer.x = __s95param0;
    this._worldLayer.y = __s95param1;
    this.currentPixelViewPort.x = -__s95param0;
    this.currentPixelViewPort.y = -__s95param1;
    this.currentPixelViewPort.width = this.worldStage.stageWidth;
    this.currentPixelViewPort.height = this.worldStage.stageHeight;
    this.pushToBounds();
    this.updateViewport();
  };
  AbstractCamera.prototype.setWorldLayerScale = function (__s97param0) {
    this._worldLayer.scaleX = __s97param0;
    this._worldLayer.scaleY = __s97param0;
    this._currentZoom = __s97param0;
    this.refreshBounds();
  };
  AbstractCamera.prototype.pushToBounds = function () {
    if (this._worldLayer.x > this.leftBorder) {
      this._worldLayer.x = this.leftBorder;
      this.panDirectionVector.x = 0;
    }
    if (this._worldLayer.x < this.rightBorder) {
      this._worldLayer.x = this.rightBorder;
      this.panDirectionVector.x = 0;
    }
    if (this._worldLayer.y > this.topBorder) {
      this._worldLayer.y = this.topBorder;
      this.panDirectionVector.y = 0;
    }
    if (this._worldLayer.y < this.bottomBorder) {
      this._worldLayer.y = this.bottomBorder;
      this.panDirectionVector.y = 0;
    }
  };
  AbstractCamera.prototype.stopSliding = function () {
    this.slideSpeed = 0;
  };
  AbstractCamera.prototype.setLastPanPosition = function (__s107param0, __s107param1) {
    this.lastPanPosition.x = __s107param0;
    this.lastPanPosition.y = __s107param1;
    this.lastPanTimestamp = Date.now();
  };
  AbstractCamera.prototype.changeZoomByDelta = function (__s109param0) {
    if (this._enableUserInteractions && __s109param0 != 0) {
      var __s109local0 = this._currentZoom + __s109param0;
      if (__s109local0 < this.MIN_MAP_ZOOM) {
        __s109local0 = this.MIN_MAP_ZOOM;
      } else if (__s109local0 > this.MAX_MAP_ZOOM) {
        __s109local0 = this.MAX_MAP_ZOOM;
      }
      if (this._currentZoom != __s109local0) {
        var __s109local1 = -(this._worldLayer.x / this._currentZoom - this.worldStage.stageWidth / 2 / this._currentZoom);
        var __s109local2 = -(this._worldLayer.y / this._currentZoom - this.worldStage.stageHeight / 2 / this._currentZoom);
        this.setWorldLayerScale(__s109local0);
        this.setWorldLayerPos(this.worldStage.stageWidth * 0.5 - __s109local1 * __s109local0, this.worldStage.stageHeight * 0.5 - __s109local2 * __s109local0);
      }
    }
  };
  AbstractCamera.prototype.setZoomTo = function (__s115param0) {
    if (isNaN(__s115param0)) {
      __s115param0 = this.DEFAULT_START_ZOOM;
    }
    this.changeZoomByDelta(__s115param0 - this._currentZoom);
  };
  Object.defineProperty(AbstractCamera.prototype, "worldStage", {
    get: function () {
      return this._worldStage;
    },
    enumerable: true,
    configurable: true
  });
  AbstractCamera.prototype.updateViewport = function () {
    this.cameraMoveSignal.dispatch();
  };
  AbstractCamera.prototype.getCurrentCenterPos = function () {
    var __s122local0 = -(this._worldLayer.x / this._currentZoom - this.worldStage.stageWidth / 2 / this._currentZoom);
    var __s122local1 = -(this._worldLayer.y / this._currentZoom - this.worldStage.stageHeight / 2 / this._currentZoom);
    return new __s0local1(__s122local0, __s122local1);
  };
  AbstractCamera.prototype.destroy = function () {
    this.deactivateControls();
    this._worldLayer = null;
    this.cameraMoveSignal.removeAll();
    this.cameraInteractionSignal.removeAll();
    this.notifyEndPanning.removeAll();
    this.notifyZoomEndSignal.removeAll();
  };
  Object.defineProperty(AbstractCamera.prototype, "currentZoom", {
    get: function () {
      return this._currentZoom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractCamera.prototype, "overPanInPixels", {
    set: function (__s128param0) {
      this._overPanInPixels = __s128param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractCamera.prototype, "enableDoubleTap", {
    get: function () {
      return this._enableDoubleTap;
    },
    set: function (__s132param0) {
      this._enableDoubleTap = __s132param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractCamera.prototype, "dpiScaleFactor", {
    set: function (__s134param0) {
      this._dpiScaleFactor = __s134param0;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractCamera;
}();
exports.AbstractCamera = __s0local3;
