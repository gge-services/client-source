Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_GlobalEffectVO = require("gge-module:export_GlobalEffectVO");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __s0local0 = function (__s1param0) {
  function GlobalEffectData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._globalEffectVOs = new Map();
    for (var __s3local1 = 0, __s3local2 = __s3param0.globalEffects; __s3local1 < __s3local2.length; __s3local1++) {
      var __s3local3 = __s3local2[__s3local1];
      if (__s3local3 !== undefined) {
        var __s3local4 = new __dep_export_GlobalEffectVO.GlobalEffectVO();
        __s3local4.parseXml(__s3local3);
        if (__s3local0._globalEffectVOs.get(__s3local4.globalEffectID) == null) {
          __s3local0._globalEffectVOs.set(__s3local4.globalEffectID, []);
        }
        __s3local0._globalEffectVOs.get(__s3local4.globalEffectID).push(__s3local4);
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalEffectData, __s1param0);
  GlobalEffectData.prototype.isEffectBoosted = function (__s9param0) {
    return this._boostedGlobalEffectIDs.indexOf(__s9param0) >= 0;
  };
  GlobalEffectData.prototype.getGlobalEffectVOsByGlobalEffectID = function (__s11param0) {
    return this._globalEffectVOs.get(__s11param0);
  };
  GlobalEffectData.prototype.getGlobalEffectsByType = function (__s13param0, __s13param1 = null) {
    if (!this.eventVO) {
      return [];
    }
    var __s13local0 = [];
    for (var __s13local1 = 0, __s13local2 = this.eventVO.globalEffectData; __s13local1 < __s13local2.length; __s13local1++) {
      var __s13local3 = __s13local2[__s13local1];
      if (__s13local3 !== undefined && __s13local3.length != 0 && !(__s13local3[1] < __dep_export_CachedTimer.CachedTimer.getCachedTimer())) {
        var __s13local4 = __s13local3[0];
        if (__s13local4 != null) {
          for (var __s13local5 = 0, __s13local6 = __s13local4; __s13local5 < __s13local6.length; __s13local5++) {
            var __s13local7 = __s13local6[__s13local5];
            if (__s13local7 !== undefined && __s13local7.canBeUsed && __s13local7.bonus.matchesConditions(__s13param0, __s13param1.areaType, __s13param1.spaceId, __s13param1.wodId, __s13param1.otherPlayer)) {
              __s13local0.push(__s13local7.bonus);
            }
          }
        }
      }
    }
    return __s13local0;
  };
  GlobalEffectData.prototype.getGlobalEffectValue = function (__s23param0, __s23param1 = -1, __s23param2 = -1, __s23param3 = -1) {
    var __s23local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getGlobalEffectsByType(__s23param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s23param2, __s23param3, __s23param1)), true);
    return __s23local0 || new __s23param0.valueClass();
  };
  GlobalEffectData.prototype.getBonusByEffectType = function (__s25param0, __s25param1 = -1, __s25param2 = -1, __s25param3 = -1) {
    if (!this.eventVO) {
      return 0;
    }
    var __s25local0 = 0;
    var __s25local1 = __dep_exact_f855840627e6e145.int(__s25param1 < 0 ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : __s25param1);
    var __s25local2 = __dep_exact_f855840627e6e145.int(__s25param2 < 0 ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : __s25param2);
    for (var __s25local3 = 0, __s25local4 = this.eventVO.globalEffectData; __s25local3 < __s25local4.length; __s25local3++) {
      var __s25local5 = __s25local4[__s25local3];
      if (__s25local5 !== undefined && __s25local5.length != 0 && !(__s25local5[1] < __dep_export_CachedTimer.CachedTimer.getCachedTimer())) {
        var __s25local6 = __s25local5[0];
        if (__s25local6 != null) {
          for (var __s25local7 = 0, __s25local8 = __s25local6; __s25local7 < __s25local8.length; __s25local7++) {
            var __s25local9 = __s25local8[__s25local7];
            if (__s25local9 !== undefined && __s25local9.canBeUsed && __s25local9.bonus.matchesConditions(__s25param0, __s25local1, __s25local2, __s25param3)) {
              __s25local0 += __s25local9.bonus.strength;
            }
          }
        }
      }
    }
    return __s25local0;
  };
  Object.defineProperty(GlobalEffectData.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectData.prototype, "eventBuffVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectData.prototype.parse_GIE = function (__s39param0) {
    if (__s39param0 && __s39param0.GE) {
      this._boostedGlobalEffectIDs = __s39param0.GE;
      for (var __s39local0 = 0, __s39local1 = this._boostedGlobalEffectIDs; __s39local0 < __s39local1.length; __s39local0++) {
        var __s39local2;
        var __s39local3 = __s39local1[__s39local0];
        if (this.eventVO) {
          __s39local2 = this.eventVO.getGlobalEffectByID(__s39local3);
        }
        if (__s39local2) {
          __s39local2.addBuffStrengthValue(this.eventBuffVO.getBoostValueForGlobalEffect(__s39local3));
        }
      }
      this.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED));
    }
  };
  return GlobalEffectData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.GlobalEffectData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
