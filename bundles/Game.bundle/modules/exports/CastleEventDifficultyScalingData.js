Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_DifficultyScalingCampXmlVO = require("gge-module:export_DifficultyScalingCampXmlVO");
var __dep_export_EventAutoScalingDifficultyVO = require("gge-module:export_EventAutoScalingDifficultyVO");
var __dep_export_EventAutoScalingDifficultyEffectVO = require("gge-module:export_EventAutoScalingDifficultyEffectVO");
var __dep_export_EventAutoScalingDifficultyTypeVO = require("gge-module:export_EventAutoScalingDifficultyTypeVO");
var __dep_export_EventAutoScalingVO = require("gge-module:export_EventAutoScalingVO");
var __s0local0 = function (__s1param0) {
  function CastleEventDifficultyScalingData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._eventAutoScalingDifficultiesVOsByEventID = new Map();
    __s3local0._eventAutoScalingDifficultiesVOsByDifficultyID = new Map();
    __s3local0._eventAutoScalingDifficultyEffectVOsByDifficultyID = new Map();
    __s3local0._eventAutoScalingDifficultyTypeVOsByDifficultyID = new Map();
    __s3local0._eventAutoScalingsVOsByDifficultyID = new Map();
    __s3local0._eventAutoScalingCamps = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEventDifficultyScalingData, __s1param0);
  CastleEventDifficultyScalingData.prototype.parseXML = function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s5param0.eventAutoScalingDifficultyTypes; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = new __dep_export_EventAutoScalingDifficultyTypeVO.EventAutoScalingDifficultyTypeVO();
        __s5local3.parseXML(__s5local2);
        this._eventAutoScalingDifficultyTypeVOsByDifficultyID.set(__s5local3.difficultyTypeID, __s5local3);
      }
    }
    for (var __s5local4 = 0, __s5local5 = __s5param0.eventAutoScalingDifficulties; __s5local4 < __s5local5.length; __s5local4++) {
      var __s5local6 = __s5local5[__s5local4];
      if (__s5local6 !== undefined) {
        var __s5local7 = new __dep_export_EventAutoScalingDifficultyVO.EventAutoScalingDifficultyVO();
        __s5local7.parseXML(__s5local6);
        if (!this._eventAutoScalingDifficultiesVOsByEventID.get(__s5local7.eventID)) {
          this._eventAutoScalingDifficultiesVOsByEventID.set(__s5local7.eventID, []);
        }
        this._eventAutoScalingDifficultiesVOsByDifficultyID.set(__s5local7.difficultyID, __s5local7);
        this._eventAutoScalingDifficultiesVOsByEventID.get(__s5local7.eventID).push(__s5local7);
      }
    }
    for (var __s5local8 = 0, __s5local9 = __s5param0.eventAutoScalingLordEffects; __s5local8 < __s5local9.length; __s5local8++) {
      var __s5local10 = __s5local9[__s5local8];
      if (__s5local10 !== undefined) {
        var __s5local11 = new __dep_export_EventAutoScalingDifficultyEffectVO.EventAutoScalingDifficultyEffectVO();
        __s5local11.parseXML(__s5local10);
        if (!this._eventAutoScalingDifficultyEffectVOsByDifficultyID.get(__s5local11.difficultyID)) {
          this._eventAutoScalingDifficultyEffectVOsByDifficultyID.set(__s5local11.difficultyID, []);
        }
        this._eventAutoScalingDifficultyEffectVOsByDifficultyID.get(__s5local11.difficultyID).push(__s5local11);
      }
    }
    for (var __s5local12 = 0, __s5local13 = __s5param0.eventAutoScalings; __s5local12 < __s5local13.length; __s5local12++) {
      var __s5local14 = __s5local13[__s5local12];
      if (__s5local14 !== undefined) {
        var __s5local15 = new __dep_export_EventAutoScalingVO.EventAutoScalingVO();
        __s5local15.parseXML(__s5local14);
        this._eventAutoScalingsVOsByDifficultyID.set(__s5local15.difficultyID, __s5local15);
      }
    }
    for (var __s5local16 = 0, __s5local17 = __s5param0.eventAutoScalingCamps; __s5local16 < __s5local17.length; __s5local16++) {
      var __s5local18 = __s5local17[__s5local16];
      if (__s5local18 !== undefined) {
        var __s5local19 = new __dep_export_DifficultyScalingCampXmlVO.DifficultyScalingCampXmlVO();
        __s5local19.parseXML(__s5local18);
        this._eventAutoScalingCamps.set(__s5local19.id, __s5local19);
      }
    }
  };
  CastleEventDifficultyScalingData.prototype.getDifficultyTypesByTypeID = function (__s24param0) {
    return this._eventAutoScalingDifficultyTypeVOsByDifficultyID.get(__s24param0);
  };
  CastleEventDifficultyScalingData.prototype.getDifficultiesByEventID = function (__s26param0) {
    return this._eventAutoScalingDifficultiesVOsByEventID.get(__s26param0);
  };
  CastleEventDifficultyScalingData.prototype.getDifficultyVOByDifficultyID = function (__s28param0) {
    return this._eventAutoScalingDifficultiesVOsByDifficultyID.get(__s28param0);
  };
  CastleEventDifficultyScalingData.prototype.getDifficultyEffectsByDifficultyID = function (__s30param0) {
    return this._eventAutoScalingDifficultyEffectVOsByDifficultyID.get(__s30param0);
  };
  CastleEventDifficultyScalingData.prototype.getAutoScalingByDifficultyID = function (__s32param0) {
    return this._eventAutoScalingsVOsByDifficultyID.get(__s32param0);
  };
  CastleEventDifficultyScalingData.prototype.getCampByEventAutoScalingCampID = function (__s34param0) {
    return this._eventAutoScalingCamps.get(__s34param0);
  };
  return CastleEventDifficultyScalingData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleEventDifficultyScalingData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
