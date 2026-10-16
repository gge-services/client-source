var __s0local0;
var __s0local1 = this && this.__extends || (__s0local0 = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (__s1param0, __s1param1) {
  __s1param0.__proto__ = __s1param1;
} || function (__s3param0, __s3param1) {
  for (var __s3local0 in __s3param1) {
    if (__s3param1.hasOwnProperty(__s3local0)) {
      __s3param0[__s3local0] = __s3param1[__s3local0];
    }
  }
}, function (__s8param0, __s8param1) {
  function __s8local0() {
    this.constructor = __s8param0;
  }
  __s0local0(__s8param0, __s8param1);
  __s8param0.prototype = __s8param1 === null ? Object.create(__s8param1) : (__s8local0.prototype = __s8param1.prototype, new __s8local0());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ButtonColorMatrix = require("gge-module:class_ButtonColorMatrix");
var __dep_exact_6fa490d8c1ec56fc = require("gge-module:exact_6fa490d8c1ec56fc");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local2 = createjs.MovieClip;
var __s0local3 = createjs.Event;
var __s0local4 = createjs.TimerEvent;
var __s0local5 = createjs.GlowFilter;
var __s0local6 = function (__s12param0) {
  function BasicButton(__s14param0 = null, __s14param1 = false) {
    var __s14local0 = __s12param0.call(this) || this;
    __s14local0._minWidth = 100;
    __s14local0.textXOffset = 0;
    __s14local0.initScale = NaN;
    __s14local0._mouseOverScale = BasicButton.DEFAULT_MOUSEOVER_SCALE;
    __s14local0._enablingIsDelayed = false;
    __s14local0._useCaching = false;
    __s14local0._disp = __s14param0 ?? __s14local0;
    if (__s14param1) {
      __s14local0.init();
      __s14local0._disp.addEventListener(__s0local3.REMOVED_FROM_STAGE, __s14local0.bindFunction(__s14local0.onRemoveToStage), false, 0, true);
    } else {
      __s14local0._disp.addEventListener(__s0local3.ADDED_TO_STAGE, __s14local0.bindFunction(__s14local0.onAddedToStage), false, 0, true);
    }
    if (__s14local0.disp.txt_label) {
      __s14local0.textField = __s14local0.disp.txt_label;
    }
    return __s14local0;
  }
  __s0local1(BasicButton, __s12param0);
  BasicButton.prototype.onAddedToStage = function (__s19param0) {
    this._disp.removeEventListener(__s0local3.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.init();
    this._disp.addEventListener(__s0local3.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage), false, 0, true);
    if (this.cacheCanvas) {
      this._useCaching = true;
    }
  };
  BasicButton.prototype.onRemoveToStage = function (__s22param0) {
    this._disp.scaleX = this._disp.scaleY = this.initScale;
    this._disp.removeEventListener(__s0local3.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage));
    this._disp.removeEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.removeEventListener("rollout", this.bindFunction(this.onRollOut));
    this._disp.addEventListener(__s0local3.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage), false, 0, true);
    if (this.delayTimer) {
      this.delayTimer.removeEventListener(__s0local4.TIMER_COMPLETE, this.bindFunction(this.executeDelayedEnabling));
      this.delayTimer.stop();
    }
  };
  BasicButton.prototype.setCaching = function (__s25param0) {
    this._useCaching = __s25param0;
  };
  BasicButton.prototype.removeMouseEventListener = function () {
    this._disp.removeEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.removeEventListener("rollout", this.bindFunction(this.onRollOut));
  };
  BasicButton.prototype.addMouseEventListener = function () {
    this._disp.addEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.addEventListener("rollout", this.bindFunction(this.onRollOut));
  };
  BasicButton.prototype.init = function () {
    this._disp.useHandCursor = true;
    this._disp.buttonMode = true;
    this._disp.mouseChildren = false;
    this._disp.tabEnabled = false;
    this.initScale = Math.min(this._disp.scaleX, this._disp.scaleY);
    this.updateButtonEnablement();
    this._disp.addEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.addEventListener("rollout", this.bindFunction(this.onRollOut));
  };
  Object.defineProperty(BasicButton.prototype, "minWidth", {
    set: function (__s33param0) {
      this._minWidth = __s33param0;
      if (this.textField) {
        this.label = this.textField.text;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButton.prototype, "label", {
    set: function (__s36param0) {
      this.textField = this._disp.txt_label;
      this.background = this._disp.mc_background;
      if (this.textField) {
        this.textField.text = __s36param0;
        this.textField.width = this.textField.textWidth + 5;
        this.textField.x = -this.textField.width / 2 + this.textXOffset;
        if (this.background) {
          this.background.width = Math.max(this._minWidth, this.textField.width + this.textXOffset + 30);
          this.background.x = -this.background.width / 2;
          if (this._disp.getChildByName("mc_symbol")) {
            this._disp.mc_symbol.x = -this.background.width / 2;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.createColorMatrixFilter = function () {
    var __s41local0 = new __dep_class_ButtonColorMatrix.ButtonColorMatrix();
    __s41local0.desaturate();
    return [__s41local0.filter];
  };
  BasicButton.prototype.updateButtonEnablement = function () {
    this._disp.enabled = this.enabled;
    this._disp.useFilters(this.enabled ? BasicButton.NO_FILTER : BasicButton.COLOR_MATRIX_FILTER, this._useCaching);
  };
  BasicButton.prototype.clearEnablementDelay = function () {
    this._enablingIsDelayed = false;
    if (this.delayTimer) {
      this.delayTimer.removeEventListener(__s0local4.TIMER_COMPLETE, this.bindFunction(this.executeDelayedEnabling));
      this.delayTimer.reset();
    }
  };
  Object.defineProperty(BasicButton.prototype, "enableButton", {
    get: function () {
      return this.enabled;
    },
    set: function (__s50param0) {
      if (this.enabled !== __s50param0) {
        this.enabled = __s50param0;
        this.updateButtonEnablement();
        this.clearEnablementDelay();
        if (__s50param0) {
          this.useFilters(BasicButton.NO_FILTER, this._useCaching);
        } else {
          this.useFilters(BasicButton.COLOR_MATRIX_FILTER, this._useCaching);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.prototype.delayEnableButton = function (__s55param0, __s55param1 = BasicButton.DEFAULT_DELAY_TIME) {
    var __s55local0 = __dep_exact_6fa490d8c1ec56fc.int(__s55param1 >= 0 ? __s55param1 : BasicButton.DEFAULT_DELAY_TIME);
    if (__s55param0 && __s55local0 != 0) {
      this.enableButton = false;
      this._enablingIsDelayed = true;
      this.delayTimer = new __dep_export_CSSMouseCursor.Timer(__s55local0, 1);
      this.delayTimer.addEventListener(__s0local4.TIMER_COMPLETE, this.bindFunction(this.executeDelayedEnabling));
      this.delayTimer.start();
    } else {
      this.enableButton = __s55param0;
    }
  };
  BasicButton.prototype.executeDelayedEnabling = function (__s59param0) {
    this.enableButton = true;
  };
  Object.defineProperty(BasicButton.prototype, "selectButton", {
    set: function (__s61param0) {
      if (__s61param0) {
        this.selected();
      } else {
        this.deselected();
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.prototype.selected = function () {
    if (this._disp.enabled) {
      this._disp.useFilters(BasicButton.FILTERS_SELECTED, this._useCaching);
    }
  };
  BasicButton.prototype.deselected = function () {
    if (this._disp.enabled) {
      this._disp.useFilters(BasicButton.NO_FILTER, this._useCaching);
    }
  };
  BasicButton.prototype.onRollOut = function (__s71param0) {
    this.normalSize();
    this.applyCacheScale(this.initScale);
  };
  BasicButton.prototype.onRollOver = function (__s73param0) {
    this.changeSize(this.initScale * this._mouseOverScale, this.initScale * this._mouseOverScale);
    this.applyCacheScale(2);
  };
  BasicButton.prototype.normalSize = function () {
    this.changeSize(this.initScale, this.initScale);
  };
  BasicButton.prototype.changeSize = function (__s77param0, __s77param1) {
    if (this._disp.enabled) {
      this._disp.scaleX = __s77param0;
      this._disp.scaleY = __s77param1;
    }
  };
  BasicButton.prototype.applyCacheScale = function (__s80param0) {
    this.textField ||= this.getTextField();
    if (this.textField && this.textField.cacheCanvas) {
      this.textField.uncache();
      this.textField.doCache(0, 2);
    }
    if (this._useCaching) {
      this._disp.uncache();
      this._disp.doCache(0, __s80param0);
    }
  };
  BasicButton.prototype.getTextField = function () {
    var __s84local0 = null;
    this._disp.children.forEach(function (__s86param0) {
      if (__s86param0 instanceof createjs.TextField) {
        __s84local0 = __s86param0;
      }
    });
    return __s84local0;
  };
  Object.defineProperty(BasicButton.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButton.prototype, "mouseOverScale", {
    set: function (__s91param0) {
      this._mouseOverScale = __s91param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.prototype.resetHoverState = function () {
    this.onRollOut(null);
  };
  Object.defineProperty(BasicButton.prototype, "enablingIsDelayed", {
    get: function () {
      return this._enablingIsDelayed;
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.DEFAULT_DELAY_TIME = 500;
  BasicButton.DEFAULT_MOUSEOVER_SCALE = 1.05;
  BasicButton.FILTERS_SELECTED = [new __s0local5(16777215, 0.8, 16, 16, 4)];
  BasicButton.NO_FILTER = [];
  BasicButton.COLOR_MATRIX_FILTER = BasicButton.createColorMatrixFilter();
  return BasicButton;
}(__s0local2);
exports.BasicButton = __s0local6;
