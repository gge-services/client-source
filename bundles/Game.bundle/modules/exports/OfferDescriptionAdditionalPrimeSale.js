Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalPrimeSale() {}
  Object.defineProperty(OfferDescriptionAdditionalPrimeSale.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPrimeSale.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPrimeSale.prototype.parseFromObjectParam = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0, __s9local2 = __s9param0.wodID; __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 !== undefined) {
        __s9local0.push(__s9local3);
      }
    }
    if (__s9local0.length == 0 && typeof __s9param0.wodID == "number") {
      __s9local0.push(__s9param0.wodID);
    }
    this._primeSaleComponent = new __dep_export_PrimeSaleComponent.PrimeSaleComponent(__s9local0, __s9param0.discount);
  };
  Object.defineProperty(OfferDescriptionAdditionalPrimeSale.prototype, "primeSaleComponent", {
    get: function () {
      return this._primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalPrimeSale;
}();
exports.OfferDescriptionAdditionalPrimeSale = __s0local0;
var __dep_export_PrimeSaleComponent = require("gge-module:export_PrimeSaleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
