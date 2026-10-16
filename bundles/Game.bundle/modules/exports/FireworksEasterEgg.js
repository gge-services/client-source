Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Shape;
var __s0local2 = createjs.Ticker;
var __s0local3 = function () {
  function FireworksEasterEgg() {
    this._particles = [];
    this._queue = [];
    this._clickTimes = [];
    this._clickTypes = [];
    this._tickActive = false;
  }
  FireworksEasterEgg.getInstance = function () {
    FireworksEasterEgg._instance ||= new FireworksEasterEgg();
    return FireworksEasterEgg._instance;
  };
  FireworksEasterEgg.isSpireType = function (__s7param0) {
    return !!__s7param0 && FireworksEasterEgg.SPIRE_TYPES.indexOf(__s7param0) > -1;
  };
  FireworksEasterEgg.prototype.registerClick = function (__s9param0, __s9param1) {
    var __s9local0 = FireworksEasterEgg.SPIRE_TYPES.indexOf(__s9param0);
    if (__s9local0 < 0) {
      return false;
    }
    for (var __s9local1 = Date.now(); this._clickTimes.length > 0 && (__s9local1 - this._clickTimes[0] > FireworksEasterEgg.CLICK_WINDOW_MS || this._clickTimes.length > FireworksEasterEgg.MAX_TRACKED_CLICKS);) {
      this._clickTimes.shift();
      this._clickTypes.shift();
    }
    this._clickTimes.push(__s9local1);
    this._clickTypes.push(__s9local0);
    if (this.isRunning()) {
      return false;
    }
    var __s9local2 = this.hasAllColorsInWindow();
    if (__s9local2) {
      this._clickTimes.length = 0;
      this._clickTypes.length = 0;
    }
    return this.launch(__s9local0, this.toStagePos(__s9param1), __s9local2);
  };
  FireworksEasterEgg.prototype.isRunning = function () {
    return this._particles.length > 0 || this._queue.length > 0;
  };
  FireworksEasterEgg.prototype.hasAllColorsInWindow = function () {
    for (var __s18local0 = 0; __s18local0 < FireworksEasterEgg.SPIRE_TYPES.length; __s18local0++) {
      if (this._clickTypes.indexOf(__s18local0) < 0) {
        return false;
      }
    }
    return true;
  };
  FireworksEasterEgg.prototype.launch = function (__s23param0, __s23param1, __s23param2) {
    if (!__s23param1) {
      return false;
    }
    if (!this.ensureOverlay()) {
      return false;
    }
    var __s23local0 = this.getStageWidth();
    for (var __s23local1 = __s23param2 ? FireworksEasterEgg.FINALE_ROCKETS : FireworksEasterEgg.ROCKETS_PER_BURST, __s23local2 = Math.min(FireworksEasterEgg.ROCKET_SPACING, __s23local0 * 0.8 / __s23local1), __s23local3 = 0; __s23local3 < __s23local1; __s23local3++) {
      var __s23local4 = __s23param2 ? __s23local3 % FireworksEasterEgg.SPIRE_TYPES.length : __s23param0;
      var __s23local5 = __s23local3 - (__s23local1 - 1) * 0.5;
      var __s23local6 = __s23local5 * __s23local2 + __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-25, 25);
      this._queue.push({
        delay: Math.abs(__s23local5) * FireworksEasterEgg.ROCKET_DELAY + __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-3, 3),
        x: Math.max(50, Math.min(__s23local0 - 50, __s23param1.x + __s23local6)),
        y: __s23param1.y,
        toneBase: __s23local4 * FireworksEasterEgg.TONES_PER_PALETTE
      });
    }
    return true;
  };
  FireworksEasterEgg.prototype.onTick = function (__s29param0) {
    if (this._shape) {
      if (this._shape.stage) {
        var __s29local0 = __s29param0 && __s29param0.delta ? __s29param0.delta : 16.7;
        var __s29local1 = Math.min(__s29local0 / 16.7, 3);
        var __s29local2 = 1 - (1 - FireworksEasterEgg.DRAG) * __s29local1;
        for (var __s29local3 = this._queue.length - 1; __s29local3 >= 0; __s29local3--) {
          var __s29local4 = this._queue[__s29local3];
          __s29local4.delay -= __s29local1;
          if (__s29local4.delay <= 0) {
            this._queue.splice(__s29local3, 1);
            this.spawnRocket(__s29local4.x, __s29local4.y, __s29local4.toneBase);
          }
        }
        for (var __s29local5 = this._particles.length - 1; __s29local5 >= 0; __s29local5--) {
          var __s29local6 = this._particles[__s29local5];
          __s29local6.life -= __s29local1;
          if (__s29local6.life <= 0) {
            if (__s29local6.kind == 1) {
              this.explode(__s29local6);
            }
            this._particles.splice(__s29local5, 1);
          } else if (__s29local6.kind != 2) {
            __s29local6.vy += FireworksEasterEgg.GRAVITY * __s29local1;
            if (__s29local6.kind == 0) {
              __s29local6.vx *= __s29local2;
              __s29local6.vy *= __s29local2;
            }
            __s29local6.x += __s29local6.vx * __s29local1;
            __s29local6.y += __s29local6.vy * __s29local1;
          }
        }
        this.draw();
        if (this._particles.length == 0 && this._queue.length == 0) {
          this.dispose();
        }
      } else {
        this.dispose();
      }
    }
  };
  FireworksEasterEgg.prototype.spawnRocket = function (__s44param0, __s44param1, __s44param2) {
    var __s44local0 = this.getStageHeight();
    var __s44local1 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(__s44local0 * 0.08, __s44local0 * 0.34);
    if ((__s44local1 = Math.min(__s44local1, __s44param1 - FireworksEasterEgg.MIN_RISE)) < 40) {
      __s44local1 = 40;
    }
    var __s44local2 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(30, 42);
    var __s44local3 = (__s44local1 - __s44param1) / __s44local2 - FireworksEasterEgg.GRAVITY * 0.5 * __s44local2;
    this.addParticle(1, __s44param0, __s44param1, __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-0.7, 0.7), __s44local3, __s44local2, 3.4, __s44param2 + 1, __s44param2);
  };
  FireworksEasterEgg.prototype.explode = function (__s47param0) {
    var __s47local0 = this.scaleAmount(FireworksEasterEgg.SPARKS_PER_BURST);
    var __s47local1 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(0, Math.PI * 2);
    var __s47local2 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(6, 8.2);
    this.addParticle(2, __s47param0.x, __s47param0.y, 0, 0, 12, 30, __s47param0.toneBase + 2, __s47param0.toneBase);
    for (var __s47local3 = 0; __s47local3 < __s47local0 && !(this._particles.length >= FireworksEasterEgg.MAX_PARTICLES); __s47local3++) {
      var __s47local4 = __s47local1 + __s47local3 / __s47local0 * Math.PI * 2 + __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-0.06, 0.06);
      var __s47local5 = __s47local2 * __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(0.6, 1.15);
      var __s47local6 = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(40, 64);
      var __s47local7 = __s47param0.toneBase + __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, 2);
      this.addParticle(0, __s47param0.x, __s47param0.y, Math.cos(__s47local4) * __s47local5, Math.sin(__s47local4) * __s47local5 - 0.6, __s47local6, __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(3.4, 5.2), __s47local7, __s47param0.toneBase);
    }
  };
  FireworksEasterEgg.prototype.addParticle = function (__s51param0, __s51param1, __s51param2, __s51param3, __s51param4, __s51param5, __s51param6, __s51param7, __s51param8) {
    if (!(this._particles.length >= FireworksEasterEgg.MAX_PARTICLES)) {
      this._particles.push({
        kind: __s51param0,
        x: __s51param1,
        y: __s51param2,
        vx: __s51param3,
        vy: __s51param4,
        life: __s51param5,
        maxLife: __s51param5,
        size: __s51param6,
        tone: __s51param7,
        toneBase: __s51param8
      });
    }
  };
  FireworksEasterEgg.prototype.draw = function () {
    var __s54local0 = this._shape.graphics;
    __s54local0.clear();
    for (var __s54local1 = 0; __s54local1 < this._particles.length; __s54local1++) {
      var __s54local2 = this._particles[__s54local1];
      var __s54local3 = __s54local2.life / __s54local2.maxLife;
      if (!(__s54local3 <= 0)) {
        var __s54local4 = FireworksEasterEgg.TONES[__s54local2.tone];
        var __s54local5 = FireworksEasterEgg.TONES[__s54local2.toneBase + 3];
        if (__s54local2.kind != 2) {
          var __s54local6 = Math.min(1, __s54local3 * 2.2);
          var __s54local7 = __s54local2.size * Math.max(0.4, __s54local3);
          if (__s54local2.kind == 1) {
            for (var __s54local8 = 1; __s54local8 <= 3; __s54local8++) {
              __s54local0.beginFill(__s54local4, __s54local6 * (0.5 / __s54local8)).drawCircle(__s54local2.x - __s54local2.vx * __s54local8, __s54local2.y - __s54local2.vy * __s54local8, __s54local7 * (1 - __s54local8 * 0.22));
            }
          }
          __s54local0.beginFill(__s54local4, __s54local6 * 0.3).drawCircle(__s54local2.x, __s54local2.y, __s54local7 * 2.1);
          __s54local0.beginFill(__s54local4, __s54local6).drawCircle(__s54local2.x, __s54local2.y, __s54local7);
          __s54local0.beginFill(__s54local5, __s54local6 * 0.95).drawCircle(__s54local2.x, __s54local2.y, __s54local7 * 0.45);
        } else {
          var __s54local9 = __s54local2.size * (1.6 - __s54local3);
          __s54local0.beginFill(__s54local4, __s54local3 * 0.3).drawCircle(__s54local2.x, __s54local2.y, __s54local9 * 2.1);
          __s54local0.beginFill(__s54local5, __s54local3 * 0.65).drawCircle(__s54local2.x, __s54local2.y, __s54local9);
        }
      }
    }
  };
  FireworksEasterEgg.prototype.ensureOverlay = function () {
    var __s64local0 = this.getUIStage();
    return !!__s64local0 && (this._shape || (this._shape = new __s0local1(), this._shape.name = "fireworksEasterEgg", this._shape.mouseEnabled = false), this._shape.parent != __s64local0 && __s64local0.addChild(this._shape), this._tickActive || (__s0local2.addEventListener("tick", this.bindFunction(this.onTick)), this._tickActive = true), true);
  };
  FireworksEasterEgg.prototype.dispose = function () {
    if (this._tickActive) {
      __s0local2.removeEventListener("tick", this.bindFunction(this.onTick));
      this._tickActive = false;
    }
    this._particles.length = 0;
    this._queue.length = 0;
    if (this._shape) {
      this._shape.graphics.clear();
      if (this._shape.parent) {
        this._shape.parent.removeChild(this._shape);
      }
      this._shape = null;
    }
  };
  FireworksEasterEgg.prototype.getUIStage = function () {
    var __s71local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    if (!__s71local0) {
      return null;
    }
    var __s71local1 = __s71local0.uiStage;
    if (__s71local1 && __s71local1.canvas) {
      return __s71local1;
    } else {
      return null;
    }
  };
  FireworksEasterEgg.prototype.toStagePos = function (__s76param0) {
    if (!this.getUIStage()) {
      return null;
    }
    var __s76local0 = this.getStageWidth();
    var __s76local1 = this.getStageHeight();
    var __s76local2 = new __s0local0(__s76local0 * 0.5, __s76local1 * 0.7);
    if (__s76param0 && isFinite(__s76param0.x) && isFinite(__s76param0.y)) {
      __s76local2.x = __s76param0.x;
      __s76local2.y = __s76param0.y;
    }
    __s76local2.x = Math.max(50, Math.min(__s76local0 - 50, __s76local2.x));
    __s76local2.y = Math.max(60, Math.min(__s76local1 - 20, __s76local2.y));
    return __s76local2;
  };
  FireworksEasterEgg.prototype.getStageWidth = function () {
    var __s80local0 = this.getUIStage();
    var __s80local1 = __s80local0 ? __s80local0.stageWidth : 0;
    if (!__s80local1 || !isFinite(__s80local1)) {
      __s80local1 = document.documentElement.clientWidth;
    }
    return __s80local1;
  };
  FireworksEasterEgg.prototype.getStageHeight = function () {
    var __s83local0 = this.getUIStage();
    var __s83local1 = __s83local0 ? __s83local0.stageHeight : 0;
    if (!__s83local1 || !isFinite(__s83local1)) {
      __s83local1 = document.documentElement.clientHeight;
    }
    return __s83local1;
  };
  FireworksEasterEgg.prototype.scaleAmount = function (__s86param0) {
    if (__dep_export_CastleModel.CastleModel.gfxData && !__dep_export_CastleModel.CastleModel.gfxData.animationActive) {
      return Math.round(__s86param0 * 0.5);
    } else {
      return __s86param0;
    }
  };
  FireworksEasterEgg.SPIRE_TYPES = ["ExaltedGreenFireworksSpire", "ExaltedRedFireworksSpire", "ExaltedPurpleFireworksSpire"];
  FireworksEasterEgg.CLICK_WINDOW_MS = 4000;
  FireworksEasterEgg.MAX_TRACKED_CLICKS = 32;
  FireworksEasterEgg.ROCKETS_PER_BURST = 3;
  FireworksEasterEgg.FINALE_ROCKETS = 5;
  FireworksEasterEgg.ROCKET_DELAY = 14;
  FireworksEasterEgg.ROCKET_SPACING = 110;
  FireworksEasterEgg.MIN_RISE = 260;
  FireworksEasterEgg.GRAVITY = 0.13;
  FireworksEasterEgg.DRAG = 0.972;
  FireworksEasterEgg.MAX_PARTICLES = 560;
  FireworksEasterEgg.SPARKS_PER_BURST = 80;
  FireworksEasterEgg.TONES_PER_PALETTE = 4;
  FireworksEasterEgg.TONES = [10289003, 13631400, 15466461, 16777215, 16743002, 16757664, 16768212, 16777215, 13400831, 14725375, 15916287, 16777215];
  return FireworksEasterEgg;
}();
exports.FireworksEasterEgg = __s0local3;
