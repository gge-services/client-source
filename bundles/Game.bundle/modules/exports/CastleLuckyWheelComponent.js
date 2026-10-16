Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = function (__s1param0) {
  function CastleLuckyWheelComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.currentDegrees = 0;
    __s3local0.lastUpdateTime = -1;
    __s3local0.acceleration = 0;
    __s3local0._wantedSpeed = 0;
    __s3local0.isAccelerating = false;
    __s3local0.accelerationDistance = NaN;
    __s3local0.accelerationTime = NaN;
    __s3local0._currentSpeedInDegrees = 0;
    __s3local0.disp = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelComponent, __s1param0);
  CastleLuckyWheelComponent.prototype.changeWheel = function (__s5param0) {
    this.disp = __s5param0;
  };
  Object.defineProperty(CastleLuckyWheelComponent.prototype, "currentSpeedInDegrees", {
    get: function () {
      return this._currentSpeedInDegrees;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelComponent.prototype, "wheelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelComponent.prototype.accelerateWheel = function (__s11param0, __s11param1) {
    this._wantedSpeed = __s11param0 * CastleLuckyWheelComponent.SPIN_TIMES_ONE;
    if (this._wantedSpeed != this._currentSpeedInDegrees) {
      this.currentDegrees = this.currentDegrees % CastleLuckyWheelComponent.SPIN_TIMES_ONE;
      this.isAccelerating = true;
      var __s11local0 = __s11param1 - this.currentDegrees;
      if (__s11local0 <= CastleLuckyWheelComponent.SPIN_TIMES_HALF && __s11local0 >= -CastleLuckyWheelComponent.SPIN_TIMES_HALF) {
        __s11local0 += CastleLuckyWheelComponent.SPIN_TIMES_ONE;
      } else if (__s11local0 < -CastleLuckyWheelComponent.SPIN_TIMES_HALF) {
        __s11local0 += CastleLuckyWheelComponent.SPIN_TIMES_TWO;
      }
      this.acceleration = (this._wantedSpeed - this._currentSpeedInDegrees) / (__s11local0 * 2);
      this.accelerationDistance = __s11param1;
      this.accelerationTime = (this._wantedSpeed - this._currentSpeedInDegrees) / (this.acceleration * CastleLuckyWheelComponent.SPIN_TIMES_ONE);
      this.lastUpdateTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      if (!this.wheelUpdateTimer) {
        this.wheelUpdateTimer = new __dep_exact_81dacdf05bd32292.Timer(1000 / 30);
        this.wheelUpdateTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdateWheel));
        this.wheelUpdateTimer.start();
      }
    }
  };
  CastleLuckyWheelComponent.prototype.launchWheelWithCountDown = function (__s17param0, __s17param1, __s17param2) {
    this._wantedSpeed = __s17param0 * CastleLuckyWheelComponent.SPIN_TIMES_ONE;
    this.currentDegrees = this.currentDegrees == 0 ? __s17param1 : this.currentDegrees;
    this.isAccelerating = false;
    this.lastUpdateTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    this._currentSpeedInDegrees = this._wantedSpeed;
    if (!this.buttonEnabledTimer) {
      this.buttonEnabledTimer = new __dep_exact_81dacdf05bd32292.Timer(__s17param2, 0);
      this.buttonEnabledTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onEnabledCountDownFinished));
      this.buttonEnabledTimer.start();
    }
    if (!this.wheelUpdateTimer) {
      this.wheelUpdateTimer = new __dep_exact_81dacdf05bd32292.Timer(1000 / 30);
      this.wheelUpdateTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdateWheel));
      this.wheelUpdateTimer.start();
    }
  };
  CastleLuckyWheelComponent.prototype.updateMovement = function () {
    var __s21local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    var __s21local1 = (__s21local0 - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = __s21local0;
    var __s21local2 = this._currentSpeedInDegrees * __s21local1;
    this.currentDegrees += __s21local2;
    this.currentDegrees = this.currentDegrees % CastleLuckyWheelComponent.SPIN_TIMES_ONE;
    this.wheelDisp.rotation = this.currentDegrees;
    if (this._currentSpeedInDegrees == 0) {
      this.destroyUpdateTimer();
    }
  };
  CastleLuckyWheelComponent.prototype.destroyUpdateTimer = function () {
    if (this.wheelUpdateTimer) {
      this.wheelUpdateTimer.stop();
      this.wheelUpdateTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onUpdateWheel));
      this.wheelUpdateTimer = null;
    }
  };
  CastleLuckyWheelComponent.prototype.updateAcceleratedMovement = function () {
    var __s27local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    var __s27local1 = (__s27local0 - this.lastUpdateTime) / 1000;
    var __s27local2 = this._currentSpeedInDegrees * __s27local1 + this.currentDegrees + this.acceleration * 0.5 * CastleLuckyWheelComponent.SPIN_TIMES_ONE * (__s27local1 * __s27local1);
    if (__s27local1 > this.accelerationTime) {
      this.currentDegrees = this.accelerationDistance;
      this.isAccelerating = false;
      this.lastUpdateTime = __s27local0;
      this._currentSpeedInDegrees = this._wantedSpeed;
      this.dispatchEvent(new __s0local0(CastleLuckyWheelComponent.SPEED_REACHED, false, false));
    }
    this.wheelDisp.rotation = __s27local2;
  };
  CastleLuckyWheelComponent.prototype.onEnabledCountDownFinished = function (__s30param0) {
    this.dispatchEvent(new __s0local0(CastleLuckyWheelComponent.SPEED_REACHED, false, false));
    if (this.buttonEnabledTimer) {
      this.buttonEnabledTimer.stop();
      this.buttonEnabledTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onEnabledCountDownFinished));
      this.buttonEnabledTimer = null;
    }
  };
  CastleLuckyWheelComponent.prototype.onUpdateWheel = function (__s33param0) {
    if (this.isAccelerating) {
      this.updateAcceleratedMovement();
    } else {
      this.updateMovement();
    }
  };
  CastleLuckyWheelComponent.prototype.destroy = function () {
    this.destroyUpdateTimer();
  };
  CastleLuckyWheelComponent.__initialize_static_members = function () {
    CastleLuckyWheelComponent.SPEED_REACHED = "speed_reached";
    CastleLuckyWheelComponent.SPIN_TIMES_HALF = 180;
    CastleLuckyWheelComponent.SPIN_TIMES_ONE = 360;
    CastleLuckyWheelComponent.SPIN_TIMES_TWO = 720;
  };
  return CastleLuckyWheelComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleLuckyWheelComponent = __s0local2;
__s0local2.__initialize_static_members();
