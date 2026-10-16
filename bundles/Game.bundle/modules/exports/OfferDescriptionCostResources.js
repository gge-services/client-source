Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionCostResources() {
    this._wood = 0;
    this._stone = 0;
    this._food = 0;
    this._coal = 0;
    this._oil = 0;
    this._glass = 0;
  }
  Object.defineProperty(OfferDescriptionCostResources.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_EMPIRE_RESOURCES;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostResources.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionCostResources.prototype.parseFromObjectParam = function (__s9param0) {
    this._wood = __dep_exact_f855840627e6e145.int(__s9param0.shift());
    this._stone = __dep_exact_f855840627e6e145.int(__s9param0.shift());
    this._food = __dep_exact_f855840627e6e145.int(__s9param0.shift());
    this._coal = __dep_exact_f855840627e6e145.int(__s9param0.shift());
    this._oil = __dep_exact_f855840627e6e145.int(__s9param0.shift());
    this._glass = __dep_exact_f855840627e6e145.int(__s9param0.shift());
  };
  Object.defineProperty(OfferDescriptionCostResources.prototype, "wood", {
    get: function () {
      return this._wood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "stone", {
    get: function () {
      return this._stone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "food", {
    get: function () {
      return this._food;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "coal", {
    get: function () {
      return this._coal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "oil", {
    get: function () {
      return this._oil;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionCostResources.prototype, "glass", {
    get: function () {
      return this._glass;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionCostResources;
}();
exports.OfferDescriptionCostResources = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
