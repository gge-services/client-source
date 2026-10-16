Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSeaQueenSeasonMapItemCreator() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeaQueenSeasonMapItemCreator, __s1param0);
  CastleSeaQueenSeasonMapItemCreator.prototype.createMapItem = function (__s5param0, __s5param1) {
    if (!__s5param1.isStartNode || __s5param1.isDungeon || __s5param1.isBridgeDungeon) {
      if (!__s5param1.isVillage && __s5param0["node_" + __s5param1.pos] != null) {
        return new __dep_export_SeaQueenDungeonSeasonMapScreenItem.SeaQueenDungeonSeasonMapScreenItem(__s5param0["node_" + __s5param1.pos], __s5param1);
      }
      if (__s5param1.isVillage) {
        return new __dep_export_SeaQueenVillageSeasonMapScreenItem.SeaQueenVillageSeasonMapScreenItem(__s5param0["node_" + __s5param1.pos], __s5param1);
      }
    }
    return __s1param0.prototype.createMapItem.call(this, __s5param0, __s5param1);
  };
  return CastleSeaQueenSeasonMapItemCreator;
}(require("gge-module:export_CastleSeasonMapItemCreator").CastleSeasonMapItemCreator);
exports.CastleSeaQueenSeasonMapItemCreator = __s0local0;
var __dep_export_SeaQueenDungeonSeasonMapScreenItem = require("gge-module:export_SeaQueenDungeonSeasonMapScreenItem");
var __dep_export_SeaQueenVillageSeasonMapScreenItem = require("gge-module:export_SeaQueenVillageSeasonMapScreenItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItemCreator");
