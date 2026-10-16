Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_LaboratoryEvent = require("gge-module:export_LaboratoryEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_UpgradableLandmarkMapobjectVO = require("gge-module:export_UpgradableLandmarkMapobjectVO");
var __s0local0 = function (__s1param0) {
  function LaboratoryMapobjectVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LaboratoryMapobjectVO, __s1param0);
  LaboratoryMapobjectVO.prototype.getBackgroundClip = function () {
    var __s5local0;
    __s5local0 = "LaboratoryBackground_" + __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    return this.getAsExternalClip(__s5local0);
  };
  LaboratoryMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s7param0, __s7param1, __s7param2 = false) {
    var __s7local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s7local0.addItem(this.getAsExternalClip("Laboratory_Mapobject"));
    return __s7local0;
  };
  LaboratoryMapobjectVO.prototype.init = function () {
    this.name = "Laboratory";
    this._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY;
    this._isVisibleOnMap = false;
    this._secondsSinceEspionage = -1;
    this._occupierPId = __dep_exact_26a421b704832cff_1.OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
    this._areaNameString = __dep_exact_92d05af59ee2ff30.Localize.text("laboratory");
    this._level = this._level == -1 ? 1 : this._level;
    this._levelInfo = this.dataModel.getLevelInfoByLevel(this._level, this.kingdomID);
  };
  LaboratoryMapobjectVO.prototype.parseAreaInfo = function (__s11param0) {
    this._areaType = __s11param0[0];
    this._absAreaPosX = __s11param0[1];
    this._absAreaPosY = __s11param0[2];
    this._objectId = __s11param0[3];
    this._occupierPId = __s11param0[4];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._level = __s11param0[5];
    this._kingdomID = __s11param0[6];
    this._levelInfo = this._level > 0 ? this.dataModel.getLevelInfoByLevel(this._level, this.kingdomID) : this.dataModel.getLevelInfoByLevel(1, this.kingdomID);
    this._secondsSinceEspionage = __s11param0[7];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.areaNameString = __s11param0[8];
    this._isVisibleOnMap = true;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    this.dispatchEvent(new __dep_export_LaboratoryEvent.LaboratoryEvent(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_UPDATED));
    var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var __s11local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s11local0).level;
    this._gateLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s11local1).level;
    this._moatLevel = 0;
    this._keepLevel = 0;
    this.dataModel.addToShownList(this);
  };
  LaboratoryMapobjectVO.prototype.parseGLL = function (__s13param0) {
    this.parseAreaInfo(__s13param0[0]);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(__s13param0[1]);
  };
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("laboratory");
      }
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "hasReachedMaxLevel", {
    get: function () {
      return this.dataModel.getLevelInfoByLevel(this.level + 1, this.kingdomID) == null;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "hasReachedMaxLevel").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "dataModel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.laboratoryData;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "dataModel").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "attackType").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.OutpostConst.LABORATORY_DEFAULT_LEVEL;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  return LaboratoryMapobjectVO;
}(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO);
exports.LaboratoryMapobjectVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
