Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionEuroAmount() {
    this._euroAmount = 0;
  }
  Object.defineProperty(OfferDescriptionEuroAmount.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_EURO_AMOUNT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionEuroAmount.prototype, "euroAmount", {
    get: function () {
      return this._euroAmount;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionEuroAmount.prototype.parseFromObjectParam = function (__s9param0) {};
  OfferDescriptionEuroAmount.prototype.registerOfferDescription = function (__s11param0) {
    __s11param0.addEntry(this.name, this);
  };
  return OfferDescriptionEuroAmount;
}();
exports.OfferDescriptionEuroAmount = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
