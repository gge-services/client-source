Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleLargeYesNoDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 || CastleLargeYesNoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLargeYesNoDialog, __s1param0);
  CastleLargeYesNoDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.titleField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.titleField.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.copyField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleLargeYesNoDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.dialogDisp.btn_yes.label = this.standardDialogProperties.buttonLabel_yes;
    this.dialogDisp.btn_no.label = this.standardDialogProperties.buttonLabel_no;
    if (this.standardDialogProperties.hasNoButton) {
      this.dialogDisp.btn_no.visible = true;
      this.dialogDisp.btn_no_shadow.visible = true;
    } else {
      this.dialogDisp.btn_no.visible = false;
      this.dialogDisp.btn_no_shadow.visible = false;
    }
    this.titleField.textContentVO.stringValue = this.standardDialogProperties.title;
    this.copyField.textContentVO.stringValue = this.standardDialogProperties.copy;
  };
  CastleLargeYesNoDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_yes:
          this.hide();
          if (this.standardDialogProperties.functionYes != null) {
            this.standardDialogProperties.functionYes(null);
          }
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          if (this.standardDialogProperties.functionClose != null) {
            this.standardDialogProperties.functionClose(null);
          }
          break;
        case this.dialogDisp.btn_no:
          this.hide();
          if (this.standardDialogProperties.functionNo != null) {
            this.standardDialogProperties.functionNo(null);
          }
      }
    }
  };
  Object.defineProperty(CastleLargeYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLargeYesNoDialog.__initialize_static_members = function () {
    CastleLargeYesNoDialog.NAME = "CastleLargeYesNoEx";
  };
  return CastleLargeYesNoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleLargeYesNoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
