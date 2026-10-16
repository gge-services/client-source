Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleWishingWellCoinVendorEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleWishingWellCoinVendorEventBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWishingWellCoinVendorEventBuyDialog, __s1param0);
  CastleWishingWellCoinVendorEventBuyDialog.prototype.onChangeSliderAmount = function (__s5param0 = null) {
    __s1param0.prototype.onChangeSliderAmount.call(this, __s5param0);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.onChangePackageAmount = function (__s7param0 = null) {
    __s1param0.prototype.onChangePackageAmount.call(this, __s7param0);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.resetSlider = function (__s9param0 = null) {
    __s1param0.prototype.resetSlider.call(this, __s9param0);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.updateBuyButton();
  };
  CastleWishingWellCoinVendorEventBuyDialog.prototype.updateBuyButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_WISHING_WELL_COIN) >= this.totalPrice.amount);
    this.dialogDisp.btn_ok.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_ok) ? "" : "apprenticePennies_notEnough_tooltip";
  };
  CastleWishingWellCoinVendorEventBuyDialog.__initialize_static_members = function () {
    CastleWishingWellCoinVendorEventBuyDialog.NAME = "CastleWishingWellCoinVendorEventBuy";
  };
  return CastleWishingWellCoinVendorEventBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleWishingWellCoinVendorEventBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
