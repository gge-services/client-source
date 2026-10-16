Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleRandomDungeonEventDialogProperties = require("gge-module:export_CastleRandomDungeonEventDialogProperties");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function RandomdungeonEventVO() {
    var __s3local0 = this;
    __s3local0._hasWon = false;
    __s3local0._dungeonProtectionTime = 0;
    __s3local0._dungeonLootC2 = 0;
    __s3local0._skinID = 0;
    __s3local0._playerID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RandomdungeonEventVO, __s1param0);
  Object.defineProperty(RandomdungeonEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_RandomDungeon";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RandomdungeonEventVO.prototype.parseParamObject = function (__s9param0) {
    this._skinID = __dep_exact_f855840627e6e145.int(__s9param0.SID);
    this._playerID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getEventDungeonOwnerIDBySkinID(this._skinID));
    if (__s9param0.C2) {
      this._dungeonLootC2 = __dep_exact_f855840627e6e145.int(__s9param0.C2);
    }
    if (__s9param0.DPT) {
      this._dungeonProtectionTime = __dep_exact_f855840627e6e145.int(__s9param0.DPT);
    }
    if (__s9param0.RID) {
      this._rewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s9param0.RID);
    }
    if (this._dungeonLootC2 > 0) {
      this._rewardList.addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.dungeonLootC2));
    }
    if (this._dungeonProtectionTime > 0) {
      this._rewardList.addItem(new __dep_export_CollectableItemDungeonProtectionVO.CollectableItemDungeonProtectionVO(this._dungeonProtectionTime));
    }
    this._targetAreaVO = new __dep_export_EventdungeonMapobjectVO.EventdungeonMapobjectVO();
    this._targetAreaVO.parseAreaInfo(__s9param0.D);
    this._targetAreaVO.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID);
    this._hasWon = this._targetAreaVO.isDefeated;
  };
  Object.defineProperty(RandomdungeonEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return RandomdungeonEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return this._hasWon;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "hasUserSolvedEvent").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "dungeonProtectionTime", {
    get: function () {
      return this._dungeonProtectionTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "dungeonLootC2", {
    get: function () {
      return this._dungeonLootC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "targetAreaVO", {
    get: function () {
      return this._targetAreaVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  RandomdungeonEventVO.prototype.openDialog = function (__s32param0 = true) {
    this.executeOpenDialog(__s32param0, __dep_export_CastleRandomDungeonEventDialog.CastleRandomDungeonEventDialog, new __dep_export_CastleRandomDungeonEventDialogProperties.CastleRandomDungeonEventDialogProperties(this));
  };
  RandomdungeonEventVO.prototype.onDestroy = function () {
    if (__dep_export_CastleModel.CastleModel.worldmapData && __dep_export_CastleModel.CastleModel.worldmapData.areaTiles && this._targetAreaVO) {
      this._targetAreaVO.isVisibleOnMap = false;
      var __s34local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(this._targetAreaVO.absAreaPosX, this._targetAreaVO.absAreaPosY), "EventdungeonMapobjectVO");
      if (__s34local0) {
        __s34local0.isVisibleOnMap = false;
        __s34local0.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
      }
    }
  };
  RandomdungeonEventVO.prototype.isOwnWmoVO = function (__s38param0) {
    return __s38param0.areaType == this.targetAreaVO.areaType;
  };
  Object.defineProperty(RandomdungeonEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  RandomdungeonEventVO.__initialize_static_members = function () {
    RandomdungeonEventVO.EVENT_BUILDING_WOD = 219;
  };
  return RandomdungeonEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.RandomdungeonEventVO = __s0local0;
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemDungeonProtectionVO = require("gge-module:export_CollectableItemDungeonProtectionVO");
var __dep_export_CastleRandomDungeonEventDialog = require("gge-module:export_CastleRandomDungeonEventDialog");
var __dep_export_EventdungeonMapobjectVO = require("gge-module:export_EventdungeonMapobjectVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
