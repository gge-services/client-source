Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function InteractiveBitmapClipComponent(__s3param0) {
    this._threshold = 0;
    this._transparentMode = false;
    this._bitmapHit = false;
    this._mousePoint = new __s0local1();
    this.MOUSE_UPDATE_INTERVAL = Number(1000 / 24);
    this.componentOwner = __s3param0;
    this.activateMouseTrap();
  }
  Object.defineProperty(InteractiveBitmapClipComponent.prototype, "alphaTolerance", {
    get: function () {
      return this._threshold;
    },
    set: function (__s7param0) {
      this._threshold = Math.min(255, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  InteractiveBitmapClipComponent.prototype.activateMouseTrap = function () {
    this.componentOwner.addEventListener("mouseover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("mouseout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("rollover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("rollout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("mousemove", this.bindFunction(this.captureMouseEvent));
  };
  InteractiveBitmapClipComponent.prototype.deactivateMouseTrap = function () {
    this.componentOwner.removeEventListener("mouseover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("mouseout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("rollover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("rollout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("mousemove", this.bindFunction(this.captureMouseEvent));
  };
  InteractiveBitmapClipComponent.prototype.captureMouseEvent = function (__s13param0) {
    if (!this._transparentMode && (__s13param0.type == "mouseover" || __s13param0.type == "rollover")) {
      this._transparentMode = true;
      this.componentOwner.mouseEnabled = false;
      this.componentOwner.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.trackMouseWhileInBounds), false);
      this.trackMouseWhileInBounds();
    }
    if (!this._bitmapHit) {
      __s13param0.stopImmediatePropagation();
    }
  };
  InteractiveBitmapClipComponent.prototype.trackMouseWhileInBounds = function (__s17param0 = null) {
    var __s17local0 = Date.now();
    if (__s17local0 > this._nextUpdateTimestamp) {
      if (this.bitmapHitTest() != this._bitmapHit) {
        this._bitmapHit = !this._bitmapHit;
        if (this._bitmapHit) {
          this.deactivateMouseTrap();
          this._transparentMode = false;
          this.componentOwner.mouseEnabled = true;
        } else if (!this._bitmapHit) {
          this._transparentMode = true;
          this.componentOwner.mouseEnabled = false;
        }
      }
      var __s17local1 = this.componentOwner.bmpImage.localToGlobal(this._mousePoint.x, this._mousePoint.y);
      if (!this.componentOwner.hitTestPoint(__s17local1.x, __s17local1.y, true)) {
        this.componentOwner.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.trackMouseWhileInBounds));
        this._transparentMode = false;
        this.componentOwner.mouseEnabled = true;
        this.activateMouseTrap();
      }
      this._nextUpdateTimestamp = __s17local0 + this.MOUSE_UPDATE_INTERVAL;
    }
  };
  InteractiveBitmapClipComponent.prototype.bitmapHitTest = function () {
    return false;
  };
  InteractiveBitmapClipComponent.prototype.dispose = function () {
    this.deactivateMouseTrap();
  };
  InteractiveBitmapClipComponent.BASE_POINT = new __s0local1();
  return InteractiveBitmapClipComponent;
}();
exports.InteractiveBitmapClipComponent = __s0local2;
