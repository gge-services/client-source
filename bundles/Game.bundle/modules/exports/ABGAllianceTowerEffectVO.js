Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_RawLordEffectBonusVO = require("gge-module:export_RawLordEffectBonusVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function ABGAllianceTowerEffectVO(__s3param0) {
    this.currentLevel = 0;
    this.selectedLevel = 0;
    this.towerEffectXML = __s3param0;
  }
  ABGAllianceTowerEffectVO.prototype.parseServerParams = function (__s5param0) {
    this.currentLevel = __dep_exact_f855840627e6e145.int(__s5param0.L);
    this.selectedLevel = this.currentLevel;
    this.currentBonusVO = new __dep_export_RawLordEffectBonusVO.RawLordEffectBonusVO();
    this.currentBonusVO.parseFromValueArray(this.towerEffectXML.effectVO, [this.getEffectValueForLevel(this.currentLevel)]);
  };
  ABGAllianceTowerEffectVO.prototype.reset = function () {
    this.currentLevel = 0;
    this.selectedLevel = 0;
    this.currentBonusVO = new __dep_export_RawLordEffectBonusVO.RawLordEffectBonusVO();
    this.currentBonusVO.parseFromValueArray(this.towerEffectXML.effectVO, [0]);
  };
  ABGAllianceTowerEffectVO.prototype.getBonusVOForLevel = function (__s9param0) {
    var __s9local0 = new __dep_export_RawLordEffectBonusVO.RawLordEffectBonusVO();
    __s9local0.parseFromValueArray(this.towerEffectXML.effectVO, [this.getEffectValueForLevel(__s9param0)]);
    return __s9local0;
  };
  ABGAllianceTowerEffectVO.prototype.getTotalCostForSelectedLevel = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceBattleGroundConst.calculateBuffCosts(this.currentLevel, this.selectedLevel, this.effectBasePrice));
  };
  ABGAllianceTowerEffectVO.prototype.getCostForLevel = function (__s13param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceBattleGroundConst.calculateBuffCosts(__s13param0 - 1, __s13param0, this.effectBasePrice));
  };
  ABGAllianceTowerEffectVO.prototype.getEffectValueForLevel = function (__s15param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s15param0 > 0 ? __dep_exact_26a421b704832cff.AllianceBattleGroundConst.calculateEffectStrength(__s15param0, this.effectStartValue, this.effectIncrease) : 0));
  };
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "allianceTowerEffectID", {
    get: function () {
      return this.towerEffectXML.allianceTowerEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectID", {
    get: function () {
      return this.towerEffectXML.effectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectBasePrice", {
    get: function () {
      return this.towerEffectXML.effectBasePrice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectMaxLevel", {
    get: function () {
      return this.towerEffectXML.effectMaxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectStartValue", {
    get: function () {
      return this.towerEffectXML.effectStartValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectIncrease", {
    get: function () {
      return this.towerEffectXML.effectIncrease;
    },
    enumerable: true,
    configurable: true
  });
  return ABGAllianceTowerEffectVO;
}();
exports.ABGAllianceTowerEffectVO = __s0local0;
