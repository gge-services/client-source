Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local2 = function () {
  function TouchScrollHelper() {
    this._valid = false;
    this.touchStageRefPoint = new __s0local0();
  }
  TouchScrollHelper.prototype.setup = function (__s5param0, __s5param1 = null, __s5param2 = null) {
    if (this.disp) {
      this.dispose();
    }
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this.disp = __s5param0;
      this.disp.addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onTouchDown));
      this.disp.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onTouchUp));
      this.onTouchDownCallback = __s5param1;
      this.onTouchUpCallback = __s5param2;
    }
  };
  TouchScrollHelper.prototype.dispose = function () {
    if (this.disp) {
      this.disp.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onTouchDown));
      this.disp.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onTouchUp));
      this.onTouchDownCallback = null;
      this.onTouchUpCallback = null;
    }
  };
  Object.defineProperty(TouchScrollHelper.prototype, "valid", {
    get: function () {
      return this._valid;
    },
    enumerable: true,
    configurable: true
  });
  TouchScrollHelper.prototype.onTouchDown = function (__s14param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s14param0)) {
      this.touchStageRefPoint.x = __s14param0.stageX;
      this.touchStageRefPoint.y = __s14param0.stageY;
      this._valid = true;
      if (this.onTouchDownCallback) {
        this.onTouchDownCallback();
      }
    }
  };
  TouchScrollHelper.prototype.onTouchUp = function (__s18param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s18param0)) {
      this.touchStageRefPoint.x = 0;
      this.touchStageRefPoint.y = 0;
      this._valid = false;
      if (this.onTouchUpCallback) {
        this.onTouchUpCallback();
      }
    }
  };
  return TouchScrollHelper;
}();
exports.TouchScrollHelper = __s0local2;
