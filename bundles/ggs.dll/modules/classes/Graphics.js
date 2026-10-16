Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_743b3fcf7d9e7aea = require("gge-module:exact_743b3fcf7d9e7aea");
exports.convertHexToRgba = __dep_exact_743b3fcf7d9e7aea.convertHexToRgba;
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
createjs.Graphics.prototype.p = createjs.Graphics.prototype.decodePath = function (__s1param0, __s1param1, __s1param2) {
  __s1param1 ||= 0;
  __s1param2 ||= 0;
  var __s1local0 = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
  var __s1local1 = [2, 2, 4, 6, 0];
  for (var __s1local2 = 0, __s1local3 = __s1param0.length, __s1local4 = [], __s1local5 = 0, __s1local6 = 0, __s1local7 = createjs.Graphics.BASE_64; __s1local2 < __s1local3;) {
    var __s1local8 = __s1param0.charAt(__s1local2);
    var __s1local9 = __s1local7[__s1local8];
    var __s1local10 = __s1local9 >> 3;
    var __s1local11 = __s1local0[__s1local10];
    if (!__s1local11 || __s1local9 & 3) {
      throw "bad path data (@" + __s1local2 + "): " + __s1local8;
    }
    var __s1local12 = __s1local1[__s1local10];
    if (!__s1local10) {
      __s1local5 = __s1local6 = 0;
    }
    __s1local4.length = 0;
    __s1local2++;
    var __s1local13 = 2 + (__s1local9 >> 2 & 1);
    for (var __s1local14 = 0; __s1local14 < __s1local12; __s1local14++) {
      var __s1local15 = __s1local7[__s1param0.charAt(__s1local2)];
      var __s1local16 = __s1local15 >> 5 ? -1 : 1;
      __s1local15 = (__s1local15 & 31) << 6 | __s1local7[__s1param0.charAt(__s1local2 + 1)];
      if (__s1local13 == 3) {
        __s1local15 = __s1local15 << 6 | __s1local7[__s1param0.charAt(__s1local2 + 2)];
      }
      __s1local15 = __s1local16 * __s1local15 / 10;
      if (__s1local14 % 2) {
        __s1local6 = __s1local15 += __s1local6;
        __s1local4[__s1local14] = __s1local6 + __s1param2;
      } else {
        __s1local5 = __s1local15 += __s1local5;
        __s1local4[__s1local14] = __s1local5 + __s1param1;
      }
      __s1local2 += __s1local13;
    }
    __s1local11.apply(this, __s1local4);
  }
  return this;
};
createjs.Graphics.prototype.lineStyle = function (__s12param0 = NaN, __s12param1 = 0, __s12param2) {
  var __s12local0 = __dep_exact_743b3fcf7d9e7aea.convertHexToRgba(__s12param1, __s12param2);
  this.setStrokeStyle(__s12param0);
  this.beginStroke(__s12local0);
  return this;
};
var __s0local1 = createjs.Graphics.prototype.beginFill;
createjs.Graphics.prototype.beginFill = function (__s14param0, __s14param1) {
  if (__s14param0 != null) {
    __s14param0 = __dep_exact_743b3fcf7d9e7aea.convertHexToRgba(__s14param0, __s14param1);
  }
  __s0local1.apply(this, [__s14param0]);
  return this;
};
createjs.Graphics.prototype.beginGradientFill = function (__s17param0, __s17param1, __s17param2, __s17param3, __s17param4 = null, __s17param5 = "pad", __s17param6 = "rgb", __s17param7 = 0) {
  for (var __s17local0 = 0; __s17local0 < __s17param3.length; __s17local0++) {
    if (__s17param3[__s17local0] > 1) {
      __s17param3[__s17local0] = __s17param3[__s17local0] / 255;
    }
    if (__s17param2[__s17local0] > 1) {
      __s17param2[__s17local0] = __s17param2[__s17local0] / 255;
    }
  }
  var __s17local1 = __s17param1.map(function (__s23param0) {
    return __dep_exact_743b3fcf7d9e7aea.convertHexToRgba(__s23param0);
  });
  if (__s17param4) {
    var __s17local2 = __s17param4 != null ? __s17param4.clone() : new createjs.Matrix2D();
    if (__s17param0 === "radial") {
      var __s17local3 = __s17param4.transformPoint(1638.4, 0);
      this.beginRadialGradientFill(__s17local1, __s17param3, __s17local2.tx, __s17local2.ty, 0, __s17local2.tx, __s17local2.ty, (__s17local3.x - __s17local2.tx) / 2);
    } else {
      __s17local2.tx -= __s17param4.a * 1638.4 / 2;
      __s17local2.ty -= __s17param4.d * 1638.4 / 2;
      var __s17local4 = __s17local2.transformPoint(0, 0);
      var __s17local5 = __s17local2.transformPoint(1638.4, 0);
      this.beginLinearGradientFill(__s17local1, __s17param3, __s17local4.x, __s17local4.y, __s17local5.x, __s17local5.y);
    }
  }
};
var __s0local2 = createjs.Graphics.prototype.beginBitmapFill;
createjs.Graphics.prototype.beginBitmapFill = function (__s28param0, __s28param1, __s28param2) {
  if (__s28param0 instanceof createjs.Bitmap) {
    __s28param0 = __s28param0.bitmapData.canvas;
  }
  if (__s28param0 instanceof createjs.BitmapData) {
    __s28param0 = __s28param0.canvas;
  }
  return __s0local2.apply(this, [__s28param0, __s28param1, __s28param2]);
};
createjs.Graphics.prototype.lineBitmapStyle = function (__s32param0, __s32param1 = null, __s32param2 = true, __s32param3 = false) {
  __s0local0.warn("Graphics.lineBitmapStyle - is mocked method");
};
createjs.Graphics.prototype.copyFrom = function (__s34param0) {
  __s0local0.warn("Please use graphics = Object.create(sourceGraphics); instead of copyFrom()");
};
var __s0local3 = createjs.Graphics.prototype.drawRect;
createjs.Graphics.prototype.r = createjs.Graphics.prototype.drawRect = function (__s36param0, __s36param1, __s36param2, __s36param3) {
  this._updateBounds(__s36param0, __s36param1, __s36param2, __s36param3);
  return __s0local3.apply(this, [__s36param0, __s36param1, __s36param2, __s36param3]);
};
var __s0local4 = createjs.Graphics.prototype.drawRoundRect;
createjs.Graphics.prototype.rr = createjs.Graphics.prototype.drawRoundRect = function (__s38param0, __s38param1, __s38param2, __s38param3, __s38param4) {
  this._updateBounds(__s38param0, __s38param1, __s38param2, __s38param3);
  return __s0local4.apply(this, [__s38param0, __s38param1, __s38param2, __s38param3, __s38param4]);
};
var __s0local5 = createjs.Graphics.prototype.lineTo;
createjs.Graphics.prototype.lt = createjs.Graphics.prototype.lineTo = function (__s40param0, __s40param1) {
  this.bounds.left = Math.min(this.bounds.left, __s40param0);
  this.bounds.right = Math.max(this.bounds.right, __s40param0);
  this.bounds.top = Math.min(this.bounds.top, __s40param1, __s40param1);
  this.bounds.bottom = Math.max(this.bounds.bottom, __s40param1);
  return __s0local5.apply(this, [__s40param0, __s40param1]);
};
createjs.Graphics.prototype._updateBounds = function (__s42param0, __s42param1, __s42param2, __s42param3) {
  if (this._instructions.length || this._activeInstructions.length) {
    this.bounds.x = Math.min(this.bounds.x, __s42param0);
    this.bounds.width = Math.max(this.bounds.width, __s42param2);
    this.bounds.y = Math.min(this.bounds.y, __s42param1);
    this.bounds.height = Math.max(this.bounds.height, __s42param3);
  } else {
    this.bounds.x = __s42param0;
    this.bounds.width = __s42param2;
    this.bounds.y = __s42param1;
    this.bounds.height = __s42param3;
  }
};
Object.defineProperty(createjs.Graphics.prototype, "bounds", {
  get: function () {
    this._bounds ||= new createjs.Rectangle();
    return this._bounds;
  },
  set: function (__s48param0) {
    this._bounds = __s48param0;
  },
  enumerable: true,
  configurable: true
});
