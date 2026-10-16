Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackInfoDialog() {
    return __s1param0.call(this, AdvisorAttackInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackInfoDialog, __s1param0);
  AdvisorAttackInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  AdvisorAttackInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("title_advisorInformation")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.descriptionTextId)).autoFitToBounds = true;
  };
  Object.defineProperty(AdvisorAttackInfoDialog.prototype, "descriptionTextId", {
    get: function () {
      return "description_advisorInformation_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.dialogProperties.advisorType);
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackInfoDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(AdvisorAttackInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackInfoDialog.NAME = "NomadAdvisorFunctionalityExt";
  return AdvisorAttackInfoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AdvisorAttackInfoDialog = __s0local0;
