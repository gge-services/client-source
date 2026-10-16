Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function OfferDescriptionAutoAccept(__s3param0 = false) {
    this._autoAccept = __s3param0;
  }
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_AUTO_ACCEPT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAutoAccept.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAutoAccept.prototype.parseFromObjectParam = function (__s9param0) {
    this._autoAccept = __s9param0;
  };
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "autoAccept", {
    get: function () {
      return this._autoAccept;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAutoAccept.prototype.dispose = function () {};
  return OfferDescriptionAutoAccept;
}();
exports.OfferDescriptionAutoAccept = __s0local0;
