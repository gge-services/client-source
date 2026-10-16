Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BasicUnitVO = require("gge-module:export_BasicUnitVO");
var __s0local0 = function (__s1param0) {
  function SoldierUnitVO() {
    var __s3local0 = this;
    __s3local0._meleeAttack = 0;
    __s3local0.meleeDefence = 0;
    __s3local0._rangeAttack = 0;
    __s3local0.rangeDefence = 0;
    __s3local0._isDormant = false;
    __s3local0._healingCostC1 = 0;
    __s3local0._healingCostC2 = 0;
    __s3local0._healingSkipCost = 0;
    __s3local0._reviveAllCostC2 = 0;
    __s3local0._basicHealingTime = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SoldierUnitVO, __s1param0);
  SoldierUnitVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._foodSupply = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("foodSupply", __s5param0, "0"));
    this._meadSupply = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("meadSupply", __s5param0, "0"));
    this._beefSupply = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("beefSupply", __s5param0, "0"));
    this.meleeDefence = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("meleeDefence", __s5param0, "0"));
    this._meleeAttack = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("meleeAttack", __s5param0, "0"));
    this._rangeAttack = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rangeAttack", __s5param0, "0"));
    this.rangeDefence = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rangeDefence", __s5param0, "0"));
    this._healingCostC1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("healingCostC1", __s5param0, "0"));
    this._healingCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("healingCostC2", __s5param0, "0"));
    this._reviveAllCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("reviveAllCostC2", __s5param0, "0"));
    this._healingSkipCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCostC2", __s5param0, "0"));
    this._basicHealingTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("healingTime", __s5param0, "0"));
    this.role = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("role", __s5param0, "", true);
    this._isDormant = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isDormant", __s5param0, "0")) == 1;
  };
  Object.defineProperty(SoldierUnitVO.prototype, "healingCostC1", {
    get: function () {
      var __s7local0 = 1 - __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL).strength / 100;
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(this._healingCostC1) * __s7local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "healingCostC2", {
    get: function () {
      return this._healingCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "unitType", {
    get: function () {
      if (this.role == SoldierUnitVO.ROLE_MELEE) {
        return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
      } else if (this.role == SoldierUnitVO.ROLE_RANGE) {
        return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
      } else {
        return "";
      }
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "unitType").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "unitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "unitCategory").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.prototype.isToolForSlotType = function (__s22param0) {
    return __s22param0 == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER;
  };
  Object.defineProperty(SoldierUnitVO.prototype, "isDismissable", {
    get: function () {
      return true;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "isDismissable").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "isAvailableInPeaceMode", {
    get: function () {
      return this.fightType == __dep_export_BasicUnitVO.BasicUnitVO.FIGHTTYPE_DEF || this.isAuxiliary;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "isAvailableInPeaceMode").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "reviveAllCostC2", {
    get: function () {
      return this._reviveAllCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "healingSkipCost", {
    get: function () {
      return this._healingSkipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "basicHealingTime", {
    get: function () {
      return this._basicHealingTime;
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.prototype.getBoostedHealTimeForAmount = function (__s38param0) {
    var __s38local0;
    var __s38local1 = this._healingCostC2 > 0;
    var __s38local2 = 0;
    var __s38local3 = 0;
    var __s38local4 = 0;
    var __s38local5 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
    __s38local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST, __s38local5.areaInfo.areaType, __s38local5.spaceId, this.wodId).strength);
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      __s38local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST, __s38local5.areaInfo.areaType, __s38local5.spaceId, this.wodId).strength);
    }
    __s38local0 = __s38local2 + __s38local3 + __dep_exact_f855840627e6e145.int(this.isSubscriptionHealingPremiumActive ? __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST) : 0);
    if (!__s38local1) {
      __s38local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId, this.wodId).strength);
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        __s38local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST, __s38local5.areaInfo.areaType, __s38local5.spaceId, this.wodId).strength);
      }
      __s38local4 = __s38local2 + __s38local3 + __dep_exact_f855840627e6e145.int(this.isSubscriptionHealingNonPremiumActive ? __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST) : 0);
    }
    var __s38local6 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.getBuildingProductionSpeed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUILDINGTYPE_HOSPITAL) + Math.max(__s38local0, __s38local4));
    return Math.round(this.basicHealingTime * __s38param0 / (__s38local6 / 100));
  };
  Object.defineProperty(SoldierUnitVO.prototype, "isSubscriptionHealingPremiumActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "isSubscriptionHealingNonPremiumActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "hasPremiumBoostedTime", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.festivalVO.remainingTimeInSeconds > 0 || __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR).remainingTimeInSeconds > 0 || __dep_export_CastleModel.CastleModel.userData.isInPeaceMode;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "hasPremiumBoostedTime").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.prototype.getBoostedRecruitmentTime = function (__s51param0 = 1) {
    var __s51local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : -1;
    var __s51local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : -1;
    var __s51local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, this.wodId, __s51local1, __s51local0).getValueforWodId(this._wodId));
    var __s51local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL, __s51local1, __s51local0));
    var __s51local4 = __dep_exact_f855840627e6e145.int(this.getBaseRecruitmentTime());
    if (this.isRecruitTimeSubscriptionBuffed) {
      __s51local4 = __dep_exact_f855840627e6e145.int(__s51local4 * (1 + __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BASE_RECRUITMENT_TIME_BOOST, __s51local1, __s51local0) / 100));
    }
    var __s51local5 = __dep_export_CastleModel.CastleModel.militaryData.getBuildingProductionSpeed(this.unitBuildingType) + __s51local2 + __s51local3;
    var __s51local6 = Math.round(__s51local4 / (__s51local5 / 100));
    var __s51local7 = __dep_exact_f855840627e6e145.int(this.isAuxiliary ? __dep_exact_26a421b704832cff_1.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT_IN_FACTION_KINGDOM : __dep_exact_26a421b704832cff_1.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT);
    if (this.isLowlevelBoosted) {
      __s51local7 = 0;
    }
    var __s51local8 = __dep_exact_f855840627e6e145.int(this.getPremiumBoostedTime(__s51local5, __s51local4, __s51param0, __s51local6, __s51local7));
    if (__s51local8 >= __s51param0 * __s51local7 || this.isLowlevelBoosted) {
      return __s51local8;
    } else {
      return __s51param0 * __s51local7;
    }
  };
  Object.defineProperty(SoldierUnitVO.prototype, "isRecruitTimeSubscriptionBuffed", {
    get: function () {
      var __s57local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : -1;
      var __s57local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : -1;
      return __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BASE_RECRUITMENT_TIME_BOOST, __s57local1, __s57local0) < 0;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "isRecruitTimeSubscriptionBuffed").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "buffedMeleeAttack", {
    get: function () {
      var __s61local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, -1, -1, this.wodId));
      if (this._meleeAttack > 0) {
        return this._meleeAttack + __s61local0;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "buffedRangeAttack", {
    get: function () {
      var __s65local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, -1, -1, this.wodId));
      if (this._rangeAttack > 0) {
        return this._rangeAttack + __s65local0;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "meleeAttack", {
    get: function () {
      return this._meleeAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "rangeAttack", {
    get: function () {
      return this._rangeAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "isDormant", {
    get: function () {
      return this._isDormant;
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.ROLE_MELEE = "melee";
  SoldierUnitVO.ROLE_RANGE = "ranged";
  return SoldierUnitVO;
}(__dep_export_BasicUnitVO.BasicUnitVO);
exports.SoldierUnitVO = __s0local0;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
