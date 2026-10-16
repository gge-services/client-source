Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SUpgradePrivateResourceVillageVO = require("gge-module:export_C2SUpgradePrivateResourceVillageVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageUpgradeDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageUpgradeDialog, __s1param0);
  PrivateResourceVillageUpgradeDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_privateResourceVillages_upgradePopup_desc"));
    var __s5local0 = __dep_export_CastleModel.CastleModel.privateResourceVillageData.getPrivateVillageInfo(this.dialogProperties.villageInfoVO.kingdomID, this.dialogProperties.villageInfoVO.type, this.dialogProperties.villageInfoVO.villageLevel + 1);
    __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.dialogDisp.mc_upgrade.mc_oldBonus, this.dialogProperties.villageInfoVO.type, this.dialogProperties.villageInfoVO.bonus.strength);
    __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.dialogDisp.mc_upgrade.mc_newBonus, __s5local0.type, __s5local0.bonus.strength);
    this.dialogDisp.mc_upgrade.mc_oldBonus.toolTipText = {
      t: "dialog_privateResourceVillages_upgrade_currentBonus_tt",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.villageInfoVO.typeString)]
    };
    this.dialogDisp.mc_upgrade.mc_newBonus.toolTipText = {
      t: "dialog_privateResourceVillages_upgrade_upgradeBonus_tt",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text(__s5local0.typeString)]
    };
    this._cost = __s5local0.tokenCost;
    this.fillCosts(this._cost);
    this.dialogDisp.mc_upgrade.visible = true;
    this.dialogDisp.mc_costs.visible = true;
  };
  PrivateResourceVillageUpgradeDialog.prototype.onConfirm = function () {
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.UPV_SENT));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUpgradePrivateResourceVillageVO.C2SUpgradePrivateResourceVillageVO(this.dialogProperties.villageInfoVO.villageID, this.dialogProperties.uniqueVillageID));
  };
  return PrivateResourceVillageUpgradeDialog;
}(require("gge-module:export_APrivateResourceVillageActionDialog").APrivateResourceVillageActionDialog);
exports.PrivateResourceVillageUpgradeDialog = __s0local0;
var __dep_export_CastlePrivateResourceVillageRenderHelper = require("gge-module:export_CastlePrivateResourceVillageRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
