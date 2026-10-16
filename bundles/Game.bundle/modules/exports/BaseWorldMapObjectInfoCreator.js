Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_instanceOf_IDungeonMapobjectVO = require("gge-module:export_instanceOf_IDungeonMapobjectVO");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_WorldMapObjectInfoVO = require("gge-module:export_WorldMapObjectInfoVO");
var __s0local0 = function () {
  function BaseWorldMapObjectInfoCreator() {}
  BaseWorldMapObjectInfoCreator.prototype.createWorldMapInfo = function (__s5param0) {
    this._mapObjectInfoVO = new __dep_export_WorldMapObjectInfoVO.WorldMapObjectInfoVO();
    this._worldMapObjectVO = __s5param0;
    this._mapObjectInfoVO.xPos = __s5param0.absAreaPosX;
    this._mapObjectInfoVO.yPos = __s5param0.absAreaPosY;
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.getPlayerLevel(__s5param0));
    this._mapObjectInfoVO.levelTextVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text("level"), __s5local0]);
    this._mapObjectInfoVO.crestVO = this._worldMapObjectVO.ownerInfo.crest;
    this._mapObjectInfoVO.playerID = __dep_exact_f855840627e6e145.int(this._worldMapObjectVO.ownerInfo.playerID);
    this._mapObjectInfoVO.isPlayerClickAble = !__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this._mapObjectInfoVO.playerID);
    this._mapObjectInfoVO.isProtected = false;
    this.setPlayerName(false);
    this.setCastleName(false);
    if (!this._worldMapObjectVO.ignoresPeaceMode) {
      if (this._worldMapObjectVO.ownerInfo.isNoobProtected || this._worldMapObjectVO.ownerInfo.isPeaceProtected) {
        this._mapObjectInfoVO.isProtected = true;
        if (this._worldMapObjectVO.ownerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
          this._mapObjectInfoVO.remainingProtectionTime = Math.max(__dep_export_CastleModel.CastleModel.userData.getRemainingNoobTime(), __dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
        } else {
          this._mapObjectInfoVO.remainingProtectionTime = Math.max(this._worldMapObjectVO.ownerInfo.remainingPeaceTime, this._worldMapObjectVO.ownerInfo.remainingNoobTime);
        }
      }
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO")) {
      var __s5local1 = this._worldMapObjectVO;
      this._mapObjectInfoVO.isProtected = __s5local1.canBeAttackedButHasPeacemode();
    }
    if (__s5param0.ownerInfo.isInAlliance) {
      this._mapObjectInfoVO.isInAlliance = true;
      this._mapObjectInfoVO.isClanNameClickAble = true;
      this._mapObjectInfoVO.allianceID = __dep_exact_f855840627e6e145.int(__s5param0.ownerInfo.allianceID);
      this._mapObjectInfoVO.clanNameTextVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(__s5param0.ownerInfo.allianceName);
    }
  };
  BaseWorldMapObjectInfoCreator.prototype.getPlayerLevel = function (__s13param0) {
    var __s13local0 = 0;
    if (__dep_export_instanceOf_IDungeonMapobjectVO.instanceOf_IDungeonMapobjectVO(__s13param0)) {
      __s13local0 = __dep_exact_f855840627e6e145.int(__s13param0.dungeonLevel);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "ResourceIsleMapobjectVO")) {
      __s13local0 = __s13param0.ownerInfo && __s13param0.ownerInfo.playerID > 0 ? __dep_exact_f855840627e6e145.int(__s13param0.ownerInfo.playerLevel) : __dep_exact_f855840627e6e145.int(__s13param0.villageLevel);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "VillageMapobjectVO")) {
      __s13local0 = __s13param0.minimumOwnerLevel;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13param0, "AllianceRaidEventPortalMapobjectVO")) {
      var __s13local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
      var __s13local2 = __s13local1 ? __s13local1.raidBossServerDataVO.getCurrentXMLBossLevelDataVO() : null;
      __s13local0 = __s13local2 ? __s13local2.level : 0;
    } else {
      __s13local0 = __dep_exact_f855840627e6e145.int(this._worldMapObjectVO.ownerInfo.playerLevel);
    }
    return __s13local0;
  };
  BaseWorldMapObjectInfoCreator.prototype.setPlayerName = function (__s20param0) {
    this._mapObjectInfoVO.playerNameTextVO = __s20param0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._worldMapObjectVO.ownerInfo.playerName) : new __dep_exact_92d05af59ee2ff30_2.TextVO(this._worldMapObjectVO.ownerInfo.playerName);
  };
  BaseWorldMapObjectInfoCreator.prototype.setCastleName = function (__s22param0) {
    this._mapObjectInfoVO.castleNameTextVO = __s22param0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._worldMapObjectVO.areaNameString) : new __dep_exact_92d05af59ee2ff30_2.TextVO(this._worldMapObjectVO.areaNameString);
  };
  Object.defineProperty(BaseWorldMapObjectInfoCreator.prototype, "worldMapInfo", {
    get: function () {
      return this._mapObjectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return BaseWorldMapObjectInfoCreator;
}();
exports.BaseWorldMapObjectInfoCreator = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapInfoCreator");
