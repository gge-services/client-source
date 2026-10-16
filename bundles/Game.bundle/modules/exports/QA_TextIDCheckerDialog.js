Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function QA_TextIDCheckerDialog() {
    var __s3local0 = this;
    __s3local0._showExistingTextIDs = false;
    __s3local0._scrollByLineAmount = 10;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, QA_TextIDCheckerDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QA_TextIDCheckerDialog, __s1param0);
  QA_TextIDCheckerDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_show_existing, this.dialogDisp.btn_show_missing, this.dialogDisp.checkbox_short_descriptions, this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this._checkboxShowShortDescriptions = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.dialogDisp.checkbox_short_descriptions);
    this._checkboxShowShortDescriptions.deselected();
    this._showExistingTextIDs = false;
    this.createHelpTooltip();
    this.checkEffectTextIDs();
  };
  QA_TextIDCheckerDialog.prototype.checkEffectTextIDs = function () {
    this.dialogDisp.txt_output.text = "";
    var __s7local0;
    var __s7local1;
    var __s7local2 = "equip_effect_description_";
    var __s7local3 = 0;
    if (this._checkboxShowShortDescriptions.isSelected) {
      __s7local2 = "equip_effect_description_short_";
    }
    for (var __s7local4 = 1; __s7local4 < 333; __s7local4++) {
      var __s7local5 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s7local4);
      __s7local0 = __s7local5 ? __s7local5.name : "";
      __s7local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__s7local2 + __s7local0);
      if (__s7local0 != "") {
        if (this._showExistingTextIDs || __s7local2 + __s7local0 != __s7local1) {
          if (this._showExistingTextIDs && __s7local2 + __s7local0 != __s7local1) {
            this.dialogDisp.txt_title.text = "show existing textIDs with translation";
            __s7local3++;
            this.dialogDisp.txt_output.text += "\n--------------------\n(" + __s7local3 + ") textID: " + (__s7local2 + __s7local0) + ":\nlocalized text: " + __s7local1;
          }
        } else {
          this.dialogDisp.txt_title.text = "show missing textIDs";
          __s7local3++;
          this.dialogDisp.txt_output.text += "\n--------------------\n(" + __s7local3 + ") textID: " + (__s7local2 + __s7local0);
        }
      }
    }
  };
  QA_TextIDCheckerDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.dialogDisp.btn_show_existing:
        this._showExistingTextIDs = true;
        this.checkEffectTextIDs();
        break;
      case this.dialogDisp.btn_show_missing:
        this._showExistingTextIDs = false;
        this.checkEffectTextIDs();
        break;
      case this._checkboxShowShortDescriptions.disp:
        if (this._checkboxShowShortDescriptions.isSelected) {
          this._checkboxShowShortDescriptions.deselected();
        } else {
          this._checkboxShowShortDescriptions.selected();
        }
        this.checkEffectTextIDs();
        break;
      case this.dialogDisp.btn_up:
        this.scrollText(-this._scrollByLineAmount);
        break;
      case this.dialogDisp.btn_down:
        this.scrollText(this._scrollByLineAmount);
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  QA_TextIDCheckerDialog.prototype.scrollText = function (__s21param0) {
    this.dialogDisp.txt_output.scrollV += __s21param0;
  };
  QA_TextIDCheckerDialog.prototype.createHelpTooltip = function () {
    var __s23local0 = "HELP!";
    __s23local0 += "\nThis dialog shows:";
    __s23local0 += "\n- existing textIDs for the hero-effects and the localized textIDs";
    __s23local0 += "\nor";
    __s23local0 += "\n- missing textIDs";
    __s23local0 += "\n\nchoose the short or the long version of effect descriptions by toggling the checkbox";
    this.dialogDisp.btn_help.toolTipText = __s23local0;
  };
  QA_TextIDCheckerDialog.NAME = "QA_TextIDCheckerDialog";
  return QA_TextIDCheckerDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.QA_TextIDCheckerDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
