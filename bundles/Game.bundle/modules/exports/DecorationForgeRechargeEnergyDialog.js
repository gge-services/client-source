Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SSkipFusionRechargeEventVO = require("gge-module:export_C2SSkipFusionRechargeEventVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_FusionForgeEvent = require("gge-module:export_FusionForgeEvent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = function (__s1param0) {
  function DecorationForgeRechargeEnergyDialog() {
    return __s1param0.call(this, DecorationForgeRechargeEnergyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeRechargeEnergyDialog, __s1param0);
  DecorationForgeRechargeEnergyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_buyPremium.btn_buy], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_rechargeEnergy_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_options, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_rechargeEnergy_subtitle")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_rechargeEnergy_premium_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_rechargeEnergy_premium_subtitle")).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "help";
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig(__dep_export_ClientConstFusion.ClientConstFusion.POPOVER_ASSET_NAME_ACTION));
    this.dialogDisp.mc_energyProgress.mouseChildren = false;
  };
  DecorationForgeRechargeEnergyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyRecharged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._popoverComponent.onShow();
    this.updateAllInfos();
  };
  DecorationForgeRechargeEnergyDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyRecharged));
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._popoverComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  DecorationForgeRechargeEnergyDialog.prototype.updateAllInfos = function () {
    this.updateEnergyProgress();
    this.updatePremiumRechargeInfo();
  };
  DecorationForgeRechargeEnergyDialog.prototype.updateEnergyProgress = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_energyProgress.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_proportional_value", [__s13local0.currentEnergy, __s13local0.getFullEnergy()]));
    this.updateEnergyProgressTooltip();
    var __s13local1 = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.dialogDisp.mc_energyProgress, 379);
    __s13local1.setProgressByPercent(__s13local0.getCurrentEnergyFillFactor());
    __s13local1.fillMc = this.dialogDisp.mc_energyProgress.mc_overfill;
    __s13local1.setProgressByPercent(__s13local0.getCurrentEnergyOverfillFactor());
  };
  DecorationForgeRechargeEnergyDialog.prototype.updateEnergyProgressTooltip = function () {
    this.dialogDisp.mc_energyProgress.toolTipText = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).getEnergyProgressbarTooltipText();
  };
  DecorationForgeRechargeEnergyDialog.prototype.updatePremiumRechargeInfo = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_valueFrom, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s17local0.currentEnergy)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_valueTo, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s17local0.getEnergyAfterPremiumSkip())).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_info, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_rechargeEnergy_premium_result", [__dep_export_ClientConstFusion.ClientConstFusion.FULL_ENERGY_PERCENTAGE])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s17local0.getC2PriceForEnergyPremiumSkip())).autoFitToBounds = true;
    var __s17local1 = __s17local0.getCurrentEnergyFillFactor() <= __dep_export_ClientConstFusion.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_buyPremium.btn_buy, __s17local1);
  };
  DecorationForgeRechargeEnergyDialog.prototype.showPopover = function (__s19param0) {
    __dep_exact_f855840627e6e145.int(__s19param0.FID);
    var __s19local0 = __dep_exact_f855840627e6e145.int(__s19param0.FE);
    var __s19local1 = this._popoverComponent.getAssetDisp();
    __s19local1.mc_icon.gotoAndStop(__dep_export_ClientConstFusion.ClientConstFusion.ACTION_POPOVER_FRAME_ENERGY);
    this.textFieldManager.registerTextField(__s19local1.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s19local0])).autoFitToBounds = true;
    this._popoverComponent.startSequence();
  };
  DecorationForgeRechargeEnergyDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_buyPremium.btn_buy:
          this.onPremiumBuyButtonClicked();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_rechargeEnergy_help"));
      }
    }
  };
  DecorationForgeRechargeEnergyDialog.prototype.onPremiumBuyButtonClicked = function () {
    var __s25local0 = new __dep_export_CollectableList.CollectableList();
    __s25local0.addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).getC2PriceForEnergyPremiumSkip()));
    if (__dep_export_CostHelper.CostHelper.canAfford(new __dep_export_CollectablesCosts.CollectablesCosts(__s25local0))) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkipFusionRechargeEventVO.C2SSkipFusionRechargeEventVO(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, true));
      __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).requestDataFromServer();
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    }
  };
  DecorationForgeRechargeEnergyDialog.prototype.onFusionForgeInfoUpdated = function (__s29param0) {
    this.updateAllInfos();
  };
  DecorationForgeRechargeEnergyDialog.prototype.onTimer = function (__s31param0) {
    this.updateEnergyProgressTooltip();
  };
  DecorationForgeRechargeEnergyDialog.prototype.onEnergyRecharged = function (__s33param0) {
    this.showPopover(__s33param0.params[0]);
    this.updateAllInfos();
  };
  DecorationForgeRechargeEnergyDialog.__initialize_static_members = function () {
    DecorationForgeRechargeEnergyDialog.NAME = "DecorationForgeRechargeEnergy";
  };
  return DecorationForgeRechargeEnergyDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeRechargeEnergyDialog = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
