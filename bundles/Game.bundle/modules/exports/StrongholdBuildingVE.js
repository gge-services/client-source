Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function StrongholdBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StrongholdBuildingVE, __s1param0);
  StrongholdBuildingVE.prototype.addEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __s1param0.prototype.addEventListener.call(this);
  };
  StrongholdBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  StrongholdBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (__dep_export_CastleModel.CastleModel.militaryData.strongholdUnitCount > 0 && !this.statusIcons.isUpgradeIconActive) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.STRONGHOLD);
    }
  };
  Object.defineProperty(StrongholdBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Stronghold_Big;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  StrongholdBuildingVE.prototype.getRingMenuButtons = function () {
    var __s16local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s16local0.push(new __dep_export_RingMenuButtonStronghold.RingMenuButtonStronghold());
    return __s16local0;
  };
  StrongholdBuildingVE.prototype.onInventoryUpdated = function (__s18param0) {
    this.updateStatusIcon();
  };
  return StrongholdBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.StrongholdBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RingMenuButtonStronghold = require("gge-module:export_RingMenuButtonStronghold");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
