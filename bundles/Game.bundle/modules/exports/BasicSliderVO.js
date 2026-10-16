Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function BasicSliderVO(__s3param0, __s3param1, __s3param2, __s3param3 = 0, __s3param4 = null) {
    this._minValue = 0;
    this._maxValue = 0;
    this._sliderBar = __s3param0;
    this._sliderButton = __s3param1;
    this._sliderButton.actLikeButton = true;
    this._sliderButton.mouseChildren = false;
    this._parent = __s3param4 || __s3param0.parent;
    this._minValue = __s3param3;
    this._maxValue = __s3param2;
  }
  Object.defineProperty(BasicSliderVO.prototype, "sliderBar", {
    get: function () {
      return this._sliderBar;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "sliderButton", {
    get: function () {
      return this._sliderButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "parent", {
    get: function () {
      return this._parent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    set: function (__s13param0) {
      this._minValue = __s13param0;
      this.sendNotification();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    set: function (__s17param0) {
      if (__s17param0 < this._minValue) {
        this._maxValue = this._minValue;
      } else {
        this._maxValue = __s17param0;
      }
      this.sendNotification();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "changeCallback", {
    set: function (__s21param0) {
      this._changeCallback = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicSliderVO.prototype.sendNotification = function () {
    if (this._changeCallback) {
      this._changeCallback();
    }
  };
  Object.defineProperty(BasicSliderVO.prototype, "numOfElements", {
    get: function () {
      return this._maxValue - this._minValue;
    },
    set: function (__s28param0) {
      this.maxValue = __s28param0 + this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSliderVO;
}();
exports.BasicSliderVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISliderBarVO");
