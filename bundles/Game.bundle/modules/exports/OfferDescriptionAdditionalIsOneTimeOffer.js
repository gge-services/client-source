Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalIsOneTimeOffer() {
    this._isOneTimeOffer = false;
  }
  Object.defineProperty(OfferDescriptionAdditionalIsOneTimeOffer.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_IS_ONE_TIME_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalIsOneTimeOffer.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalIsOneTimeOffer.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.OTO) {
      this._isOneTimeOffer = !!__s9param0.OTO;
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalIsOneTimeOffer.prototype, "isOneTimeOffer", {
    get: function () {
      return this._isOneTimeOffer;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalIsOneTimeOffer;
}();
exports.OfferDescriptionAdditionalIsOneTimeOffer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
