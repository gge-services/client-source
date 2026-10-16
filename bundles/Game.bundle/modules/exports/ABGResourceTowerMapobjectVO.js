Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_AAllianceInvasionCampMapObjectVO = require("gge-module:export_AAllianceInvasionCampMapObjectVO");
var __s0local0 = function (__s1param0) {
  function ABGResourceTowerMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._battlelogDungeonLevel = 0;
    __s3local0.name = "ABGResourceTower";
    __s3local0.group = "Mapobject";
    __s3local0.type = "-";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGResourceTowerMapobjectVO, __s1param0);
  ABGResourceTowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = "ABGResourceTower_Mapobject_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin || !__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local1)) {
      __s5local1 = "ABGResourceTower_Mapobject_Maya";
    }
    __s5local0.addItem(this.getAsExternalClip(__s5local1));
    return __s5local0;
  };
  ABGResourceTowerMapobjectVO.prototype.parseData = function (__s8param0) {
    __s1param0.prototype.parseData.call(this, __s8param0);
    this._ownerInfo = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.getOwner(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ABG_CULTISTS);
    this._ownerInfo.playerLevel = this.allianceInvasionCampNode.level;
  };
  ABGResourceTowerMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s10param0) {
    this._ownerInfo = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.getOwner(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ABG_CULTISTS);
    this._battlelogDungeonLevel = __s10param0.DL;
    this._ownerInfo.playerLevel = this._battlelogDungeonLevel;
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s10param0);
  };
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      if (this._battlelogDungeonLevel > 0) {
        return this._battlelogDungeonLevel;
      } else {
        return this.allianceInvasionCampNode.level;
      }
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("resourceTower_maya");
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "eventType", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO.prototype, "eventType").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  ABGResourceTowerMapobjectVO.prototype.canBeAttacked = function () {
    return !this.isCoolingDown;
  };
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return false;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO.prototype, "canBeSpied").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  return ABGResourceTowerMapobjectVO;
}(__dep_export_AAllianceInvasionCampMapObjectVO.AAllianceInvasionCampMapObjectVO);
exports.ABGResourceTowerMapobjectVO = __s0local0;
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
