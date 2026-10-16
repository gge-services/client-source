Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function Timer(__s3param0, __s3param1 = 0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._delay = 0;
    __s3local0._currentCount = 0;
    __s3local0._running = false;
    __s3local0.updateInterval = 1000;
    __s3local0.lastCount = 1000;
    __s3local0.lastTimeStamp = 0;
    __s3local0.$update = function (__s5param0) {
      var __s5local0 = __s5param0.timeStamp;
      if (__s5local0 - __s3local0.lastTimeStamp >= __s3local0._delay) {
        __s3local0.lastCount = __s3local0.updateInterval;
      } else {
        __s3local0.lastCount -= 1000;
        if (__s3local0.lastCount > 0) {
          return false;
        }
        __s3local0.lastCount += __s3local0.updateInterval;
      }
      __s3local0.lastTimeStamp = __s5local0;
      __s3local0._currentCount++;
      var __s5local1 = __s3local0.repeatCount > 0 && __s3local0._currentCount >= __s3local0.repeatCount;
      var __s5local2 = __s3local0;
      __s3local0.dispatchEvent(new createjs.Event(__s0local0.TIMER, false, false), __s5local2);
      if (__s5local1) {
        __s3local0.stop();
        __s3local0.dispatchEvent(new createjs.Event(__s0local0.TIMER_COMPLETE, false, false), __s5local2);
      }
      return false;
    };
    __s3local0.delay = __s3param0;
    __s3local0.repeatCount = +__s3param1 | 0;
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(Timer, __s1param0);
  Object.defineProperty(Timer.prototype, "delay", {
    get: function () {
      return this._delay;
    },
    set: function (__s13param0) {
      if (__s13param0 < 1) {
        __s13param0 = 1;
      }
      if (this._delay != __s13param0) {
        this._delay = __s13param0;
        this.lastCount = this.updateInterval = Math.round(__s13param0 * 60);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Timer.prototype, "currentCount", {
    get: function () {
      return this._currentCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Timer.prototype, "running", {
    get: function () {
      return this._running;
    },
    enumerable: true,
    configurable: true
  });
  Timer.prototype.reset = function () {
    this.stop();
    this._currentCount = 0;
  };
  Timer.prototype.start = function () {
    if (!this._running) {
      this.lastCount = this.updateInterval;
      this.lastTimeStamp = Date.now();
      createjs.Ticker.addEventListener("tick", this.$update);
      this._running = true;
    }
  };
  Timer.prototype.stop = function () {
    if (this._running) {
      createjs.Ticker.removeEventListener("tick", this.$update);
      this._running = false;
    }
  };
  return Timer;
}(createjs.EventDispatcher);
exports.Timer = __s0local1;
