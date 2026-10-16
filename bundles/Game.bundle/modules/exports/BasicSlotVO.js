Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function BasicSlotVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._timeTillLocked = 0;
    __s3local0._lockTimestamp = NaN;
    __s3local0._isCurrentlyRecruiting = false;
    __s3local0._pos = 0;
    __s3local0.isLockedProductionSlot = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicSlotVO, __s1param0);
  BasicSlotVO.prototype.fillFromParamObject = function (__s5param0) {};
  BasicSlotVO.prototype.fillFromParamArray = function (__s7param0) {};
  BasicSlotVO.prototype.setLockTimestamp = function () {
    if (this._timeTillLocked > 0) {
      this._lockTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this._timeTillLocked + 1) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    } else {
      this._lockTimestamp = Number.MAX_VALUE;
    }
  };
  Object.defineProperty(BasicSlotVO.prototype, "remainingUnlockTimeInSeconds", {
    get: function () {
      return (this._lockTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isAlwaysUnlocked", {
    get: function () {
      return this._timeTillLocked == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "lockTimestamp", {
    get: function () {
      return this._lockTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "timeTillLocked", {
    get: function () {
      return this._timeTillLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isFirst", {
    get: function () {
      return this.pos == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (__s25param0) {
      this._pos = __s25param0;
      this._isCurrentlyRecruiting = this._pos == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isFree", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isLocked", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isCurrentlyRecruiting", {
    get: function () {
      return this._isCurrentlyRecruiting;
    },
    set: function (__s33param0) {
      this._isCurrentlyRecruiting = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSlotVO;
}(require("gge-module:export_CastleEventDispatcher").CastleEventDispatcher);
exports.BasicSlotVO = __s0local0;
