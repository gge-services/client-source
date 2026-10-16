Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleFactionInvasionCampNodeVO = require("gge-module:export_CastleFactionInvasionCampNodeVO");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionCampData(__s3param0) {
    var __s3local0 = this;
    __s3local0._nodesBlueFaction = new Map();
    __s3local0._nodesRedFaction = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionCampData, __s1param0);
  CastleFactionInvasionCampData.prototype.getXmlList = function (__s5param0) {
    return __s5param0.factioninvasioncamps;
  };
  CastleFactionInvasionCampData.prototype.parseXML = function (__s7param0) {
    var __s7local0 = new Map();
    var __s7local1 = new Map();
    var __s7local2 = new Map();
    var __s7local3 = this.getXmlList(__s7param0);
    if (__s7local3 != null) {
      for (var __s7local4 = 0, __s7local5 = __s7local3; __s7local4 < __s7local5.length; __s7local4++) {
        var __s7local6 = __s7local5[__s7local4];
        if (__s7local6 !== undefined) {
          var __s7local7 = this.getNewNode();
          __s7local7.parseXML(__s7local6);
          __s7local0.set(__s7local7.getId(), __s7local7);
          if (__s7local7.factionID == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION) {
            __s7local2.set(__s7local7.countVictory, __s7local7);
          } else {
            __s7local1.set(__s7local7.countVictory, __s7local7);
          }
        }
      }
    }
    this._nodes = __s7local0;
    this._nodesBlueFaction = __s7local2;
    this._nodesRedFaction = __s7local1;
  };
  CastleFactionInvasionCampData.prototype.getNewNode = function () {
    return new __dep_export_CastleFactionInvasionCampNodeVO.CastleFactionInvasionCampNodeVO();
  };
  CastleFactionInvasionCampData.prototype.getFactionInvasion = function (__s17param0, __s17param1) {
    if (__s17param1 == __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION) {
      return this._nodesBlueFaction.get(__s17param0);
    } else {
      return this._nodesRedFaction.get(__s17param0);
    }
  };
  return CastleFactionInvasionCampData;
}(require("gge-module:export_CastleXmlData").CastleXmlData);
exports.CastleFactionInvasionCampData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
