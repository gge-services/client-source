Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleWelcomebackDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWelcomebackDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWelcomebackDialog, __s1param0);
  CastleWelcomebackDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleWelcomebackDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_comeback_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_comeback_copy"));
    this.itxt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_multiplied", [0]));
    this.itxt_value.textContentVO.textId = "value_multiplied";
    this.itxt_value.textContentVO.textReplacements = [this.dialogProperties.amountC2];
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (!this.isOutOfTutorial()) {
      this.hide();
    }
  };
  CastleWelcomebackDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleWelcomebackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomebackDialog.__initialize_static_members = function () {
    CastleWelcomebackDialog.NAME = "CastleWellcomeBack";
  };
  return CastleWelcomebackDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleWelcomebackDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
