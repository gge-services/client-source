Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SBuyPrivateResourceVillageVO = require("gge-module:export_C2SBuyPrivateResourceVillageVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageBuyDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageBuyDialog, __s1param0);
  PrivateResourceVillageBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_privateResourceVillages_buyPopup_desc", [this.dialogProperties.villageInfoVO.villageLevel, __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.villageInfoVO.typeString)]));
    __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.dialogDisp.mc_buy, this.dialogProperties.villageInfoVO.type, this.dialogProperties.villageInfoVO.bonus.strength);
    this._cost = this.dialogProperties.villageInfoVO.tokenCostTotal;
    this.fillCosts(this._cost);
    this.dialogDisp.mc_buy.visible = true;
    this.dialogDisp.mc_costs.visible = true;
  };
  PrivateResourceVillageBuyDialog.prototype.onConfirm = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyPrivateResourceVillageVO.C2SBuyPrivateResourceVillageVO(this.dialogProperties.villageInfoVO.villageID));
  };
  return PrivateResourceVillageBuyDialog;
}(require("gge-module:export_APrivateResourceVillageActionDialog").APrivateResourceVillageActionDialog);
exports.PrivateResourceVillageBuyDialog = __s0local0;
var __dep_export_CastlePrivateResourceVillageRenderHelper = require("gge-module:export_CastlePrivateResourceVillageRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
