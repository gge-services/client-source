Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleOtherPlayerData() {
    var __s3local0 = __s1param0.call(this) || this;
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_1.CountryInstanceMappingEvent.PROCESS_COMPLETE, __s3local0.bindFunction(__s3local0.onNewLanguage));
    __s3local0._ownOwnerInfo = new __dep_export_OwnWorldMapOwnerInfoVO.OwnWorldMapOwnerInfoVO();
    __s3local0.resetOwnerInfo();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOtherPlayerData, __s1param0);
  CastleOtherPlayerData.prototype.reset = function () {
    this.resetOwnerInfo();
    this._ownOwnerInfo = new __dep_export_OwnWorldMapOwnerInfoVO.OwnWorldMapOwnerInfoVO();
  };
  CastleOtherPlayerData.prototype.resetOwnerInfo = function () {
    this._ownerInfo = new Map();
    __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.generateStandardNPCOwner().forEach(this.bindFunction(this.addToOwnerList));
  };
  CastleOtherPlayerData.prototype.addToOwnerList = function (__s9param0, __s9param1, __s9param2) {
    this.addOwnerInfo(__s9param0);
  };
  CastleOtherPlayerData.prototype.addOwnerInfo = function (__s11param0) {
    this._ownerInfo.set(__s11param0.playerID, __s11param0);
  };
  CastleOtherPlayerData.prototype.addDummyPlayer = function (__s13param0) {
    var __s13local0 = __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO.createDummy(__s13param0);
    this.addOwnerInfo(__s13local0);
  };
  CastleOtherPlayerData.prototype.getOwnInfoVO = function () {
    return this._ownOwnerInfo;
  };
  CastleOtherPlayerData.prototype.getOwnerInfoVO = function (__s17param0) {
    var __s17local0;
    if (__s17param0 == __dep_export_CastleModel.CastleModel.userData.playerID || __s17param0 == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP) {
      __s17local0 = this.getOwnInfoVO();
    } else if (!(__s17local0 = this._ownerInfo.get(__s17param0))) {
      if (__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s17param0)) {
        __s17local0 = __dep_export_CastleNPCOwnerFactory.CastleNPCOwnerFactory.getOwner(__s17param0);
      }
      if (__s17local0) {
        this.addOwnerInfo(__s17local0);
      }
    }
    return __s17local0;
  };
  CastleOtherPlayerData.prototype.parseOwnerInfo = function (__s23param0, __s23param1 = -1) {
    if (!__s23param0 || !__s23param0.OID) {
      return null;
    }
    if (__s23param1 == -1) {
      __s23param1 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    }
    var __s23local0 = __dep_exact_f855840627e6e145.int(__s23param0.OID);
    if (__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s23local0)) {
      return this.getOwnerInfoVO(__s23local0);
    }
    if (__s23param0.DUM) {
      if (!this._ownerInfo.get(__s23local0)) {
        this.addDummyPlayer(__s23local0);
      }
      return this._ownerInfo.get(__s23local0);
    }
    if (this._ownOwnerInfo && __s23local0 == this._ownOwnerInfo.playerID) {
      __dep_export_CastleModel.CastleModel.userData.allianceRank = parseInt(__s23param0.AR);
      return this._ownOwnerInfo;
    }
    if (this._ownerInfo.get(__s23local0)) {
      this._ownerInfo.get(__s23local0).fillFromParamObject(__s23param0, __s23param1);
      return this._ownerInfo.get(__s23local0);
    }
    var __s23local1 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s23local1.fillFromParamObject(__s23param0, __s23param1);
    this.addOwnerInfo(__s23local1);
    return __s23local1;
  };
  CastleOtherPlayerData.prototype.parseOwnerInfoArray = function (__s32param0) {
    if (__s32param0 && __s32param0.length > 0) {
      var __s32local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      if (__s32param0 != null) {
        for (var __s32local1 = 0, __s32local2 = __s32param0; __s32local1 < __s32local2.length; __s32local1++) {
          var __s32local3 = __s32local2[__s32local1];
          if (__s32local3 !== undefined) {
            this.parseOwnerInfo(__s32local3, __s32local0);
          }
        }
      }
    }
  };
  CastleOtherPlayerData.prototype.onNewLanguage = function (__s39param0) {
    this.resetOwnerInfo();
  };
  return CastleOtherPlayerData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleOtherPlayerData = __s0local0;
var __dep_export_CastleNPCOwnerFactory = require("gge-module:export_CastleNPCOwnerFactory");
var __dep_export_OwnWorldMapOwnerInfoVO = require("gge-module:export_OwnWorldMapOwnerInfoVO");
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
