Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleNewSocketDialog() {
    return __s1param0.call(this, CastleNewSocketDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNewSocketDialog, __s1param0);
  CastleNewSocketDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gems_insertGems_text", [this.dialogProperties.gemVO.nameString, this.dialogProperties.eqVO.nameString]));
  };
  CastleNewSocketDialog.prototype.onValidConfirmClicked = function () {
    __dep_export_CastleModel.CastleModel.gemData.bindGem(this.dialogProperties.gemVO, this.dialogProperties.eqVO, this.dialogProperties.lordID, false);
  };
  CastleNewSocketDialog.NAME = "CastleNewSocket";
  return CastleNewSocketDialog;
}(require("gge-module:export_ACastleSocketDialog").ACastleSocketDialog);
exports.CastleNewSocketDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
