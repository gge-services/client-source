Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __s0local0 = function () {
  function AFillFlankStrategy() {
    this.fillToolStrategyPool();
  }
  AFillFlankStrategy.prototype.fillFlankWithTools = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5, __s5param6) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.items; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined && __s5local2 && __s5local2.isFree() && __s5local2.isUnlocked() && __s5param3.getToolCount() > 0 && __s5param0.freeItems > 0) {
        for (var __s5local3 = false; !__s5local3 && this._toolStrategyPool.length > 0;) {
          var __s5local4 = this._toolStrategyPool[this._toolStrategyPool.length - 1].pickToolByStrategy(__s5param1, __s5param2, __s5param3, __s5param0.freeItems, __s5param4, __s5param5, __s5param0, __s5param6);
          if (__s5local4 && __s5local4.isToolForSlotType(__s5local2.slotType)) {
            if (__s5param0.getTotalAmountOfUntit(__s5local4) > 0) {
              (__s5local2 = __s5param0.getAllSlotsWithUnit(__s5local4)[0]).unitVO.inventoryAmount += __s5local4.inventoryAmount;
            } else {
              __s5local2.unitVO = __s5local4;
            }
            if (__s5param1) {
              __s5param1.updateEffectsWithNewTool(__s5local4, __s5param5);
            }
            __s5local3 = true;
          } else {
            this._toolStrategyPool.pop();
            __s5local3 = false;
          }
        }
        if (!__s5local3) {
          break;
        }
      }
    }
    return true;
  };
  AFillFlankStrategy.prototype.fillFlankWithSoldiers = function (__s18param0, __s18param1, __s18param2, __s18param3, __s18param4) {
    for (var __s18local0 = 0; __s18local0 < __s18param0.items.length; __s18local0++) {
      var __s18local1 = __s18param0.items[__s18local0];
      if (__s18local1.isFree() && __s18local1.isUnlocked() && __s18param3.getSoldierCount() > 0 && __s18param0.freeItems > 0) {
        var __s18local2 = this.pickSoldierStack(__s18param0, __s18param1, __s18param2, __s18param3, __s18param4);
        if (!__s18local2) {
          break;
        }
        __s18param0.items[__s18local0].unitVO = __s18local2;
      }
    }
    return true;
  };
  AFillFlankStrategy.prototype.checkFlank = function (__s24param0, __s24param1, __s24param2) {
    if (__s24param1.sumOfItems == 0) {
      for (var __s24local0 = 0, __s24local1 = __s24param0.items; __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2 !== undefined) {
          if (!__s24local2.isFree()) {
            __s24param2.addUnit(__s24local2.unitVO.wodId, __s24local2.getAmount());
            __s24local2.unitVO = null;
          }
        }
      }
      return false;
    }
    return true;
  };
  AFillFlankStrategy.prototype.pickSoldierStack = function (__s31param0, __s31param1, __s31param2, __s31param3, __s31param4) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AFillFlankStrategy.prototype.fillToolStrategyPool = function () {
    this._toolStrategyPool = [];
    this._toolStrategyPool.push(new __dep_export_ReduceMoatBonusStrategy.ReduceMoatBonusStrategy());
    this._toolStrategyPool.push(new __dep_export_ReduceRangeBonusStrategy.ReduceRangeBonusStrategy());
    this._toolStrategyPool.push(new __dep_export_ReduceMeleeBonusStrategy.ReduceMeleeBonusStrategy());
    this._toolStrategyPool.push(new __dep_export_ReduceGateBonusStrategy.ReduceGateBonusStrategy());
    this._toolStrategyPool.push(new __dep_export_ReduceWallBonusStrategy.ReduceWallBonusStrategy());
  };
  return AFillFlankStrategy;
}();
exports.AFillFlankStrategy = __s0local0;
var __dep_export_ReduceGateBonusStrategy = require("gge-module:export_ReduceGateBonusStrategy");
var __dep_export_ReduceMoatBonusStrategy = require("gge-module:export_ReduceMoatBonusStrategy");
var __dep_export_ReduceRangeBonusStrategy = require("gge-module:export_ReduceRangeBonusStrategy");
var __dep_export_ReduceMeleeBonusStrategy = require("gge-module:export_ReduceMeleeBonusStrategy");
var __dep_export_ReduceWallBonusStrategy = require("gge-module:export_ReduceWallBonusStrategy");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillFlankStrategy");
