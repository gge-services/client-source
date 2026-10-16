Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleXmlData = require("gge-module:export_CastleXmlData");
var __dep_export_CastleAllianceInvasionCampNodeVO = require("gge-module:export_CastleAllianceInvasionCampNodeVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInvasionCampData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInvasionCampData, __s1param0);
  CastleAllianceInvasionCampData.prototype.getXmlList = function (__s5param0) {
    return __s5param0.allianceInvasionCamps;
  };
  CastleAllianceInvasionCampData.prototype.getNewNode = function () {
    return new __dep_export_CastleAllianceInvasionCampNodeVO.CastleAllianceInvasionCampNodeVO();
  };
  CastleAllianceInvasionCampData.prototype.getAllianceCamp = function (__s9param0, __s9param1) {
    if (__s9param1 != undefined && __s9param1 > 0) {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(__s9param1);
    } else {
      return this._nodes.get(__s9param0);
    }
  };
  CastleAllianceInvasionCampData.prototype.getAllianceCampByLevel = function (__s13param0, __s13param1) {
    if (this._nodes != null) {
      for (var __s13local0 = 0, __s13local1 = Array.from(this._nodes.values()); __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined && __s13local2.eventID == __s13param0 && __s13local2.level == __s13param1) {
          return __s13local2;
        }
      }
    }
    return null;
  };
  return CastleAllianceInvasionCampData;
}(__dep_export_CastleXmlData.CastleXmlData);
exports.CastleAllianceInvasionCampData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
