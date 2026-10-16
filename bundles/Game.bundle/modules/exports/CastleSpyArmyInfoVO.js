Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSpyArmyInfoVO() {
    this._timeSinceSpying = 0;
    this._getInfoTimestamp = 0;
  }
  CastleSpyArmyInfoVO.prototype.parseArmyInfo = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    if (__s5param0 && __s5param0.length != 0) {
      this._itemsLeft = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._itemsMiddle = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._itemsRight = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._itemsKeep = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._itemsReserve = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._itemsStronghold = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._itemsSupport = new __dep_export_UnitInventoryList.UnitInventoryList();
      this._legendSkills = [];
      this._itemsStronghold.isStrongholdInventory = true;
      this._itemsLeft.fillFromWodAmountArray(__s5param0.shift());
      this._itemsMiddle.fillFromWodAmountArray(__s5param0.shift());
      this._itemsRight.fillFromWodAmountArray(__s5param0.shift());
      this._itemsKeep.fillFromWodAmountArray(__s5param0.shift());
      this._itemsStronghold.fillFromWodAmountArray(__s5param0.shift());
      this._itemsSupport.fillFromWodAmountArray(__s5param0.shift());
      if (__s5param0.length > 0) {
        this._itemsReserve.fillFromWodAmountArray(__s5param0.shift());
      }
      this._timeSinceSpying = __s5param1;
      this._getInfoTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
      this._legendSkills = __s5param3;
      this._defendingLord = __dep_export_LordFactory.LordFactory.createLord(__s5param2, true, true);
    } else {
      this._timeSinceSpying = -1;
    }
  };
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "spyInfoAgeInSeconds", {
    get: function () {
      return this._timeSinceSpying + (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._getInfoTimestamp) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "remainingSpyInfoTime", {
    get: function () {
      if (this._timeSinceSpying == -1) {
        return 0;
      } else {
        return Math.max(0, -this.spyInfoAgeInSeconds + __dep_exact_26a421b704832cff.SpyConst.SPY_VALIDITY);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsLeft", {
    get: function () {
      return this._itemsLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsMiddle", {
    get: function () {
      return this._itemsMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsRight", {
    get: function () {
      return this._itemsRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsKeep", {
    get: function () {
      return this._itemsKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsReserve", {
    get: function () {
      return this._itemsReserve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsStronghold", {
    get: function () {
      return this._itemsStronghold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsSupport", {
    get: function () {
      return this._itemsSupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "totalMilitarySoldierCount", {
    get: function () {
      return this._itemsLeft.getSoldierCount() + this._itemsMiddle.getSoldierCount() + this._itemsRight.getSoldierCount() + this._itemsKeep.getSoldierCount() + this._itemsStronghold.getSoldierCount() - this.getTotalCountByWOD(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_MILITIA_WOD) - this.getTotalCountByWOD(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_PEASANT_WOD) + this.getTotalCountByWOD(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_UNKNOWNSOLDIER_WOD);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "totalMilitaryDefenceToolCount", {
    get: function () {
      return this._itemsLeft.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsMiddle.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsRight.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsKeep.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsSupport.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this.getTotalCountByWOD(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_UNKNOWNTOOLS_WOD);
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyArmyInfoVO.prototype.getTotalCountByWOD = function (__s34param0) {
    var __s34local0 = this._itemsLeft.getUnitCountByWodId(__s34param0);
    __s34local0 += this._itemsMiddle.getUnitCountByWodId(__s34param0);
    __s34local0 += this._itemsRight.getUnitCountByWodId(__s34param0);
    __s34local0 += this._itemsKeep.getUnitCountByWodId(__s34param0);
    __s34local0 += this._itemsStronghold.getUnitCountByWodId(__s34param0);
    return __s34local0 += this._itemsSupport.getUnitCountByWodId(__s34param0);
  };
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "defendingLord", {
    get: function () {
      return this._defendingLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "defenderSkills", {
    get: function () {
      return this._legendSkills;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "totalWallSoldierCount", {
    get: function () {
      return this._itemsLeft.getSoldierCount() + this._itemsMiddle.getSoldierCount() + this._itemsRight.getSoldierCount();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyArmyInfoVO;
}();
exports.CastleSpyArmyInfoVO = __s0local0;
var __dep_export_LordFactory = require("gge-module:export_LordFactory");
var __dep_export_UnitInventoryList = require("gge-module:export_UnitInventoryList");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
