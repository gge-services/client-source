Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionCampNodeVO() {
    var __s3local0 = this;
    __s3local0._factionInvasionCampID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionCampNodeVO, __s1param0);
  CastleFactionInvasionCampNodeVO.prototype.parseXML = function (__s5param0) {
    __s1param0.prototype.parseXML.call(this, __s5param0);
    this._factionInvasionCampID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("factionInvasionCampID", __s5param0, "0"));
  };
  CastleFactionInvasionCampNodeVO.prototype.getId = function () {
    return this._factionInvasionCampID;
  };
  return CastleFactionInvasionCampNodeVO;
}(require("gge-module:export_CastleInvasionCampNodeVO").CastleInvasionCampNodeVO);
exports.CastleFactionInvasionCampNodeVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
