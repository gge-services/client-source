Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function HospitalBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HospitalBuildingVE, __s1param0);
  HospitalBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  HospitalBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  HospitalBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (this.statusIcons.iconList.length <= 0) {
      if (__dep_export_CastleModel.CastleModel.militaryData.doWoundedSoldiersExist && this.hospitalVO.hasFreeSlots()) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.HOSPITAL);
      } else if (!this.hospitalVO.hasFreeSlots() || this.hospitalVO.isReviving() && !__dep_export_CastleModel.CastleModel.militaryData.doWoundedSoldiersExist) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE);
      }
    }
  };
  Object.defineProperty(HospitalBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SurviveBoost;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  HospitalBuildingVE.prototype.getRingMenuButtons = function () {
    var __s18local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s18local0.push(new __dep_export_RingMenuButtonHospital.RingMenuButtonHospital());
    return __s18local0;
  };
  HospitalBuildingVE.prototype.onInventoryUpdated = function (__s20param0) {
    this.updateStatusIcon();
  };
  Object.defineProperty(HospitalBuildingVE.prototype, "hospitalVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return HospitalBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.HospitalBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RingMenuButtonHospital = require("gge-module:export_RingMenuButtonHospital");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
