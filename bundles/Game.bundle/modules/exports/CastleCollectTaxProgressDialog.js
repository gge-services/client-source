Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleCollectTaxProgressDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleCollectTaxProgressDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectTaxProgressDialog, __s1param0);
  CastleCollectTaxProgressDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.txtInfo ||= this.textFieldManager.registerTextField(this.dialogDisp.txtInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("collect_taxCollecting_description"));
    this.txtInfoPopulation ||= this.textFieldManager.registerTextField(this.dialogDisp.infoPopulation.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.txtInfoBribeBonus ||= this.textFieldManager.registerTextField(this.dialogDisp.infoBribeBonus.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("-"));
    this.dialogDisp.infoPopulation.toolTipText = "population";
    this.dialogDisp.btn_bribe.toolTipText = "dialog_collecttax_btn_bribe";
    this.dialogDisp.progressBar.toolTipText = null;
    this.dialogDisp.infoBribeBonus.mouseChildren = false;
    this.dialogDisp.infoPopulation.mouseChildren = false;
  };
  CastleCollectTaxProgressDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.taxInfoVO.isCollecting && this.dialogDisp.btn_collect.enabled) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_collect, true);
    }
  };
  CastleCollectTaxProgressDialog.prototype.applyPropertiesLoaded = function (__s10param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s10param0);
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.charHolder);
    var __s10local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CharTaxes", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CharTaxes"), null, 0, false, __dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestGiverBig_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN));
    __s10local0.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(189, 213);
    this.dialogDisp.charHolder.addChild(__s10local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
  };
  CastleCollectTaxProgressDialog.prototype.onTaxDataUpdated = function (__s12param0 = null) {
    this.txtInfoPopulation.textContentVO.stringValue = String(this.taxInfoVO.population);
    __s1param0.prototype.onTaxDataUpdated.call(this, __s12param0);
    if (this.taxInfoVO.isBoostedCollection || __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.isActive) {
      this.dialogDisp.infoBribeBonus.toolTipText = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
      this.txtInfoBribeBonus.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE;
      this.txtInfoBribeBonus.textContentVO.textReplacements = [Math.round(__dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_BOOST * 100)];
    } else {
      this.dialogDisp.infoBribeBonus.toolTipText = "dialog_collecttax_bribebonus";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_bribe, this.isOutOfTutorial());
      this.txtInfoBribeBonus.textContentVO.textId = "-";
    }
    var __s12local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(__dep_exact_26a421b704832cff.BoosterConst.TAX));
    if (this.isOutOfTutorial() && __s12local0 > 0) {
      this.dialogDisp.btn_bribe.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.btn_bribe.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s12local0]));
    } else {
      this.dialogDisp.btn_bribe.mc_discount.visible = false;
    }
  };
  CastleCollectTaxProgressDialog.__initialize_static_members = function () {
    CastleCollectTaxProgressDialog.NAME = "CastleCollectTaxProgress";
  };
  return CastleCollectTaxProgressDialog;
}(require("gge-module:export_CastleCollectTaxDialog").CastleCollectTaxDialog);
exports.CastleCollectTaxProgressDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
