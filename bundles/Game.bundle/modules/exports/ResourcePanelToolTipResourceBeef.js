Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AResourcePanelToolTipResource = require("gge-module:export_AResourcePanelToolTipResource");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipResourceBeef() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipResourceBeef, __s1param0);
  ResourcePanelToolTipResourceBeef.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._productionPerHour = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefEat = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefEat2 = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefStorage = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._beefIsEmpty = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._productionPerHourFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._beefEatFrozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._beefEat2Frozen = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithTextLong(), new Library.CastleInterfaceElements_Icons.Icon_Freeze_M());
    this._productionPerHourFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._beefEatFrozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._beefEat2Frozen.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN;
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipResourceBeef.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "beef");
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefBaseProduction > 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "beefproduction_value", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefBaseProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "beefproduction_freeze_value", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefBaseProduction, 1)]);
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHour.tf, "noProduction");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._productionPerHourFrozen.tf, "noProduction");
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefEat.tf, "beefwastage_value", [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefConsumption]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefEatFrozen.tf, "beefwastage_freeze_value", [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefConsumption]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefStorage.tf, "storage_capacity_colon", [__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.BEEF).maxAmount]);
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction < 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefEat2.tf, "xPerHour", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefEat2Frozen.tf, "xPerHour_freeze", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefIsEmpty.tf, "emptyIn", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefIsEmptyTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)]);
      this._beefEat2.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
      this._beefIsEmpty.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefEat2.tf, "xPerHour", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._beefEat2Frozen.tf, "xPerHour_freeze", [__dep_exact_9e901e8e2483a22f.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction, 1)]);
      this._beefEat2.tf.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    if (__dep_export_CastleModel.CastleModel.userData.foodFrozen) {
      this._items.push(this._title);
      this._items.push(this._productionPerHourFrozen);
      this._items.push(this._beefEatFrozen);
      this._items.push(this._divider);
      this._items.push(this._beefEat2Frozen);
    } else {
      this._items.push(this._title);
      this._items.push(this._productionPerHour);
      this._items.push(this._beefEat);
      this._items.push(this._divider);
      this._items.push(this._beefEat2);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction < 0) {
      this._items.push(this._beefIsEmpty);
    }
    this._items.push(this._beefStorage);
  };
  Object.defineProperty(ResourcePanelToolTipResourceBeef.prototype, "resource", {
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "resource").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceBeef.prototype, "laboratoryResourceBonus", {
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipResourceBeef;
}(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceBeef = __s0local0;
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
