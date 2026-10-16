Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SimpleScrollVO(__s3param0 = null, __s3param1 = null, __s3param2 = null, __s3param3 = null, __s3param4 = null, __s3param5 = null, __s3param6 = null, __s3param7 = null) {
    this._visualElements = [];
    this._mouseWheelElements = [];
    this.addMinusButton(__s3param0);
    this.addPlusButton(__s3param1);
    this.addMinButton(__s3param2);
    this.addMaxButton(__s3param3);
    this.addSliderLine(__s3param4);
    this.addSliderButton(__s3param5);
    this.addVisualElements(__s3param6);
    this.addMouseWheelElements(__s3param7);
  }
  SimpleScrollVO.prototype.reset = function () {
    this._minusButton = this._plusButton = this._minButton = this._maxButton = this._sliderLine = this._sliderButton = null;
    this._visualElements = [];
    this._mouseWheelElements = [];
  };
  SimpleScrollVO.prototype.addMinusButton = function (__s7param0) {
    this._minusButton = __s7param0;
    return this;
  };
  SimpleScrollVO.prototype.addPlusButton = function (__s9param0) {
    this._plusButton = __s9param0;
    return this;
  };
  SimpleScrollVO.prototype.addMinButton = function (__s11param0) {
    this._minButton = __s11param0;
    return this;
  };
  SimpleScrollVO.prototype.addMaxButton = function (__s13param0) {
    this._maxButton = __s13param0;
    return this;
  };
  SimpleScrollVO.prototype.addSliderLine = function (__s15param0) {
    this._sliderLine = __s15param0;
    return this;
  };
  SimpleScrollVO.prototype.addSliderBackground = function (__s17param0) {
    this._sliderBackground = __s17param0;
    return this;
  };
  SimpleScrollVO.prototype.addSliderButton = function (__s19param0) {
    this._sliderButton = __s19param0;
    return this;
  };
  SimpleScrollVO.prototype.addVisualElements = function (__s21param0) {
    this._visualElements = __s21param0;
    if (!__s21param0) {
      this._visualElements = [];
    }
    return this;
  };
  SimpleScrollVO.prototype.addMouseWheelElements = function (__s24param0) {
    this._mouseWheelElements = __s24param0;
    if (!__s24param0) {
      this._mouseWheelElements = [];
    }
    return this;
  };
  SimpleScrollVO.prototype.initByParent = function (__s27param0) {
    this.reset();
    if (__s27param0) {
      this.addMinusButton(__s27param0.getChildByName("btn_minus"));
      this.addPlusButton(__s27param0.getChildByName("btn_plus"));
      this.addMinButton(__s27param0.getChildByName("btn_min"));
      this.addMaxButton(__s27param0.getChildByName("btn_max"));
      this.addSliderButton(__s27param0.getChildByName("btn_slider"));
      this.addSliderLine(__s27param0.getChildByName("mc_sliderLine"));
    }
    return this;
  };
  Object.defineProperty(SimpleScrollVO.prototype, "hasSlider", {
    get: function () {
      return !!this.sliderButton && !!this.sliderLine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "stage", {
    get: function () {
      if (this.sliderLine) {
        return this.sliderLine.stage;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "sliderLine", {
    get: function () {
      return this._sliderLine;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "sliderButton", {
    get: function () {
      return this._sliderButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "sliderBackground", {
    get: function () {
      return this._sliderBackground;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "visualElements", {
    get: function () {
      return this._visualElements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "mouseWheelElements", {
    get: function () {
      return this._mouseWheelElements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "plusButton", {
    get: function () {
      return this._plusButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "minusButton", {
    get: function () {
      return this._minusButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "minButton", {
    get: function () {
      return this._minButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "maxButton", {
    get: function () {
      return this._maxButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollVO.prototype, "allElements", {
    get: function () {
      var __s54local0 = [];
      if (this.maxButton) {
        __s54local0.push(this.maxButton);
      }
      if (this.minButton) {
        __s54local0.push(this.minButton);
      }
      if (this.minusButton) {
        __s54local0.push(this.minusButton);
      }
      if (this.plusButton) {
        __s54local0.push(this.plusButton);
      }
      if (this.sliderBackground) {
        __s54local0.push(this.sliderBackground);
      }
      if (this.sliderButton) {
        __s54local0.push(this.sliderButton);
      }
      if (this.sliderLine) {
        __s54local0.push(this.sliderLine);
      }
      return __s54local0 = __s54local0.concat(this.visualElements);
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollVO;
}();
exports.SimpleScrollVO = __s0local0;
