Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualOfferDialog() {
    this._autoShow = false;
    this.hasShownAutoShowDialog = false;
  }
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualOfferDialog.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualOfferDialog.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.DN) {
      this._dialogName = __s9param0.DN;
    }
    if (__s9param0.AS != null) {
      this._autoShow = !!__s9param0.AS;
    } else {
      this._autoShow = true;
    }
    if (__s9param0.DC != null) {
      this._dialogCustomization = __s9param0.DC;
    }
  };
  OfferDescriptionVisualOfferDialog.prototype.execute = function (__s15param0) {
    if (__s15param0.offerState === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY && __s15param0.hasAutoAccept() && __s15param0.getCostsForOfferAcception().length <= 0) {
      return true;
    }
    if (this._autoShow && !this.hasShownAutoShowDialog) {
      var __s15local0 = __dep_exact_81dacdf05bd32292.castAs(__s15param0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE), "OfferDescriptionAdditionalPrimeSale");
      var __s15local1 = __dep_exact_81dacdf05bd32292.castAs(__s15param0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_UPGRADE), "OfferDescriptionAdditionalPrimeSaleUpgrade");
      if (__s15local0 && !__s15local0.primeSaleComponent.isAvailableInKingdom() || __s15local1 && !__s15local1.primeSaleComponent.isAvailableInKingdom()) {
        return false;
      }
      if (__s15param0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP) && !__dep_export_CastleModel.CastleModel.skipDiscountData.isBestOfferSoFar(__s15param0)) {
        return true;
      }
      var __s15local2 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(this._dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s15param0), __s15param0.getPopupType(), true);
      var __s15local3 = __dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(this._dialogName);
      if (__s15local3) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s15local3, __s15local2.properties, __s15local2.blockDialogs, __s15local2.priority, 0, __s15local2.type);
      }
      this.hasShownAutoShowDialog = true;
    }
    return true;
  };
  OfferDescriptionVisualOfferDialog.prototype.toExecuteInState = function (__s22param0) {
    return __s22param0 === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING || __s22param0 === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY;
  };
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualOfferDialog;
}();
exports.OfferDescriptionVisualOfferDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivateOfferDialogCreator = require("gge-module:export_CastlePrivateOfferDialogCreator");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
