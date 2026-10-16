Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function () {
  function SimpleScrollStrategyHorizontal(__s3param0 = false) {
    this._disableButtons = false;
    this._refDispWidth = 0;
    this._disableButtons = __s3param0;
  }
  SimpleScrollStrategyHorizontal.prototype.init = function () {};
  SimpleScrollStrategyHorizontal.prototype.destroy = function () {
    this._scrollComponent = null;
  };
  SimpleScrollStrategyHorizontal.prototype.apply = function () {
    this.placeSliderButton();
    this._refDispWidth = 0;
    if (this._scrollComponent.isEnabled && this._scrollComponent.isVisible) {
      var __s9local0 = this.percentFactor < 1 && this._scrollComponent.maxValue > 0;
      if (this._disableButtons) {
        if (this.scrollVO.minusButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.minusButton, this.percentFactor > 0);
        }
        if (this.scrollVO.plusButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.plusButton, __s9local0);
        }
        if (this.scrollVO.minButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.minButton, this.percentFactor > 0);
        }
        if (this.scrollVO.maxButton) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.maxButton, __s9local0);
        }
      } else {
        if (this.scrollVO.minusButton) {
          this.scrollVO.minusButton.visible = this.percentFactor > 0;
        }
        if (this.scrollVO.plusButton) {
          this.scrollVO.plusButton.visible = __s9local0;
        }
        if (this.scrollVO.minButton) {
          this.scrollVO.minButton.visible = this.percentFactor > 0;
        }
        if (this.scrollVO.maxButton) {
          this.scrollVO.maxButton.visible = __s9local0;
        }
      }
    }
  };
  SimpleScrollStrategyHorizontal.prototype.placeSliderButton = function () {
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderButton.x = this.getLineStartPos() + this.getLineLength() * this.percentFactor;
    }
  };
  SimpleScrollStrategyHorizontal.prototype.getScorllDiffValueFromContentTouchMove = function (__s25param0, __s25param1, __s25param2, __s25param3) {
    if (this._refDispWidth === 0) {
      this._refDispWidth = __s25param2.width;
    }
    if (this._refDispWidth > __s25param3) {
      this._refDispWidth = __s25param3;
    }
    return (__s25param1.x - __s25param0.x) * __s25param3 / (this._refDispWidth * 2);
  };
  SimpleScrollStrategyHorizontal.prototype.getPercentFactorOfMousePos = function (__s29param0 = 0) {
    var __s29local0 = (this.scrollVO.sliderLine.mouseX - __s29param0) / this.getLineLength();
    return __s29local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s29local0, 0, 1);
  };
  SimpleScrollStrategyHorizontal.prototype.getLineStartPos = function () {
    var __s31local0 = this.scrollVO.sliderLine.getBounds(null);
    var __s31local1 = this.scrollVO.sliderLine.localToGlobal(__s31local0.topLeft);
    return this.scrollVO.sliderButton.parent.globalToLocal(__s31local1).x;
  };
  SimpleScrollStrategyHorizontal.prototype.getLineLength = function () {
    return this.scrollVO.sliderLine.getBounds(null).width;
  };
  Object.defineProperty(SimpleScrollStrategyHorizontal.prototype, "percentFactor", {
    get: function () {
      return this._scrollComponent.currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollStrategyHorizontal.prototype, "scrollVO", {
    get: function () {
      return this._scrollComponent.scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollStrategyHorizontal.prototype.assignScrollComponent = function (__s39param0) {
    this._scrollComponent = __s39param0;
  };
  Object.defineProperty(SimpleScrollStrategyHorizontal.prototype, "isVertical", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollStrategyHorizontal;
}();
exports.SimpleScrollStrategyHorizontal = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleScrollStrategy");
