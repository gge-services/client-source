Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestColorVO = require("gge-module:export_AllianceCrestColorVO");
var __dep_export_AllianceCrestLayoutVO = require("gge-module:export_AllianceCrestLayoutVO");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceCrestData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._allianceLayouts = new Map();
    __s3local0._allianceColors = new Map();
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceCrestData, __s1param0);
  CastleAllianceCrestData.prototype.parseXML = function (__s5param0) {
    var __s5local0 = __s5param0.allianceCoatLayouts;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_AllianceCrestLayoutVO.AllianceCrestLayoutVO();
          __s5local4.parseXML(__s5local3);
          this._allianceLayouts.set(__s5local4.allianceCoatLayoutID, __s5local4);
        }
      }
    }
    var __s5local5 = __s5param0.allianceCoatColors;
    if (__s5local5 != null) {
      for (var __s5local6 = 0, __s5local7 = __s5local5; __s5local6 < __s5local7.length; __s5local6++) {
        var __s5local8 = __s5local7[__s5local6];
        if (__s5local8 !== undefined) {
          var __s5local9 = new __dep_export_AllianceCrestColorVO.AllianceCrestColorVO();
          __s5local9.parseXML(__s5local8);
          this._allianceColors.set(__s5local9.allianceCoatColorID, __s5local9);
        }
      }
    }
  };
  CastleAllianceCrestData.prototype.createRandomCrest = function () {
    var __s15local0 = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    var __s15local1 = [];
    for (var __s15local2 = 0, __s15local3 = Array.from(this._allianceLayouts.values()); __s15local2 < __s15local3.length; __s15local2++) {
      var __s15local4 = __s15local3[__s15local2];
      if (__s15local4.maxDuration <= 0 || __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getRemainingSecondsForLayout(__s15local4.allianceCoatLayoutID) > 0) {
        __s15local1.push(__s15local4);
      }
    }
    for (var __s15local5 = __s15local1[__dep_exact_9e901e8e2483a22f.MathBase.random(0, __s15local1.length - 1, true)], __s15local6 = __s15local5.allianceCoatLayoutID, __s15local7 = this._allianceColors.size, __s15local8 = [], __s15local9 = 0; __s15local9 < __s15local5.noofColors; __s15local9++) {
      var __s15local10 = __dep_exact_9e901e8e2483a22f.MathBase.random(1, __s15local7, true);
      __s15local8.push(__s15local10);
    }
    __s15local0.fillFromArray([__s15local6, __s15local8]);
    return __s15local0;
  };
  CastleAllianceCrestData.prototype.getRandomColor = function () {
    var __s22local0 = [];
    for (var __s22local1 = 0, __s22local2 = Array.from(this._allianceColors.values()); __s22local1 < __s22local2.length; __s22local1++) {
      var __s22local3 = __s22local2[__s22local1];
      __s22local0.push(__s22local3.allianceCoatColorID);
    }
    var __s22local4 = __s22local0[__dep_exact_9e901e8e2483a22f.MathBase.random(0, __s22local0.length - 1, true)];
    return this.getColorVOById(__s22local4);
  };
  CastleAllianceCrestData.prototype.getLayoutVOById = function (__s26param0) {
    return this._allianceLayouts.get(__s26param0);
  };
  CastleAllianceCrestData.prototype.getColorVOById = function (__s28param0) {
    return this._allianceColors.get(__s28param0);
  };
  CastleAllianceCrestData.prototype.getFreeLayouts = function () {
    var __s30local0 = [];
    for (var __s30local1 = 0, __s30local2 = Array.from(this._allianceLayouts.values()); __s30local1 < __s30local2.length; __s30local1++) {
      var __s30local3 = __s30local2[__s30local1];
      if (__s30local3.maxDuration <= 0) {
        __s30local0.push(__s30local3);
      }
    }
    return __s30local0;
  };
  CastleAllianceCrestData.prototype.getPremiumLayouts = function () {
    var __s35local0 = [];
    for (var __s35local1 = 0, __s35local2 = Array.from(this._allianceLayouts.values()); __s35local1 < __s35local2.length; __s35local1++) {
      var __s35local3 = __s35local2[__s35local1];
      if (__s35local3.maxDuration > 0) {
        __s35local0.push(__s35local3);
      }
    }
    return __s35local0;
  };
  CastleAllianceCrestData.prototype.getAllColors = function () {
    var __s40local0 = [];
    for (var __s40local1 = 0, __s40local2 = Array.from(this._allianceColors.values()); __s40local1 < __s40local2.length; __s40local1++) {
      var __s40local3 = __s40local2[__s40local1];
      __s40local0.push(__s40local3);
    }
    return __s40local0;
  };
  return CastleAllianceCrestData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleAllianceCrestData = __s0local0;
