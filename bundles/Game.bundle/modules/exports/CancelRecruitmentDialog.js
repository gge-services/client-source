Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CancelRecruitmentDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CancelRecruitmentDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CancelRecruitmentDialog, __s1param0);
  CancelRecruitmentDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    var __s5local0 = this.dialogProperties.isSoldiers ? "dialog_cancelLoop_units_desc1" : "dialog_cancelLoop_tools_desc1";
    var __s5local1 = this.dialogProperties.isSoldiers ? "dialog_cancelLoop_units_desc2" : "dialog_cancelLoop_tools_desc2";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local1));
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close]);
  };
  CancelRecruitmentDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.confirmAction();
          this.hide();
      }
    }
  };
  CancelRecruitmentDialog.prototype.confirmAction = function () {
    this.dialogProperties.onCancelRecruitmentConfirmed();
  };
  Object.defineProperty(CancelRecruitmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CancelRecruitmentDialog.__initialize_static_members = function () {
    CancelRecruitmentDialog.NAME = "CancelRecruitment";
  };
  return CancelRecruitmentDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CancelRecruitmentDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
