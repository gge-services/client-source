Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleTempServerMultiplierDialog() {
    return __s1param0.call(this, CastleTempServerMultiplierDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTempServerMultiplierDialog, __s1param0);
  CastleTempServerMultiplierDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_enter, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleTempServerMultiplierDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("temp_server_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_multiplied_range", [this.dialogProperties.minMultiplier, this.dialogProperties.maxMultiplier]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_multiplierInfo_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_enter.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("temp_server_name")));
    this.dialogDisp.btn_enter.visible = !this.env.isOnTemporaryServer;
  };
  CastleTempServerMultiplierDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_enter:
        this.gotoEvent();
    }
  };
  CastleTempServerMultiplierDialog.prototype.gotoEvent = function () {
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
      if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.castleBought) {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
      } else {
        __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.openDialog();
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleTempServerMultiplierDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerMultiplierDialog.NAME = "CastleTempServerMultiplier";
  return CastleTempServerMultiplierDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTempServerMultiplierDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
