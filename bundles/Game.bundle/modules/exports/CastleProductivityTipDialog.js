Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleBasicTipDialog = require("gge-module:export_CastleBasicTipDialog");
var __s0local0 = function (__s1param0) {
  function CastleProductivityTipDialog() {
    return __s1param0.call(this, CastleProductivityTipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleProductivityTipDialog, __s1param0);
  Object.defineProperty(CastleProductivityTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "ProductivityTip";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBasicTipDialog.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleProductivityTipDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tip_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("tip_productivity"));
  };
  CastleProductivityTipDialog.prototype.onClick = function (__s11param0) {
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleProductivityTipDialog.__initialize_static_members = function () {
    CastleProductivityTipDialog.NAME = "CastleProductivityTipEx";
  };
  return CastleProductivityTipDialog;
}(__dep_export_CastleBasicTipDialog.CastleBasicTipDialog);
exports.CastleProductivityTipDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
