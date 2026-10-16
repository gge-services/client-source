Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualFailedDialog(__s3param0) {
    this._dialogName = __s3param0;
  }
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_FAILED_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFailedDialog.prototype.parseFromObjectParam = function (__s7param0) {
    this._dialogName = __s7param0.DN;
  };
  OfferDescriptionVisualFailedDialog.prototype.execute = function (__s9param0) {
    return true;
  };
  OfferDescriptionVisualFailedDialog.prototype.toExecuteInState = function (__s11param0) {
    return __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.isFailedState(__s11param0);
  };
  Object.defineProperty(OfferDescriptionVisualFailedDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFailedDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualFailedDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_FAILED_DIALOG";
  };
  return OfferDescriptionVisualFailedDialog;
}();
exports.OfferDescriptionVisualFailedDialog = __s0local0;
