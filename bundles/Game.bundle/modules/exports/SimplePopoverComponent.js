Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Shape;
var __s0local2 = createjs.TimerEvent;
var __s0local3 = createjs.Point;
var __s0local4 = function (__s1param0) {
  function SimplePopoverComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._dispComponent = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    __s3local0._currentScreenDimension = new __s0local3();
    __s3local0._currentState = 0;
    __s3local0._waitTimer = new __dep_exact_81dacdf05bd32292.Timer(100000, 1);
    __s3local0._isReady = false;
    __s3local0._startTriggered = false;
    __s3local0._onAssetLoadedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onSequenceCompleteSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onStateStarted = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._disp = __s3local0.initPopDisp(__s3param0);
    __s3local0._dispComponent.init(__s3local0.getDispChild(SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SimplePopoverComponent, __s1param0);
  SimplePopoverComponent.prototype.initPopDisp = function (__s5param0) {
    this._dialogDisp = __s5param0;
    var __s5local0 = this.createPopoverDisp();
    this._dialogDisp.addChild(__s5local0);
    __s5local0.visible = false;
    return __s5local0;
  };
  SimplePopoverComponent.prototype.init = function (__s7param0) {
    this._config = __s7param0;
    this._dispComponent.cacheDisp = false;
    this._dispComponent.reset();
    this._isReady = false;
    this.setTimerListener(false);
    this._waitTimer = new __dep_exact_81dacdf05bd32292.Timer(this._config.waitDuration * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, 1);
    if (this._config && this._config.assetPos) {
      var __s7local0 = this.getDispChild(SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER);
      __s7local0.x = __s7param0.assetPos.x;
      __s7local0.y = __s7param0.assetPos.y;
    }
    this._dispComponent.onLoadedSignal.add(this.bindFunction(this.onDispClipsLoaded));
    this._dispComponent.switchCreationState(true);
    this._dispComponent.addClip(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(this._config.assetClipName, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(this._config.assetFileName)));
    this._dispComponent.switchCreationState(false);
  };
  SimplePopoverComponent.prototype.destroy = function () {
    this._onAssetLoadedSignal.removeAll();
    this._onSequenceCompleteSignal.removeAll();
    this.setTimerListener(false);
    this._dispComponent.destroy();
    __s1param0.prototype.destroy.call(this);
  };
  SimplePopoverComponent.prototype.onShow = function () {
    this.startState(SimplePopoverComponent.STATE_HIDE);
    __s1param0.prototype.onShow.call(this);
  };
  SimplePopoverComponent.prototype.onHide = function () {
    this.startState(SimplePopoverComponent.STATE_HIDE);
    __s1param0.prototype.onHide.call(this);
  };
  SimplePopoverComponent.prototype.removeEventListener = function () {
    this.setTimerListener(false);
    __s1param0.prototype.removeEventListener.call(this);
  };
  SimplePopoverComponent.prototype.startSequence = function () {
    this.startState(SimplePopoverComponent.STATE_FADE_IN);
  };
  SimplePopoverComponent.prototype.endSequence = function () {
    this.startState(SimplePopoverComponent.STATE_FADE_OUT);
  };
  SimplePopoverComponent.prototype.startState = function (__s22param0) {
    this._currentState = __s22param0;
    this._startTriggered = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.disp);
    this.disp.visible = true;
    this.setTimerListener(false);
    this.disp.alpha = 1;
    this._waitTimer.stop();
    this.updateClickArea();
    if (this._isReady) {
      this._dialogDisp.setChildIndex(this.disp, this._dialogDisp.numChildren - 1);
      switch (__s22param0) {
        case SimplePopoverComponent.STATE_HIDE:
          this.disp.visible = false;
          break;
        case SimplePopoverComponent.STATE_FADE_IN:
          this.disp.visible = true;
          this.disp.alpha = 0;
          __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, this._config.fadeInDuration, {
            alpha: 1,
            ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
          }).eventCallback("onComplete", this.bindFunction(this.onFadeInComplete));
          break;
        case SimplePopoverComponent.STATE_WAIT:
          this.setTimerListener(true);
          this._waitTimer.reset();
          this._waitTimer.start();
          break;
        case SimplePopoverComponent.STATE_FADE_OUT:
          this.disp.visible = true;
          __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, this._config.fadeOutDuration, {
            alpha: 0,
            ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
          }).eventCallback("onComplete", this.bindFunction(this.onFadeOutComplete));
      }
      this._onStateStarted.dispatch(__s22param0);
    }
  };
  SimplePopoverComponent.prototype.setTimerListener = function (__s26param0) {
    if (this._waitTimer) {
      if (__s26param0) {
        this._waitTimer.addEventListener(__s0local2.TIMER_COMPLETE, this.bindFunction(this.onWaitComplete));
      } else {
        this._waitTimer.removeEventListener(__s0local2.TIMER_COMPLETE, this.bindFunction(this.onWaitComplete));
      }
    }
  };
  SimplePopoverComponent.prototype.updateClickArea = function () {
    if (this._dialogDisp.stage) {
      if (this._clickAreaMc.numChildren > 0 && this.config.useClickArea == 0) {
        this._clickAreaMc.removeChildren();
      }
      var __s31local0 = new __s0local3(this._dialogDisp.stage.stageWidth, this._dialogDisp.stage.stageHeight);
      if ((this._currentScreenDimension.x != __s31local0.x || this._currentScreenDimension.y != __s31local0.y) && (this._currentScreenDimension = __s31local0, this._clickAreaMc.removeChildren(), this._config && this._config.useClickArea)) {
        var __s31local1 = new __s0local1();
        __s31local1.graphics.beginFill(0, 0.1);
        __s31local1.graphics.drawRect(0, 0, this._currentScreenDimension.x, this._currentScreenDimension.y);
        __s31local1.graphics.endFill();
        __s31local1.setBounds(0, 0, this._currentScreenDimension.x, this._currentScreenDimension.y);
        __s31local1.x = -this._currentScreenDimension.x / 2;
        __s31local1.y = -this._currentScreenDimension.y / 2;
        this._clickAreaMc.addChild(__s31local1);
      }
    }
  };
  SimplePopoverComponent.prototype.createPopoverDisp = function () {
    var __s36local0 = new __s0local0();
    __s36local0.name = SimplePopoverComponent.DISP_NAME_TOP_LAYER;
    this._assetPlaceholderMc = new __s0local0();
    this._assetPlaceholderMc.name = SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER;
    this._clickAreaMc = new __s0local0();
    this._clickAreaMc.name = SimplePopoverComponent.DISP_NAME_CLICK_AREA;
    __s36local0.addChild(this._clickAreaMc);
    __s36local0.addChild(this._assetPlaceholderMc);
    return __s36local0;
  };
  SimplePopoverComponent.prototype.getDispChild = function (__s38param0) {
    return this.disp.getChildByName(__s38param0);
  };
  SimplePopoverComponent.prototype.getAssetDisp = function () {
    var __s40local0 = this._dispComponent.firstClip;
    if (__s40local0) {
      return __s40local0.currentshownDisplayObject;
    } else {
      return null;
    }
  };
  SimplePopoverComponent.prototype.onDispClipsLoaded = function () {
    this._dispComponent.onLoadedSignal.remove(this.bindFunction(this.onDispClipsLoaded));
    this._isReady = true;
    this._onAssetLoadedSignal.dispatch();
    if (this._startTriggered) {
      this.startState(this._currentState);
    }
  };
  SimplePopoverComponent.prototype.onClick = function (__s47param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s47param0.target)) {
      __s1param0.prototype.onClick.call(this, __s47param0);
      if (this._currentState == SimplePopoverComponent.STATE_WAIT && this.config.closeOnClick) {
        this.endSequence();
      }
    }
  };
  SimplePopoverComponent.prototype.onFadeInComplete = function () {
    if (this._config.waitDuration >= 0) {
      this.startState(SimplePopoverComponent.STATE_WAIT);
    }
  };
  SimplePopoverComponent.prototype.onFadeOutComplete = function () {
    this.startState(SimplePopoverComponent.STATE_HIDE);
    this._startTriggered = false;
    this._onSequenceCompleteSignal.dispatch();
  };
  SimplePopoverComponent.prototype.onWaitComplete = function (__s56param0) {
    this.setTimerListener(false);
    this._waitTimer.stop();
    this.startState(SimplePopoverComponent.STATE_FADE_OUT);
  };
  Object.defineProperty(SimplePopoverComponent.prototype, "isReady", {
    get: function () {
      return this._isReady;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "config", {
    get: function () {
      return this._config;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "onAssetLoadedSignal", {
    get: function () {
      return this._onAssetLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "onSequenceCompleteSignal", {
    get: function () {
      return this._onSequenceCompleteSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "onStateStarted", {
    get: function () {
      return this._onStateStarted;
    },
    enumerable: true,
    configurable: true
  });
  SimplePopoverComponent.prototype.resetTimer = function () {
    this.setTimerListener(false);
    this._waitTimer.reset();
    this._waitTimer = new __dep_exact_81dacdf05bd32292.Timer(this._config.waitDuration * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, 1);
  };
  SimplePopoverComponent.prototype.doWhenLoaded = function (__s72param0) {
    if (this.isReady) {
      __s72param0();
    } else {
      this._onAssetLoadedSignal.addOnce(__s72param0);
    }
  };
  SimplePopoverComponent.DISP_NAME_TOP_LAYER = "popover_top";
  SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER = "popover_asset";
  SimplePopoverComponent.DISP_NAME_CLICK_AREA = "popover_clickArea";
  SimplePopoverComponent.STATE_HIDE = 0;
  SimplePopoverComponent.STATE_FADE_IN = 1;
  SimplePopoverComponent.STATE_WAIT = 2;
  SimplePopoverComponent.STATE_FADE_OUT = 3;
  return SimplePopoverComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SimplePopoverComponent = __s0local4;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local4, "ICollectableRendererList");
