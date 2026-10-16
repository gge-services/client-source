Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleOfferDialogProperties = require("gge-module:export_CastleOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function StatusIconTimelessSpecialOffer() {
    var __s3local0 = __s1param0.call(this, "Btn_TimelessSpecialOffer", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_GLOBAL_PRIME_TIME) || this;
    __s3local0.setTooltip("dialog_TimelessSpecialOffer_buttonTooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconTimelessSpecialOffer, __s1param0);
  StatusIconTimelessSpecialOffer.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconTimelessSpecialOffer.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconTimelessSpecialOffer.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
      this.hide();
    } else {
      this._currentOffer = __dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
      if (this._currentOffer && this._currentOffer.isTimeless) {
        this.show();
      } else {
        this._currentOffer = __dep_export_CastleModel.CastleModel.globalOfferData.getActivePrivatePrimeTimeOffer();
        if (this._currentOffer && this._currentOffer.isTimeless) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  };
  StatusIconTimelessSpecialOffer.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTimelessSpecialOfferDialog.CastleTimelessSpecialOfferDialog, new __dep_export_CastleOfferDialogProperties.CastleOfferDialogProperties(this._currentOffer));
  };
  StatusIconTimelessSpecialOffer.prototype.onOfferEnded = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconTimelessSpecialOffer.prototype.onOfferAdded = function (__s21param0) {
    this.setVisibility();
  };
  return StatusIconTimelessSpecialOffer;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconTimelessSpecialOffer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTimelessSpecialOfferDialog = require("gge-module:export_CastleTimelessSpecialOfferDialog");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
