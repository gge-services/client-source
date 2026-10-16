Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __dep_export_ApprenticeSmithScrollItem = require("gge-module:export_ApprenticeSmithScrollItem");
var __s0local0 = function (__s1param0) {
  function CastleApprenticeSmithEventDialog() {
    return __s1param0.call(this, CastleApprenticeSmithEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleApprenticeSmithEventDialog, __s1param0);
  CastleApprenticeSmithEventDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_apprenticeSmith_desc")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_token.mouseChildren = false;
    this.dialogDisp.mc_token.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_APPRENTICE_TOKEN).getTooltipTextId();
    this.updateTokens();
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTokens));
  };
  CastleApprenticeSmithEventDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s7param0);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTokens));
  };
  CastleApprenticeSmithEventDialog.prototype.updateTokens = function (__s9param0 = null) {
    this.buyPackagesComponent.update();
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_APPRENTICE_TOKEN));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_token.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s9local0));
  };
  Object.defineProperty(CastleApprenticeSmithEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_ApprenticeSmithScrollItem.ApprenticeSmithScrollItem;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleApprenticeSmithEventDialog.prototype.sortPackagesByHighlightOrder = function (__s15param0) {};
  CastleApprenticeSmithEventDialog.NAME = "CastleApprenticeSmithExternal";
  return CastleApprenticeSmithEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleApprenticeSmithEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
