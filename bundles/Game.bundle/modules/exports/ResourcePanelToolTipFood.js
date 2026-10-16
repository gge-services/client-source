Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ResourcePanelToolTipFood() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipFood, __s1param0);
  ResourcePanelToolTipFood.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._productionPerHour = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._eatPerHour = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodUse = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._amount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodIsEmpty = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._hunterActive = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._metropolBoost = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadProduction = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodUseFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._eatPerHourFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._productionPerHourFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._meadProductionFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._foodUseFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._eatPerHourFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._productionPerHourFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._meadProductionFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipFood.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "food");
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodBaseProduction > 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "foodproduction_value", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodBaseProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "foodproduction_freeze_value", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodBaseProduction, 1)]);
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "noProduction");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "noProduction");
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._eatPerHour.tf, "foodwastage_troops_value", [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodConsumption]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._eatPerHourFrozen.tf, "foodwastage_freeze_value", [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodConsumption]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._amount.tf, "storage_capacity_colon", [__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).maxAmount]);
    var __s7local0 = !!__dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FOOD_CAPACITY_BONUS, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID);
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this._amount.tf, __s7local0, 15, new __s0local0(-7, -8), true, 4469542);
    this._amount.x = __s7local0 ? 15 : 0;
    this._items.push(this._title);
    if (__dep_export_CastleModel.CastleModel.userData.foodFrozen) {
      this._items.push(this._productionPerHourFrozen);
    } else {
      this._items.push(this._productionPerHour);
    }
    if (__dep_export_CastleModel.CastleModel.hunterData.isBoosted && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isSeasonCamp) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._hunterActive.tf, "commons_hunter_hint_HuntActive", [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_NOMINAL_ADD, [__dep_export_CastleModel.CastleModel.hunterData.foodBoost])]);
      this._items.push(this._hunterActive);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.metropolBoost > 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._metropolBoost.tf, __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("commons_alliance_hint_metropolBonus"), [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.metropolBoost]);
      this._items.push(this._metropolBoost);
    }
    if (__dep_export_CastleModel.CastleModel.userData.foodFrozen) {
      this._items.push(this._eatPerHourFrozen);
    } else {
      this._items.push(this._eatPerHour);
    }
    if (__dep_export_CastleModel.CastleModel.breweryData.isMeadProductionActive) {
      var __s7local1 = __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.meadProduction * (__dep_export_CastleModel.CastleModel.breweryData.percentForMead / 100) * __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.foodRatio;
      var __s7local2 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).productionPerSec + __s7local1;
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "foodproduction_value", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__s7local2, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "foodproduction_freeze_value", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__s7local2, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadProduction.tf, "foodwastage_brewery_value", [__s7local1]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadProductionFrozen.tf, "foodwastage_brewery_freeze_value", [__s7local1]);
      if (__dep_export_CastleModel.CastleModel.userData.foodFrozen) {
        this._items.push(this._meadProductionFrozen);
      } else {
        this._items.push(this._meadProduction);
      }
    }
    this._items.push(this._divider);
    if (__dep_export_CastleModel.CastleModel.userData.foodFrozen) {
      this._items.push(this._foodUseFrozen);
    } else {
      this._items.push(this._foodUse);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction < 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._foodUse.tf, "xPerHour", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._foodUseFrozen.tf, "xPerHour_freeze", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._foodIsEmpty.tf, "emptyIn", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodIsEmptyTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text)]);
      this._foodUse.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
      this._foodIsEmpty.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
      this._items.push(this._foodIsEmpty);
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._foodUse.tf, "xPerHour", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._foodUseFrozen.tf, "xPerHour_freeze", [__dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction, 1)]);
      this._foodUse.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this._items.push(this._amount);
  };
  return ResourcePanelToolTipFood;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipFood = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
var __dep_export_ResourcePaneltoolTipIconWithText = require("gge-module:export_ResourcePaneltoolTipIconWithText");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "Container");
