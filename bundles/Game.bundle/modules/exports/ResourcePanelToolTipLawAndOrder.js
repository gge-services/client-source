Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __dep_export_ResourcePanelToolTipTwoTextFields = require("gge-module:export_ResourcePanelToolTipTwoTextFields");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipLawAndOrder() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipLawAndOrder, __s1param0);
  ResourcePanelToolTipLawAndOrder.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._deco = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._ci = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._protection = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._population = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._riot = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._subscription = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._baron = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._productivity = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipIconTwoShortTexts());
    this._items.push(this._title);
    this._items.push(this._deco);
    this._items.push(this._protection);
    this._items.push(this._population);
    this._items.push(this._riot);
    this._items.push(this._subscription);
    this._items.push(this._baron);
    this._items.push(this._ci);
    this._items.push(new Library.CastleInterfaceElements.divider());
    this._items.push(this._productivity);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateContent = function () {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "publicOrder");
    if (__dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
      this.updateDeco(this._deco.tf2, this._deco.tf1);
      this.updateCI(this._ci.tf2, this._ci.tf1);
      this.updateProtection(this._protection.tf2, this._protection.tf1);
      this.updatePopulation(this._population.tf2, this._population.tf1);
      this.updateRiot(this._riot.tf2, this._riot.tf1);
      this.updateSubscription(this._subscription.tf2, this._subscription.tf1);
      this.updateBaron(this._baron.tf2, this._baron.tf1);
      this.updateProductivity(this._productivity.tf2, this._productivity.tf1);
    } else {
      this.updateDeco(this._deco.tf1, this._deco.tf2);
      this.updateCI(this._ci.tf1, this._ci.tf2);
      this.updateProtection(this._protection.tf1, this._protection.tf2);
      this.updatePopulation(this._population.tf1, this._population.tf2);
      this.updateRiot(this._riot.tf1, this._riot.tf2);
      this.updateSubscription(this._subscription.tf1, this._subscription.tf2);
      this.updateBaron(this._baron.tf1, this._baron.tf2);
      this.updateProductivity(this._productivity.tf1, this._productivity.tf2);
    }
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateDeco = function (__s11param0, __s11param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s11param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("decoration")]);
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s11param1, __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getDecoPoints() - __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.populationPenalty);
    }
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateCI = function (__s14param0, __s14param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s14param0, "dialog_bonus_02");
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s14param1, __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getCIBonusToDecoPoints());
    }
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateProtection = function (__s17param0, __s17param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s17param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("protection")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s17param1, __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo ? __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.protection : 0);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateResearch = function (__s19param0, __s19param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s19param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("research")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s19param1, __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId).strength);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updatePopulation = function (__s21param0, __s21param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s21param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("population")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s21param1, __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.populationPenalty);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateRiot = function (__s23param0, __s23param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s23param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("riot")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s23param1, __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.riot * -1);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateSubscription = function (__s25param0, __s25param1) {
    var __s25local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getPublicOrderSubscriptionBonus();
    this._subscription.visible = __s25local0 > 0;
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s25param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_subscriptions_HUD_subscriptionBonus")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s25param1, __s25local0);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateBaron = function (__s27param0, __s27param1) {
    var __s27local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getPublicOrderBaronBonus();
    this._baron.visible = __s27local0 > 0;
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s27param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("equipment_itemType_baron")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s27param1, __s27local0);
  };
  ResourcePanelToolTipLawAndOrder.prototype.updateProductivity = function (__s29param0, __s29param1) {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s29param0, __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [Math.round(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor() * 100)]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(__s29param1, __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getLawAndOrderValue());
  };
  return ResourcePanelToolTipLawAndOrder;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipLawAndOrder = __s0local0;
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
