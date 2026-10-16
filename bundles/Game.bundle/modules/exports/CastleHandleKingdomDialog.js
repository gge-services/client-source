Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SKingdomPayInfoVO = require("gge-module:export_C2SKingdomPayInfoVO");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleEilandRankingDialogProperties = require("gge-module:export_CastleEilandRankingDialogProperties");
var __dep_export_ACastleHandleSpaceDialog = require("gge-module:export_ACastleHandleSpaceDialog");
var __s0local0 = function (__s1param0) {
  function CastleHandleKingdomDialog() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHandleKingdomDialog, __s1param0);
  CastleHandleKingdomDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.sublayers.add(__dep_export_ACastleHandleSpaceDialog.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT, null, new __dep_export_CastleHandleKingdomDialogSupport.CastleHandleKingdomDialogSupport(this.dialogDisp.sublayer_support));
  };
  CastleHandleKingdomDialog.prototype.getSublayerProperties = function (__s7param0) {
    if (__s7param0 == __dep_export_ACastleHandleSpaceDialog.ACastleHandleSpaceDialog.SUBLAYER_SUPPORT) {
      return this.dialogProperties_0.kingdomVO;
    } else {
      return __s1param0.prototype.getSublayerProperties.call(this, __s7param0);
    }
  };
  CastleHandleKingdomDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    if (this.dialogProperties_0.isEiland()) {
      this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    }
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomPayInfoVO.C2SKingdomPayInfoVO());
  };
  CastleHandleKingdomDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
  };
  CastleHandleKingdomDialog.prototype.onBackgroundSkinLoaded = function (__s16param0) {
    __s1param0.prototype.onBackgroundSkinLoaded.call(this, __s16param0);
    if (this.dialogProperties_0.isEiland()) {
      this.textFieldManager.registerTextField(this.backgroundDisp.mc_banner.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdom_start_eilandDescription"));
      this.updateAlliancePoints(this.backgroundDisp.mc_alliancePoints);
      this.backgroundDisp.btn_ranking.toolTipText = "eiland_ranking_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.backgroundDisp.btn_ranking);
    }
  };
  CastleHandleKingdomDialog.prototype.updateAlliancePoints = function (__s19param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      __s19param0.toolTipText = "aquamarin_points_alliance_tooltip";
      this.textFieldManager.registerTextField(__s19param0.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints));
      __s19param0.mouseChildren = false;
    } else {
      __s19param0.toolTipText = "aquamarin_points_noAlliance_tooltip";
      this.textFieldManager.registerTextField(__s19param0.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
      __s19param0.mouseChildren = false;
    }
    __s19param0.visible = this.dialogProperties_0.isUnlocked();
  };
  CastleHandleKingdomDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (this.backgroundDisp) {
      switch (__s23param0.target) {
        case this.backgroundDisp.btn_ranking:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandRankingDialog.CastleEilandRankingDialog, new __dep_export_CastleEilandRankingDialogProperties.CastleEilandRankingDialogProperties());
      }
    }
  };
  CastleHandleKingdomDialog.prototype.onEilandReset = function (__s27param0) {
    this.hide();
  };
  CastleHandleKingdomDialog.prototype.onKingdomDataUpdated = function (__s29param0) {
    this.showCurrentSublayer();
  };
  Object.defineProperty(CastleHandleKingdomDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHandleKingdomDialog.NAME = "CastleKingdom";
  return CastleHandleKingdomDialog;
}(__dep_export_ACastleHandleSpaceDialog.ACastleHandleSpaceDialog);
exports.CastleHandleKingdomDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEilandRankingDialog = require("gge-module:export_CastleEilandRankingDialog");
var __dep_export_CastleHandleKingdomDialogSupport = require("gge-module:export_CastleHandleKingdomDialogSupport");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
