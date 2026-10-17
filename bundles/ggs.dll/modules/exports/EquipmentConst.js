// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: EquipmentConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local28 = function () {
  function EquipmentConst() {}
  EquipmentConst.SLOT_IDS_$LI$ = function () {
    if (EquipmentConst.SLOT_IDS == null) {
      EquipmentConst.SLOT_IDS = [EquipmentConst.SLOT_ARMOR, EquipmentConst.SLOT_WEAPON, EquipmentConst.SLOT_HELMET, EquipmentConst.SLOT_ARTIFACT, EquipmentConst.SLOT_SKIN, EquipmentConst.SLOT_HERO];
    }
    return EquipmentConst.SLOT_IDS;
  };
  EquipmentConst.SLOT_IDS_FOR_GEMS_$LI$ = function () {
    if (EquipmentConst.SLOT_IDS_FOR_GEMS == null) {
      EquipmentConst.SLOT_IDS_FOR_GEMS = [EquipmentConst.SLOT_ARMOR, EquipmentConst.SLOT_WEAPON, EquipmentConst.SLOT_HELMET, EquipmentConst.SLOT_ARTIFACT, EquipmentConst.SLOT_SKIN];
    }
    return EquipmentConst.SLOT_IDS_FOR_GEMS;
  };
  EquipmentConst.PER_TEN_THOUSAND_$LI$ = function () {
    if (EquipmentConst.PER_TEN_THOUSAND == null) {
      EquipmentConst.PER_TEN_THOUSAND = 0.0001;
    }
    return EquipmentConst.PER_TEN_THOUSAND;
  };
  EquipmentConst.getMaxEnchantmentLevel = function (__s795param0) {
    switch (__s795param0) {
      case EquipmentConst.RARENESS_COMMON:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_COMMON;
      case EquipmentConst.RARENESS_RARE:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_RARE;
      case EquipmentConst.RARENESS_EPIC:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_EPIC;
      case EquipmentConst.RARENESS_LEGENDARY:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_LEGENDARY;
      case EquipmentConst.RARENESS_UNIQUE:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_UNIQUE;
      case EquipmentConst.RARENESS_RELIC:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_RELIC;
    }
    return 0;
  };
  EquipmentConst.isValidForEnchanting = function (__s798param0, __s798param1) {
    return __s798param1 < EquipmentConst.getMaxEnchantmentLevel(__s798param0);
  };
  EquipmentConst.getC2PriceForEnchanting = function (__s800param0) {
    return (Math.round(Math.pow(__s800param0, 2.1) * 5.5) | 0) * 10;
  };
  EquipmentConst.getC1PriceForEnchanting = function (__s802param0) {
    return (Math.round(Math.pow(__s802param0, 1.7) * 17) | 0) * 10;
  };
  EquipmentConst.getPriceForCrafting = function (__s804param0, __s804param1, __s804param2) {
    var __s804local0 = 0;
    if (__s804param0 === EquipmentConst.NORMAL_CRAFT_COUNT) {
      switch (__s804param1) {
        case EquipmentConst.RARENESS_COMMON:
          __s804local0 = EquipmentConst.PRICE_COMMON;
          break;
        case EquipmentConst.RARENESS_RARE:
          __s804local0 = EquipmentConst.PRICE_RARE;
          break;
        case EquipmentConst.RARENESS_EPIC:
          __s804local0 = EquipmentConst.PRICE_EPIC;
          break;
        case EquipmentConst.RARENESS_LEGENDARY:
          __s804local0 = EquipmentConst.PRICE_LEGENDARY;
      }
    } else {
      switch (__s804param1) {
        case EquipmentConst.RARENESS_COMMON:
          __s804local0 = EquipmentConst.PRICE_TORARE;
          break;
        case EquipmentConst.RARENESS_RARE:
          __s804local0 = EquipmentConst.PRICE_TOEPIC;
          break;
        case EquipmentConst.RARENESS_EPIC:
          __s804local0 = EquipmentConst.PRICE_TOLEGENDARY;
      }
    }
    return Math.floor(__s804local0 * __s804param2) | 0;
  };
  EquipmentConst.getEnchantingChance = function (__s810param0) {
    return Math.min(100, Math.round(Math.exp(__s810param0 * -0.2) * 1.28 * 100));
  };
  EquipmentConst.getEquipmentBonus = function (__s812param0, __s812param1, __s812param2) {
    var __s812local0 = __s812param0 * __s812param1 * __s812param2 * EquipmentConst.PER_TEN_THOUSAND_$LI$();
    if (__s812local0 > 1 || __s812local0 < -1) {
      return __s812local0 | 0;
    } else if (__s812local0 > 0) {
      return 1;
    } else if (__s812local0 < 0) {
      return -1;
    } else {
      return 0;
    }
  };
  EquipmentConst.getEquipmentBonusWithEnchantment = function (__s818param0, __s818param1, __s818param2, __s818param3, __s818param4) {
    return EquipmentConst.getEquipmentBonus(__s818param0, __s818param1, __s818param2) + __s818param3 * __s818param4;
  };
  EquipmentConst.getBaronCapitalPick = function (__s820param0) {
    switch (__s820param0) {
      case __s0local100.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_CLASSIC;
      case __s0local107.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_ICE;
      case __s0local106.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_DESERT;
      case __s0local110.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_VULCAN;
    }
    return -1;
  };
  EquipmentConst.isHero = function (__s823param0) {
    switch (__s823param0) {
      case EquipmentConst.RARENESS_HERO_UNIQUE:
      case EquipmentConst.RARENESS_HERO_COMMON:
      case EquipmentConst.RARENESS_HERO_RARE:
      case EquipmentConst.RARENESS_HERO_EPIC:
      case EquipmentConst.RARENESS_HERO_LEGENDARY:
      case EquipmentConst.RARENESS_HERO_RELIC:
        return true;
      default:
        return false;
    }
  };
  EquipmentConst.isOutpostBaron = function (__s826param0) {
    return __s826param0 === EquipmentConst.PICK_BARON_A1 || __s826param0 === EquipmentConst.PICK_BARON_A2 || __s826param0 === EquipmentConst.PICK_BARON_A3;
  };
  return EquipmentConst;
}();
__s0local28.NORMAL_CRAFT_COUNT = 3;
__s0local28.SUPER_CRAFT_COUNT = 6;
__s0local28.EQUIPMENT_SIZE_NORMAL = 400;
__s0local28.EQUIPMENT_SIZE_MAX = 420;
__s0local28.UNDEFINED_WEARER_ID = -1;
__s0local28.BARON_WEARER_ID = 1;
__s0local28.COMMANDER_WEARER_ID = 2;
__s0local28.SLOT_ARMOR = 1;
__s0local28.SLOT_WEAPON = 2;
__s0local28.SLOT_HELMET = 3;
__s0local28.SLOT_ARTIFACT = 4;
__s0local28.SLOT_SKIN = 5;
__s0local28.SLOT_HERO = 6;
__s0local28.RARENESS_UNIQUE = 0;
__s0local28.RARENESS_COMMON = 1;
__s0local28.RARENESS_RARE = 2;
__s0local28.RARENESS_EPIC = 3;
__s0local28.RARENESS_LEGENDARY = 4;
__s0local28.RARENESS_RELIC = 5;
__s0local28.RARENESS_HERO_UNIQUE = 10;
__s0local28.RARENESS_HERO_COMMON = 11;
__s0local28.RARENESS_HERO_RARE = 12;
__s0local28.RARENESS_HERO_EPIC = 13;
__s0local28.RARENESS_HERO_LEGENDARY = 14;
__s0local28.RARENESS_HERO_RELIC = 15;
__s0local28.RARENESS_HERO_BEGINN = 10;
__s0local28.PRICE_COMMON = 10;
__s0local28.PRICE_TORARE = 25;
__s0local28.PRICE_RARE = 500;
__s0local28.PRICE_TOEPIC = 2500;
__s0local28.PRICE_EPIC = 4000;
__s0local28.PRICE_TOLEGENDARY = 20000;
__s0local28.PRICE_LEGENDARY = 25000;
__s0local28.PICK_BARON_CLASSIC = 0;
__s0local28.PICK_BARON_ICE = 1;
__s0local28.PICK_BARON_DESERT = 2;
__s0local28.PICK_BARON_VULCAN = 3;
__s0local28.PICK_BARON_CAPITAL_CLASSIC = 4;
__s0local28.PICK_BARON_FACTION = 5;
__s0local28.PICK_BARON_A1 = 6;
__s0local28.PICK_BARON_A2 = 7;
__s0local28.PICK_BARON_A3 = 8;
__s0local28.PICK_BARON_METROPOL = 9;
__s0local28.PICK_BARON_CAPITAL_ICE = 10;
__s0local28.PICK_BARON_CAPITAL_DESERT = 11;
__s0local28.PICK_BARON_CAPITAL_VULCAN = 12;
__s0local28.PICK_BARON_ISLAND = 13;
__s0local28.BARON_BOSS_DUNGEON = -51;
__s0local28.WOLFKING_BARON = -214;
__s0local28.BARON_FACTION_RED = -101;
__s0local28.BARON_FACTION_BLUE = -102;
__s0local28.NO_ENCHANTMENT = 0;
__s0local28.MAX_ENCHANTMENTLEVEL_COMMON = 3;
__s0local28.MAX_ENCHANTMENTLEVEL_RARE = 8;
__s0local28.MAX_ENCHANTMENTLEVEL_EPIC = 12;
__s0local28.MAX_ENCHANTMENTLEVEL_LEGENDARY = 16;
__s0local28.MAX_ENCHANTMENTLEVEL_UNIQUE = 20;
__s0local28.MAX_ENCHANTMENTLEVEL_RELIC = 50;
__s0local28.LORD_NAME_MIN_LENGTH = 3;
__s0local28.LORD_NAME_MAX_LENGTH = 15;
__s0local28.EQUIPMENT_TYPE_ID_GENERATED = 0;
__s0local28.EQUIPMENT_TYPE_ID_UNIQUE = 1;
__s0local28.EQUIPMENT_TYPE_ID_UNIQUE_TEMPORARY = 2;
__s0local28.EQUIPMENT_TYPE_ID_RELIC = 3;
exports.EquipmentConst = __s0local28;
__s0local28.__class = "EquipmentConst";
__s0local28.PER_TEN_THOUSAND_$LI$();
__s0local28.SLOT_IDS_FOR_GEMS_$LI$();
__s0local28.SLOT_IDS_$LI$();
