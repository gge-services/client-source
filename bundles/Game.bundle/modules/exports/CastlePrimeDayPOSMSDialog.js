Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleHardCurrencyHelper = require("gge-module:export_CastleHardCurrencyHelper");
var __dep_export_CastlePaymentRewardSpecialOfferConstants = require("gge-module:export_CastlePaymentRewardSpecialOfferConstants");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __s0local0 = function (__s1param0) {
  function CastlePrimeDayPOSMSDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeDayPOSMSDialog, __s1param0);
  CastlePrimeDayPOSMSDialog.prototype.setTextIDs = function () {
    this.titleTextID = "dialog_primeday_specialoffer_title";
    this.descriptionTextID = "dialog_primeday_smsOffer_description";
    this.dialogPrimedaySpecialofferEndTimerTextID = "dialog_primeday_specialoffer_endTimer";
  };
  Object.defineProperty(CastlePrimeDayPOSMSDialog.prototype, "offerType", {
    get: function () {
      return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "offerType").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeDayPOSMSDialog.prototype, "currencyValue", {
    get: function () {
      return __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.shownCurrencyValueForPO(this.dialogPropertiesPrivateOffer.offerVO);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "currencyValue").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeDayPOSMSDialog.prototype.onPaymentUpdate = function (__s15param0) {};
  CastlePrimeDayPOSMSDialog.__initialize_static_members = function () {
    CastlePrimeDayPOSMSDialog.NAME = "CastlePrimeDayPOSMS";
  };
  return CastlePrimeDayPOSMSDialog;
}(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePrimeDayPOSMSDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
