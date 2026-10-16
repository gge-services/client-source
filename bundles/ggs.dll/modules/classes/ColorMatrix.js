Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.ColorMatrixFilter;
var __s0local1 = createjs.ColorTransform;
var __s0local2 = function () {
  function ColorMatrix(__s3param0 = null) {
    if (__s3param0 instanceof ColorMatrix) {
      this.matrix = __s3param0.matrix.concat();
    } else if (__s3param0 instanceof Array) {
      this.matrix = __s3param0.concat();
    } else {
      this.reset();
    }
  }
  ColorMatrix.prototype.reset = function () {
    this.matrix = ColorMatrix.IDENTITY.concat();
  };
  ColorMatrix.prototype.clone = function () {
    return new ColorMatrix(this.matrix);
  };
  ColorMatrix.prototype.adjustSaturation = function (__s12param0) {
    var __s12local0 = 1 - __s12param0;
    var __s12local1 = __s12local0 * ColorMatrix.r_lum;
    var __s12local2 = __s12local0 * ColorMatrix.g_lum;
    var __s12local3 = __s12local0 * ColorMatrix.b_lum;
    var __s12local4 = [__s12local1 + __s12param0, __s12local2, __s12local3, 0, 0, __s12local1, __s12local2 + __s12param0, __s12local3, 0, 0, __s12local1, __s12local2, __s12local3 + __s12param0, 0, 0, 0, 0, 0, 1, 0];
    this.concat(__s12local4);
  };
  ColorMatrix.prototype.adjustContrast = function (__s14param0, __s14param1, __s14param2) {
    __s14param1 = __s14param1 || __s14param0;
    __s14param2 = __s14param2 || __s14param0;
    var __s14local0 = [__s14param0 += 1, 0, 0, 0, (1 - __s14param0) * 128, 0, __s14param1 += 1, 0, 0, (1 - __s14param1) * 128, 0, 0, __s14param2 += 1, 0, (1 - __s14param2) * 128, 0, 0, 0, 1, 0];
    this.concat(__s14local0);
  };
  ColorMatrix.prototype.adjustBrightness = function (__s16param0, __s16param1, __s16param2) {
    var __s16local0 = [1, 0, 0, 0, __s16param0, 0, 1, 0, 0, __s16param1 = __s16param1 || __s16param0, 0, 0, 1, 0, __s16param2 = __s16param2 || __s16param0, 0, 0, 0, 1, 0];
    this.concat(__s16local0);
  };
  ColorMatrix.prototype.adjustHue = function (__s18param0) {
    __s18param0 *= Math.PI / 180;
    var __s18local0 = Math.cos(__s18param0);
    var __s18local1 = Math.sin(__s18param0);
    var __s18local2 = 0.213;
    var __s18local3 = 0.715;
    var __s18local4 = 0.072;
    var __s18local5 = [__s18local2 + __s18local0 * 0.787 + __s18local1 * -__s18local2, __s18local3 + __s18local0 * -__s18local3 + __s18local1 * -__s18local3, __s18local4 + __s18local0 * -__s18local4 + __s18local1 * 0.928, 0, 0, __s18local2 + __s18local0 * -__s18local2 + __s18local1 * 0.143, __s18local3 + __s18local0 * (1 - __s18local3) + __s18local1 * 0.14, __s18local4 + __s18local0 * -__s18local4 + __s18local1 * -0.283, 0, 0, __s18local2 + __s18local0 * -__s18local2 + __s18local1 * -0.787, __s18local3 + __s18local0 * -__s18local3 + __s18local1 * __s18local3, __s18local4 + __s18local0 * 0.928 + __s18local1 * __s18local4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
    this.concat(__s18local5);
  };
  ColorMatrix.prototype.colorize = function (__s20param0, __s20param1) {
    var __s20local0 = (__s20param0 >> 16 & 255) / 255;
    var __s20local1 = (__s20param0 >> 8 & 255) / 255;
    var __s20local2 = (__s20param0 & 255) / 255;
    var __s20local3 = 1 - __s20param1;
    var __s20local4 = [__s20local3 + __s20param1 * __s20local0 * ColorMatrix.r_lum, __s20param1 * __s20local0 * ColorMatrix.g_lum, __s20param1 * __s20local0 * ColorMatrix.b_lum, 0, 0, __s20param1 * __s20local1 * ColorMatrix.r_lum, __s20local3 + __s20param1 * __s20local1 * ColorMatrix.g_lum, __s20param1 * __s20local1 * ColorMatrix.b_lum, 0, 0, __s20param1 * __s20local2 * ColorMatrix.r_lum, __s20param1 * __s20local2 * ColorMatrix.g_lum, __s20local3 + __s20param1 * __s20local2 * ColorMatrix.b_lum, 0, 0, 0, 0, 0, 1, 0];
    this.concat(__s20local4);
  };
  ColorMatrix.prototype.fill = function (__s22param0) {
    var __s22local0 = [0, 0, 0, 0, __s22param0 >> 16 & 255, 0, 0, 0, 0, __s22param0 >> 8 & 255, 0, 0, 0, 0, __s22param0 & 255, 0, 0, 0, 1, 0];
    this.concat(__s22local0);
  };
  ColorMatrix.prototype.setAlpha = function (__s24param0) {
    var __s24local0 = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, __s24param0, 0];
    this.concat(__s24local0);
  };
  ColorMatrix.prototype.desaturate = function () {
    var __s26local0 = [ColorMatrix.r_lum, ColorMatrix.g_lum, ColorMatrix.b_lum, 0, 0, ColorMatrix.r_lum, ColorMatrix.g_lum, ColorMatrix.b_lum, 0, 0, ColorMatrix.r_lum, ColorMatrix.g_lum, ColorMatrix.b_lum, 0, 0, 0, 0, 0, 1, 0];
    this.concat(__s26local0);
  };
  ColorMatrix.prototype.invert = function () {
    this.concat([1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0]);
  };
  ColorMatrix.prototype.threshold = function (__s30param0) {
    var __s30local0 = [ColorMatrix.r_lum * 256, ColorMatrix.g_lum * 256, ColorMatrix.b_lum * 256, 0, __s30param0 * -256, ColorMatrix.r_lum * 256, ColorMatrix.g_lum * 256, ColorMatrix.b_lum * 256, 0, __s30param0 * -256, ColorMatrix.r_lum * 256, ColorMatrix.g_lum * 256, ColorMatrix.b_lum * 256, 0, __s30param0 * -256, 0, 0, 0, 1, 0];
    this.concat(__s30local0);
  };
  ColorMatrix.prototype.randomize = function (__s32param0) {
    var __s32local0 = 1 - __s32param0;
    var __s32local1 = [__s32local0 + __s32param0 * (Math.random() - Math.random()), __s32param0 * (Math.random() - Math.random()), __s32param0 * (Math.random() - Math.random()), 0, __s32param0 * 255 * (Math.random() - Math.random()), __s32param0 * (Math.random() - Math.random()), __s32local0 + __s32param0 * (Math.random() - Math.random()), __s32param0 * (Math.random() - Math.random()), 0, __s32param0 * 255 * (Math.random() - Math.random()), __s32param0 * (Math.random() - Math.random()), __s32param0 * (Math.random() - Math.random()), __s32local0 + __s32param0 * (Math.random() - Math.random()), 0, __s32param0 * 255 * (Math.random() - Math.random()), 0, 0, 0, 1, 0];
    this.concat(__s32local1);
  };
  ColorMatrix.prototype.setChannels = function (__s34param0, __s34param1, __s34param2, __s34param3) {
    var __s34local0 = ((__s34param0 & 1) == 1 ? 1 : 0) + ((__s34param0 & 2) == 2 ? 1 : 0) + ((__s34param0 & 4) == 4 ? 1 : 0) + ((__s34param0 & 8) == 8 ? 1 : 0);
    if (__s34local0 > 0) {
      __s34local0 = 1 / __s34local0;
    }
    var __s34local1 = ((__s34param1 & 1) == 1 ? 1 : 0) + ((__s34param1 & 2) == 2 ? 1 : 0) + ((__s34param1 & 4) == 4 ? 1 : 0) + ((__s34param1 & 8) == 8 ? 1 : 0);
    if (__s34local1 > 0) {
      __s34local1 = 1 / __s34local1;
    }
    var __s34local2 = ((__s34param2 & 1) == 1 ? 1 : 0) + ((__s34param2 & 2) == 2 ? 1 : 0) + ((__s34param2 & 4) == 4 ? 1 : 0) + ((__s34param2 & 8) == 8 ? 1 : 0);
    if (__s34local2 > 0) {
      __s34local2 = 1 / __s34local2;
    }
    var __s34local3 = ((__s34param3 & 1) == 1 ? 1 : 0) + ((__s34param3 & 2) == 2 ? 1 : 0) + ((__s34param3 & 4) == 4 ? 1 : 0) + ((__s34param3 & 8) == 8 ? 1 : 0);
    if (__s34local3 > 0) {
      __s34local3 = 1 / __s34local3;
    }
    var __s34local4 = [(__s34param0 & 1) == 1 ? __s34local0 : 0, (__s34param0 & 2) == 2 ? __s34local0 : 0, (__s34param0 & 4) == 4 ? __s34local0 : 0, (__s34param0 & 8) == 8 ? __s34local0 : 0, 0, (__s34param1 & 1) == 1 ? __s34local1 : 0, (__s34param1 & 2) == 2 ? __s34local1 : 0, (__s34param1 & 4) == 4 ? __s34local1 : 0, (__s34param1 & 8) == 8 ? __s34local1 : 0, 0, (__s34param2 & 1) == 1 ? __s34local2 : 0, (__s34param2 & 2) == 2 ? __s34local2 : 0, (__s34param2 & 4) == 4 ? __s34local2 : 0, (__s34param2 & 8) == 8 ? __s34local2 : 0, 0, (__s34param3 & 1) == 1 ? __s34local3 : 0, (__s34param3 & 2) == 2 ? __s34local3 : 0, (__s34param3 & 4) == 4 ? __s34local3 : 0, (__s34param3 & 8) == 8 ? __s34local3 : 0, 0];
    this.concat(__s34local4);
  };
  ColorMatrix.prototype.blend = function (__s40param0, __s40param1) {
    var __s40local0 = 1 - __s40param1;
    for (var __s40local1 = 0; __s40local1 < 20; __s40local1++) {
      this.matrix[__s40local1] = __s40local0 * this.matrix[__s40local1] + __s40param1 * __s40param0.matrix[__s40local1];
    }
  };
  ColorMatrix.prototype.concat = function (__s44param0) {
    var __s44local0 = new Array();
    var __s44local1 = 0;
    for (var __s44local2 = 0; __s44local2 < 4; __s44local2++) {
      for (var __s44local3 = 0; __s44local3 < 5; __s44local3++) {
        __s44local0[__s44local1 + __s44local3] = __s44param0[__s44local1] * this.matrix[__s44local3] + __s44param0[__s44local1 + 1] * this.matrix[__s44local3 + 5] + __s44param0[__s44local1 + 2] * this.matrix[__s44local3 + 10] + __s44param0[__s44local1 + 3] * this.matrix[__s44local3 + 15] + (__s44local3 == 4 ? __s44param0[__s44local1 + 4] : 0);
      }
      __s44local1 += 5;
    }
    this.matrix = __s44local0;
  };
  Object.defineProperty(ColorMatrix.prototype, "filter", {
    get: function () {
      return new __s0local0(this.matrix);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorMatrix.prototype, "transformMatrix", {
    get: function () {
      return new __s0local1(1, 1, 1, 1, this.matrix[4] / 255, this.matrix[9] / 255, this.matrix[14] / 255);
    },
    enumerable: true,
    configurable: true
  });
  ColorMatrix.r_lum = 0.3086;
  ColorMatrix.g_lum = 0.6094;
  ColorMatrix.b_lum = 0.082;
  ColorMatrix.IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  return ColorMatrix;
}();
exports.ColorMatrix = __s0local2;
