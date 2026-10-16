Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function OfferDescriptionAdditionalPackageIDs() {
    this._ids = [];
  }
  Object.defineProperty(OfferDescriptionAdditionalPackageIDs.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PACKAGE_IDS;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPackageIDs.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalPackageIDs.prototype.parseFromObjectParam = function (__s9param0) {
    this._ids = [];
    if (__s9param0) {
      for (var __s9local0 = __s9param0.IDS, __s9local1 = 0; __s9local1 < __s9local0.length; ++__s9local1) {
        this._ids.push(__s9local0[__s9local1]);
      }
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalPackageIDs.prototype, "ids", {
    get: function () {
      return this._ids;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalPackageIDs.prototype.getVisiblePackages = function (__s16param0, __s16param1, __s16param2) {
    var __s16local0 = [];
    for (var __s16local1 = 0; __s16local1 < this._ids.length; ++__s16local1) {
      var __s16local2 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._ids[__s16local1]);
      __s16local2.topPackage = false;
      if (__s16local2.isVisible(__s16param0, __s16param1, __s16param2)) {
        __s16local0.push(__s16local2);
      }
    }
    return __s16local0;
  };
  OfferDescriptionAdditionalPackageIDs.prototype.containsEventPackage = function (__s21param0) {
    for (var __s21local0 = 0; __s21local0 < this._ids.length; ++__s21local0) {
      if (__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._ids[__s21local0]).packageID == __s21param0) {
        return true;
      }
    }
    return false;
  };
  return OfferDescriptionAdditionalPackageIDs;
}();
exports.OfferDescriptionAdditionalPackageIDs = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter", "IEventPackagesVO");
