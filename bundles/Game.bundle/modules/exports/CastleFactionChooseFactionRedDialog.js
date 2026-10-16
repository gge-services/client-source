Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleFactionChooseFactionRedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionChooseFactionRedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionChooseFactionRedDialog, __s1param0);
  CastleFactionChooseFactionRedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_joinFactionRed_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_joinFactionRed_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyFat, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_choose_faction_copy_red2"));
  };
  CastleFactionChooseFactionRedDialog.__initialize_static_members = function () {
    CastleFactionChooseFactionRedDialog.NAME = "CastleFactionChooseFactionRed";
  };
  return CastleFactionChooseFactionRedDialog;
}(require("gge-module:export_ACastleFactionChooseFactionDialog").ACastleFactionChooseFactionDialog);
exports.CastleFactionChooseFactionRedDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
