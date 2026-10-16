Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleSlotVOEvent = require("gge-module:export_CastleSlotVOEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSlotVO = require("gge-module:export_BasicSlotVO");
var __s0local0 = function (__s1param0) {
  function UnitPackageSlotVO() {
    var __s3local0 = this;
    __s3local0._wodId = 0;
    __s3local0._amount = 0;
    __s3local0._remainingTime = 0;
    __s3local0._unitReadyTimeStamp = 0;
    __s3local0._boostAmount = 0;
    __s3local0._helpAmount = 0;
    __s3local0._recruitmentSpeedAtStart = 0;
    __s3local0._recruitmentID = 0;
    __s3local0._isVIP = false;
    __s3local0._productionTime = 0;
    __s3local0._isFree = false;
    __s3local0._isLocked = false;
    __s3local0._sourceRecruitmentID = 0;
    __s3local0._receivedAllianceHelp = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitPackageSlotVO, __s1param0);
  UnitPackageSlotVO.prototype.fillFromParamObject = function (__s5param0) {
    var __s5local0 = false;
    if (__s5param0 && __s5param0.ICT) {
      this._wodId = __dep_exact_f855840627e6e145.int(__s5param0.WID);
      this._amount = __dep_exact_f855840627e6e145.int(__s5param0.TUA);
      this._boostAmount = __dep_exact_f855840627e6e145.int(__s5param0.CBS);
      __s5local0 = !!__s5param0.RAH;
      this._receivedAllianceHelp = Boolean(__s5local0);
      this._recruitmentID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
      this._remainingTime = __dep_exact_f855840627e6e145.int(__s5param0.RCT);
      this._productionTime = __dep_exact_f855840627e6e145.int(__s5param0.ICT);
      this._sourceRecruitmentID = __dep_exact_f855840627e6e145.int(__s5param0.SPID);
      this._isFree = false;
      this._isCurrentlyRecruiting = true;
    }
    if (__s5param0 && __s5param0.P) {
      this._wodId = __dep_exact_f855840627e6e145.int(__s5param0.P.WID);
      this._amount = __dep_exact_f855840627e6e145.int(__s5param0.P.TUA);
      this._boostAmount = __dep_exact_f855840627e6e145.int(__s5param0.P.CBS);
      __s5local0 = !!__s5param0.P.RAH;
      this._receivedAllianceHelp = Boolean(__s5local0);
      this._recruitmentID = __dep_exact_f855840627e6e145.int(__s5param0.P.PID);
    }
    if (__s5param0 && __s5param0.SI) {
      this._timeTillLocked = this.amount <= 0 ? __s5param0.SI.RUT : -1;
      __s5local0 = !!__s5param0.SI.VIP;
      this._isVIP = Boolean(__s5local0);
      this._isLocked = this._timeTillLocked == 0;
      this._isFree = !this._isLocked && this.amount <= 0;
    }
    this._unitReadyTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this._remainingTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.setLockTimestamp();
  };
  UnitPackageSlotVO.prototype.initProductionSlot = function () {
    this._timeTillLocked = -1;
    this._isLocked = false;
    this._isFree = !this._isLocked;
    this._isVIP = false;
  };
  UnitPackageSlotVO.prototype.fillFromParamArray = function (__s12param0) {
    this._wodId = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._amount = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._remainingTime = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._recruitmentSpeedAtStart = __s12param0.shift() / 100;
    this._boostAmount = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._helpAmount = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._recruitmentID = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._productionTime = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._timeTillLocked = __s12param0.shift();
    var __s12local0 = __dep_exact_f855840627e6e145.int(__s12param0.shift());
    this._isVIP = Boolean(__s12local0);
    this._isFree = this._wodId == __dep_exact_26a421b704832cff.ConstructionConst.SLOTSTATEUNLOCKED;
    this._isLocked = this._wodId == __dep_exact_26a421b704832cff.ConstructionConst.SLOTSTATELOCKED;
    this._unitReadyTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this._remainingTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.setLockTimestamp();
  };
  UnitPackageSlotVO.prototype.update = function () {
    this._castleSlotVOEvent ||= new __dep_export_CastleSlotVOEvent.CastleSlotVOEvent(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE);
    this.dispatchEvent(this._castleSlotVOEvent);
  };
  Object.defineProperty(UnitPackageSlotVO.prototype, "isFree", {
    get: function () {
      return this._isFree;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSlotVO.BasicSlotVO.prototype, "isFree").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSlotVO.BasicSlotVO.prototype, "isLocked").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "isVIP", {
    get: function () {
      return this._isVIP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "unitReadyTimeStamp", {
    get: function () {
      return this._unitReadyTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      if (this.isCurrentlyRecruiting) {
        return Math.ceil(this._unitReadyTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      } else {
        return this._remainingTime;
      }
    },
    enumerable: true,
    configurable: true
  });
  UnitPackageSlotVO.prototype.isReady = function () {
    return __dep_export_CachedTimer.CachedTimer.getCachedTimer() > this._unitReadyTimeStamp;
  };
  Object.defineProperty(UnitPackageSlotVO.prototype, "numOfBoost", {
    get: function () {
      return this._boostAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "unitReadyInPercent", {
    get: function () {
      return Math.max(0, Math.min(1, this.remainingTimeInSeconds / this.productionTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "productionTime", {
    get: function () {
      return this._productionTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "unitVO", {
    get: function () {
      if (this.wodId > 0) {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.wodId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "recruitmentID", {
    get: function () {
      return this._recruitmentID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "helpAmount", {
    get: function () {
      return this._helpAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "hasLoopableUnitAmount", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "sourceRecruitmentID", {
    get: function () {
      return this._sourceRecruitmentID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "isCurrentlyRecruiting", {
    get: function () {
      return this._isCurrentlyRecruiting;
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSlotVO.BasicSlotVO.prototype, "isCurrentlyRecruiting").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "receivedAllianceHelp", {
    get: function () {
      return this._receivedAllianceHelp;
    },
    enumerable: true,
    configurable: true
  });
  return UnitPackageSlotVO;
}(__dep_export_BasicSlotVO.BasicSlotVO);
exports.UnitPackageSlotVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISlotVO", "IEventDispatcher");
