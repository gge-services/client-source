Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UnitDealerEventVO = require("gge-module:export_UnitDealerEventVO");
var __s0local0 = function (__s1param0) {
  function PrivateUnitDealerEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateUnitDealerEventVO, __s1param0);
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "eventPackages", {
    get: function () {
      return this.treasureMapVO.eventPackages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "treasureMapVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this._mapIDs[0]);
    },
    enumerable: true,
    configurable: true
  });
  PrivateUnitDealerEventVO.prototype.openMerchantDialog = function (__s9param0, __s9param1) {
    this.executeOpenDialog(__s9param0, __dep_export_CastlePrivateUnitDealerEventDialog.CastlePrivateUnitDealerEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s9param1));
  };
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return this.treasureMapVO.remainingMapTimeInSeconds;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "remainingEventTimeInSeconds").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "buyType", {
    get: function () {
      return __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_CRUSADEMAP;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UnitDealerEventVO.UnitDealerEventVO.prototype, "buyType").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  return PrivateUnitDealerEventVO;
}(__dep_export_UnitDealerEventVO.UnitDealerEventVO);
exports.PrivateUnitDealerEventVO = __s0local0;
var __dep_export_CastlePrivateUnitDealerEventDialog = require("gge-module:export_CastlePrivateUnitDealerEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
