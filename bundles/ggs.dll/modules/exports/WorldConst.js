// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: WorldConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local105 = function () {
  function WorldConst() {}
  WorldConst.ALIEN_CAMP_AREA_TYPES_$LI$ = function () {
    if (WorldConst.ALIEN_CAMP_AREA_TYPES == null) {
      WorldConst.ALIEN_CAMP_AREA_TYPES = [WorldConst.AREA_TYPE_ALIEN_CAMP, WorldConst.AREA_TYPE_RED_ALIEN_CAMP];
    }
    return WorldConst.ALIEN_CAMP_AREA_TYPES;
  };
  WorldConst.OUTPOST_TYPE_LIST_$LI$ = function () {
    if (WorldConst.OUTPOST_TYPE_LIST == null) {
      WorldConst.OUTPOST_TYPE_LIST = [[2, 0, 1, 8, 0, 2], [2, 0, 1, 6, 0, 2], [0, 2, 1, 0, 8, 2], [0, 2, 1, 0, 6, 2], [1, 0, 2, 2, 0, 8], [1, 0, 2, 2, 0, 6], [0, 1, 2, 0, 2, 8], [0, 1, 2, 0, 2, 6]];
    }
    return WorldConst.OUTPOST_TYPE_LIST;
  };
  WorldConst.WORLD_IDS_$LI$ = function () {
    if (WorldConst.WORLD_IDS == null) {
      WorldConst.WORLD_IDS = [__s0local100.KINGDOM_ID, __s0local106.KINGDOM_ID, __s0local107.KINGDOM_ID, __s0local110.KINGDOM_ID, __s0local108.KINGDOM_ID, __s0local32.KINGDOM_ID];
    }
    return WorldConst.WORLD_IDS;
  };
  WorldConst.getSectorCountX = function (__s2068param0) {
    if (__s2068param0) {
      return WorldConst.SECTOR_COUNT_ON_TEST;
    } else {
      return WorldConst.SECTOR_COUNT;
    }
  };
  WorldConst.getSectorCountY = function (__s2072param0) {
    return WorldConst.getSectorCountX(__s2072param0);
  };
  WorldConst.getSectorCount = function (__s2074param0) {
    return WorldConst.getSectorCountX(__s2074param0) * WorldConst.getSectorCountY(__s2074param0);
  };
  WorldConst.isLaboratoryKingdom = function (__s2076param0) {
    return __s0local100.KINGDOM_ID === __s2076param0 || __s0local107.KINGDOM_ID === __s2076param0 || __s0local106.KINGDOM_ID === __s2076param0 || __s0local110.KINGDOM_ID === __s2076param0;
  };
  return WorldConst;
}();
__s0local105.SECTOR_WIDTH = 13;
__s0local105.SECTOR_HEIGHT = 13;
__s0local105.AREA_TYPE_EMPTY = 0;
__s0local105.AREA_TYPE_CASTLE = 1;
__s0local105.AREA_TYPE_DUNGEON = 2;
__s0local105.AREA_TYPE_CAPITAL = 3;
__s0local105.AREA_TYPE_OUTPOST = 4;
__s0local105.AREA_TYPE_TREASURE_DUNGEON = 7;
__s0local105.AREA_TYPE_TREASURE_CAMP = 8;
__s0local105.AREA_TYPE_SHADOW_AREA = 9;
__s0local105.AREA_TYPE_VILLAGE = 10;
__s0local105.AREA_TYPE_BOSS_DUNGEON = 11;
__s0local105.AREA_TYPE_KINGDOM_CASTLE = 12;
__s0local105.AREA_TYPE_EVENT_DUNGEON = 13;
__s0local105.AREA_TYPE_NO_LANDMARK = 14;
__s0local105.AREA_TYPE_FACTION_CAMP = 15;
__s0local105.AREA_TYPE_FACTION_VILLAGE = 16;
__s0local105.AREA_TYPE_FACTION_TOWER = 17;
__s0local105.AREA_TYPE_FACTION_CAPITAL = 18;
__s0local105.AREA_TYPE_PLAGUE_AREA = 19;
__s0local105.AREA_TYPE_TROOP_HOSTEL = 20;
__s0local105.AREA_TYPE_ALIEN_CAMP = 21;
__s0local105.AREA_TYPE_METROPOL = 22;
__s0local105.AREA_TYPE_KINGS_TOWER = 23;
__s0local105.AREA_TYPE_ISLE_RESOURCE = 24;
__s0local105.AREA_TYPE_ISLE_DUNGEON = 25;
__s0local105.AREA_TYPE_MONUMENT = 26;
__s0local105.AREA_TYPE_NOMAD_CAMP = 27;
__s0local105.AREA_TYPE_LABORATORY = 28;
__s0local105.AREA_TYPE_SAMURAI_CAMP = 29;
__s0local105.AREA_TYPE_FACTION_INVASION_CAMP = 30;
__s0local105.AREA_TYPE_DYNAMIC = 31;
__s0local105.AREA_TYPE_SAMURAI_ALIEN_CAMP = 33;
__s0local105.AREA_TYPE_RED_ALIEN_CAMP = 34;
__s0local105.AREA_TYPE_ALLIANCE_NOMAD_CAMP = 35;
__s0local105.AREA_TYPE_DAIMYO_CASTLE = 37;
__s0local105.AREA_TYPE_DAIMYO_TOWNSHIP = 38;
__s0local105.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER = 40;
__s0local105.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER = 41;
__s0local105.AREA_TYPE_WOLF_KING = 42;
__s0local105.AREA_TYPE_ARE_PORTAL = 43;
__s0local105.AREA_TYPE_NO_OUTPOST = 99;
__s0local105.VILLAGE_TYPE_WOOD = 0;
__s0local105.VILLAGE_TYPE_STONE = 1;
__s0local105.VILLAGE_TYPE_FOOD = 2;
__s0local105.VILLAGE_TYPE_AQUAMARINE = 3;
__s0local105.VILLAGE_TYPE_WOOD_NON_PREMIUM = 4;
__s0local105.VILLAGE_TYPE_STONE_NON_PREMIUM = 5;
__s0local105.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM = 6;
__s0local105.VILLAGE_TYPE_COAL = 7;
__s0local105.VILLAGE_TYPE_OIL = 8;
__s0local105.VILLAGE_TYPE_GLASS = 9;
__s0local105.VILLAGE_TYPE_IRON = 10;
__s0local105.MONUMENT_TYPE_SMALL = 0;
__s0local105.MONUMENT_TYPE_BIG = 1;
__s0local105.LOOKUP_MAP_SIZE = 39;
__s0local105.CAPITAL_RANDOM_POS_OFFSET_XY1 = 5;
__s0local105.CAPITAL_RANDOM_POS_OFFSET_XY2 = 8;
__s0local105.SEED_VALUE_1 = 7;
__s0local105.SEED_VALUE_2 = 923;
__s0local105.CASTLES_PER_SECTOR = 14;
__s0local105.ALIEN_CAMPS_PER_SECTOR = 4;
__s0local105.NOMAD_CAMPS_PER_SECTOR = 4;
__s0local105.SAMURAI_CAMPS_PER_SECTOR = 4;
__s0local105.RED_FACTION_INVASION_CAMPS_PER_SECTOR = 5;
__s0local105.BLUE_FACTION_INVASION_CAMPS_PER_SECTOR = 5;
__s0local105.DAIMYO_CASTLES_PER_SECTOR = 2;
__s0local105.DAIMYO_TOWNSHIPS_PER_SECTOR = 2;
__s0local105.ARE_PORTALS_PER_SECTOR = 1;
__s0local105.ALLIANCE_NOMAD_CAMPS_PER_SECTOR = 1;
__s0local105.ALLIANCE_SAMURAI_CAMPS_PER_SECTOR = 0;
__s0local105.BLUE_ALLIANCE_FACTION_INVASION_CAMPS_PER_SECTOR = 0;
__s0local105.RED_ALLIANCE_FACTION_INVASION_CAMPS_PER_SECTOR = 0;
__s0local105.ZERO_ALLIANCE_CAMPS_PER_SECTOR = 0;
__s0local105.SECTOR_COUNT = 99;
__s0local105.SECTOR_COUNT_ON_TEST = 9;
__s0local105.AREA_ID_DYNAMIC_WORLDMAPOBJECT = -1;
exports.WorldConst = __s0local105;
__s0local105.__class = "WorldConst";
__s0local105.WORLD_IDS_$LI$();
__s0local105.OUTPOST_TYPE_LIST_$LI$();
__s0local105.ALIEN_CAMP_AREA_TYPES_$LI$();
