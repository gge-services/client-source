Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function OfferDescriptionAdditionalABTestDependency() {
    this._amountOfTimesRequested = 0;
  }
  Object.defineProperty(OfferDescriptionAdditionalABTestDependency.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_AB_TEST;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalABTestDependency.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalABTestDependency.prototype.parseFromObjectParam = function (__s9param0) {
    this._ABTestDependency = __s9param0.ABT;
  };
  Object.defineProperty(OfferDescriptionAdditionalABTestDependency.prototype, "ABTestDependency", {
    get: function () {
      return this._ABTestDependency;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalABTestDependency.prototype.satisfyDependency = function () {
    if (this._amountOfTimesRequested < 1) {
      __dep_export_CastleModel.CastleModel.userData.splitRunData.getTestCaseIfNotPresent(this._ABTestDependency);
    }
    this._amountOfTimesRequested++;
  };
  return OfferDescriptionAdditionalABTestDependency;
}();
exports.OfferDescriptionAdditionalABTestDependency = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
