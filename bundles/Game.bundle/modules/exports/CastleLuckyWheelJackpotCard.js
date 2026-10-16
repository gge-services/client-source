Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelJackpotCard(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0._index = 0;
    __s3local0._isAnimating = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._index = __s3param1;
    __s3local0._eventVO = __s3param3;
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.card.mc_ribbon.txt_price, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_yourPrice")).autoFitToBounds = true;
    __s3local0._clickCallBack = __s3param2;
    __s3local0._animationCompletedCallBack = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelJackpotCard, __s1param0);
  CastleLuckyWheelJackpotCard.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    this.scaleCard(1);
    if (!this._isAnimating) {
      this._clickCallBack(this._index);
    }
  };
  CastleLuckyWheelJackpotCard.prototype.isClosed = function () {
    return this.card.closedCard.visible;
  };
  CastleLuckyWheelJackpotCard.prototype.setClosed = function () {
    var __s10local0 = __dep_exact_f855840627e6e145.int(this._eventVO.currentWinClass);
    if (this._eventVO.hasLevelUp) {
      __s10local0 -= 1;
    }
    this.card.closedCard.jackpotLevelTF.defaultCacheScale = 2;
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.card.closedCard.jackpotLevelTF, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s10local0), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true)).mouseEnabled = false;
    this.card.mc_ribbon.visible = false;
    this.card.mc_glow.visible = false;
    this.card.closedCard.visible = true;
    this.card.openCard.visible = false;
    this.card.closedCard.actLikeButton = true;
  };
  CastleLuckyWheelJackpotCard.prototype.setOpened = function (__s13param0 = null) {
    this.card.mc_ribbon.visible = false;
    this.card.mc_glow.visible = false;
    this.card.closedCard.visible = false;
    this.card.openCard.visible = true;
    this.updateReward(__s13param0);
  };
  CastleLuckyWheelJackpotCard.prototype.updateReward = function (__s15param0 = null) {
    if (this._rewardRenderer) {
      this._rewardRenderer.destroy();
    }
    if (__s15param0) {
      var __s15local0 = this.card.openCard.mc_reward;
      var __s15local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT);
      __s15local1.textfield.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this._rewardRenderer = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s15local0).addIconMc(__s15local0.mc_iconHolder).addTextfield(__s15local0.txt_amount).addInfoBtn(this.card.openCard.btn_info), __s15param0, __s15local1);
    }
  };
  CastleLuckyWheelJackpotCard.prototype.setWinningAppearance = function () {
    this.card.mc_ribbon.visible = true;
    this.card.mc_glow.visible = true;
  };
  CastleLuckyWheelJackpotCard.prototype.setAnimation = function (__s21param0, __s21param1, __s21param2, __s21param3) {
    this._isAnimating = true;
    var __s21local0 = 360;
    if (__s21param0 == this.x) {
      __s21local0 = 0;
    }
    __s21local0 *= __s21param0 > this.x ? -1 : 1;
    var __s21local1 = 0;
    __s21local1 = __s21param3 ? 1 : 0;
    this._cardTween = __dep_exact_608de47b6498f9b0.TweenMax.to(this.card, 0.5, {
      x: __s21param0,
      rotation: __s21local0,
      yoyo: __s21param2,
      repeat: 1,
      delay: __s21param1,
      repeatDelay: __s21local1,
      onComplete: this.bindFunction(this.onCompleteAnimation),
      onStart: this.bindFunction(this.onStartAnimation),
      onRepeat: this.bindFunction(this.onRepeatAnimation)
    });
  };
  CastleLuckyWheelJackpotCard.prototype.onRollOut = function (__s24param0) {
    __s1param0.prototype.onRollOut.call(this, __s24param0);
    this.scaleCard(1);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleLuckyWheelJackpotCard.prototype.onRollOver = function (__s26param0) {
    __s1param0.prototype.onRollOver.call(this, __s26param0);
    if (this.isClosed() == 1 && this._isAnimating == 0) {
      this.scaleCard(1.1);
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleLuckyWheelJackpotCard.prototype.onRepeatAnimation = function () {
    var __s29local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(Math.random() * 3));
    this.disp.parent.setChildIndex(this.disp, __s29local0);
  };
  CastleLuckyWheelJackpotCard.prototype.onStartAnimation = function () {
    this.setClosed();
  };
  CastleLuckyWheelJackpotCard.prototype.onCompleteAnimation = function () {
    this._isAnimating = false;
    if (this._animationCompletedCallBack) {
      this._animationCompletedCallBack();
    }
  };
  CastleLuckyWheelJackpotCard.prototype.scaleCard = function (__s36param0) {
    if (this._cardScaleTween) {
      this._cardScaleTween.kill();
    }
    this._cardScaleTween = null;
    this._cardScaleTween = __dep_exact_608de47b6498f9b0.TweenMax.to(this.card, 0.1, {
      scaleX: __s36param0,
      scaleY: __s36param0
    });
  };
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "x", {
    get: function () {
      return this.card.x;
    },
    set: function (__s41param0) {
      this.card.x = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "y", {
    get: function () {
      return this.card.y;
    },
    set: function (__s45param0) {
      this.card.y = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "card", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelJackpotCard.prototype.destroy = function () {
    this._cardTween.kill();
    if (this._cardScaleTween) {
      this._cardScaleTween.kill();
    }
    this._cardScaleTween = null;
    __s1param0.prototype.destroy.call(this);
  };
  return CastleLuckyWheelJackpotCard;
}(__dep_exact_9e901e8e2483a22f_1.FlashUIComponent);
exports.CastleLuckyWheelJackpotCard = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
