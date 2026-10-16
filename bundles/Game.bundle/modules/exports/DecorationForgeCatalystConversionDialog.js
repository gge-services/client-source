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
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_FusionForgeEvent = require("gge-module:export_FusionForgeEvent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DecorationForgeSelectionListItemVO = require("gge-module:export_DecorationForgeSelectionListItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeCatalystConversionDialog() {
    return __s1param0.call(this, DecorationForgeCatalystConversionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeCatalystConversionDialog, __s1param0);
  DecorationForgeCatalystConversionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_rechargeEnergy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.dialogDisp.addChild(this.dialogDisp.btn_rechargeEnergy);
    this.dialogDisp.addChild(this.dialogDisp.btn_close);
    this.dialogDisp.addChild(this.dialogDisp.btn_help);
    this.dialogDisp.addChild(this.dialogDisp.mc_list);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_catalystConversion_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_catalystTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_catalystConversion_catalysts"))).autoFitToBounds = true;
    this.dialogDisp.mc_decoDust.mouseChildren = false;
    this.dialogDisp.mc_energy.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.mc_decoDust.toolTipText = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DECO_DUST).getTooltipTextId();
    this.dialogDisp.mc_energy.toolTipText = "fusionEnergy";
    this.dialogDisp.btn_rechargeEnergy.toolTipText = "dialog_decoForge_forgeEnergyRecharge_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_noSelection.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_catalystConversion_desc")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._itemList = new __dep_export_DecorationForgeSelectionList.DecorationForgeSelectionList(this.dialogDisp.mc_list, __dep_export_DecorationForgeCatalystConversionDialogListItemVE.DecorationForgeCatalystConversionDialogListItemVE, 5);
    this._infoBoxDisassemble = new __dep_export_DecorationForgeCatalystConversionDialogInfoBoxDisassemble.DecorationForgeCatalystConversionDialogInfoBoxDisassemble(this.dialogDisp.mc_disassemble);
    this._infoBoxAssemble = new __dep_export_DecorationForgeCatalystConversionDialogInfoBoxAssemble.DecorationForgeCatalystConversionDialogInfoBoxAssemble(this.dialogDisp.mc_assemble);
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig(__dep_export_ClientConstFusion.ClientConstFusion.POPOVER_ASSET_NAME_ACTION));
  };
  DecorationForgeCatalystConversionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._itemList.onShow();
    this._infoBoxAssemble.onShow();
    this._infoBoxDisassemble.onShow();
    this._popoverComponent.onShow();
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_CATALYST_CONVERSION_DONE, this.bindFunction(this.onCatalystConversionDone));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._itemList.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._infoBoxAssemble.onButtonsChanged.add(this.bindFunction(this.onInfoBoxButtonsChanged));
    this._infoBoxDisassemble.onButtonsChanged.add(this.bindFunction(this.onInfoBoxButtonsChanged));
    this.updateAllInfos();
  };
  DecorationForgeCatalystConversionDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_CATALYST_CONVERSION_DONE, this.bindFunction(this.onCatalystConversionDone));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._itemList.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._infoBoxAssemble.onButtonsChanged.remove(this.bindFunction(this.onInfoBoxButtonsChanged));
    this._infoBoxDisassemble.onButtonsChanged.remove(this.bindFunction(this.onInfoBoxButtonsChanged));
    this._itemList.onHide();
    this._infoBoxAssemble.onHide();
    this._infoBoxDisassemble.onHide();
    this._popoverComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  DecorationForgeCatalystConversionDialog.prototype.updateAllInfos = function () {
    this.updateDustInfo();
    this.updateEnergyInfo();
    this.updateList();
    this.updateInfoBoxes();
    this.updateNoSelectionInfo();
  };
  DecorationForgeCatalystConversionDialog.prototype.updateDustInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_decoDust.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DECO_DUST)));
  };
  DecorationForgeCatalystConversionDialog.prototype.updateEnergyInfo = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_energy.txt_amount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_proportional_value", [__s15local0.currentEnergy, __s15local0.getFullEnergy()]));
    this.updateEnergyProgressTooltip();
    var __s15local1 = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.dialogDisp.mc_energyProgress, 238);
    __s15local1.setProgressByPercent(__s15local0.getCurrentEnergyFillFactor());
    __s15local1.fillMc = this.dialogDisp.mc_energyProgress.mc_overfill;
    __s15local1.setProgressByPercent(__s15local0.getCurrentEnergyOverfillFactor());
  };
  DecorationForgeCatalystConversionDialog.prototype.updateEnergyProgressTooltip = function () {
    this.dialogDisp.mc_energyProgress.toolTipText = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).getEnergyProgressbarTooltipText();
  };
  DecorationForgeCatalystConversionDialog.prototype.updateList = function () {
    var __s19local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).getAvailableCatalysts();
    var __s19local1 = [];
    if (__s19local0 != null) {
      for (var __s19local2 = 0, __s19local3 = __s19local0; __s19local2 < __s19local3.length; __s19local2++) {
        var __s19local4 = __s19local3[__s19local2];
        if (__s19local4 !== undefined) {
          __s19local1.push(new __dep_export_DecorationForgeSelectionListItemVO.DecorationForgeSelectionListItemVO(__s19local4, __s19local4.equals(this.dialogProperties.preselectedCatalystVO)));
        }
      }
    }
    this._itemList.updateWithNewData(__s19local1);
  };
  DecorationForgeCatalystConversionDialog.prototype.updateInfoBoxes = function (__s25param0 = true) {
    var __s25local0 = this._itemList.getSelectedItemVO();
    var __s25local1 = __s25local0 ? __s25local0.data : null;
    this._infoBoxDisassemble.updateWithNewData(__s25local1, __s25param0);
    this._infoBoxAssemble.updateWithNewData(__s25local1, __s25param0);
    this.updateInfoBoxOverlays();
  };
  DecorationForgeCatalystConversionDialog.prototype.updateInfoBoxOverlays = function () {
    this._infoBoxDisassemble.setOverlay(this._infoBoxAssemble.isShowingConfirmButtons);
    this._infoBoxAssemble.setOverlay(this._infoBoxDisassemble.isShowingConfirmButtons);
  };
  DecorationForgeCatalystConversionDialog.prototype.updateNoSelectionInfo = function () {
    this.dialogDisp.mc_noSelection.visible = this._itemList.getSelectedItemVO() == null;
  };
  DecorationForgeCatalystConversionDialog.prototype.showPopover = function (__s31param0) {
    var __s31local0 = __dep_exact_f855840627e6e145.int(__s31param0.FID);
    var __s31local1 = __dep_exact_f855840627e6e145.int(__s31param0.FCCD);
    var __s31local2 = __dep_exact_f855840627e6e145.int(__s31param0.FCID);
    var __s31local3 = __dep_exact_f855840627e6e145.int(__s31param0.FCCA);
    var __s31local4 = this._popoverComponent.getAssetDisp();
    if (__s31local1 == __dep_export_ClientConstFusion.ClientConstFusion.CATALYST_CONVERSION_DIRECTION_ASSEMBLE) {
      __s31local4.mc_icon.gotoAndStop(__dep_export_ClientConstFusion.ClientConstFusion.ACTION_POPOVER_FRAME_CUSTOM);
      var __s31local5 = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s31local4.mc_icon), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(60, 60)));
      __s31local5.updateWithNewVO(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s31local3, __s31local2));
      __s31local5.destroy();
      this.textFieldManager.registerTextField(__s31local4.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s31local3]));
    } else {
      __s31local4.mc_icon.gotoAndStop(__dep_export_ClientConstFusion.ClientConstFusion.ACTION_POPOVER_FRAME_DUST);
      var __s31local6 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCatalystInfo(__s31local0, __s31local2);
      this.textFieldManager.registerTextField(__s31local4.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s31local6.addDecoDust * __s31local3]));
    }
    this._popoverComponent.startSequence();
  };
  DecorationForgeCatalystConversionDialog.prototype.onClick = function (__s35param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s35param0.target)) {
      __s1param0.prototype.onClick.call(this, __s35param0);
      switch (__s35param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_rechargeEnergy:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_DecorationForgeRechargeEnergyDialog.DecorationForgeRechargeEnergyDialog);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_catalystConversion_help"));
      }
    }
  };
  DecorationForgeCatalystConversionDialog.prototype.onSelectionChanged = function () {
    this.updateInfoBoxes();
    this.updateNoSelectionInfo();
  };
  DecorationForgeCatalystConversionDialog.prototype.onCurrenciesUpdated = function (__s41param0) {
    this.updateDustInfo();
    this.updateInfoBoxes(false);
  };
  DecorationForgeCatalystConversionDialog.prototype.onFusionForgeInfoUpdated = function (__s43param0) {
    this.updateEnergyInfo();
    this.updateInfoBoxes(false);
  };
  DecorationForgeCatalystConversionDialog.prototype.onTimer = function (__s45param0) {
    this.updateEnergyProgressTooltip();
  };
  DecorationForgeCatalystConversionDialog.prototype.onInfoBoxButtonsChanged = function () {
    this.updateInfoBoxOverlays();
  };
  DecorationForgeCatalystConversionDialog.prototype.onCatalystConversionDone = function (__s49param0) {
    this.showPopover(__s49param0.params[0]);
  };
  Object.defineProperty(DecorationForgeCatalystConversionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeCatalystConversionDialog.__initialize_static_members = function () {
    DecorationForgeCatalystConversionDialog.NAME = "DecorationForgeCatalystConversion";
  };
  return DecorationForgeCatalystConversionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeCatalystConversionDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_DecorationForgeSelectionList = require("gge-module:export_DecorationForgeSelectionList");
var __dep_export_DecorationForgeRechargeEnergyDialog = require("gge-module:export_DecorationForgeRechargeEnergyDialog");
var __dep_export_DecorationForgeCatalystConversionDialogListItemVE = require("gge-module:export_DecorationForgeCatalystConversionDialogListItemVE");
var __dep_export_DecorationForgeCatalystConversionDialogInfoBoxAssemble = require("gge-module:export_DecorationForgeCatalystConversionDialogInfoBoxAssemble");
var __dep_export_DecorationForgeCatalystConversionDialogInfoBoxDisassemble = require("gge-module:export_DecorationForgeCatalystConversionDialogInfoBoxDisassemble");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
