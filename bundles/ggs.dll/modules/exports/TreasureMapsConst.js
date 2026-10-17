// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: TreasureMapsConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local93 = function () {
  function TreasureMapsConst() {}
  TreasureMapsConst.CRUSADE_MAP_IDS_$LI$ = function () {
    if (TreasureMapsConst.CRUSADE_MAP_IDS == null) {
      TreasureMapsConst.CRUSADE_MAP_IDS = [TreasureMapsConst.MAP_ID_THORNKING_EASY, TreasureMapsConst.MAP_ID_THORNKING_HARD, TreasureMapsConst.MAP_ID_SEAQUEEN_EASY, TreasureMapsConst.MAP_ID_SEAQUEEN_HARD, TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD, TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, TreasureMapsConst.MAP_ID_UNDERWORLD_HARD];
    }
    return TreasureMapsConst.CRUSADE_MAP_IDS;
  };
  TreasureMapsConst.STAGED_CRUSADE_MAPS_$LI$ = function () {
    if (TreasureMapsConst.STAGED_CRUSADE_MAPS == null) {
      TreasureMapsConst.STAGED_CRUSADE_MAPS = [TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, TreasureMapsConst.MAP_ID_THORNKING_EASY];
    }
    return TreasureMapsConst.STAGED_CRUSADE_MAPS;
  };
  TreasureMapsConst.getTreasureMapDropChance = function (__s1866param0, __s1866param1, __s1866param2) {
    if (__s1866param1 === TreasureMapsConst.FIRST_MAP_ID) {
      return 0.5;
    }
    var __s1866local0 = (Math.pow(__s1866param0 - __s1866param2, 3) / 100 + 8) * 4 + __s1866param0 * 0.1;
    return Math.round(Math.min(80, Math.max(5, __s1866local0))) / 100;
  };
  return TreasureMapsConst;
}();
__s0local93.FIRST_MAP_ID = 50;
__s0local93.PROGRESS_NONE = 0;
__s0local93.PROGRESS_FOUND_MAP_PIECE = 1;
__s0local93.PROGRESS_DESTROYED_DUNGEON = 2;
__s0local93.PROGRESS_NEW_MAP = 3;
__s0local93.PROGRESS_DESTROYED_END_NODE = 4;
__s0local93.MIN_LEVEL_FOR_FINDING_PIECES = 6;
__s0local93.TRAVEL_BOOST_ARMY = 2;
__s0local93.MAP_ID_THORNKING_EASY = 21;
__s0local93.MAP_ID_THORNKING_HARD = 25;
__s0local93.MAP_ID_SEAQUEEN_EASY = 22;
__s0local93.MAP_ID_SEAQUEEN_HARD = 27;
__s0local93.MAP_ID_SEAQUEEN_EXTRA_HARD = 28;
__s0local93.MAP_ID_UNDERWORLD_EASY = 23;
__s0local93.MAP_ID_UNDERWORLD_HARD = 24;
__s0local93.LOWLEVEL_UNDERWORLD_START_LEVEL = 10;
__s0local93.LOWLEVEL_UNDERWORLD_STOP_LEVEL = 22;
__s0local93.LOWLEVEL_UNDERWORLD_WARN_LEVEL = 29;
__s0local93.LOWLEVEL_UNDERWORLD_KILL_LEVEL = 30;
__s0local93.NODE_ID_HIDDEN_COW_DUNGEON = 165;
__s0local93.NODE_ID_KRAKEN = 206;
__s0local93.NODE_ID_THORNKING = 164;
__s0local93.MAP_TYPE_CRUSADE = 0;
__s0local93.MAP_TYPE_TREASURE_HUNT = 1;
__s0local93.MAP_TYPE_CRUSADE_TIMED = 2;
exports.TreasureMapsConst = __s0local93;
__s0local93.__class = "TreasureMapsConst";
__s0local93.STAGED_CRUSADE_MAPS_$LI$();
__s0local93.CRUSADE_MAP_IDS_$LI$();
