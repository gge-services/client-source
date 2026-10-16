Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionCostC2() {
    this._costC2 = 0;
  }
  Object.defineProperty(OfferDescriptionCostC2.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_C2;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC2.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionCostC2.prototype.parseFromObjectParam = function (__s9param0) {
    this._costC2 = __dep_exact_f855840627e6e145.int(__s9param0);
  };
  Object.defineProperty(OfferDescriptionCostC2.prototype, "costC2", {
    get: function () {
      return this._costC2;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionCostC2;
}();
exports.OfferDescriptionCostC2 = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
