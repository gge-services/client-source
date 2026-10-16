Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function MultiSliderButton(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = __s3param0;
    __s3local0._disp.actLikeButton = true;
    __s3local0._disp.mouseChildren = false;
    __s3local0.addChild(__s3local0._disp);
    __s3local0._slider = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MultiSliderButton, __s1param0);
  Object.defineProperty(MultiSliderButton.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "selectedValue", {
    set: function (__s7param0) {
      if (__s7param0 < 0) {
        __s7param0 = 0;
      } else if (__s7param0 > 100) {
        __s7param0 = 100;
      }
      this.buttonPosition = __dep_exact_f855840627e6e145.int(__s7param0 / 100 * this._slider.oneHundredPercentInPixel + this._slider.sliderButtonWidth / 2 + this.id * this._slider.sliderButtonWidth);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "borderLeft", {
    get: function () {
      if (this.id == 0) {
        return this._slider.borderLeft;
      } else {
        return this._slider.buttons[this.id - 1].buttonRight + this._slider.sliderButtonWidth / 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "borderRight", {
    get: function () {
      if (this.id == this._slider.sliderAmount - 1) {
        return this._slider.borderRight;
      } else {
        return this._slider.buttons[this.id + 1].buttonLeft - this._slider.sliderButtonWidth / 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "buttonLeft", {
    get: function () {
      return this.x - this._slider.sliderButtonWidth / 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "buttonRight", {
    get: function () {
      return this.x + this._slider.sliderButtonWidth / 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MultiSliderButton.prototype, "buttonPosition", {
    get: function () {
      return this.x;
    },
    set: function (__s25param0) {
      if (__s25param0 > this._slider.borderRight) {
        __s25param0 = this._slider.borderRight;
      } else if (__s25param0 < this._slider.borderLeft) {
        __s25param0 = this._slider.borderLeft;
      }
      this.x = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  MultiSliderButton.prototype.movePosition = function (__s29param0) {
    if (__s29param0 > this.borderRight) {
      __s29param0 = this.borderRight;
    } else if (__s29param0 < this.borderLeft) {
      __s29param0 = this.borderLeft;
    }
    this.x = __s29param0;
  };
  return MultiSliderButton;
}(require("gge-module:export_CastleMovieClip").CastleMovieClip);
exports.MultiSliderButton = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
