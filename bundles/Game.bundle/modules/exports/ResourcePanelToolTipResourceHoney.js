Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AResourcePanelToolTipResource = require("gge-module:export_AResourcePanelToolTipResource");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipResourceHoney() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipResourceHoney, __s1param0);
  Object.defineProperty(ResourcePanelToolTipResourceHoney.prototype, "resource", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.HONEY;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "resource").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipResourceHoney.prototype, "laboratoryResourceBonus", {
    get: function () {
      return 0;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelToolTipResourceHoney.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._production = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._baseProduction = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._max = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._meadProduction = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._honeyIsEmpty = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipResourceHoney.prototype.updateContent = function () {
    this._items.length = 0;
    var __s15local0;
    var __s15local1 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this.resource).productionPerSec;
    __s15local0 = __s15local1 == 0 ? "noProduction" : "xPerHour";
    var __s15local2 = new this.resource.dataClass();
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, __s15local2.getTooltipTextId());
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._production.tf, __s15local0, [__s15local1]);
    this._production.tf.color = __s15local1 < 0 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this._items.push(this._title);
    if (__dep_export_CastleModel.CastleModel.breweryData.isMeadProductionActive) {
      var __s15local3 = __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.meadProduction * (__dep_export_CastleModel.CastleModel.breweryData.percentForMead / 100) * __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.honeyRatio;
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._meadProduction.tf, "honeywastage_brewery_value", [__s15local3]);
      this._meadProduction.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
      var __s15local4 = __s15local1 + __s15local3;
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._baseProduction.tf, "honeyProduction_perHour_value", [__s15local4]);
      this._items.push(this._baseProduction);
      this._items.push(this._meadProduction);
      this._items.push(this._divider);
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._production.tf, __s15local0, [__s15local1]);
    var __s15local5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this.resource).maxAmount);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._max.tf, "storage_capacity_colon", [__s15local5]);
    this._items.push(this._production);
    if (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.honeyProduction < 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._honeyIsEmpty.tf, "emptyIn", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.honeyIsEmptyTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)]);
      this._honeyIsEmpty.tf.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
      this._items.push(this._honeyIsEmpty);
    }
    this._items.push(this._max);
  };
  return ResourcePanelToolTipResourceHoney;
}(__dep_export_AResourcePanelToolTipResource.AResourcePanelToolTipResource);
exports.ResourcePanelToolTipResourceHoney = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
