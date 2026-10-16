Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AResourceProductionBuildingVE = require("gge-module:export_AResourceProductionBuildingVE");
var __dep_export_RingMenuButtonBrewery = require("gge-module:export_RingMenuButtonBrewery");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleBreweryData = require("gge-module:export_CastleBreweryData");
var __s0local0 = function (__s1param0) {
  function RelicBreweryBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicBreweryBuildingVE, __s1param0);
  Object.defineProperty(RelicBreweryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Mead;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVE.AResourceProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicBreweryBuildingVE.prototype.getRingMenuButtons = function () {
    var __s9local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s9local0.push(new __dep_export_RingMenuButtonBrewery.RingMenuButtonBrewery());
    return __s9local0;
  };
  RelicBreweryBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleBreweryData.CastleBreweryData.ON_BREWERY_INFO, this.bindFunction(this.onSomethingUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingUpdated));
  };
  RelicBreweryBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleBreweryData.CastleBreweryData.ON_BREWERY_INFO, this.bindFunction(this.onSomethingUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingUpdated));
  };
  RelicBreweryBuildingVE.prototype.onSomethingUpdated = function (__s15param0 = null) {
    this.updateStatusIcon();
  };
  RelicBreweryBuildingVE.prototype.createStatusIcons = function () {
    var __s17local0 = this.breweryBuildingVO.isOverseerBoosted;
    if (this.breweryBuildingVO.buildingState.isFunctionally) {
      if (__dep_export_CastleModel.CastleModel.breweryData.isMeadProductionActive) {
        if (__s17local0) {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE_BOOSTED);
        } else {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE);
        }
      } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).amount >= __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).maxAmount) {
        if (__s17local0) {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BREWERY_MEAD_FULL_BOOSTED);
        } else {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BREWERY_MEAD_FULL);
        }
      } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount <= __dep_export_CastleModel.CastleModel.breweryData.stopAtFoodAmount) {
        if (__s17local0) {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BREWERY_OUT_OF_FOOD_BOOSTED);
        } else {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BREWERY_OUT_OF_FOOD);
        }
      } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).amount <= __dep_export_CastleModel.CastleModel.breweryData.stopAtHoneyAmount) {
        if (__s17local0) {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BREWERY_OUT_OF_HONEY_BOOSTED);
        } else {
          this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BREWERY_OUT_OF_HONEY);
        }
      } else if (__s17local0) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE_BOOSTED);
      } else {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
    __s1param0.prototype.createStatusIcons.call(this);
  };
  Object.defineProperty(RelicBreweryBuildingVE.prototype, "breweryBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBreweryBuildingVE;
}(__dep_export_AResourceProductionBuildingVE.AResourceProductionBuildingVE);
exports.RelicBreweryBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
