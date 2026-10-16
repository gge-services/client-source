Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_LevelUpVO = require("gge-module:export_LevelUpVO");
var __s0local0 = function (__s1param0) {
  function LevelUpData(__s3param0) {
    var __s3local0 = this;
    __s3local0._levelUps = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LevelUpData, __s1param0);
  LevelUpData.prototype.parseXML = function (__s5param0) {
    var __s5local0 = [];
    var __s5local1 = __s5param0.levelups;
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          var __s5local5 = new __dep_export_LevelUpVO.LevelUpVO();
          __s5local5.parseXML(__s5local4);
          __s5local0.push(__s5local5);
        }
      }
    }
    this._levelUps = __s5local0;
  };
  LevelUpData.prototype.getLevelUp = function (__s11param0, __s11param1 = false, __s11param2 = false) {
    if (this._levelUps != null) {
      for (var __s11local0 = 0, __s11local1 = this._levelUps; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.checkLevelRange(__s11param0, __s11param1) && __s11param2 == __s11local2.inSkipGroup) {
          return __s11local2;
        }
      }
    }
  };
  return LevelUpData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.LevelUpData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
