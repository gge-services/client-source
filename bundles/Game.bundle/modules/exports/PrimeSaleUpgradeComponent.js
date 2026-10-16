Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function PrimeSaleUpgradeComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._upgradeChain = [];
    __s3local0._preUpgradeChain = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this).checkForDuplicateEntries();
    __s3local0.fillUpgradeChain();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrimeSaleUpgradeComponent, __s1param0);
  PrimeSaleUpgradeComponent.prototype.fillUpgradeChain = function () {
    if (this._buildingVOs != null) {
      for (var __s5local0 = 0, __s5local1 = this._buildingVOs; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          this._preUpgradeChain.push(__dep_export_CastleModel.CastleModel.wodData.getHighestUpgradeForBuilding(__s5local2.wodId));
        }
      }
    }
    if (this._preUpgradeChain != null) {
      for (var __s5local3 = 0, __s5local4 = this._preUpgradeChain; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined) {
          this._upgradeChain.push(__s5local5);
          for (var __s5local6 = __s5local5.getDowngradeVO(); __s5local6;) {
            this._upgradeChain.push(__s5local6);
            if (__s5local6.costC2 > 0) {
              this.replaceBuildingFromActiveKingdom(__s5local6);
              __s5local6 = __s5local6.getDowngradeVO();
            } else {
              __s5local6 = null;
            }
          }
        }
      }
    }
    if (this._preUpgradeChain != null) {
      for (var __s5local7 = 0, __s5local8 = this._preUpgradeChain; __s5local7 < __s5local8.length; __s5local7++) {
        var __s5local9 = __s5local8[__s5local7];
        if (__s5local9 !== undefined) {
          this._upgradeChain.push(__s5local9);
          for (var __s5local10 = __s5local9.getUpgradeVO(); __s5local10;) {
            this._upgradeChain.push(__s5local10);
            if (__s5local10.costC2 > 0) {
              this.replaceBuildingFromActiveKingdom(__s5local10);
              __s5local10 = __s5local10.getUpgradeVO();
            } else {
              __s5local10 = null;
            }
          }
        }
      }
    }
  };
  PrimeSaleUpgradeComponent.prototype.getFinalPriceC2ForNextUpgrade = function (__s27param0) {
    var __s27local0 = (100 - this.discount) / 100;
    if (__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive) {
      __s27local0 = Math.max(__s27local0, 1 - __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.factor_C2);
    }
    return Math.max(1, Math.ceil(__s27param0.basicCostC2 * __s27local0));
  };
  Object.defineProperty(PrimeSaleUpgradeComponent.prototype, "upgradeChain", {
    get: function () {
      return this._upgradeChain;
    },
    enumerable: true,
    configurable: true
  });
  PrimeSaleUpgradeComponent.prototype.upgradeChainContainsWodID = function (__s32param0) {
    if (this._upgradeChain != null) {
      for (var __s32local0 = 0, __s32local1 = this._upgradeChain; __s32local0 < __s32local1.length; __s32local0++) {
        var __s32local2 = __s32local1[__s32local0];
        if (__s32local2 !== undefined && __s32local2.wodId == __s32param0) {
          return true;
        }
      }
    }
    return false;
  };
  PrimeSaleUpgradeComponent.prototype.getFinalPriceForShopVO = function (__s38param0) {
    var __s38local0 = (100 - this.discount) / 100;
    if (__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive) {
      __s38local0 = Math.max(__s38local0, 1 - __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.factor_C2);
    }
    return Math.max(1, Math.ceil(__s38param0.basicCostC2 * __s38local0));
  };
  PrimeSaleUpgradeComponent.prototype.replaceBuildingFromActiveKingdom = function (__s41param0) {
    for (var __s41local0 = 0; __s41local0 < this._upgradeChain.length;) {
      if (this._upgradeChain[__s41local0].isAvailableByKingdomId(this.activeKingdom()) && __dep_exact_81dacdf05bd32292.getQualifiedClassName(this._upgradeChain[__s41local0]) == __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s41param0)) {
        this._upgradeChain[__s41local0] = __s41param0;
        return true;
      }
      __s41local0++;
    }
    return false;
  };
  return PrimeSaleUpgradeComponent;
}(require("gge-module:export_PrimeSaleComponent").PrimeSaleComponent);
exports.PrimeSaleUpgradeComponent = __s0local0;
