Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_NoneValueSignal = require("gge-module:class_NoneValueSignal");
var __s0local0 = function (__s1param0) {
  function AbstractGoodgameClip() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.onLoopEnd = new __dep_class_NoneValueSignal.NoneValueSignal();
    __s3local0._currentFrame = 1;
    __s3local0.expiredAnimationTime = 0;
    __s3local0._startFrame = 0;
    __s3local0._loops = AbstractGoodgameClip.LOOPS_INFINITE;
    __s3local0._paused = false;
    __s3local0._playOnPause = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(AbstractGoodgameClip, __s1param0);
  Object.defineProperty(AbstractGoodgameClip.prototype, "currentFrame", {
    get: function () {
      return this._currentFrame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "numFrames", {
    get: function () {
      return this._numFrames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "targetFps", {
    set: function (__s9param0) {
      this._tagetFps = __s9param0;
      this.timePerFrame = 1000 / this._tagetFps;
      this.animationLength = this.timePerFrame * this._numFrames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "startFrame", {
    get: function () {
      return this._startFrame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "endFrame", {
    get: function () {
      return this._endFrame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "playedLoops", {
    get: function () {
      return this._playedLoops;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "paused", {
    get: function () {
      return this._paused;
    },
    enumerable: true,
    configurable: true
  });
  AbstractGoodgameClip.prototype.togglePause = function () {
    this._paused = !this._paused;
  };
  Object.defineProperty(AbstractGoodgameClip.prototype, "playOnPause", {
    get: function () {
      return this._playOnPause;
    },
    set: function (__s23param0) {
      this._playOnPause = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "running", {
    get: function () {
      return this._running;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractGoodgameClip.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (__s29param0) {
      this._clipSizeComponent = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  AbstractGoodgameClip.prototype.play = function () {
    if (this._tagetFps < 1) {
      this.jumpToFrame(1);
    } else {
      this._running = true;
      this._numFrames = this.endFrame - this.startFrame + 1;
      this.animationLength = this.timePerFrame * this._numFrames;
      this.animationManager.register(this);
    }
  };
  AbstractGoodgameClip.prototype.stop = function () {
    this._running = false;
    this.expiredAnimationTime = 0;
    this.animationManager.unregister(this);
  };
  AbstractGoodgameClip.prototype.gotoAndPlay = function (__s37param0, __s37param1 = -1, __s37param2 = -1) {
    this.stop();
    this._loops = __s37param2;
    if (__s37param1 === -1) {
      __s37param1 = this.numFrames;
    }
    this.setStartAndEndFrame(__s37param0, __s37param1);
    if (__s37param0 !== __s37param1) {
      this.play();
    } else {
      this.stop();
    }
  };
  AbstractGoodgameClip.prototype.gotoAndStop = function (__s42param0) {
    this.stop();
    this.setStartAndEndFrame(__s42param0, __s42param0);
    if (__s42param0 !== this._currentFrame) {
      this.jumpToFrame(__s42param0);
    }
  };
  AbstractGoodgameClip.prototype.setStartAndEndFrame = function (__s45param0, __s45param1) {
    this._startFrame = __s45param0;
    this._endFrame = __s45param1;
  };
  AbstractGoodgameClip.prototype.updateFrame = function (__s47param0) {
    if (!this._paused) {
      this.expiredAnimationTime += __s47param0;
      this._playedLoops = Math.floor(this.expiredAnimationTime / this.animationLength);
      var __s47local0 = Math.max(1, Math.ceil((this.expiredAnimationTime - this.animationLength * this._playedLoops) / this.timePerFrame) + this.startFrame - 1);
      if (this._loops !== AbstractGoodgameClip.LOOPS_INFINITE && this._playedLoops >= this._loops) {
        this.stop();
        this.onLoopEnd.signal();
      } else if (__s47local0 !== this._currentFrame) {
        this.jumpToFrame(__s47local0);
      }
    }
  };
  AbstractGoodgameClip.prototype.jumpToFrame = function (__s52param0) {};
  AbstractGoodgameClip.prototype.asDisplayObject = function () {
    return this;
  };
  AbstractGoodgameClip.prototype.dispose = function () {};
  AbstractGoodgameClip.prototype.once = function (__s58param0, __s58param1, __s58param2, __s58param3, __s58param4) {};
  AbstractGoodgameClip.LOOPS_INFINITE = -1;
  return AbstractGoodgameClip;
}(createjs.Container);
exports.AbstractGoodgameClip = __s0local0;
