Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_3 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function FortuneTellerEventDialogRewardAnimation(__s3param0) {
    this.showTweens = [];
    this.dialogDisp = __s3param0;
    this.yellowGlow = this.dialogDisp.mc_reward_sparkle0;
    this.orangeGlow = this.dialogDisp.mc_reward_sparkle1;
    this.starMC = this.dialogDisp.mc_star;
    this.yellowGlow.compositeOperation = __dep_exact_81dacdf05bd32292.BlendMode.OVERLAY;
    this.orangeGlow.compositeOperation = __dep_exact_81dacdf05bd32292.BlendMode.SCREEN;
    this.starMC.compositeOperation = __dep_exact_81dacdf05bd32292.BlendMode.SCREEN;
    this.yellowGlow.mouseEnabled = false;
    this.orangeGlow.mouseEnabled = false;
    this.starMC.mouseEnabled = false;
  }
  FortuneTellerEventDialogRewardAnimation.prototype.show = function (__s5param0) {
    this.hide();
    var __s5local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_item).addIconMc(this.dialogDisp.mc_item.mc_item).addTextfield(this.dialogDisp.mc_item.txt_text);
    var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_RESOURCE_LIST, new __s0local0(60, 60));
    __s5local1.textfield.useAutoFitToBounds = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s5local0, __s5param0, __s5local1, null, this.bindFunction(this.onRender));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onRender = function (__s7param0) {
    this.hide();
    this.dialogDisp.mc_item.visible = true;
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(this.yellowGlow, 2, {
      alpha: 1,
      scaleX: 1.5,
      scaleY: 1.5,
      ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
      onComplete: this.bindFunction(this.onShinedIn),
      onCompleteParams: [this.yellowGlow]
    }));
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(this.orangeGlow, 2, {
      alpha: 1,
      scaleX: 1.5,
      scaleY: 1.5,
      ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
      onComplete: this.bindFunction(this.onShinedIn),
      onCompleteParams: [this.orangeGlow]
    }));
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(this.starMC, 2, {
      alpha: 1,
      scaleX: 1.5,
      scaleY: 1.5,
      rotation: 180,
      ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
      onComplete: this.bindFunction(this.onStarIn),
      onCompleteParams: [this.starMC]
    }));
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(this.dialogDisp.mc_item, 0.8, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0_2.Sine.easeOut,
      onComplete: this.bindFunction(this.onRewardIn),
      onCompleteParams: [this.dialogDisp.mc_item],
      delay: 1.2
    }));
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(this.dialogDisp.mc_item, 0.8, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut,
      delay: 1.2
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onShinedIn = function (__s9param0) {
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(__s9param0, 1, {
      alpha: 0,
      scaleX: 0.8,
      scaleY: 0.8,
      ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
      delay: 1
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onStarIn = function (__s11param0) {
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(__s11param0, 1, {
      rotation: 360,
      alpha: 0,
      scaleX: 0.8,
      scaleY: 0.8,
      ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
      delay: 1
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onRewardIn = function (__s13param0) {
    this.showTweens.push(__dep_exact_608de47b6498f9b0_3.TweenLite.to(__s13param0, 1, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0_2.Sine.easeOut,
      onComplete: this.bindFunction(this.hide),
      delay: 1
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.hide = function (__s15param0 = null) {
    for (var __s15local0 = 0, __s15local1 = this.showTweens; __s15local0 < __s15local1.length; __s15local0++) {
      var __s15local2 = __s15local1[__s15local0];
      __s15local2.invalidate();
      __s15local2.kill();
    }
    this.showTweens = [];
    this.yellowGlow.alpha = 0;
    this.orangeGlow.alpha = 0;
    this.starMC.alpha = 0;
    this.starMC.rotation = 360;
    this.dialogDisp.mc_item.alpha = 0;
    this.dialogDisp.mc_item.visible = false;
    this.dialogDisp.mc_item.scaleX = this.dialogDisp.mc_item.scaleY = 0.6;
    this.yellowGlow.scaleX = this.yellowGlow.scaleY = 0.8;
    this.starMC.scaleX = this.yellowGlow.scaleY = 0.8;
    this.orangeGlow.scaleX = this.orangeGlow.scaleY = 0.8;
  };
  return FortuneTellerEventDialogRewardAnimation;
}();
exports.FortuneTellerEventDialogRewardAnimation = __s0local1;
