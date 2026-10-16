Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_887b867037144fe0 = require("gge-module:exact_887b867037144fe0");
var __dep_export_objectsUnderPoint = require("gge-module:export_objectsUnderPoint");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".StageExtension");
Object.defineProperty(createjs.Stage.prototype, "frameRate", {
  get: function () {
    return createjs.Ticker.framerate;
  },
  set: function (__s3param0) {
    createjs.Ticker.framerate = __s3param0;
  },
  enumerable: true,
  configurable: true
});
createjs.Stage.prototype.invalidate = function () {};
createjs.Stage.prototype._testMouseOver = function (__s7param0, __s7param1, __s7param2) {
  if (!this._prevStage || __s7param1 !== undefined) {
    var __s7local0 = this._nextStage;
    var __s7local1 = this._getPointerData(-1);
    if (__s7local1 && (__s7param0 || this.mouseX !== this._mouseOverX || this.mouseY !== this._mouseOverY || !this.mouseInBounds)) {
      var __s7local2 = __s7local1.posEvtObj;
      var __s7local3 = __s7param2 || __s7local2 && __s7local2.target === this.canvas;
      var __s7local4 = null;
      var __s7local5 = -1;
      if (!__s7param1 && (__s7param0 || this.mouseInBounds && __s7local3)) {
        var __s7local6 = window.restrictedInteractiveArea;
        if (__s7local6) {
          if (Array.isArray(__s7local6) && __s7local6.length) {
            for (var __s7local7 = __s7local6.length - 1; __s7local7 >= 0; __s7local7--) {
              var __s7local8 = __s7local6[__s7local7];
              if (__s7local8) {
                var __s7local9 = __s7local8 instanceof createjs.Container ? __s7local8 : __s7local8.parent;
                if (__s7local9 && (__s7local4 = this._getObjectsUnderPoint.call(__s7local9, this.mouseX, this.mouseY, null, true, null, 8))) {
                  break;
                }
              }
            }
          } else if (__s7local6 instanceof createjs.DisplayObject) {
            if (!(__s7local6 = __s7local6 instanceof createjs.Container ? __s7local6 : __s7local6.parent)) {
              return;
            }
            __s7local4 = this._getObjectsUnderPoint.call(__s7local6, this.mouseX, this.mouseY, null, true, null, 8);
          }
        } else {
          __s7local4 = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
        }
        __dep_exact_887b867037144fe0.MouseEventDispatcher.setTarget(__s7local4);
        if (window.cursorDebug) {
          if (__s7local4) {
            __s0local0.info("found hit target: ", __s7local4);
          } else {
            __s0local0.warn("found nothing under cursor");
          }
        }
        this._mouseOverX = this.mouseX;
        this._mouseOverY = this.mouseY;
      }
      var __s7local10 = this._mouseOverTarget || [];
      var __s7local11 = __s7local10[__s7local10.length - 1];
      var __s7local12 = this._mouseOverTarget = [];
      for (var __s7local13 = __s7local4; __s7local13;) {
        __s7local12.unshift(__s7local13);
        __s7local13 = __s7local13.parent;
      }
      for (var __s7local14 = 0, __s7local15 = __s7local12.length; __s7local14 < __s7local15 && __s7local12[__s7local14] === __s7local10[__s7local14]; __s7local14++) {
        __s7local5 = __s7local14;
      }
      if (__s7local11 !== __s7local4) {
        this._dispatchMouseEvent(__s7local11, "mouseout", true, -1, __s7local1, __s7local2, __s7local4);
      }
      for (__s7local14 = __s7local10.length - 1; __s7local14 > __s7local5; __s7local14--) {
        this._dispatchMouseEvent(__s7local10[__s7local14], "rollout", false, -1, __s7local1, __s7local2, __s7local4);
      }
      for (__s7local14 = __s7local12.length - 1; __s7local14 > __s7local5; __s7local14--) {
        this._dispatchMouseEvent(__s7local12[__s7local14], "rollover", false, -1, __s7local1, __s7local2, __s7local11);
      }
      if (__s7local11 !== __s7local4) {
        this._dispatchMouseEvent(__s7local4, "mouseover", true, -1, __s7local1, __s7local2, __s7local11);
      }
      if (!__s7local4 && !window.restrictedInteractiveArea && !!__s7local0) {
        __s7local0._testMouseOver(__s7param0, __s7param1 || __s7local4 && this, __s7param2 || __s7local3 && this);
      }
    }
  }
};
createjs.Stage.prototype._getObjectsUnderPoint = function (__s35param0, __s35param1, __s35param2, __s35param3, __s35param4, __s35param5) {
  return __dep_export_objectsUnderPoint.objectsUnderPoint(this, createjs.DisplayObject._hitTestContext, __s35param0, __s35param1, __s35param2, __s35param3, __s35param4, __s35param5);
};
createjs.Stage.prototype._updatePointerPosition = function (__s37param0, __s37param1, __s37param2, __s37param3) {
  var __s37local0 = this._getElementRect(this.canvas);
  __s37param2 -= __s37local0.left;
  __s37param3 -= __s37local0.top;
  var __s37local1 = this.canvas.width / this.scaleX;
  var __s37local2 = this.canvas.height / this.scaleY;
  __s37param2 /= (__s37local0.right - __s37local0.left) / __s37local1;
  __s37param3 /= (__s37local0.bottom - __s37local0.top) / __s37local2;
  var __s37local3 = this._getPointerData(__s37param0);
  if (__s37local3.inBounds = __s37param2 >= 0 && __s37param3 >= 0 && __s37param2 <= __s37local1 - 1 && __s37param3 <= __s37local2 - 1) {
    __s37local3.x = __s37param2;
    __s37local3.y = __s37param3;
  } else if (this.mouseMoveOutside) {
    __s37local3.x = __s37param2 < 0 ? 0 : __s37param2 > __s37local1 - 1 ? __s37local1 - 1 : __s37param2;
    __s37local3.y = __s37param3 < 0 ? 0 : __s37param3 > __s37local2 - 1 ? __s37local2 - 1 : __s37param3;
  }
  __s37local3.posEvtObj = __s37param1;
  __s37local3.rawX = __s37param2;
  __s37local3.rawY = __s37param3;
  if (__s37param0 === this._primaryPointerID || __s37param0 === -1) {
    this.mouseX = __s37local3.x;
    this.mouseY = __s37local3.y;
    this.mouseInBounds = __s37local3.inBounds;
  }
};
