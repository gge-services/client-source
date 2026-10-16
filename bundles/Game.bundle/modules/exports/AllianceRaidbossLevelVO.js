Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function AllianceRaidbossLevelVO() {
    this._raidBossLevelID = 0;
    this._raidBossID = 0;
    this._level = 0;
    this._wallRegenerationTime = 0;
    this._courtyardReserveUnits = [];
    this._courtyardMeleeRatio = 0;
    this._courtyardSize = 0;
    this._rewardIDs = [];
    this._stages = [];
    CONSTRUCTOR_HACK;
  }
  AllianceRaidbossLevelVO.prototype.parseXML = function (__s5param0) {
    this._raidBossID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("raidBossID", __s5param0, "0", true));
    this._raidBossLevelID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("raidBossLevelID", __s5param0, "0", true));
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "0", true));
    this._wallRegenerationTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallRegenerationTime", __s5param0, "0", true));
    this._courtyardMeleeRatio = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("courtyardMeleeRatio", __s5param0, 0);
    this._courtyardSize = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("courtyardSize", __s5param0, "0", true));
    this._minPointsForBossRewards = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minPointsForBossRewards", __s5param0, "0", true));
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("courtyardReserveUnits", __s5param0, "", true);
    if (__s5local0 != "") {
      for (var __s5local1 = 0, __s5local2 = __s5local0.split("#"); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1].split("+");
        this._courtyardReserveUnits.push({
          unitIDWodID: parseInt(__s5local3[0]),
          amount: parseInt(__s5local3[1])
        });
      }
    }
    var __s5local4 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardIDs", __s5param0, "", true);
    if (__s5local4 != "") {
      for (var __s5local5 = 0, __s5local6 = __s5local4.split(","); __s5local5 < __s5local6.length; __s5local5++) {
        var __s5local7 = __s5local6[__s5local5];
        this._rewardIDs.push(parseInt(__s5local7));
      }
    }
  };
  AllianceRaidbossLevelVO.prototype.addStage = function (__s13param0) {
    this._stages.push(__s13param0);
    this._stages.sort(this.bindFunction(this.sortByHealth));
  };
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "stages", {
    get: function () {
      return this._stages;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossLevelVO.prototype.sortByHealth = function (__s17param0, __s17param1) {
    return __s17param1.health - __s17param0.health;
  };
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "raidBossLevelID", {
    get: function () {
      return this._raidBossLevelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "raidBossID", {
    get: function () {
      return this._raidBossID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "wallRegenerationTime", {
    get: function () {
      return this._wallRegenerationTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "courtyardReserveUnits", {
    get: function () {
      return this._courtyardReserveUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "courtyardMeleeRatio", {
    get: function () {
      return this._courtyardMeleeRatio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "courtyardSize", {
    get: function () {
      return this._courtyardSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "minPointsForBossRewards", {
    get: function () {
      return this._minPointsForBossRewards;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossLevelVO.prototype.getStageByHealth = function (__s37param0) {
    for (var __s37local0 = 0, __s37local1 = this._stages; __s37local0 < __s37local1.length; __s37local0++) {
      var __s37local2 = __s37local1[__s37local0];
      if (__s37local2.health >= __s37param0) {
        return __s37local2;
      }
    }
    return null;
  };
  Object.defineProperty(AllianceRaidbossLevelVO.prototype, "rewardList", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(this._rewardIDs);
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidbossLevelVO.prototype.getAccumulatedHighlightEffects = function () {
    var __s44local0 = new Map();
    this.stages.forEach(function (__s46param0) {
      return __s46param0.getHighlightedEffects().forEach(function (__s48param0) {
        return __s44local0.set(__s48param0.effectID, __s48param0);
      });
    });
    return Array.from(__s44local0.values());
  };
  return AllianceRaidbossLevelVO;
}();
exports.AllianceRaidbossLevelVO = __s0local0;
