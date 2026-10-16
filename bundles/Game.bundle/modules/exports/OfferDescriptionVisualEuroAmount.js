Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionVisualEuroAmount() {
    this._euroAmount = 0;
  }
  Object.defineProperty(OfferDescriptionVisualEuroAmount.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_EURO_AMOUNT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualEuroAmount.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualEuroAmount.prototype.execute = function (__s9param0) {
    return true;
  };
  OfferDescriptionVisualEuroAmount.prototype.toExecuteInState = function (__s11param0) {
    return false;
  };
  Object.defineProperty(OfferDescriptionVisualEuroAmount.prototype, "euroAmount", {
    get: function () {
      return this._euroAmount;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualEuroAmount.prototype.parseFromObjectParam = function (__s15param0) {
    this._euroAmount = __s15param0.A[0];
  };
  return OfferDescriptionVisualEuroAmount;
}();
exports.OfferDescriptionVisualEuroAmount = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
