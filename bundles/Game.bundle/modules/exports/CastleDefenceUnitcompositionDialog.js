Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_MultiSlider = require("gge-module:export_MultiSlider");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleDefenceUnitcompositionDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleDefenceUnitcompositionDialog.NAME) || this).backgroundAlpha = 0.1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDefenceUnitcompositionDialog, __s1param0);
  CastleDefenceUnitcompositionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_ok]);
    this.unitCompositionSlider = new __dep_export_MultiSlider.MultiSlider(this.dialogDisp.multislider, 1, 24, 220, __dep_exact_81dacdf05bd32292_1.getDefinitionByName("DefenceUnitAllocationSliderButtonEx"));
  };
  CastleDefenceUnitcompositionDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_defenceUnitcomposition_title"));
    this.dialogDisp.info_Melee.toolTipText = "melees";
    this.dialogDisp.info_Range.toolTipText = "ranges";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.unitCompositionSlider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onUnitallocationChanged));
    this.itxt_melee = this.textFieldManager.registerTextField(this.dialogDisp.info_Melee.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_range = this.textFieldManager.registerTextField(this.dialogDisp.info_Range.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    this.unitCompositionSlider.setSliderTo(0, this.unitcompositionProperties.presetValue);
    this.updateUnitAllocationText();
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleDefenceUnitcompositionDialog.prototype.onUnitallocationChanged = function (__s9param0) {
    this.updateUnitAllocationText();
  };
  CastleDefenceUnitcompositionDialog.prototype.updateUnitAllocationText = function () {
    var __s11local0 = this.unitCompositionSlider.getPercentValues();
    var __s11local1 = Math.min(Math.round(__s11local0[0] * 100), 100);
    var __s11local2 = 100 - __s11local1;
    if (this.itxt_melee.textContentVO) {
      this.itxt_melee.textContentVO.textReplacements = [__s11local1];
    }
    if (this.itxt_range.textContentVO) {
      this.itxt_range.textContentVO.textReplacements = [__s11local2];
    }
  };
  CastleDefenceUnitcompositionDialog.prototype.onClick = function (__s15param0) {
    if (!this.isLocked && !this.isWaitingForServerMessage && (__s1param0.prototype.onClick.call(this, __s15param0), __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target))) {
      switch (__s15param0.target) {
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_defence_unitcomposition"));
          break;
        case this.dialogDisp.btn_ok:
          var __s15local0 = this.unitCompositionSlider.getPercentValues();
          this.unitcompositionProperties.functionOk(this.unitcompositionProperties.wallId, __s15local0.shift() * 100);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleDefenceUnitcompositionDialog.prototype, "unitcompositionProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceUnitcompositionDialog.__initialize_static_members = function () {
    CastleDefenceUnitcompositionDialog.NAME = "CastleDefenceUnitcompsitionEx";
  };
  return CastleDefenceUnitcompositionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleDefenceUnitcompositionDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
