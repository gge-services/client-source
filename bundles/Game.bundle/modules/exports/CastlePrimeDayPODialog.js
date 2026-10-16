Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleHardCurrencyHelper = require("gge-module:export_CastleHardCurrencyHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __s0local0 = function (__s1param0) {
  function CastlePrimeDayPODialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeDayPODialog, __s1param0);
  CastlePrimeDayPODialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.setTextIDs();
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved_0));
  };
  CastlePrimeDayPODialog.prototype.onOfferRemoved_0 = function (__s7param0) {
    if (this.isPrivateOffer && __s7param0.offerVO == this.dialogPropertiesPrivateOffer.offerVO) {
      this.hide();
    }
  };
  Object.defineProperty(CastlePrimeDayPODialog.prototype, "currencyValue", {
    get: function () {
      return __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.shownCurrencyValueForPO(this.dialogPropertiesPrivateOffer.offerVO);
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "currencyValue").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeDayPODialog.prototype.setTextIDs = function () {
    __s1param0.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_specialoffer_title";
    if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO.isInvitationOffer) {
      this.descriptionTextID = "dialog_primeday_specialoffer_invited";
    } else {
      this.descriptionTextID = "dialog_primeday_specialoffer_hideValue_description";
    }
  };
  CastlePrimeDayPODialog.prototype.removeListeners = function () {
    __s1param0.prototype.removeListeners.call(this);
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved_0));
  };
  CastlePrimeDayPODialog.__initialize_static_members = function () {
    CastlePrimeDayPODialog.NAME = "CastlePrimeDayPO";
  };
  return CastlePrimeDayPODialog;
}(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePrimeDayPODialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
