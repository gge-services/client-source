Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SBoosterInfoVO = require("gge-module:export_C2SBoosterInfoVO");
var __dep_export_C2SShowPackageListVO = require("gge-module:export_C2SShowPackageListVO");
var __dep_export_UnitPackageListEvent = require("gge-module:export_UnitPackageListEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function UnitPackageList(__s3param0) {
    var __s3local0 = this;
    __s3local0._listId = 0;
    __s3local0._checkRemaingSlotTime = false;
    __s3local0._activeSlotIndex = 0;
    __s3local0._lockedSlots = 0;
    __s3local0._recruitmentMode = 0;
    __s3local0._remainingSecondsForProduction = 0;
    __s3local0.isNotKeepingCurrentRecruitmentTrack = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._listId = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitPackageList, __s1param0);
  UnitPackageList.prototype.parseList = function (__s5param0, __s5param1 = 1) {
    this._waitForUpdate = false;
    this._slots = [];
    if (__s5param0) {
      this._freeSlots = 0;
      this._useableSlots = 0;
      this._lockedSlots = 0;
      this._checkRemaingSlotTime = false;
      for (var __s5local0 = 0; __s5local0 < __s5param0.length; __s5local0++) {
        var __s5local1 = __s5param0[__s5local0];
        var __s5local2 = this.createSlotVO();
        __s5local2.fillFromParamArray(__s5local1);
        __s5local2.pos = __s5local0;
        if (__s5local2.isFree) {
          this._freeSlots++;
        }
        if (__s5local2.isLocked) {
          this._lockedSlots++;
        } else {
          this._useableSlots++;
        }
        if (__s5local2.timeTillLocked > 0) {
          this._checkRemaingSlotTime = true;
          this._nextUpdateInterval = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this._updateInterval;
        }
        this._slots.push(__s5local2);
      }
      this._slotsInUse = this._useableSlots - this._freeSlots;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_UnitPackageListEvent.UnitPackageListEvent(__dep_export_UnitPackageListEvent.UnitPackageListEvent.PACKAGE_UPDATE));
    }
  };
  UnitPackageList.prototype.parseCurrentProductionSlot = function (__s14param0) {
    this._currentProductionSlot = this.createSlotVO();
    this._currentProductionSlot.initProductionSlot();
    this._currentProductionSlot.fillFromParamObject(__s14param0);
  };
  UnitPackageList.prototype.parseMilitaryList = function (__s16param0) {
    this._waitForUpdate = false;
    this._slots = [];
    if (__s16param0) {
      this._freeSlots = 0;
      this._useableSlots = 0;
      this._lockedSlots = 0;
      this._checkRemaingSlotTime = false;
      for (var __s16local0 = 0; __s16local0 < __s16param0.length; __s16local0++) {
        var __s16local1 = __s16param0[__s16local0];
        var __s16local2 = this.createSlotVO();
        __s16local2.fillFromParamObject(__s16local1);
        __s16local2.pos = __s16local0;
        __s16local2.isCurrentlyRecruiting = false;
        if (__s16local2.isFree) {
          this._freeSlots++;
        }
        if (__s16local2.isLocked) {
          this._lockedSlots++;
        } else {
          this._useableSlots++;
        }
        if (__s16local2.timeTillLocked > 0) {
          this._checkRemaingSlotTime = true;
          this._nextUpdateInterval = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + this._updateInterval;
        }
        this._slots.push(__s16local2);
      }
      this._slotsInUse = this._useableSlots - this._freeSlots;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_UnitPackageListEvent.UnitPackageListEvent(__dep_export_UnitPackageListEvent.UnitPackageListEvent.PACKAGE_UPDATE));
    }
  };
  UnitPackageList.prototype.createSlotVO = function () {
    if (this.listId == __dep_exact_26a421b704832cff.UnitProductionConst.HOSPITAL_LIST) {
      return new __dep_export_UnitHealPackageSlotVO.UnitHealPackageSlotVO();
    } else {
      return new __dep_export_UnitPackageSlotVO.UnitPackageSlotVO();
    }
  };
  UnitPackageList.prototype.playerCanBuyNextSlot = function () {
    return __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.UnitProductionConst.UNLOCK_C2);
  };
  UnitPackageList.prototype.allSlotsBought = function () {
    return this._useableSlots >= __dep_exact_26a421b704832cff.UnitProductionConst.MAX_SLOTS;
  };
  UnitPackageList.prototype.executeUpdate = function (__s33param0) {
    if (this._slots != null) {
      for (var __s33local0 = 0, __s33local1 = this._slots; __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2 !== undefined) {
          if (__s33param0 > __s33local2.lockTimestamp && __s33local2.isFree) {
            this.getFreshBuildListFromServer();
            this._checkRemaingSlotTime = false;
            return;
          }
          if (__s33local2.isCurrentlyRecruiting && !this._waitForUpdate) {
            __s33local2.update();
          }
        }
      }
    }
  };
  UnitPackageList.prototype.getFreshBuildListFromServer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(this._listId));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBoosterInfoVO.C2SBoosterInfoVO());
  };
  Object.defineProperty(UnitPackageList.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "activeSlotIndex", {
    get: function () {
      return this._activeSlotIndex;
    },
    set: function (__s47param0) {
      this._activeSlotIndex = __s47param0;
      this.updateSlotState();
    },
    enumerable: true,
    configurable: true
  });
  UnitPackageList.prototype.updateSlotState = function () {
    if (!this.isNotKeepingCurrentRecruitmentTrack) {
      for (var __s49local0 = 0; __s49local0 < this._slots.length; __s49local0++) {
        this._slots[__s49local0].isCurrentlyRecruiting = __s49local0 == this._activeSlotIndex;
      }
    }
  };
  Object.defineProperty(UnitPackageList.prototype, "numFreeSlots", {
    get: function () {
      return this._freeSlots;
    },
    enumerable: true,
    configurable: true
  });
  UnitPackageList.prototype.meetsLoopingRequirements = function () {
    if (this.slotsInUse == 0) {
      return false;
    }
    var __s56local0 = true;
    if (this._slots != null) {
      for (var __s56local1 = 0, __s56local2 = this._slots; __s56local1 < __s56local2.length; __s56local1++) {
        var __s56local3 = __s56local2[__s56local1];
        if (__s56local3 !== undefined) {
          if (__s56local3.isLocked || __s56local3.isFree || !__s56local0) {
            break;
          }
          __s56local0 = __s56local3.hasLoopableUnitAmount;
        }
      }
    }
    return __s56local0;
  };
  Object.defineProperty(UnitPackageList.prototype, "lockedSlots", {
    get: function () {
      return this._lockedSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "currentProductionSlot", {
    get: function () {
      return this._currentProductionSlot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "recruitmentMode", {
    get: function () {
      return this._recruitmentMode;
    },
    set: function (__s70param0) {
      this._recruitmentMode = __s70param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "remainingSecondsForProduction", {
    get: function () {
      return this._remainingSecondsForProduction;
    },
    set: function (__s74param0) {
      this._remainingSecondsForProduction = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  return UnitPackageList;
}(require("gge-module:export_BasicBuildList").BasicBuildList);
exports.UnitPackageList = __s0local0;
var __dep_export_UnitHealPackageSlotVO = require("gge-module:export_UnitHealPackageSlotVO");
var __dep_export_UnitPackageSlotVO = require("gge-module:export_UnitPackageSlotVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "IBuildList");
