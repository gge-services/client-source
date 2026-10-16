Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastlePrivateOfferDialogProperties = require("gge-module:export_CastlePrivateOfferDialogProperties");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function () {
  function OfferDescriptionVisualQuestAcceptDialog() {
    this._autoShow = false;
  }
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestAcceptDialog.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.parseFromObjectParam = function (__s9param0) {
    this._dialogName = __s9param0.DN;
    if (__s9param0.AS != null) {
      this._autoShow = !!__s9param0.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.execute = function (__s13param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new __dep_export_CastlePrivateOfferDialogProperties.CastlePrivateOfferDialogProperties(__s13param0));
    return true;
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.toExecuteInState = function (__s15param0) {
    return __s15param0 === __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.QUEST_PENDING;
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
  return OfferDescriptionVisualQuestAcceptDialog;
}();
exports.OfferDescriptionVisualQuestAcceptDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
