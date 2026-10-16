Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleUnitDealerEventDialog = require("gge-module:export_CastleUnitDealerEventDialog");
var __s0local0 = function (__s1param0) {
  function CastlePrivateUnitDealerEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateUnitDealerEventDialog.ASSET_NAME_0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateUnitDealerEventDialog, __s1param0);
  CastlePrivateUnitDealerEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChange));
  };
  CastlePrivateUnitDealerEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChange));
  };
  Object.defineProperty(CastlePrivateUnitDealerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastlePrivateUnitDealerEventScrollItem.CastlePrivateUnitDealerEventScrollItem;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleUnitDealerEventDialog.CastleUnitDealerEventDialog.prototype, "merchantScrollItem").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateUnitDealerEventDialog.prototype.initLoaded = function (__s13param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s13param0);
    this.itxt_currency = this.textFieldManager.registerTextField(this.dialogDisp.mc_currency.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(CastlePrivateUnitDealerEventDialog.currencyAmount));
    var __s13local0 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SILVER_RUNE);
    this.dialogDisp.mc_currency.toolTipText = __s13local0.getTooltipTextId();
    this.dialogDisp.mc_currency.mouseChildren = false;
  };
  CastlePrivateUnitDealerEventDialog.prototype.onCurrencyChange = function (__s15param0) {
    this.itxt_currency.textContentVO.numberValue = CastlePrivateUnitDealerEventDialog.currencyAmount;
  };
  Object.defineProperty(CastlePrivateUnitDealerEventDialog, "currencyAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SILVER_RUNE);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateUnitDealerEventDialog.prototype.sortPackagesByHighlightOrder = function (__s19param0) {};
  CastlePrivateUnitDealerEventDialog.__initialize_static_members = function () {
    CastlePrivateUnitDealerEventDialog.NAME = "CastlePrivateUnitDealer";
    CastlePrivateUnitDealerEventDialog.ASSET_NAME_0 = "CastlePrivateUnitDealer";
  };
  return CastlePrivateUnitDealerEventDialog;
}(__dep_export_CastleUnitDealerEventDialog.CastleUnitDealerEventDialog);
exports.CastlePrivateUnitDealerEventDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastlePrivateUnitDealerEventScrollItem = require("gge-module:export_CastlePrivateUnitDealerEventScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
