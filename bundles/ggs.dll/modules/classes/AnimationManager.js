Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Ticker;
var __s0local1 = function () {
  function AnimationManager() {
    this.clips = new Map();
    this._pause = false;
  }
  AnimationManager.prototype.dispose = function () {
    this.clips = new Map();
    __s0local0.removeEventListener("tick", this.bindFunction(this.handleEnterFrame));
  };
  AnimationManager.prototype.register = function (__s7param0) {
    if (!this.isPlaying) {
      __s0local0.addEventListener("tick", this.bindFunction(this.handleEnterFrame));
      this.preTime = Date.now();
      this.isPlaying = true;
    }
    this.clips.set(__s7param0, __s7param0);
  };
  AnimationManager.prototype.unregister = function (__s10param0) {
    if (this.clips.get(__s10param0)) {
      this.clips.delete(__s10param0);
      var __s10local0 = 0;
      for (var __s10local1 = 0, __s10local2 = Array.from(this.clips.values()); __s10local1 < __s10local2.length; __s10local1++) {
        __s10local2[__s10local1];
        __s10local0++;
      }
      if (__s10local0 <= 0 && this.isPlaying) {
        __s0local0.removeEventListener("tick", this.bindFunction(this.handleEnterFrame));
        this.isPlaying = false;
      }
    }
  };
  Object.defineProperty(AnimationManager.prototype, "pause", {
    set: function (__s16param0) {
      this._pause = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  AnimationManager.prototype.handleEnterFrame = function (__s18param0) {
    this.lastFrameTime = Date.now() - this.preTime;
    if (!__s18param0.paused) {
      for (var __s18local0 = 0, __s18local1 = Array.from(this.clips.values()); __s18local0 < __s18local1.length; __s18local0++) {
        var __s18local2 = __s18local1[__s18local0];
        var __s18local3 = __s18local2.asDisplayObject().stage;
        if (__s18local3 && __s18local3.tickEnabled && __s18local2.visible && (!this._pause || this._pause && __s18local2.playOnPause)) {
          __s18local2.updateFrame(this.lastFrameTime);
        }
      }
    }
    this.preTime = Date.now();
  };
  return AnimationManager;
}();
exports.AnimationManager = __s0local1;
