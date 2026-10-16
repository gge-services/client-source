Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualFinishDialog(__s3param0) {
    this._dialogName = __s3param0;
  }
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_FINISH_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFinishDialog.prototype.parseFromObjectParam = function (__s7param0) {
    this._dialogName = __s7param0.DN;
  };
  OfferDescriptionVisualFinishDialog.prototype.execute = function (__s9param0) {
    return true;
  };
  OfferDescriptionVisualFinishDialog.prototype.toExecuteInState = function (__s11param0) {
    return __s11param0 === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_SUCCEEDED;
  };
  Object.defineProperty(OfferDescriptionVisualFinishDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualFinishDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualFinishDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_FINISH_DIALOG";
  };
  return OfferDescriptionVisualFinishDialog;
}();
exports.OfferDescriptionVisualFinishDialog = __s0local0;
