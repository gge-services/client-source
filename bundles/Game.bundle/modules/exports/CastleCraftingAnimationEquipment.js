Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __s0local0 = createjs.Event;
var __s0local1 = function () {
  function CastleCraftingAnimationEquipment(__s3param0, __s3param1) {
    this._currentBlinkIndex = 0;
    this._isAnimationCompleted = false;
    this._effectAnimationTimeout = -1;
    this.ANIMATION_TIME_FACTOR = 0.6;
    this.sublayer = __s3param1;
    this.animationGfx = __s3param0;
    this._animatedEquip = __s3param0;
  }
  CastleCraftingAnimationEquipment.prototype.doAnimation = function (__s5param0, __s5param1, __s5param2) {
    this._slots = this.sublayer.allSlotsOnScreen;
    this._animationFinishedCallback = __s5param0;
    this._lockDialogCallback = __s5param2;
    this._animatedEquip = __s5param1;
    this._animatedEquip.scaleY = this._animatedEquip.scaleY = 0;
  };
  CastleCraftingAnimationEquipment.prototype.doEQAnimation = function (__s7param0, __s7param1, __s7param2) {
    this.setFocusListeners();
    this._isAnimationCompleted = false;
    this.doAnimation(__s7param0, __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s7param1, null, 50, 50), __s7param2);
    this.doBlinkAnimation(this.ANIMATION_TIME_FACTOR * 0.8);
  };
  CastleCraftingAnimationEquipment.prototype.doGemAnimation = function (__s9param0, __s9param1, __s9param2) {
    this.setFocusListeners();
    this._isAnimationCompleted = false;
    this.doAnimation(__s9param0, __dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(__dep_export_CastleModel.CastleModel.gemData.getGemVO(__s9param1[__s9param1.length - 1].gemVO.upgradeId)), __s9param2);
    this.doBlinkAnimation(this.ANIMATION_TIME_FACTOR * 1);
  };
  CastleCraftingAnimationEquipment.prototype.doBlinkAnimation = function (__s11param0) {
    if (this._slots != null) {
      for (var __s11local0 in this._slots) {
        var __s11local1 = this._slots[__s11local0];
        if (__s11local1 !== undefined) {
          __s11local1.gemVO = null;
        }
      }
    }
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 100);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 200);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 300);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 400);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 500);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 600);
    this._effectAnimationTimeout = window.setTimeout(this.bindFunction(this.doEffectAnimation), this.ANIMATION_TIME_FACTOR * 700, __s11param0);
  };
  CastleCraftingAnimationEquipment.prototype.doEffectAnimation = function (__s17param0) {
    this.animateSlots(__s17param0);
    if (this.animationGfx) {
      this.animationGfx.play();
      this.animationGfx.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEffectAnimationFrame));
    }
  };
  CastleCraftingAnimationEquipment.prototype.onEffectAnimationFrame = function (__s20param0) {
    if (this.animationGfx.currentFrame >= this.animationGfx.totalFrames - 5) {
      this.completeAnimation();
    }
    this.animationGfx.gotoAndPlay(this.animationGfx.currentFrame + 1 / this.ANIMATION_TIME_FACTOR);
  };
  CastleCraftingAnimationEquipment.prototype.completeAnimation = function () {
    this._isAnimationCompleted = true;
    this.animationGfx.gotoAndStop(0);
    this.subLayerDisp.slot6.addChild(this._animatedEquip);
    this.animationGfx.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEffectAnimationFrame));
    window.removeEventListener("blur", this.bindFunction(this.animationPause));
    window.removeEventListener("focus", this.bindFunction(this.animationResume));
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._animatedEquip, this.ANIMATION_TIME_FACTOR * 0.3, {
      alpha: 1,
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
      onComplete: this.bindFunction(this.onAnimationComplete)
    });
  };
  CastleCraftingAnimationEquipment.prototype.setFocusListeners = function () {
    window.removeEventListener("blur", this.bindFunction(this.animationPause));
    window.removeEventListener("focus", this.bindFunction(this.animationResume));
    window.addEventListener("blur", this.bindFunction(this.animationPause));
    window.addEventListener("focus", this.bindFunction(this.animationResume));
  };
  CastleCraftingAnimationEquipment.prototype.animationPause = function () {
    if (this.animationGfx) {
      this.animationGfx.stop();
      this.animationGfx.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEffectAnimationFrame));
    }
    clearTimeout(this._effectAnimationTimeout);
  };
  CastleCraftingAnimationEquipment.prototype.animationResume = function () {
    if (!this._isAnimationCompleted) {
      this.completeAnimation();
    }
  };
  CastleCraftingAnimationEquipment.prototype.animateSlots = function (__s33param0 = 1.2) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._slots[0].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 115,
      y: -55,
      scaleX: __s33param0,
      scaleY: __s33param0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._slots[1].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 0,
      y: -105,
      scaleX: __s33param0,
      scaleY: __s33param0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._slots[2].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: -115,
      y: -55,
      scaleX: __s33param0,
      scaleY: __s33param0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._slots[3].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: -115,
      y: 55,
      scaleX: __s33param0,
      scaleY: __s33param0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._slots[4].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 0,
      y: 105,
      scaleX: __s33param0,
      scaleY: __s33param0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._slots[5].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 115,
      y: 55,
      scaleX: __s33param0,
      scaleY: __s33param0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut
    });
    this.subLayerDisp.slot6.mc_itemHolder.removeChildren();
  };
  CastleCraftingAnimationEquipment.prototype.turnOnBlink = function () {
    if (this.subLayerDisp["mc_connectionBar" + this._currentBlinkIndex]) {
      this.subLayerDisp["mc_connectionBar" + this._currentBlinkIndex].gotoAndStop(2);
      this._currentBlinkIndex++;
    }
  };
  CastleCraftingAnimationEquipment.prototype.onAnimationComplete = function () {
    this._isAnimationCompleted = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._animatedEquip, 0.3, {
      alpha: 0,
      y: 200,
      scale: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
      onComplete: this.bindFunction(this.resetAnimation)
    });
  };
  CastleCraftingAnimationEquipment.prototype.clearCenterSlot = function () {
    if (this.animationGfx) {
      this.animationGfx.gotoAndStop(0);
    }
    this.subLayerDisp.slot6.removeChild(this._animatedEquip);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._animatedEquip);
  };
  CastleCraftingAnimationEquipment.prototype.resetAnimation = function () {
    this.clearCenterSlot();
    if (this._animationFinishedCallback) {
      this._animationFinishedCallback();
    }
    for (var __s43local0 = 0; __s43local0 < 6; __s43local0++) {
      this.subLayerDisp["mc_connectionBar" + __s43local0].gotoAndStop(1);
      this._slots[__s43local0].mc_itemHolder.x = this._slots[__s43local0].mc_itemHolder.y = 0;
      this._slots[__s43local0].mc_itemHolder.scaleX = this._slots[__s43local0].mc_itemHolder.scaleY = 1;
      this._slots[__s43local0].mc_itemHolder.alpha = 1;
      this._slots[__s43local0].mc_itemHolder.visible = true;
    }
    this._currentBlinkIndex = 0;
  };
  Object.defineProperty(CastleCraftingAnimationEquipment.prototype, "subLayerDisp", {
    get: function () {
      return this.sublayer.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingAnimationEquipment.prototype.clearCallBacks = function () {
    this._lockDialogCallback = null;
    this._animationFinishedCallback = null;
  };
  return CastleCraftingAnimationEquipment;
}();
exports.CastleCraftingAnimationEquipment = __s0local1;
