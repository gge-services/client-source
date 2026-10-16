Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function OfficersSchoolDialog() {
    return __s1param0.call(this, OfficersSchoolDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolDialog, __s1param0);
  OfficersSchoolDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_list, this.dialogDisp.btn_tab_unlocked]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(OfficersSchoolDialog.TAB_MAIN, new __dep_export_OfficersSchoolDialogList.OfficersSchoolDialogList(this.dialogDisp.sublayer_list));
    this._subLayer.set(OfficersSchoolDialog.TAB_UNLOCK, new __dep_export_OfficersSchoolDialogUnlock.OfficersSchoolDialogUnlock(this.dialogDisp.sublayer_unlocked));
    this.dialogDisp.btn_tab_list.toolTipText = "dialog_trainingProgram_prolongProgram_header";
    this.dialogDisp.btn_tab_unlocked.toolTipText = "dialog_trainingProgram_unitUnlock_header";
  };
  OfficersSchoolDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.changeCategory(OfficersSchoolDialog.TAB_MAIN);
  };
  OfficersSchoolDialog.prototype.changeCategory = function (__s9param0) {
    function updateButton(__s11param0, __s11param1) {
      __s11param0.gotoAndStop(__s11param1 ? 2 : 1);
    }
    if (this._currentCategory != __s9param0) {
      __s1param0.prototype.changeCategory.call(this, __s9param0);
      this.showSublayer(this._subLayer.get(__s9param0), []);
      updateButton(this.dialogDisp.btn_tab_list, this._currentCategory == OfficersSchoolDialog.TAB_MAIN);
      updateButton(this.dialogDisp.btn_tab_unlocked, this._currentCategory == OfficersSchoolDialog.TAB_UNLOCK);
    }
  };
  OfficersSchoolDialog.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      __s1param0.prototype.onClick.call(this, __s14param0);
      switch (__s14param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_list:
          this.changeCategory(OfficersSchoolDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_unlocked:
          this.changeCategory(OfficersSchoolDialog.TAB_UNLOCK);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_trainingProgram_help_desc"));
      }
    }
  };
  OfficersSchoolDialog.NAME = "OfficersSchool";
  OfficersSchoolDialog.TAB_MAIN = "tab_main";
  OfficersSchoolDialog.TAB_UNLOCK = "tab_unlock";
  return OfficersSchoolDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.OfficersSchoolDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_OfficersSchoolDialogList = require("gge-module:export_OfficersSchoolDialogList");
var __dep_export_OfficersSchoolDialogUnlock = require("gge-module:export_OfficersSchoolDialogUnlock");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
