Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __s0local0 = function () {
  function CollectableHelper() {}
  CollectableHelper.getTypeByServerKey = function (__s5param0, __s5param1) {
    var __s5local0 = new __dep_export_CollectableTypeVO.CollectableTypeVO();
    __s5local0.type = __s5param0 && __s5param0 != "" ? __dep_export_CollectableEnum.CollectableEnum.getTypeByServerKey(__s5param0) : __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    if (__s5param0 == "MS") {
      var __s5local1 = __s5param1[0];
      var __s5local2 = parseInt(__s5local1.charAt(__s5local1.length - 1));
      return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] + __s5local2);
    }
    if (__s5local0.type == __dep_export_CollectableEnum.CollectableEnum.BOOSTER && __s5param1.ID) {
      if (__dep_exact_26a421b704832cff.BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(__s5param1.ID) > -1) {
        __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.BOOSTER;
      } else {
        switch (__s5param1.ID) {
          case __dep_exact_26a421b704832cff.BoosterConst.GLORY_BOOST_ID:
          case __dep_exact_26a421b704832cff.BoosterConst.PERSONAL_GLORY_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.GLORY_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.KHAN_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.KHAN_TABLET_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.XP_BOOSTER_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.XP_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.SAMURA_TOKEN_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.SAMURAI_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.ALLIANCE_COIN_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.ALLIANCE_COIN_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.REPUTATION_POINT_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.REPUTATION_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.GALLANTRY_POINTS_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.GALLANTRY_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.RAGE_POINT_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.RAGE_POINT_BOOSTER;
            break;
          case __dep_exact_26a421b704832cff.BoosterConst.KHAN_MEDAL_BOOST_ID:
            __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.KHAN_MEDAL_POINT_BOOSTER;
        }
      }
    }
    if (__s5local0.type == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS && __s5param1) {
      switch (__s5param1) {
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC:
        case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY:
          __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM;
      }
    }
    if (__s5local0.type == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
      var __s5local3 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyByKey(__s5param0);
      if (__s5local3) {
        __s5local0.type = __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY;
        __s5local0.id = __s5local3.id;
      }
    }
    return __s5local0;
  };
  CollectableHelper.createVO = function (__s16param0, __s16param1 = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE), __s16param2 = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE), __s16param3 = false) {
    if (!__s16param0 || __s16param0 == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN || !__s16param0.dataClass) {
      return null;
    }
    var __s16local0 = new __s16param0.dataClass();
    if (__s16param1 != -Number.MAX_VALUE) {
      __s16local0.amount = __s16param1;
    }
    if (__s16param2 != -Number.MAX_VALUE && "id" in __s16local0) {
      __s16local0.id = __s16param2;
    }
    __s16local0.isSubscriptionBuffed = __s16param3;
    return __s16local0;
  };
  CollectableHelper.createVE = function (__s21param0, __s21param1) {
    if (!__s21param0 || __s21param0.itemType == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN || !__s21param0.itemType.viewClass) {
      return null;
    }
    var __s21local0 = new __s21param0.itemType.viewClass();
    __s21local0.init(__s21param0, __s21param1);
    return __s21local0;
  };
  CollectableHelper.haveSameIdAndType = function (__s24param0, __s24param1) {
    return __s24param0.itemType == __s24param1.itemType && CollectableHelper.haveSameId(__s24param0, __s24param1);
  };
  CollectableHelper.haveSameId = function (__s26param0, __s26param1) {
    var __s26local0 = "id" in __s26param0;
    var __s26local1 = "id" in __s26param1;
    return !__s26local0 && !__s26local1 || !!__s26local1 && !!__s26local0 && __s26param0.id == __s26param1.id;
  };
  CollectableHelper.hasTypeAndId = function (__s28param0, __s28param1, __s28param2) {
    return !!__s28param0 && __s28param0.itemType == __s28param1 && "id" in __s28param0 && __s28param0.id == __s28param2;
  };
  CollectableHelper.getGoodsKeySuffix = function (__s30param0) {
    var __s30local0;
    switch (__s30param0) {
      case __dep_export_CollectableEnum.CollectableEnum.C1:
      case __dep_export_CollectableEnum.CollectableEnum.C2:
        __s30local0 = __s30param0.serverKey;
        break;
      default:
        __s30local0 = __s30param0.xmlKey;
    }
    return __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s30local0);
  };
  CollectableHelper.getMinuteSkipIndexByCurrencyId = function (__s33param0) {
    return __dep_exact_f855840627e6e145.int(__s33param0 - __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0]);
  };
  CollectableHelper.getServerKeyByCollectable = function (__s35param0) {
    if (__s35param0) {
      if (__s35param0.itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY) {
        return __s35param0.xmlCurrencyVO.jsonKey;
      } else {
        return __s35param0.itemType.serverKey;
      }
    } else {
      return __dep_export_CollectableEnum.CollectableEnum.UNKNOWN.serverKey;
    }
  };
  CollectableHelper.createCostList = function (__s41param0) {
    var __s41local0 = new __dep_export_CollectableList.CollectableList();
    if (__s41param0 != null) {
      for (var __s41local1 = 0, __s41local2 = __s41param0; __s41local1 < __s41local2.length; __s41local1++) {
        var __s41local3 = __s41local2[__s41local1];
        if (__s41local3 !== undefined) {
          __s41local0.addItem(__s41local3);
        }
      }
    }
    return new __dep_export_CollectablesCosts.CollectablesCosts(__s41local0);
  };
  return CollectableHelper;
}();
exports.CollectableHelper = __s0local0;
