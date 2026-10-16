Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_FusionForgeHubDialogProperties = require("gge-module:export_FusionForgeHubDialogProperties");
var __dep_export_DecorationForgeQuickGuideInfoDialogProperties = require("gge-module:export_DecorationForgeQuickGuideInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function DecorationForgeQuickGuideDialog() {
    return __s1param0.call(this, DecorationForgeQuickGuideDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeQuickGuideDialog, __s1param0);
  DecorationForgeQuickGuideDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.initBasicButtons([this.dialogDisp.btn_info0, this.dialogDisp.btn_info1, this.dialogDisp.btn_info2, this.dialogDisp.btn_info3, this.dialogDisp.btn_info4, this.dialogDisp.btn_info5, this.dialogDisp.btn_buy_source, this.dialogDisp.btn_buy_dust]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_intro1_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_intro2_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_quickGuide_intro1_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_quickGuide_intro2_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_quickGuide_moreInfo_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info0, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_target_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info1, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_source_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info2, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_catalyst_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info3, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_forge_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info4, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_energy_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info5, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_dust_title"))));
  };
  DecorationForgeQuickGuideDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_quickGuide_help"));
          break;
        case this.dialogDisp.btn_info0:
          this.openInfoDialog("target", "target", "InfoPicTarget");
          break;
        case this.dialogDisp.btn_info1:
          this.openInfoDialog("source", "source", "InfoPicSource");
          break;
        case this.dialogDisp.btn_info2:
          this.openInfoDialog("catalyst", "catalyst", "InfoPicCatalyst");
          break;
        case this.dialogDisp.btn_info3:
          this.openInfoDialog("forge", "forge", "InfoPicForge");
          break;
        case this.dialogDisp.btn_info4:
          this.openInfoDialog("energy", "energy", "InfoPicEnergy");
          break;
        case this.dialogDisp.btn_info5:
          this.openInfoDialog("dust", "dust", "InfoPicDust");
          break;
        case this.dialogDisp.btn_buy_source:
        case this.dialogDisp.btn_buy_dust:
          this.layoutManager.hideAllDialogsExcept([]);
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_FusionForgeHubDialog.FusionForgeHubDialog, new __dep_export_FusionForgeHubDialogProperties.FusionForgeHubDialogProperties(__dep_export_FusionForgeHubDialog.FusionForgeHubDialog.TAB_SHOP_HARD));
      }
    }
  };
  DecorationForgeQuickGuideDialog.prototype.openInfoDialog = function (__s11param0, __s11param1, __s11param2) {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_DecorationForgeQuickGuideInfoDialog.DecorationForgeQuickGuideInfoDialog, new __dep_export_DecorationForgeQuickGuideInfoDialogProperties.DecorationForgeQuickGuideInfoDialogProperties(__s11param0, __s11param1, __s11param2));
  };
  DecorationForgeQuickGuideDialog.NAME = "DecorationForgeQuickGuide";
  return DecorationForgeQuickGuideDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeQuickGuideDialog = __s0local0;
var __dep_export_FusionForgeHubDialog = require("gge-module:export_FusionForgeHubDialog");
var __dep_export_DecorationForgeQuickGuideInfoDialog = require("gge-module:export_DecorationForgeQuickGuideInfoDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
