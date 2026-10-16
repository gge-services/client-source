Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SLevelUpFusionForgeEventVO = require("gge-module:export_C2SLevelUpFusionForgeEventVO");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_FusionForgeEvent = require("gge-module:export_FusionForgeEvent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DecorationForgeCatalystConversionDialogProperties = require("gge-module:export_DecorationForgeCatalystConversionDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeUpgradeDialog() {
    return __s1param0.call(this, DecorationForgeUpgradeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeUpgradeDialog, __s1param0);
  DecorationForgeUpgradeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_add, this.dialogDisp.btn_levelUp], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_upgradeForge_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("forgeLevel"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_upgradeForge_energyCap"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_upgradeForge_energyCharge"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("bonusFusionXP"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_levelUp.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_upgradeForge_levelUp")).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "help";
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig(__dep_export_ClientConstFusion.ClientConstFusion.POPOVER_ASSET_NAME_ACTION));
  };
  DecorationForgeUpgradeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_LEVEL_UP, this.bindFunction(this.onForgeLevelUp));
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this._popoverComponent.onShow();
    this.updateAllInfos();
  };
  DecorationForgeUpgradeDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_LEVEL_UP, this.bindFunction(this.onForgeLevelUp));
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this._popoverComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  DecorationForgeUpgradeDialog.prototype.updateAllInfos = function () {
    this.updateForgeData();
    this.updateInfos();
    this.updateCost();
    this.updateLevelUpButton();
  };
  DecorationForgeUpgradeDialog.prototype.updateForgeData = function () {
    this._forgeData = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
  };
  DecorationForgeUpgradeDialog.prototype.updateInfos = function () {
    var __s15local0 = this._forgeData.level;
    var __s15local1 = __s15local0 + 1;
    var __s15local2 = 0;
    var __s15local3 = 0;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelFrom, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("forgeLevel_value", [__s15local0]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelTo, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("forgeLevel_value", [__s15local1]));
    __s15local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyCap(__s15local0));
    __s15local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyCap(__s15local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyFrom, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local2));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyTo, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local3));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyToAdd, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_brackets_add", [__s15local3 - __s15local2]));
    __dep_export_ClientConstFusion.ClientConstFusion.alignAddTextField(this.dialogDisp.txt_energyTo, this.dialogDisp.txt_energyToAdd);
    __s15local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyRechargeAmount(__s15local0));
    __s15local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionEnergyRechargeAmount(__s15local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeFrom, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local2));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeTo, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local3));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeToAdd, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_brackets_add", [__s15local3 - __s15local2]));
    __dep_export_ClientConstFusion.ClientConstFusion.alignAddTextField(this.dialogDisp.txt_energyRechargeTo, this.dialogDisp.txt_energyRechargeToAdd);
    __s15local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPWithForgeMax(1, 1, __s15local0));
    __s15local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPWithForgeMax(1, 1, __s15local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpFrom, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local2));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpTo, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s15local3));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpToAdd, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_brackets_add", [__s15local3 - __s15local2]));
    __dep_export_ClientConstFusion.ClientConstFusion.alignAddTextField(this.dialogDisp.txt_xpTo, this.dialogDisp.txt_xpToAdd);
  };
  DecorationForgeUpgradeDialog.prototype.updateCost = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_costs), this._forgeData.getCostForForgeLevelUp(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(30, 30)));
  };
  DecorationForgeUpgradeDialog.prototype.updateLevelUpButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_levelUp, __dep_export_CostHelper.CostHelper.canAfford(__dep_export_CollectableHelper.CollectableHelper.createCostList([this._forgeData.getCostForForgeLevelUp()])));
  };
  DecorationForgeUpgradeDialog.prototype.showPopover = function (__s21param0) {
    __dep_exact_f855840627e6e145.int(__s21param0.FID);
    var __s21local0 = __dep_exact_f855840627e6e145.int(__s21param0.FL);
    var __s21local1 = this._popoverComponent.getAssetDisp();
    __s21local1.mc_icon.gotoAndStop(__dep_export_ClientConstFusion.ClientConstFusion.ACTION_POPOVER_FRAME_LEVEL);
    this.textFieldManager.registerTextField(__s21local1.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("forgeLevel_value", [__s21local0])).autoFitToBounds = true;
    this._popoverComponent.startSequence();
  };
  DecorationForgeUpgradeDialog.prototype.onClick = function (__s23param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      __s1param0.prototype.onClick.call(this, __s23param0);
      switch (__s23param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_levelUp:
          this.onLevelUpButtonClicked();
          break;
        case this.dialogDisp.btn_add:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_DecorationForgeCatalystConversionDialog.DecorationForgeCatalystConversionDialog, new __dep_export_DecorationForgeCatalystConversionDialogProperties.DecorationForgeCatalystConversionDialogProperties());
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_upgradeForge_help"));
      }
    }
  };
  DecorationForgeUpgradeDialog.prototype.onLevelUpButtonClicked = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLevelUpFusionForgeEventVO.C2SLevelUpFusionForgeEventVO(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID));
  };
  DecorationForgeUpgradeDialog.prototype.onSpecialCurrenciesUpdated = function (__s29param0) {
    this.updateCost();
    this.updateLevelUpButton();
  };
  DecorationForgeUpgradeDialog.prototype.onForgeLevelUp = function (__s31param0) {
    this.updateAllInfos();
    this.showPopover(__s31param0.params[0]);
  };
  DecorationForgeUpgradeDialog.prototype.onFusionForgeInfoUpdated = function (__s33param0) {
    this.updateAllInfos();
  };
  DecorationForgeUpgradeDialog.__initialize_static_members = function () {
    DecorationForgeUpgradeDialog.NAME = "DecorationForgeUpgrade";
  };
  return DecorationForgeUpgradeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeUpgradeDialog = __s0local1;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_DecorationForgeCatalystConversionDialog = require("gge-module:export_DecorationForgeCatalystConversionDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
