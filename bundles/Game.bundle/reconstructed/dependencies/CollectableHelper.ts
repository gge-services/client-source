import { BoosterConst } from "../../../ggs.dll/reconstructed/exports/BoosterConst";
import { CastleModel } from "./CastleModel";
import { ClientConstCurrency } from "./ClientConstCurrency";
import { ClientConstUtils } from "./ClientConstUtils";
import { CollectableEnum } from "./CollectableEnum";
import { CollectableList } from "./CollectableList";
import { CollectablesCosts } from "./CollectablesCosts";
import { CollectableTypeVO } from "./CollectableTypeVO";
import { EquipmentConst } from "../../../ggs.dll/reconstructed/exports/EquipmentConst";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class CollectableHelper {
  static getTypeByServerKey(argument0, argument1) {
    var __s5local0 = new CollectableTypeVO();
    __s5local0.type = argument0 && argument0 != "" ? CollectableEnum.getTypeByServerKey(argument0) : CollectableEnum.UNKNOWN;
    if (argument0 == "MS") {
      var __s5local1 = argument1[0];
      var __s5local2 = parseInt(__s5local1.charAt(__s5local1.length - 1));
      return new CollectableTypeVO(CollectableEnum.GENERIC_CURRENCY, CastleModel.currencyData.getCurrencyRangeByID(ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] + __s5local2);
    }
    if (__s5local0.type == CollectableEnum.BOOSTER && argument1.ID) {
      if (BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(argument1.ID) > -1) {
        __s5local0.type = CollectableEnum.BOOSTER;
      } else {
        switch (argument1.ID) {
          case BoosterConst.GLORY_BOOST_ID:
          case BoosterConst.PERSONAL_GLORY_BOOST_ID:
            __s5local0.type = CollectableEnum.GLORY_BOOSTER;
            break;
          case BoosterConst.KHAN_BOOST_ID:
            __s5local0.type = CollectableEnum.KHAN_TABLET_BOOSTER;
            break;
          case BoosterConst.XP_BOOSTER_ID:
            __s5local0.type = CollectableEnum.XP_BOOSTER;
            break;
          case BoosterConst.SAMURA_TOKEN_BOOST_ID:
            __s5local0.type = CollectableEnum.SAMURAI_BOOSTER;
            break;
          case BoosterConst.ALLIANCE_COIN_BOOST_ID:
            __s5local0.type = CollectableEnum.ALLIANCE_COIN_BOOSTER;
            break;
          case BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID:
            __s5local0.type = CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER;
            break;
          case BoosterConst.REPUTATION_POINT_BOOST_ID:
            __s5local0.type = CollectableEnum.REPUTATION_BOOSTER;
            break;
          case BoosterConst.GALLANTRY_POINTS_BOOST_ID:
            __s5local0.type = CollectableEnum.GALLANTRY_BOOSTER;
            break;
          case BoosterConst.RAGE_POINT_BOOST_ID:
            __s5local0.type = CollectableEnum.RAGE_POINT_BOOSTER;
            break;
          case BoosterConst.KHAN_MEDAL_BOOST_ID:
            __s5local0.type = CollectableEnum.KHAN_MEDAL_POINT_BOOSTER;
        }
      }
    }
    if (__s5local0.type == CollectableEnum.EQUIPMENT_RARENESS && argument1) {
      switch (argument1) {
        case EquipmentConst.RARENESS_HERO_COMMON:
        case EquipmentConst.RARENESS_HERO_RARE:
        case EquipmentConst.RARENESS_HERO_EPIC:
        case EquipmentConst.RARENESS_HERO_LEGENDARY:
          __s5local0.type = CollectableEnum.HERO_RANDOM;
      }
    }
    if (__s5local0.type == CollectableEnum.UNKNOWN) {
      var __s5local3 = CastleModel.currencyData.getXmlCurrencyByKey(argument0);
      if (__s5local3) {
        __s5local0.type = CollectableEnum.GENERIC_CURRENCY;
        __s5local0.id = __s5local3.id;
      }
    }
    return __s5local0;
  }
  static createVO(argument0, argument1 = int(-Number.MAX_VALUE), argument2 = int(-Number.MAX_VALUE), argument3 = false) {
    if (!argument0 || argument0 == CollectableEnum.UNKNOWN || !argument0.dataClass) {
      return null;
    }
    var __s16local0 = new argument0.dataClass();
    if (argument1 != -Number.MAX_VALUE) {
      __s16local0.amount = argument1;
    }
    if (argument2 != -Number.MAX_VALUE && "id" in __s16local0) {
      __s16local0.id = argument2;
    }
    __s16local0.isSubscriptionBuffed = argument3;
    return __s16local0;
  }
  static createVE(argument0, argument1) {
    if (!argument0 || argument0.itemType == CollectableEnum.UNKNOWN || !argument0.itemType.viewClass) {
      return null;
    }
    var __s21local0 = new argument0.itemType.viewClass();
    __s21local0.init(argument0, argument1);
    return __s21local0;
  }
  static haveSameIdAndType(argument0, argument1) {
    return argument0.itemType == argument1.itemType && CollectableHelper.haveSameId(argument0, argument1);
  }
  static haveSameId(argument0, argument1) {
    var __s26local0 = "id" in argument0;
    var __s26local1 = "id" in argument1;
    return !__s26local0 && !__s26local1 || !!__s26local1 && !!__s26local0 && argument0.id == argument1.id;
  }
  static hasTypeAndId(argument0, argument1, argument2) {
    return !!argument0 && argument0.itemType == argument1 && "id" in argument0 && argument0.id == argument2;
  }
  static getGoodsKeySuffix(argument0) {
    var __s30local0;
    switch (argument0) {
      case CollectableEnum.C1:
      case CollectableEnum.C2:
        __s30local0 = argument0.serverKey;
        break;
      default:
        __s30local0 = argument0.xmlKey;
    }
    return ClientConstUtils.capitalizeFirstLetter(__s30local0);
  }
  static getMinuteSkipIndexByCurrencyId(argument0) {
    return int(argument0 - CastleModel.currencyData.getCurrencyRangeByID(ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0]);
  }
  static getServerKeyByCollectable(argument0) {
    if (argument0) {
      if (argument0.itemType == CollectableEnum.GENERIC_CURRENCY) {
        return argument0.xmlCurrencyVO.jsonKey;
      } else {
        return argument0.itemType.serverKey;
      }
    } else {
      return CollectableEnum.UNKNOWN.serverKey;
    }
  }
  static createCostList(argument0) {
    var __s41local0 = new CollectableList();
    if (argument0 != null) {
      for (var __s41local1 = 0, __s41local2 = argument0; __s41local1 < __s41local2.length; __s41local1++) {
        var __s41local3 = __s41local2[__s41local1];
        if (__s41local3 !== undefined) {
          __s41local0.addItem(__s41local3);
        }
      }
    }
    return new CollectablesCosts(__s41local0);
  }
}
