Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AResourcePanelToolTipResource = require("gge-module:export_AResourcePanelToolTipResource");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipResourceMead() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipResourceMead, __s1param0);
  ResourcePanelToolTipResourceMead.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._productionPerHour = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._productionRate = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._foodStop = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._honeyStop = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadEat = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadEat2 = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadStorage = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadIsEmpty = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._productionPerHourFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._meadEatFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._meadEat2Frozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._productionPerHourFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._meadEatFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._meadEat2Frozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipResourceMead.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "mead");
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadBaseProduction > 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "meadproduction_value", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadBaseProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "meadproduction_freeze_value", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadBaseProduction, 1)]);
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "noProduction");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "noProduction");
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadEat.tf, "meadwastage_value", [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadConsumption]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadEatFrozen.tf, "meadwastage_freeze_value", [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadConsumption]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadStorage.tf, "storage_capacity_colon", [__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).maxAmount]);
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction < 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadEat2.tf, "xPerHour", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadEat2Frozen.tf, "xPerHour_freeze", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadIsEmpty.tf, "emptyIn", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadIsEmptyTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)]);
      this._meadEat2.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
      this._meadIsEmpty.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadEat2.tf, "xPerHour", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadEat2Frozen.tf, "xPerHour_freeze", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction, 1)]);
      this._meadEat2.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionRate.tf, "hud_brewery_productionRate_tooltip", [__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.breweryData.percentForMead])]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._foodStop.tf, "hud_brewery_foodStockLimit_tooltip", [__dep_export_CastleModel.CastleModel.breweryData.stopAtFoodAmount]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._honeyStop.tf, "hud_brewery_honeyStockLimit_tooltip", [__dep_export_CastleModel.CastleModel.breweryData.stopAtHoneyAmount]);
    if (__dep_export_CastleModel.CastleModel.userData.foodFrozen) {
      this._items.push(this._title);
      this._items.push(this._productionPerHourFrozen);
      this._items.push(this._productionRate);
      this._items.push(this._foodStop);
      this._items.push(this._honeyStop);
      this._items.push(this._meadEatFrozen);
      this._items.push(this._divider);
      this._items.push(this._meadEat2Frozen);
    } else {
      this._items.push(this._title);
      this._items.push(this._productionPerHour);
      this._items.push(this._productionRate);
      this._items.push(this._foodStop);
      this._items.push(this._honeyStop);
      this._items.push(this._meadEat);
      this._items.push(this._divider);
      this._items.push(this._meadEat2);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction < 0) {
      this._items.push(this._meadIsEmpty);
    }
    this._items.push(this._meadStorage);
  };
  Object.defineProperty(ResourcePanelToolTipResourceMead.prototype, "resource", {
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "resource").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceMead.prototype, "laboratoryResourceBonus", {
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceMead;
}(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceMead = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ResourcePaneltoolTipIconWithText = require("gge-module:export_ResourcePaneltoolTipIconWithText");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
