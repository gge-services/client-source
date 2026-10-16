Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AMovementFilterStrategy = require("gge-module:export_AMovementFilterStrategy");
var __s0local0 = function (__s1param0) {
  function FilterAllianceOutgoing() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FilterAllianceOutgoing, __s1param0);
  FilterAllianceOutgoing.prototype.filterFunction = function (__s5param0, __s5param1, __s5param2) {
    return !!__dep_export_CastleModel.CastleModel.userData.isInAlliance && !!__s5param0.sourceOwnerInfo && __s5param0.sourceOwnerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID && !__s5param0.isMyMovement && (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "SupportDefenceMapmovementVO") && __s5param0.targetOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "SiegeMapmovementVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "ArmyAttackMapmovementVO") && !__s5param0.isAttackingMovement);
  };
  Object.defineProperty(FilterAllianceOutgoing.prototype, "name", {
    get: function () {
      return FilterAllianceOutgoing.NAME;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy.prototype, "name").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  FilterAllianceOutgoing.__initialize_static_members = function () {
    FilterAllianceOutgoing.NAME = "FilterAllianceOutgoing";
  };
  return FilterAllianceOutgoing;
}(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy);
exports.FilterAllianceOutgoing = __s0local0;
__s0local0.__initialize_static_members();
