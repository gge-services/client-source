Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleEilandTitleNewKingMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleNewKingMessageDialog, __s1param0);
  CastleEilandTitleNewKingMessageDialog.prototype.parseParams = function (__s5param0) {
    __s1param0.prototype.parseParams.call(this, __s5param0);
    this.kingAlliance = this.paramArray[2];
  };
  CastleEilandTitleNewKingMessageDialog.prototype.onGetTitleData = function (__s7param0) {
    __s1param0.prototype.onGetTitleData.call(this, __s7param0);
    this.dialogDisp.mc_titleBonus.visible = false;
    var __s7local0 = [this.kingName, this.kingAlliance];
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_newLeft_copy", __s7local0));
    this.adjustTextSize();
  };
  CastleEilandTitleNewKingMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleNewKingMessageDialog.NAME = "CastleEilandTitleNewKingMessage";
  };
  return CastleEilandTitleNewKingMessageDialog;
}(require("gge-module:export_CastleEilandTitleMessageDialog").CastleEilandTitleMessageDialog);
exports.CastleEilandTitleNewKingMessageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
