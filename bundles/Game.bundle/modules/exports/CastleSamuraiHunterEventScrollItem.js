Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AMerchantScrollItem = require("gge-module:export_AMerchantScrollItem");
var __s0local0 = function (__s1param0) {
  function CastleSamuraiHunterEventScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSamuraiHunterEventScrollItem, __s1param0);
  Object.defineProperty(CastleSamuraiHunterEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return __dep_export_CastleSamuraiHunterEventBuyDialog.CastleSamuraiHunterEventBuyDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "dialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSamuraiHunterEventScrollItem;
}(__dep_export_AMerchantScrollItem.AMerchantScrollItem);
exports.CastleSamuraiHunterEventScrollItem = __s0local0;
var __dep_export_CastleSamuraiHunterEventBuyDialog = require("gge-module:export_CastleSamuraiHunterEventBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
