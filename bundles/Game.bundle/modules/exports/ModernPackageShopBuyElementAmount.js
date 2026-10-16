Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementAmount() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementAmount, __s1param0);
  ModernPackageShopBuyElementAmount.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp).addMouseWheelElements([this.disp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
  };
  ModernPackageShopBuyElementAmount.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  ModernPackageShopBuyElementAmount.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  ModernPackageShopBuyElementAmount.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ModernPackageShopBuyElementAmount.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ModernPackageShopBuyElementAmount.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    var __s15local0 = __dep_exact_f855840627e6e145.int(Math.max(this.getMaxBuyablePackages(), 1));
    this._scrollComponent.init(1, __s15local0);
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.enableComponent(__s15local0 > 1);
  };
  ModernPackageShopBuyElementAmount.prototype.updateSliderFill = function () {
    this.disp.mc_sliderLineFill.width = this.disp.btn_slider.x - this.disp.mc_sliderLine.x;
  };
  ModernPackageShopBuyElementAmount.prototype.updateTextfield = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getShownAmount())).autoFitToBounds = true;
  };
  ModernPackageShopBuyElementAmount.prototype.getMaxBuyablePackages = function () {
    var __s21local0 = this.parentDialog.getElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COSTS);
    return __dep_exact_f855840627e6e145.int(__s21local0 ? Math.max(__s21local0.getMaxBuyablePackages()) : 1);
  };
  ModernPackageShopBuyElementAmount.prototype.getSelectedPackageAmount = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(this._scrollComponent.currentValue, 1));
  };
  ModernPackageShopBuyElementAmount.prototype.getShownAmount = function () {
    if (this.parentDialog.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUNDLE) {
      return this.getSelectedPackageAmount();
    } else {
      return this.getSelectedPackageAmount() * this.parentDialog.dialogProperties.eventPackageVO.firstReward.amount;
    }
  };
  ModernPackageShopBuyElementAmount.prototype.onScroll = function () {
    this.updateTextfield();
    this.updateSliderFill();
    this.parentDialog.onSelectedAmountChanged();
  };
  return ModernPackageShopBuyElementAmount;
}(require("gge-module:export_AModernPackageShopBuyElement").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementAmount = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernPackageShopBuyElementEnum = require("gge-module:export_ModernPackageShopBuyElementEnum");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
