Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalIsTimeless() {
    this._isTimeless = false;
    this._totalSeconds = 0;
  }
  Object.defineProperty(OfferDescriptionAdditionalIsTimeless.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_IS_TIMELESS;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalIsTimeless.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalIsTimeless.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.TML) {
      this._isTimeless = !!__s9param0.TML;
    }
    if (__s9param0.TS) {
      this._totalSeconds = __dep_exact_f855840627e6e145.int(__s9param0.TS);
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalIsTimeless.prototype, "isTimeless", {
    get: function () {
      return this._isTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionAdditionalIsTimeless.prototype, "totalSeconds", {
    get: function () {
      return this._totalSeconds;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalIsTimeless;
}();
exports.OfferDescriptionAdditionalIsTimeless = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
