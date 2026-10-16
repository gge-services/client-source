Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleUnderworldSeasonMapItemCreator() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnderworldSeasonMapItemCreator, __s1param0);
  CastleUnderworldSeasonMapItemCreator.prototype.createTreasureMapItems = function (__s5param0, __s5param1) {
    if (__s5param1 != null) {
      for (var __s5local0 = 0, __s5local1 = __s5param1; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.eventID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD);
        }
      }
    }
    return __s1param0.prototype.createTreasureMapItems.call(this, __s5param0, __s5param1);
  };
  CastleUnderworldSeasonMapItemCreator.prototype.createMapItem = function (__s11param0, __s11param1) {
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
        return new __dep_export_ObstacleUnderworldSeasonMapScreenItem.ObstacleUnderworldSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
      } else {
        return new __dep_export_VillageSeasonMapScreenItem.VillageSeasonMapScreenItem(__s11param0["node_" + __s11param1.pos], __s11param1);
      }
    } else {
      return null;
    }
  };
  return CastleUnderworldSeasonMapItemCreator;
}(require("gge-module:export_CastleSeasonMapItemCreator").CastleSeasonMapItemCreator);
exports.CastleUnderworldSeasonMapItemCreator = __s0local0;
var __dep_export_DungeonSeasonMapScreenItem = require("gge-module:export_DungeonSeasonMapScreenItem");
var __dep_export_ObstacleUnderworldSeasonMapScreenItem = require("gge-module:export_ObstacleUnderworldSeasonMapScreenItem");
var __dep_export_StartCampSeasonMapScreenItem = require("gge-module:export_StartCampSeasonMapScreenItem");
var __dep_export_VillageSeasonMapScreenItem = require("gge-module:export_VillageSeasonMapScreenItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItemCreator");
