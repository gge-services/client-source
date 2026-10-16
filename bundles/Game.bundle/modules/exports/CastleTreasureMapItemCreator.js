Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function CastleTreasureMapItemCreator() {}
  CastleTreasureMapItemCreator.prototype.createTreasureMapItems = function (__s5param0, __s5param1) {
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
  CastleTreasureMapItemCreator.prototype.createMapItem = function (__s11param0, __s11param1) {
    var __s11local0;
    var __s11local1 = __s11param0["node_" + __s11param1.nodeID];
    if (__s11param1.isDungeon || __s11param1.isStartNode) {
      __s11local0 = new __dep_export_CastleTreasureMapItemDungeon.CastleTreasureMapItemDungeon(__s11local1, __s11param1);
    } else if (__s11param1.isTreasureHuntObstacle) {
      __s11local0 = new __dep_export_CastleTreasureMapItemObstacle.CastleTreasureMapItemObstacle(__s11local1, __s11param1);
    }
    return __s11local0;
  };
  return CastleTreasureMapItemCreator;
}();
exports.CastleTreasureMapItemCreator = __s0local0;
var __dep_export_CastleTreasureMapItemDungeon = require("gge-module:export_CastleTreasureMapItemDungeon");
var __dep_export_CastleTreasureMapItemObstacle = require("gge-module:export_CastleTreasureMapItemObstacle");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItemCreator");
