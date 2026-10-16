Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleSliderValueComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = "", __s3param5 = 0) {
    var __s3local0 = this;
    __s3local0._barOffset = 0;
    __s3local0._barSize = 0;
    __s3local0.sliding = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this)._slider = __s3param3.slider;
    __s3local0._slider.actLikeButton = true;
    __s3local0._bar = __s3param3.slideBar;
    __s3local0._bar.actLikeButton = true;
    if (__s3param3.slideBar.otherBar) {
      __s3param3.slideBar.otherBar.actLikeButton = true;
    }
    __s3local0._barOffset = __s3param5;
    __s3local0._barSize = __dep_exact_f855840627e6e145.int(__s3local0._bar.width - __s3local0._barOffset * 2);
    __s3local0._slider.addEventListener(__s0local0.MOUSE_DOWN, __s3local0.bindFunction(__s3local0.mouseDown));
    __s3local0._slider.stage.addEventListener(__s0local0.MOUSE_MOVE, __s3local0.bindFunction(__s3local0.mouseMove));
    __s3local0._slider.stage.addEventListener(__s0local0.MOUSE_UP, __s3local0.bindFunction(__s3local0.mouseUp));
    __s3local0._bar.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClickSlider));
    __s3local0._slider.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(__s3param4);
    __s3local0.isDisposed = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSliderValueComponent, __s1param0);
  CastleSliderValueComponent.prototype.mouseUp = function (__s6param0) {
    this.sliding = false;
  };
  CastleSliderValueComponent.prototype.onClickSlider = function (__s8param0) {
    var __s8local0 = __dep_exact_f855840627e6e145.int(this._bar.x + __s8param0.localX);
    if (__s8local0 > 0 && __s8local0 < this._barSize) {
      this.setSlider(__s8local0);
    }
  };
  CastleSliderValueComponent.prototype.setSlider = function (__s11param0) {
    var __s11local0;
    var __s11local1 = __s11param0;
    if ((__s11local0 = Math.round(this.minValue + (__s11local1 - this._barOffset - this._bar.x) / this._barSize * (this.maxValue - this.minValue))) != this.value) {
      this.dispatchUpdateByUserSignal(__s11local0);
      this.updateValue(__s11local0);
    }
  };
  CastleSliderValueComponent.prototype.mouseMove = function (__s14param0) {
    if (this.sliding) {
      var __s14local0 = __dep_exact_f855840627e6e145.int(this._slider.x);
      var __s14local1 = false;
      var __s14local2 = 0;
      if (this._bar.mouseX < this._barOffset + CastleSliderValueComponent.SNAPPING_OFFSET_IN_PIXEL) {
        __s14local2 = __dep_exact_f855840627e6e145.int(this.minValue);
        __s14local1 = true;
      } else if (this._bar.mouseX > this._barSize + this._bar.x - +CastleSliderValueComponent.SNAPPING_OFFSET_IN_PIXEL) {
        __s14local2 = __dep_exact_f855840627e6e145.int(this.maxValue);
        __s14local1 = true;
      } else {
        __s14local0 = __dep_exact_f855840627e6e145.int(this._bar.mouseX + this._barOffset);
      }
      if (!__s14local1) {
        __s14local2 = Math.round(this.minValue + (__s14local0 - this._barOffset - this._bar.x) / this._barSize * (this.maxValue - this.minValue));
      }
      if (__s14local2 != this.value) {
        this.dispatchUpdateByUserSignal(__s14local2);
      }
    }
  };
  CastleSliderValueComponent.prototype.mouseDown = function (__s22param0) {
    this.sliding = true;
  };
  CastleSliderValueComponent.prototype.updateValue = function (__s24param0) {
    __s1param0.prototype.updateValue.call(this, __s24param0);
    var __s24local0 = (__s24param0 - this.minValue) / (this.maxValue - this.minValue);
    if (this._bar.fillBar) {
      this._bar.fillBar.width = __s24local0 * this._barSize + this._barOffset;
    }
    this._slider.x = __s24local0 * this._barSize + this._bar.x + this._barOffset;
  };
  CastleSliderValueComponent.prototype.dispose = function () {
    if (!this.isDisposed) {
      this._slider.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.mouseDown));
      this._slider.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.mouseMove));
      this._slider.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.mouseUp));
      this._bar.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickSlider));
    }
    __s1param0.prototype.dispose.call(this);
  };
  CastleSliderValueComponent.__initialize_static_members = function () {
    CastleSliderValueComponent.SNAPPING_OFFSET_IN_PIXEL = 0;
  };
  return CastleSliderValueComponent;
}(__dep_exact_9e901e8e2483a22f.AValueComponent);
exports.CastleSliderValueComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IValueComponent");
__s0local1.__initialize_static_members();
