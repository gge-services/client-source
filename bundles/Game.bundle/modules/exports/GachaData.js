Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_GachaXmlVO = require("gge-module:export_GachaXmlVO");
var __s0local0 = function (__s1param0) {
  function GachaData() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaData, __s1param0);
  GachaData.prototype.init = function (__s5param0) {
    var __s5local0 = this;
    this.reset();
    var __s5local1 = __s5param0.gachaEvents;
    if (__s5local1 != null) {
      __s5local1.forEach(function (__s8param0) {
        var __s8local0 = new __dep_export_GachaXmlVO.GachaXmlVO();
        __s8local0.init(__s8param0);
        __s5local0._gachaVOs.set(__s8local0.gachaID, __s8local0);
      });
    }
  };
  GachaData.prototype.reset = function () {
    this._gachaVOs = new Map();
  };
  GachaData.prototype.getGachaVOs = function (__s12param0, __s12param1, __s12param2) {
    var __s12local0 = [];
    this._gachaVOs.forEach(function (__s14param0) {
      if (__s14param0.eventID == __s12param0 && __s14param0.rewardSetID == __s12param1 && __s14param0.leagueTypeIDs.indexOf(__s12param2) != -1) {
        __s12local0.push(__s14param0);
      }
    });
    return __s12local0;
  };
  GachaData.prototype.getGachaVOByLevel = function (__s17param0, __s17param1, __s17param2, __s17param3) {
    for (var __s17local0 = this.getGachaVOs(__s17param0, __s17param1, __s17param2), __s17local1 = 0; __s17local1 < __s17local0.length; __s17local1++) {
      var __s17local2 = __s17local0[__s17local1];
      if (__s17local2.gachaLevel == __s17param3) {
        return __s17local2;
      }
    }
    return __s17local0[0] || null;
  };
  GachaData.prototype.getCurrentGachaVO = function (__s22param0, __s22param1, __s22param2, __s22param3) {
    for (var __s22local0 = this.getGachaVOs(__s22param0, __s22param1, __s22param2), __s22local1 = 0; __s22local1 < __s22local0.length; __s22local1++) {
      var __s22local2 = __s22local0[__s22local1];
      if (__s22param3 >= __s22local2.minPulls && __s22param3 <= __s22local2.maxPulls) {
        return __s22local2;
      }
    }
    return __s22local0[0] || null;
  };
  GachaData.prototype.getGachaVOByID = function (__s27param0) {
    return this._gachaVOs.get(__s27param0);
  };
  GachaData.prototype.getAllGachaVOs = function () {
    return this._gachaVOs;
  };
  return GachaData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.GachaData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleBasicData");
