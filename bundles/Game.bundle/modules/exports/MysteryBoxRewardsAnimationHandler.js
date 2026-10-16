Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __s0local0 = function () {
  function MysteryBoxRewardsAnimationHandler() {
    this._countCompletedAnimations = 0;
    this.animationCompleteSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
  }
  MysteryBoxRewardsAnimationHandler.prototype.playAnimation = function (__s5param0) {
    this._rewardItems = __s5param0;
    if (__s5param0) {
      var __s5local0;
      var __s5local1 = 3 / MysteryBoxRewardsAnimationHandler.ANIMATION_FPS;
      var __s5local2 = 0;
      for (var __s5local3 = 0; __s5local3 < __s5param0.length; __s5local3++) {
        (__s5local0 = __s5param0[__s5local3]).alpha = 0;
        __s5local0.scaleX = __s5local0.scaleY = 0.1;
        __s5local0.visible = true;
        __dep_exact_608de47b6498f9b0.TweenLite.to(__s5local0, 5 / MysteryBoxRewardsAnimationHandler.ANIMATION_FPS, {
          alpha: 1,
          scaleX: 1,
          scaleY: 1,
          onComplete: this.bindFunction(this.stopAnimation),
          delay: __s5local2
        });
        __s5local2 += __s5local1;
      }
    }
  };
  MysteryBoxRewardsAnimationHandler.prototype.stopAnimation = function () {
    this._countCompletedAnimations++;
    if (this._countCompletedAnimations == this._rewardItems.length) {
      __dep_exact_608de47b6498f9b0.TweenLite.delayedCall(0.8, this.bindFunction(this.dispatchComplete));
    }
  };
  MysteryBoxRewardsAnimationHandler.prototype.dispatchComplete = function () {
    this.animationCompleteSignal.dispatch();
    this._countCompletedAnimations = 0;
  };
  MysteryBoxRewardsAnimationHandler.ANIMATION_FPS = 24;
  return MysteryBoxRewardsAnimationHandler;
}();
exports.MysteryBoxRewardsAnimationHandler = __s0local0;
