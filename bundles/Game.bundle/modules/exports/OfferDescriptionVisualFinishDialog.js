Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualFinishDialog() {}
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFinishDialog.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualFinishDialog.prototype.parseFromObjectParam = function (__s9param0) {
    this._dialogName = __s9param0.DN;
    if (__s9param0.DC != null) {
      this._dialogCustomization = __s9param0.DC;
    }
  };
  OfferDescriptionVisualFinishDialog.prototype.execute = function (__s12param0) {
    var __s12local0 = __dep_export_CastleModel.CastleModel.privateOfferData.offerMultiRewardChoice.get(__s12param0.id);
    if (__s12local0) {
      if (__s12local0 != null) {
        for (var __s12local1 = 0, __s12local2 = __s12local0; __s12local1 < __s12local2.length; __s12local1++) {
          var __s12local3 = __s12local2[__s12local1];
          if (__s12local3 !== undefined) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s12param0, __s12local3), true);
          }
        }
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s12param0), true);
    }
    return true;
  };
  OfferDescriptionVisualFinishDialog.prototype.toExecuteInState = function (__s20param0) {
    return __s20param0 === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_SUCCEEDED || __s20param0 === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.ITERATION_SUCCEEDED;
  };
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualFinishDialog;
}();
exports.OfferDescriptionVisualFinishDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
