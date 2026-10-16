Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("createjs.ts Extensions");
var __s0local1 = function () {
  function PrimeSaleComponent(__s3param0, __s3param1) {
    this._discount = 0;
    this._wodIDs = __s3param0;
    this._discount = __s3param1;
    this._buildingVOs = [];
    if (__s3param0 != null) {
      for (var __s3local0 = 0, __s3local1 = __s3param0; __s3local0 < __s3local1.length; __s3local0++) {
        var __s3local2 = __s3local1[__s3local0];
        if (__s3local2 !== undefined) {
          this._buildingVOs.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s3local2, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
        }
      }
    }
  }
  Object.defineProperty(PrimeSaleComponent.prototype, "finalePriceC2", {
    get: function () {
      var __s9local0 = (100 - this.discount) / 100;
      if (__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive) {
        __s9local0 = Math.max(__s9local0, 1 - __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.factor_C2);
      }
      return Math.max(1, Math.ceil(this.buildingVOForKingdom.costC2 * __s9local0));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "wodID", {
    get: function () {
      return this.wodIDForKingdom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "buildingVO", {
    get: function () {
      return this.buildingVOForKingdom;
    },
    enumerable: true,
    configurable: true
  });
  PrimeSaleComponent.prototype.getFinalPriceForShopVO = function (__s18param0) {
    return this.finalePriceC2;
  };
  PrimeSaleComponent.prototype.isAvailableInKingdom = function () {
    return this.buildingVOForKingdom != null;
  };
  Object.defineProperty(PrimeSaleComponent.prototype, "wodIDForKingdom", {
    get: function () {
      var __s22local0 = this.buildingVOForKingdom;
      if (__s22local0) {
        return __s22local0.wodId;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "buildingVOForKingdom", {
    get: function () {
      var __s26local0;
      if (this._buildingVOs != null) {
        for (var __s26local1 = 0, __s26local2 = this._buildingVOs; __s26local1 < __s26local2.length; __s26local1++) {
          var __s26local3 = __s26local2[__s26local1];
          if (__s26local3 !== undefined && __s26local3 && __s26local3.isAvailableByKingdomId(this.activeKingdom()) && (!__s26local0 || __s26local3.level < __s26local0.level)) {
            __s26local0 = __s26local3;
          }
        }
      }
      return __s26local0 || (this._buildingVOs.length == 1 ? this._buildingVOs[0] : null);
    },
    enumerable: true,
    configurable: true
  });
  PrimeSaleComponent.prototype.activeKingdom = function () {
    var __s32local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    if (__s32local0 < 0) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    } else {
      return __s32local0;
    }
  };
  PrimeSaleComponent.prototype.checkForDuplicateEntries = function () {
    var __s36local0 = [];
    for (var __s36local1 = __dep_exact_f855840627e6e145.int(__dep_export_KingdomEnum.KingdomEnum.UNDERWORLD.id); __s36local1 >= 0;) {
      __s36local0.push(0);
      __s36local1--;
    }
    if (this._buildingVOs != null) {
      for (var __s36local2 = 0, __s36local3 = this._buildingVOs; __s36local2 < __s36local3.length; __s36local2++) {
        var __s36local4 = __s36local3[__s36local2];
        if (__s36local4 !== undefined) {
          for (var __s36local5 = 0, __s36local6 = __s36local4.onlyInKingdomIds; __s36local5 < __s36local6.length; __s36local5++) {
            var __s36local7 = __s36local6[__s36local5];
            if (__s36local7 !== undefined) {
              if (__s36local0[__s36local7] == 0) {
                __s36local0[__s36local7] = 1;
              } else {
                __s0local0.debug("ERROR!!! Private Offer PrimeSale-Component has multiple WodID's from the same Kingdom!");
              }
            }
          }
        }
      }
    }
  };
  PrimeSaleComponent.prototype.highestLevelOfBuilding = function () {
    return __dep_export_CastleModel.CastleModel.wodData.getHighestUpgradeForBuilding(this.buildingVO.wodId);
  };
  return PrimeSaleComponent;
}();
exports.PrimeSaleComponent = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
