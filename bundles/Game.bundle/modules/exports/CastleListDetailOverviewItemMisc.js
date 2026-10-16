Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewItemMisc(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_publicOrder = __s3local0.textFieldManager.registerTextField(__s3param0.txt_publicOrder, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_protection = __s3local0.textFieldManager.registerTextField(__s3param0.txt_protection, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_guards = __s3local0.textFieldManager.registerTextField(__s3param0.txt_guards, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_population = __s3local0.textFieldManager.registerTextField(__s3param0.txt_population, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_marketCarriages = __s3local0.textFieldManager.registerTextField(__s3param0.txt_marketCarriges, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_aquamarin = __s3local0.textFieldManager.registerTextField(__s3param0.txt_aquamarin, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_aquamarinPoints = __s3local0.textFieldManager.registerTextField(__s3param0.txt_aquamarin_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_visitCastle]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewItemMisc, __s1param0);
  CastleListDetailOverviewItemMisc.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    var __s5local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.wmo.objectId, this.wmo.kingdomID);
    var __s5local1 = __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) ? "-" : "";
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_aquamarin, __s5local1);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_aquamarinPoints, __s5local1);
    if (__s5local0) {
      var __s5local2 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleId(__s5local0.areaID);
      var __s5local3 = __s5local2 ? __s5local2.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS) : 0;
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_publicOrder, __s5local0.lawAndOrder + __s5local3);
      this.itxt_publicOrder.color = __s5local0.lawAndOrder < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_protection, __s5local0.defence);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_guards, __s5local0.numGuards);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_population, __s5local0.population);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_marketCarriages, __s5local0.numTotalMarketCarriages);
      if (this.wmo.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_aquamarin, __s5local0.getResource(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE));
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_aquamarinPoints, __dep_export_CastleModel.CastleModel.userData.aquaPoints);
      }
    } else {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_publicOrder, "-");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_protection, "-");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_guards, "-");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_population, "-");
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_marketCarriages, "-");
    }
  };
  return CastleListDetailOverviewItemMisc;
}(require("gge-module:export_CastleListDetailOverviewItem").CastleListDetailOverviewItem);
exports.CastleListDetailOverviewItemMisc = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
