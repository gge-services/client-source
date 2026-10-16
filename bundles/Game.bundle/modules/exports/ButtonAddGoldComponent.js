Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_ClientBetaHelper = require("gge-module:export_ClientBetaHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ButtonAddGoldComponent(__s3param0) {
    return __s1param0.call(this, __dep_exact_81dacdf05bd32292.instanceOfClass(__s3param0, "BasicButton") ? __s3param0 : __s3param0.basicButton) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAddGoldComponent, __s1param0);
  ButtonAddGoldComponent.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onUpdatePayuserInfo));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.onXPChanged();
    this.onUpdatePayuserInfo();
  };
  ButtonAddGoldComponent.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onUpdatePayuserInfo));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    __s1param0.prototype.destroy.call(this);
  };
  ButtonAddGoldComponent.prototype.onClickButton = function (__s9param0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_UNKNOWN), __s9param1 = __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_UNKNOWN, __s9param2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SHOP_TAB_DEFAULT)) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._button.enabled)) {
      __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__s9param0, __s9param1, __s9param2);
    }
  };
  ButtonAddGoldComponent.prototype.onXPChanged = function (__s12param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PAYMENT_SHOP && !__dep_export_ClientBetaHelper.ClientBetaHelper.isOnOpenBeta);
    this.onUpdatePayuserInfo(null);
  };
  ButtonAddGoldComponent.prototype.onUpdatePayuserInfo = function (__s14param0 = null) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._button.enabled)) {
      if (!__dep_export_CastleModel.CastleModel.userData.hasPaymentDoppler || __dep_export_CastleModel.CastleModel.globalOfferData.getActiveOffer(__dep_export_CastleGlobalOfferData.CastleGlobalOfferData.PRIME_TIME) && __dep_export_CastleModel.CastleModel.globalOfferData.getActiveOffer(__dep_export_CastleGlobalOfferData.CastleGlobalOfferData.PRIME_TIME).remainingDuration(Date.now()) >= 0) {
        this._button.disp.gotoAndStop(1);
        this._button.disp.toolTipText = "add_Gold";
      } else {
        this._button.disp.gotoAndStop(2);
        this._button.disp.toolTipText = "dialog_paymentdoubler_tootlipp" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_CastleModel.CastleModel.userData.paymentDopplerCount;
      }
    } else {
      this._button.disp.gotoAndStop(1);
      this._button.disp.toolTipText = "panel_shop_needQuestProgress";
    }
  };
  return ButtonAddGoldComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAddGoldComponent = __s0local0;
var __dep_export_CastleGlobalOfferData = require("gge-module:export_CastleGlobalOfferData");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
