Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipFactionAuxiliary() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipFactionAuxiliary, __s1param0);
  ResourcePanelToolTipFactionAuxiliary.prototype.updateContent = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.militaryData.unitInventory;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0.getUnitCount(ResourcePanelToolTipFactionAuxiliary.auxiliariesByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE)));
    var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0.getUnitCount(ResourcePanelToolTipFactionAuxiliary.auxiliariesByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE)));
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "auxiliaries");
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._melee.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("auxiliaries_melee"), __s5local1]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._range.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("auxiliaries_ranged"), __s5local2]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._capacity.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_factionAuxiliaries_tentCapacity_tooltip"), __dep_export_CastleModel.CastleModel.areaData.activeMorality.maxAuxiliariesStorage]);
  };
  ResourcePanelToolTipFactionAuxiliary.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._melee = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._range = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._capacity = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._items.push(this._title);
    this._items.push(this._melee);
    this._items.push(this._range);
    this._items.push(this._capacity);
  };
  ResourcePanelToolTipFactionAuxiliary.auxiliariesByUnitType = function (__s9param0) {
    return function (__s11param0) {
      return __s11param0.unitType == __s9param0 && __s11param0.isAuxiliary;
    };
  };
  return ResourcePanelToolTipFactionAuxiliary;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipFactionAuxiliary = __s0local0;
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
