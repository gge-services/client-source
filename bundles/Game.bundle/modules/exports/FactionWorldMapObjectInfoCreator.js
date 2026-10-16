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
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_WorldMapObjectInfoVO = require("gge-module:export_WorldMapObjectInfoVO");
var __s0local0 = function () {
  function FactionWorldMapObjectInfoCreator() {}
  FactionWorldMapObjectInfoCreator.prototype.createWorldMapInfo = function (__s5param0) {
    this._mapObjectInfoVO = new __dep_export_WorldMapObjectInfoVO.WorldMapObjectInfoVO();
    this._worldMapObjectVO = __s5param0;
    this._mapObjectInfoVO.xPos = __s5param0.absAreaPosX;
    this._mapObjectInfoVO.yPos = __s5param0.absAreaPosY;
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.getPlayerLevel(__s5param0));
    this._mapObjectInfoVO.levelTextVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text("level"), __s5local0]);
    this._mapObjectInfoVO.crestVO = __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__s5param0.ownerInfo);
    this._mapObjectInfoVO.playerID = __dep_exact_f855840627e6e145.int(this._worldMapObjectVO.ownerInfo.playerID);
    this._mapObjectInfoVO.isPlayerClickAble = !__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this._mapObjectInfoVO.playerID);
    this._mapObjectInfoVO.isProtected = false;
    this.setPlayerName(false);
    this.setCastleName(false);
    if (this._worldMapObjectVO.ownerInfo.isFactionProtected) {
      this._mapObjectInfoVO.isProtected = true;
      this._mapObjectInfoVO.remainingProtectionTime = this._worldMapObjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds;
    }
    if (this.hasPlayerName(this._worldMapObjectVO)) {
      var __s5local1 = this._worldMapObjectVO.ownerInfo.factionID == __dep_exact_26a421b704832cff.FactionConst.RED_FACTION ? "red_faction" : "blue_faction";
      this._mapObjectInfoVO.isInAlliance = true;
      this._mapObjectInfoVO.clanNameTextVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local1);
      this._mapObjectInfoVO.isClanNameClickAble = false;
    }
  };
  FactionWorldMapObjectInfoCreator.prototype.hasPlayerName = function (__s9param0) {
    return !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0, "FactionVillageMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0, "FactionCapitalMapobjectVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0, "FactionTowerMapobjectVO");
  };
  FactionWorldMapObjectInfoCreator.prototype.getPlayerLevel = function (__s11param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11param0, "FactionVillageMapobjectVO")) {
      return __dep_exact_f855840627e6e145.int(__s11param0.dungeonLevel);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11param0, "FactionCapitalMapobjectVO")) {
      return __dep_exact_f855840627e6e145.int(__s11param0.dungeonLevel);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11param0, "FactionTowerMapobjectVO")) {
      return __dep_exact_f855840627e6e145.int(__s11param0.dungeonLevel);
    } else {
      return __dep_exact_f855840627e6e145.int(this._worldMapObjectVO.ownerInfo.playerLevel);
    }
  };
  FactionWorldMapObjectInfoCreator.prototype.setPlayerName = function (__s17param0) {
    if (this._worldMapObjectVO.isDestroyed) {
      this._mapObjectInfoVO.playerNameTextVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("mapobject_destroyed");
    } else {
      this._mapObjectInfoVO.playerNameTextVO = __s17param0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._worldMapObjectVO.ownerInfo.playerName) : new __dep_exact_92d05af59ee2ff30_2.TextVO(this._worldMapObjectVO.ownerInfo.playerName);
    }
  };
  FactionWorldMapObjectInfoCreator.prototype.setCastleName = function (__s21param0) {
    this._mapObjectInfoVO.castleNameTextVO = __s21param0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._worldMapObjectVO.areaNameString) : new __dep_exact_92d05af59ee2ff30_2.TextVO(this._worldMapObjectVO.areaNameString);
  };
  Object.defineProperty(FactionWorldMapObjectInfoCreator.prototype, "worldMapInfo", {
    get: function () {
      return this._mapObjectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return FactionWorldMapObjectInfoCreator;
}();
exports.FactionWorldMapObjectInfoCreator = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapInfoCreator");
