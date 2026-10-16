Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleAllianceFameData(__s3param0) {
    this.allianceFameVOs = [];
    var __s3local0 = __s3param0.alliancefameranks;
    if (__s3local0 != null) {
      for (var __s3local1 = 0, __s3local2 = __s3local0; __s3local1 < __s3local2.length; __s3local1++) {
        var __s3local3 = __s3local2[__s3local1];
        if (__s3local3 !== undefined) {
          var __s3local4 = new __dep_export_AllianceFameLevelVO.AllianceFameLevelVO();
          __s3local4.fillFromParamXML(__s3local3);
          this.allianceFameVOs.push(__s3local4);
        }
      }
    }
  }
  CastleAllianceFameData.prototype.getFameVOByLevel = function (__s9param0) {
    if (this.allianceFameVOs != null) {
      for (var __s9local0 = 0, __s9local1 = this.allianceFameVOs; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined && __s9local2.level === __s9param0) {
          return __s9local2;
        }
      }
    }
    return null;
  };
  CastleAllianceFameData.prototype.getFamePointsForLevel = function (__s15param0) {
    var __s15local0 = this.getFameVOByLevel(__s15param0);
    if (__s15local0) {
      return __s15local0.threshHold;
    } else {
      return 0;
    }
  };
  CastleAllianceFameData.prototype.getLevelFromFamePoints = function (__s19param0) {
    var __s19local0;
    this.allianceFameVOs.sort(this.bindFunction(this.sortFameByLevel));
    if (this.allianceFameVOs != null) {
      for (var __s19local1 = 0, __s19local2 = this.allianceFameVOs; __s19local1 < __s19local2.length; __s19local1++) {
        var __s19local3 = __s19local2[__s19local1];
        if (__s19local3 !== undefined && __s19local3.threshHold <= __s19param0) {
          __s19local0 = __s19local3;
        }
      }
    }
    if (__s19local0) {
      return __s19local0.level;
    } else {
      return 0;
    }
  };
  CastleAllianceFameData.prototype.sortFameByLevel = function (__s27param0, __s27param1) {
    if (__s27param0.level < __s27param1.level) {
      return -1;
    } else if (__s27param0.level > __s27param1.level) {
      return 1;
    } else {
      return 0;
    }
  };
  return CastleAllianceFameData;
}();
exports.CastleAllianceFameData = __s0local0;
var __dep_export_AllianceFameLevelVO = require("gge-module:export_AllianceFameLevelVO");
