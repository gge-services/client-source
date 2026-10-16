Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode = require("gge-module:export_CastleSpecialCurrencyMerchantDialogTypeHardMode");
var __s0local0 = function (__s1param0) {
  function CastleUnderworldEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleUnderworldEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnderworldEventDialog, __s1param0);
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_seasonEvent_64_camp_desc";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "descriptionText").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_seasonEvent_64_camp_desc_detail";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "detailedDescriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "travelTooltipText", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.isSeasonEventActive) {
        return Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "travelTooltipText").get.call(this);
      } else {
        return "event_underworld_eventEnded_tooltip";
      }
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "travelTooltipText").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "userCurrency1", {
    get: function () {
      return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SILVER_RUNE);
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency1").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "userCurrency2", {
    get: function () {
      return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GOLD_RUNE);
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency2").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleUnderworldMerchantScrollItem.CastleUnderworldMerchantScrollItem;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "merchantScrollItem").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldEventDialog.__initialize_static_members = function () {
    CastleUnderworldEventDialog.NAME = "CastleUnderworldEvent";
  };
  return CastleUnderworldEventDialog;
}(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode);
exports.CastleUnderworldEventDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleUnderworldMerchantScrollItem = require("gge-module:export_CastleUnderworldMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
