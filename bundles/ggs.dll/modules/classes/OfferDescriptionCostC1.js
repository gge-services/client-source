Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function OfferDescriptionCostC1(__s3param0 = 0) {
    this._costC1 = 0;
    if (__s3param0 != 0) {
      this._costC1 = __s3param0;
    }
  }
  Object.defineProperty(OfferDescriptionCostC1.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_COST_C1;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC1.prototype.registerOfferDescription = function (__s8param0) {
    __s8param0.addEntry(this.name, this);
  };
  OfferDescriptionCostC1.prototype.parseFromObjectParam = function (__s10param0) {
    this._costC1 = __s10param0;
  };
  Object.defineProperty(OfferDescriptionCostC1.prototype, "costC1", {
    get: function () {
      return this._costC1;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionCostC1.prototype.dispose = function () {};
  return OfferDescriptionCostC1;
}();
exports.OfferDescriptionCostC1 = __s0local0;
