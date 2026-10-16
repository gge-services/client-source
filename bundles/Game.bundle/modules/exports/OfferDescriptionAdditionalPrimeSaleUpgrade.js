Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalPrimeSaleUpgrade() {}
  Object.defineProperty(OfferDescriptionAdditionalPrimeSaleUpgrade.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPrimeSaleUpgrade.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPrimeSaleUpgrade.prototype.parseFromObjectParam = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0, __s9local2 = __s9param0.wodIDs; __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 !== undefined) {
        __s9local0.push(__s9local3);
      }
    }
    if (__s9local0.length == 0 && typeof __s9param0.wodIDs == "number") {
      __s9local0.push(__s9param0.wodIDs);
    }
    if (__s9local0.length == 0 && typeof __s9param0.wodID == "number") {
      __s9local0.push(__s9param0.wodID);
    }
    this._primeSaleComponent = new __dep_export_PrimeSaleUpgradeComponent.PrimeSaleUpgradeComponent(__s9local0, __s9param0.discount);
  };
  Object.defineProperty(OfferDescriptionAdditionalPrimeSaleUpgrade.prototype, "primeSaleComponent", {
    get: function () {
      return this._primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalPrimeSaleUpgrade;
}();
exports.OfferDescriptionAdditionalPrimeSaleUpgrade = __s0local0;
var __dep_export_PrimeSaleUpgradeComponent = require("gge-module:export_PrimeSaleUpgradeComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
