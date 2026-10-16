Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionVisualSubOffer() {
    this._discount = 0;
    this._oldCost = 0;
  }
  Object.defineProperty(OfferDescriptionVisualSubOffer.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_SUB_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualSubOffer.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualSubOffer.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.DC) {
      this._discount = __s9param0.DC;
    }
    if (__s9param0.OC) {
      this._oldCost = __s9param0.OC;
    }
  };
  OfferDescriptionVisualSubOffer.prototype.execute = function (__s13param0) {
    return true;
  };
  OfferDescriptionVisualSubOffer.prototype.toExecuteInState = function (__s15param0) {
    return false;
  };
  Object.defineProperty(OfferDescriptionVisualSubOffer.prototype, "oldCost", {
    get: function () {
      return this._oldCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualSubOffer.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualSubOffer;
}();
exports.OfferDescriptionVisualSubOffer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
