Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualFailedDialog() {}
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFailedDialog.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualFailedDialog.prototype.parseFromObjectParam = function (__s9param0) {
    this._dialogName = __s9param0.DN;
    if (__s9param0.DC != null) {
      this._dialogCustomization = __s9param0.DC;
    }
  };
  OfferDescriptionVisualFailedDialog.prototype.execute = function (__s12param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s12param0));
    return true;
  };
  OfferDescriptionVisualFailedDialog.prototype.toExecuteInState = function (__s14param0) {
    return __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.isVisualFailedState(__s14param0);
  };
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualFailedDialog;
}();
exports.OfferDescriptionVisualFailedDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
