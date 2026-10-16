Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastlePrivateOfferRubymineDoneDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferRubymineDoneDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferRubymineDoneDialog, __s1param0);
  CastlePrivateOfferRubymineDoneDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("alert_rubymine_depleated_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("alert_rubymine_depleated_copy"));
  };
  CastlePrivateOfferRubymineDoneDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferRubymineDoneDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferRubymineDoneDialog.__initialize_static_members = function () {
    CastlePrivateOfferRubymineDoneDialog.NAME = "CastlePrivateOfferRubymineDone";
  };
  return CastlePrivateOfferRubymineDoneDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePrivateOfferRubymineDoneDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
