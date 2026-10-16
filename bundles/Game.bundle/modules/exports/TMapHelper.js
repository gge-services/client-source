Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function TMapHelper() {}
  TMapHelper.isThornKingMap = function (__s5param0) {
    return __s5param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_EASY || __s5param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_HARD;
  };
  TMapHelper.isUnderworldMap = function (__s7param0) {
    return __s7param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY || __s7param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_UNDERWORLD_HARD;
  };
  TMapHelper.isSeaQueenMap = function (__s9param0) {
    return __s9param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY || __s9param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD || __s9param0 == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD;
  };
  TMapHelper.getMapIDForGraphics = function (__s11param0) {
    if (TMapHelper.isUnderworldMap(__s11param0)) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY);
    } else if (TMapHelper.isThornKingMap(__s11param0)) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_EASY);
    } else if (TMapHelper.isSeaQueenMap(__s11param0)) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY);
    } else {
      return __s11param0;
    }
  };
  return TMapHelper;
}();
exports.TMapHelper = __s0local0;
