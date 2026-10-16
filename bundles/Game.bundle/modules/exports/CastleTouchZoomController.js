Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local1 = function () {
  function CastleTouchZoomController(__s3param0, __s3param1) {
    this.twoTouchDistance = -1;
    this.hasMoved = false;
    this.zoomIn = __s3param0;
    this.zoomOut = __s3param1;
    this.touchDownPoint = new __s0local0();
  }
  CastleTouchZoomController.prototype.simpleDistance = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    return Math.abs(__s5param0 - __s5param2) + Math.abs(__s5param1 - __s5param3);
  };
  CastleTouchZoomController.prototype.handleTouchZoom = function (__s7param0) {
    var __s7local0 = __s7param0.nativeEvent;
    if (window.TouchEvent && __s7local0 instanceof TouchEvent) {
      if (__s7local0.touches.length >= 2) {
        var __s7local1 = this.twoTouchDistance;
        var __s7local2 = __s7local0.touches[0];
        var __s7local3 = __s7local0.touches[1];
        var __s7local4 = this.simpleDistance(__s7local2.pageX, __s7local2.pageY, __s7local3.pageX, __s7local3.pageY);
        var __s7local5 = __s7local4 - __s7local1;
        if (Math.abs(__s7local5) > 30) {
          this.twoTouchDistance = __s7local4;
        }
        if (__s7local1 > 0 && Math.abs(__s7local5) > 30) {
          if (__s7local5 < 0) {
            Function.prototype.call.apply(this.zoomOut);
          } else {
            Function.prototype.call.apply(this.zoomIn);
          }
        }
        return;
      }
      this.twoTouchDistance = -1;
    } else {
      this.twoTouchDistance = -1;
    }
  };
  CastleTouchZoomController.prototype.markTouchDownPoint = function (__s16param0, __s16param1 = false) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s16param0)) {
      this.touchDownPoint.x = __s16param1 ? 0 : __s16param0.stageX;
      this.touchDownPoint.y = __s16param1 ? 0 : __s16param0.stageY;
      this.hasMoved = !__s16param1;
    }
  };
  CastleTouchZoomController.prototype.shouldTouchMoveIgnored = function (__s19param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s19param0)) {
      var __s19local0 = this.simpleDistance(__s19param0.stageX, __s19param0.stageY, this.touchDownPoint.x, this.touchDownPoint.y);
      return !this.hasMoved || __s19local0 < 5;
    }
    return false;
  };
  CastleTouchZoomController.prototype.isMultiTouch = function (__s22param0) {
    var __s22local0 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.getTouchEvent(__s22param0);
    return !!__s22local0 && __s22local0.touches.length > 1;
  };
  return CastleTouchZoomController;
}();
exports.CastleTouchZoomController = __s0local1;
