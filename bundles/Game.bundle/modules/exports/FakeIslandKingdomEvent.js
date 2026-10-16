Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function FakeIslandKingdomEvent() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ISLAND_KINGDOM;
    __s3local0._endTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID).resetTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FakeIslandKingdomEvent, __s1param0);
  Object.defineProperty(FakeIslandKingdomEvent.prototype, "isActive", {
    get: function () {
      return true;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isActive").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeIslandKingdomEvent.prototype, "eventBuildingNameId", {
    get: function () {
      return "event_title_102";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return FakeIslandKingdomEvent;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.FakeIslandKingdomEvent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
