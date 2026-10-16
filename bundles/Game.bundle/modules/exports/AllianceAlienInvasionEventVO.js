Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AAlienInvasionEventVO = require("gge-module:export_AAlienInvasionEventVO");
var __s0local0 = function (__s1param0) {
  function AllianceAlienInvasionEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceAlienInvasionEventVO, __s1param0);
  Object.defineProperty(AllianceAlienInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_alienInvasion";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO.prototype, "eventBuildingNameId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceAlienInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AllianceAlienInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO.prototype, "eventBuildingWOD").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceAlienInvasionEventVO.prototype.isOwnWmoVO = function (__s13param0) {
    return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "AlienInvasionMapobjectVO");
  };
  Object.defineProperty(AllianceAlienInvasionEventVO.prototype, "eventDialogProperiesClass", {
    get: function () {
      return __dep_export_CastleAllianceAlienInvasionEventDialogProperties.CastleAllianceAlienInvasionEventDialogProperties;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO.prototype, "eventDialogProperiesClass").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceAlienInvasionEventVO.__initialize_static_members = function () {
    AllianceAlienInvasionEventVO.EVENT_BUILDING_WOD = 68;
  };
  return AllianceAlienInvasionEventVO;
}(__dep_export_AAlienInvasionEventVO.AAlienInvasionEventVO);
exports.AllianceAlienInvasionEventVO = __s0local0;
var __dep_export_CastleAllianceAlienInvasionEventDialogProperties = require("gge-module:export_CastleAllianceAlienInvasionEventDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
__s0local0.__initialize_static_members();
