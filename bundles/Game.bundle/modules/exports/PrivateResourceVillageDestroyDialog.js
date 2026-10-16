Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SRemovePrivateResourceVillageVO = require("gge-module:export_C2SRemovePrivateResourceVillageVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageDestroyDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageDestroyDialog, __s1param0);
  PrivateResourceVillageDestroyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateResourceVillages_removePopup_desc"));
    this.dialogDisp.mc_exclamationMark.visible = true;
  };
  PrivateResourceVillageDestroyDialog.prototype.onConfirm = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRemovePrivateResourceVillageVO.C2SRemovePrivateResourceVillageVO(this.dialogProperties.uniqueVillageID));
  };
  return PrivateResourceVillageDestroyDialog;
}(require("gge-module:export_APrivateResourceVillageActionDialog").APrivateResourceVillageActionDialog);
exports.PrivateResourceVillageDestroyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
