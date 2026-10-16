Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleAllianceNomadInvasionEventDialogProperties = require("gge-module:export_CastleAllianceNomadInvasionEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function NomadInvasionVendorEventVO() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).buyPackagesEventVO = new __dep_export_BuyPackagesEventVO.BuyPackagesEventVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NomadInvasionVendorEventVO, __s1param0);
  NomadInvasionVendorEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this.buyPackagesEventVO.parseData(__s5param0, __s5param1, __s5param2);
  };
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventPackagesVO").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return NomadInvasionVendorEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "isVisible", {
    get: function () {
      var __s15local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      return !__s15local0 || !__s15local0.isActive;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "isVisible").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_NomadInvasion";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  NomadInvasionVendorEventVO.prototype.openDialog = function (__s23param0 = true) {
    this.executeOpenDialog(__s23param0, __dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog, new __dep_export_CastleAllianceNomadInvasionEventDialogProperties.CastleAllianceNomadInvasionEventDialogProperties(__dep_export_CastleAllianceNomadInvasionDialog.CastleAllianceNomadInvasionDialog.TAB_MERCHANT));
  };
  NomadInvasionVendorEventVO.__initialize_static_members = function () {
    NomadInvasionVendorEventVO.EVENT_BUILDING_WOD = 74;
  };
  return NomadInvasionVendorEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.NomadInvasionVendorEventVO = __s0local0;
var __dep_export_CastleAllianceNomadInvasionDialog = require("gge-module:export_CastleAllianceNomadInvasionDialog");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
