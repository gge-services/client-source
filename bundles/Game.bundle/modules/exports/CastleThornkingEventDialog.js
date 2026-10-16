Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode = require("gge-module:export_CastleSpecialCurrencyMerchantDialogTypeHardMode");
var __s0local0 = function (__s1param0) {
  function CastleThornkingEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleThornkingEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleThornkingEventDialog, __s1param0);
  Object.defineProperty(CastleThornkingEventDialog.prototype, "descriptionText", {
    get: function () {
      return "dialog_seasonEvent_2_camp_desc";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "descriptionText").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "detailedDescriptionText", {
    get: function () {
      return "dialog_seasonEvent_2_camp_desc_detail";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "detailedDescriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "userCurrency1", {
    get: function () {
      return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SKULL_RELIC);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency1").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "userCurrency2", {
    get: function () {
      return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_GREEN_SKULL_RELIC);
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency2").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleThornkingEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleThornkingMerchantScrollItem.CastleThornkingMerchantScrollItem;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "merchantScrollItem").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleThornkingEventDialog.__initialize_static_members = function () {
    CastleThornkingEventDialog.NAME = "CastleThornkingEvent";
  };
  return CastleThornkingEventDialog;
}(__dep_export_CastleSpecialCurrencyMerchantDialogTypeHardMode.CastleSpecialCurrencyMerchantDialogTypeHardMode);
exports.CastleThornkingEventDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleThornkingMerchantScrollItem = require("gge-module:export_CastleThornkingMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
