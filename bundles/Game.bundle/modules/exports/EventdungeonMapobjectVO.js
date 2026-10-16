Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function EventdungeonMapobjectVO() {
    var __s3local0 = this;
    __s3local0._isDefeated = false;
    __s3local0._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Eventdungeon";
    __s3local0._areaType = __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_EVENT_DUNGEON;
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventdungeonMapobjectVO, __s1param0);
  EventdungeonMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0;
    var __s5local1 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local2 = __dep_exact_26a421b704832cff.DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
    if (this._ownerInfo && this._ownerInfo.playerID != 0) {
      __s5local2 = this._ownerInfo.playerID;
    } else {
      var __s5local3 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_DUNGEON), "RandomdungeonEventVO");
      if (__s5local3) {
        __s5local2 = __s5local3.playerID;
      }
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s5local2);
    }
    __s5local0 = __s5local2 == __dep_exact_26a421b704832cff.DungeonConst.APRIL_DUNGEON_EVENT_PLAYER_ID ? "Eventdungeon_Mapobject_Cow" : __s5local2 == __dep_exact_26a421b704832cff.DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID ? "Eventdungeon_Mapobject" : "Eventdungeon_Mapobject_" + Math.abs(__s5local2);
    __s5local1.addItem(this.getAsExternalClip(__s5local0));
    return __s5local1;
  };
  EventdungeonMapobjectVO.prototype.parseAreaInfo = function (__s10param0) {
    this._areaType = __s10param0[0];
    this._absAreaPosX = __s10param0[1];
    this._absAreaPosY = __s10param0[2];
    if (__s10param0.length > 3) {
      this._spyInfoReceivingTime = Date.now() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this._secondsSinceEspionage = __s10param0[3];
      this._dungeonLevel = __dep_exact_f855840627e6e145.int(__s10param0[4]);
      this._isDefeated = __s10param0[5] == 1;
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    var __s10local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_DUNGEON), "RandomdungeonEventVO");
    if (__s10local0) {
      this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s10local0.playerID);
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "dungeonWallLevel", {
    get: function () {
      return Math.min(__dep_exact_26a421b704832cff.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel), 2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "kingdomID").get.call(this);
    },
    set: function (__s21param0) {
      this._kingdomID = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "isDefeated", {
    get: function () {
      return this._isDefeated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("eventDungeon_castleName_" + this._ownerInfo.playerID);
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  EventdungeonMapobjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return 0;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "moatLevel").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  return EventdungeonMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.EventdungeonMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
