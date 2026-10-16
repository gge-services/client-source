Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function OfferDescriptionVisuals(__s3param0) {
    this._visuals = new Map();
    this._model = __s3param0;
  }
  Object.defineProperty(OfferDescriptionVisuals.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.VISUAL_COMPONENT_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisuals.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisuals.prototype.parseFromObjectParam = function (__s9param0) {
    for (var __s9local0 = 0; __s9local0 < __s9param0.length; ++__s9local0) {
      this._visuals.set(__s9param0[__s9local0].name, this._model.createOfferDescriptionVisualObject(__s9param0[__s9local0].name, __s9param0[__s9local0].params));
    }
  };
  OfferDescriptionVisuals.prototype.toString = function () {
    var __s13local0 = "Visual Descriptions";
    for (var __s13local1 = 0, __s13local2 = Array.from(this._visuals.keys()); __s13local1 < __s13local2.length; __s13local1++) {
      var __s13local3 = __s13local2[__s13local1];
      __s13local0 += "\n   " + __s13local3 + " --> " + this._visuals.get(__s13local3);
    }
    return __s13local0;
  };
  Object.defineProperty(OfferDescriptionVisuals.prototype, "visuals", {
    get: function () {
      return this._visuals;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisuals.prototype.dispose = function () {
    if (this._visuals) {
      for (var __s19local0 = 0, __s19local1 = Array.from(this._visuals.values()); __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (typeof __s19local2.dispose == "function") {
          __s19local2.dispose();
        }
      }
      this._visuals = null;
    }
    this._model = null;
  };
  return OfferDescriptionVisuals;
}();
exports.OfferDescriptionVisuals = __s0local0;
