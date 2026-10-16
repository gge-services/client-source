Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleBasicTipDialog = require("gge-module:export_CastleBasicTipDialog");
var __s0local0 = function (__s1param0) {
  function CastleBarrackUnitTipDialog() {
    return __s1param0.call(this, CastleBarrackUnitTipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBarrackUnitTipDialog, __s1param0);
  Object.defineProperty(CastleBarrackUnitTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "BarrackUnitTip";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBasicTipDialog.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleBarrackUnitTipDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("tip_barrackUnit"));
  };
  CastleBarrackUnitTipDialog.prototype.onClick = function (__s11param0) {
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleBarrackUnitTipDialog.__initialize_static_members = function () {
    CastleBarrackUnitTipDialog.NAME = "CastleBarrackUnitTipEx";
  };
  return CastleBarrackUnitTipDialog;
}(__dep_export_CastleBasicTipDialog.CastleBasicTipDialog);
exports.CastleBarrackUnitTipDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
