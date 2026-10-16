Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AMerchantBuyDialog = require("gge-module:export_AMerchantBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentMerchantEventBuyDialog() {
    return __s1param0.call(this, CastleEquipmentMerchantEventBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentMerchantEventBuyDialog, __s1param0);
  Object.defineProperty(CastleEquipmentMerchantEventBuyDialog.prototype, "dialogTitle", {
    get: function () {
      return "dialog_equipmentMerchantEventBuy_title";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantBuyDialog.AMerchantBuyDialog.prototype, "dialogTitle").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventBuyDialog.__initialize_static_members = function () {
    CastleEquipmentMerchantEventBuyDialog.NAME = "CastleEquipmentMerchantEventBuy";
  };
  return CastleEquipmentMerchantEventBuyDialog;
}(__dep_export_AMerchantBuyDialog.AMerchantBuyDialog);
exports.CastleEquipmentMerchantEventBuyDialog = __s0local0;
__s0local0.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
