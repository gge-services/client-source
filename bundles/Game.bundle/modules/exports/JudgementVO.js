Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function JudgementVO() {
    this.id = 0;
  }
  JudgementVO.prototype.fillFromParamXML = function (__s5param0) {
    this.id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("judgementID", __s5param0, "0", true));
    this.visualName = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("visualName", __s5param0, "", true);
    this.spawnSpotType = __dep_export_JudgementSpotEnum.JudgementSpotEnum.getTypeFromName(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("spawnSpot", __s5param0, "", true));
    this.conditionA = [];
    this.parseConditionString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("conditionTypeA", __s5param0, ""), this.conditionA);
    this.conditionB = [];
    this.parseConditionString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("conditionTypeB", __s5param0, ""), this.conditionB);
    this.rewardA = [];
    this.parseRewardString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardTypeA", __s5param0, ""), this.rewardA);
    this.rewardB = [];
    this.parseRewardString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardTypeB", __s5param0, ""), this.rewardB);
  };
  JudgementVO.prototype.parseConditionString = function (__s7param0, __s7param1) {
    for (var __s7local0 = __s7param0.split("#"), __s7local1 = 0; __s7local1 < __s7local0.length; ++__s7local1) {
      if (__s7local0[__s7local1] != "") {
        __s7param1.push(__dep_export_JudgementConditionEnum.JudgementConditionEnum.getConditionTypeFromString(__s7local0[__s7local1]));
      }
    }
  };
  JudgementVO.prototype.parseRewardString = function (__s12param0, __s12param1) {
    for (var __s12local0 = __s12param0.split("#"), __s12local1 = 0; __s12local1 < __s12local0.length; ++__s12local1) {
      if (__s12local0[__s12local1] != "") {
        var __s12local2 = __dep_export_CollectableEnum.CollectableEnum.getTypeByName(__s12local0[__s12local1]);
        __s12local2 ||= __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
        if (__s12local2 == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
          switch (__s12local0[__s12local1]) {
            case "currency1":
              __s12param1.push(__dep_export_CollectableEnum.CollectableEnum.C1);
          }
        }
        if (__s12local2 != __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
          __s12param1.push(__s12local2);
        }
      }
    }
  };
  JudgementVO.prototype.toString = function () {
    var __s20local0 = "JUDGEMENTVO: {id:" + this.id + "; visualName: " + this.visualName + "; spawnSpot: " + this.spawnSpotType.spawnType + "; ConditionA: [ ";
    if (this.conditionA != null) {
      for (var __s20local1 = 0, __s20local2 = this.conditionA; __s20local1 < __s20local2.length; __s20local1++) {
        __s20local9 = __s20local2[__s20local1];
        if (__s20local9 !== undefined) {
          __s20local0 += __s20local9.toString() + " ";
        }
      }
    }
    __s20local0 += "]; ConditionB: [ ";
    if (this.conditionB != null) {
      for (var __s20local3 = 0, __s20local4 = this.conditionB; __s20local3 < __s20local4.length; __s20local3++) {
        __s20local9 = __s20local4[__s20local3];
        if (__s20local9 !== undefined) {
          __s20local0 += __s20local9.toString() + " ";
        }
      }
    }
    __s20local0 += "]; RewardA:  [";
    if (this.rewardA != null) {
      for (var __s20local5 = 0, __s20local6 = this.rewardA; __s20local5 < __s20local6.length; __s20local5++) {
        __s20local9 = __s20local6[__s20local5];
        if (__s20local9 !== undefined) {
          __s20local0 += __s20local9.name + " ";
        }
      }
    }
    __s20local0 += "]; RewardB: [ ";
    if (this.rewardB != null) {
      for (var __s20local7 = 0, __s20local8 = this.rewardB; __s20local7 < __s20local8.length; __s20local7++) {
        var __s20local9;
        __s20local9 = __s20local8[__s20local7];
        if (__s20local9 !== undefined) {
          __s20local0 += __s20local9.name + " ";
        }
      }
    }
    return __s20local0 += "]}";
  };
  JudgementVO.prototype.dispose = function () {
    this.spawnSpotType = null;
    this.conditionA = null;
    this.conditionB = null;
    this.rewardA = null;
    this.rewardB = null;
  };
  return JudgementVO;
}();
exports.JudgementVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_JudgementConditionEnum = require("gge-module:export_JudgementConditionEnum");
var __dep_export_JudgementSpotEnum = require("gge-module:export_JudgementSpotEnum");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
