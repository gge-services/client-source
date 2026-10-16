Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function () {
  function FortuneTellerEventDialogIdleAnimation(__s3param0) {
    this.smallSparkles = [];
    this.dialogDisp = __s3param0;
    for (var __s3local0 = 0; __s3local0 < 10; __s3local0++) {
      if (this.dialogDisp["mc_small_idle_sparkle" + __s3local0]) {
        this.smallSparkles.push(this.dialogDisp["mc_small_idle_sparkle" + __s3local0]);
      }
    }
    this.yellowGlow = this.dialogDisp.mc_big_idle_yellow;
    this.orangeGlow = this.dialogDisp.mc_big_idle_orange;
    this.yellowGlow.compositeOperation = __dep_exact_81dacdf05bd32292.BlendMode.OVERLAY;
    this.orangeGlow.compositeOperation = __dep_exact_81dacdf05bd32292.BlendMode.SCREEN;
    this.yellowGlow.mouseEnabled = false;
    this.orangeGlow.mouseEnabled = false;
  }
  FortuneTellerEventDialogIdleAnimation.prototype.show = function () {
    this.hide();
    this.increaseBigSpark(this.yellowGlow);
    this.increaseBigSpark(this.orangeGlow);
    if (this.smallSparkles != null) {
      for (var __s8local0 = 0, __s8local1 = this.smallSparkles; __s8local0 < __s8local1.length; __s8local0++) {
        var __s8local2 = __s8local1[__s8local0];
        if (__s8local2 !== undefined) {
          __dep_exact_608de47b6498f9b0_1.TweenLite.delayedCall(__dep_exact_9e901e8e2483a22f.MathBase.random(0, 3, false), this.bindFunction(this.decreaseSmallSpark), [__s8local2]);
        }
      }
    }
  };
  FortuneTellerEventDialogIdleAnimation.prototype.decreaseBigSpark = function (__s14param0) {
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s14param0, 2, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.ease,
      onComplete: this.bindFunction(this.increaseBigSpark),
      onCompleteParams: [__s14param0]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.increaseBigSpark = function (__s16param0) {
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s16param0, 3, {
      scaleX: 1.4,
      scaleY: 1.4,
      ease: __dep_exact_608de47b6498f9b0.Linear.ease,
      onComplete: this.bindFunction(this.decreaseBigSpark),
      onCompleteParams: [__s16param0]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.decreaseSmallSpark = function (__s18param0) {
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s18param0, 1.5, {
      alpha: 0,
      rotate: 360,
      scaleX: 0.8,
      scaleY: 0.8,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeNone,
      onComplete: this.bindFunction(this.increaseSmallSpark),
      onCompleteParams: [__s18param0]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.increaseSmallSpark = function (__s20param0) {
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s20param0, 1.5, {
      alpha: 1,
      rotate: 360,
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeNone,
      onComplete: this.bindFunction(this.decreaseSmallSpark),
      onCompleteParams: [__s20param0]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.hide = function () {
    if (this.smallSparkles != null) {
      for (var __s22local0 = 0, __s22local1 = this.smallSparkles; __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          __s22local2.alpha = 0;
        }
      }
    }
    this.yellowGlow.scaleX = this.yellowGlow.scaleY = 1;
    this.orangeGlow.scaleX = this.orangeGlow.scaleY = 1;
  };
  return FortuneTellerEventDialogIdleAnimation;
}();
exports.FortuneTellerEventDialogIdleAnimation = __s0local0;
