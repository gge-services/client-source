Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_LevelUpPriceVO = require("gge-module:export_LevelUpPriceVO");
var __s0local0 = function (__s1param0) {
  function CastleBuyLevelData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyLevelData, __s1param0);
  CastleBuyLevelData.prototype.parseXML = function (__s5param0) {
    this.levelUpPrices = [];
    var __s5local0 = __s5param0.levelUpPrices;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_LevelUpPriceVO.LevelUpPriceVO();
          __s5local4.parseXML(__s5local3);
          this.levelUpPrices.push(__s5local4);
        }
      }
    }
  };
  CastleBuyLevelData.prototype.getLevelUpCost = function (__s11param0, __s11param1) {
    if (this.levelUpPrices != null) {
      for (var __s11local0 = 0, __s11local1 = this.levelUpPrices; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.fromLevel == __s11param0 && __s11local2.toLevel == __s11param1) {
          return __s11local2.c2Cost;
        }
      }
    }
    return 0;
  };
  return CastleBuyLevelData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleBuyLevelData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
