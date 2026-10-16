Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FactionArmorerMerchantScrollItem = require("gge-module:export_FactionArmorerMerchantScrollItem");
var __s0local0 = function (__s1param0) {
  function FactionHunterMerchantScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionHunterMerchantScrollItem, __s1param0);
  Object.defineProperty(FactionHunterMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return __dep_export_CastleFactionHunterEventBuyDialog.CastleFactionHunterEventBuyDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FactionArmorerMerchantScrollItem.FactionArmorerMerchantScrollItem.prototype, "dialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionHunterMerchantScrollItem;
}(__dep_export_FactionArmorerMerchantScrollItem.FactionArmorerMerchantScrollItem);
exports.FactionHunterMerchantScrollItem = __s0local0;
var __dep_export_CastleFactionHunterEventBuyDialog = require("gge-module:export_CastleFactionHunterEventBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
