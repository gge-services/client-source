Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleDelayedYesNoDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDelayedYesNoDialog, __s1param0);
  CastleDelayedYesNoDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.standardDialog.btn_yes, true);
  };
  CastleDelayedYesNoDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
    }
  };
  CastleDelayedYesNoDialog.__initialize_static_members = function () {
    CastleDelayedYesNoDialog.NAME = "CastleDelayedYesNoDialog";
  };
  return CastleDelayedYesNoDialog;
}(require("gge-module:export_CastleStandardYesNoDialog").CastleStandardYesNoDialog);
exports.CastleDelayedYesNoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
