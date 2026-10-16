Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ABGAllianceTowerBuffInfoVO(__s3param0, __s3param1) {
    this.isActive = false;
    this.currentEffects = __s3param0;
    this.isActive = __s3param1;
  }
  ABGAllianceTowerBuffInfoVO.prototype.isAnyEffectUpgraded = function () {
    for (var __s5local0 = 0; __s5local0 < this.currentEffects.length; __s5local0++) {
      if (this.currentEffects[__s5local0].currentLevel > 0) {
        return true;
      }
    }
    return false;
  };
  ABGAllianceTowerBuffInfoVO.prototype.createServerEffectsArray = function () {
    var __s10local0 = [];
    for (var __s10local1 = 0; __s10local1 < this.currentEffects.length; __s10local1++) {
      var __s10local2 = this.currentEffects[__s10local1];
      if (__s10local2.selectedLevel > __s10local2.currentLevel) {
        var __s10local3 = {
          E: __s10local2.currentBonusVO.effect.effectID,
          ELBI: __s10local2.currentLevel,
          ELAI: __s10local2.selectedLevel
        };
        __s10local0.push(__s10local3);
      }
    }
    return __s10local0;
  };
  return ABGAllianceTowerBuffInfoVO;
}();
exports.ABGAllianceTowerBuffInfoVO = __s0local0;
