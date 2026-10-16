Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_CastleFactionArmorerEventDialog = require("gge-module:export_CastleFactionArmorerEventDialog");
var __dep_export_UnitDealerEventVO = require("gge-module:export_UnitDealerEventVO");
var __s0local0 = function (__s1param0) {
  function FactionArmorerEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionArmorerEventVO, __s1param0);
  Object.defineProperty(FactionArmorerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionArmorerEventVO.EVENT_BUILDING_WOD_0;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionArmorerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_FactionArmorer";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionArmorerEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_berimond_description";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "primesaleDescriptionTextID").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionArmorerEventVO.prototype.openMerchantDialog = function (__s17param0, __s17param1) {
    this.executeOpenDialog(__s17param0, __dep_export_CastleFactionArmorerEventDialog.CastleFactionArmorerEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s17param1));
  };
  FactionArmorerEventVO.__initialize_static_members = function () {
    FactionArmorerEventVO.EVENT_BUILDING_WOD_0 = 634;
  };
  return FactionArmorerEventVO;
}(__dep_export_UnitDealerEventVO.UnitDealerEventVO);
exports.FactionArmorerEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
__s0local0.__initialize_static_members();
