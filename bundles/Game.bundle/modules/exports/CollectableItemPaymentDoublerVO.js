Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemPaymentDoublerVO(__s3param0 = 0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemPaymentDoublerVO, __s1param0);
  CollectableItemPaymentDoublerVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.amount = __s5param0;
  };
  CollectableItemPaymentDoublerVO.prototype.getTooltipTextId = function () {
    return "paymentdoubler_name";
  };
  CollectableItemPaymentDoublerVO.prototype.getDescriptionTextId = function () {
    return "dialog_paymentdoubler_copy";
  };
  CollectableItemPaymentDoublerVO.__initialize_static_members = function () {
    CollectableItemPaymentDoublerVO.SERVER_KEY = "PD";
    CollectableItemPaymentDoublerVO.XML_KEY = "paymentDoppler";
  };
  return CollectableItemPaymentDoublerVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemPaymentDoublerVO = __s0local0;
__s0local0.__initialize_static_members();
