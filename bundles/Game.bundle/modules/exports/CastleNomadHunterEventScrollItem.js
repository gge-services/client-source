Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AMerchantScrollItem = require("gge-module:export_AMerchantScrollItem");
var __s0local0 = function (__s1param0) {
  function CastleNomadHunterEventScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadHunterEventScrollItem, __s1param0);
  Object.defineProperty(CastleNomadHunterEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return __dep_export_CastleNomadHunterEventBuyDialog.CastleNomadHunterEventBuyDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "dialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleNomadHunterEventScrollItem;
}(__dep_export_AMerchantScrollItem.AMerchantScrollItem);
exports.CastleNomadHunterEventScrollItem = __s0local0;
var __dep_export_CastleNomadHunterEventBuyDialog = require("gge-module:export_CastleNomadHunterEventBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
