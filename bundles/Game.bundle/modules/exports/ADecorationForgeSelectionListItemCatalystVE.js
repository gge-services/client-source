Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ADecorationForgeSelectionListItemCatalystVE(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADecorationForgeSelectionListItemCatalystVE, __s1param0);
  ADecorationForgeSelectionListItemCatalystVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  ADecorationForgeSelectionListItemCatalystVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ADecorationForgeSelectionListItemCatalystVE.prototype.getCurrencyVO = function () {
    if (this.itemVO) {
      return this.itemVO.data;
    } else {
      return null;
    }
  };
  ADecorationForgeSelectionListItemCatalystVE.prototype.onCurrenciesUpdated = function (__s13param0) {
    var __s13local0 = this.getCurrencyVO();
    if (__s13local0) {
      __s13local0.amount = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s13local0.id);
    }
    this.update();
  };
  return ADecorationForgeSelectionListItemCatalystVE;
}(require("gge-module:export_ADecorationForgeSelectionListItemVE").ADecorationForgeSelectionListItemVE);
exports.ADecorationForgeSelectionListItemCatalystVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
