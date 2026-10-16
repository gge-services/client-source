Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local0 = function (__s1param0) {
  function StatusIconCapEyecatcher() {
    var __s3local0 = __s1param0.call(this, "Btn_CapEyeCatcher", 1) || this;
    __s3local0.setTooltip("capEyeCatcher_hudIcon_tt");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconCapEyecatcher, __s1param0);
  StatusIconCapEyecatcher.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._clickFeedback = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.iconDisp);
    this._clickFeedback.updateCacheOnChange = true;
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(this.icon, "openAnnouncements", {
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SHOP_TRACKING_CAP_TOOL_BUTTON
    });
  };
  StatusIconCapEyecatcher.prototype.disposeLoaded = function () {
    __dep_export_cxfResetCommandCache.unregisterUIComponentToCXF(this.icon);
    __s1param0.prototype.disposeLoaded.call(this);
  };
  StatusIconCapEyecatcher.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED, this.bindFunction(this.onCapToolNotificationsUpdated));
  };
  StatusIconCapEyecatcher.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED, this.bindFunction(this.onCapToolNotificationsUpdated));
  };
  StatusIconCapEyecatcher.prototype.onCapToolNotificationsUpdated = function (__s13param0) {
    this.setVisibility();
  };
  StatusIconCapEyecatcher.prototype.setVisibilityLoaded = function () {
    __s1param0.prototype.setVisibilityLoaded.call(this);
    if (__dep_export_CastleModel.CastleModel.userData.newCapTooNotifications > 0 && !__dep_export_CastleModel.CastleModel.userData.hideCapToolNotifications) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconCapEyecatcher.prototype.showLoaded = function (__s19param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s19param0);
    this._clickFeedback.addEventListener();
  };
  StatusIconCapEyecatcher.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s21param0);
    this._clickFeedback.removeEventListener();
  };
  StatusIconCapEyecatcher.prototype.onClick = function (__s23param0 = null) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    __dep_export_CastleModel.CastleModel.userData.hideCapToolNotifications = true;
  };
  return StatusIconCapEyecatcher;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.StatusIconCapEyecatcher = __s0local0;
