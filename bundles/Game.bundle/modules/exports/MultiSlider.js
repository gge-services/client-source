Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_MultiSliderButton = require("gge-module:export_MultiSliderButton");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function MultiSlider(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5 = true, __s3param6 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._sliderAmount = 0;
    __s3local0._sliderWidth = NaN;
    __s3local0._sliderButtonWidth = NaN;
    __s3local0._borderLeft = NaN;
    __s3local0._borderRight = NaN;
    __s3local0._useBars = false;
    __s3local0._oneHundredPercentInPixel = NaN;
    __s3local0._enabled = true;
    __s3local0._lastUpdateSent = 0;
    __s3local0._disp = __s3param0;
    __s3local0._sliderAmount = __s3param1;
    __s3local0._sliderButtonWidth = __s3param2;
    __s3local0._sliderWidth = __s3param3;
    __s3local0._useBars = __s3param5;
    __s3local0._sliderButtonClass = __s3param4;
    __s3local0._toolTips = __s3param6;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MultiSlider, __s1param0);
  MultiSlider.prototype.init = function () {
    this._borderLeft = this.sliderButtonWidth / 2;
    this._borderRight = this._sliderWidth - this.sliderButtonWidth / 2;
    this._oneHundredPercentInPixel = this._sliderWidth - this.sliderAmount * this.sliderButtonWidth;
    this._buttons = [];
    for (var __s5local0 = 0; __s5local0 < this._sliderAmount; __s5local0++) {
      var __s5local1 = new __dep_export_MultiSliderButton.MultiSliderButton(new this._sliderButtonClass(), this);
      __s5local1.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
      __s5local1.id = __s5local0;
      if (this._toolTips && this._toolTips.length > __s5local0) {
        __s5local1.disp.toolTipText = this._toolTips[__s5local0];
      }
      this._disp.addChild(__s5local1);
      this._buttons.push(__s5local1);
    }
    var __s5local2 = 100 / (this._sliderAmount + 1);
    for (var __s5local3 = 0; __s5local3 < this._sliderAmount; __s5local3++) {
      this._buttons[__s5local3].selectedValue = __s5local2 * (__s5local3 + 1);
    }
    this._disp.parent.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderUp));
    this._disp.parent.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onSliderUp));
    this._disp.parent.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.drawBars();
  };
  Object.defineProperty(MultiSlider.prototype, "enableComponent", {
    set: function (__s12param0) {
      this._enabled = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  MultiSlider.prototype.onSliderDown = function (__s14param0) {
    if (this._enabled) {
      var __s14local0 = __s14param0.target.parent;
      this._lastUpdateSent = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      this._selectedSliderButton ||= __s14local0;
    }
  };
  MultiSlider.prototype.onSliding = function (__s17param0) {
    if (this._selectedSliderButton) {
      this._selectedSliderButton.movePosition(this._disp.mouseX);
      this.updateslider();
      var __s17local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      if (__s17local0 - this._lastUpdateSent > MultiSlider.UDPATE_INTERVAL) {
        this._lastUpdateSent = __s17local0;
        this.dispatchEvent(new __dep_export_SliderEvent.SliderEvent(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.getPercentValues()));
      }
    }
  };
  MultiSlider.prototype.onSliderUp = function (__s21param0) {
    if (this._selectedSliderButton) {
      this.dispatchEvent(new __dep_export_SliderEvent.SliderEvent(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.getPercentValues()));
      this._selectedSliderButton = null;
      this.updateslider();
    }
  };
  MultiSlider.prototype.setSliderTo = function (__s24param0, __s24param1) {
    this.buttons[__s24param0].selectedValue = __s24param1;
    this.updateslider();
  };
  MultiSlider.prototype.updateslider = function () {
    this.drawBars();
  };
  MultiSlider.prototype.drawBars = function () {
    if (this._useBars) {
      for (var __s28local0 = 0; __s28local0 < this._sliderAmount; __s28local0++) {
        var __s28local1 = this._buttons[__s28local0].buttonPosition / this._sliderWidth;
        this._disp["bar" + __s28local0].mc_mask.scaleX = __s28local1;
      }
      this._disp["bar" + this._sliderAmount].mc_mask.visible = false;
    }
  };
  MultiSlider.prototype.getPixelDistances = function () {
    var __s33local0 = [];
    var __s33local1 = 0;
    for (var __s33local2 = 0; __s33local2 < this._sliderAmount; __s33local2++) {
      var __s33local3 = this._buttons[__s33local2];
      __s33local0.push(__s33local3.buttonLeft - __s33local1);
      __s33local1 = __s33local3.buttonRight;
    }
    __s33local0.push(this._sliderWidth - __s33local1);
    return __s33local0;
  };
  MultiSlider.prototype.getPercentValues = function () {
    var __s37local0 = this.getPixelDistances();
    var __s37local1 = [];
    var __s37local2 = 0;
    for (__s37local2 = 0; __s37local2 < __s37local0.length; __s37local2++) {
      __s37local1.push(__dep_exact_f855840627e6e145.int(__s37local0[__s37local2]) / this._oneHundredPercentInPixel);
    }
    for (__s37local2 = 0; __s37local2 < __s37local1.length; __s37local2++) {
      __s37local1[__s37local2] = __dep_exact_9e901e8e2483a22f.MathBase.round(Math.max(Math.min(__s37local1[__s37local2], 100), 0), 2);
    }
    var __s37local3 = 0;
    var __s37local4 = 0;
    for (__s37local2 = 0; __s37local2 < __s37local1.length; __s37local2++) {
      __s37local3 += __s37local1[__s37local2];
      if (__s37local1[__s37local2] >= __s37local1[__s37local4]) {
        __s37local4 = __s37local2;
      }
    }
    __s37local1[__s37local4] += 1 - __s37local3;
    return __s37local1;
  };
  Object.defineProperty(MultiSlider.prototype, "borderLeft", {
    get: function () {
      return this._borderLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "borderRight", {
    get: function () {
      return this._borderRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "sliderWidth", {
    get: function () {
      return this._sliderWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "sliderButtonWidth", {
    get: function () {
      return this._sliderButtonWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "sliderAmount", {
    get: function () {
      return this._sliderAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "oneHundredPercentInPixel", {
    get: function () {
      return this._oneHundredPercentInPixel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSlider.prototype, "toolTips", {
    get: function () {
      return this._toolTips;
    },
    set: function (__s64param0) {
      for (var __s64local0 = 0; __s64local0 < this._buttons.length; __s64local0++) {
        if (__s64param0 && __s64param0.length > __s64local0) {
          this._buttons[__s64local0].disp.toolTipText = __s64param0[__s64local0];
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  MultiSlider.prototype.dispose = function () {
    for (var __s69local0 = 0; __s69local0 < this._buttons.length; ++__s69local0) {
      this._buttons[__s69local0].removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
    }
    this._disp.parent.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderUp));
    this._disp.parent.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onSliderUp));
    this._disp.parent.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    this._disp = null;
    this._buttons = null;
    this._selectedSliderButton = null;
    this._sliderButtonClass = null;
    this._toolTips = null;
  };
  MultiSlider.__initialize_static_members = function () {
    MultiSlider.UDPATE_INTERVAL = 250;
  };
  return MultiSlider;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.MultiSlider = __s0local1;
__s0local1.__initialize_static_members();
