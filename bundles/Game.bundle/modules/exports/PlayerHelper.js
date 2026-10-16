Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __s0local0 = function () {
  function PlayerHelper() {}
  PlayerHelper.isDungeonPlayer = function (__s5param0) {
    return __s5param0 <= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID && __s5param0 >= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_LAST_ID || __s5param0 <= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_FIRST_ID && __s5param0 >= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_LAST_ID;
  };
  PlayerHelper.isOutpostPlayer = function (__s7param0) {
    return __s7param0 == __dep_exact_26a421b704832cff_3.OutpostConst.OUTPOST_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isMetropolPlayer = function (__s9param0) {
    return __s9param0 == __dep_exact_26a421b704832cff_3.OutpostConst.METROPOL_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isCapitalPlayer = function (__s11param0) {
    return __s11param0 == __dep_exact_26a421b704832cff_3.OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID || __s11param0 == __dep_exact_26a421b704832cff_3.OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID || __s11param0 == __dep_exact_26a421b704832cff_3.OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID || __s11param0 == __dep_exact_26a421b704832cff_3.OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isEmptyMapObjectOwner = function (__s13param0) {
    var __s13local0 = PlayerHelper.isDungeonPlayer(__s13param0);
    return __s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = __s13local0 || PlayerHelper.isOutpostPlayer(__s13param0)) || PlayerHelper.isMetropolPlayer(__s13param0)) || PlayerHelper.isCapitalPlayer(__s13param0)) || PlayerHelper.isKingstowerPlayer(__s13param0)) || PlayerHelper.isMonumentPlayer(__s13param0)) || PlayerHelper.isLaboratoryPlayer(__s13param0)) || PlayerHelper.isMonumentDungeon(__s13param0);
  };
  PlayerHelper.isPlagueMonkPlayer = function (__s15param0) {
    return __s15param0 == __dep_exact_26a421b704832cff_5.SpyConst.PLAGUEMONK_OWNER_ID;
  };
  PlayerHelper.isKingstowerPlayer = function (__s17param0) {
    return __s17param0 == __dep_exact_26a421b704832cff_3.OutpostConst.KINGS_TOWER_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isMonumentPlayer = function (__s19param0) {
    return __s19param0 == __dep_exact_26a421b704832cff_3.OutpostConst.MONUMENT_DEFAULT_OWNER_ID;
  };
  PlayerHelper.isLaboratoryPlayer = function (__s21param0) {
    return __s21param0 == __dep_exact_26a421b704832cff_3.OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID || __s21param0 == __dep_exact_26a421b704832cff_3.OutpostConst.LABORATORY_ICE_OWNER_ID || __s21param0 == __dep_exact_26a421b704832cff_3.OutpostConst.LABORATORY_DESERT_OWNER_ID || __s21param0 == __dep_exact_26a421b704832cff_3.OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
  };
  PlayerHelper.isBossDungeonPlayer = function (__s23param0) {
    return __s23param0 <= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID && __s23param0 >= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_LAST_ID;
  };
  PlayerHelper.isMonumentDungeon = function (__s25param0) {
    return __s25param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_MONUMENT;
  };
  PlayerHelper.isNPCPlayer = function (__s27param0) {
    return __s27param0 < 0;
  };
  PlayerHelper.isAlienInvasion = function (__s29param0) {
    return __s29param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_USER_INVASION || __s29param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION;
  };
  PlayerHelper.isNpcPvpPlayer = function (__s31param0) {
    return PlayerHelper.isAlienInvasion(__s31param0) || PlayerHelper.isCollectorPlayer(__s31param0);
  };
  PlayerHelper.isCollectorPlayer = function (__s33param0) {
    switch (__s33param0) {
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
        return true;
    }
    return false;
  };
  PlayerHelper.isDummyPlayer = function (__s36param0) {
    var __s36local0 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s36param0);
    return !!__s36local0 && __s36local0.isDummy;
  };
  PlayerHelper.isFactionPlayer = function (__s38param0) {
    return __s38param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_FACTION_RED || __s38param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_FACTION_BLUE;
  };
  PlayerHelper.isNomadPlayer = function (__s40param0) {
    return __s40param0 <= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID && __s40param0 >= __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_NOMAD_CAMP_LAST_ID || __s40param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP;
  };
  PlayerHelper.isSamuraiPlayer = function (__s42param0) {
    return __s42param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SAMURAI_INVASION;
  };
  PlayerHelper.isInvasionPlayer = function (__s44param0) {
    return PlayerHelper.isFactionPlayer(__s44param0) || PlayerHelper.isNomadPlayer(__s44param0) || PlayerHelper.isSamuraiPlayer(__s44param0);
  };
  PlayerHelper.isEilandDungeonPlayer = function (__s46param0) {
    return __s46param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_EILAND_DUNGEON;
  };
  PlayerHelper.isEilandVillagePlayer = function (__s48param0) {
    return __s48param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_EILAND_VILLAGE;
  };
  PlayerHelper.getNPCCastleName = function (__s50param0, __s50param1, __s50param2 = 0) {
    var __s50local0 = "";
    if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_EVENT_DUNGEON) {
      __s50local0 = "eventDungeon_castleName_" + __s50param1;
    } else if (PlayerHelper.isMonumentDungeon(__s50param1)) {
      __s50local0 = "monument";
    } else if (PlayerHelper.isDungeonPlayer(__s50param1)) {
      __s50local0 = __s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER ? "dialog_treasureMap_DungeonTooltip" : __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_" + __s50param0);
    } else if (PlayerHelper.isNomadPlayer(__s50param1)) {
      __s50local0 = __s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP ? "kingdom_khanCamp_castleName_" + __s50param0 : "kingdom_nomad_castleName_" + __s50param0;
    } else if (PlayerHelper.isSamuraiPlayer(__s50param1)) {
      __s50local0 = "kingdom_samurai_castleName_" + __s50param0;
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_USER_INVASION) {
      __s50local0 = "alienInvasion_castleName";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION) {
      __s50local0 = "redAlienInvasion_castleName";
    } else if (PlayerHelper.isBossDungeonPlayer(__s50param1)) {
      __s50local0 = "kingdom_bossDungeon_castleName_" + __s50param0;
    } else if (PlayerHelper.isEilandDungeonPlayer(__s50param1)) {
      __s50local0 = "kingdom_dungeon_castleName_" + __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
    } else if (__dep_exact_26a421b704832cff_4.VillageConst.isVillagePlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_VILLAGE || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
      __s50local0 = __s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_EILAND_VILLAGE || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ISLE_RESOURCE ? "kingdom_eiLand_village" : "village";
    } else if (PlayerHelper.isOutpostPlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_OUTPOST) {
      __s50local0 = "outpost";
    } else if (PlayerHelper.isCapitalPlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL) {
      __s50local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("capital");
    } else if (PlayerHelper.isMetropolPlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
      __s50local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("metropol");
    } else if (PlayerHelper.isKingstowerPlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_KINGS_TOWER) {
      __s50local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower");
    } else if (PlayerHelper.isMonumentPlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_MONUMENT) {
      __s50local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("monument");
    } else if (PlayerHelper.isLaboratoryPlayer(__s50param1) || __s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_LABORATORY) {
      __s50local0 = "laboratory";
    } else if (PlayerHelper.isFactionPlayer(__s50param1)) {
      if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAPITAL) {
        __s50local0 = "faction_capital";
      } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_TOWER) {
        __s50local0 = "faction_tower";
      } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
        __s50local0 = "faction_village";
      } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAPITAL) {
        __s50local0 = "faction_capital";
      } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_TOWER) {
        __s50local0 = "faction_tower";
      } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
        __s50local0 = "faction_village";
      } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) {
        __s50local0 = __s50param1 == __dep_exact_26a421b704832cff_2.DungeonConst.BLUE_FACTION_KING ? "dialog_berimondInvasion_blueCamp" : "dialog_berimondInvasion_redCamp";
      }
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_DUNGEON || __s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON || __s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SEEQUEEN_DUNGEON || __s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNDERWORLD_DUNGEON) {
      __s50local0 = "dialog_seasonEvent_2_Dungeon";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_VILLAGE) {
      __s50local0 = "village";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_SEEQUEEN_SHIPS) {
      __s50local0 = "dialog_seasonEvent_4_konvy";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNDERWORLD_VILLAGE) {
      __s50local0 = "dialog_seasonEvent_64_village";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON) {
      __s50local0 = "dialog_treasureMap_DungeonTooltip";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE) {
      __s50local0 = "DaimyoCastle";
    } else if (__s50param1 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP) {
      __s50local0 = "township";
    } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER) {
      __s50local0 = "resourceTower_maya";
    } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_WOLF_KING) {
      __s50local0 = "kingdom_dungeon_castleName_wolfgard";
    } else if (__s50param2 == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ARE_PORTAL) {
      __s50local0 = "dialogue_are_title";
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s50local0);
  };
  PlayerHelper.isFactionInvasionPlayer = function (__s86param0) {
    return __s86param0 == __dep_exact_26a421b704832cff_2.DungeonConst.BLUE_FACTION_KING || __s86param0 == __dep_exact_26a421b704832cff_2.DungeonConst.RED_FACTION_KING;
  };
  return PlayerHelper;
}();
exports.PlayerHelper = __s0local0;
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
