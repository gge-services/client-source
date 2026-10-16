Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ABasicSectorGenerator = require("gge-module:export_ABasicSectorGenerator");
var __s0local0 = function (__s1param0) {
  function CastleEilandSectorGenerator() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandSectorGenerator, __s1param0);
  Object.defineProperty(CastleEilandSectorGenerator.prototype, "worldData", {
    get: function () {
      return new __dep_exact_26a421b704832cff.WorldIsland();
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "worldData").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandSectorGenerator.prototype, "decoTypeCount", {
    get: function () {
      return CastleEilandSectorGenerator.EILAND_DECO_TYPE_COUNT;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "decoTypeCount").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandSectorGenerator.__initialize_static_members = function () {
    CastleEilandSectorGenerator.EILAND_DECO_TYPE_COUNT = [[9, 3], [12, 1], [10, 2], [14, 2], [5, 2], [4, 1], [11, 2], [3, 1], [13, 1], [2, 1], [19, 1], [17, 2], [16, 3], [15, 3], [1, 2], [0, 2], [18, 2]];
  };
  return CastleEilandSectorGenerator;
}(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator);
exports.CastleEilandSectorGenerator = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleSectorGenerator");
__s0local0.__initialize_static_members();
