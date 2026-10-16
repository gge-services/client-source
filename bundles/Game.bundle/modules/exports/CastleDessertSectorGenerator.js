Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ABasicSectorGenerator = require("gge-module:export_ABasicSectorGenerator");
var __s0local0 = function (__s1param0) {
  function CastleDessertSectorGenerator() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDessertSectorGenerator, __s1param0);
  Object.defineProperty(CastleDessertSectorGenerator.prototype, "worldData", {
    get: function () {
      return new __dep_exact_26a421b704832cff.WorldDessert();
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "worldData").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDessertSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleDessertSectorGenerator;
}(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator);
exports.CastleDessertSectorGenerator = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleSectorGenerator");
