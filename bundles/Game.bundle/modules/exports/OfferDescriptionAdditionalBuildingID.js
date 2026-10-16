Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalBuildingID() {
    this._buildingID = 0;
  }
  Object.defineProperty(OfferDescriptionAdditionalBuildingID.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalBuildingID.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalBuildingID.prototype.parseFromObjectParam = function (__s9param0) {
    this._buildingID = __dep_exact_f855840627e6e145.int(__s9param0.wodID);
  };
  Object.defineProperty(OfferDescriptionAdditionalBuildingID.prototype, "ID", {
    get: function () {
      return this._buildingID;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalBuildingID;
}();
exports.OfferDescriptionAdditionalBuildingID = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
