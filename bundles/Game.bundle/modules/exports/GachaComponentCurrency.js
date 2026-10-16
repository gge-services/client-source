Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaComponentCurrency(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentCurrency, __s1param0);
  GachaComponentCurrency.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.updateCurrency();
  };
  GachaComponentCurrency.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentCurrency.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentCurrency.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentCurrency.prototype.onCurrencyUpdate = function (__s13param0) {
    this.updateCurrency();
  };
  GachaComponentCurrency.prototype.updateCurrency = function () {
    var __s15local0 = this.getEventVO().getCurrentGachaVO().costs.list[0];
    if (__s15local0 instanceof __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO) {
      var __s15local1 = __s15local0.id;
      var __s15local2 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__s15local1, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s15local1));
      var __s15local3 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp);
      var __s15local4 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(20, 20));
      __s15local4.tooltip.useAmount = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s15local3, __s15local2, __s15local4);
    }
  };
  GachaComponentCurrency.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentCurrency;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentCurrency = __s0local1;
