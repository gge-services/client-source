Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
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
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_COST_EMPIRE_RESOURCES;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostResources.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionCostResources.prototype.parseFromObjectParam = function (__s9param0) {
    this._wood = __s9param0.shift();
    this._stone = __s9param0.shift();
    this._food = __s9param0.shift();
    this._coal = __s9param0.shift();
    this._oil = __s9param0.shift();
    this._glass = __s9param0.shift();
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
  OfferDescriptionCostResources.prototype.dispose = function () {};
  return OfferDescriptionCostResources;
}();
exports.OfferDescriptionCostResources = __s0local0;
