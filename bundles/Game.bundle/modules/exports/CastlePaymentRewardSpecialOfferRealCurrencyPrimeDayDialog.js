Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastlePaymentRewardSpecialOfferConstants = require("gge-module:export_CastlePaymentRewardSpecialOfferConstants");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local0 = function (__s1param0) {
  function CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog(__s3param0 = __dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.CLASS_NAME) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog, __s1param0);
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "paymentSourceId", {
    get: function () {
      return __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "paymentSourceId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "paymentCXFSourceId", {
    get: function () {
      return __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype.setTextIDs = function () {
    __s1param0.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_realCurrency_title";
    this.addGoldTextID = "dialog_primeday_realCurrency_buy_button";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.prototype, "offerType", {
    get: function () {
      return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "offerType").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.NAME = "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDay";
  };
  return CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog;
}(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
