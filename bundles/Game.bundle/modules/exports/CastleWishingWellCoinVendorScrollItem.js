Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AMerchantScrollItem = require("gge-module:export_AMerchantScrollItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleWishingWellCoinVendorScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWishingWellCoinVendorScrollItem, __s1param0);
  Object.defineProperty(CastleWishingWellCoinVendorScrollItem.prototype, "dialogKey", {
    get: function () {
      return __dep_export_CastleWishingWellCoinVendorEventBuyDialog.CastleWishingWellCoinVendorEventBuyDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "dialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWishingWellCoinVendorScrollItem.prototype, "costIconDimension", {
    get: function () {
      return new __s0local0(20, 20);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "costIconDimension").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleWishingWellCoinVendorScrollItem;
}(__dep_export_AMerchantScrollItem.AMerchantScrollItem);
exports.CastleWishingWellCoinVendorScrollItem = __s0local1;
var __dep_export_CastleWishingWellCoinVendorEventBuyDialog = require("gge-module:export_CastleWishingWellCoinVendorEventBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
