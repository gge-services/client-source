Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_IsoMovementActionEnum = require("gge-module:export_IsoMovementActionEnum");
var __dep_export_AIsoMovementAction = require("gge-module:export_AIsoMovementAction");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoMovementActionWork(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._workPos = new __s0local0();
    __s3local0._duration = 0;
    __s3local0._startTime = NaN;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param2, __s3param3) || this)._workPos.x = __s3param0.x;
    __s3local0._workPos.y = __s3param0.y;
    __s3local0._duration = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoMovementActionWork, __s1param0);
  IsoMovementActionWork.prototype.start = function () {
    this.movementVO.changePos(this.workPos.x, this.workPos.y);
    this.movementVO.rotation = 0;
    this._startTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    if (this.willFadeIn) {
      this.fadeIn();
    }
  };
  IsoMovementActionWork.prototype.update = function (__s8param0) {
    __s1param0.prototype.update.call(this, __s8param0);
    if (__s8param0 >= this.startTime + this.duration) {
      this.onActionDone();
    }
  };
  Object.defineProperty(IsoMovementActionWork.prototype, "actionType", {
    get: function () {
      return __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.WORK;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoMovementAction.AIsoMovementAction.prototype, "actionType").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWork.prototype, "workPos", {
    get: function () {
      return this._workPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWork.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWork.prototype, "startTime", {
    get: function () {
      return this._startTime;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementActionWork;
}(__dep_export_AIsoMovementAction.AIsoMovementAction);
exports.IsoMovementActionWork = __s0local1;
