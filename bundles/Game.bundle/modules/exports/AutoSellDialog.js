Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AutoSellDialog() {
    return __s1param0.call(this, AutoSellDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellDialog, __s1param0);
  AutoSellDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_save], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_tab_equipments, 1.025);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_tab_gems, 1.025);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_autoSellSettings_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_autoSellSettings_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_save.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("save")).autoFitToBounds = true;
    this._tfTabBtnEquipment = this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_equipments.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("equipment"));
    this._tfTabBtnEquipment.autoFitToBounds = true;
    this._tfTabBtnGems = this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_gems.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("gems"));
    this._tfTabBtnGems.autoFitToBounds = true;
    this._subLayer = new Map();
    this._subLayer.set(AutoSellDialog.TAB_EQUIPMENTS, new __dep_export_AutoSellDialogEquipments.AutoSellDialogEquipments(this.dialogDisp.tab_equipments));
    this._subLayer.set(AutoSellDialog.TAB_GEMS, new __dep_export_AutoSellDialogGems.AutoSellDialogGems(this.dialogDisp.tab_gems));
  };
  AutoSellDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.cloneAutoSellVOFromModel();
    this.changeCategory(AutoSellDialog.TAB_EQUIPMENTS);
  };
  AutoSellDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
  };
  AutoSellDialog.prototype.changeCategory = function (__s11param0) {
    function updateButton(__s13param0, __s13param1, __s13param2) {
      __s13param0.mc_background.gotoAndStop(__s13param2 ? 2 : 1);
      __s13param1.color = __s13param2 ? AutoSellDialog.TAB_BTN_COLOR_SELECTED : AutoSellDialog.TAB_BTN_COLOR_DEFAULT;
    }
    if (this._currentCategory != __s11param0) {
      __s1param0.prototype.changeCategory.call(this, __s11param0);
      this.showSublayer(this._subLayer.get(__s11param0), []);
      updateButton(this.dialogDisp.btn_tab_equipments, this._tfTabBtnEquipment, this._currentCategory == AutoSellDialog.TAB_EQUIPMENTS);
      updateButton(this.dialogDisp.btn_tab_gems, this._tfTabBtnGems, this._currentCategory == AutoSellDialog.TAB_GEMS);
    }
  };
  AutoSellDialog.prototype.cloneAutoSellVOFromModel = function () {
    this._autoSellVO = __dep_export_CastleModel.CastleModel.subscriptionData.autoSell.clone();
    if (this._subLayer != null) {
      for (var __s16local0 = 0, __s16local1 = Array.from(this._subLayer.values()); __s16local0 < __s16local1.length; __s16local0++) {
        __s16local1[__s16local0].autoSellVO = this._autoSellVO;
      }
    }
  };
  AutoSellDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_equipments:
          this.changeCategory(AutoSellDialog.TAB_EQUIPMENTS);
          break;
        case this.dialogDisp.btn_tab_gems:
          this.changeCategory(AutoSellDialog.TAB_GEMS);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_autoSellSettings_help"));
          break;
        case this.dialogDisp.btn_save:
          this.onSaveButtonClicked();
      }
    }
  };
  AutoSellDialog.prototype.onSaveButtonClicked = function () {
    __dep_export_CastleModel.CastleModel.subscriptionData.autoSell.applyNewConfig(this._autoSellVO);
    __dep_export_CastleModel.CastleModel.subscriptionData.autoSell.sendConfigToServer();
    this.hide();
  };
  AutoSellDialog.__initialize_static_members = function () {
    AutoSellDialog.TAB_BTN_COLOR_DEFAULT = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  AutoSellDialog.NAME = "AutoSell";
  AutoSellDialog.TAB_BTN_COLOR_SELECTED = 15921906;
  AutoSellDialog.TAB_EQUIPMENTS = "tab_equipments";
  AutoSellDialog.TAB_GEMS = "tab_gems";
  return AutoSellDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.AutoSellDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AutoSellDialogEquipments = require("gge-module:export_AutoSellDialogEquipments");
var __dep_export_AutoSellDialogGems = require("gge-module:export_AutoSellDialogGems");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
