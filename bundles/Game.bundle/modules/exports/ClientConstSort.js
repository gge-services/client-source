Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_XmlRelicEffectVO = require("gge-module:export_XmlRelicEffectVO");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __s0local0 = function () {
  function ClientConstSort() {}
  ClientConstSort.sortBySerialOrder = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = NaN;
    for (var __s5local1 = 0; __s5local1 < __s5param0.length; ++__s5local1) {
      if ((__s5local0 = __s5param0[__s5local1](__s5param1, __s5param2)) != 0) {
        return __s5local0;
      }
    }
    return __s5local0;
  };
  ClientConstSort.sortByObjectId = function (__s10param0, __s10param1) {
    if (__s10param0.objectId > __s10param1.objectId) {
      return 1;
    } else if (__s10param0.objectId < __s10param1.objectId) {
      return -1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByUnitAttackPower = function (__s15param0, __s15param1) {
    var __s15local0;
    var __s15local1 = __dep_exact_f855840627e6e145.int(Math.max(__s15param0.meleeAttack, __s15param0.rangeAttack));
    var __s15local2 = __dep_exact_f855840627e6e145.int(Math.max(__s15param1.meleeAttack, __s15param1.rangeAttack));
    if ((__s15local0 = ClientConstSort._sortByValue(__s15local1, __s15local2)) != 0) {
      return __s15local0;
    } else {
      return __dep_exact_f855840627e6e145.int(ClientConstSort.sortByUnitSortOrder(__s15param0, __s15param1));
    }
  };
  ClientConstSort.sortByUnitDefencePower = function (__s19param0, __s19param1) {
    var __s19local0;
    var __s19local1 = __dep_exact_f855840627e6e145.int(Math.max(__s19param0.meleeDefence, __s19param0.rangeDefence));
    var __s19local2 = __dep_exact_f855840627e6e145.int(Math.max(__s19param1.meleeDefence, __s19param1.rangeDefence));
    if ((__s19local0 = ClientConstSort._sortByValue(__s19local1, __s19local2)) != 0) {
      return __s19local0;
    } else {
      return __dep_exact_f855840627e6e145.int(ClientConstSort.sortByUnitSortOrder(__s19param0, __s19param1));
    }
  };
  ClientConstSort.sortByUnitPower = function (__s23param0, __s23param1) {
    var __s23local0;
    var __s23local1 = __dep_exact_f855840627e6e145.int(Math.max(__s23param0.meleeAttack, __s23param0.rangeAttack, __s23param0.meleeDefence, __s23param0.rangeDefence));
    var __s23local2 = __dep_exact_f855840627e6e145.int(Math.max(__s23param1.meleeAttack, __s23param1.rangeAttack, __s23param1.meleeDefence, __s23param1.rangeDefence));
    if ((__s23local0 = ClientConstSort._sortByValue(__s23local1, __s23local2)) != 0) {
      return __s23local0;
    } else {
      return __dep_exact_f855840627e6e145.int(ClientConstSort.sortByUnitSortOrder(__s23param0, __s23param1));
    }
  };
  ClientConstSort._sortByValue = function (__s27param0, __s27param1) {
    if (__s27param0 > __s27param1) {
      return -1;
    } else if (__s27param0 < __s27param1) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByBuildingLevelDescending = function (__s32param0, __s32param1) {
    var __s32local0 = 0;
    if (__s32param0.buildingVO.level > __s32param1.buildingVO.level) {
      __s32local0 = -1;
    }
    if (__s32param0.buildingVO.level < __s32param1.buildingVO.level) {
      __s32local0 = 1;
    }
    return __s32local0;
  };
  ClientConstSort.sortByUnitSortOrder = function (__s36param0, __s36param1) {
    var __s36local0 = 0;
    if ((__s36local0 = __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderEffectIcon(__s36param0, __s36param1))) != 0) {
      return __s36local0;
    } else if ((__s36local0 = __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderStronghold(__s36param0, __s36param1))) != 0) {
      return __s36local0;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s36param0, "ToolUnitVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s36param1, "ToolUnitVO")) {
      return 1;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s36param1, "ToolUnitVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s36param0, "ToolUnitVO")) {
      return -1;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s36param0, "ToolUnitVO")) {
      return __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderNormal(__s36param0, __s36param1));
    } else {
      return __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderInvert(__s36param0, __s36param1));
    }
  };
  ClientConstSort.sortByUnitSortOrderRecruit = function (__s44param0, __s44param1) {
    var __s44local0 = 0;
    if ((__s44local0 = __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderEffectIcon(__s44param0, __s44param1))) != 0) {
      return __s44local0;
    } else if ((__s44local0 = __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderStronghold(__s44param0, __s44param1))) != 0) {
      return __s44local0;
    } else if ((__s44local0 = __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderRecruit(__s44param0, __s44param1))) != 0) {
      return __s44local0;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s44param0, "ToolUnitVO")) {
      return __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderNormal(__s44param0, __s44param1));
    } else {
      return __dep_exact_f855840627e6e145.int(ClientConstSort._unitSortOrderInvert(__s44param0, __s44param1));
    }
  };
  ClientConstSort.sortByUnitSortOrderForLogUnitVO = function (__s51param0, __s51param1) {
    var __s51local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s51param0.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    var __s51local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s51param1.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    if (__s51local0 || __s51local1) {
      if (__s51local0) {
        if (__s51local1) {
          return __dep_exact_f855840627e6e145.int(ClientConstSort.sortByUnitSortOrder(__s51local0, __s51local1));
        } else {
          return -1;
        }
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByBookmarks = function (__s59param0, __s59param1) {
    var __s59local0 = 0;
    if ((__s59local0 = __dep_exact_f855840627e6e145.int(ClientConstSort.sortByBookmarkType(__s59param0, __s59param1))) != 0) {
      return __s59local0;
    } else if ((__s59local0 = __dep_exact_f855840627e6e145.int(ClientConstSort.sortByBookmarksAndKingdomID(__s59param0.worldmapObjectVO, __s59param1.worldmapObjectVO))) != 0) {
      return __s59local0;
    } else {
      return __dep_exact_f855840627e6e145.int(__s59param0.name.toLowerCase().localeCompare(__s59param1.name.toLowerCase()));
    }
  };
  ClientConstSort.sortByBookmarkType = function (__s64param0, __s64param1) {
    if (__s64param0.sortIndex > __s64param1.sortIndex) {
      return 1;
    } else if (__s64param0.sortIndex < __s64param1.sortIndex) {
      return -1;
    } else if (__s64param0.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER && __s64param0.attackOrderDetails && __s64param1.attackOrderDetails) {
      if (__s64param0.attackOrderDetails.attackDate < __s64param1.attackOrderDetails.attackDate) {
        return -1;
      } else if (__s64param0.attackOrderDetails.attackDate > __s64param1.attackOrderDetails.attackDate) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  ClientConstSort.sortDisplayObjectsByName = function (__s73param0, __s73param1) {
    return __dep_exact_f855840627e6e145.int(__s73param0.name.toLowerCase().localeCompare(__s73param1.name.toLowerCase()));
  };
  ClientConstSort.sortByMapObject = function (__s75param0, __s75param1) {
    if (__s75param0) {
      if (__s75param1) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s75param0, "CastleMapobjectVO")) {
          return -1;
        } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s75param1, "CastleMapobjectVO")) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  ClientConstSort.sortByFactionCamp = function (__s84param0, __s84param1) {
    var __s84local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    var __s84local1 = __dep_exact_f855840627e6e145.int(__s84local0 ? __s84local0.mainCampID : -1);
    if (__s84param0) {
      if (__s84param1) {
        if (__s84param0.objectId == __s84local1) {
          return -1;
        } else if (__s84param1.objectId == __s84local1) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  ClientConstSort.sortByKingdomIdAndKingstowerAtEnd = function (__s93param0, __s93param1) {
    if (!__s93param0) {
      return 1;
    }
    if (!__s93param1) {
      return -1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s93param0, "KingstowerMapobjectVO")) {
      return 1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s93param1, "KingstowerMapobjectVO")) {
      return -1;
    }
    var __s93local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s93param0.kingdomID);
    var __s93local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s93param1.kingdomID);
    if (__s93local0 && !__s93local1) {
      return -1;
    }
    if (!__s93local0 && __s93local1) {
      return 1;
    }
    if (!__s93local0 && !__s93local1) {
      return 0;
    }
    if (__s93local0.kID != __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID && __s93local1.kID != __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
      if (__s93local0.minLevel < __s93local1.minLevel) {
        return -1;
      }
      if (__s93local0.minLevel > __s93local1.minLevel) {
        return 1;
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s93param0, "CastleMapobjectVO")) {
        return -1;
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s93param1, "CastleMapobjectVO")) {
        return 1;
      }
    }
    return 0;
  };
  ClientConstSort.sortByBookmarksAndKingdomID = function (__s107param0, __s107param1) {
    if (!__s107param0) {
      return 1;
    }
    if (!__s107param1) {
      return -1;
    }
    var __s107local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s107param0.kingdomID);
    var __s107local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s107param1.kingdomID);
    if (__s107local0.minLevel < __s107local1.minLevel) {
      return -1;
    } else if (__s107local0.minLevel > __s107local1.minLevel) {
      return 1;
    } else if (ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(__s107param0.areaType) < ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(__s107param1.areaType)) {
      return -1;
    } else if (ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(__s107param0.areaType) > ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(__s107param1.areaType)) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByKingdomId = function (__s116param0, __s116param1) {
    if (!__s116param0) {
      return 1;
    }
    if (!__s116param1) {
      return -1;
    }
    var __s116local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s116param0.kingdomID);
    var __s116local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s116param1.kingdomID);
    if (__s116local0.minLevel < __s116local1.minLevel) {
      return -1;
    }
    if (__s116local0.minLevel > __s116local1.minLevel) {
      return 1;
    }
    if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s116param0.areaType) < ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s116param1.areaType)) {
      return -1;
    }
    if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s116param0.areaType) > ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s116param1.areaType)) {
      return 1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s116param0, "CastleMapobjectVO")) {
      return -1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s116param1, "CastleMapobjectVO")) {
      return 1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s116param0, "UpgradableLandmarkMapobjectVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s116param1, "UpgradableLandmarkMapobjectVO")) {
      if (__s116param0.level > __s116param1.level) {
        return -1;
      }
      if (__s116param0.level < __s116param1.level) {
        return 1;
      }
    }
    return 0;
  };
  ClientConstSort.sortDetailedCastleVOByKingdomID = function (__s129param0, __s129param1) {
    if (!__s129param0) {
      return 1;
    }
    if (!__s129param1) {
      return -1;
    }
    var __s129local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s129param0.kingdomID);
    var __s129local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s129param1.kingdomID);
    if (__s129local0.minLevel < __s129local1.minLevel) {
      return -1;
    }
    if (__s129local0.minLevel > __s129local1.minLevel) {
      return 1;
    }
    var __s129local2 = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s129param0.areaID, __s129param0.kingdomID);
    var __s129local3 = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s129param1.areaID, __s129param1.kingdomID);
    if (__s129local2 && __s129local3) {
      if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s129local2.areaType) < ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s129local3.areaType)) {
        return -1;
      }
      if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s129local2.areaType) > ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(__s129local3.areaType)) {
        return 1;
      }
    }
    return 0;
  };
  ClientConstSort.sortByDailyQuestID = function (__s138param0, __s138param1) {
    if (__s138param0.questID < __s138param1.questID) {
      return -1;
    } else if (__s138param0.questID > __s138param1.questID) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderEffectIcon = function (__s143param0, __s143param1) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s143param0, "EffectIconUnitVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s143param1, "EffectIconUnitVO")) {
      return -1;
    } else if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s143param0, "EffectIconUnitVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s143param1, "EffectIconUnitVO")) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderStronghold = function (__s148param0, __s148param1) {
    if (__s148param0 && __s148param1) {
      if (!__s148param0.isStronghold && __s148param1.isStronghold) {
        return -1;
      } else if (__s148param0.isStronghold && !__s148param1.isStronghold) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderNormal = function (__s155param0, __s155param1) {
    if (__s155param0.sortOrder > __s155param1.sortOrder) {
      return 1;
    } else if (__s155param0.sortOrder < __s155param1.sortOrder) {
      return -1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderInvert = function (__s160param0, __s160param1) {
    if (__s160param0.sortOrder > __s160param1.sortOrder) {
      return -1;
    } else if (__s160param0.sortOrder < __s160param1.sortOrder) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderRecruit = function (__s165param0, __s165param1) {
    if (__dep_export_CastleModel.CastleModel.militaryData) {
      if (__s165param0.isAvailable && !__s165param1.isAvailable) {
        return -1;
      }
      if (!__s165param0.isAvailable && __s165param1.isAvailable) {
        return 1;
      }
      if (!__s165param0.isAvailable && !__s165param1.isAvailable) {
        if (__s165param0.buildingLevel > __s165param1.buildingLevel) {
          return 1;
        }
        if (__s165param0.buildingLevel < __s165param1.buildingLevel) {
          return -1;
        }
      }
    }
    return 0;
  };
  ClientConstSort.onSortEquipmentItems = function (__s173param0, __s173param1) {
    var __s173local0 = __s173param0.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s173param0.visualRareID);
    var __s173local1 = __s173param1.enchantmentLevel >= __dep_exact_26a421b704832cff.EquipmentConst.getMaxEnchantmentLevel(__s173param1.visualRareID);
    if (__s173local0 != __s173local1) {
      if (__s173local0) {
        return 1;
      }
      if (__s173local1) {
        return -1;
      }
    }
    var __s173local2 = ClientConstSort.getLordByItem(__s173param0);
    var __s173local3 = ClientConstSort.getLordByItem(__s173param1);
    var __s173local4 = !!__s173local2 && !__s173local2.isAvailableForEquip;
    var __s173local5 = !!__s173local3 && !__s173local3.isAvailableForEquip;
    if (__s173local4 != __s173local4) {
      if (__s173local4) {
        return 1;
      }
      if (__s173local5) {
        return -1;
      }
    }
    if (__s173param0.rareID != __s173param1.rareID) {
      if (__s173param0.rareID == 0) {
        return -1;
      }
      if (__s173param1.rareID == 0) {
        return 1;
      }
      if (__s173param0.rareID < __s173param1.rareID) {
        return 1;
      }
      if (__s173param0.rareID > __s173param1.rareID) {
        return -1;
      }
    }
    if (__s173param0.id < __s173param1.id) {
      return 1;
    } else if (__s173param0.id > __s173param1.id) {
      return -1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByRarityAndEnchantment = function (__s189param0, __s189param1) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s189param0, "RelicEquipmentVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s189param1, "RelicEquipmentVO")) {
      return -1;
    } else if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s189param0, "RelicEquipmentVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s189param1, "RelicEquipmentVO")) {
      return 1;
    } else if (__s189param0.rareID == 0 || __s189param0.rareID == 10) {
      return -1;
    } else if (__s189param1.rareID == 0 || __s189param1.rareID == 10) {
      return 1;
    } else if (__s189param0.rareID > __s189param1.rareID) {
      return -1;
    } else if (__s189param0.rareID < __s189param1.rareID) {
      return 1;
    } else if (__s189param0.enchantmentLevel > __s189param1.enchantmentLevel) {
      return -1;
    } else if (__s189param0.enchantmentLevel < __s189param1.enchantmentLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.getLordByItem = function (__s200param0) {
    var __s200local0 = __dep_export_CastleModel.CastleModel.lordData.barons;
    var __s200local1 = __dep_export_CastleModel.CastleModel.lordData.commanders;
    if (__s200local0 != null) {
      for (var __s200local2 = 0, __s200local3 = __s200local0; __s200local2 < __s200local3.length; __s200local2++) {
        var __s200local4 = __s200local3[__s200local2];
        if (__s200local4 !== undefined && (__s200local4.helmetSlotVO.equipmentVO && __s200local4.helmetSlotVO.equipmentVO.id == __s200param0.id || __s200local4.armorSlotVO.equipmentVO && __s200local4.armorSlotVO.equipmentVO.id == __s200param0.id || __s200local4.artifactSlotVO.equipmentVO && __s200local4.artifactSlotVO.equipmentVO.id == __s200param0.id || __s200local4.weaponSlotVO.equipmentVO && __s200local4.weaponSlotVO.equipmentVO.id == __s200param0.id)) {
          return __s200local4;
        }
      }
    }
    if (__s200local1 != null) {
      for (var __s200local5 = 0, __s200local6 = __s200local1; __s200local5 < __s200local6.length; __s200local5++) {
        var __s200local7 = __s200local6[__s200local5];
        if (__s200local7 !== undefined && (__s200local7.helmetSlotVO.equipmentVO && __s200local7.helmetSlotVO.equipmentVO.id == __s200param0.id || __s200local7.armorSlotVO.equipmentVO && __s200local7.armorSlotVO.equipmentVO.id == __s200param0.id || __s200local7.artifactSlotVO.equipmentVO && __s200local7.artifactSlotVO.equipmentVO.id == __s200param0.id || __s200local7.weaponSlotVO.equipmentVO && __s200local7.weaponSlotVO.equipmentVO.id == __s200param0.id)) {
          return __s200local7;
        }
      }
    }
    return null;
  };
  ClientConstSort.sortGemsForCrafting = function (__s210param0, __s210param1) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s210param0, "RelicGemVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s210param1, "RelicGemVO")) {
      return -1;
    }
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s210param0, "RelicGemVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s210param1, "RelicGemVO")) {
      return 1;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s210param0, "RelicGemVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s210param1, "RelicGemVO")) {
      return __dep_exact_f855840627e6e145.int(__s210param0.relicInfoVO.relicTypeId - __s210param1.relicInfoVO.relicTypeId);
    }
    var __s210local0 = __s210param0;
    var __s210local1 = __s210param1;
    if (__s210local0.isUnique && !__s210local1.isUnique) {
      return -1;
    } else if (!__s210local0.isUnique && __s210local1.isUnique) {
      return 1;
    } else if (__s210local0.level > __s210local1.level) {
      return -1;
    } else if (__s210local0.level < __s210local1.level) {
      return 1;
    } else if (__s210local0.boni[0].effect.name < __s210local1.boni[0].effect.name) {
      return -1;
    } else if (__s210local0.boni[0].effect.name > __s210local1.boni[0].effect.name) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByExpireTime = function (__s222param0, __s222param1) {
    if (__s222param0.expiredTimeStamp < __s222param1.expiredTimeStamp) {
      return -1;
    } else if (__s222param0.expiredTimeStamp > __s222param1.expiredTimeStamp) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortCollectablesC2First = function (__s227param0, __s227param1) {
    if (__s227param0.itemType == __dep_export_CollectableEnum.CollectableEnum.C2 && __s227param1.itemType != __dep_export_CollectableEnum.CollectableEnum.C2) {
      return -1;
    } else if (__s227param0.itemType != __dep_export_CollectableEnum.CollectableEnum.C2 && __s227param1.itemType == __dep_export_CollectableEnum.CollectableEnum.C2) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortVisualVOByWodId = function (__s232param0, __s232param1) {
    if (__s232param0.wodId < __s232param1.wodId) {
      return -1;
    } else if (__s232param0.wodId > __s232param1.wodId) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortForumTopicPostsByCreationDate = function (__s237param0 = true) {
    return function (__s239param0, __s239param1) {
      if (__s239param0.postVO.creationTimestamp < __s239param1.postVO.creationTimestamp) {
        if (__s237param0) {
          return 1;
        } else {
          return -1;
        }
      } else if (__s239param0.postVO.creationTimestamp > __s239param1.postVO.creationTimestamp) {
        if (__s237param0) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    };
  };
  ClientConstSort.sortByEventId = function () {
    var __s248local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    var __s248local1 = __dep_exact_f855840627e6e145.int(__s248local0 ? __s248local0.mapID : -1);
    return function (__s250param0, __s250param1) {
      if (__s248local1 != -1) {
        if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(__s248local1)) {
          if (__s250param1.eventID == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
            return 1;
          } else {
            return -1;
          }
        }
        if (__dep_export_TMapHelper.TMapHelper.isThornKingMap(__s248local1)) {
          if (__s250param1.eventID == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_THORNKING) {
            return 1;
          } else {
            return -1;
          }
        }
        if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(__s248local1)) {
          if (__s250param1.eventID == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
            return 1;
          } else {
            return -1;
          }
        }
      }
      return __s250param1.eventID - __s250param0.eventID;
    };
  };
  ClientConstSort.sortByPriority = function (__s262param0, __s262param1) {
    return __s262param0 - __s262param1;
  };
  ClientConstSort.sortByC2Reward = function (__s264param0, __s264param1) {
    return __s264param1.c2Reward - __s264param0.c2Reward;
  };
  ClientConstSort.sortByXpReward = function (__s266param0, __s266param1) {
    return __s266param1.xpReward - __s266param0.xpReward;
  };
  ClientConstSort.sortByQuestId = function (__s268param0, __s268param1) {
    return __s268param1.questID - __s268param0.questID;
  };
  ClientConstSort.sortByQuestSeriesNumber = function (__s270param0, __s270param1) {
    return __s270param0.questSeriesNumber - __s270param1.questSeriesNumber;
  };
  ClientConstSort.sortPackageListByHighlightOrder = function (__s272param0) {
    if (__s272param0 && __s272param0.length > 0) {
      var __s272local0 = __s272param0.length > 0 ? __s272param0[0] : null;
      var __s272local1 = __s272local0;
      for (var __s272local2 = 0; __s272local2 < __s272param0.length; __s272local2++) {
        if (!__s272local0 && __s272param0[__s272local2].highlightOrderLeft > 0 || __s272local0.highlightOrderLeft > __s272param0[__s272local2].highlightOrderLeft) {
          __s272local0 = __s272param0[__s272local2];
        }
        if (!__s272local1 && __s272param0[__s272local2].highlightOrderRight > 0 || __s272local1.highlightOrderRight > __s272param0[__s272local2].highlightOrderRight) {
          __s272local1 = __s272param0[__s272local2];
        }
      }
      if (__s272local0 === __s272local1 && __s272param0.length > 1) {
        __s272local1 = __s272param0[1];
      }
      __s272param0.splice(__s272param0.indexOf(__s272local0), 1);
      __s272param0.splice(__s272param0.indexOf(__s272local1), 1);
      if (__s272local1) {
        __s272local1.topPackage = true;
      }
      if (__s272local0) {
        __s272local0.topPackage = true;
      }
      if (__s272local0 === __s272local1) {
        __s272param0.unshift(__s272local0);
      } else {
        __s272param0.unshift(__s272local0, __s272local1);
      }
    }
  };
  ClientConstSort.sortConstructionItems = function (__s284param0, __s284param1) {
    var __s284local0 = __s284param0.constructionItemVO;
    var __s284local1 = __s284param1.constructionItemVO;
    return __dep_exact_f855840627e6e145.int(__s284local0.compareTo(__s284local1));
  };
  ClientConstSort.objectiveOrder = function (__s286param0, __s286param1) {
    var __s286local0 = __s286param0.isFailed - __s286param1.isFailed;
    return __s286local0 || ((__s286local0 = __s286param0.isCompleted - __s286param1.isCompleted) ? __s286local0 : (__s286local0 = __s286param0.isMainObjective - __s286param1.isMainObjective) ? __s286local0 : (__s286local0 = __s286param0.isChallengeObjective - __s286param1.isChallengeObjective) || __s286param0.questID - __s286param1.questID);
  };
  ClientConstSort.sortCombinedEventRewards = function (__s288param0, __s288param1) {
    var __s288local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_COMBINED_EVENT_REWARDS.indexOf(__s288param0.itemType));
    var __s288local1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_COMBINED_EVENT_REWARDS.indexOf(__s288param1.itemType));
    if (__s288param0.itemType == __dep_export_CollectableEnum.CollectableEnum.UNITS && __s288param1.itemType == __dep_export_CollectableEnum.CollectableEnum.UNITS) {
      __s288local0 += __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s288param0.unitVO, "SoldierUnitVO") ? 1 : -1);
      __s288local1 += __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(__s288param1.unitVO, "SoldierUnitVO") ? 1 : -1);
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s288param0, "CollectableItemGenericCurrencyVO") && __dep_exact_81dacdf05bd32292.instanceOfClass(__s288param1, "CollectableItemGenericCurrencyVO")) {
      return ClientConstSort._sortByValue(__s288param0.xmlCurrencyVO.id, __s288param1.xmlCurrencyVO.id);
    } else {
      return ClientConstSort._sortByValue(__s288local0, __s288local1);
    }
  };
  ClientConstSort.sortByCurrencyId = function (__s293param0, __s293param1) {
    return __s293param0.id - __s293param1.id;
  };
  ClientConstSort.sortByXmlCurrencyId = function (__s295param0, __s295param1) {
    return __s295param0.id - __s295param1.id;
  };
  ClientConstSort.sortRelicBoni = function (__s297param0, __s297param1) {
    var __s297local0 = __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER.indexOf(__s297param1.relicEffectVO.effectType) - __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER.indexOf(__s297param0.relicEffectVO.effectType);
    if (__s297local0 != 0) {
      return __s297local0;
    } else {
      return __s297param1.relicEffectVO.id - __s297param0.relicEffectVO.id;
    }
  };
  ClientConstSort.sortByTempServerRewardPriority = function (__s301param0, __s301param1) {
    var __s301local0 = [__dep_export_CollectableEnum.CollectableEnum.UNITS, __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS, __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE, __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED, __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT, __dep_export_CollectableEnum.CollectableEnum.BUILDING];
    var __s301local1 = __s301local0.indexOf(__s301param0.itemType);
    return __s301local0.indexOf(__s301param1.itemType) - __s301local1;
  };
  ClientConstSort.__initialize_static_members = function () {
    ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER = [__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_OUTPOST, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGS_TOWER, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_LABORATORY, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER];
    ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER = [__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGDOM_CASTLE, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALIEN_CAMP, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_OUTPOST, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGS_TOWER, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_LABORATORY, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_VILLAGE, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ISLE_RESOURCE, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_DUNGEON, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ISLE_DUNGEON, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_BOSS_DUNGEON, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_EVENT_DUNGEON, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAMP, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAPITAL, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_VILLAGE, __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_TOWER];
  };
  return ClientConstSort;
}();
exports.ClientConstSort = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
__s0local0.__initialize_static_members();
