Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function AwardrewardEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AwardrewardEventVO, __s1param0);
  Object.defineProperty(AwardrewardEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AwardrewardEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AwardrewardEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "building_EGAevent_camp";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AwardrewardEventVO.prototype, "isActive", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isActive").get.call(this) && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isActive").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  AwardrewardEventVO.prototype.openDialog = function (__s17param0 = true) {
    this.executeOpenDialog(__s17param0, __dep_export_CastleAwardVotingEventDialog.CastleAwardVotingEventDialog);
  };
  AwardrewardEventVO.__initialize_static_members = function () {
    AwardrewardEventVO.EVENT_BUILDING_WOD = 222;
  };
  return AwardrewardEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.AwardrewardEventVO = __s0local0;
var __dep_export_CastleAwardVotingEventDialog = require("gge-module:export_CastleAwardVotingEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
