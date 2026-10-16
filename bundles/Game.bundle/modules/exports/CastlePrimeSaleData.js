Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePrimeSaleData() {}
  CastlePrimeSaleData.prototype.getBestDiscountPrivateOfferID = function (__s5param0, __s5param1) {
    var __s5local0;
    var __s5local1;
    for (var __s5local2 = __dep_export_CastleModel.CastleModel.privateOfferData.getActivePrivateOffersByDescription(__dep_export_ClientConstOffer.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER), __s5local3 = -1, __s5local4 = 0; __s5local4 < __s5local2.length; __s5local4++) {
      var __s5local5 = __s5local2[__s5local4];
      var __s5local6 = __dep_exact_81dacdf05bd32292.castAs(__s5local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var __s5local7 = __dep_exact_81dacdf05bd32292.castAs(__s5local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      if ((__s5local6 || __s5local7) && (__s5local1 = __s5local6 ? __s5local6.primeSaleComponent : __s5local7.primeSaleComponent)) {
        if ((__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local1, "PrimeSaleUpgradeComponent") ? !!__s5local1.upgradeChainContainsWodID(__s5param0) : !!__s5local1.buildingVO && __s5param1 && __s5local1.buildingVO.downgradeWodID == __s5param0 || !__s5param1 && __s5local1.wodID == __s5param0) && (!__s5local0 || __s5local1.discount > __s5local0.discount)) {
          __s5local0 = __s5local1;
          __s5local3 = __s5local5.id;
        }
      }
    }
    return __s5local3;
  };
  CastlePrimeSaleData.prototype.getBestDiscountPrimeSaleComponent = function (__s11param0, __s11param1) {
    var __s11local0;
    var __s11local1;
    var __s11local2 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES), "PrimeSaleEventVO");
    var __s11local3 = __dep_export_CastleModel.CastleModel.privateOfferData.getActivePrivateOffersByDescription(__dep_export_ClientConstOffer.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER);
    if (__s11local2 && (__s11param1 && __s11local2.primeSaleComponent.buildingVO.downgradeWodID == __s11param0 || !__s11param1 && __s11local2.primeSaleComponent.wodID == __s11param0)) {
      __s11local0 = __s11local2.primeSaleComponent;
    }
    for (var __s11local4 = 0; __s11local4 < __s11local3.length; __s11local4++) {
      var __s11local5 = __s11local3[__s11local4];
      var __s11local6 = __dep_exact_81dacdf05bd32292.castAs(__s11local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var __s11local7 = __dep_exact_81dacdf05bd32292.castAs(__s11local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      if ((__s11local6 || __s11local7) && (__s11local1 = __s11local6 ? __s11local6.primeSaleComponent : __s11local7.primeSaleComponent) && __s11local1.isAvailableInKingdom()) {
        if ((__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11local1, "PrimeSaleUpgradeComponent") ? !!__s11local1.upgradeChainContainsWodID(__s11param0) : __s11param1 && __s11local1.buildingVO.downgradeWodID == __s11param0 || !__s11param1 && __s11local1.wodID == __s11param0) && (!__s11local0 || __s11local1.discount > __s11local0.discount)) {
          __s11local0 = __s11local1;
        }
      }
    }
    return __s11local0;
  };
  CastlePrimeSaleData.prototype.getBestDiscountPrimeSaleComponentByShopVO = function (__s18param0, __s18param1) {
    return this.getBestDiscountPrimeSaleComponent(__s18param0.wodId, __s18param1);
  };
  return CastlePrimeSaleData;
}();
exports.CastlePrimeSaleData = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
