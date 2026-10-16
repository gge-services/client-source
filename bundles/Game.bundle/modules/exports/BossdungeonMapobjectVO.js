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
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetDetailPlayerInfo = require("gge-module:export_C2SGetDetailPlayerInfo");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function BossdungeonMapobjectVO() {
    var __s3local0 = this;
    __s3local0._defeaterPlayerID = 0;
    __s3local0._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Bossdungeon";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_BOSS_DUNGEON;
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BossdungeonMapobjectVO, __s1param0);
  BossdungeonMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0;
    var __s5local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s5local2 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    __s5local0 = this.isCoolingDown ? "Bossdungeon_Mapobject_" + __s5local1 + "_Damaged" : "Bossdungeon_Mapobject_" + __s5local1;
    __s5local2.addItem(this.getAsExternalClip(__s5local0));
    return __s5local2;
  };
  BossdungeonMapobjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this._areaType = __s7param0[0];
    this._absAreaPosX = __s7param0[1];
    this._absAreaPosY = __s7param0[2];
    this._secondsSinceEspionage = __s7param0[3];
    this._dungeonLevel = __dep_exact_f855840627e6e145.int(__s7param0[4]);
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._defeaterPlayerID = __dep_exact_f855840627e6e145.int(__s7param0[6]);
    this._kingdomID = __s7param0[7];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._isVisibleOnMap = true;
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID - (this._kingdomID - 1));
    if (this._defeaterPlayerID > 0 && !__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._defeaterPlayerID)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailPlayerInfo.C2SGetDetailPlayerInfo(this._defeaterPlayerID));
    }
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "kingdomID").get.call(this);
    },
    set: function (__s12param0) {
      this._kingdomID = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "defeaterInfo", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._defeaterPlayerID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_bossDungeon_castleName_" + this.kingdomID);
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  BossdungeonMapobjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "dungeonWallLevel", {
    get: function () {
      switch (this._kingdomID) {
        case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
          return 2;
        case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
        case __dep_exact_26a421b704832cff_3.WorldVolcano.KINGDOM_ID:
          return 3;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  return BossdungeonMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.BossdungeonMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
