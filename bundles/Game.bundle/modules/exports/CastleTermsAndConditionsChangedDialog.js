Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleTermsAndConditionsChangedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTermsAndConditionsChangedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTermsAndConditionsChangedDialog, __s1param0);
  CastleTermsAndConditionsChangedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_gotoTermsAndConditions]);
    this.setText();
  };
  CastleTermsAndConditionsChangedDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("general_tcmailing_subject")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descriptionTop, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("general_tcmailing_2015_text1")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descriptionBottom, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("general_tcmailing_2015_text2")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoTermsAndConditions.txt_goToTermsAndConditions, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("read_t_and_c")).autoFitToBounds = true;
  };
  CastleTermsAndConditionsChangedDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_gotoTermsAndConditions:
        var __s9local0 = new __dep_exact_81dacdf05bd32292.URLRequest(__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.urlAGB);
        __dep_exact_81dacdf05bd32292_2.navigateToURL(__s9local0, "goodgamestudios");
        __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.VIEW_AGB);
    }
  };
  CastleTermsAndConditionsChangedDialog.__initialize_static_members = function () {
    CastleTermsAndConditionsChangedDialog.NAME = "CastleTermsAndConditionsChanged";
  };
  return CastleTermsAndConditionsChangedDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTermsAndConditionsChangedDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
