Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastlePaymentDopplerMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePaymentDopplerMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentDopplerMessageDialog, __s1param0);
  CastlePaymentDopplerMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_paymentdoubler_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_paymentdoubler_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hint, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  CastlePaymentDopplerMessageDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastlePaymentDopplerMessageDialog.__initialize_static_members = function () {
    CastlePaymentDopplerMessageDialog.NAME = "CastlePaymentDopplerMessageEx";
  };
  return CastlePaymentDopplerMessageDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePaymentDopplerMessageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
