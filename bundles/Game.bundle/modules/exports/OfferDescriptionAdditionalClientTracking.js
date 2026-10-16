Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalClientTracking() {}
  Object.defineProperty(OfferDescriptionAdditionalClientTracking.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_CLIENT_TRACKING;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalClientTracking.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalClientTracking.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.CTR) {
      this._trackingKey = __s9param0.CTR;
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalClientTracking.prototype, "trackingKey", {
    get: function () {
      return this._trackingKey;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalClientTracking;
}();
exports.OfferDescriptionAdditionalClientTracking = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
