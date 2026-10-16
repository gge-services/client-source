Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AAlienInvasionEventVO = require("gge-module:export_AAlienInvasionEventVO");
var __s0local0 = function (__s1param0) {
  function RedAllianceAlienInvasionEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RedAllianceAlienInvasionEventVO, __s1param0);
  Object.defineProperty(RedAllianceAlienInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_redAlienInvasion";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO.prototype, "eventBuildingNameId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RedAllianceAlienInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return RedAllianceAlienInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO.prototype, "eventBuildingWOD").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  RedAllianceAlienInvasionEventVO.prototype.isOwnWmoVO = function (__s13param0) {
    return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "RedAlienInvasionMapobjectVO");
  };
  Object.defineProperty(RedAllianceAlienInvasionEventVO.prototype, "eventDialogProperiesClass", {
    get: function () {
      return __dep_export_CastleRedAllianceAlienInvasionEventDialogProperties.CastleRedAllianceAlienInvasionEventDialogProperties;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO.prototype, "eventDialogProperiesClass").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  RedAllianceAlienInvasionEventVO.__initialize_static_members = function () {
    RedAllianceAlienInvasionEventVO.EVENT_BUILDING_WOD = 1506;
  };
  return RedAllianceAlienInvasionEventVO;
}(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO);
exports.RedAllianceAlienInvasionEventVO = __s0local0;
var __dep_export_CastleRedAllianceAlienInvasionEventDialogProperties = require("gge-module:export_CastleRedAllianceAlienInvasionEventDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
__s0local0.__initialize_static_members();
