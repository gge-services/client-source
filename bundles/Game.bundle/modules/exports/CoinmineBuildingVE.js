Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AMineBuildingVE = require("gge-module:export_AMineBuildingVE");
var __s0local0 = function (__s1param0) {
  function CoinmineBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CoinmineBuildingVE, __s1param0);
  Object.defineProperty(CoinmineBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Coins_Cluster;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMineBuildingVE.AMineBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoinmineBuildingVE.prototype, "statusIconFull", {
    get: function () {
      return __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.COINMINE_COLLECTABLE;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMineBuildingVE.AMineBuildingVE.prototype, "statusIconFull").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return CoinmineBuildingVE;
}(__dep_export_AMineBuildingVE.AMineBuildingVE);
exports.CoinmineBuildingVE = __s0local0;
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
