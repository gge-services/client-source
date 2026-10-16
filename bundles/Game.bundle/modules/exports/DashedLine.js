Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.BitmapData;
var __s0local1 = function (__s1param0) {
  function DashedLine(__s3param0, __s3param1 = 0, __s3param2 = 0, __s3param3 = 1, __s3param4 = 1) {
    var __s3local0 = this;
    __s3local0._length = 0;
    __s3local0._weight = 0;
    __s3local0._color = 0;
    __s3local0._dashLength = 0;
    __s3local0._gapLength = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._length = __s3param0;
    __s3local0._weight = __s3param1;
    __s3local0._color = __s3param2;
    __s3local0._dashLength = __s3param3;
    __s3local0._gapLength = __s3param4;
    __s3local0.createDashStyle();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DashedLine, __s1param0);
  DashedLine.prototype.createDashStyle = function () {
    this._bitmapData = new __s0local0(this._dashLength + this._gapLength, 1, true, 0);
    this._bitmapData.lock();
    var __s5local0 = 0;
    for (__s5local0 = 0; __s5local0 < this._dashLength; __s5local0++) {
      this._bitmapData.setPixel32(__s5local0, 0, this._color | -16777216);
    }
    this.drawLine();
  };
  DashedLine.prototype.drawLine = function () {
    this.graphics.clear();
    this.graphics.lineStyle(this._weight, 0, 1, true, "normal", "none");
    this.graphics.lineBitmapStyle(this._bitmapData, null, true, true);
    this.graphics.moveTo(0, 0);
    this.graphics.lineTo(this._length, 0);
  };
  Object.defineProperty(DashedLine.prototype, "length", {
    get: function () {
      return this._length;
    },
    set: function (__s13param0) {
      this._length = __s13param0;
      this.drawLine();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "weight", {
    get: function () {
      return this._weight;
    },
    set: function (__s17param0) {
      this._weight = __s17param0;
      this.drawLine();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "color", {
    get: function () {
      return this._color;
    },
    set: function (__s21param0) {
      this._color = __s21param0;
      this.createDashStyle();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "dashLength", {
    get: function () {
      return this._dashLength;
    },
    set: function (__s25param0) {
      this._dashLength = __s25param0;
      this.createDashStyle();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DashedLine.prototype, "gapLength", {
    get: function () {
      return this._gapLength;
    },
    set: function (__s29param0) {
      this._gapLength = __s29param0;
      this.createDashStyle();
    },
    enumerable: true,
    configurable: true
  });
  return DashedLine;
}(createjs.Shape);
exports.DashedLine = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "Shape");
