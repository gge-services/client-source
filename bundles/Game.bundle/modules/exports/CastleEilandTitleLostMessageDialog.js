Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleEilandTitleLostMessageDialog() {
    var __s3local0 = this;
    __s3local0.type = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleLostMessageDialog, __s1param0);
  CastleEilandTitleLostMessageDialog.prototype.parseParams = function (__s5param0) {
    __s1param0.prototype.parseParams.call(this, __s5param0);
    this.type = __dep_exact_f855840627e6e145.int(this.paramArray[2]);
  };
  CastleEilandTitleLostMessageDialog.prototype.onGetTitleData = function (__s7param0) {
    __s1param0.prototype.onGetTitleData.call(this, __s7param0);
    this.dialogDisp.mc_titleBonus.visible = false;
    var __s7local0 = [this.kingName, __dep_export_CastleModel.CastleModel.languageData.getTextById(this.titleVO.textID)];
    switch (this.type) {
      case __dep_exact_26a421b704832cff.MessageConst.DATATYPE_TITLE_LOST_LEADER_LEFT:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_kingLeft_copy", __s7local0));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.DATATYPE_TITLE_LOST_PLAYER_LEFT:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_playerLeft_copy", __s7local0));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.DATATYPE_TITLE_LOST_RESET:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_resetTitle_copy", __s7local0));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.DATATYPE_TITLE_LOST_TAKEN:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMessage_lostTitle_copy", __s7local0));
    }
    this.adjustTextSize();
  };
  CastleEilandTitleLostMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleLostMessageDialog.NAME = "CastleEilandTitleLostMessage";
  };
  return CastleEilandTitleLostMessageDialog;
}(require("gge-module:export_CastleEilandTitleMessageDialog").CastleEilandTitleMessageDialog);
exports.CastleEilandTitleLostMessageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
