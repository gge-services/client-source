Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ModernPackageShopResourceTipEnum = require("gge-module:export_ModernPackageShopResourceTipEnum");
var __s0local0 = createjs.Point;
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local1 = function (__s1param0) {
  function ModernPackageShopResourceTipDialog() {
    return __s1param0.call(this, ModernPackageShopResourceTipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopResourceTipDialog, __s1param0);
  ModernPackageShopResourceTipDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  ModernPackageShopResourceTipDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateDialog();
  };
  ModernPackageShopResourceTipDialog.prototype.updateDialog = function () {
    this.dialogDisp.mc_arrow.visible = false;
    this.dialogDisp.mc_worldmapObject.visible = false;
    this.dialogDisp.mc_currency0.visible = false;
    this.dialogDisp.mc_currency1.visible = false;
    this.destroyCollectableRenderList();
    if (this.dialogProperties.relevantCurrencyTypes.length >= 2) {
      this.setCurrencyByMultiple();
    } else if (this.dialogProperties.relevantCurrencyTypes.length == 1) {
      this.setCurrencyBySingle();
    }
  };
  ModernPackageShopResourceTipDialog.prototype.setCurrencyByMultiple = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_notEnoughCurrency_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.getDescTextIdByMultiple()));
    for (var __s13local0 = 0; __s13local0 < ModernPackageShopResourceTipDialog.MAX_CURRENCIES_TO_SHOW; ++__s13local0) {
      this.addCurrencyIcon(this.dialogDisp.getChildByName("mc_currency" + __s13local0), this.dialogProperties.relevantCurrencyTypes[__s13local0]);
    }
  };
  ModernPackageShopResourceTipDialog.prototype.setCurrencyBySingle = function () {
    var __s17local0 = this.dialogProperties.relevantCurrencyTypes[0];
    var __s17local1 = __dep_export_ModernPackageShopResourceTipEnum.ModernPackageShopResourceTipEnum.getTypeByVO(__s17local0);
    this.dialogDisp.mc_arrow.visible = true;
    this.dialogDisp.mc_worldmapObject.visible = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s17local1.titleTextId))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s17local1.descTextId));
    this.dialogDisp.mc_worldmapObject.gotoAndStop(__s17local1.worldmapObjectFrame);
    this.addCurrencyIcon(this.dialogDisp.mc_currency1, __s17local0);
  };
  ModernPackageShopResourceTipDialog.prototype.addCurrencyIcon = function (__s19param0, __s19param1) {
    var __s19local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, ModernPackageShopResourceTipDialog.CURRENCY_ICON_DIMENSION);
    __s19local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s19param0), __dep_export_CollectableHelper.CollectableHelper.createVO(__s19param1.type, 1, __s19param1.id), __s19local0);
  };
  ModernPackageShopResourceTipDialog.prototype.getDescTextIdByMultiple = function () {
    var __s21local0 = this.dialogProperties.relevantCurrencyTypes[0];
    var __s21local1 = this.dialogProperties.relevantCurrencyTypes[1];
    if (__s21local0.type == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && __s21local0.id == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN && __s21local1.type == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && __s21local1.id == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_MEDAL) {
      return "dialog_notEnoughCurrency_samuraiMedalAndTokens_desc";
    } else {
      return "dialog_notEnoughCurrency_generic_multiCurrency_desc";
    }
  };
  ModernPackageShopResourceTipDialog.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    switch (__s25param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(ModernPackageShopResourceTipDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopResourceTipDialog.__initialize_static_members = function () {
    ModernPackageShopResourceTipDialog.CURRENCY_ICON_DIMENSION = new __s0local0(100, 100);
  };
  ModernPackageShopResourceTipDialog.NAME = "ModernPackageShopResourceTip";
  ModernPackageShopResourceTipDialog.MAX_CURRENCIES_TO_SHOW = 2;
  return ModernPackageShopResourceTipDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ModernPackageShopResourceTipDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
