Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function FusionForgeHubDialog() {
    return __s1param0.call(this, FusionForgeHubDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialog, __s1param0);
  FusionForgeHubDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_catalysts, this.dialogDisp.btn_tab_shop_soft, this.dialogDisp.btn_tab_shop_hard]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_quick_guide], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(FusionForgeHubDialog.TAB_MAIN, new __dep_export_FusionForgeHubDialogMain.FusionForgeHubDialogMain(this.dialogDisp.tab_main, this.bindFunction(this.onForgeDialogOpened)));
    this._subLayer.set(FusionForgeHubDialog.TAB_CATALYSTS, new __dep_export_FusionForgeHubDialogCatalysts.FusionForgeHubDialogCatalysts(this.dialogDisp.tab_catalysts));
    this._subLayer.set(FusionForgeHubDialog.TAB_SHOP_SOFT, new __dep_export_FusionForgeHubDialogShopSoft.FusionForgeHubDialogShopSoft(this.dialogDisp.tab_shop_soft));
    this._subLayer.set(FusionForgeHubDialog.TAB_SHOP_HARD, new __dep_export_FusionForgeHubDialogShopHard.FusionForgeHubDialogShopHard(this.dialogDisp.tab_shop_hard));
    this.dialogDisp.btn_tab_main.toolTipText = "dialog_fusionHub_fusionForges_title";
    this.dialogDisp.btn_tab_catalysts.toolTipText = "dialog_fusionHub_catalystOverview_title";
    this.dialogDisp.btn_tab_shop_soft.toolTipText = "dialog_fusionHub_FCShop_title";
    this.dialogDisp.btn_tab_shop_hard.toolTipText = "dialog_fusionHub_HCShop_title";
    this.dialogDisp.btn_help.toolTipText = "help";
  };
  FusionForgeHubDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.fusionProperties.startCategory) {
      this.changeCategory(this.fusionProperties.startCategory);
    } else {
      this.changeCategory(FusionForgeHubDialog.TAB_MAIN);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_quick_guide.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_quickGuide_button"));
  };
  FusionForgeHubDialog.prototype.changeCategory = function (__s11param0) {
    function updateButton(__s13param0, __s13param1) {
      __s13param0.gotoAndStop(__dep_exact_f855840627e6e145.int(__s13param1 ? 2 : 1));
    }
    if (this._currentCategory != __s11param0) {
      __s1param0.prototype.changeCategory.call(this, __s11param0);
      this.showSublayer(this._subLayer.get(__s11param0), []);
      updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == FusionForgeHubDialog.TAB_MAIN);
      updateButton(this.dialogDisp.btn_tab_catalysts, this._currentCategory == FusionForgeHubDialog.TAB_CATALYSTS);
      updateButton(this.dialogDisp.btn_tab_shop_soft, this._currentCategory == FusionForgeHubDialog.TAB_SHOP_SOFT);
      updateButton(this.dialogDisp.btn_tab_shop_hard, this._currentCategory == FusionForgeHubDialog.TAB_SHOP_HARD);
    }
  };
  FusionForgeHubDialog.prototype.getHelpText = function () {
    switch (this._currentCategory) {
      case FusionForgeHubDialog.TAB_MAIN:
        return "dialog_fusionHub_fusionForges_help";
      case FusionForgeHubDialog.TAB_CATALYSTS:
        return "dialog_fusionHub_catalystOverview_help";
      case FusionForgeHubDialog.TAB_SHOP_SOFT:
        return "dialog_fusionHub_FCShop_help";
      case FusionForgeHubDialog.TAB_SHOP_HARD:
        return "dialog_fusionHub_HCShop_help";
      default:
        return "";
    }
  };
  FusionForgeHubDialog.prototype.onClick = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      __s1param0.prototype.onClick.call(this, __s19param0);
      switch (__s19param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.changeCategory(FusionForgeHubDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_catalysts:
          this.changeCategory(FusionForgeHubDialog.TAB_CATALYSTS);
          break;
        case this.dialogDisp.btn_tab_shop_soft:
          this.changeCategory(FusionForgeHubDialog.TAB_SHOP_SOFT);
          break;
        case this.dialogDisp.btn_tab_shop_hard:
          this.changeCategory(FusionForgeHubDialog.TAB_SHOP_HARD);
          break;
        case this.dialogDisp.btn_quick_guide:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_DecorationForgeQuickGuideDialog.DecorationForgeQuickGuideDialog);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.getHelpText()));
      }
    }
  };
  FusionForgeHubDialog.prototype.onForgeDialogOpened = function () {
    this.hide();
  };
  Object.defineProperty(FusionForgeHubDialog.prototype, "fusionProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  FusionForgeHubDialog.__initialize_static_members = function () {
    FusionForgeHubDialog.NAME = "FusionForgeHub";
    FusionForgeHubDialog.TAB_MAIN = "tab_main";
    FusionForgeHubDialog.TAB_CATALYSTS = "tab_catalysts";
    FusionForgeHubDialog.TAB_SHOP_SOFT = "tab_shop_soft";
    FusionForgeHubDialog.TAB_SHOP_HARD = "tab_shop_hard";
  };
  return FusionForgeHubDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.FusionForgeHubDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_FusionForgeHubDialogCatalysts = require("gge-module:export_FusionForgeHubDialogCatalysts");
var __dep_export_FusionForgeHubDialogMain = require("gge-module:export_FusionForgeHubDialogMain");
var __dep_export_FusionForgeHubDialogShopHard = require("gge-module:export_FusionForgeHubDialogShopHard");
var __dep_export_FusionForgeHubDialogShopSoft = require("gge-module:export_FusionForgeHubDialogShopSoft");
var __dep_export_DecorationForgeQuickGuideDialog = require("gge-module:export_DecorationForgeQuickGuideDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
