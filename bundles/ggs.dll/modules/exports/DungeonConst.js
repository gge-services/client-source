// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: DungeonConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local26 = function () {
  function DungeonConst() {}
  DungeonConst.COOLDOWN_$LI$ = function () {
    if (DungeonConst.COOLDOWN == null) {
      DungeonConst.COOLDOWN = 10800;
    }
    return DungeonConst.COOLDOWN;
  };
  DungeonConst.getEventDungeonOwnerIDBySkinID = function (__s681param0) {
    switch (__s681param0) {
      case DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING:
        return DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_COW:
        return DungeonConst.APRIL_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
        return DungeonConst.ST_PATRICKS_DAY_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_EASTER:
        return DungeonConst.EASTER_DUNGEON_EVENT_PLAYER_ID;
      default:
        return DungeonConst.INVALID;
    }
  };
  DungeonConst.getEventDungeonDefaultOwnerID = function () {
    return DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
  };
  DungeonConst.getDungeonOwnerID = function (__s686param0, __s686param1) {
    if (__s686param0 === 0) {
      return DungeonConst.DUNGEON_PLAYER_ID - __s686param1;
    } else {
      return DungeonConst.KINGDOM_DUNGEON_PLAYER_ID - (__s686param0 - 1);
    }
  };
  DungeonConst.getBossDungeonOwnerID = function (__s690param0) {
    return DungeonConst.KINGDOM_BOSS_DUNGEON_PLAYER_ID - (__s690param0 - 1);
  };
  DungeonConst.getLevel = function (__s692param0, __s692param1) {
    var __s692local0 = DungeonConst.getKingdomOffset(__s692param1);
    return (Math.floor(DungeonConst.FACTOR_VICTORY_LEVEL * Math.pow(Math.abs(__s692param0), DungeonConst.POWER_VICTORY_LEVEL)) | 0) + __s692local0;
  };
  DungeonConst.getSkipCost = function (__s694param0, __s694param1) {
    return Math.max(1, (__s694param0 * __s694param1 / 180 | 0) / 60 | 0);
  };
  DungeonConst.getVictories = function (__s696param0, __s696param1) {
    var __s696local0 = DungeonConst.getKingdomOffset(__s696param1);
    return Math.floor(Math.pow((__s696param0 - __s696local0 + 1) / DungeonConst.FACTOR_VICTORY_LEVEL, 1 / DungeonConst.POWER_VICTORY_LEVEL)) | 0;
  };
  DungeonConst.getKingdomOffset = function (__s698param0) {
    var __s698local0 = 0;
    switch (__s698param0) {
      case 0:
        __s698local0 = 1;
        break;
      case 2:
        __s698local0 = 20;
        break;
      case 1:
        __s698local0 = 35;
        break;
      case 3:
        __s698local0 = 45;
    }
    return __s698local0;
  };
  DungeonConst.getResources = function (__s701param0) {
    return Math.pow(__s701param0, 2.2) * 1.2 + 90 | 0;
  };
  DungeonConst.getC1 = function (__s703param0) {
    if (__s703param0 >= 61) {
      return Math.pow(__s703param0, 1.1) * 210 | 0;
    } else {
      return Math.pow(__s703param0, 2.1) * 3.5 + 25 | 0;
    }
  };
  DungeonConst.getC2 = function (__s707param0) {
    return Math.max(0, (Math.random() * 11 - 5 + __s707param0 * 0.5 + 0.7) * 0.5) | 0;
  };
  DungeonConst.getC2Probability = function (__s709param0) {
    if (__s709param0 >= 3) {
      return 50;
    } else {
      return 0;
    }
  };
  DungeonConst.getWallUpgradeByLevel = function (__s713param0) {
    if (__s713param0 < 11) {
      return 1;
    } else if (__s713param0 < 24) {
      return 2;
    } else {
      return 3;
    }
  };
  DungeonConst.getWallWOD = function (__s718param0) {
    if (__s718param0 < 11) {
      return 501;
    } else if (__s718param0 < 24) {
      return 502;
    } else {
      return 503;
    }
  };
  DungeonConst.getGateWOD = function (__s723param0) {
    if (__s723param0 < 11) {
      return 450;
    } else if (__s723param0 < 24) {
      return 451;
    } else {
      return 452;
    }
  };
  DungeonConst.getGuards = function (__s728param0, __s728param1) {
    var __s728local0 = DungeonConst.getLevel(__s728param0, __s728param1);
    return Math.max(0, Math.min(50, Math.round((__s728local0 - 4) * 0.06 * (__s728local0 - 4) + (__s728local0 - 4) * 0.5)));
  };
  return DungeonConst;
}();
__s0local26.DUNGEON_PLAYER_ID = -202;
__s0local26.DUNGEON_PLAYER_NAME_COUNT = 13;
__s0local26.KINGDOM_DUNGEON_PLAYER_ID = -220;
__s0local26.KINGDOM_BOSS_DUNGEON_PLAYER_ID = -230;
__s0local26.BLUE_FACTION_KING = -410;
__s0local26.RED_FACTION_KING = -411;
__s0local26.RANDOM_DUNGEON_EVENT_PLAYER_ID = -500;
__s0local26.APRIL_DUNGEON_EVENT_PLAYER_ID = -501;
__s0local26.ST_PATRICKS_DAY_DUNGEON_EVENT_PLAYER_ID = -502;
__s0local26.EASTER_DUNGEON_EVENT_PLAYER_ID = -503;
__s0local26.RANDOM_DUNGEON_MAX_GUARDS = 50;
__s0local26.BASIC_NOMAD_CAMP_PLAYER_ID = -601;
__s0local26.BASIC_SAMURAI_CAMP_PLAYER_ID = -651;
__s0local26.BASIC_INVASION_CAMP_PLAYER_ID = -701;
__s0local26.BASIC_ALIEN_ID = -1000;
__s0local26.BASIC_SAMURAI_ALIEN_ID = -1001;
__s0local26.BASIC_RED_ALIEN_ID = -1002;
__s0local26.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID = -801;
__s0local26.BASIC_DAIMYO_CASTLE_PLAYER_ID = -811;
__s0local26.BASIC_DAIMYO_TOWNSHIP_PLAYER_ID = -815;
__s0local26.BASIC_COLLECTOR_PLAYER_ID = -1100;
__s0local26.BASIC_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_PLAYER_ID = -1200;
__s0local26.BASIC_WOLF_KING_PLAYER_ID = -1201;
__s0local26.BASIC_ARE_PORTAL_PLAYER_ID = -1202;
__s0local26.DUNGEON_SKIN_ROBBER_BARON_KING = 1;
__s0local26.DUNGEON_SKIN_COW = 2;
__s0local26.DUNGEON_SKIN_ST_PATRICKS_DAY = 3;
__s0local26.DUNGEON_SKIN_EASTER = 4;
__s0local26.NOMAD_CAMP_COUNT = 4;
__s0local26.MESSAGE_FAKE_TUTORIAL_BATTLELOG_PID = -2;
__s0local26.DUNGEON_DELETION_CLASSIC_FACTOR = 1;
__s0local26.DUNGEON_DELETION_ICE_FACTOR = 2.2;
__s0local26.DUNGEON_DELETION_DESERT_FACTOR = 3.5;
__s0local26.DUNGEON_DELETION_VULCAN_FACTOR = 4;
__s0local26.NO_LOW_LEVEL_DUNGEON_ATTACK = false;
__s0local26.RAID_BOSS_DEFENDER_LEVEL = 120;
__s0local26.FACTOR_VICTORY_LEVEL = 1.9;
__s0local26.POWER_VICTORY_LEVEL = 0.555;
__s0local26.INVALID = -1;
exports.DungeonConst = __s0local26;
__s0local26.__class = "DungeonConst";
__s0local26.COOLDOWN_$LI$();
