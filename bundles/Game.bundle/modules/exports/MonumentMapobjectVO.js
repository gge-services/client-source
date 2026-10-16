Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_MonumentEvent = require("gge-module:export_MonumentEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_PoolManager = require("gge-module:export_PoolManager");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_UpgradableLandmarkMapobjectVO = require("gge-module:export_UpgradableLandmarkMapobjectVO");
var __s0local0 = function (__s1param0) {
  function MonumentMapobjectVO() {
    var __s3local0 = this;
    __s3local0._monumentType = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MonumentMapobjectVO, __s1param0);
  MonumentMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = this;
    if (__s5param2 === undefined) {
      __s5param2 = false;
    }
    var __s5local1 = "Monument_Mapobject_" + __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.MONUMENT_FILE_NAME_SUFFIXES[this.monumentType];
    this._graphicClassName = __s5local1;
    return __dep_export_PoolManager.mapObjectsPool.obtain(__s5local1, function (__s8param0) {
      var __s8local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
      __s8local0.addItem(__s5local0.getAsExternalClip(__s8param0));
      return __s8local0;
    });
  };
  MonumentMapobjectVO.prototype.init = function () {
    this.name = "Monument";
    this._areaType = __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT;
    this._isVisibleOnMap = false;
    this._secondsSinceEspionage = -1;
    this._occupierPId = __dep_exact_26a421b704832cff_1.OutpostConst.MONUMENT_DEFAULT_OWNER_ID;
    this._areaNameString = __dep_exact_92d05af59ee2ff30.Localize.text("monument");
    this._level = this._level == -1 ? 1 : this._level;
    this._kingdomID = __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID;
    this._levelInfo = this.dataModel.getLevelInfoByLevel(this._level, 0);
  };
  MonumentMapobjectVO.prototype.parseAreaInfo = function (__s12param0) {
    this._areaType = __s12param0[0];
    this._absAreaPosX = __s12param0[1];
    this._absAreaPosY = __s12param0[2];
    this._objectId = __s12param0[3];
    this._occupierPId = __s12param0[4];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._monumentType = __dep_exact_f855840627e6e145.int(__s12param0[5]);
    this._level = __s12param0[6];
    this._levelInfo = this._level > 0 ? this.dataModel.getLevelInfoByLevel(this._level, 0) : this.dataModel.getLevelInfoByLevel(1, 0);
    this._kingdomID = __s12param0[7];
    this._secondsSinceEspionage = __s12param0[8];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.areaNameString = __s12param0[9];
    this._isVisibleOnMap = true;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
    this.dispatchEvent(new __dep_export_MonumentEvent.MonumentEvent(__dep_export_MonumentEvent.MonumentEvent.MONUMENT_UPDATED));
    var __s12local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var __s12local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getWallOrGateWodIdForVillages(__dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s12local0).level;
    this._gateLevel = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__s12local1).level;
    this._moatLevel = 0;
    this._keepLevel = 0;
    this.dataModel.addToShownList(this);
  };
  MonumentMapobjectVO.prototype.parseGML = function (__s14param0) {
    this.parseAreaInfo(__s14param0[0]);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(__s14param0[1]);
  };
  MonumentMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s16param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s16param0);
    this._monumentType = __dep_exact_f855840627e6e145.int(__s16param0.RT);
  };
  Object.defineProperty(MonumentMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("monument");
      }
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "monumentType", {
    get: function () {
      return this._monumentType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "hasReachedMaxLevel", {
    get: function () {
      return this._level >= __dep_export_CastleMonumentData.CastleMonumentData.MONUMENT_MAX_LEVELS[this._monumentType];
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "hasReachedMaxLevel").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "dataModel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.monumentsData;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "dataModel").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "attackType").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.OutpostConst.MONUMENT_DEFAULT_LEVEL;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  return MonumentMapobjectVO;
}(__dep_export_UpgradableLandmarkMapobjectVO.UpgradableLandmarkMapobjectVO);
exports.MonumentMapobjectVO = __s0local0;
var __dep_export_CastleMonumentData = require("gge-module:export_CastleMonumentData");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
