Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SimpleProgressBarComponent(__s3param0, __s3param1, __s3param2 = 0) {
    this._fullWidth = 1;
    this._minWidth = 0;
    this._currentWidth = 0;
    this._currentPercentFactor = 0;
    this._disp = __s3param0;
    this._fullWidth = __s3param1;
    this._minWidth = __s3param2;
    __s3param0.mouseChildren = false;
    this._fillMc = __s3param0.mc_fill;
  }
  SimpleProgressBarComponent.prototype.setProgressByValue = function (__s5param0) {
    this._currentWidth = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s5param0, this._minWidth, this._fullWidth);
    this._currentPercentFactor = this._currentWidth / this._fullWidth;
    this.update();
  };
  SimpleProgressBarComponent.prototype.setProgressByPercent = function (__s7param0) {
    this._currentPercentFactor = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s7param0, 0, 1);
    this._currentWidth = this._fullWidth * this._currentPercentFactor;
    this.update();
  };
  SimpleProgressBarComponent.prototype.update = function () {
    this.fillMc.width = this._currentWidth;
  };
  Object.defineProperty(SimpleProgressBarComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "fullWidth", {
    get: function () {
      return this._fullWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "currentWidth", {
    get: function () {
      return this._currentWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "currentPercentFactor", {
    get: function () {
      return this._currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "fillMc", {
    get: function () {
      return this._fillMc;
    },
    set: function (__s21param0) {
      this._fillMc = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "minWidth", {
    get: function () {
      return this._minWidth;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleProgressBarComponent;
}();
exports.SimpleProgressBarComponent = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
