Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function PrivateOfferDataEvent(__s3param0, __s3param1, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).offerVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateOfferDataEvent, __s1param0);
  PrivateOfferDataEvent.__initialize_static_members = function () {
    PrivateOfferDataEvent.PRIVATE_OFFER_CREATED = "PRIVATE_OFFER_CREATED";
    PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED = "PRIVATE_OFFER_REMOVED";
    PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED = "PRIVATE_OFFER_STATE_CHANGED";
    PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED = "PRIVATE_OFFER_UPDATED";
  };
  return PrivateOfferDataEvent;
}(createjs.Event);
exports.PrivateOfferDataEvent = __s0local0;
__s0local0.__initialize_static_members();
