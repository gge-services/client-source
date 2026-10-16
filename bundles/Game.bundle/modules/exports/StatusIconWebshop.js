Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleAccountDeletionEvent = require("gge-module:export_CastleAccountDeletionEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_ClientBetaHelper = require("gge-module:export_ClientBetaHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconWebshop() {
    var __s3local0 = __s1param0.call(this, "Btn_Webshop2", "txt_label", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("webshop_hudIcon_label"), 2) || this;
    __s3local0.setTooltip("webshop_hudIcon_tt");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconWebshop, __s1param0);
  StatusIconWebshop.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = {
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_WEB_SHOP_BUTTON
    };
    __dep_export_CastleModel.CastleModel.userData.splitRunData.handleHCShopABTestPayload(__s5local0);
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(this.icon, "btn_webshop", __s5local0);
    this.itxt_label.autoFitToBounds = true;
    this._itxt_counter = this.textFieldManager.registerTextField(this.iconDisp.mc_amount.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.onTimerUpdate();
  };
  StatusIconWebshop.prototype.disposeLoaded = function () {
    __dep_export_cxfResetCommandCache.unregisterUIComponentToCXF(this.icon);
    __s1param0.prototype.disposeLoaded.call(this);
  };
  StatusIconWebshop.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleAccountDeletionEvent.CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED, this.bindFunction(this.onChangeEvent));
  };
  StatusIconWebshop.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleAccountDeletionEvent.CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED, this.bindFunction(this.onChangeEvent));
  };
  StatusIconWebshop.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWebshop.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWebshop.prototype.onTimerUpdate = function (__s17param0 = null) {
    var __s17local0 = __dep_export_CastleModel.CastleModel.globalOfferData.webShopOffersAmount;
    this.iconDisp.mc_amount.visible = __s17local0 > 0;
    this._itxt_counter.textContentVO.stringValue = __s17local0 >= 100 ? "99+" : __s17local0.toString();
    this.updateCache();
  };
  StatusIconWebshop.prototype.onChangeEvent = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconWebshop.prototype.isWebUserOutOfTempServer = function () {
    return !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer;
  };
  StatusIconWebshop.prototype.onEventEnded = function (__s23param0) {
    this.setVisibility();
  };
  StatusIconWebshop.prototype.isUserOnValidSSO = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.requestPayByJS;
  };
  StatusIconWebshop.prototype.isNonSSOWebUser = function () {
    return !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isSSO;
  };
  StatusIconWebshop.prototype.isMicrosoftUser = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlVariables.nativeStore == __dep_exact_9e901e8e2483a22f.BasicConstants.NATIVE_STORE_MICROSOFT;
  };
  StatusIconWebshop.prototype.setVisibilityLoaded = function () {
    if ((this.isUserOnValidSSO() || this.isNonSSOWebUser() || this.isMicrosoftUser() || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.suk.length > 0) && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_WEB_SHOP && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_WEBSHOP) && this.isWebUserOutOfTempServer() && !__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted && !__dep_export_ClientBetaHelper.ClientBetaHelper.isOnOpenBeta) {
      this.show();
    } else {
      this.hide();
    }
  };
  return StatusIconWebshop;
}(require("gge-module:export_ACastleLabeledStatusIcon").ACastleLabeledStatusIcon);
exports.StatusIconWebshop = __s0local0;
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
