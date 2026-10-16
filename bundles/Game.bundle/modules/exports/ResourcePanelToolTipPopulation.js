Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipPopulation() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipPopulation, __s1param0);
  ResourcePanelToolTipPopulation.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._amount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._info = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._items.push(this._title);
    this._items.push(this._amount);
    this._items.push(this._info);
  };
  ResourcePanelToolTipPopulation.prototype.updateContent = function () {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "population");
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._amount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.population, this.getMaxpopulation()]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._info.tf, "increasesTaxRevenue");
  };
  ResourcePanelToolTipPopulation.prototype.getMaxpopulation = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.maxPopulation);
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyHomeCastle) {
      __s9local0 += Math.ceil(__s9local0 * __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AMOUNT_POPULATION_BOOST).strength * 0.01);
      __s9local0 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AMOUNT_POPULATION_BONUS).strength);
    }
    return __s9local0;
  };
  return ResourcePanelToolTipPopulation;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipPopulation = __s0local0;
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
