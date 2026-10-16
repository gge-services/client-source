Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_AutoFillOptions = require("gge-module:export_AutoFillOptions");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function FightDialogAutoFillComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._isActive = false;
    __s3local0._useSimpleState = false;
    __s3local0._options = new __dep_export_AutoFillOptions.AutoFillOptions();
    __s3local0._onFillCurrentWaveButtonClicked = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onFillAllWavesButtonClicked = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onClearButtonClicked = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FightDialogAutoFillComponent, __s1param0);
  FightDialogAutoFillComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.btn_clear, this.disp.btn_optionsNormal, this.disp.btn_optionsActive, this.disp.btn_fillCurrentWave, this.disp.btn_fillAllWaves, this.disp.mc_options.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.disp.mc_check_flankLeft, this.disp.mc_check_flankMiddle, this.disp.mc_check_flankRight, this.disp.btn_autoFill]);
    for (var __s5local0 = 0, __s5local1 = __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_TYPES; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = this.getOptionsCheckboxMc(__s5local2);
        if (__s5local3) {
          __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s5local3);
        }
      }
    }
    this.disp.btn_clear.toolTipText = "dialog_attack_autofill_clearSelected_tt";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_optionsTooltip.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_autofill_options_tt")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_optionsTooltip.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_autofill_enabledToolTypes_tt")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_options.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_autofill_toolTypes_tt")).autoFitToBounds = true;
    for (var __s5local4 = 0, __s5local5 = __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_TYPES; __s5local4 < __s5local5.length; __s5local4++) {
      __s5local2 = __s5local5[__s5local4];
      if (__s5local3 = __dep_exact_81dacdf05bd32292_1.castAs(this.disp.mc_options.getChildByName("mc_icon_" + __s5local2), "MovieClip")) {
        __s5local3.toolTipText = "toolType_" + __s5local2;
      }
    }
    var __s5local6 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.btn_autoFill.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_autofill"));
    __s5local6.autoFitToBounds;
    __s5local6.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  FightDialogAutoFillComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.disp.mc_options.visible = false;
    this.disp.mc_optionsTooltip.visible = false;
    this.applyActiveState();
    this.applyCurrentOptionsToVisuals();
  };
  FightDialogAutoFillComponent.prototype.applyCurrentOptionsToVisuals = function () {
    if (!this.useSimpleState) {
      this.disp.mc_check_flankLeft.mc_check.visible = this.options.fillLeftFlank;
      this.disp.mc_check_flankMiddle.mc_check.visible = this.options.fillMiddleFlank;
      this.disp.mc_check_flankRight.mc_check.visible = this.options.fillRightFlank;
      for (var __s16local0 = 0, __s16local1 = __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_TYPES; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          var __s16local3 = this.getOptionsCheckboxMc(__s16local2);
          if (__s16local3) {
            __s16local3.gotoAndStop(this.options.isToolFilterActive(__s16local2) ? 2 : 1);
          }
        }
      }
      this.disp.mc_check_flankLeft.toolTipText = this.getCheckboxTooltipText("dialog_attack_autofill_leftFlank_tt", this.options.fillLeftFlank);
      this.disp.mc_check_flankMiddle.toolTipText = this.getCheckboxTooltipText("dialog_attack_autofill_front_tt", this.options.fillMiddleFlank);
      this.disp.mc_check_flankRight.toolTipText = this.getCheckboxTooltipText("dialog_attack_autofill_rightFlank_tt", this.options.fillRightFlank);
      var __s16local4 = this.options.getActiveToolFilter();
      for (var __s16local5 = 0; __s16local5 < FightDialogAutoFillComponent.NUMBER_OF_OPTIONS_TOOLTIP_ICONS; ++__s16local5) {
        var __s16local6 = this.disp.mc_optionsTooltip.getChildByName("mc_icon" + __s16local5);
        __s16local2 = __s16local5 < __s16local4.length ? __s16local4[__s16local5] : null;
        if (__s16local6) {
          __s16local6.visible = __s16local2 != null;
          __s16local6.gotoAndStop(FightDialogAutoFillComponent.getOptionsTooltipIconFrame(__s16local2));
        }
      }
      var __s16local7 = this.options.isAnyFlankActive();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_fillCurrentWave, __s16local7);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_fillAllWaves, __s16local7);
      this.updateOptionButtons();
    }
  };
  FightDialogAutoFillComponent.prototype.setActive = function (__s26param0, __s26param1 = false, __s26param2 = true, __s26param3 = true) {
    this._isActive = __s26param0;
    this._useSimpleState = __s26param1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_autoFill, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_fillCurrentWave, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_fillAllWaves, true);
    this.disp.btn_fillCurrentWave.toolTipText = "dialog_attack_autofill_selected_tt";
    this.disp.btn_fillAllWaves.toolTipText = "dialog_attack_autofill_all_tt";
    this.disp.btn_autoFill.toolTipText = null;
    if (!__s26param2) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_autoFill, false);
      this.disp.btn_autoFill.toolTipText = "dialog_attack_autofill_noDefenseTroops_tt";
    }
    if (!__s26param3) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_autoFill, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_fillCurrentWave, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_fillAllWaves, false);
      this.disp.btn_autoFill.toolTipText = "dialog_attack_autofill_noAttackTroops_tt";
      this.disp.btn_fillCurrentWave.toolTipText = "dialog_attack_autofill_noAttackTroops_tt";
      this.disp.btn_fillAllWaves.toolTipText = "dialog_attack_autofill_noAttackTroops_tt";
    }
    this.applyActiveState();
  };
  FightDialogAutoFillComponent.prototype.applyActiveState = function () {
    if (this.useSimpleState) {
      this.disp.mc_spaceDecoLeft.visible = true;
      this.disp.mc_spaceDecoRight.visible = false;
      this.disp.mc_check_flankLeft.visible = false;
      this.disp.mc_check_flankMiddle.visible = false;
      this.disp.mc_check_flankRight.visible = false;
      this.disp.btn_clear.visible = false;
      this.disp.btn_optionsNormal.visible = false;
      this.disp.btn_optionsActive.visible = false;
      this.disp.btn_fillCurrentWave.visible = false;
      this.disp.btn_fillAllWaves.visible = false;
      this.disp.btn_autoFill.visible = this.isActive;
    } else {
      this.disp.mc_spaceDecoLeft.visible = !this.isActive;
      this.disp.mc_spaceDecoRight.visible = !this.isActive;
      this.disp.mc_check_flankLeft.visible = this.isActive;
      this.disp.mc_check_flankMiddle.visible = this.isActive;
      this.disp.mc_check_flankRight.visible = this.isActive;
      this.disp.btn_clear.visible = this.isActive;
      this.disp.btn_optionsNormal.visible = this.isActive;
      this.disp.btn_optionsActive.visible = this.isActive;
      this.disp.btn_fillCurrentWave.visible = this.isActive;
      this.disp.btn_fillAllWaves.visible = this.isActive;
      this.disp.btn_autoFill.visible = false;
    }
    this.updateOptionButtons();
  };
  FightDialogAutoFillComponent.prototype.showOptions = function (__s34param0) {
    if (!this.useSimpleState) {
      this.disp.mc_options.visible = __s34param0;
      this.showOptionsTooltip(false);
      this.updateOptionButtons();
    }
  };
  FightDialogAutoFillComponent.prototype.showOptionsTooltip = function (__s37param0) {
    if (!this.useSimpleState) {
      this.disp.mc_optionsTooltip.visible = !this.areOptionsVisible() && __s37param0;
    }
  };
  FightDialogAutoFillComponent.prototype.updateOptionButtons = function () {
    if (!this.useSimpleState) {
      var __s40local0 = !this.options.isAnyToolFilterInactive();
      this.disp.btn_optionsNormal.visible = this.isActive && !__s40local0;
      this.disp.btn_optionsActive.visible = this.isActive && __s40local0;
    }
  };
  FightDialogAutoFillComponent.prototype.getAutoFillButtonMc = function () {
    if (this.useSimpleState) {
      return this.disp.btn_autoFill;
    } else {
      return this.disp.btn_fillAllWaves;
    }
  };
  FightDialogAutoFillComponent.prototype.areOptionsVisible = function () {
    return this.disp.mc_options.visible;
  };
  FightDialogAutoFillComponent.prototype.getCheckboxTooltipText = function (__s49param0, __s49param1) {
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s49param0, [__dep_exact_92d05af59ee2ff30.Localize.text(__s49param1 ? "dialog_attack_autofill_enabled_tt" : "dialog_attack_autofill_disabled_tt")]);
  };
  FightDialogAutoFillComponent.prototype.getOptionsCheckboxMc = function (__s51param0) {
    return this.disp.mc_options.getChildByName("mc_check_" + __s51param0);
  };
  FightDialogAutoFillComponent.getOptionsTooltipIconFrame = function (__s53param0) {
    switch (__s53param0) {
      case __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_BASIC:
        return 1;
      case __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_PREMIUM:
        return 2;
      case __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_ELITE:
        return 3;
      case __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_EVENT:
        return 4;
      case __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_COMBO:
        return 5;
      default:
        return 1;
    }
  };
  FightDialogAutoFillComponent.prototype.onClick = function (__s56param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s56param0.target)) {
      __s1param0.prototype.onClick.call(this, __s56param0);
      switch (__s56param0.target) {
        case this.disp.btn_clear:
          this.onClearButtonClicked.dispatch();
          break;
        case this.disp.btn_optionsNormal:
        case this.disp.btn_optionsActive:
          this.showOptions(!this.areOptionsVisible());
          break;
        case this.disp.btn_fillCurrentWave:
          this.onFillCurrentWaveButtonClicked.dispatch();
          break;
        case this.disp.btn_fillAllWaves:
        case this.disp.btn_autoFill:
          this.onFillAllWavesButtonClicked.dispatch();
          break;
        case this.disp.mc_check_flankLeft:
          this.options.fillLeftFlank = !this.options.fillLeftFlank;
          this.applyCurrentOptionsToVisuals();
          break;
        case this.disp.mc_check_flankMiddle:
          this.options.fillMiddleFlank = !this.options.fillMiddleFlank;
          this.applyCurrentOptionsToVisuals();
          break;
        case this.disp.mc_check_flankRight:
          this.options.fillRightFlank = !this.options.fillRightFlank;
          this.applyCurrentOptionsToVisuals();
          break;
        case this.disp.mc_options.btn_close:
          this.showOptions(false);
      }
      for (var __s56local0 = 0, __s56local1 = __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_TYPES; __s56local0 < __s56local1.length; __s56local0++) {
        var __s56local2 = __s56local1[__s56local0];
        if (__s56local2 !== undefined) {
          var __s56local3 = this.getOptionsCheckboxMc(__s56local2);
          if (__s56param0.target == __s56local3) {
            this.options.setToolFilter(__s56local2, !this.options.isToolFilterActive(__s56local2));
            this.applyCurrentOptionsToVisuals();
          }
        }
      }
    }
  };
  FightDialogAutoFillComponent.prototype.onMouseOver = function (__s64param0) {
    __s1param0.prototype.onMouseOver.call(this, __s64param0);
    switch (__s64param0.target) {
      case this.disp.btn_optionsNormal:
      case this.disp.btn_optionsActive:
        this.showOptionsTooltip(true);
    }
  };
  FightDialogAutoFillComponent.prototype.onMouseOut = function (__s67param0) {
    __s1param0.prototype.onMouseOut.call(this, __s67param0);
    switch (__s67param0.target) {
      case this.disp.btn_optionsNormal:
      case this.disp.btn_optionsActive:
        this.showOptionsTooltip(false);
    }
  };
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "onFillCurrentWaveButtonClicked", {
    get: function () {
      return this._onFillCurrentWaveButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "onFillAllWavesButtonClicked", {
    get: function () {
      return this._onFillAllWavesButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "onClearButtonClicked", {
    get: function () {
      return this._onClearButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "useSimpleState", {
    get: function () {
      return this._useSimpleState;
    },
    enumerable: true,
    configurable: true
  });
  FightDialogAutoFillComponent.NUMBER_OF_OPTIONS_TOOLTIP_ICONS = 5;
  return FightDialogAutoFillComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.FightDialogAutoFillComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
