Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceChangeNameVO = require("gge-module:export_C2SAllianceChangeNameVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicRenameDialog = require("gge-module:export_BasicRenameDialog");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function CastleNameAllianceDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleNameAllianceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNameAllianceDialog, __s1param0);
  CastleNameAllianceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_back, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleNameAllianceDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.initStaticText(this.dialogDisp.txt_title, __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_editName"));
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_alliance_editName_copy");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_alliance_name");
    this.initStaticText(this.dialogDisp.mc_costs.txt_title, "costs");
    this.imc_costs = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.controller.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED, this.bindFunction(this.onAllianceNameChanged));
    var __s7local0 = this.dialogProperties.allianceVO.freeRenames == 0 ? __dep_exact_26a421b704832cff.AllianceConst.RENAME_COST_C2 : 0;
    this.imc_costs.textContentVO.numberValue = __s7local0;
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this._inputBehaviourName) {
      this._inputBehaviourName.onHide();
    }
    this._inputBehaviourName = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_name, this.itxt_insert);
    this._inputBehaviourName.onShow();
  };
  CastleNameAllianceDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    this._inputBehaviourName.onHide();
    this.controller.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED, this.bindFunction(this.onAllianceNameChanged));
  };
  Object.defineProperty(CastleNameAllianceDialog.prototype, "textMaxChars", {
    get: function () {
      return __dep_exact_26a421b704832cff.AllianceConst.NAME_MAX_LENGTH;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "textMaxChars").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNameAllianceDialog.prototype, "defaultName", {
    get: function () {
      return this.dialogProperties.allianceVO.allianceName;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "defaultName").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleNameAllianceDialog.prototype.validate = function () {
    if (__s1param0.prototype.validate.call(this)) {
      if (this.itxt_insert.text == "") {
        this.alert("generic_alert_watchout", "dialog_alliance_noName");
      } else {
        if (__dep_exact_9e901e8e2483a22f.TextValide.isUsernameValide(this.itxt_insert.text)) {
          return true;
        }
        this.alert("generic_alert_watchout", "alliance_name_invalide");
      }
    }
    return false;
  };
  CastleNameAllianceDialog.prototype.sendCommand = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeNameVO.C2SAllianceChangeNameVO(__dep_exact_9e901e8e2483a22f.TextValide.getValidUsername(this.itxt_insert.text)));
  };
  CastleNameAllianceDialog.prototype.onAllianceNameChanged = function (__s28param0) {
    this.hide();
  };
  Object.defineProperty(CastleNameAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNameAllianceDialog.NAME = "CastleNameAlliance_W";
  return CastleNameAllianceDialog;
}(__dep_export_BasicRenameDialog.BasicRenameDialog);
exports.CastleNameAllianceDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
