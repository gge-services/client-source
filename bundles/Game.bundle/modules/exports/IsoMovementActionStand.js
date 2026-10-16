Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_IsoMovementActionEnum = require("gge-module:export_IsoMovementActionEnum");
var __dep_export_AIsoMovementAction = require("gge-module:export_AIsoMovementAction");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoMovementActionStand(__s3param0, __s3param1, __s3param2 = -1, __s3param3 = false, __s3param4 = false, __s3param5 = 1000) {
    var __s3local0 = this;
    __s3local0._standPos = new __s0local0();
    __s3local0._duration = 0;
    __s3local0._rotation = 0;
    __s3local0._startTime = NaN;
    __s3local0._fadeDuration = NaN;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param3, __s3param4) || this)._standPos.x = __s3param0.x;
    __s3local0._standPos.y = __s3param0.y;
    __s3local0._rotation = __s3param2;
    __s3local0._duration = __s3param1;
    __s3local0._fadeDuration = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoMovementActionStand, __s1param0);
  IsoMovementActionStand.prototype.start = function () {
    this.movementVO.changePos(this.standPos.x, this.standPos.y);
    if (this.rotation >= 0) {
      this.movementVO.rotation = this.rotation;
    }
    this._startTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    this.updateFading();
  };
  IsoMovementActionStand.prototype.update = function (__s8param0) {
    __s1param0.prototype.update.call(this, __s8param0);
    if (__s8param0 >= this.startTime + this.duration) {
      this.onActionDone();
    }
  };
  Object.defineProperty(IsoMovementActionStand.prototype, "actionType", {
    get: function () {
      return __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.STAND;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoMovementAction.AIsoMovementAction.prototype, "actionType").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "standPos", {
    get: function () {
      return this._standPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "startTime", {
    get: function () {
      return this._startTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "rotation", {
    get: function () {
      return this._rotation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "fadeDuration", {
    get: function () {
      return this._fadeDuration;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementActionStand;
}(__dep_export_AIsoMovementAction.AIsoMovementAction);
exports.IsoMovementActionStand = __s0local1;
