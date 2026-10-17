// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: OutpostConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local56 = function () {
  function OutpostConst() {}
  OutpostConst.SIEGE_TIME_$LI$ = function () {
    if (OutpostConst.SIEGE_TIME == null) {
      OutpostConst.SIEGE_TIME = 86400;
    }
    return OutpostConst.SIEGE_TIME;
  };
  OutpostConst.SIEGE_TIME_TEST_$LI$ = function () {
    if (OutpostConst.SIEGE_TIME_TEST == null) {
      OutpostConst.SIEGE_TIME_TEST = 600;
    }
    return OutpostConst.SIEGE_TIME_TEST;
  };
  OutpostConst.MIN_TIME_BEFORE_ABANDON_$LI$ = function () {
    if (OutpostConst.MIN_TIME_BEFORE_ABANDON == null) {
      OutpostConst.MIN_TIME_BEFORE_ABANDON = 259200;
    }
    return OutpostConst.MIN_TIME_BEFORE_ABANDON;
  };
  OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST_$LI$ = function () {
    if (OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST == null) {
      OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST = 300;
    }
    return OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST;
  };
  OutpostConst.ABANDON_TIME_$LI$ = function () {
    if (OutpostConst.ABANDON_TIME == null) {
      OutpostConst.ABANDON_TIME = 86400;
    }
    return OutpostConst.ABANDON_TIME;
  };
  OutpostConst.ABANDON_TIME_TEST_$LI$ = function () {
    if (OutpostConst.ABANDON_TIME_TEST == null) {
      OutpostConst.ABANDON_TIME_TEST = 3600;
    }
    return OutpostConst.ABANDON_TIME_TEST;
  };
  OutpostConst.ABANDON_CANCEL_TIME_$LI$ = function () {
    if (OutpostConst.ABANDON_CANCEL_TIME == null) {
      OutpostConst.ABANDON_CANCEL_TIME = 10800;
    }
    return OutpostConst.ABANDON_CANCEL_TIME;
  };
  OutpostConst.getCapitalDefaultOwnerFor = function (__s1318param0) {
    switch (__s1318param0) {
      case __s0local100.KINGDOM_ID:
        return OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID;
      case __s0local107.KINGDOM_ID:
        return OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID;
      case __s0local106.KINGDOM_ID:
        return OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID;
      case __s0local110.KINGDOM_ID:
        return OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
      default:
        return OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID;
    }
  };
  OutpostConst.isCapitalDefaultOwner = function (__s1321param0) {
    return __s1321param0 === OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID || __s1321param0 === OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID || __s1321param0 === OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID || __s1321param0 === OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
  };
  OutpostConst.getLaboratoryDefaultOwnerFor = function (__s1323param0) {
    switch (__s1323param0) {
      case __s0local100.KINGDOM_ID:
        return OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
      case __s0local107.KINGDOM_ID:
        return OutpostConst.LABORATORY_ICE_OWNER_ID;
      case __s0local106.KINGDOM_ID:
        return OutpostConst.LABORATORY_DESERT_OWNER_ID;
      case __s0local110.KINGDOM_ID:
        return OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
      default:
        return OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
    }
  };
  OutpostConst.isLaboratoryDefaultOwner = function (__s1326param0) {
    return __s1326param0 === OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID || __s1326param0 === OutpostConst.LABORATORY_ICE_OWNER_ID || __s1326param0 === OutpostConst.LABORATORY_DESERT_OWNER_ID || __s1326param0 === OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
  };
  return OutpostConst;
}();
__s0local56.DUMMY_SIEGE_TIME = 2;
__s0local56.DAMAGED_BUILDING_RATIO = 0.9;
__s0local56.ABANDON_CANCEL_TIME_TEST = 60;
__s0local56.DEFAULT_NAME = "";
__s0local56.OUTPOST_DEFAULT_OWNER_ID = -300;
__s0local56.OUTPOST_DEFAULT_AREA_ID = -300;
__s0local56.OUTPOST_DEFAULT_LEVEL = 5;
__s0local56.CAPITAL_CLASSIC_DEFAULT_OWNER_ID = -432;
__s0local56.CAPITAL_ICE_DEFAULT_OWNER_ID = -433;
__s0local56.CAPITAL_DESSERT_DEFAULT_OWNER_ID = -434;
__s0local56.CAPITAL_VOLCANO_DEFAULT_OWNER_ID = -435;
__s0local56.CAPITAL_UNSPAWNED_AREA_ID = -301;
__s0local56.CAPITAL_MAP_ICON = "333300";
__s0local56.CAPITAL_NON_CLASSIC_FOOD_PRODUCERS = 2;
__s0local56.CAPITAL_CLASSIC_FOOD_PRODUCERS = 3;
__s0local56.METROPOL_DEFAULT_OWNER_ID = -440;
__s0local56.METROPOL_UNSPAWNED_AREA_ID = -341;
__s0local56.METROPOL_ALLIANCE_BATTLE_GROUND_MINED_OUT_AREA_ID = -342;
__s0local56.METROPOL_MAP_ICON = "333300";
__s0local56.METROPOL_FOOD_PRODUCERS = 3;
__s0local56.KINGS_TOWER_DEFAULT_OWNER_ID = -450;
__s0local56.KINGS_TOWER_UNSPAWNED_AREA_ID = -351;
__s0local56.KINGS_TOWER_BONUS = 20;
__s0local56.KINGS_TOWER_DEFAULT_LEVEL = 70;
__s0local56.MONUMENT_DEFAULT_OWNER_ID = -460;
__s0local56.MONUMENT_UNSPAWNED_AREA_ID = -353;
__s0local56.MONUMENT_DEFAULT_LEVEL = 70;
__s0local56.LABORATORY_CLASSIC_DEFAULT_OWNER_ID = -470;
__s0local56.LABORATORY_ICE_OWNER_ID = -471;
__s0local56.LABORATORY_DESERT_OWNER_ID = -472;
__s0local56.LABORATORY_VOLCANO_OWNER_ID = -473;
__s0local56.LABORATORY_UNSPAWNED_AREA_ID = -355;
__s0local56.LABORATORY_DEFAULT_LEVEL = 70;
__s0local56.ALLIANCE_BATTLE_GROUND_DEFAULT_OWNER_ID = -480;
__s0local56.ALLIANCE_BATTLE_GROUND_UNSPAWNED_AREA_ID = -481;
__s0local56.LANDMARK_DEFAULT_LEVEL = 70;
__s0local56.RESOURCE_ISLE_DEFAULT_LEVEL = 70;
exports.OutpostConst = __s0local56;
__s0local56.__class = "OutpostConst";
__s0local56.ABANDON_CANCEL_TIME_$LI$();
__s0local56.ABANDON_TIME_TEST_$LI$();
__s0local56.ABANDON_TIME_$LI$();
__s0local56.MIN_TIME_BEFORE_ABANDON_TEST_$LI$();
__s0local56.MIN_TIME_BEFORE_ABANDON_$LI$();
__s0local56.SIEGE_TIME_TEST_$LI$();
__s0local56.SIEGE_TIME_$LI$();
