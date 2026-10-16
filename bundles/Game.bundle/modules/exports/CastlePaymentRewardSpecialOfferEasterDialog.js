Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePaymentRewardSpecialOfferConstants = require("gge-module:export_CastlePaymentRewardSpecialOfferConstants");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __s0local0 = function (__s1param0) {
  function CastlePaymentRewardSpecialOfferEasterDialog() {
    return __s1param0.call(this, CastlePaymentRewardSpecialOfferEasterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentRewardSpecialOfferEasterDialog, __s1param0);
  CastlePaymentRewardSpecialOfferEasterDialog.prototype.setTextIDs = function () {
    __s1param0.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_easter_title";
    this.descriptionTextID = "dialog_primeday_easter_description";
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferEasterDialog.prototype, "skinType", {
    get: function () {
      return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferEasterDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferEasterDialog.NAME = "CastlePaymentRewardSpecialOfferEaster";
  };
  return CastlePaymentRewardSpecialOfferEasterDialog;
}(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferEasterDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
