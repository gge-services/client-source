Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function DecorationForgeNotEnoughEnergyDialog() {
    return __s1param0.call(this, DecorationForgeNotEnoughEnergyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeNotEnoughEnergyDialog, __s1param0);
  DecorationForgeNotEnoughEnergyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_recharge], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("attention"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_insufficientEnergyAlert_subtitle"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rechargeTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_decoForge_insufficientEnergyAlert_recharge")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_recharge.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("recharge")).autoFitToBounds = true;
    this.dialogDisp.mc_item.mouseChilren = false;
    this.dialogDisp.mc_item.toolTipText = "fusionEnergy";
  };
  DecorationForgeNotEnoughEnergyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateInfo();
  };
  DecorationForgeNotEnoughEnergyDialog.prototype.updateInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_item.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_proportional_value", [this.dialogProperties.costAmount, this.dialogProperties.amountInStorage])).autoFitToBounds = true;
  };
  DecorationForgeNotEnoughEnergyDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_recharge:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_DecorationForgeRechargeEnergyDialog.DecorationForgeRechargeEnergyDialog);
          this.hide();
      }
    }
  };
  Object.defineProperty(DecorationForgeNotEnoughEnergyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeNotEnoughEnergyDialog.__initialize_static_members = function () {
    DecorationForgeNotEnoughEnergyDialog.NAME = "DecorationForgeNotEnoughEnergy";
  };
  return DecorationForgeNotEnoughEnergyDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeNotEnoughEnergyDialog = __s0local0;
var __dep_export_DecorationForgeRechargeEnergyDialog = require("gge-module:export_DecorationForgeRechargeEnergyDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
