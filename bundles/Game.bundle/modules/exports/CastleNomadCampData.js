Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXmlData = require("gge-module:export_CastleXmlData");
var __dep_export_CastleInvasionCampNodeVO = require("gge-module:export_CastleInvasionCampNodeVO");
var __s0local0 = function (__s1param0) {
  function CastleNomadCampData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadCampData, __s1param0);
  CastleNomadCampData.prototype.getXmlList = function (__s5param0) {
    return __s5param0.nomadCamps;
  };
  CastleNomadCampData.prototype.getNewNode = function () {
    return new __dep_export_CastleInvasionCampNodeVO.CastleInvasionCampNodeVO();
  };
  CastleNomadCampData.prototype.getNomadCamp = function (__s9param0) {
    return this._nodes.get(__s9param0);
  };
  return CastleNomadCampData;
}(__dep_export_CastleXmlData.CastleXmlData);
exports.CastleNomadCampData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
