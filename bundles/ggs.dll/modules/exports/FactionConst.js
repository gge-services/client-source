// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: FactionConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local32 = function () {
  function FactionConst() {}
  FactionConst.FACTIONS_$LI$ = function () {
    if (FactionConst.FACTIONS == null) {
      FactionConst.FACTIONS = [FactionConst.BLUE_FACTION, FactionConst.RED_FACTION];
    }
    return FactionConst.FACTIONS;
  };
  FactionConst.TOWER_COOLDOWN_$LI$ = function () {
    if (FactionConst.TOWER_COOLDOWN == null) {
      FactionConst.TOWER_COOLDOWN = 10800;
    }
    return FactionConst.TOWER_COOLDOWN;
  };
  FactionConst.VILLAGE_COOLDOWN_$LI$ = function () {
    if (FactionConst.VILLAGE_COOLDOWN == null) {
      FactionConst.VILLAGE_COOLDOWN = 86400;
    }
    return FactionConst.VILLAGE_COOLDOWN;
  };
  FactionConst.TITLE_RESET_INTERVAL_SECONDS_$LI$ = function () {
    if (FactionConst.TITLE_RESET_INTERVAL_SECONDS == null) {
      FactionConst.TITLE_RESET_INTERVAL_SECONDS = 14400;
    }
    return FactionConst.TITLE_RESET_INTERVAL_SECONDS;
  };
  FactionConst.getOppositeFactionID = function (__s933param0) {
    if (__s933param0 === FactionConst.BLUE_FACTION) {
      return FactionConst.RED_FACTION;
    } else {
      return FactionConst.BLUE_FACTION;
    }
  };
  FactionConst.getMapWidth = function () {
    return __s0local105.SECTOR_WIDTH * FactionConst.MAP_WIDTH_IN_SECTORS;
  };
  FactionConst.getMapHeight = function () {
    return __s0local105.SECTOR_HEIGHT * FactionConst.MAP_HEIGHT_IN_SECTORS;
  };
  FactionConst.getSectorSeed = function (__s941param0, __s941param1, __s941param2) {
    return __s941param0 + __s941param1 * 15 + __s941param2 * 31;
  };
  FactionConst.inSector = function (__s943param0, __s943param1, __s943param2) {
    var __s943local0 = __s943param2[0];
    var __s943local1 = __s943param2[1];
    var __s943local2 = __s943param0 * FactionConst.SECTOR_WIDTH_IN_CAMPS;
    var __s943local3 = __s943param1 * FactionConst.SECTOR_HEIGHT_IN_CAMPS;
    return __s943local2 <= __s943local0 && __s943local0 < __s943local2 + FactionConst.SECTOR_WIDTH_IN_CAMPS && __s943local3 <= __s943local1 && __s943local1 < __s943local3 + FactionConst.SECTOR_HEIGHT_IN_CAMPS;
  };
  FactionConst.upperLeftWorldXFromAbsoluteCampX = function (__s945param0) {
    var __s945local0 = __s945param0 / FactionConst.SECTOR_WIDTH_IN_CAMPS | 0;
    var __s945local1 = __s945param0 % FactionConst.SECTOR_WIDTH_IN_CAMPS;
    return __s945local0 * __s0local105.SECTOR_WIDTH + __s945local1 * FactionConst.CAMP_SPOT_WIDTH;
  };
  FactionConst.upperLeftWorldYFromAbsoluteCampY = function (__s947param0) {
    var __s947local0 = __s947param0 / FactionConst.SECTOR_HEIGHT_IN_CAMPS | 0;
    var __s947local1 = __s947param0 % FactionConst.SECTOR_HEIGHT_IN_CAMPS;
    return __s947local0 * __s0local105.SECTOR_HEIGHT + __s947local1 * FactionConst.CAMP_SPOT_HEIGHT;
  };
  FactionConst.getMoraleModifier = function (__s949param0) {
    if (__s949param0 >= 0) {
      return 2 - 1 / (1 + Math.abs(__s949param0) / 200);
    } else {
      return 1 / (1 + Math.abs(__s949param0) / 200);
    }
  };
  FactionConst.getPeaceHeatup = function (__s953param0) {
    if (__s953param0) {
      return 300;
    } else {
      return 43200;
    }
  };
  FactionConst.getPeaceDuration = function (__s957param0) {
    if (__s957param0) {
      return 600;
    } else {
      return 216000;
    }
  };
  FactionConst.getPeaceCooldown = function (__s961param0) {
    if (__s961param0) {
      return 300;
    } else {
      return 345600;
    }
  };
  FactionConst.getPeaceC2Cost = function () {
    return 7500;
  };
  FactionConst.getMoraleBoostFromFactionStrength = function (__s967param0) {
    if (__s967param0 <= 0.49) {
      return Math.round(Math.min(0.75, __s967param0 * -13 + 6.5) * 100);
    } else {
      return 0;
    }
  };
  FactionConst.getCostReductionBonus = function (__s971param0) {
    if (__s971param0 <= 0.49) {
      return Math.round(Math.min(0.5, __s971param0 * -10 + 5) * 100) / 100;
    } else {
      return 0;
    }
  };
  FactionConst.getIndexOfFactionID = function (__s975param0) {
    for (var __s975local0 = 0; __s975local0 < FactionConst.FACTIONS_$LI$().length; __s975local0++) {
      if (FactionConst.FACTIONS_$LI$()[__s975local0] === __s975param0) {
        return __s975local0;
      }
    }
    return -1;
  };
  FactionConst.getNPCFactionID = function (__s980param0) {
    switch (__s980param0) {
      case __s0local26.BLUE_FACTION_KING:
        return FactionConst.BLUE_FACTION;
      case __s0local26.RED_FACTION_KING:
        return FactionConst.RED_FACTION;
      default:
        return -1;
    }
  };
  FactionConst.getNpcPID = function (__s983param0) {
    switch (__s983param0) {
      case FactionConst.BLUE_FACTION:
        return __s0local26.BLUE_FACTION_KING;
      case FactionConst.RED_FACTION:
        return __s0local26.RED_FACTION_KING;
      default:
        return -1;
    }
  };
  return FactionConst;
}();
__s0local32.KINGDOM_ID = 10;
__s0local32.MAP_WIDTH_IN_SECTORS = 200;
__s0local32.MAP_HEIGHT_IN_SECTORS = 10;
__s0local32.SECTOR_WIDTH_IN_CAMPS = 4;
__s0local32.SECTOR_HEIGHT_IN_CAMPS = 6;
__s0local32.CAMP_SPOT_WIDTH = 3;
__s0local32.CAMP_SPOT_HEIGHT = 2;
__s0local32.BLUE_FACTION = 0;
__s0local32.RED_FACTION = 1;
__s0local32.VILLAGE_POINTS = 5;
__s0local32.TOWER_POINTS = 15;
__s0local32.CAPITAL_POINTS = 30;
__s0local32.BURNING_BUILDING_MORAL = 10;
__s0local32.BERIMOND_ADVISOR_MORALE = 200;
__s0local32.START_GATE_WOD = 238;
__s0local32.START_MAINTENT_WOD = 233;
__s0local32.START_WALL_WOD = 234;
__s0local32.START_TOWER_WOD = 272;
__s0local32.START_WOOD = 3000;
__s0local32.START_FOOD = 3000;
__s0local32.START_STONE = 3000;
__s0local32.TOWER_COOLDOWN_TEST = 60;
__s0local32.VILLAGE_COOLDOWN_TEST = 60;
__s0local32.BARON_ID = -16;
__s0local32.DESTROYED_OCCUPIER_PLAYER_ID = -415;
__s0local32.TOP_X = 100;
__s0local32.MAJORITY_CAP = 1.2;
__s0local32.FACTION_PROTECTION_STATUS_OFF = -1;
__s0local32.FACTION_PROTECTION_STATUS_PRETIME = 0;
__s0local32.FACTION_PROTECTION_STATUS_ACTIVE = 1;
__s0local32.FACTION_PROTECTION_STATUS_COOLDOWN = 2;
__s0local32.FACTION_ACTIVE_THRESHOLD = 250;
exports.FactionConst = __s0local32;
__s0local32.__class = "FactionConst";
__s0local32.TITLE_RESET_INTERVAL_SECONDS_$LI$();
__s0local32.VILLAGE_COOLDOWN_$LI$();
__s0local32.TOWER_COOLDOWN_$LI$();
__s0local32.FACTIONS_$LI$();
