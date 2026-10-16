Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SAbortRaid = require("gge-module:export_C2SAbortRaid");
var __dep_export_C2SGetAllianceRaidBossStatus = require("gge-module:export_C2SGetAllianceRaidBossStatus");
var __dep_export_C2SSelectRaidBoss = require("gge-module:export_C2SSelectRaidBoss");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossLevelVO = require("gge-module:export_AllianceRaidbossLevelVO");
var __dep_export_AllianceRaidbossStageVO = require("gge-module:export_AllianceRaidbossStageVO");
var __dep_export_AllianceRaidbossVO = require("gge-module:export_AllianceRaidbossVO");
var __s0local0 = function (__s1param0) {
  function RaidBossData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._generalIDs = new Map();
    __s3local0._raidBosses = new Map();
    var __s3local1 = __s3param0.raidBosses;
    if (__s3local1) {
      __s3local1.forEach(function (__s6param0) {
        var __s6local0 = new __dep_export_AllianceRaidbossVO.AllianceRaidbossVO();
        __s6local0.parseXML(__s6param0);
        __s3local0._raidBosses.set(__s6local0.raidBossID, __s6local0);
      });
    }
    __s3local0._raidBossLevels = new Map();
    var __s3local2 = __s3param0.raidBossLevels;
    if (__s3local2) {
      __s3local2.forEach(function (__s9param0) {
        var __s9local0 = new __dep_export_AllianceRaidbossLevelVO.AllianceRaidbossLevelVO();
        __s9local0.parseXML(__s9param0);
        __s3local0._raidBossLevels.set(__s9local0.raidBossLevelID, __s9local0);
        var __s9local1 = __s3local0.getRaidBossByID(__s9local0.raidBossID);
        if (__s9local1) {
          __s9local1.addBossLevel(__s9local0);
        }
      });
    }
    __s3local0._raidBossStages = new Map();
    var __s3local3 = __s3param0.raidBossStages;
    if (__s3local3) {
      __s3local3.forEach(function (__s13param0) {
        var __s13local0 = new __dep_export_AllianceRaidbossStageVO.AllianceRaidbossStageVO();
        __s13local0.parseXML(__s13param0);
        __s3local0.getRaidBossLevelByID(__s13local0.raidBossLevelID).addStage(__s13local0);
        __s3local0._raidBossStages.set(__s13local0.raidBossStageID, __s13local0);
        if (!__s3local0._generalIDs.has(__s13local0.generalID)) {
          __s3local0._generalIDs.set(__s13local0.generalID, __s3local0.getRaidBossByID(__s3local0.getRaidBossLevelByID(__s13local0.raidBossLevelID).raidBossID));
        }
      });
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RaidBossData, __s1param0);
  RaidBossData.prototype.getRaidBossByGeneralID = function (__s16param0) {
    if (this._generalIDs.has(__s16param0)) {
      return this._generalIDs.get(__s16param0);
    } else {
      return null;
    }
  };
  RaidBossData.prototype.getRaidBossByID = function (__s20param0) {
    if (this._raidBosses.has(__s20param0)) {
      return this._raidBosses.get(__s20param0);
    } else {
      return null;
    }
  };
  RaidBossData.prototype.getRaidBossLevelByID = function (__s24param0) {
    if (this._raidBossLevels.has(__s24param0)) {
      return this._raidBossLevels.get(__s24param0);
    } else {
      return null;
    }
  };
  RaidBossData.prototype.getRaidBossStageByID = function (__s28param0) {
    if (this._raidBossStages.has(__s28param0)) {
      return this._raidBossStages.get(__s28param0);
    } else {
      return null;
    }
  };
  RaidBossData.prototype.requestBossStatus = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceRaidBossStatus.C2SGetAllianceRaidBossStatus());
  };
  RaidBossData.prototype.selectRaidBoss = function (__s34param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectRaidBoss.C2SSelectRaidBoss(__s34param0));
  };
  RaidBossData.prototype.abortRaid = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAbortRaid.C2SAbortRaid());
  };
  RaidBossData.prototype.canManageAllianceRaid = function () {
    return __dep_exact_26a421b704832cff.AllianceConst.canManageAllianceRaid(__dep_export_CastleModel.CastleModel.userData.allianceRank);
  };
  return RaidBossData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.RaidBossData = __s0local0;
