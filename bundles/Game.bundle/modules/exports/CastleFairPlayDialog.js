Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstURL = require("gge-module:export_ClientConstURL");
var __dep_export_LinkComponent = require("gge-module:export_LinkComponent");
var __s0local0 = function (__s1param0) {
  function CastleFairPlayDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFairPlayDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFairPlayDialog, __s1param0);
  CastleFairPlayDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fairplayMessage_header"));
    this._textLinkComponent = new __dep_export_LinkComponent.LinkComponent(this.dialogDisp.mc_desc, "dialog_fairplayMessage_copy", __dep_export_ClientConstURL.ClientConstURL.URL_EMPIRE_FORUMS + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.currentCountryLanguageCode);
  };
  CastleFairPlayDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._textLinkComponent.update();
  };
  CastleFairPlayDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleFairPlayDialog.__initialize_static_members = function () {
    CastleFairPlayDialog.NAME = "CastleFairPlay";
  };
  return CastleFairPlayDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFairPlayDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
