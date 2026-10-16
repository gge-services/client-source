Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __dep_export_ResourcePanelToolTipTwoTextFields = require("gge-module:export_ResourcePanelToolTipTwoTextFields");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipMorale() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipMorale, __s1param0);
  ResourcePanelToolTipMorale.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._deco = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._factionDeco = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._moraleOther = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._troops = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair());
    this._morale = new __dep_export_ResourcePanelToolTipTwoTextFields.ResourcePanelToolTipTwoTextFields(new Library.CastleInterfaceElements.McToolTipNameValuePair_Moral());
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipMorale.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    this._items.push(this._title);
    this._items.push(this._deco);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "morality");
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._deco.tf1, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("decoration")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._deco.tf2, __dep_export_CastleModel.CastleModel.areaData.activeMorality.getMoralityPlus().toString());
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._factionDeco.tf1, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("morality_decoFactionBonus")]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._factionDeco.tf2, __dep_export_CastleModel.CastleModel.areaData.activeMorality.getFactionMoralityPlus().toString());
      this._items.push(this._factionDeco);
    }
    var __s7local0 = __dep_export_CastleModel.CastleModel.areaData.activeMorality.getMoralityPlus() + __dep_export_CastleModel.CastleModel.areaData.activeMorality.getFactionMoralityPlus() - Math.abs(__dep_export_CastleModel.CastleModel.areaData.activeMorality.getTroopStrength());
    if ((__s7local0 = Math.abs(__s7local0 - __dep_export_CastleModel.CastleModel.areaData.activeMorality.morality)) > 0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._moraleOther.tf1, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("morality_decoFaction_otherBonus")]);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._moraleOther.tf2, __s7local0.toString());
      this._items.push(this._moraleOther);
    }
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._troops.tf1, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("troopstrength")]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._troops.tf2, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_SUBTRACT, [Math.abs(__dep_export_CastleModel.CastleModel.areaData.activeMorality.getTroopStrength())]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._morale.tf1, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_exact_f855840627e6e145.int(ResourcePanelToolTipMorale.morality * 100)]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this._morale.tf2, __dep_export_CastleModel.CastleModel.areaData.activeMorality.morality);
    this._items.push(this._troops);
    this._items.push(this._divider);
    this._items.push(this._morale);
  };
  Object.defineProperty(ResourcePanelToolTipMorale, "morality", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        return __dep_exact_26a421b704832cff_1.FactionConst.getMoraleModifier(__dep_export_CastleModel.CastleModel.areaData.activeMorality.morality);
      } else {
        return __dep_exact_26a421b704832cff.CombatConst.getMoralBonus(__dep_export_CastleModel.CastleModel.areaData.activeMorality.morality);
      }
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipMorale;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipMorale = __s0local0;
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
