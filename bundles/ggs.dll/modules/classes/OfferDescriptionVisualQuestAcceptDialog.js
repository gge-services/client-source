Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualQuestAcceptDialog(__s3param0, __s3param1 = true) {
    this._autoShow = false;
    this._dialogName = __s3param0;
    this._autoShow = __s3param1;
  }
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestAcceptDialog.prototype.parseFromObjectParam = function (__s7param0) {
    this._dialogName = __s7param0.DN;
    if (__s7param0.AS != null) {
      this._autoShow = __s7param0.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.execute = function (__s11param0) {
    return true;
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.toExecuteInState = function (__s13param0) {
    return __s13param0 === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING;
  };
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestAcceptDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_VISUAL_ACCEPT_DIALOG";
  };
  return OfferDescriptionVisualQuestAcceptDialog;
}();
exports.OfferDescriptionVisualQuestAcceptDialog = __s0local0;
