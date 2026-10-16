Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleKongregateNotificationDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleKongregateNotificationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKongregateNotificationDialog, __s1param0);
  CastleKongregateNotificationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rateEmpire_sucess_copy"));
  };
  CastleKongregateNotificationDialog.prototype.onClick = function (__s7param0) {
    if (__s7param0.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  CastleKongregateNotificationDialog.prototype.updatePosition = function () {
    __s1param0.prototype.updatePosition.call(this);
    var __s10local0 = this.dialogDisp.getBounds(null);
    this.dialogDisp.y = __s10local0.top + 250;
  };
  CastleKongregateNotificationDialog.__initialize_static_members = function () {
    CastleKongregateNotificationDialog.NAME = "CastleKongregateNotification";
  };
  return CastleKongregateNotificationDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleKongregateNotificationDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
