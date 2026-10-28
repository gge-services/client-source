import { CastleModel } from "./CastleModel";
import { ClientConstNPCs } from "./ClientConstNPCs";
import { DungeonConst } from "../../../ggs.dll/reconstructed/exports/DungeonConst";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { OutpostConst } from "../../../ggs.dll/reconstructed/exports/OutpostConst";
import { SpecialServerHelper } from "./SpecialServerHelper";
import { SpyConst } from "../../../ggs.dll/reconstructed/exports/SpyConst";
import { VillageConst } from "../../../ggs.dll/reconstructed/exports/VillageConst";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
import { WorldIsland } from "../../../ggs.dll/reconstructed/exports/WorldIsland";
export class PlayerHelper {
  static isDungeonPlayer(argument0) {
    return argument0 <= ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID && argument0 >= ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_LAST_ID || argument0 <= ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_FIRST_ID && argument0 >= ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_LAST_ID;
  }
  static isOutpostPlayer(argument0) {
    return argument0 == OutpostConst.OUTPOST_DEFAULT_OWNER_ID;
  }
  static isMetropolPlayer(argument0) {
    return argument0 == OutpostConst.METROPOL_DEFAULT_OWNER_ID;
  }
  static isCapitalPlayer(argument0) {
    return argument0 == OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID || argument0 == OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID || argument0 == OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID || argument0 == OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
  }
  static isEmptyMapObjectOwner(argument0) {
    var __s13local0 = PlayerHelper.isDungeonPlayer(argument0);
    return __s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = (__s13local0 = __s13local0 || PlayerHelper.isOutpostPlayer(argument0)) || PlayerHelper.isMetropolPlayer(argument0)) || PlayerHelper.isCapitalPlayer(argument0)) || PlayerHelper.isKingstowerPlayer(argument0)) || PlayerHelper.isMonumentPlayer(argument0)) || PlayerHelper.isLaboratoryPlayer(argument0)) || PlayerHelper.isMonumentDungeon(argument0);
  }
  static isPlagueMonkPlayer(argument0) {
    return argument0 == SpyConst.PLAGUEMONK_OWNER_ID;
  }
  static isKingstowerPlayer(argument0) {
    return argument0 == OutpostConst.KINGS_TOWER_DEFAULT_OWNER_ID;
  }
  static isMonumentPlayer(argument0) {
    return argument0 == OutpostConst.MONUMENT_DEFAULT_OWNER_ID;
  }
  static isLaboratoryPlayer(argument0) {
    return argument0 == OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID || argument0 == OutpostConst.LABORATORY_ICE_OWNER_ID || argument0 == OutpostConst.LABORATORY_DESERT_OWNER_ID || argument0 == OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
  }
  static isBossDungeonPlayer(argument0) {
    return argument0 <= ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID && argument0 >= ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_LAST_ID;
  }
  static isMonumentDungeon(argument0) {
    return argument0 == ClientConstNPCs.NPC_ID_MONUMENT;
  }
  static isNPCPlayer(argument0) {
    return argument0 < 0;
  }
  static isAlienInvasion(argument0) {
    return argument0 == ClientConstNPCs.NPC_ID_USER_INVASION || argument0 == ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION;
  }
  static isNpcPvpPlayer(argument0) {
    return PlayerHelper.isAlienInvasion(argument0) || PlayerHelper.isCollectorPlayer(argument0);
  }
  static isCollectorPlayer(argument0) {
    switch (argument0) {
      case ClientConstNPCs.NPC_ID_COLLECTOR_CARNIVAL:
      case ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS:
      case ClientConstNPCs.NPC_ID_COLLECTOR_CHRISTMAS2:
      case ClientConstNPCs.NPC_ID_COLLECTOR_SUMMER:
      case ClientConstNPCs.NPC_ID_COLLECTOR_10TH_ANNIVERSARY:
      case ClientConstNPCs.NPC_ID_COLLECTOR_ELEMENTAL:
      case ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN:
      case ClientConstNPCs.NPC_ID_COLLECTOR_HALLOWEEN2:
      case ClientConstNPCs.NPC_ID_COLLECTOR_SPRING:
        return true;
    }
    return false;
  }
  static isDummyPlayer(argument0) {
    var __s36local0 = CastleModel.otherPlayerData.getOwnerInfoVO(argument0);
    return !!__s36local0 && __s36local0.isDummy;
  }
  static isFactionPlayer(argument0) {
    return argument0 == ClientConstNPCs.NPC_ID_FACTION_RED || argument0 == ClientConstNPCs.NPC_ID_FACTION_BLUE;
  }
  static isNomadPlayer(argument0) {
    return argument0 <= ClientConstNPCs.NPC_ID_NOMAD_CAMP_FIRST_ID && argument0 >= ClientConstNPCs.NPC_ID_NOMAD_CAMP_LAST_ID || argument0 == ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP;
  }
  static isSamuraiPlayer(argument0) {
    return argument0 == ClientConstNPCs.NPC_ID_SAMURAI_INVASION;
  }
  static isInvasionPlayer(argument0) {
    return PlayerHelper.isFactionPlayer(argument0) || PlayerHelper.isNomadPlayer(argument0) || PlayerHelper.isSamuraiPlayer(argument0);
  }
  static isEilandDungeonPlayer(argument0) {
    return argument0 == ClientConstNPCs.NPC_ID_EILAND_DUNGEON;
  }
  static isEilandVillagePlayer(argument0) {
    return argument0 == ClientConstNPCs.NPC_ID_EILAND_VILLAGE;
  }
  static getNPCCastleName(argument0, argument1, argument2 = 0) {
    var __s50local0 = "";
    if (argument2 == WorldConst.AREA_TYPE_EVENT_DUNGEON) {
      __s50local0 = "eventDungeon_castleName_" + argument1;
    } else if (PlayerHelper.isMonumentDungeon(argument1)) {
      __s50local0 = "monument";
    } else if (PlayerHelper.isDungeonPlayer(argument1)) {
      __s50local0 = argument1 == ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER ? "dialog_treasureMap_DungeonTooltip" : SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_" + argument0);
    } else if (PlayerHelper.isNomadPlayer(argument1)) {
      __s50local0 = argument1 == ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP ? "kingdom_khanCamp_castleName_" + argument0 : "kingdom_nomad_castleName_" + argument0;
    } else if (PlayerHelper.isSamuraiPlayer(argument1)) {
      __s50local0 = "kingdom_samurai_castleName_" + argument0;
    } else if (argument1 == ClientConstNPCs.NPC_ID_USER_INVASION) {
      __s50local0 = "alienInvasion_castleName";
    } else if (argument1 == ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION) {
      __s50local0 = "redAlienInvasion_castleName";
    } else if (PlayerHelper.isBossDungeonPlayer(argument1)) {
      __s50local0 = "kingdom_bossDungeon_castleName_" + argument0;
    } else if (PlayerHelper.isEilandDungeonPlayer(argument1)) {
      __s50local0 = "kingdom_dungeon_castleName_" + WorldIsland.KINGDOM_ID;
    } else if (VillageConst.isVillagePlayer(argument1) || argument2 == WorldConst.AREA_TYPE_VILLAGE || argument2 == WorldConst.AREA_TYPE_ISLE_RESOURCE) {
      __s50local0 = argument1 == ClientConstNPCs.NPC_ID_EILAND_VILLAGE || argument2 == WorldConst.AREA_TYPE_ISLE_RESOURCE ? "kingdom_eiLand_village" : "village";
    } else if (PlayerHelper.isOutpostPlayer(argument1) || argument2 == WorldConst.AREA_TYPE_OUTPOST) {
      __s50local0 = "outpost";
    } else if (PlayerHelper.isCapitalPlayer(argument1) || argument2 == WorldConst.AREA_TYPE_CAPITAL) {
      __s50local0 = SpecialServerHelper.checkTextIDForSkinText("capital");
    } else if (PlayerHelper.isMetropolPlayer(argument1) || argument2 == WorldConst.AREA_TYPE_METROPOL) {
      __s50local0 = SpecialServerHelper.checkTextIDForSkinText("metropol");
    } else if (PlayerHelper.isKingstowerPlayer(argument1) || argument2 == WorldConst.AREA_TYPE_KINGS_TOWER) {
      __s50local0 = SpecialServerHelper.checkTextIDForSkinText("kingstower");
    } else if (PlayerHelper.isMonumentPlayer(argument1) || argument2 == WorldConst.AREA_TYPE_MONUMENT) {
      __s50local0 = SpecialServerHelper.checkTextIDForSkinText("monument");
    } else if (PlayerHelper.isLaboratoryPlayer(argument1) || argument2 == WorldConst.AREA_TYPE_LABORATORY) {
      __s50local0 = "laboratory";
    } else if (PlayerHelper.isFactionPlayer(argument1)) {
      if (argument2 == WorldConst.AREA_TYPE_FACTION_CAPITAL) {
        __s50local0 = "faction_capital";
      } else if (argument2 == WorldConst.AREA_TYPE_FACTION_TOWER) {
        __s50local0 = "faction_tower";
      } else if (argument2 == WorldConst.AREA_TYPE_FACTION_VILLAGE) {
        __s50local0 = "faction_village";
      } else if (argument2 == WorldConst.AREA_TYPE_FACTION_CAPITAL) {
        __s50local0 = "faction_capital";
      } else if (argument2 == WorldConst.AREA_TYPE_FACTION_TOWER) {
        __s50local0 = "faction_tower";
      } else if (argument2 == WorldConst.AREA_TYPE_FACTION_VILLAGE) {
        __s50local0 = "faction_village";
      } else if (argument2 == WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) {
        __s50local0 = argument1 == DungeonConst.BLUE_FACTION_KING ? "dialog_berimondInvasion_blueCamp" : "dialog_berimondInvasion_redCamp";
      }
    } else if (argument1 == ClientConstNPCs.NPC_ID_THORNKING_DUNGEON || argument1 == ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON || argument1 == ClientConstNPCs.NPC_ID_SEEQUEEN_DUNGEON || argument1 == ClientConstNPCs.NPC_ID_UNDERWORLD_DUNGEON) {
      __s50local0 = "dialog_seasonEvent_2_Dungeon";
    } else if (argument1 == ClientConstNPCs.NPC_ID_THORNKING_VILLAGE) {
      __s50local0 = "village";
    } else if (argument1 == ClientConstNPCs.NPC_ID_SEEQUEEN_SHIPS) {
      __s50local0 = "dialog_seasonEvent_4_konvy";
    } else if (argument1 == ClientConstNPCs.NPC_ID_UNDERWORLD_VILLAGE) {
      __s50local0 = "dialog_seasonEvent_64_village";
    } else if (argument1 == ClientConstNPCs.NPC_ID_TREASURE_HUNT_DUNGEON) {
      __s50local0 = "dialog_treasureMap_DungeonTooltip";
    } else if (argument1 == ClientConstNPCs.NPC_ID_DAIMYO_CASTLE) {
      __s50local0 = "DaimyoCastle";
    } else if (argument1 == ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP) {
      __s50local0 = "township";
    } else if (argument2 == WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER) {
      __s50local0 = "resourceTower_maya";
    } else if (argument2 == WorldConst.AREA_TYPE_WOLF_KING) {
      __s50local0 = "kingdom_dungeon_castleName_wolfgard";
    } else if (argument2 == WorldConst.AREA_TYPE_ARE_PORTAL) {
      __s50local0 = "dialogue_are_title";
    }
    return Localize.text(__s50local0);
  }
  static isFactionInvasionPlayer(argument0) {
    return argument0 == DungeonConst.BLUE_FACTION_KING || argument0 == DungeonConst.RED_FACTION_KING;
  }
}
