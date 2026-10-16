Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleUnderworldSeasonRepairBridge() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleUnderworldSeasonRepairBridge.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnderworldSeasonRepairBridge, __s1param0);
  CastleUnderworldSeasonRepairBridge.prototype.getPictureClassName = function () {
    return "UnderworldRepairBridgePicture";
  };
  CastleUnderworldSeasonRepairBridge.__initialize_static_members = function () {
    CastleUnderworldSeasonRepairBridge.NAME = "CastleUnderworldRepair";
  };
  return CastleUnderworldSeasonRepairBridge;
}(require("gge-module:export_CastleSeasonBaseRepairDialog").CastleSeasonBaseRepairDialog);
exports.CastleUnderworldSeasonRepairBridge = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
