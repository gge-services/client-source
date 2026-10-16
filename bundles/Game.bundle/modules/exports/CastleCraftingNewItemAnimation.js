Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function () {
  function CastleCraftingNewItemAnimation() {}
  CastleCraftingNewItemAnimation.prototype.playAnimation = function (__s5param0, __s5param1) {
    this.finishedCallback = __s5param0;
    this.animatedMC = __s5param1;
    if (this.animatedMC) {
      this.animatedMC.scaleX = this.animatedMC.scaleY = 0;
      this.animatedMC.alpha = 0;
      this.growMc();
    } else {
      this.onAnimationFinished();
    }
  };
  CastleCraftingNewItemAnimation.prototype.growMc = function () {
    if (this.animatedMC) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.animatedMC, 0.25, {
        scaleX: 1.2,
        scaleY: 1.2,
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeNone,
        onComplete: this.bindFunction(this.shrinkToNormalSize)
      });
    } else {
      this.shrinkToNormalSize();
    }
  };
  CastleCraftingNewItemAnimation.prototype.shrinkToNormalSize = function () {
    if (this.animatedMC) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.animatedMC, 0.25, {
        scaleX: 1,
        scaleY: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeNone,
        onComplete: this.bindFunction(this.onAnimationFinished)
      });
    } else {
      this.onAnimationFinished();
    }
  };
  CastleCraftingNewItemAnimation.prototype.onAnimationFinished = function () {
    if (this.finishedCallback) {
      this.finishedCallback();
    }
  };
  return CastleCraftingNewItemAnimation;
}();
exports.CastleCraftingNewItemAnimation = __s0local0;
