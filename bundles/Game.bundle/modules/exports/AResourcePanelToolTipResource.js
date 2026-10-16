Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __s0local0 = function (__s1param0) {
  function AResourcePanelToolTipResource(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResourcePanelToolTipResource, __s1param0);
  AResourcePanelToolTipResource.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._production = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._laboratoryBonus = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._max = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._hunter = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
  };
  AResourcePanelToolTipResource.prototype.updateContent = function () {
    this._items.length = 0;
    var __s7local0;
    var __s7local1 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this.resource).productionPerSec;
    __s7local0 = __s7local1 == 0 ? "noProduction" : "xPerHour";
    var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this.resource).maxAmount);
    var __s7local3 = new this.resource.dataClass();
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, __s7local3.getTooltipTextId());
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._production.tf, __s7local0, [__s7local1]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._max.tf, "storage_capacity_colon", [__s7local2]);
    this._items.push(this._title);
    this._items.push(this._production);
    if (__s7local1 > 0 && this.laboratoryResourceBonus > 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._laboratoryBonus.tf, "tooltip_laboratory_boost", [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this.laboratoryResourceBonus])]);
      this._items.push(this._laboratoryBonus);
    }
    if (this.hunterReduction != 0 && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isSeasonCamp) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._hunter.tf, "commons_hunter_hint_HuntActive", [this.hunterReduction]);
      this._items.push(this._hunter);
    }
    this._items.push(this._max);
  };
  Object.defineProperty(AResourcePanelToolTipResource.prototype, "hunterReduction", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourcePanelToolTipResource.prototype, "laboratoryResourceBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourcePanelToolTipResource.prototype, "resource", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return AResourcePanelToolTipResource;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.AResourcePanelToolTipResource = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
