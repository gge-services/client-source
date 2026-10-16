Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function OfferDescriptionAdditionals() {
    this._additionals = new Map();
  }
  Object.defineProperty(OfferDescriptionAdditionals.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionals.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionals.prototype.parseFromObjectParam = function (__s9param0) {
    for (var __s9local0 = 0; __s9local0 < __s9param0.length; ++__s9local0) {
      this._additionals.set(__s9param0[__s9local0].name, __dep_export_CastleModel.CastleModel.privateOfferData.createOfferDescriptionAdditionalObject(__s9param0[__s9local0].name, __s9param0[__s9local0].params));
    }
  };
  OfferDescriptionAdditionals.prototype.toString = function () {
    var __s13local0 = "Additional-Component Descriptions";
    if (this._additionals != null) {
      for (var __s13local1 = 0, __s13local2 = Array.from(this._additionals.keys()); __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined) {
          __s13local0 += "\n   " + __s13local3 + " --> " + this._additionals.get(__s13local3);
        }
      }
    }
    return __s13local0;
  };
  OfferDescriptionAdditionals.prototype.getByName = function (__s19param0) {
    return this._additionals.get(__s19param0);
  };
  Object.defineProperty(OfferDescriptionAdditionals.prototype, "additionals", {
    get: function () {
      return this._additionals;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionals;
}();
exports.OfferDescriptionAdditionals = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
