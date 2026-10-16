Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = function () {
  function CastleSpeechBubbleComponent(__s3param0, __s3param1) {
    this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_HIDDEN;
    this._currentBubbleState = CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME;
    this._showTime = 0;
    this._comeBackTime = 0;
    this._startDelayTime = 0;
    this._fadeTime = 0;
    this._disp = __s3param0;
    this._disp.visible = false;
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickBubble));
    this.itxt_bubble = this.textFieldManager.registerTextField(__s3param1, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  }
  CastleSpeechBubbleComponent.prototype.initComponent = function (__s5param0 = "", __s5param1 = -1, __s5param2 = -1, __s5param3 = 0, __s5param4 = 1, __s5param5 = null) {
    this.bubbleText = __s5param0.replace("\n", "");
    this._showTime = __s5param1;
    this._comeBackTime = __s5param2;
    this._startDelayTime = __s5param3;
    this._fadeTime = __s5param4;
    this._onClickFunction = __s5param5;
    if (__s5param3 > 0) {
      this._startDelayTimer = new __dep_exact_81dacdf05bd32292.Timer(this._startDelayTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, 1);
      this._startDelayTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
    if (this._showTime >= 0) {
      this._fadeOutTimer = new __dep_exact_81dacdf05bd32292.Timer(this._showTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, 1);
      this._fadeOutTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.fadeOutMessageBubble));
    }
    if (this._comeBackTime >= 0) {
      this._comeBackTimer = new __dep_exact_81dacdf05bd32292.Timer(this._comeBackTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, 1);
      this._comeBackTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
  };
  CastleSpeechBubbleComponent.prototype.show = function () {
    if (this._startDelayTimer) {
      this._startDelayTimer.start();
    } else {
      this.fadeInMessageBubble();
    }
  };
  CastleSpeechBubbleComponent.prototype.hide = function () {
    this.fadeOutMessageBubble();
    if (this._fadeOutTimer) {
      this._fadeOutTimer.reset();
    }
  };
  CastleSpeechBubbleComponent.prototype.changeBubbleState = function (__s17param0) {
    if (this._currentBubbleState != __s17param0) {
      switch (__s17param0) {
        case CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME:
          this._currentBubbleState = CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME;
          break;
        case CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK:
          this._currentBubbleState = CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK;
          this._comeBackTimer.reset();
          this._comeBackTimer.start();
      }
    }
  };
  CastleSpeechBubbleComponent.prototype.onClickBubble = function (__s21param0) {
    if (this._onClickFunction != null) {
      this._onClickFunction();
    }
  };
  CastleSpeechBubbleComponent.prototype.fadeInMessageBubble = function (__s24param0 = null) {
    if (this._startDelayTimer) {
      this._startDelayTimer.reset();
    }
    if (this._comeBackTimer) {
      this._comeBackTimer.reset();
    }
    if (this._currentDisplayState != CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN && this._currentDisplayState != CastleSpeechBubbleComponent.DISPLAYSTATE_FADEIN) {
      this._disp.visible = true;
      this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_FADEIN;
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._disp, this._fadeTime, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
        onComplete: this.bindFunction(this.onFadedIn)
      });
    }
  };
  CastleSpeechBubbleComponent.prototype.onFadedIn = function () {
    if (this._fadeOutTimer) {
      this._fadeOutTimer.start();
    }
    this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN;
  };
  CastleSpeechBubbleComponent.prototype.fadeOutMessageBubble = function (__s32param0 = null) {
    if (this._currentDisplayState == CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._disp, this._fadeTime, {
        alpha: 1
      }, {
        alpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
        onComplete: this.bindFunction(this.hideMessageBubble)
      });
      this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_FADEOUT;
    }
  };
  CastleSpeechBubbleComponent.prototype.hideMessageBubble = function () {
    this._disp.visible = false;
    this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_HIDDEN;
    if (this._comeBackTimer) {
      this._comeBackTimer.reset();
      if (this._currentBubbleState == CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK) {
        this._comeBackTimer.start();
      }
    }
  };
  CastleSpeechBubbleComponent.prototype.destroy = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickBubble));
    if (this._startDelayTimer) {
      this._startDelayTimer.reset();
      this._startDelayTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
    if (this._fadeOutTimer) {
      this._fadeOutTimer.reset();
      this._fadeOutTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.fadeOutMessageBubble));
    }
    if (this._comeBackTimer) {
      this._comeBackTimer.reset();
      this._comeBackTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
  };
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "bubbleText", {
    get: function () {
      return this.itxt_bubble.text;
    },
    set: function (__s46param0) {
      this.itxt_bubble.textContentVO.stringValue = __s46param0;
      this.itxt_bubble.autoFitToBounds = true;
      this.itxt_bubble.y = -this.itxt_bubble.textHeight * CastleSpeechBubbleComponent.CENTER_OFFSET_Y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "onClickFunction", {
    get: function () {
      return this._onClickFunction;
    },
    set: function (__s50param0) {
      this._onClickFunction = __s50param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "currentState", {
    get: function () {
      return this._currentDisplayState;
    },
    set: function (__s54param0) {
      this._currentDisplayState = __s54param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpeechBubbleComponent.__initialize_static_members = function () {
    CastleSpeechBubbleComponent.DISPLAYSTATE_HIDDEN = "hidden";
    CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN = "shown";
    CastleSpeechBubbleComponent.DISPLAYSTATE_FADEIN = "fadein";
    CastleSpeechBubbleComponent.DISPLAYSTATE_FADEOUT = "fadeout";
    CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME = "onetime";
    CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK = "comeback";
    CastleSpeechBubbleComponent.CENTER_OFFSET_Y = 0.6;
  };
  return CastleSpeechBubbleComponent;
}();
exports.CastleSpeechBubbleComponent = __s0local2;
__s0local2.__initialize_static_members();
