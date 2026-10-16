Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __s0local0 = function () {
  function OfferDescriptionVisualRewardSlotOrder(__s3param0) {
    this._sortOrder = __s3param0;
  }
  Object.defineProperty(OfferDescriptionVisualRewardSlotOrder.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_REWARD_SLOT_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualRewardSlotOrder.prototype.parseFromObjectParam = function (__s7param0) {
    this._sortOrder = __s7param0.SO;
  };
  OfferDescriptionVisualRewardSlotOrder.prototype.execute = function (__s9param0) {
    return true;
  };
  OfferDescriptionVisualRewardSlotOrder.prototype.toExecuteInState = function (__s11param0) {
    return false;
  };
  Object.defineProperty(OfferDescriptionVisualRewardSlotOrder.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualRewardSlotOrder.prototype.dispose = function () {};
  OfferDescriptionVisualRewardSlotOrder.prototype.getCommandName = function () {
    return "";
  };
  return OfferDescriptionVisualRewardSlotOrder;
}();
exports.OfferDescriptionVisualRewardSlotOrder = __s0local0;
