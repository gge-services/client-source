Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleLuckWheelSalesDaysDialog = require("gge-module:export_CastleLuckWheelSalesDaysDialog");
var __dep_export_CastleLuckyWheelDialogProperties = require("gge-module:export_CastleLuckyWheelDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_LuckyWheelEventVO = require("gge-module:export_LuckyWheelEventVO");
var __s0local0 = function (__s1param0) {
  function SaleDaysLuckyWheelEventVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SaleDaysLuckyWheelEventVO, __s1param0);
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "luckyWheelData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.saleDaysLuckyWheelData;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO.prototype, "luckyWheelData").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_luckyWheel_saleDays";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  SaleDaysLuckyWheelEventVO.prototype.openDialog = function (__s13param0 = true) {
    this.executeOpenDialog(__s13param0, __dep_export_CastleLuckWheelSalesDaysDialog.CastleLuckWheelSalesDaysDialog, new __dep_export_CastleLuckyWheelDialogProperties.CastleLuckyWheelDialogProperties(this));
  };
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SaleDaysLuckyWheelEventVO.EVENT_BUILDING_WOD_0;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO.prototype, "eventBuildingWOD").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "ticketCost", {
    get: function () {
      return __dep_exact_26a421b704832cff.LuckyWheelConst.SPIN_TICKET_COST_SALE_DAYS;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO.prototype, "ticketCost").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "currencyID", {
    get: function () {
      return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SALES_DAYS_LUCKY_WHEEL_TICKET;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO.prototype, "currencyID").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelEventVO.prototype, "textIDString", {
    get: function () {
      return "luckyWheel_saleDays";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO.prototype, "textIDString").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  SaleDaysLuckyWheelEventVO.EVENT_BUILDING_WOD_0 = 1897;
  return SaleDaysLuckyWheelEventVO;
}(__dep_export_LuckyWheelEventVO.LuckyWheelEventVO);
exports.SaleDaysLuckyWheelEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO", "IScoreUpdatable");
