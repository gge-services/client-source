Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __s0local0 = function (__s1param0) {
  function CastleCharacterYesNoOKDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleCharacterYesNoOKDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCharacterYesNoOKDialog, __s1param0);
  CastleCharacterYesNoOKDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes]);
  };
  CastleCharacterYesNoOKDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(this.charcterYesNoOKDialogProperties.title));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(this.charcterYesNoOKDialogProperties.copy)).autoFitToBounds = true;
    this.dialogDisp.btn_no.visible = this.charcterYesNoOKDialogProperties.showCancleButton;
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(this.charcterYesNoOKDialogProperties.character, this.dialogDisp.mc_char, 167, 191);
  };
  CastleCharacterYesNoOKDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.charcterYesNoOKDialogProperties.functionYes != null) {
          this.charcterYesNoOKDialogProperties.functionYes(this.charcterYesNoOKDialogProperties.params);
        }
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.charcterYesNoOKDialogProperties.functionNo != null) {
          this.charcterYesNoOKDialogProperties.functionNo(null);
        }
    }
  };
  Object.defineProperty(CastleCharacterYesNoOKDialog.prototype, "charcterYesNoOKDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCharacterYesNoOKDialog.__initialize_static_members = function () {
    CastleCharacterYesNoOKDialog.NAME = "CastleCharacterYesNoOKExt";
  };
  return CastleCharacterYesNoOKDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleCharacterYesNoOKDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
