Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function OfferDescriptionCostC2(__s3param0 = 0) {
    this._costC2 = 0;
    if (__s3param0 != 0) {
      this._costC2 = __s3param0;
    }
  }
  Object.defineProperty(OfferDescriptionCostC2.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_COST_C2;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC2.prototype.registerOfferDescription = function (__s8param0) {
    __s8param0.addEntry(this.name, this);
  };
  OfferDescriptionCostC2.prototype.parseFromObjectParam = function (__s10param0) {
    this._costC2 = __s10param0;
  };
  Object.defineProperty(OfferDescriptionCostC2.prototype, "costC2", {
    get: function () {
      return this._costC2;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC2.prototype.dispose = function () {};
  return OfferDescriptionCostC2;
}();
exports.OfferDescriptionCostC2 = __s0local0;
