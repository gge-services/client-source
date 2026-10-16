Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_OfferDescriptionAutoAccept = require("gge-module:class_OfferDescriptionAutoAccept");
var __dep_class_OfferDescriptionCostC1 = require("gge-module:class_OfferDescriptionCostC1");
var __dep_class_OfferDescriptionCostC2 = require("gge-module:class_OfferDescriptionCostC2");
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function BasicOfferDescriptionFactory(__s3param0) {
    this.modelData = __s3param0;
  }
  BasicOfferDescriptionFactory.prototype.createOfferDescriptionObject = function (__s5param0, __s5param1) {
    var __s5local0;
    switch (__s5param0) {
      case __dep_class_Constants_Offer.Constants_Offer.OFFER_AUTO_ACCEPT:
        __s5local0 = new __dep_class_OfferDescriptionAutoAccept.OfferDescriptionAutoAccept(__s5param1);
        break;
      case __dep_class_Constants_Offer.Constants_Offer.OFFER_COST_C1:
        __s5local0 = new __dep_class_OfferDescriptionCostC1.OfferDescriptionCostC1(Number(__s5param1));
        break;
      case __dep_class_Constants_Offer.Constants_Offer.OFFER_COST_C2:
        __s5local0 = new __dep_class_OfferDescriptionCostC2.OfferDescriptionCostC2(Number(__s5param1));
    }
    return __s5local0;
  };
  BasicOfferDescriptionFactory.prototype.dispose = function () {
    this.modelData = null;
  };
  return BasicOfferDescriptionFactory;
}();
exports.BasicOfferDescriptionFactory = __s0local0;
