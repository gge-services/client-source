Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleLostPasswordDialog() {
    var __s3local0 = this;
    __s3local0._inputBehaviours = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleLostPassword_M"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLostPasswordDialog, __s1param0);
  CastleLostPasswordDialog.prototype.onKeyUp = function (__s5param0) {
    __s1param0.prototype.onKeyUp.call(this, __s5param0);
    if (__s5param0.key == __dep_exact_81dacdf05bd32292_1.Keyboard.ENTER) {
      this.onButtonOK();
    }
  };
  CastleLostPasswordDialog.prototype.applyProperties = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_ok.label = this.dialogProperties.buttonLabel_yes;
    this.dialogDisp.btn_cancle.label = this.dialogProperties.buttonLabel_no;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.title));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_mail, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_forgotPassword_desc")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.BOTTOM;
    this.i_input = this.textFieldManager.registerTextField(this.dialogDisp.input_email.inputField, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._inputBehaviours = [];
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.input_email, this.i_input, false));
    this._inputBehaviours.forEach(function (__s10param0) {
      return __s10param0.onShow();
    });
    this.i_input.textContentVO.stringValue = this.dialogProperties.email;
  };
  CastleLostPasswordDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._inputBehaviours.forEach(function (__s14param0) {
      return __s14param0.onHide();
    });
  };
  CastleLostPasswordDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.dialogDisp.btn_ok:
        this.onButtonOK();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.dialogProperties.functionNo != null) {
          this.dialogProperties.functionNo(null);
        }
    }
  };
  CastleLostPasswordDialog.prototype.onButtonOK = function () {
    if (__dep_exact_9e901e8e2483a22f_3.TextValide.isEmailString(this.i_input.text)) {
      if (this.i_input.text.length > 0 && __dep_exact_9e901e8e2483a22f_3.TextValide.isSmartFoxValide(this.i_input.text)) {
        this.sendLostPassword();
        this.hide();
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_warning"), __dep_exact_92d05af59ee2ff30_1.Localize.text("generic_register_email_copy")));
      }
    } else {
      __dep_exact_9e901e8e2483a22f_4.info(this.i_input.text);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_warning"), __dep_exact_92d05af59ee2ff30_1.Localize.text("generic_register_error_invalidemail")));
    }
  };
  CastleLostPasswordDialog.prototype.sendLostPassword = function () {
    __dep_exact_9e901e8e2483a22f_1.BasicLostPasswordCommand.sendMessage(this.i_input.text);
  };
  Object.defineProperty(CastleLostPasswordDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLostPasswordDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLostPasswordDialog.__initialize_static_members = function () {
    CastleLostPasswordDialog.NAME = "CastleLostPasswordDialog";
  };
  return CastleLostPasswordDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleLostPasswordDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
