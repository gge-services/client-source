Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleIngameMessageDealsDayDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleIngameMessageDealsDayDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleIngameMessageDealsDayDialog, __s1param0);
  CastleIngameMessageDealsDayDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleIngameMessageDealsDayDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.setText();
  };
  CastleIngameMessageDealsDayDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("empireDealsDays_message_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("empireDealsDays_message_copy"));
  };
  CastleIngameMessageDealsDayDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleIngameMessageDealsDayDialog.__initialize_static_members = function () {
    CastleIngameMessageDealsDayDialog.NAME = "CastleIngameMessageDealsDay";
  };
  return CastleIngameMessageDealsDayDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleIngameMessageDealsDayDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
