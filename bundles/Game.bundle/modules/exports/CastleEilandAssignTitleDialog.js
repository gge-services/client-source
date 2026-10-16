Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_export_C2SAssignTitleVO = require("gge-module:export_C2SAssignTitleVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEilandTextComposer = require("gge-module:export_CastleEilandTextComposer");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.FocusEvent;
var __s0local1 = function (__s1param0) {
  function CastleEilandAssignTitleDialog() {
    return __s1param0.call(this, CastleEilandAssignTitleDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandAssignTitleDialog, __s1param0);
  CastleEilandAssignTitleDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel]);
  };
  CastleEilandAssignTitleDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    var __s7local0;
    var __s7local1;
    var __s7local2 = this.dialogProperties.revokeAssignedTitle ? "dialog_eiland_titleMenu_title_take_header" : "dialog_eiland_titleMenu_title_give_header";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local2)).autoFitToBounds = true;
    this.dialogDisp.mc_assignComponent.titleBackground.gotoAndStop(this.dialogProperties.titleVO.isPositive ? 1 : 2);
    this.dialogDisp.mc_assignComponent.visible = !this.dialogProperties.revokeAssignedTitle;
    this.itxt_description_long = this.textFieldManager.registerTextField(this.dialogDisp.txt_description_long, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_description_long.autoFitToBounds = true;
    this.itxt_description_short = this.textFieldManager.registerTextField(this.dialogDisp.txt_description_short, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_description_short.autoFitToBounds = true;
    if (this.dialogProperties.revokeAssignedTitle) {
      __s7local0 = "dialog_eiland_titleMenu_title_take_text";
      __s7local1 = [this.dialogProperties.titleVO.textID, this.dialogProperties.titleVO.currentAssignee];
      this.itxt_description_long.textContentVO.textId = __s7local0;
      this.itxt_description_long.textContentVO.textReplacements = __s7local1;
      this.dialogDisp.txt_description_short.visible = false;
      this.itxt_description_long.visible = true;
      this.itxt_description_long.mouseEnabled = true;
    } else {
      if (this.alreadyAssigned) {
        __s7local0 = "dialog_eiland_titleMenu_title_text_giveAgain";
        __s7local1 = [this.dialogProperties.titleVO.textID, this.dialogProperties.titleVO.currentAssignee];
      } else {
        __s7local0 = "dialog_eiland_titleMenu_title_text_give";
        __s7local1 = [this.dialogProperties.titleVO.textID];
      }
      this.itxt_description_short.textContentVO.textId = __s7local0;
      this.itxt_description_short.textContentVO.textReplacements = __s7local1;
      this.dialogDisp.txt_description_short.visible = true;
      this.dialogDisp.txt_description_long.visible = false;
      this.itxt_description_long.visible = false;
      this.itxt_description_long.mouseEnabled = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_assignComponent.txt_bonus, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleEilandTextComposer.CastleEilandTextComposer.generateBonusText(this.dialogProperties.titleVO))).autoFitToBounds = true;
    this.dialogDisp.mc_assignComponent.txt_name.type = __dep_exact_81dacdf05bd32292_2.TextFieldType.INPUT;
    this.dialogDisp.mc_assignComponent.txt_name.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.USERNAME_MAX_LENGTH + 6;
    this.nameInputText = this.textFieldManager.registerTextField(this.dialogDisp.mc_assignComponent.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(CastleEilandAssignTitleDialog.DEFAULT_INPUT_TEXT_ID));
    this.defaultInputText = this.nameInputText.text;
  };
  CastleEilandAssignTitleDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    if (!this.dialogProperties.revokeAssignedTitle) {
      this.dialogDisp.mc_assignComponent.txt_name.addEventListener(__s0local0.FOCUS_IN, this.bindFunction(this.onFocusInInputText));
      this.dialogDisp.mc_assignComponent.txt_name.addEventListener(__s0local0.FOCUS_OUT, this.bindFunction(this.onFocusOutInputText));
      this.dialogDisp.mc_assignComponent.txt_name.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    }
  };
  CastleEilandAssignTitleDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    if (!this.dialogProperties.revokeAssignedTitle) {
      this.dialogDisp.mc_assignComponent.txt_name.removeEventListener(__s0local0.FOCUS_IN, this.bindFunction(this.onFocusInInputText));
      this.dialogDisp.mc_assignComponent.txt_name.removeEventListener(__s0local0.FOCUS_OUT, this.bindFunction(this.onFocusOutInputText));
      this.dialogDisp.mc_assignComponent.txt_name.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    }
  };
  CastleEilandAssignTitleDialog.prototype.inputKeyDown = function (__s19param0) {
    if (__s19param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER && this.nameInputText.text != "" && this.nameInputText.text != this.defaultInputText && !this.dialogProperties.revokeAssignedTitle) {
      document.activeElement.blur();
      this.onConfirmAssignment();
    }
  };
  CastleEilandAssignTitleDialog.prototype.onFocusInInputText = function (__s22param0) {
    if (this.nameInputText.text == this.defaultInputText) {
      this.nameInputText.clearText();
    }
  };
  CastleEilandAssignTitleDialog.prototype.onFocusOutInputText = function (__s25param0) {
    if (this.nameInputText.text == "") {
      this.nameInputText.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(CastleEilandAssignTitleDialog.DEFAULT_INPUT_TEXT_ID);
    }
  };
  CastleEilandAssignTitleDialog.prototype.onClick = function (__s28param0) {
    __s1param0.prototype.onClick.call(this, __s28param0);
    switch (__s28param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onConfirmAssignment();
    }
  };
  CastleEilandAssignTitleDialog.prototype.onConfirmAssignment = function () {
    if (this.dialogProperties.revokeAssignedTitle) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAssignTitleVO.C2SAssignTitleVO(this.dialogProperties.titleVO.titleID, ""));
    } else {
      this.inputText = this.nameInputText.text;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAssignTitleVO.C2SAssignTitleVO(this.dialogProperties.titleVO.titleID, this.inputText));
    }
    this.hide();
  };
  Object.defineProperty(CastleEilandAssignTitleDialog.prototype, "alreadyAssigned", {
    get: function () {
      return !!this.dialogProperties.titleVO.currentAssignee && this.dialogProperties.titleVO.currentAssignee != "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandAssignTitleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandAssignTitleDialog.NAME = "CastleEilandAssignTitle";
  CastleEilandAssignTitleDialog.DEFAULT_INPUT_TEXT_ID = "dialog_renameLord_insertText";
  return CastleEilandAssignTitleDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEilandAssignTitleDialog = __s0local1;
__dep_exact_81dacdf05bd32292_3.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
