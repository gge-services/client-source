Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function CollectableEnum(__s3param0, __s3param1 = null, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._dataClass = __s3param1;
    __s3local0._viewClass = __s3param2;
    __s3local0.addObjectToDic(CollectableEnum._listByName, __s3param0, __s3local0);
    if (__s3param1) {
      CollectableEnum._listByDataClass.set(__s3param1, __s3local0);
      if (__s3param1.SERVER_KEY) {
        __s3local0.addObjectToDic(CollectableEnum._listByServerKey, __s3param1.SERVER_KEY, __s3local0);
      }
      if (__s3param1.XML_KEY) {
        __s3local0.addObjectToDic(CollectableEnum._listByXmlKey, __s3param1.XML_KEY, __s3local0);
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableEnum, __s1param0);
  CollectableEnum.getTypeByName = function (__s8param0) {
    var __s8local0 = CollectableEnum._listByName.get(__s8param0);
    return __s8local0 || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.getTypeByServerKey = function (__s10param0) {
    var __s10local0 = CollectableEnum._listByServerKey.get(__s10param0);
    return __s10local0 || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.getTypeByXmlKey = function (__s12param0) {
    var __s12local0 = CollectableEnum._listByXmlKey.get(__s12param0);
    return __s12local0 || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.getTypeByDataClass = function (__s14param0) {
    var __s14local0 = CollectableEnum._listByDataClass.get(__s14param0);
    return __s14local0 || CollectableEnum.UNKNOWN;
  };
  CollectableEnum.prototype.addObjectToDic = function (__s16param0, __s16param1, __s16param2) {
    if (Array.isArray(__s16param1)) {
      var __s16local0 = __s16param1;
      if (!__s16local0) {
        return;
      }
      for (var __s16local1 = 0; __s16local1 < __s16local0.length; ++__s16local1) {
        this.addObjectToDic(__s16param0, __s16local0[__s16local1], __s16param2);
      }
    } else if (typeof __s16param1 == "string") {
      __s16param0.set(__s16param1, __s16param2);
      __s16param0.set(__s16param1.toLocaleLowerCase(), __s16param2);
      __s16param0.set(__dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s16param1), __s16param2);
    }
  };
  Object.defineProperty(CollectableEnum.prototype, "serverKey", {
    get: function () {
      if (this.dataClass) {
        return this.dataClass.SERVER_KEY;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableEnum.prototype, "xmlKey", {
    get: function () {
      if (this.dataClass) {
        return this.dataClass.XML_KEY;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableEnum.prototype, "dataClass", {
    get: function () {
      return this._dataClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableEnum.prototype, "viewClass", {
    get: function () {
      return this._viewClass;
    },
    enumerable: true,
    configurable: true
  });
  CollectableEnum.__initialize_static_members = function () {
    CollectableEnum._listByName = new Map();
    CollectableEnum._listByServerKey = new Map();
    CollectableEnum._listByXmlKey = new Map();
    CollectableEnum._listByDataClass = new Map();
    CollectableEnum.UNKNOWN = new CollectableEnum("unknown");
    var __s35local0 = require("gge-module:export_CollectableItemRelicVO").CollectableItemRelicVO;
    var __s35local1 = require("gge-module:export_CollectableItemRelicVE").CollectableItemRelicVE;
    CollectableEnum.RELIC_EQUIPMENT = new CollectableEnum("relicEquipment", __s35local0, __s35local1);
    var __s35local2 = require("gge-module:export_CollectableItemWoodVO").CollectableItemWoodVO;
    var __s35local3 = require("gge-module:export_CollectableItemWoodVE").CollectableItemWoodVE;
    CollectableEnum.WOOD = new CollectableEnum("wood", __s35local2, __s35local3);
    var __s35local4 = require("gge-module:export_CollectableItemStoneVO").CollectableItemStoneVO;
    var __s35local5 = require("gge-module:export_CollectableItemStoneVE").CollectableItemStoneVE;
    CollectableEnum.STONE = new CollectableEnum("stone", __s35local4, __s35local5);
    var __s35local6 = require("gge-module:export_CollectableItemFoodVO").CollectableItemFoodVO;
    var __s35local7 = require("gge-module:export_CollectableItemFoodVE").CollectableItemFoodVE;
    CollectableEnum.FOOD = new CollectableEnum("food", __s35local6, __s35local7);
    var __s35local8 = require("gge-module:export_CollectableItemCoalVO").CollectableItemCoalVO;
    var __s35local9 = require("gge-module:export_CollectableItemCoalVE").CollectableItemCoalVE;
    CollectableEnum.COAL = new CollectableEnum("coal", __s35local8, __s35local9);
    var __s35local10 = require("gge-module:export_CollectableItemOilVO").CollectableItemOilVO;
    var __s35local11 = require("gge-module:export_CollectableItemOilVE").CollectableItemOilVE;
    CollectableEnum.OIL = new CollectableEnum("oil", __s35local10, __s35local11);
    var __s35local12 = require("gge-module:export_CollectableItemGlassVO").CollectableItemGlassVO;
    var __s35local13 = require("gge-module:export_CollectableItemGlassVE").CollectableItemGlassVE;
    CollectableEnum.GLASS = new CollectableEnum("glass", __s35local12, __s35local13);
    var __s35local14 = require("gge-module:export_CollectableItemIronVO").CollectableItemIronVO;
    var __s35local15 = require("gge-module:export_CollectableItemIronVE").CollectableItemIronVE;
    CollectableEnum.IRON = new CollectableEnum("iron", __s35local14, __s35local15);
    var __s35local16 = require("gge-module:export_CollectableItemAquamarineVO").CollectableItemAquamarineVO;
    var __s35local17 = require("gge-module:export_CollectableItemAquamarineVE").CollectableItemAquamarineVE;
    CollectableEnum.AQUAMARINE = new CollectableEnum("aquamarin", __s35local16, __s35local17);
    var __s35local18 = require("gge-module:export_CollectableItemMeadVO").CollectableItemMeadVO;
    var __s35local19 = require("gge-module:export_CollectableItemMeadVE").CollectableItemMeadVE;
    CollectableEnum.MEAD = new CollectableEnum("mead", __s35local18, __s35local19);
    var __s35local20 = require("gge-module:export_CollectableItemBeefVO").CollectableItemBeefVO;
    var __s35local21 = require("gge-module:export_CollectableItemBeefVE").CollectableItemBeefVE;
    CollectableEnum.BEEF = new CollectableEnum("beef", __s35local20, __s35local21);
    var __s35local22 = require("gge-module:export_CollectableItemHoneyVO").CollectableItemHoneyVO;
    var __s35local23 = require("gge-module:export_CollectableItemHoneyVE").CollectableItemHoneyVE;
    CollectableEnum.HONEY = new CollectableEnum("honey", __s35local22, __s35local23);
    var __s35local24 = require("gge-module:export_CollectableItemC1VO").CollectableItemC1VO;
    var __s35local25 = require("gge-module:export_CollectableItemC1VE").CollectableItemC1VE;
    CollectableEnum.C1 = new CollectableEnum("cash", __s35local24, __s35local25);
    var __s35local26 = require("gge-module:export_CollectableItemC2VO").CollectableItemC2VO;
    var __s35local27 = require("gge-module:export_CollectableItemC2VE").CollectableItemC2VE;
    CollectableEnum.C2 = new CollectableEnum("gold", __s35local26, __s35local27);
    var __s35local28 = require("gge-module:export_CollectableItemGenericCurrencyVO").CollectableItemGenericCurrencyVO;
    var __s35local29 = require("gge-module:export_CollectableItemGenericCurrencyVE").CollectableItemGenericCurrencyVE;
    CollectableEnum.GENERIC_CURRENCY = new CollectableEnum("genericCurrency", __s35local28, __s35local29);
    var __s35local30 = require("gge-module:export_CollectableItemEffectVO").CollectableItemEffectVO;
    var __s35local31 = require("gge-module:export_CollectableItemEffectVE").CollectableItemEffectVE;
    CollectableEnum.EFFECTS = new CollectableEnum("effects", __s35local30, __s35local31);
    var __s35local32 = require("gge-module:export_CollectableItemUnitVO").CollectableItemUnitVO;
    var __s35local33 = require("gge-module:export_CollectableItemUnitVE").CollectableItemUnitVE;
    CollectableEnum.UNITS = new CollectableEnum("units", __s35local32, __s35local33);
    var __s35local34 = require("gge-module:export_CollectableItemPlagueDoctorVO").CollectableItemPlagueDoctorVO;
    var __s35local35 = require("gge-module:export_CollectableItemPlagueDoctorVE").CollectableItemPlagueDoctorVE;
    CollectableEnum.PLAGUE_DOCTORS = new CollectableEnum("plagueDoctors", __s35local34, __s35local35);
    var __s35local36 = require("gge-module:export_CollectableItemEquipmentRarenessVO").CollectableItemEquipmentRarenessVO;
    var __s35local37 = require("gge-module:export_CollectableItemEquipmentRarenessVE").CollectableItemEquipmentRarenessVE;
    CollectableEnum.EQUIPMENT_RARENESS = new CollectableEnum("equipmentRandom", __s35local36, __s35local37);
    var __s35local38 = require("gge-module:export_CollectableItemEquipmentUniqueVO").CollectableItemEquipmentUniqueVO;
    var __s35local39 = require("gge-module:export_CollectableItemEquipmentUniqueVE").CollectableItemEquipmentUniqueVE;
    CollectableEnum.EQUIPMENT_UNIQUE = new CollectableEnum("equipmentUnique", __s35local38, __s35local39);
    var __s35local40 = require("gge-module:export_CollectableItemEquipmentUniqueEnchantedVO").CollectableItemEquipmentUniqueEnchantedVO;
    var __s35local41 = require("gge-module:export_CollectableItemEquipmentUniqueEnchantedVE").CollectableItemEquipmentUniqueEnchantedVE;
    CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED = new CollectableEnum("equipmentEnchanted", __s35local40, __s35local41);
    var __s35local42 = require("gge-module:export_CollectableItemHeroRandomVO").CollectableItemHeroRandomVO;
    var __s35local43 = require("gge-module:export_CollectableItemHeroRandomVE").CollectableItemHeroRandomVE;
    CollectableEnum.HERO_RANDOM = new CollectableEnum("heroRandom", __s35local42, __s35local43);
    var __s35local44 = require("gge-module:export_CollectableItemGemVO").CollectableItemGemVO;
    var __s35local45 = require("gge-module:export_CollectableItemGemVE").CollectableItemGemVE;
    CollectableEnum.GEM = new CollectableEnum("gem", __s35local44, __s35local45);
    var __s35local46 = require("gge-module:export_CollectableItemGemRandomVO").CollectableItemGemRandomVO;
    var __s35local47 = require("gge-module:export_CollectableItemGemRandomVE").CollectableItemGemRandomVE;
    CollectableEnum.GEM_RANDOM = new CollectableEnum("gemRandom", __s35local46, __s35local47);
    var __s35local48 = require("gge-module:export_CollectableItemBoosterVO").CollectableItemBoosterVO;
    var __s35local49 = require("gge-module:export_CollectableItemBoosterVE").CollectableItemBoosterVE;
    CollectableEnum.BOOSTER = new CollectableEnum("booster", __s35local48, __s35local49);
    var __s35local50 = require("gge-module:export_CollectableItemGloryBoosterVO").CollectableItemGloryBoosterVO;
    var __s35local51 = require("gge-module:export_CollectableItemGloryBoosterVE").CollectableItemGloryBoosterVE;
    CollectableEnum.GLORY_BOOSTER = new CollectableEnum("gloryBooster", __s35local50, __s35local51);
    var __s35local52 = require("gge-module:export_CollectableItemXpBoosterVO").CollectableItemXpBoosterVO;
    var __s35local53 = require("gge-module:export_CollectableItemXpBoosterVE").CollectableItemXpBoosterVE;
    CollectableEnum.XP_BOOSTER = new CollectableEnum("xpBooster", __s35local52, __s35local53);
    var __s35local54 = require("gge-module:export_CollectableItemGallantryBoosterVO").CollectableItemGallantryBoosterVO;
    var __s35local55 = require("gge-module:export_CollectableItemGallantryBoosterVE").CollectableItemGallantryBoosterVE;
    CollectableEnum.GALLANTRY_BOOSTER = new CollectableEnum("gallantryBooster", __s35local54, __s35local55);
    var __s35local56 = require("gge-module:export_CollectableItemKhanTabletBoosterVO").CollectableItemKhanTabletBoosterVO;
    var __s35local57 = require("gge-module:export_CollectableItemKhanTabletBoosterVE").CollectableItemKhanTabletBoosterVE;
    CollectableEnum.KHAN_TABLET_BOOSTER = new CollectableEnum("khanTabletBooster", __s35local56, __s35local57);
    var __s35local58 = require("gge-module:export_CollectableItemSamuraiBoosterVO").CollectableItemSamuraiBoosterVO;
    var __s35local59 = require("gge-module:export_CollectableItemSamuraiBoosterVE").CollectableItemSamuraiBoosterVE;
    CollectableEnum.SAMURAI_BOOSTER = new CollectableEnum("samuraiBooster", __s35local58, __s35local59);
    var __s35local60 = require("gge-module:export_CollectableItemAllianceCoinBoosterVO").CollectableItemAllianceCoinBoosterVO;
    var __s35local61 = require("gge-module:export_CollectableItemAllianceCoinBoosterVE").CollectableItemAllianceCoinBoosterVE;
    CollectableEnum.ALLIANCE_COIN_BOOSTER = new CollectableEnum("allianceCoinBooster", __s35local60, __s35local61);
    var __s35local62 = require("gge-module:export_CollectableItemLongTermPointEventBoosterVO").CollectableItemLongTermPointEventBoosterVO;
    var __s35local63 = require("gge-module:export_CollectableItemLongTermPointEventBoosterVE").CollectableItemLongTermPointEventBoosterVE;
    CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER = new CollectableEnum("longTermPointEventBooster", __s35local62, __s35local63);
    var __s35local64 = require("gge-module:export_CollectableItemReputationBoosterVO").CollectableItemReputationBoosterVO;
    var __s35local65 = require("gge-module:export_CollectableItemReputationBoosterVE").CollectableItemReputationBoosterVE;
    CollectableEnum.REPUTATION_BOOSTER = new CollectableEnum("reputatioPointBooster", __s35local64, __s35local65);
    var __s35local66 = require("gge-module:export_CollectableItemRageBoosterVO").CollectableItemRageBoosterVO;
    var __s35local67 = require("gge-module:export_CollectableItemRageBoosterVE").CollectableItemRageBoosterVE;
    CollectableEnum.RAGE_POINT_BOOSTER = new CollectableEnum("rageBooster", __s35local66, __s35local67);
    var __s35local68 = require("gge-module:export_CollectableItemKahnMedalBoosterVO").CollectableItemKahnMedalBoosterVO;
    var __s35local69 = require("gge-module:export_CollectableItemKhanMedalBoosterVE").CollectableItemKhanMedalBoosterVE;
    CollectableEnum.KHAN_MEDAL_POINT_BOOSTER = new CollectableEnum("khanMedalBooster", __s35local68, __s35local69);
    var __s35local70 = require("gge-module:export_CollectableItemVipPointVO").CollectableItemVipPointVO;
    var __s35local71 = require("gge-module:export_CollectableItemVipPointVE").CollectableItemVipPointVE;
    CollectableEnum.VIP_POINTS = new CollectableEnum("vipPoints", __s35local70, __s35local71);
    var __s35local72 = require("gge-module:export_CollectableItemVipTimeVO").CollectableItemVipTimeVO;
    var __s35local73 = require("gge-module:export_CollectableItemVipTimeVE").CollectableItemVipTimeVE;
    CollectableEnum.VIP_TIME = new CollectableEnum("vipTime", __s35local72, __s35local73);
    var __s35local74 = require("gge-module:export_CollectableItemXpVO").CollectableItemXpVO;
    var __s35local75 = require("gge-module:export_CollectableItemXpVE").CollectableItemXpVE;
    CollectableEnum.XP = new CollectableEnum("xp", __s35local74, __s35local75);
    var __s35local76 = require("gge-module:export_CollectableItemSkipDiscountVO").CollectableItemSkipDiscountVO;
    var __s35local77 = require("gge-module:export_CollectableItemSkipDiscountVE").CollectableItemSkipDiscountVE;
    CollectableEnum.SKIP_DISCOUNT = new CollectableEnum("skipDiscount", __s35local76, __s35local77);
    var __s35local78 = require("gge-module:export_CollectableItemExtinguishFireVO").CollectableItemExtinguishFireVO;
    var __s35local79 = require("gge-module:export_CollectableItemExtinguishFireVE").CollectableItemExtinguishFireVE;
    CollectableEnum.EXTINGUISH_FIRE = new CollectableEnum("extinguishFire", __s35local78, __s35local79);
    var __s35local80 = require("gge-module:export_CollectableItemAlienProtectionVO").CollectableItemAlienProtectionVO;
    var __s35local81 = require("gge-module:export_CollectableItemAlienProtectionVE").CollectableItemAlienProtectionVE;
    CollectableEnum.ALIEN_PROTECTION = new CollectableEnum("alienProtection", __s35local80, __s35local81);
    var __s35local82 = require("gge-module:export_CollectableItemDungeonProtectionVO").CollectableItemDungeonProtectionVO;
    var __s35local83 = require("gge-module:export_CollectableItemDungeonProtectionVE").CollectableItemDungeonProtectionVE;
    CollectableEnum.DUNGEON_PROTECTION = new CollectableEnum("dungeonProtectionTime", __s35local82, __s35local83);
    var __s35local84 = require("gge-module:export_CollectableItemBuildingVO").CollectableItemBuildingVO;
    var __s35local85 = require("gge-module:export_CollectableItemBuildingVE").CollectableItemBuildingVE;
    CollectableEnum.BUILDING = new CollectableEnum("building", __s35local84, __s35local85);
    var __s35local86 = require("gge-module:export_CollectableItemResourcePointVO").CollectableItemResourcePointVO;
    var __s35local87 = require("gge-module:export_CollectableItemResourcePointVE").CollectableItemResourcePointVE;
    CollectableEnum.RESOURCE_POINTS = new CollectableEnum("resourcePoints", __s35local86, __s35local87);
    var __s35local88 = require("gge-module:export_CollectableItemAchievementPointVO").CollectableItemAchievementPointVO;
    var __s35local89 = require("gge-module:export_CollectableItemAchievementPointVE").CollectableItemAchievementPointVE;
    CollectableEnum.ACHIEVEMENT_POINTS = new CollectableEnum("achievementPoints", __s35local88, __s35local89);
    var __s35local90 = require("gge-module:export_CollectableItemCrestSymbolVO").CollectableItemCrestSymbolVO;
    var __s35local91 = require("gge-module:export_CollectableItemCrestSymbolVE").CollectableItemCrestSymbolVE;
    CollectableEnum.CREST_SYMBOL = new CollectableEnum("crestSymbol", __s35local90, __s35local91);
    var __s35local92 = require("gge-module:export_CollectableItemConstructionItemVO").CollectableItemConstructionItemVO;
    var __s35local93 = require("gge-module:export_CollectableItemConstructionItemVE").CollectableItemConstructionItemVE;
    CollectableEnum.CONSTRUCTION_ITEM = new CollectableEnum("constructionItem", __s35local92, __s35local93);
    var __s35local94 = require("gge-module:export_CollectableItemAllianceGiftVO").CollectableItemAllianceGiftVO;
    var __s35local95 = require("gge-module:export_CollectableItemAllianceGiftVE").CollectableItemAllianceGiftVE;
    CollectableEnum.ALLIANCE_GIFT = new CollectableEnum("allianceGift", __s35local94, __s35local95);
    var __s35local96 = require("gge-module:export_CollectableItemPermanentUnitSlotVO").CollectableItemPermanentUnitSlotVO;
    var __s35local97 = require("gge-module:export_CollectableItemPermanentUnitSlotVE").CollectableItemPermanentUnitSlotVE;
    CollectableEnum.PERMANENT_UNIT_SLOT = new CollectableEnum("permanentUnitSlot", __s35local96, __s35local97);
    var __s35local98 = require("gge-module:export_CollectableItemPermanentToolSlotVO").CollectableItemPermanentToolSlotVO;
    var __s35local99 = require("gge-module:export_CollectableItemPermanentToolSlotVE").CollectableItemPermanentToolSlotVE;
    CollectableEnum.PERMANENT_TOOL_SLOT = new CollectableEnum("permanentToolSlot", __s35local98, __s35local99);
    var __s35local100 = require("gge-module:export_CollectableItemConstructionItemBlueprintVO").CollectableItemConstructionItemBlueprintVO;
    var __s35local101 = require("gge-module:export_CollectableItemConstructionItemBlueprintVE").CollectableItemConstructionItemBlueprintVE;
    CollectableEnum.CONSTRUCTION_ITEM_BLUEPRINT = new CollectableEnum("constructionItemBlueprint", __s35local100, __s35local101);
    var __s35local102 = require("gge-module:export_CollectableItemMaterialBagVO").CollectableItemMaterialBagVO;
    var __s35local103 = require("gge-module:export_CollectableItemMaterialBagVE").CollectableItemMaterialBagVE;
    CollectableEnum.MATERIAL_BAG = new CollectableEnum("materialBag", __s35local102, __s35local103);
    var __s35local104 = require("gge-module:export_CollectableItemPaymentDoublerVO").CollectableItemPaymentDoublerVO;
    var __s35local105 = require("gge-module:export_CollectableItemPaymentDoublerVE").CollectableItemPaymentDoublerVE;
    CollectableEnum.PAYMENT_DOUBLER = new CollectableEnum("paymentDoubler", __s35local104, __s35local105);
    var __s35local106 = require("gge-module:export_CollectableItemWarEffortPointsVO").CollectableItemWarEffortPointsVO;
    var __s35local107 = require("gge-module:export_CollectableItemWarEffortPointsVE").CollectableItemWarEffortPointsVE;
    CollectableEnum.WAR_EFFORT_POINTS = new CollectableEnum("warEffortPoints", __s35local106, __s35local107);
    var __s35local108 = require("gge-module:export_CollectableItemGiftPackageVO").CollectableItemGiftPackageVO;
    var __s35local109 = require("gge-module:export_CollectableItemGiftPackageVE").CollectableItemGiftPackageVE;
    CollectableEnum.GIFT_PACKAGE = new CollectableEnum("giftPackage", __s35local108, __s35local109);
    var __s35local110 = require("gge-module:export_CollectableItemEventPackageVO").CollectableItemEventPackageVO;
    var __s35local111 = require("gge-module:export_CollectableItemEventPackageVE").CollectableItemEventPackageVE;
    CollectableEnum.EVENT_PACKAGE = new CollectableEnum("eventPackage", __s35local110, __s35local111);
    var __s35local112 = require("gge-module:export_CollectableItemRandomRewardVO").CollectableItemRandomRewardVO;
    var __s35local113 = require("gge-module:export_CollectableItemRandomRewardVE").CollectableItemRandomRewardVE;
    CollectableEnum.RANDOM_REWARD = new CollectableEnum("randomReward", __s35local112, __s35local113);
    var __s35local114 = require("gge-module:export_CollectableItemUnlockVO").CollectableItemUnlockVO;
    var __s35local115 = require("gge-module:export_CollectableItemUnlockVE").CollectableItemUnlockVE;
    CollectableEnum.UNLOCK = new CollectableEnum("unlock", __s35local114, __s35local115);
    var __s35local116 = require("gge-module:export_CollectableItemSeasonLeagueMedalVO").CollectableItemSeasonLeagueMedalVO;
    var __s35local117 = require("gge-module:export_CollectableItemSeasonLeagueMedalVE").CollectableItemSeasonLeagueMedalVE;
    CollectableEnum.SEASON_LEAGUE_MEDALS = new CollectableEnum("seasonLeagueMedals", __s35local116, __s35local117);
    var __s35local118 = require("gge-module:export_CollectableItemSeasonLeagueSeasonPassVO").CollectableItemSeasonLeagueSeasonPassVO;
    var __s35local119 = require("gge-module:export_CollectableItemSeasonLeagueSeasonPassVE").CollectableItemSeasonLeagueSeasonPassVE;
    CollectableEnum.SEASON_LEAGUE_SEASON_PASS = new CollectableEnum("seasonLeaguePass", __s35local118, __s35local119);
    var __s35local120 = require("gge-module:export_CollectableItemSeasonLeagueEventPassVO").CollectableItemSeasonLeagueEventPassVO;
    var __s35local121 = require("gge-module:export_CollectableItemSeasonLeagueEventPassVE").CollectableItemSeasonLeagueEventPassVE;
    CollectableEnum.SEASON_LEAGUE_EVENT_PASS = new CollectableEnum("seasonLeaguePassEvent", __s35local120, __s35local121);
    var __s35local122 = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVO").CollectableItemSeasonLeaguePromotionPassVO;
    var __s35local123 = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVE").CollectableItemSeasonLeaguePromotionPassVE;
    CollectableEnum.SEASON_LEAGUE_PROMOTION_PASS = new CollectableEnum("seasonLeaguePassPromotion", __s35local122, __s35local123);
    var __s35local124 = require("gge-module:export_CollectableItemUnlockAllPassVO").CollectableItemUnlockAllPassVO;
    var __s35local125 = require("gge-module:export_CollectableItemUnlockAllPassVE").CollectableItemUnlockAllPassVE;
    CollectableEnum.SEASON_UNLOCK_ALL_PASS = new CollectableEnum("todo", __s35local124, __s35local125);
    var __s35local126 = require("gge-module:export_ACollectableItemLootBoxVO").ACollectableItemLootBoxVO;
    var __s35local127 = require("gge-module:export_ACollectableItemLootBoxVE").ACollectableItemLootBoxVE;
    CollectableEnum.LOOT_BOX = new CollectableEnum("lootBox", __s35local126, __s35local127);
    var __s35local128 = require("gge-module:export_CollectableItemAllianceCrestLayoutVO").CollectableItemAllianceCrestLayoutVO;
    var __s35local129 = require("gge-module:export_CollectableItemAllianceCrestLayoutVE").CollectableItemAllianceCrestLayoutVE;
    CollectableEnum.ALLIANCE_CREST_LAYOUT = new CollectableEnum("allianceCrestLayout", __s35local128, __s35local129);
  };
  return CollectableEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.CollectableEnum = __s0local0;
__s0local0.__initialize_static_members();
