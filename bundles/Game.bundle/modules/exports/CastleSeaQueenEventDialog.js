Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleSpecialCurrencyMerchantDialog = require("gge-module:export_CastleSpecialCurrencyMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleSeaQueenEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSeaQueenEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeaQueenEventDialog, __s1param0);
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_seasonEvent_4_camp_desc";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "descriptionText").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_seasonEvent_4_camp_desc_detail";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "detailedDescriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleSeaQueenMerchantScrollItem.CastleSeaQueenMerchantScrollItem;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "isEvent", {
    get: function () {
      return true;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog.prototype, "isEvent").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeaQueenEventDialog.prototype, "userSpecialCurrencies", {
    get: function () {
      var __s21local0 = [];
      __s21local0.push(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEARL_RELIC));
      return __s21local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeaQueenEventDialog.__initialize_static_members = function () {
    CastleSeaQueenEventDialog.NAME = "CastleSeaqueenEvent";
  };
  return CastleSeaQueenEventDialog;
}(__dep_export_CastleSpecialCurrencyMerchantDialog.CastleSpecialCurrencyMerchantDialog);
exports.CastleSeaQueenEventDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleSeaQueenMerchantScrollItem = require("gge-module:export_CastleSeaQueenMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
