Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __s0local0 = function () {
  function GlobalEffectVO() {
    this.id = 0;
    this.globalEffectID = 0;
    this.minLevel = 0;
    this.maxLevel = 0;
    this.rawBonus = new __dep_export_BonusVO.BonusVO();
    this.displayEventIDs = [];
    this.displayKingdomIDs = [];
    this.buffStrength = 0;
  }
  GlobalEffectVO.prototype.parseXml = function (__s5param0) {
    this.id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("ID", __s5param0, -1));
    this.name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s5param0);
    this.globalEffectID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("globalEffectID", __s5param0, -1));
    this.minLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minLevel", __s5param0, -1));
    this.maxLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("maxLevel", __s5param0, -1));
    this.displayEventIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("displayEventIDs", __s5param0).split(",");
    this.displayKingdomIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("displayKingdomIDs", __s5param0).split(",");
    for (var __s5local0 = 0; __s5local0 < this.displayKingdomIDs.length; __s5local0++) {
      this.displayKingdomIDs[__s5local0] = parseInt(this.displayKingdomIDs[__s5local0]);
    }
    for (__s5local0 = 0; __s5local0 < this.displayEventIDs.length; __s5local0++) {
      this.displayEventIDs[__s5local0] = parseInt(this.displayEventIDs[__s5local0]);
    }
    var __s5local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("effects", __s5param0);
    if (__s5local1 != "" && __s5local1.length > 0) {
      var __s5local2 = __s5local1.split("&");
      var __s5local3 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s5local2[0]));
      var __s5local4 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s5local3, __s5local2[1]);
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local4.effectValue, "EffectValueMap")) {
        var __s5local5 = __s5local2[1].split("#");
        var __s5local6 = "";
        if (__s5local5 != null) {
          for (var __s5local7 = 0, __s5local8 = __s5local5; __s5local7 < __s5local8.length; __s5local7++) {
            var __s5local9 = __s5local8[__s5local7];
            if (__s5local9 !== undefined) {
              var __s5local10 = __s5local9.split("+");
              if (__s5local6.length > 0) {
                __s5local6 += ",";
              }
              __s5local6 += __s5local10[0] + "," + __s5local10[1];
            }
          }
        }
        __s5local4.parseFromValueString(__s5local3, __s5local6);
      }
      this.rawBonus = __s5local4;
    }
  };
  Object.defineProperty(GlobalEffectVO.prototype, "canBeUsed", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userLevel >= this.minLevel && __dep_export_CastleModel.CastleModel.userData.userLevel <= this.maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectVO.prototype.addBuffStrengthValue = function (__s20param0) {
    this.buffStrength = __s20param0;
    this.buffedBonus = this.rawBonus.clone();
    this.setEffectStrength(this.buffedBonus.strength + __s20param0, this.buffedBonus);
  };
  Object.defineProperty(GlobalEffectVO.prototype, "bonus", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.globalEffectData.isEffectBoosted(this.globalEffectID)) {
        return this.buffedBonus;
      } else {
        return this.rawBonus;
      }
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectVO.prototype.setEffectStrength = function (__s26param0, __s26param1) {
    var __s26local0 = "";
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s26param1.effectValue, "EffectValueMap")) {
      for (var __s26local1 = __s26param1.effectValue.getWodIds(), __s26local2 = 0; __s26local2 < __s26local1.length; __s26local2++) {
        __s26local0 += __s26local1[__s26local2];
        __s26local0 += "," + __s26param0;
        if (__s26local2 + 1 < __s26local1.length) {
          __s26local0 += ",";
        }
      }
    } else {
      __s26local0 += __s26param0;
    }
    __s26param1.parseFromValueString(__s26param1.effect, __s26local0);
  };
  return GlobalEffectVO;
}();
exports.GlobalEffectVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
