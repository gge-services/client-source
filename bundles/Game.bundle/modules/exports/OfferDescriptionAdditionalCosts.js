Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __s0local0 = function () {
  function OfferDescriptionAdditionalCosts() {}
  Object.defineProperty(OfferDescriptionAdditionalCosts.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_COSTS;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalCosts.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalCosts.prototype.parseFromObjectParam = function (__s9param0) {
    var __s9local0 = {};
    __s9local0[__s9param0.CID] = [__dep_exact_f855840627e6e145.int(__s9param0.AMT)];
    this._costList = __dep_export_CollectableManager.CollectableManager.parser.s2cParamObject.createList(__s9local0);
  };
  Object.defineProperty(OfferDescriptionAdditionalCosts.prototype, "costList", {
    get: function () {
      return this._costList;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalCosts;
}();
exports.OfferDescriptionAdditionalCosts = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
