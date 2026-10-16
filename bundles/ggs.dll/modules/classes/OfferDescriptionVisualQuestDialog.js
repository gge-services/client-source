Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_PrivateOfferStateEnum = require("gge-module:class_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualQuestDialog(__s3param0, __s3param1 = true) {
    this._dialogName = __s3param0;
    this._autoShow = __s3param1;
  }
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "name", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.OFFER_VISUAL_QUEST_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestDialog.prototype.parseFromObjectParam = function (__s7param0) {
    this._dialogName = __s7param0.DN;
    if (__s7param0.AS != null) {
      this._autoShow = __s7param0.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualQuestDialog.prototype.execute = function (__s11param0) {
    this._autoShow;
    return true;
  };
  OfferDescriptionVisualQuestDialog.prototype.toExecuteInState = function (__s13param0) {
    return __s13param0 === __dep_class_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED;
  };
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualQuestDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_QUEST_DIALOG";
  };
  return OfferDescriptionVisualQuestDialog;
}();
exports.OfferDescriptionVisualQuestDialog = __s0local0;
