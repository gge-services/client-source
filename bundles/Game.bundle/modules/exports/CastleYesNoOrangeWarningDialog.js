Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleYesNoOrangeWarningDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleYesNoOrangeWarningDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleYesNoOrangeWarningDialog, __s1param0);
  CastleYesNoOrangeWarningDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.titleTxt = this.textFieldManager.registerTextField(this.dialog.titleTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.titleTxt.autoFitToBounds = true;
    this.descTxt = this.textFieldManager.registerTextField(this.dialog.descTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.descTxt.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialog.discardBtn.txtArea, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_oneTimeOffer_confirm_buttonNo")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialog.okBtn.txtArea, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_oneTimeOffer_confirm_buttonYes")).autoFitToBounds = true;
    this.initBasicButtons([this.dialog.discardBtn, this.dialog.okBtn, this.dialog.closeBtn]);
  };
  CastleYesNoOrangeWarningDialog.prototype.applyProperties = function () {
    this.titleTxt.textContentVO.textId = this.dialogProperties.titleTextId;
    this.descTxt.textContentVO.textId = this.dialogProperties.descTextId;
  };
  CastleYesNoOrangeWarningDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialog.okBtn:
      case this.dialog.closeBtn:
        this.hide();
        break;
      case this.dialog.discardBtn:
        this.hide();
        if (this.dialogProperties.cancelCallback != null) {
          this.dialogProperties.cancelCallback();
        }
    }
  };
  Object.defineProperty(CastleYesNoOrangeWarningDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleYesNoOrangeWarningDialog.prototype, "dialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleYesNoOrangeWarningDialog.__initialize_static_members = function () {
    CastleYesNoOrangeWarningDialog.NAME = "CastleYesNoOrangeWarningDialog";
  };
  return CastleYesNoOrangeWarningDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleYesNoOrangeWarningDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
