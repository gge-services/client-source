Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleHardCurrencyHelper() {}
  CastleHardCurrencyHelper.initCurrencyTextIDs = function () {
    var __s5local0 = new Map();
    var __s5local1 = new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_euro", 1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_GERMANY, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_FRANCE, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_PORTUGAL, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_ITALY, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_GREECE, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_FINNLAND, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_NETHERLANDS, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_SLOVAKIA, __s5local1);
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_ENGLAND, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_britishPound", 1));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_USA, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_dollar", 1));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_CZECHIA, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_czechKoruna", 25));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_POLAND, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_zloty", 4));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_BRASIL, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_brazilianReal", 1));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_HUNGARY, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_hungarianForint", 300));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_ROMANIA, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_romanianLeu", 5));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_DENMARK, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_danishKrone", 7.5));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_TURKEY, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_turkishLira", 3));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_RUSSIA, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_ruble", 50));
    __s5local0.set(__dep_export_ClientConstLanguage.ClientConstLanguage.COUNTRY_JAPAN, new __dep_export_CastleCurrencyVO.CastleCurrencyVO("currency_japaneseYen", 150));
    __s5local0.set("default", new __dep_export_CastleCurrencyVO.CastleCurrencyVO(__dep_export_ClientConstTextIds.ClientConstTextIds.C2, CastleHardCurrencyHelper.RUBIES2EUROS_FACTOR));
    return __s5local0;
  };
  Object.defineProperty(CastleHardCurrencyHelper, "currencyFactor", {
    get: function () {
      var __s7local0 = __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsCountryCode.toLowerCase();
      return CastleHardCurrencyHelper.getCurrencyVOOrDefault(__s7local0).currencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHardCurrencyHelper, "currencyTextID", {
    get: function () {
      var __s9local0 = __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsCountryCode.toLowerCase();
      return CastleHardCurrencyHelper.getCurrencyVOOrDefault(__s9local0).textID;
    },
    enumerable: true,
    configurable: true
  });
  CastleHardCurrencyHelper.getCurrencyVOOrDefault = function (__s11param0) {
    var __s11local0 = CastleHardCurrencyHelper.CURRENCY_TEXT_IDS.get(__s11param0.toLowerCase());
    if (__s11local0 == null) {
      __s11local0 = CastleHardCurrencyHelper.CURRENCY_TEXT_IDS.get("default");
    }
    return __s11local0;
  };
  CastleHardCurrencyHelper.shownCurrencyValueForPO = function (__s14param0) {
    var __s14local0;
    var __s14local1 = __s14param0.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER);
    if (__s14local1) {
      __s14local0 = __s14local1.visuals.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_EURO_AMOUNT);
    }
    if (__s14local0) {
      var __s14local2 = __s14local0.euroAmount;
      if (__s14local2) {
        return __s14local2 * CastleHardCurrencyHelper.currencyFactor;
      }
    }
    return CastleHardCurrencyHelper.NO_CLUE_WHY_MAGIC_VALUE;
  };
  CastleHardCurrencyHelper.__initialize_static_members = function () {
    CastleHardCurrencyHelper.RUBIES2EUROS_FACTOR = 1500;
    CastleHardCurrencyHelper.CURRENCY_TEXT_IDS = CastleHardCurrencyHelper.initCurrencyTextIDs();
    CastleHardCurrencyHelper.NO_CLUE_WHY_MAGIC_VALUE = 13;
  };
  return CastleHardCurrencyHelper;
}();
exports.CastleHardCurrencyHelper = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstLanguage = require("gge-module:export_ClientConstLanguage");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleCurrencyVO = require("gge-module:export_CastleCurrencyVO");
__s0local0.__initialize_static_members();
