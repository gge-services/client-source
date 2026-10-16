Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function VIPLevelInfoVO() {
    this.levelID = 0;
    this.minVIPPoints = 0;
    this.maxVIPPoints = 0;
    this.bonusLoginKeys = 0;
    this.attackSpeedBonus = 0;
    this.attackFameBonus = 0;
    this.taxBonus = 0;
    this.magicFindBonus = 0;
    this.productionBonusSlots = 0;
    this.recruitmentBonusSlots = 0;
    this.freePremiumCommandersPerDay = 0;
    this.taxCollector12HoursNoRubies = false;
    this.taxCollector24HoursNoRubies = false;
    this._resourceBoosts = new Map();
  }
  VIPLevelInfoVO.prototype.parseConfigXML = function (__s5param0) {
    this.levelID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("vipLevelID", __s5param0, "-1", true));
    this.minVIPPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("thresholdMin", __s5param0, "0", true));
    this.maxVIPPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("thresholdMax", __s5param0, "0", true));
    this._resourceBoosts = new Map();
    this.parseResourceBoost(__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("woodBoosts", __s5param0, "").split(VIPLevelInfoVO.BOOST_SEPERATOR));
    this.parseResourceBoost(__dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("stoneBoosts", __s5param0, "").split(VIPLevelInfoVO.BOOST_SEPERATOR));
    this.parseResourceBoost(__dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("foodBoosts", __s5param0, "").split(VIPLevelInfoVO.BOOST_SEPERATOR));
    this.bonusLoginKeys = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("bonusLoginKeys", __s5param0, "0"));
    this.productionBonusSlots = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("productionBonusSlots", __s5param0, "0"));
    this.recruitmentBonusSlots = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("recruitmentBonusSlots", __s5param0, "0"));
    this.freePremiumCommandersPerDay = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("freePremiumGeneralsPerDay", __s5param0, "0"));
    this.attackSpeedBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("attackSpeedBoost", __s5param0, "0"));
    this.attackFameBonus = __dep_exact_f855840627e6e145.int(parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("attackFameBoost", __s5param0, "0")));
    this.taxBonus = __dep_exact_f855840627e6e145.int(parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("taxCollectorBoost", __s5param0, "0")));
    this.magicFindBonus = __dep_exact_f855840627e6e145.int(parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("magicFindBoost", __s5param0, "0")));
    this.taxCollector12HoursNoRubies = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("taxCollectorNoRubies12", __s5param0, "0")) == 1;
    this.taxCollector24HoursNoRubies = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("taxCollectorNoRubies24", __s5param0, "0")) == 1;
  };
  VIPLevelInfoVO.prototype.parseResourceBoost = function (__s7param0, __s7param1) {
    if (__s7param1.length != 0 && __s7param1[0] != "") {
      var __s7local0 = [];
      if (__s7param1 != null) {
        for (var __s7local1 = 0, __s7local2 = __s7param1; __s7local1 < __s7local2.length; __s7local1++) {
          var __s7local3 = __s7local2[__s7local1];
          if (__s7local3 !== undefined) {
            var __s7local4 = __s7local3.split("+");
            var __s7local5 = new __dep_export_ResourceProductionBoostVO.ResourceProductionBoostVO();
            __s7local5.areaType = parseInt(__s7local4[0]);
            __s7local5.boostValue = parseFloat(__s7local4[1]);
            __s7local0.push(__s7local5);
          }
        }
      }
      this._resourceBoosts.set(__s7param0, __s7local0);
    }
  };
  VIPLevelInfoVO.prototype.getResourceBoostForArea = function (__s14param0, __s14param1) {
    var __s14local0 = this._resourceBoosts.get(__s14param0);
    if (__s14local0 != null) {
      for (var __s14local1 = 0, __s14local2 = __s14local0; __s14local1 < __s14local2.length; __s14local1++) {
        var __s14local3 = __s14local2[__s14local1];
        if (__s14local3 !== undefined && __s14local3.areaType == __s14param1) {
          return __dep_exact_f855840627e6e145.int(__s14local3.boostValue);
        }
      }
    }
    return 0;
  };
  VIPLevelInfoVO.prototype.inPointRange = function (__s20param0) {
    return this.minVIPPoints <= __s20param0 && __s20param0 <= this.maxVIPPoints;
  };
  VIPLevelInfoVO.__initialize_static_members = function () {
    VIPLevelInfoVO.BOOST_SEPERATOR = "#";
  };
  return VIPLevelInfoVO;
}();
exports.VIPLevelInfoVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ResourceProductionBoostVO = require("gge-module:export_ResourceProductionBoostVO");
__s0local0.__initialize_static_members();
