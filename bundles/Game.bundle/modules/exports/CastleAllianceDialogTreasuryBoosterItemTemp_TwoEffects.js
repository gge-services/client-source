Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceBuffData = require("gge-module:export_AllianceBuffData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1, "CastleAlliance_Treasury_Item_Booster_TwoEffects") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects, __s1param0);
  CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects.prototype.updateText = function () {
    __s1param0.prototype.updateText.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_name1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_colon", [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_temporaryBoost_" + __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.buffVO.seriesID, 1).boni[1].effect.name)]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_amount1, this.getBoosterAmountText1());
  };
  CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects.prototype.getBoosterAmountText1 = function () {
    if (__dep_export_AllianceBuffData.AllianceBuffData.CUSTOMIZABLE_BUFFS.indexOf(this.buffVO.seriesID) > -1 && !this.allianceInfoVO.isTemporaryBoosterActive(this.buffVO.seriesID)) {
      var __s7local0 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.buffVO.seriesID, 1);
      var __s7local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, 1, __s7local0.boni[1].effect.effectType.type)]);
      var __s7local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.allianceInfoVO.getBoostValue(this.buffVO.seriesID, this.buffVO.maxLevel, __s7local0.boni[1].effect.effectType.type)]);
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_dash_split_paragraph", [__s7local1, __s7local2]);
    }
    return __s1param0.prototype.getBoosterAmountText.call(this);
  };
  return CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects;
}(require("gge-module:export_CastleAllianceDialogTreasuryBoosterItemTemp").CastleAllianceDialogTreasuryBoosterItemTemp);
exports.CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
