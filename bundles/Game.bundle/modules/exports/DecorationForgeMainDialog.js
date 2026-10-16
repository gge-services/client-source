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
var __dep_export_C2SDecoForgeFuseEventVO = require("gge-module:export_C2SDecoForgeFuseEventVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
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
var __dep_export_CastleFusionCompareToolTip = require("gge-module:export_CastleFusionCompareToolTip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_FusionForgeHubDialogProperties = require("gge-module:export_FusionForgeHubDialogProperties");
var __dep_export_DecorationForgeNotEnoughEnergyDialogProperties = require("gge-module:export_DecorationForgeNotEnoughEnergyDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeMainDialog() {
    return __s1param0.call(this, DecorationForgeMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeMainDialog, __s1param0);
  DecorationForgeMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_back, this.dialogDisp.btn_forgeLevel, this.dialogDisp.btn_rechargeEnergy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_fusionInfoCosts.btn_fusion, this.dialogDisp.mc_fusionInfoCosts.btn_premiumFusion], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_main_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forgeLevelTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("forgeLevel")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoDetail.txt_fusionTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("fusionNormal")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoDetail.txt_premiumFusionTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("fusionPremium")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoCosts.btn_fusion.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("fusionNormal")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoCosts.btn_premiumFusion.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("fusionPremium")).autoFitToBounds = true;
    this.dialogDisp.mc_energyProgress.mouseChildren = false;
    this.dialogDisp.mc_energy.mouseChildren = false;
    this.dialogDisp.mc_fusionCurrency.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.btn_back.toolTipText = "back";
    this.dialogDisp.mc_energy.toolTipText = "fusionEnergy";
    this.dialogDisp.btn_forgeLevel.toolTipText = "dialog_decoForge_forgeLevelButton_tooltip";
    this.dialogDisp.btn_rechargeEnergy.toolTipText = "dialog_decoForge_forgeEnergyRecharge_tooltip";
    this.dialogDisp.mc_fusionCurrency.toolTipText = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_FUSION_CURRENCY).getTooltipTextId();
    this._mergeButtons = new __dep_export_DecorationForgeMergeButtonsComponent.DecorationForgeMergeButtonsComponent(this.dialogDisp.mc_mergeButtons, this.bindFunction(this.onMergeButtonSelected));
    this._costInfoVO = new __dep_export_DecorationForgeMainDialogCostInfoVO.DecorationForgeMainDialogCostInfoVO();
    this._completePopover = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._completePopover.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig(__dep_export_ClientConstFusion.ClientConstFusion.POPOVER_ASSET_NAME_COMPLETE));
    this.dialogDisp.mc_fusionInfoDetail.btn_info.mouseChildren = false;
  };
  DecorationForgeMainDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._mergeButtons.onShow();
    this._completePopover.onShow();
    __dep_export_CastleModel.CastleModel.decoStorage.requestGTD();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSE_DONE, this.bindFunction(this.onFuseDone));
    this.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onResourcesUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onResourcesUpdated));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onResourcesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.updateForgeInfo();
    this.updateSelectInfo();
    this.updateDetailedInfo();
    this.updateCostInfo();
    this.applyPreselectedDeco();
  };
  DecorationForgeMainDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSE_DONE, this.bindFunction(this.onFuseDone));
    this.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onResourcesUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onResourcesUpdated));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onResourcesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this._mergeButtons.onHide();
    this._completePopover.onHide();
    __s1param0.prototype.hide.call(this);
  };
  DecorationForgeMainDialog.prototype.updateForgeInfo = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forgeLevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s11local0.level)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_energy.txt_amount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_proportional_value", [__s11local0.currentEnergy, __s11local0.getFullEnergy()])).autoFitToBounds = true;
    this.updateEnergyProgressTooltip();
    var __s11local1 = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.dialogDisp.mc_energyProgress, 196);
    __s11local1.setProgressByPercent(__s11local0.getCurrentEnergyFillFactor());
    __s11local1.fillMc = this.dialogDisp.mc_energyProgress.mc_overfill;
    __s11local1.setProgressByPercent(__s11local0.getCurrentEnergyOverfillFactor());
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionCurrency.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_FUSION_CURRENCY))).autoFitToBounds = true;
  };
  DecorationForgeMainDialog.prototype.updateEnergyProgressTooltip = function () {
    this.dialogDisp.mc_energyProgress.toolTipText = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).getEnergyProgressbarTooltipText();
  };
  DecorationForgeMainDialog.prototype.updateSelectInfo = function () {
    var __s15local0 = this.dialogDisp.mc_fusionInfoSelect;
    var __s15local1 = !this._mergeButtons.areAllButtonsSelected();
    __s15local0.visible = __s15local1;
    if (__s15local1) {
      this.textFieldManager.registerTextField(__s15local0.txt_info, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this._mergeButtons.buttonTarget.currentSelectionVO ? "dialog_decoForge_main_desc2" : "dialog_decoForge_main_desc1")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
  };
  DecorationForgeMainDialog.prototype.updateDetailedInfo = function () {
    var __s18local0 = this.dialogDisp.mc_fusionInfoDetail;
    var __s18local1 = this._mergeButtons.areAllButtonsSelected();
    __s18local0.visible = __s18local1;
    if (__s18local1) {
      var __s18local2 = this._mergeButtons.buttonSource.currentSelectionVO.getDecoBuildingVO();
      var __s18local3 = __dep_exact_f855840627e6e145.int(__s18local2.fusionInfoVO.getCurrentLevel());
      var __s18local4 = this._mergeButtons.buttonTarget.currentSelectionVO.getDecoBuildingVO();
      var __s18local5 = __dep_exact_f855840627e6e145.int(__s18local4.fusionInfoVO.getCurrentLevel());
      var __s18local6 = __dep_exact_f855840627e6e145.int(__s18local4.fusionInfoVO.getCurrentTotalXp());
      var __s18local7 = this._mergeButtons.buttonCatalyst.currentSelectionVO.getCatalystVO();
      var __s18local8 = __dep_exact_f855840627e6e145.int(__s18local7.xmlCurrencyVO.tier);
      var __s18local9 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s18local5));
      var __s18local10 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
      var __s18local11 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).premiumBonusFusionXPChance);
      var __s18local12 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance);
      var __s18local13 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionXPFromSource(__s18local3, __s18local5));
      var __s18local14 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPWithForgeMax(__s18local3, __s18local5, __s18local10.level));
      var __s18local15 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPChance(__s18local12, __s18local3, __s18local5, __s18local8, __s18local9));
      var __s18local16 = __s18local13;
      var __s18local17 = __s18local16 + __dep_exact_f855840627e6e145.int(__s18local14 + __dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPBoost(__s18local14, __s18local15, 0));
      var __s18local18 = __s18local16 + __dep_exact_f855840627e6e145.int(__s18local14 + __dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPBoost(__s18local14, __s18local15, __s18local11));
      var __s18local19 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getLevelFromXP(__s18local6 + __s18local16));
      var __s18local20 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getLevelFromXP(__s18local6 + __s18local17));
      var __s18local21 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getLevelFromXP(__s18local6 + __s18local18));
      var __s18local22 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getDecorationPointsFromFusionLevel(__s18local19));
      var __s18local23 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getDecorationPointsFromFusionLevel(__s18local20));
      var __s18local24 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getDecorationPointsFromFusionLevel(__s18local21));
      this.fillDetailInfoValue(__s18local0.mc_normalValue0, 1, __s18local19 == __s18local20 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s18local19) : new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_or_default", [__s18local19, __s18local20]));
      this.fillDetailInfoValue(__s18local0.mc_normalValue1, 2, __s18local16 == __s18local17 ? new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s18local16]) : new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_or_add", [__s18local16, __s18local17]));
      this.fillDetailInfoValue(__s18local0.mc_normalValue2, 3, __s18local22 == __s18local23 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s18local22) : new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_or_default", [__s18local22, __s18local23]));
      this.fillDetailInfoValue(__s18local0.mc_premiumValue0, 1, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s18local21));
      this.fillDetailInfoValue(__s18local0.mc_premiumValue1, 2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s18local18]));
      this.fillDetailInfoValue(__s18local0.mc_premiumValue2, 3, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s18local24));
    }
  };
  DecorationForgeMainDialog.prototype.fillDetailInfoValue = function (__s21param0, __s21param1, __s21param2) {
    __s21param0.mc_icon.gotoAndStop(__s21param1);
    this.textFieldManager.registerTextField(__s21param0.txt_value, __s21param2);
  };
  DecorationForgeMainDialog.prototype.updateCostInfo = function () {
    var __s23local0 = this.dialogDisp.mc_fusionInfoCosts;
    this.destroyCollectableRenderList();
    var __s23local1 = this._mergeButtons.buttonTarget.currentSelectionVO != null;
    __s23local0.visible = __s23local1;
    if (__s23local1) {
      this.updateCostInfoVO();
      this.fillEnergyCostInfoValue(__s23local0.mc_normalValue0, this._costInfoVO.energy.amount);
      this.fillCostInfoValue(__s23local0.mc_normalValue1, this._costInfoVO.fusionCurrency);
      this.fillCostInfoValue(__s23local0.mc_normalValue2, this._costInfoVO.sequenceCurrency);
      this.fillEnergyCostInfoValue(__s23local0.mc_premiumValue0, this._costInfoVO.energy.amount);
      this.fillCostInfoValue(__s23local0.mc_premiumValue1, this._costInfoVO.c2);
      var __s23local2 = this._mergeButtons.areSourceAndCatalystSelected();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s23local0.btn_fusion, __s23local2 && this._costInfoVO.fusionCurrency.hasEnough);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s23local0.btn_premiumFusion, __s23local2);
    }
  };
  DecorationForgeMainDialog.prototype.updateCostInfoVO = function () {
    var __s26local0 = __dep_exact_f855840627e6e145.int(this._mergeButtons.buttonTarget.currentSelectionVO.getDecoBuildingVO().fusionInfoVO.getCurrentLevel());
    this._costInfoVO.energy.amount = __dep_exact_26a421b704832cff.FusionConst.getFusionEnergyCost(__s26local0);
    this._costInfoVO.energy.hasEnough = this._costInfoVO.energy.amount <= __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).currentEnergy;
    this._costInfoVO.fusionCurrency.amount = __dep_exact_26a421b704832cff.FusionConst.getFusionCurrencyCost(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s26local0);
    this._costInfoVO.fusionCurrency.hasEnough = this._costInfoVO.fusionCurrency.amount <= this.getAvailableGoods(this._costInfoVO.fusionCurrency.collectableType);
    var __s26local1 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCostSequenceByTargetLevel(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s26local0);
    this._costInfoVO.sequenceCurrency.amount = __s26local1.costAmount;
    this._costInfoVO.sequenceCurrency.collectableType = __dep_export_CollectableHelper.CollectableHelper.getTypeByServerKey(__s26local1.costJSONKey, null);
    this._costInfoVO.sequenceCurrency.hasEnough = this._costInfoVO.sequenceCurrency.amount <= this.getAvailableGoods(this._costInfoVO.sequenceCurrency.collectableType);
    this._costInfoVO.c2.amount = __dep_exact_26a421b704832cff.FusionConst.getPremiumFusionC2Cost(__s26local0);
    this._costInfoVO.c2.hasEnough = this._costInfoVO.c2.amount <= this.getAvailableGoods(this._costInfoVO.c2.collectableType);
  };
  DecorationForgeMainDialog.prototype.getAvailableGoods = function (__s28param0) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyHomeCastle) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CostHelper.CostHelper.getAvailableGoods(__s28param0));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CostHelper.CostHelper.getAvailableGoodsFromDetailedCastleVO(__dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_export_KingdomEnum.KingdomEnum.CLASSIC.id), __s28param0));
    }
  };
  DecorationForgeMainDialog.prototype.fillEnergyCostInfoValue = function (__s32param0, __s32param1) {
    __s32param0.mc_energyIcon.visible = true;
    __s32param0.mc_icon.visible = false;
    __s32param0.mc_icon.gotoAndStop(4);
    __s32param0.mouseChildren = false;
    __s32param0.toolTipText = "fusionEnergy";
    this.textFieldManager.registerTextField(__s32param0.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s32param1));
    __dep_export_CostHelper.CostHelper.setCostColor(__s32param0.txt_text, !this._costInfoVO.energy.hasEnough);
  };
  DecorationForgeMainDialog.prototype.fillCostInfoValue = function (__s34param0, __s34param1) {
    __s34param0.mc_icon.visible = true;
    __s34param0.mc_energyIcon.visible = false;
    var __s34local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(23, 20));
    __s34local0.costTextfield.useOtherResourceStorage = __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyHomeCastle ? null : __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_export_KingdomEnum.KingdomEnum.CLASSIC.id).getResourcesAsCollectableList();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s34param0), __dep_export_CollectableHelper.CollectableHelper.createVO(__s34param1.collectableType.type, __s34param1.amount, __s34param1.collectableType.id), __s34local0);
  };
  DecorationForgeMainDialog.prototype.applyPreselectedDeco = function () {
    if (this.dialogProperties && this.dialogProperties.preselectedDeco) {
      this.dialogProperties.preselectedDeco.btn = this._mergeButtons.buttonTarget;
      this._mergeButtons.selectItem(this.dialogProperties.preselectedDeco);
    }
  };
  DecorationForgeMainDialog.prototype.showCompletePopover = function (__s39param0, __s39param1) {
    var __s39local0 = this._completePopover.getAssetDisp();
    var __s39local1 = __s39param0.itemVO.buildingVO;
    this.textFieldManager.registerTextField(__s39local0.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_complete_title"))).autoFitToBounds = true;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s39local0), __s39param0.itemVO, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(310, 208)));
    this.textFieldManager.registerTextField(__s39local0.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s39local1.fusionInfoVO.getCurrentLevel())).autoFitToBounds = true;
    __s39local0.mc_bonusXP.visible = __s39param1 > 0;
    this.textFieldManager.registerTextField(__s39local0.txt_xp, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_proportional_value", [__s39local1.fusionInfoVO.getDeltaXpBetweenCurrentLevels(), __s39local1.fusionInfoVO.getDeltaXpForNextLevel()]));
    new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(__s39local0.mc_progress, 238).setProgressByPercent(__s39local1.fusionInfoVO.getDeltaXpPercentFactor());
    this._completePopover.startSequence();
  };
  DecorationForgeMainDialog.prototype.onClick = function (__s41param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      __s1param0.prototype.onClick.call(this, __s41param0);
      switch (__s41param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_back:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_FusionForgeHubDialog.FusionForgeHubDialog, new __dep_export_FusionForgeHubDialogProperties.FusionForgeHubDialogProperties());
          this.hide();
          break;
        case this.dialogDisp.btn_forgeLevel:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_DecorationForgeUpgradeDialog.DecorationForgeUpgradeDialog);
          break;
        case this.dialogDisp.btn_rechargeEnergy:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_DecorationForgeRechargeEnergyDialog.DecorationForgeRechargeEnergyDialog);
          break;
        case this.dialogDisp.mc_fusionInfoCosts.btn_fusion:
          this.onFuseButtonClicked(false);
          break;
        case this.dialogDisp.mc_fusionInfoCosts.btn_premiumFusion:
          this.onFuseButtonClicked(true);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_main_help"));
      }
    }
  };
  DecorationForgeMainDialog.prototype.onMergeButtonSelected = function () {
    this.updateSelectInfo();
    this.updateDetailedInfo();
    this.updateCostInfo();
  };
  DecorationForgeMainDialog.prototype.onFuseButtonClicked = function (__s47param0) {
    if (this._costInfoVO.energy.hasEnough) {
      if (!__s47param0 && !this._costInfoVO.sequenceCurrency.hasEnough) {
        var __s47local0 = new __dep_export_CollectableList.CollectableList();
        __s47local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(this._costInfoVO.sequenceCurrency.collectableType.type, this._costInfoVO.sequenceCurrency.amount));
        var __s47local1 = new __dep_export_CastleResourceWaitDialogProperties.CastleResourceWaitDialogProperties();
        __s47local1.parseCosts(__s47local0);
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_CastleResourceWaitDialog.CastleResourceWaitDialog, __s47local1);
        return;
      }
      if (!__s47param0 || this._costInfoVO.c2) {
        var __s47local2 = this._mergeButtons.buttonSource.currentSelectionVO;
        var __s47local3 = this._mergeButtons.buttonTarget.currentSelectionVO;
        var __s47local4 = this._mergeButtons.buttonCatalyst.currentSelectionVO;
        var __s47local5 = __s47local2.getDecoBuildingVO();
        var __s47local6 = __s47local3.getDecoBuildingVO();
        var __s47local7 = __s47local4.getCatalystVO();
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDecoForgeFuseEventVO.C2SDecoForgeFuseEventVO(__s47local5.wodId, __s47local5.fusionInfoVO.uniqueId, __s47local3.kingdomId, __s47local3.areaId, __s47local6.wodId, __s47local6.fusionInfoVO.uniqueId, __s47local6.objectId, __s47local7.id, __s47param0));
        __dep_export_CastleModel.CastleModel.decoStorage.requestGTD();
        __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).requestDataFromServer();
      } else {
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
      }
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_DecorationForgeNotEnoughEnergyDialog.DecorationForgeNotEnoughEnergyDialog, new __dep_export_DecorationForgeNotEnoughEnergyDialogProperties.DecorationForgeNotEnoughEnergyDialogProperties(this._costInfoVO.energy.amount, __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).currentEnergy));
    }
  };
  DecorationForgeMainDialog.prototype.onFuseDone = function (__s54param0) {
    var __s54local0 = __s54param0.params[0];
    __s54local0.btn = this._mergeButtons.buttonTarget;
    var __s54local1 = __dep_exact_f855840627e6e145.int(__s54param0.params[1]);
    this._mergeButtons.reset();
    this._mergeButtons.selectItem(__s54local0);
    if (__s54local0) {
      this.showCompletePopover(__s54local0, __s54local1);
    }
  };
  DecorationForgeMainDialog.prototype.onFusionForgeInfoUpdated = function (__s57param0) {
    this.updateForgeInfo();
    this.updateCostInfo();
  };
  DecorationForgeMainDialog.prototype.onResourcesUpdated = function (__s59param0) {
    this.updateCostInfo();
  };
  DecorationForgeMainDialog.prototype.onTimer = function (__s61param0) {
    this.updateEnergyProgressTooltip();
  };
  DecorationForgeMainDialog.prototype.onMouseOver = function (__s63param0) {
    __s1param0.prototype.onMouseOver.call(this, __s63param0);
    if (__s63param0.target == this.dialogDisp.mc_fusionInfoDetail.btn_info) {
      var __s63local0 = this._mergeButtons.buttonSource.currentSelectionVO.getDecoBuildingVO();
      var __s63local1 = this._mergeButtons.buttonTarget.currentSelectionVO.getDecoBuildingVO();
      var __s63local2 = this._mergeButtons.buttonCatalyst.currentSelectionVO.getCatalystVO();
      __dep_export_CastleFusionCompareToolTip.CastleFusionCompareToolTip.showToolTip(this.dialogDisp.mc_fusionInfoDetail.btn_info, __s63local0.fusionInfoVO, __s63local1.fusionInfoVO, __s63local2);
    }
  };
  DecorationForgeMainDialog.prototype.onMouseOut = function (__s66param0) {
    __s1param0.prototype.onMouseOut.call(this, __s66param0);
    if (__s66param0.target == this.dialogDisp.mc_fusionInfoDetail.btn_info) {
      __dep_export_CastleFusionCompareToolTip.CastleFusionCompareToolTip.hideToolTip();
    }
  };
  DecorationForgeMainDialog.prototype.onDetailedCastleListArrived = function (__s69param0) {
    this.updateCostInfo();
  };
  Object.defineProperty(DecorationForgeMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeMainDialog.NAME = "DecorationForgeMain";
  return DecorationForgeMainDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeMainDialog = __s0local1;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleResourceWaitDialog = require("gge-module:export_CastleResourceWaitDialog");
var __dep_export_CastleResourceWaitDialogProperties = require("gge-module:export_CastleResourceWaitDialogProperties");
var __dep_export_FusionForgeHubDialog = require("gge-module:export_FusionForgeHubDialog");
var __dep_export_DecorationForgeUpgradeDialog = require("gge-module:export_DecorationForgeUpgradeDialog");
var __dep_export_DecorationForgeNotEnoughEnergyDialog = require("gge-module:export_DecorationForgeNotEnoughEnergyDialog");
var __dep_export_DecorationForgeRechargeEnergyDialog = require("gge-module:export_DecorationForgeRechargeEnergyDialog");
var __dep_export_DecorationForgeMainDialogCostInfoVO = require("gge-module:export_DecorationForgeMainDialogCostInfoVO");
var __dep_export_DecorationForgeMergeButtonsComponent = require("gge-module:export_DecorationForgeMergeButtonsComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
