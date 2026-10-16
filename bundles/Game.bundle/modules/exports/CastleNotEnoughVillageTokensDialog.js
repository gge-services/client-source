Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleNotEnoughVillageTokensDialog() {
    return __s1param0.call(this, CastleNotEnoughVillageTokensDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNotEnoughVillageTokensDialog, __s1param0);
  CastleNotEnoughVillageTokensDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateResourceVillages_shop_notEnoughTokens_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateResourceVillages_shop_notEnoughTokens_desc"));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleNotEnoughVillageTokensDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleNotEnoughVillageTokensDialog.NAME = "CastleNotEnoughVillageTokens";
  return CastleNotEnoughVillageTokensDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleNotEnoughVillageTokensDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
