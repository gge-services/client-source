Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_UnitDealerEventVO = require("gge-module:export_UnitDealerEventVO");
var __s0local0 = function (__s1param0) {
  function FactionHunterEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionHunterEventVO, __s1param0);
  Object.defineProperty(FactionHunterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionHunterEventVO.EVENT_BUILDING_WOD_0;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_FactionInvasionHunter";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_berimond_description";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "primesaleDescriptionTextID").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionHunterEventVO.prototype.openMerchantDialog = function (__s17param0, __s17param1) {
    this.executeOpenDialog(__s17param0, __dep_export_FactionHunterEventDialog.FactionHunterEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s17param1));
  };
  FactionHunterEventVO.__initialize_static_members = function () {
    FactionHunterEventVO.EVENT_BUILDING_WOD_0 = 761;
  };
  return FactionHunterEventVO;
}(__dep_export_UnitDealerEventVO.UnitDealerEventVO);
exports.FactionHunterEventVO = __s0local0;
var __dep_export_FactionHunterEventDialog = require("gge-module:export_FactionHunterEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
__s0local0.__initialize_static_members();
