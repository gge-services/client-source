Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceBattleGroundGetAllianceInfluenceVO = require("gge-module:export_C2SAllianceBattleGroundGetAllianceInfluenceVO");
var __dep_export_C2SAllianceBattleGroundGetPlayerInfluenceVO = require("gge-module:export_C2SAllianceBattleGroundGetPlayerInfluenceVO");
var __dep_export_C2SGetPlayerCollectorCurrencyVO = require("gge-module:export_C2SGetPlayerCollectorCurrencyVO");
var __dep_export_C2SGetPlayerTempServerCollectorCurrencyVO = require("gge-module:export_C2SGetPlayerTempServerCollectorCurrencyVO");
var __dep_export_CastleCollectorEventDataEvent = require("gge-module:export_CastleCollectorEventDataEvent");
var __dep_export_CollectEventInfoVO = require("gge-module:export_CollectEventInfoVO");
var __s0local0 = function (__s1param0) {
  function CastleCollectorEventData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._collectEventInfoVOs = new Map();
    var __s3local1 = __s3param0.collectorEventOptions;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = new __dep_export_CollectEventInfoVO.CollectEventInfoVO(__s3local4);
          __s3local0._collectEventInfoVOs.set(__s3local5.collectorEventOptionID, __s3local5);
        }
      }
    }
    var __s3local6 = __s3param0.collectorEventRewards;
    if (__s3local6 != null) {
      for (var __s3local7 = 0, __s3local8 = __s3local6; __s3local7 < __s3local8.length; __s3local7++) {
        var __s3local9 = __s3local8[__s3local7];
        if (__s3local9 !== undefined) {
          var __s3local10 = new __dep_export_CollectorEventRewardVO.CollectorEventRewardVO(__s3local9);
          if (__s3local0.getCollectInfoVOByID(__s3local10.eventOptionID)) {
            __s3local0.getCollectInfoVOByID(__s3local10.eventOptionID).addCollectEventRewardVO(__s3local10);
          }
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectorEventData, __s1param0);
  CastleCollectorEventData.prototype.getCollectInfoVOByID = function (__s14param0) {
    return this._collectEventInfoVOs.get(__s14param0);
  };
  CastleCollectorEventData.prototype.isCollectorEventCurrency = function (__s16param0) {
    if (this._collectEventInfoVOs != null) {
      for (var __s16local0 = 0, __s16local1 = Array.from(this._collectEventInfoVOs.values()); __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined && __s16local2.collectorCurrencyID == __s16param0) {
          return true;
        }
      }
    }
    return false;
  };
  CastleCollectorEventData.prototype.getPlayerCollectorAmount = function (__s22param0) {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPlayerCollectorCurrencyVO.C2SGetPlayerCollectorCurrencyVO(__s22param0));
  };
  CastleCollectorEventData.prototype.getTempserverCollectorAmount = function (__s24param0) {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPlayerTempServerCollectorCurrencyVO.C2SGetPlayerTempServerCollectorCurrencyVO(__s24param0));
  };
  CastleCollectorEventData.prototype.getABGCollectorAmount = function (__s26param0) {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetPlayerInfluenceVO.C2SAllianceBattleGroundGetPlayerInfluenceVO(__s26param0));
  };
  CastleCollectorEventData.prototype.getABGAllianceCollectorAmount = function (__s28param0) {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetAllianceInfluenceVO.C2SAllianceBattleGroundGetAllianceInfluenceVO(__s28param0));
  };
  CastleCollectorEventData.prototype.parse_PCC = function (__s30param0) {
    var __s30local0 = __dep_exact_f855840627e6e145.int(__s30param0.PID);
    this.lastGotAmountForTarget = __dep_exact_f855840627e6e145.int(__s30param0.CCA);
    this.dispatchEvent(new __dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, __s30local0, this.lastGotAmountForTarget));
  };
  CastleCollectorEventData.prototype.parse_GPIP = function (__s32param0) {
    var __s32local0 = __dep_exact_f855840627e6e145.int(__s32param0.PID);
    this.lastGotAmountForTarget = __dep_exact_f855840627e6e145.int(__s32param0.AMT);
    this.dispatchEvent(new __dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, __s32local0, this.lastGotAmountForTarget));
  };
  CastleCollectorEventData.prototype.parse_GAIP = function (__s34param0) {
    var __s34local0 = __dep_exact_f855840627e6e145.int(__s34param0.AID);
    this.lastGotAmountForTarget = __dep_exact_f855840627e6e145.int(__s34param0.AMT);
    this.dispatchEvent(new __dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent(__dep_export_CastleCollectorEventDataEvent.CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO, __s34local0, this.lastGotAmountForTarget));
  };
  return CastleCollectorEventData;
}(createjs.EventDispatcher);
exports.CastleCollectorEventData = __s0local0;
var __dep_export_CollectorEventRewardVO = require("gge-module:export_CollectorEventRewardVO");
