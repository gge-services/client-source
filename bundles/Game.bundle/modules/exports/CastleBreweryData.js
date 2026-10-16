Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleBreweryData() {
    var __s3local0 = this;
    __s3local0._percentForMead = 0;
    __s3local0._stopAtFoodAmount = 0;
    __s3local0._stopAtHoneyAmount = 0;
    __s3local0.waitForExternalCommand = false;
    __s3local0.server_production_freeze = false;
    __s3local0._meadPrioSet = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBreweryData, __s1param0);
  CastleBreweryData.prototype.parse_ABPI = function (__s5param0, __s5param1 = false) {
    this.ex_percentForMead = 0;
    this.ex_stopAtFoodAmount = 0;
    this.ex_stopAtHoneyAmount = 0;
    this.server_production_freeze = false;
    this.meadPrioSet = !!__s5param0 && !!__s5param0.bfl && __s5param0.bfl.PPOT == 1;
    if (this.waitForExternalCommand && !__s5param1) {
      this.parse_ABPI_extern(__s5param0);
    } else {
      this.parse_ABPI_intern(__s5param0);
    }
    this.waitForExternalCommand = false;
  };
  CastleBreweryData.prototype.parse_ABPI_intern = function (__s9param0) {
    this._percentForMead = 0;
    this._stopAtFoodAmount = 0;
    this._stopAtHoneyAmount = 0;
    this.server_production_freeze = false;
    if (__s9param0 !== undefined) {
      this._percentForMead = __s9param0.PA.MEAD;
      this._stopAtFoodAmount = __s9param0.MS.F;
      this._stopAtHoneyAmount = __s9param0.MS.HONEY;
      this.server_production_freeze = __s9param0.SRPF;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __s0local0(CastleBreweryData.ON_BREWERY_INFO, false, false));
    }
  };
  CastleBreweryData.prototype.parse_ABPI_extern = function (__s12param0) {
    if (__s12param0 !== undefined) {
      this.ex_percentForMead = __s12param0.PA.MEAD;
      this.ex_stopAtFoodAmount = __s12param0.MS.F;
      this.ex_stopAtHoneyAmount = __s12param0.MS.HONEY;
      this.server_production_freeze = __s12param0.SRPF;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __s0local0(CastleBreweryData.ON_BREWERY_INFO_EXTERN, false, false));
    }
  };
  CastleBreweryData.prototype.setBreweryBuildingData = function (__s15param0) {
    if (this._breweryBuildingVO) {
      this._breweryBuildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onBreweryVOChanged));
    }
    this._breweryBuildingVO = __s15param0;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET));
    if (this._breweryBuildingVO) {
      this._breweryBuildingVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onBreweryVOChanged));
    }
  };
  CastleBreweryData.prototype.onBreweryVOChanged = function (__s19param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET));
  };
  Object.defineProperty(CastleBreweryData.prototype, "isMeadProductionActive", {
    get: function () {
      return !(__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).amount >= __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).maxAmount) && !(__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount <= __dep_export_CastleModel.CastleModel.breweryData.stopAtFoodAmount) && !(__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount <= 10) && !(__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).amount <= __dep_export_CastleModel.CastleModel.breweryData.stopAtHoneyAmount) && !(__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).amount <= 10) && this._percentForMead > 0 && !this.server_production_freeze;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "meatProductionRate", {
    get: function () {
      return this.breweryBuildingVO.meadProduction * (this._percentForMead / 100);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "isBreweryBuildingBuilt", {
    get: function () {
      return this.breweryBuildingVO.buildingState.isFunctionally;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "breweryBuildingVO", {
    get: function () {
      if (this._breweryBuildingVO) {
        return this._breweryBuildingVO;
      } else {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.BREWERY_BUILDING_WOD);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "isBreweryBuildingUnderConstruction", {
    get: function () {
      return this.breweryBuildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS || this.breweryBuildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "isAllowedToBuild", {
    get: function () {
      return this.breweryBuildingVO.isAvailableByLevelAndEffect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "percentForMead", {
    get: function () {
      return this._percentForMead;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "stopAtFoodAmount", {
    get: function () {
      return this._stopAtFoodAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "stopAtHoneyAmount", {
    get: function () {
      return this._stopAtHoneyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "meadPrioSet", {
    get: function () {
      return this._meadPrioSet;
    },
    set: function (__s43param0) {
      this._meadPrioSet = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryData.prototype.reset = function () {
    this.breweryBuildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onBreweryVOChanged));
  };
  CastleBreweryData.ON_BREWERY_INFO = "ON_BREWERY_INFO";
  CastleBreweryData.ON_BREWERY_INFO_EXTERN = "ON_BREWERY_INFO_EXTERN";
  CastleBreweryData.RATIO_FACTOR = 100;
  return CastleBreweryData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleBreweryData = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IUpdatable");
