Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __s0local0 = function (__s1param0) {
  function CastleNoMoneyC1Dialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleNoMoneyC1Dialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNoMoneyC1Dialog, __s1param0);
  CastleNoMoneyC1Dialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_tax]);
  };
  CastleNoMoneyC1Dialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_NoMoneyC1_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_NoMoneyC1_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_youNeed, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_NoMoneyC1_goToTax"));
    this.dialogDisp.btn_tax.toolTipText = "panel_action_tax";
    this.dialogDisp.btn_tax.visible = true;
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, this.dialogDisp.mc_char, 194, 138);
  };
  CastleNoMoneyC1Dialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_tax:
        this.hide();
        this.openTaxDialog();
    }
  };
  CastleNoMoneyC1Dialog.prototype.openTaxDialog = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
  };
  CastleNoMoneyC1Dialog.__initialize_static_members = function () {
    CastleNoMoneyC1Dialog.NAME = "CastleNoMoneyC1Ex";
  };
  return CastleNoMoneyC1Dialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleNoMoneyC1Dialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
