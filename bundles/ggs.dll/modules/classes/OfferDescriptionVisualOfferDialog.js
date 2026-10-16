Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualOfferDialog(__s3param0, __s3param1) {
    this._autoShow = false;
    this._dialogName = __s3param0;
    this._autoShow = __s3param1;
  }
  Object.defineProperty(OfferDescriptionVisualOfferDialog.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_OFFER_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualOfferDialog.prototype.parseFromObjectParam = function (__s7param0) {
    if (__s7param0.DN) {
      this._dialogName = __s7param0.DN;
    } else {
      this._dialogName = __s7param0.ODN;
    }
    if (__s7param0.AS != null) {
      this._autoShow = __s7param0.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualOfferDialog.prototype.execute = function (__s13param0) {
    this.ExecutionHook();
    return true;
  };
  OfferDescriptionVisualOfferDialog.prototype.ExecutionHook = function () {
    return false;
  };
  OfferDescriptionVisualOfferDialog.prototype.toExecuteInState = function (__s17param0) {
    return __s17param0 === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING || __s17param0 === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_READY;
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
  OfferDescriptionVisualOfferDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualOfferDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_OFFER_DIALOG";
  };
  return OfferDescriptionVisualOfferDialog;
}();
exports.OfferDescriptionVisualOfferDialog = __s0local0;
