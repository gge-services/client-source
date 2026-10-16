Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualQuestDialog() {
    this._autoShow = false;
    this._hasBeenAutoShown = false;
  }
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestDialog.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualQuestDialog.prototype.parseFromObjectParam = function (__s9param0) {
    this._dialogName = __s9param0.DN;
    if (__s9param0.AS != null) {
      this._autoShow = !!__s9param0.AS;
    } else {
      this._autoShow = true;
    }
    if (__s9param0.DC != null) {
      this._dialogCustomization = __s9param0.DC;
    }
  };
  OfferDescriptionVisualQuestDialog.prototype.execute = function (__s14param0) {
    if (this._autoShow && !this._hasBeenAutoShown) {
      var __s14local0 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(this._dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s14param0), __s14param0.getPopupType(), true);
      var __s14local1 = __dep_export_CastlePrivateOfferDialogCreator.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(this._dialogName);
      if (__s14local1) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s14local1, __s14local0.properties, __s14local0.blockDialogs, __s14local0.priority, 0, __s14local0.type);
      }
      this._hasBeenAutoShown = true;
    }
    return true;
  };
  OfferDescriptionVisualQuestDialog.prototype.toExecuteInState = function (__s18param0) {
    return __s18param0 === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_STARTED;
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
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualQuestDialog;
}();
exports.OfferDescriptionVisualQuestDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivateOfferDialogCreator = require("gge-module:export_CastlePrivateOfferDialogCreator");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
