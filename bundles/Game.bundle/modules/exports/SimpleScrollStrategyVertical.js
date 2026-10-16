Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function () {
  function SimpleScrollStrategyVertical(__s3param0 = false, __s3param1 = false) {
    this._disableButtons = false;
    this._invisibleWhenNotScrollable = false;
    this._refDispHeight = 0;
    this._disableButtons = __s3param0;
    this._invisibleWhenNotScrollable = __s3param1;
  }
  SimpleScrollStrategyVertical.prototype.init = function () {};
  SimpleScrollStrategyVertical.prototype.destroy = function () {
    this._scrollComponent = null;
  };
  SimpleScrollStrategyVertical.prototype.apply = function () {
    var __s9local0 = this._scrollComponent.maxValue == this._scrollComponent.currentValue && this._scrollComponent.currentValue == this._scrollComponent.minValue;
    this._refDispHeight = 0;
    if (this._scrollComponent.isEnabled && this._scrollComponent.isVisible) {
      var __s9local1 = this.percentFactor < 1 && this._scrollComponent.maxValue > 0;
      if (this._disableButtons) {
        if (this.scrollVO.minusButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.minusButton, !__s9local0 && this.percentFactor > 0);
        }
        if (this.scrollVO.plusButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.plusButton, !__s9local0 && __s9local1);
        }
        if (this.scrollVO.minButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.minButton, !__s9local0 && this.percentFactor > 0);
        }
        if (this.scrollVO.maxButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.maxButton, !__s9local0 && __s9local1);
        }
        if (this.scrollVO.sliderButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.sliderButton, !__s9local0);
        }
        if (this._invisibleWhenNotScrollable) {
          if (this.scrollVO.minusButton) {
            this.scrollVO.minusButton.visible = !__s9local0;
          }
          if (this.scrollVO.plusButton) {
            this.scrollVO.plusButton.visible = !__s9local0;
          }
          if (this.scrollVO.minButton) {
            this.scrollVO.minButton.visible = !__s9local0;
          }
          if (this.scrollVO.maxButton) {
            this.scrollVO.maxButton.visible = !__s9local0;
          }
          if (this.scrollVO.sliderButton) {
            this.scrollVO.sliderButton.visible = !__s9local0;
          }
          if (this.scrollVO.sliderLine) {
            this.scrollVO.sliderLine.visible = !__s9local0;
          }
          if (this.scrollVO.sliderBackground) {
            this.scrollVO.sliderBackground.visible = !__s9local0;
          }
        }
      } else {
        if (this.scrollVO.minusButton) {
          this.scrollVO.minusButton.visible = !__s9local0 && this.percentFactor > 0;
        }
        if (this.scrollVO.plusButton) {
          this.scrollVO.plusButton.visible = !__s9local0 && __s9local1;
        }
        if (this.scrollVO.minButton) {
          this.scrollVO.minButton.visible = !__s9local0 && this.percentFactor > 0;
        }
        if (this.scrollVO.maxButton) {
          this.scrollVO.maxButton.visible = !__s9local0 && __s9local1;
        }
        if (this.scrollVO.sliderButton) {
          this.scrollVO.sliderButton.visible = !__s9local0;
        }
        if (this.scrollVO.sliderLine) {
          this.scrollVO.sliderLine.visible = !__s9local0;
        }
        if (this.scrollVO.sliderBackground) {
          this.scrollVO.sliderBackground.visible = !__s9local0;
        }
      }
    }
    this.placeSliderButton();
  };
  SimpleScrollStrategyVertical.prototype.getScorllDiffValueFromContentTouchMove = function (__s34param0, __s34param1, __s34param2, __s34param3) {
    if (this._refDispHeight === 0) {
      this._refDispHeight = __s34param2.height;
    }
    if (this._refDispHeight > __s34param3) {
      this._refDispHeight = __s34param3;
    }
    return (__s34param1.y - __s34param0.y) * __s34param3 / (this._refDispHeight * 2);
  };
  SimpleScrollStrategyVertical.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderButton.y = this.getLineStartPos() + this.getLineLength() * this.percentFactor;
    }
  };
  SimpleScrollStrategyVertical.prototype.getPercentFactorOfMousePos = function (__s41param0 = 0) {
    var __s41local0 = (castAs(this.scrollVO.sliderLine, "Container").mouseY - __s41param0) / this.getLineLength();
    return __s41local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s41local0, 0, 1);
  };
  SimpleScrollStrategyVertical.prototype.getLineStartPos = function () {
    var __s43local0 = this.scrollVO.sliderLine.getBounds(null);
    var __s43local1 = this.scrollVO.sliderLine.localToGlobal(__s43local0.topLeft);
    return this.scrollVO.sliderButton.parent.globalToLocal(__s43local1).y;
  };
  SimpleScrollStrategyVertical.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.getBounds(null).height;
  };
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "percentFactor", {
    get: function () {
      return this._scrollComponent.currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "scrollVO", {
    get: function () {
      return this._scrollComponent.scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollStrategyVertical.prototype.assignScrollComponent = function (__s51param0) {
    this._scrollComponent = __s51param0;
  };
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "disableButtons", {
    get: function () {
      return this._disableButtons;
    },
    set: function (__s55param0) {
      this._disableButtons = __s55param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollStrategyVertical.prototype, "isVertical", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollStrategyVertical;
}();
exports.SimpleScrollStrategyVertical = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleScrollStrategy");
