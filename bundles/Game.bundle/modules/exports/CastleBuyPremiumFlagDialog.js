Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SBuyPremiumFlagVO = require("gge-module:export_C2SBuyPremiumFlagVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleBuyPremiumFlagDialog() {
    return __s1param0.call(this, CastleBuyPremiumFlagDialog.ASSETNAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyPremiumFlagDialog, __s1param0);
  CastleBuyPremiumFlagDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_iconBG.visible = false;
    this.dialogDisp.mc_rebuyDiscount.visible = false;
    this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    this.dialogDisp.info_bonus.visible = false;
    this.dialogDisp.info_time.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_buyFlag_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("costs"));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBuyPremiumFlagDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.addIconPic();
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.PlayerConst.PREMIUM_FLAG_COST_C2));
    this.itxt_value.textContentVO.numberValue = __s7local0;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_value, __s7local0);
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = __dep_export_CastleModel.CastleModel.boosterSaleData.hideDiscount();
  };
  CastleBuyPremiumFlagDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyPremiumFlagVO.C2SBuyPremiumFlagVO());
        this.hide();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleBuyPremiumFlagDialog.prototype.addIconPic = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    this.pic = new __s0local0();
    var __s12local0 = new __dep_export_CastleMapobjectVO.CastleMapobjectVO();
    __s12local0.gateLevel = 3;
    __s12local0.towerLevel = 3;
    __s12local0.wallLevel = 2;
    __s12local0.keepLevel = 3;
    var __s12local1 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s12local1.crest = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO().crest;
    __s12local1.hasPremiumFlag = true;
    __s12local0.ownerInfo = __s12local1;
    this.pic.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s12local0, new __s0local1(150, 150), true, true, false, "", null, false, true));
    this.dialogDisp.mc_CharHolder.addChild(this.pic);
  };
  CastleBuyPremiumFlagDialog.NAME = "CastleBuyPremiumFlagDialog";
  CastleBuyPremiumFlagDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  return CastleBuyPremiumFlagDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBuyPremiumFlagDialog = __s0local2;
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_export_CastleMapobjectVO = require("gge-module:export_CastleMapobjectVO");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
