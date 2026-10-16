Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSlotVO = require("gge-module:export_BasicSlotVO");
var __dep_export_UnitPackageSlotVO = require("gge-module:export_UnitPackageSlotVO");
var __s0local0 = function (__s1param0) {
  function UnitHealPackageSlotVO() {
    var __s3local0 = this;
    __s3local0._healTimeReduction = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitHealPackageSlotVO, __s1param0);
  UnitHealPackageSlotVO.prototype.fillFromParamArray = function (__s5param0) {
    this._wodId = __s5param0.shift();
    this._amount = __s5param0.shift();
    this._remainingTime = __s5param0.shift();
    this._recruitmentSpeedAtStart = __s5param0.shift() / 100;
    this._healTimeReduction = __s5param0.shift();
    this._recruitmentID = __s5param0.shift();
    this._timeTillLocked = __s5param0.shift();
    this._unitReadyTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this._remainingTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.setLockTimestamp();
    this._isFree = this._wodId == __dep_exact_26a421b704832cff.ConstructionConst.SLOTSTATEUNLOCKED;
    this._isLocked = this._wodId == __dep_exact_26a421b704832cff.ConstructionConst.SLOTSTATELOCKED;
  };
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "healTimeReduction", {
    get: function () {
      return this._healTimeReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "healingReadyInPercent", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingTimeInSeconds / this.healingTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "healingTime", {
    get: function () {
      if (this.wodId > 0) {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.wodId).basicHealingTime * this._amount / this._recruitmentSpeedAtStart - this.healTimeReduction;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "unitReadyInPercent", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingTimeInSeconds / this.productionTime));
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitPackageSlotVO.UnitPackageSlotVO.prototype, "unitReadyInPercent").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "isCurrentlyRecruiting", {
    get: function () {
      return this._amount > 0 && this.isFirst;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSlotVO.BasicSlotVO.prototype, "isCurrentlyRecruiting").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  return UnitHealPackageSlotVO;
}(__dep_export_UnitPackageSlotVO.UnitPackageSlotVO);
exports.UnitHealPackageSlotVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISlotVO", "IEventDispatcher");
