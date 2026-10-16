Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function UnitDealerEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitDealerEventVO, __s1param0);
  UnitDealerEventVO.prototype.parseParamObject = function (__s5param0) {};
  Object.defineProperty(UnitDealerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return UnitDealerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitDealerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      if (this.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_ISLAND) {
        return "dialog_eiland_toolShop_tooltip";
      } else {
        return "eventBuilding_UnitDealer";
      }
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitDealerEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MARAUDER;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitDealerEventVO.prototype.openMerchantDialog = function (__s21param0, __s21param1) {
    switch (this.eventId) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_ISLAND:
        this.executeOpenDialog(__s21param0, __dep_export_CastleEilandUnitDealerEventDialog.CastleEilandUnitDealerEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s21param1));
        break;
      default:
        this.executeOpenDialog(__s21param0, __dep_export_CastleUnitDealerEventDialog.CastleUnitDealerEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s21param1));
    }
  };
  UnitDealerEventVO.__initialize_static_members = function () {
    UnitDealerEventVO.EVENT_BUILDING_WOD = 290;
  };
  return UnitDealerEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.UnitDealerEventVO = __s0local0;
var __dep_export_CastleEilandUnitDealerEventDialog = require("gge-module:export_CastleEilandUnitDealerEventDialog");
var __dep_export_CastleUnitDealerEventDialog = require("gge-module:export_CastleUnitDealerEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
__s0local0.__initialize_static_members();
