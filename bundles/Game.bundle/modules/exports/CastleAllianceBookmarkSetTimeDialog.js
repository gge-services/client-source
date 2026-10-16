Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_TimeSelectionComponent = require("gge-module:export_TimeSelectionComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBookmarkSetTimeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceBookmarkSetTimeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBookmarkSetTimeDialog, __s1param0);
  CastleAllianceBookmarkSetTimeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.timeSelector = new __dep_export_TimeSelectionComponent.TimeSelectionComponent(this.dialogDisp, "Bookmarks_alliance_setTime_minTime_tooltip", "Bookmarks_alliance_setTime_maxTime_tooltip");
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_help]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    var __s5local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_setTime_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_setTime_copy", [__s5local0]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_setTime_attackTime_copy")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dateTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("Bookmarks_alliance_setTime_attackDay_copy"));
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.timeSelector.show(this.dialogProperties.preselectedTime, this.dialogProperties.minDelayInSeconds, this.dialogProperties.maxDelayInSeconds);
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.timeSelector.hide();
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.acceptCurrentEditTime();
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_bookmarks_alliance_setTime"));
      }
    }
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.acceptCurrentEditTime = function () {
    if (this.dialogProperties.timeWasSetCallback) {
      this.dialogProperties.timeWasSetCallback(this.timeSelector.selectedTime);
    }
  };
  Object.defineProperty(CastleAllianceBookmarkSetTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBookmarkSetTimeDialog.__initialize_static_members = function () {
    CastleAllianceBookmarkSetTimeDialog.NAME = "CastleAllianceBookmarkSetTime";
  };
  return CastleAllianceBookmarkSetTimeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceBookmarkSetTimeDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
