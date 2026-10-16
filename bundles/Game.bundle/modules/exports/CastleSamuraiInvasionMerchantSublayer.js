Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleAbstractInvasionMerchantSublayer = require("gge-module:export_CastleAbstractInvasionMerchantSublayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSamuraiInvasionMerchantSublayer(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSamuraiInvasionMerchantSublayer, __s1param0);
  CastleSamuraiInvasionMerchantSublayer.prototype.getDescriptionText = function () {
    return "dialog_samuraiShop_desc_detail";
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getHelpText = function () {
    return "help_samuraiShop";
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getCurrencies = function () {
    return [new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN)];
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getMerchantScrollItem = function () {
    return __dep_export_CastleSamuraiInvasionMerchantScrollItem.CastleSamuraiInvasionMerchantScrollItem;
  };
  CastleSamuraiInvasionMerchantSublayer.prototype.getCurrencyIconSize = function () {
    return new __s0local0(50, 50);
  };
  return CastleSamuraiInvasionMerchantSublayer;
}(__dep_export_CastleAbstractInvasionMerchantSublayer.CastleAbstractInvasionMerchantSublayer);
exports.CastleSamuraiInvasionMerchantSublayer = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleSamuraiInvasionMerchantScrollItem = require("gge-module:export_CastleSamuraiInvasionMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
