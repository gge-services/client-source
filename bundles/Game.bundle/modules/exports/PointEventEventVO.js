Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_APointEventTypeScoreEventVO = require("gge-module:export_APointEventTypeScoreEventVO");
var __s0local0 = function (__s1param0) {
  function PointEventEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_POINT_EVENT;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PointEventEventVO, __s1param0);
  Object.defineProperty(PointEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_PointEvent";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APointEventTypeScoreEventVO.APointEventTypeScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PointEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return PointEventEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APointEventTypeScoreEventVO.APointEventTypeScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  PointEventEventVO.prototype.openDialog = function (__s13param0 = true) {
    this.executeOpenDialog(__s13param0, __dep_export_CastlePointEventDialog.CastlePointEventDialog);
  };
  PointEventEventVO.__initialize_static_members = function () {
    PointEventEventVO.EVENT_BUILDING_WOD = 397;
  };
  return PointEventEventVO;
}(__dep_export_APointEventTypeScoreEventVO.APointEventTypeScoreEventVO);
exports.PointEventEventVO = __s0local0;
var __dep_export_CastlePointEventDialog = require("gge-module:export_CastlePointEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
__s0local0.__initialize_static_members();
