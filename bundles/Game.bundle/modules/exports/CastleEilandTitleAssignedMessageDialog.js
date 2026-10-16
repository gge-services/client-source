Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEilandTextComposer = require("gge-module:export_CastleEilandTextComposer");
var __s0local0 = function (__s1param0) {
  function CastleEilandTitleAssignedMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleAssignedMessageDialog, __s1param0);
  CastleEilandTitleAssignedMessageDialog.prototype.onGetTitleData = function (__s5param0) {
    __s1param0.prototype.onGetTitleData.call(this, __s5param0);
    this.dialogDisp.mc_titleBonus.visible = true;
    var __s5local0 = [this.kingName, __dep_export_CastleModel.CastleModel.languageData.getTextById(this.titleVO.textID)];
    if (this.titleVO.isPositive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_gainedGoodTitle_copy", __s5local0));
    } else if (!this.titleVO.isPositive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_gainedBadTitle_copy", __s5local0));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_titleBonus.txt_bonus, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleEilandTextComposer.CastleEilandTextComposer.generateBonusText(this.titleVO)));
    this.adjustTextSize();
  };
  CastleEilandTitleAssignedMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleAssignedMessageDialog.NAME = "CastleEilandAssignedTitleMessage";
  };
  return CastleEilandTitleAssignedMessageDialog;
}(require("gge-module:export_CastleEilandTitleMessageDialog").CastleEilandTitleMessageDialog);
exports.CastleEilandTitleAssignedMessageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
