Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function OptionsDialogRubyConfirmationItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_RubyConfirmationItem"))(), __s3param0) || this;
    __s3local0._inputBehaviours = [];
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_rubyConfirmation_title"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_rubyConfirmation_title"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_rubyConfirmation_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.txt_default, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_rubyConfirmation_noAmount_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.contentMC.checkbox_ruby, __s3local0.contentMC.checkbox_default], __dep_exact_84d43d9c404bd4d8.TwoStateButton);
    __s3local0.itxt_ruby = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_ruby.txt_ruby, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_ruby.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    __s3local0.itxt_ruby.restrict = "0-9";
    __s3local0.itxt_ruby.tabIndex = 1;
    __s3local0._inputBehaviours = [];
    __s3local0._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.contentMC.mc_ruby, __s3local0.itxt_ruby, false));
    var __s3local1 = __dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold;
    __s3local0.itxt_ruby.textContentVO.numberValue = __s3local1 > 0 ? __s3local1 : OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT;
    __s3local0.setRubyConfirmation(__s3local1 > -1, false);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogRubyConfirmationItem, __s1param0);
  OptionsDialogRubyConfirmationItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setRubyConfirmation(__dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold > 0);
    this.itxt_ruby.focusOut.add(this.bindFunction(this.onFocusOutRubyInput));
    this._inputBehaviours.forEach(function (__s7param0) {
      return __s7param0.onShow();
    });
  };
  OptionsDialogRubyConfirmationItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.itxt_ruby.focusOut.remove(this.bindFunction(this.onFocusOutRubyInput));
    this._inputBehaviours.forEach(function (__s11param0) {
      return __s11param0.onHide();
    });
  };
  OptionsDialogRubyConfirmationItem.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.contentMC.checkbox_ruby:
          this.setRubyConfirmation(true);
          break;
        case this.contentMC.checkbox_default:
          this.setRubyConfirmation(false);
      }
    }
  };
  OptionsDialogRubyConfirmationItem.prototype.setRubyConfirmation = function (__s17param0, __s17param1 = true) {
    this._rubyConfirmationActive = __s17param0;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.contentMC.checkbox_ruby, __s17param0);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.contentMC.checkbox_default, !__s17param0);
    if (__s17param1) {
      this.saveRubyConfirmation();
    }
  };
  OptionsDialogRubyConfirmationItem.prototype.onFocusOutRubyInput = function () {
    var __s20local0 = parseInt(this.itxt_ruby.text.replace(".", "").replace(",", "")) || OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT;
    __s20local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s20local0, OptionsDialogRubyConfirmationItem.MIN_AMOUNT, OptionsDialogRubyConfirmationItem.MAX_AMOUNT);
    this.itxt_ruby.textContentVO.numberValue = __s20local0;
    this.saveRubyConfirmation();
  };
  OptionsDialogRubyConfirmationItem.prototype.saveRubyConfirmation = function () {
    var __s22local0 = this.itxt_ruby.textContentVO.numberValue;
    __dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold = this._rubyConfirmationActive ? __s22local0 : -1;
  };
  OptionsDialogRubyConfirmationItem.MIN_AMOUNT = 1;
  OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT = 250;
  OptionsDialogRubyConfirmationItem.MAX_AMOUNT = 1000000;
  return OptionsDialogRubyConfirmationItem;
}(require("gge-module:export_AOptionsDialogCollapsibleItem").AOptionsDialogCollapsibleItem);
exports.OptionsDialogRubyConfirmationItem = __s0local0;
