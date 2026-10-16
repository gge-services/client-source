Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferDescriptionAdditionalIsInviteeConversionOffer() {
    this._isInvitation = false;
  }
  Object.defineProperty(OfferDescriptionAdditionalIsInviteeConversionOffer.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_IS_INVITATION;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionAdditionalIsInviteeConversionOffer.prototype.registerRewardParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionAdditionalIsInviteeConversionOffer.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.ICO) {
      this._isInvitation = !!__s9param0.ICO;
    }
  };
  Object.defineProperty(OfferDescriptionAdditionalIsInviteeConversionOffer.prototype, "isInvitation", {
    get: function () {
      return this._isInvitation;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionAdditionalIsInviteeConversionOffer;
}();
exports.OfferDescriptionAdditionalIsInviteeConversionOffer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionAdditionalParameter");
