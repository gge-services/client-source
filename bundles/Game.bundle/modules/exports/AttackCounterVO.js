Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AttackCounterVO() {
    this._attackCount = 0;
    this._attackCountThreshold = 0;
    this._attackCountGrowthRate = 0;
  }
  AttackCounterVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0) {
      this._attackCount = __s5param0[__dep_exact_26a421b704832cff.CommKeys.ATTACK_COUNT];
      this._attackCountThreshold = __s5param0[__dep_exact_26a421b704832cff.CommKeys.ATTACK_COUNT_THRESHOLD];
      this._attackCountGrowthRate = __s5param0[__dep_exact_26a421b704832cff.CommKeys.ATTACK_COUNT_GROWTH_RATE];
    }
  };
  Object.defineProperty(AttackCounterVO.prototype, "attackCount", {
    get: function () {
      return this._attackCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackCounterVO.prototype, "attackCountThreshold", {
    get: function () {
      return this._attackCountThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackCounterVO.prototype, "attackCountGrowthRate", {
    get: function () {
      return this._attackCountGrowthRate;
    },
    enumerable: true,
    configurable: true
  });
  return AttackCounterVO;
}();
exports.AttackCounterVO = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
