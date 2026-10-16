Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAutoTutorialBlockerDialog() {
    return __s1param0.call(this, CastleAutoTutorialBlockerDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAutoTutorialBlockerDialog, __s1param0);
  CastleAutoTutorialBlockerDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tempServer_buildingCastle_desc"));
    this.txt_progress = this.textFieldManager.registerTextField(this.dialogDisp.txt_progress, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage", [0]));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
  };
  CastleAutoTutorialBlockerDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s7param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
  };
  CastleAutoTutorialBlockerDialog.prototype.onXPChanged = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PlayerConst.getXPFromLevel(6));
    var __s9local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userXP);
    this.dialogDisp.mc_bar.scaleX = Math.max(Math.min(1, __s9local1 / __s9local0), 0);
    this.txt_progress.textContentVO.textReplacements = [__dep_exact_f855840627e6e145.int(Math.max(Math.min(100, __s9local1 / __s9local0 * 100), 0))];
    if (__s9local1 >= __s9local0) {
      this.layoutManager.showPanel(__dep_export_CastleMultiInfoPanel.CastleMultiInfoPanel);
      this.hide();
    }
  };
  CastleAutoTutorialBlockerDialog.NAME = "CastleAutoTutorialBlocker";
  return CastleAutoTutorialBlockerDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAutoTutorialBlockerDialog = __s0local0;
var __dep_export_CastleMultiInfoPanel = require("gge-module:export_CastleMultiInfoPanel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
