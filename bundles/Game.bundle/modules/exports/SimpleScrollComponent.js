Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function SimpleScrollComponent(__s3param0, __s3param1) {
    this._currentPercentFactor = 0;
    this._currentValue = 0;
    this._minValue = 0;
    this._maxValue = 1;
    this._deltaStepsButtons = 1;
    this._deltaStepsMouseWheel = 1;
    this._isVisible = true;
    this._isEnabled = true;
    this._isDragging = false;
    this._triggerSignalOnlyOnValueChanged = false;
    this._triggerChangedSignalOnInitFlag = false;
    this._onScrollSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._disturbingElements = [];
    this._sliderClickOffset = 0;
    this._scrollVO = __s3param0;
    this._strategy = __s3param1;
    if (!__s3param0) {
      __dep_exact_9e901e8e2483a22f_1.error("No ScrollVO given.");
    }
    if (!__s3param1) {
      __dep_exact_9e901e8e2483a22f_1.error("No strategy assigned. The component needs a strategy to work.");
    }
    this.initButtons();
    __s3param1.assignScrollComponent(this);
    this._touchScrollHelper = new __dep_export_TouchScrollHelper.TouchScrollHelper();
  }
  SimpleScrollComponent.prototype.destroy = function () {
    if (this.scrollVO) {
      this.enableComponent(true);
      this.removeEventListener();
      this.removeAllDisturbingElements();
      this.strategy.destroy();
      this._scrollVO = null;
    }
  };
  SimpleScrollComponent.prototype.init = function (__s10param0, __s10param1, __s10param2 = 1, __s10param3 = 1, __s10param4 = true) {
    this._minValue = __dep_exact_f855840627e6e145.int(__s10param0);
    this._maxValue = __dep_exact_f855840627e6e145.int(__s10param1);
    this._deltaStepsButtons = __dep_exact_f855840627e6e145.int(__s10param2);
    this._deltaStepsMouseWheel = __dep_exact_f855840627e6e145.int(__s10param3);
    this._currentPercentFactor = 0;
    this._currentValue = this._minValue;
    this._triggerChangedSignalOnInitFlag = __s10param4;
    this.strategy.init();
  };
  SimpleScrollComponent.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.scrollVO.minusButton, this.scrollVO.plusButton, this.scrollVO.minButton, this.scrollVO.maxButton, this.scrollVO.sliderButton]);
  };
  SimpleScrollComponent.prototype.show = function () {
    this.removeEventListener();
    this.addEventListener();
    this.strategy.apply();
  };
  SimpleScrollComponent.prototype.hide = function () {
    this.removeEventListener();
  };
  SimpleScrollComponent.prototype.scrollToValue = function (__s18param0, __s18param1 = true) {
    var __s18local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s18param0, this.minValue, this.maxValue));
    var __s18local1 = __s18local0 != this._currentValue;
    var __s18local2 = (__s18local0 - this.minValue) / (this.maxValue - this.minValue);
    if (isNaN(__s18local2)) {
      __s18local2 = 0;
    }
    this._currentPercentFactor = __s18local2;
    this._currentValue = __s18local0;
    this.strategy.apply();
    if (__s18param1) {
      this.executeValueChangedCallback(__s18local1);
    }
  };
  SimpleScrollComponent.prototype.scrollToPercent = function (__s22param0, __s22param1 = true) {
    var __s22local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s22param0, 0, 1);
    var __s22local1 = Math.round(this.minValue + (this.maxValue - this.minValue) * __s22local0);
    var __s22local2 = __s22local1 != this._currentValue;
    this._currentValue = __s22local1;
    this._currentPercentFactor = (__s22local1 - this.minValue) / (this.maxValue - this.minValue);
    if (isNaN(this._currentPercentFactor)) {
      this._currentPercentFactor = 0;
    }
    this.strategy.apply();
    if (__s22param1) {
      this.executeValueChangedCallback(__s22local2);
    }
  };
  SimpleScrollComponent.prototype.executeValueChangedCallback = function (__s26param0) {
    if (!this._triggerSignalOnlyOnValueChanged || this._triggerSignalOnlyOnValueChanged && __s26param0 || this._triggerChangedSignalOnInitFlag) {
      this._triggerChangedSignalOnInitFlag = false;
      this.onScrollSignal.dispatch();
    }
  };
  SimpleScrollComponent.prototype.addEventListener = function () {
    if (this.scrollVO.minusButton) {
      this.scrollVO.minusButton.addEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.plusButton) {
      this.scrollVO.plusButton.addEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.minButton) {
      this.scrollVO.minButton.addEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.maxButton) {
      this.scrollVO.maxButton.addEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderLine.addEventListener(__s0local0.CLICK, this.bindFunction(this.onSliderLineClick));
      this.scrollVO.sliderButton.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderButtonDown));
    }
    if (this.scrollVO.stage) {
      this.scrollVO.stage.addEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      this.scrollVO.stage.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderButtonUp));
      this._touchScrollHelper.setup(this.scrollVO.stage);
    }
    if (this.scrollVO.mouseWheelElements) {
      for (var __s29local0 = 0; __s29local0 < this.scrollVO.mouseWheelElements.length; ++__s29local0) {
        if (this.scrollVO.mouseWheelElements[__s29local0]) {
          this.scrollVO.mouseWheelElements[__s29local0].addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
        }
        if (this.scrollVO.mouseWheelElements[__s29local0]) {
          this.scrollVO.mouseWheelElements[__s29local0].addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onPressMove));
        }
      }
    }
  };
  SimpleScrollComponent.prototype.removeEventListener = function () {
    if (this.scrollVO.minusButton) {
      this.scrollVO.minusButton.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.plusButton) {
      this.scrollVO.plusButton.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.minButton) {
      this.scrollVO.minButton.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.maxButton) {
      this.scrollVO.maxButton.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderLine.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onSliderLineClick));
      this.scrollVO.sliderButton.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onSliderButtonDown));
    }
    if (this.scrollVO.stage) {
      this.scrollVO.stage.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      this.scrollVO.stage.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onSliderButtonUp));
      this._touchScrollHelper.dispose();
    }
    if (this.scrollVO.mouseWheelElements) {
      for (var __s42local0 = 0; __s42local0 < this.scrollVO.mouseWheelElements.length; ++__s42local0) {
        var __s42local1 = this.scrollVO.mouseWheelElements[__s42local0];
        if (__s42local1) {
          __s42local1.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
        }
        if (__s42local1) {
          __s42local1.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onPressMove));
        }
      }
    }
  };
  SimpleScrollComponent.prototype.setStatus = function (__s55param0) {
    if (__s55param0) {
      __s55param0.visible = this.isVisible;
    }
  };
  SimpleScrollComponent.prototype.setVisibility = function (__s58param0) {
    this._isVisible = __s58param0;
    if (this.scrollVO) {
      this.setStatus(this.scrollVO.minusButton);
      this.setStatus(this.scrollVO.plusButton);
      this.setStatus(this.scrollVO.minButton);
      this.setStatus(this.scrollVO.maxButton);
      this.setStatus(this.scrollVO.sliderButton);
      this.setStatus(this.scrollVO.sliderLine);
      this.setStatus(this.scrollVO.sliderBackground);
      if (this.scrollVO.visualElements) {
        for (var __s58local0 = 0, __s58local1 = this.scrollVO.visualElements; __s58local0 < __s58local1.length; __s58local0++) {
          var __s58local2 = __s58local1[__s58local0];
          if (__s58local2 !== undefined) {
            this.setStatus(__s58local2);
          }
        }
      }
      if (this.isVisible) {
        this.strategy.apply();
      }
    }
  };
  SimpleScrollComponent.prototype.enableComponent = function (__s66param0) {
    this._isEnabled = __s66param0;
    if (this.isDragging) {
      this.onSliderButtonUp();
    }
    if (this.scrollVO) {
      if (this.scrollVO.minusButton) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.minusButton, this.isEnabled);
      }
      if (this.scrollVO.plusButton) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.plusButton, this.isEnabled);
      }
      if (this.scrollVO.minButton) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.minButton, this.isEnabled);
      }
      if (this.scrollVO.maxButton) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.maxButton, this.isEnabled);
      }
      if (this.scrollVO.sliderButton) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.scrollVO.sliderButton, this.isEnabled);
      }
      if (this.isEnabled) {
        this.strategy.apply();
      }
    }
  };
  SimpleScrollComponent.prototype.addDisturbingElement = function (__s76param0) {
    if (__s76param0) {
      var __s76local0 = new __dep_export_SimpleScrollDisturbingElement.SimpleScrollDisturbingElement(__s76param0);
      __s76local0.addEventListener();
      this._disturbingElements.push(__s76local0);
    }
  };
  SimpleScrollComponent.prototype.removeAllDisturbingElements = function () {
    for (var __s79local0 = 0; __s79local0 < this._disturbingElements.length; ++__s79local0) {
      this._disturbingElements[__s79local0].destroy();
    }
    this._disturbingElements = [];
  };
  Object.defineProperty(SimpleScrollComponent.prototype, "isAnyDisturbingElementHovered", {
    get: function () {
      for (var __s83local0 = 0; __s83local0 < this._disturbingElements.length; ++__s83local0) {
        if (this._disturbingElements[__s83local0].isHovered) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollComponent.prototype.onButtonClick = function (__s88param0) {
    function isButtonClicked(__s90param0) {
      return __s90param0 && __s88param0.target == __s90param0;
    }
    if (this.isEnabled && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s88param0.target)) {
      if (isButtonClicked(this.scrollVO.minusButton)) {
        this.scrollToValue(this.currentValue - this.deltaStepsButtons);
      } else if (isButtonClicked(this.scrollVO.plusButton)) {
        this.scrollToValue(this.currentValue + this.deltaStepsButtons);
      } else if (isButtonClicked(this.scrollVO.minButton)) {
        this.scrollToPercent(0);
      } else if (isButtonClicked(this.scrollVO.maxButton)) {
        this.scrollToPercent(1);
      }
    }
  };
  SimpleScrollComponent.prototype.onSliderLineClick = function (__s97param0) {
    if (this.isEnabled) {
      this.scrollToPercent(this.strategy.getPercentFactorOfMousePos());
    }
  };
  SimpleScrollComponent.prototype.onSliderButtonDown = function (__s100param0) {
    if (this.isEnabled) {
      this._isDragging = true;
      this._sliderClickOffset = this.strategy.isVertical ? __s100param0.localY : __s100param0.localX;
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  SimpleScrollComponent.prototype.onSliderButtonUp = function (__s103param0 = null) {
    if (this.isDragging) {
      this.scrollToPercent(this.currentPercentFactor);
    }
    this._isDragging = false;
    this._sliderClickOffset = 0;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
  };
  SimpleScrollComponent.prototype.onMouseMove = function (__s106param0) {
    if (this.isDragging) {
      this.scrollToPercent(this.strategy.getPercentFactorOfMousePos(this._sliderClickOffset));
    }
  };
  SimpleScrollComponent.prototype.onMouseWheel = function (__s109param0) {
    if (this.isEnabled) {
      if (!this.isAnyDisturbingElementHovered) {
        if (__s109param0.delta < 0) {
          this.scrollToValue(this.currentValue - this.deltaStepsMouseWheel);
        } else if (__s109param0.delta > 0) {
          this.scrollToValue(this.currentValue + this.deltaStepsMouseWheel);
        }
        __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
      }
    }
  };
  SimpleScrollComponent.prototype.onPressMove = function (__s115param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s115param0) && this.isEnabled) {
      if (!this.isDragging && !this.isAnyDisturbingElementHovered) {
        if (this._touchScrollHelper.valid) {
          this.scrollToValue(this.currentValue - this.strategy.getScorllDiffValueFromContentTouchMove(this._touchScrollHelper.touchStageRefPoint, new __s0local1(__s115param0.stageX, __s115param0.stageY), __s115param0.target, this._deltaStepsMouseWheel));
        }
      }
    }
  };
  Object.defineProperty(SimpleScrollComponent.prototype, "scrollVO", {
    get: function () {
      return this._scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "currentPercentFactor", {
    get: function () {
      return this._currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "currentValue", {
    get: function () {
      return this._currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "deltaStepsMouseWheel", {
    get: function () {
      return this._deltaStepsMouseWheel;
    },
    set: function (__s132param0) {
      this._deltaStepsMouseWheel = __s132param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "strategy", {
    get: function () {
      return this._strategy;
    },
    set: function (__s136param0) {
      this._strategy = __s136param0;
      this.strategy.assignScrollComponent(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "isDragging", {
    get: function () {
      return this._isDragging;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "onScrollSignal", {
    get: function () {
      return this._onScrollSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "deltaStepsButtons", {
    get: function () {
      return this._deltaStepsButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "triggerSignalOnlyOnValueChanged", {
    get: function () {
      return this._triggerSignalOnlyOnValueChanged;
    },
    set: function (__s150param0) {
      this._triggerSignalOnlyOnValueChanged = __s150param0;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollComponent.prototype.setScrollBounds = function (__s152param0, __s152param1) {
    this._minValue = __s152param0;
    this._maxValue = __s152param1;
    this.scrollToValue(this.currentValue);
  };
  return SimpleScrollComponent;
}();
exports.SimpleScrollComponent = __s0local2;
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_SimpleScrollDisturbingElement = require("gge-module:export_SimpleScrollDisturbingElement");
var __dep_export_TouchScrollHelper = require("gge-module:export_TouchScrollHelper");
