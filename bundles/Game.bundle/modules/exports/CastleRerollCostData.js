Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleRerollCostData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._rerollCostsByType = new Map();
    for (var __s3local1 = 0, __s3local2 = __s3param0.rerollCosts; __s3local1 < __s3local2.length; __s3local1++) {
      var __s3local3 = __s3local2[__s3local1];
      if (__s3local3 !== undefined) {
        var __s3local4 = new __dep_export_RerollCostVO.RerollCostVO(__s3local3);
        if (!__s3local0._rerollCostsByType.get(__s3local4.type)) {
          __s3local0._rerollCostsByType.set(__s3local4.type, []);
        }
        __s3local0._rerollCostsByType.get(__s3local4.type).push(__s3local4);
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollCostData, __s1param0);
  CastleRerollCostData.prototype.getRerollCostsByType = function (__s9param0) {
    return this._rerollCostsByType.get(__s9param0);
  };
  CastleRerollCostData.prototype.getRerollCostsByTypeAndCount = function (__s11param0, __s11param1) {
    var __s11local0;
    for (var __s11local1 = 0, __s11local2 = this.getRerollCostsByType(__s11param0); __s11local1 < __s11local2.length; __s11local1++) {
      var __s11local3 = __s11local2[__s11local1];
      if (__s11local3.rerollCount == __s11param1) {
        return __s11local3;
      }
      if (!__s11local0 || __s11local0.rerollCount < __s11local3.rerollCount) {
        __s11local0 = __s11local3;
      }
    }
    return __s11local0;
  };
  CastleRerollCostData.prototype.getSoftCurrencyFreeRerollCountByType = function (__s17param0) {
    var __s17local0 = this.getRerollCostsByType(__s17param0);
    var __s17local1 = 0;
    if (__s17local0 != null) {
      for (var __s17local2 = 0, __s17local3 = __s17local0; __s17local2 < __s17local3.length; __s17local2++) {
        var __s17local4 = __s17local3[__s17local2];
        if (__s17local4 !== undefined) {
          var __s17local5 = 0;
          for (var __s17local6 = 0, __s17local7 = __s17local4.softCosts.list; __s17local6 < __s17local7.length; __s17local6++) {
            var __s17local8 = __s17local7[__s17local6];
            if (__s17local8 !== undefined && __s17local8.amount > 0) {
              __s17local5++;
            }
          }
          if (__s17local4.c1Cost == 0 && __s17local5 == 0) {
            __s17local1++;
          }
        }
      }
    }
    return __s17local1;
  };
  CastleRerollCostData.REROLL_TYPE_ALIEN = "alien";
  CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL = "officersSchool";
  CastleRerollCostData.REROLL_TYPE_PROLONG_TRAINING = "prolongTraining";
  CastleRerollCostData.REROLL_TYPE_CHARGE_EFFECT = "chargeEffect";
  return CastleRerollCostData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleRerollCostData = __s0local0;
var __dep_export_RerollCostVO = require("gge-module:export_RerollCostVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
