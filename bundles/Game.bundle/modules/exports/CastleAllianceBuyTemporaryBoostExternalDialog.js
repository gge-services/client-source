Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBuyTemporaryBoostExternalDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceBuyTemporaryBoostExternalDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBuyTemporaryBoostExternalDialog, __s1param0);
  CastleAllianceBuyTemporaryBoostExternalDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boostAmount, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties_0.boostAmount));
    this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties_0.boostDuration));
    this.dialogDisp.info_time.toolTipText = "runTime";
  };
  Object.defineProperty(CastleAllianceBuyTemporaryBoostExternalDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBuyTemporaryBoostExternalDialog.__initialize_static_members = function () {
    CastleAllianceBuyTemporaryBoostExternalDialog.NAME = "CastleAllianceBuyTemporaryBoost";
  };
  return CastleAllianceBuyTemporaryBoostExternalDialog;
}(require("gge-module:export_ACastleAllianceBuyBoostExternalDialog").ACastleAllianceBuyBoostExternalDialog);
exports.CastleAllianceBuyTemporaryBoostExternalDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
