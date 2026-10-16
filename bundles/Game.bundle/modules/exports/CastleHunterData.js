Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleHunterData() {
    var __s3local0 = this;
    __s3local0._foodBoost = 0;
    __s3local0._woodStoneReduction = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._foodBoost = 0;
    __s3local0._woodStoneReduction = 0;
    __s3local0._hunterBuildingVO = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.HUNTER_BUILDING_WOD);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHunterData, __s1param0);
  CastleHunterData.prototype.parse_HIN = function (__s5param0) {
    this._foodBoost = __s5param0.FB;
    this._woodStoneReduction = __s5param0.WSR;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __s0local0(CastleHunterData.ON_HUNTER_INFO, false, false));
  };
  CastleHunterData.prototype.setHunterBuildingData = function (__s7param0) {
    if (this._hunterBuildingVO) {
      this._hunterBuildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onHunterVOChanged));
    }
    if (__s7param0) {
      this._hunterBuildingVO = __s7param0;
    } else if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
      this._hunterBuildingVO = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.HUNTER_BUILDING_WOD);
    } else {
      this._hunterBuildingVO = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.KINGDOMHUNTER_BUILDING_WOD);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET));
    this._hunterBuildingVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onHunterVOChanged));
  };
  CastleHunterData.prototype.onHunterVOChanged = function (__s13param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET));
  };
  Object.defineProperty(CastleHunterData.prototype, "isBoosted", {
    get: function () {
      return this._foodBoost > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "isHunterBuildingBuilt", {
    get: function () {
      return this.hunterBuildingVO.buildingState.isFunctionally;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "hunterBuildingVO", {
    get: function () {
      return this._hunterBuildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "isHunterBuildingUnderConstruction", {
    get: function () {
      return this.hunterBuildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS || this.hunterBuildingVO.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "isAllowedToBuild", {
    get: function () {
      return this.hunterBuildingVO.isAvailableByLevelAndEffect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "foodBoost", {
    get: function () {
      return this._foodBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "woodStoneReduction", {
    get: function () {
      return this._woodStoneReduction;
    },
    enumerable: true,
    configurable: true
  });
  CastleHunterData.prototype.reset = function () {
    this._hunterBuildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onHunterVOChanged));
  };
  CastleHunterData.ON_HUNTER_INFO = "EVENT_HUNTER_INFO";
  CastleHunterData.RATIO_FACTOR = 100;
  return CastleHunterData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleHunterData = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IUpdatable");
