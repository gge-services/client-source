Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function OfferDescriptionVisuals() {
    this._visuals = new Map();
  }
  Object.defineProperty(OfferDescriptionVisuals.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisuals.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisuals.prototype.parseFromObjectParam = function (__s9param0) {
    for (var __s9local0 = 0; __s9local0 < __s9param0.length; ++__s9local0) {
      var __s9local1 = __dep_export_CastleModel.CastleModel.privateOfferData.createOfferDescriptionVisualObject(__s9param0[__s9local0].name, __s9param0[__s9local0].params);
      if (__s9local1) {
        this._visuals.set(__s9param0[__s9local0].name, __s9local1);
      }
    }
  };
  OfferDescriptionVisuals.prototype.toString = function () {
    var __s14local0 = "Visual Descriptions";
    if (this._visuals != null) {
      for (var __s14local1 = 0, __s14local2 = Array.from(this._visuals.keys()); __s14local1 < __s14local2.length; __s14local1++) {
        var __s14local3 = __s14local2[__s14local1];
        if (__s14local3 !== undefined) {
          __s14local0 += "\n   " + __s14local3 + " --> " + this._visuals.get(__s14local3);
        }
      }
    }
    return __s14local0;
  };
  Object.defineProperty(OfferDescriptionVisuals.prototype, "visuals", {
    get: function () {
      return this._visuals;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisuals;
}();
exports.OfferDescriptionVisuals = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
