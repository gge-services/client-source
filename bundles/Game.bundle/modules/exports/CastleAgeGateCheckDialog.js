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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function (__s1param0) {
  function CastleAgeGateCheckDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAgeGateCheckDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAgeGateCheckDialog, __s1param0);
  CastleAgeGateCheckDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_register_age"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("commons_continue"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_bubble.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("error_age_invalid"));
    this.i_txt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_age, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.i_txt_input.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this.i_txt_input.selectable = true;
    this.i_txt_input.restrict = "0-9";
    this.i_txt_input.maxChars = 2;
    this.dialogDisp.mc_bubble.visible = false;
  };
  CastleAgeGateCheckDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__s7param0.target == this.dialogDisp.btn_ok) {
      this.checkAge();
    }
  };
  CastleAgeGateCheckDialog.prototype.checkAge = function () {
    if (this.i_txt_input.text.length == 0) {
      this.showBubble();
    } else {
      __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_VALIDATE_AGE, new __dep_exact_9e901e8e2483a22f.AgeGateValidationVO(__dep_exact_f855840627e6e145.int(this.i_txt_input.text), this.bindFunction(this.onFinishValidation)));
    }
  };
  CastleAgeGateCheckDialog.prototype.showBubble = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_bubble, 0.5, {
      visible: true,
      scaleY: 0,
      scaleX: 0
    }, {
      scaleY: 1,
      scaleX: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleAgeGateCheckDialog.prototype.onFinishValidation = function (__s16param0) {
    if (__s16param0) {
      if (__dep_exact_9e901e8e2483a22f_3.BasicModel.ageGateData.autoLoginTryFailed) {
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_LOGIN);
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
      } else {
        this.layoutManager.state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_STARTSCREEN;
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAgeGateCheckFailedDialog.CastleAgeGateCheckFailedDialog);
    }
    this.hide();
  };
  CastleAgeGateCheckDialog.__initialize_static_members = function () {
    CastleAgeGateCheckDialog.NAME = "CastleAgeGateCheck";
  };
  return CastleAgeGateCheckDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAgeGateCheckDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAgeGateCheckFailedDialog = require("gge-module:export_CastleAgeGateCheckFailedDialog");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
