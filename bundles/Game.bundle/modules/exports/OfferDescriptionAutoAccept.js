Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAutoAccept() {
    this._autoAccept = false;
  }
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_AUTO_ACCEPT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAutoAccept.prototype.registerOfferDescription = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAutoAccept.prototype.parseFromObjectParam = function (__s9param0) {
    this._autoAccept = !!__s9param0;
  };
  Object.defineProperty(OfferDescriptionAutoAccept.prototype, "autoAccept", {
    get: function () {
      return this._autoAccept;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAutoAccept;
}();
exports.OfferDescriptionAutoAccept = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescription");
