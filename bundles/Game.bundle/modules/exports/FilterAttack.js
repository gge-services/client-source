Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AMovementFilterStrategy = require("gge-module:export_AMovementFilterStrategy");
var __s0local0 = function (__s1param0) {
  function FilterAttack() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FilterAttack, __s1param0);
  FilterAttack.prototype.filterFunction = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = !!__s5param0.targetOwnerInfo && __s5param0.targetOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    return __s5param0.isAttackingMovement || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "SiegeMapmovementVO") && __s5local0;
  };
  Object.defineProperty(FilterAttack.prototype, "name", {
    get: function () {
      return FilterAttack.NAME;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy.prototype, "name").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  FilterAttack.__initialize_static_members = function () {
    FilterAttack.NAME = "FilterAttack";
  };
  return FilterAttack;
}(__dep_export_AMovementFilterStrategy.AMovementFilterStrategy);
exports.FilterAttack = __s0local0;
__s0local0.__initialize_static_members();
