Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleXmlData = require("gge-module:export_CastleXmlData");
var __dep_export_DaimyoXmlVO = require("gge-module:export_DaimyoXmlVO");
var __s0local0 = function (__s1param0) {
  function DaimyoTownshipXmlData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DaimyoTownshipXmlData, __s1param0);
  DaimyoTownshipXmlData.prototype.getXmlList = function (__s5param0) {
    return __s5param0.daimyoTownships;
  };
  DaimyoTownshipXmlData.prototype.getNewNode = function () {
    return new __dep_export_DaimyoXmlVO.DaimyoXmlVO();
  };
  DaimyoTownshipXmlData.prototype.getDaimyoTownship = function (__s9param0, __s9param1, __s9param2) {
    if (__s9param2 > 0) {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(__s9param2);
    }
    if (this._nodes != null) {
      for (var __s9local0 = 0, __s9local1 = Array.from(this._nodes.values()); __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined && __s9local2.rank == __s9param0 && (__s9param1 == -1 || __s9local2.level == __s9param1)) {
          return __s9local2;
        }
      }
    }
    return null;
  };
  DaimyoTownshipXmlData.prototype.getDaimyoTownshipByID = function (__s16param0, __s16param1) {
    if (__s16param1 > 0) {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(__s16param1);
    }
    if (this._nodes != null) {
      for (var __s16local0 = 0, __s16local1 = Array.from(this._nodes.values()); __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined && __s16local2.id == __s16param0) {
          return __s16local2;
        }
      }
    }
    return null;
  };
  return DaimyoTownshipXmlData;
}(__dep_export_CastleXmlData.CastleXmlData);
exports.DaimyoTownshipXmlData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
