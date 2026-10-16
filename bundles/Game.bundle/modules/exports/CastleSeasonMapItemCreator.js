Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function CastleSeasonMapItemCreator() {}
  CastleSeasonMapItemCreator.prototype.createTreasureMapItems = function (__s5param0, __s5param1) {
    var __s5local0;
    var __s5local1 = [];
    if (__s5param1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5param1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined && (__s5local0 = this.createMapItem(__s5param0, __s5local4))) {
          __s5local1.push(__s5local0);
        }
      }
    }
    return __s5local1;
  };
  CastleSeasonMapItemCreator.prototype.createMapItem = function (__s11param0, __s11param1) {
    if (__s11param0["node_" + __s11param1.pos]) {
      if (__s11param1.isStartNode) {
        return new __dep_export_StartCampSeasonMapScreenItem.StartCampSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
      } else if (__s11param1.isDungeon || __s11param1.isBridgeDungeon || __s11param1.isMoralBooster) {
        if (__s11param1.isVillage) {
          return new __dep_export_VillageSeasonMapScreenItem.VillageSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
        } else {
          return new __dep_export_DungeonSeasonMapScreenItem.DungeonSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
        }
      } else if (__s11param1.isBridge) {
        return new __dep_export_ObstacleSeasonMapScreenItem.ObstacleSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
      } else {
        return new __dep_export_VillageSeasonMapScreenItem.VillageSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
      }
    } else {
      return null;
    }
  };
  return CastleSeasonMapItemCreator;
}();
exports.CastleSeasonMapItemCreator = __s0local0;
var __dep_export_DungeonSeasonMapScreenItem = require("gge-module:export_DungeonSeasonMapScreenItem");
var __dep_export_ObstacleSeasonMapScreenItem = require("gge-module:export_ObstacleSeasonMapScreenItem");
var __dep_export_StartCampSeasonMapScreenItem = require("gge-module:export_StartCampSeasonMapScreenItem");
var __dep_export_VillageSeasonMapScreenItem = require("gge-module:export_VillageSeasonMapScreenItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItemCreator");
