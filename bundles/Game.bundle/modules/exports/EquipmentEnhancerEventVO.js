Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function EquipmentEnhancerEventVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentEnhancerEventVO, __s1param0);
  Object.defineProperty(EquipmentEnhancerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return EquipmentEnhancerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentEnhancerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Enchanter";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentEnhancerEventVO.prototype.openDialog = function (__s13param0 = true) {
    this.executeOpenDialog(__s13param0, __dep_export_CastleEquipmentEnchanterDialog.CastleEquipmentEnchanterDialog);
  };
  EquipmentEnhancerEventVO.__initialize_static_members = function () {
    EquipmentEnhancerEventVO.EVENT_BUILDING_WOD = 296;
  };
  return EquipmentEnhancerEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.EquipmentEnhancerEventVO = __s0local0;
var __dep_export_CastleEquipmentEnchanterDialog = require("gge-module:export_CastleEquipmentEnchanterDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
