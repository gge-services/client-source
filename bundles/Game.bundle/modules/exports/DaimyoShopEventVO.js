Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleAllianceSamuraiInvasionDialog = require("gge-module:export_CastleAllianceSamuraiInvasionDialog");
var __dep_export_CastleAllianceSamuraiInvasionEventDialogProperties = require("gge-module:export_CastleAllianceSamuraiInvasionEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function DaimyoShopEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DaimyoShopEventVO, __s1param0);
  Object.defineProperty(DaimyoShopEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return DaimyoShopEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoShopEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_samuraiInvasion";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoShopEventVO.prototype, "isVisible", {
    get: function () {
      var __s13local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
      return !__s13local0 || !__s13local0.isActive;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "isVisible").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoShopEventVO.prototype.openDialog = function (__s17param0 = true) {
    this.executeOpenDialog(__s17param0, __dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog, new __dep_export_CastleAllianceSamuraiInvasionEventDialogProperties.CastleAllianceSamuraiInvasionEventDialogProperties(this, __dep_export_CastleAllianceSamuraiInvasionDialog.CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP));
  };
  DaimyoShopEventVO.EVENT_BUILDING_WOD = 635;
  return DaimyoShopEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.DaimyoShopEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
