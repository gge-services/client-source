Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleFameBoosterEventDialogProperties = require("gge-module:export_CastleFameBoosterEventDialogProperties");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function FameboosterEventVO() {
    var __s3local0 = this;
    __s3local0._bonusPercentage = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._bonusPercentage = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FameboosterEventVO, __s1param0);
  FameboosterEventVO.prototype.parseParamObject = function (__s5param0) {
    this._bonusPercentage = __dep_exact_f855840627e6e145.int(__s5param0.GBP);
  };
  Object.defineProperty(FameboosterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FameboosterEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FameboosterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_fameBoost";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  FameboosterEventVO.prototype.openDialog = function (__s15param0 = true) {
    this.executeOpenDialog(__s15param0, __dep_export_CastleFameBoosterEventDialog.CastleFameBoosterEventDialog, new __dep_export_CastleFameBoosterEventDialogProperties.CastleFameBoosterEventDialogProperties(this));
  };
  Object.defineProperty(FameboosterEventVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  FameboosterEventVO.__initialize_static_members = function () {
    FameboosterEventVO.EVENT_BUILDING_WOD = 61;
  };
  return FameboosterEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.FameboosterEventVO = __s0local0;
var __dep_export_CastleFameBoosterEventDialog = require("gge-module:export_CastleFameBoosterEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
