Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAlchemistRetirementDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAlchemistRetirementDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAlchemistRetirementDialog, __s1param0);
  CastleAlchemistRetirementDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alchemistRetirement_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardHeader, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alchemistRetirement_rewardHeader"));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.rewardListComponent = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(this.dialogDisp, new __s0local0(44, 41));
  };
  CastleAlchemistRetirementDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.rewardListComponent.showRewards(this.dialogProperties.rewards);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alchemistRetirement_description", this.dialogProperties.ingredients));
  };
  CastleAlchemistRetirementDialog.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleAlchemistRetirementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAlchemistRetirementDialog.__initialize_static_members = function () {
    CastleAlchemistRetirementDialog.NAME = "CastleAlchemistRetirementMessage";
  };
  return CastleAlchemistRetirementDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAlchemistRetirementDialog = __s0local1;
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
