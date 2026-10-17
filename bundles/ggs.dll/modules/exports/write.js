// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 715
// Export: write; preserved source: modules/webpack/exports/read.js
// Original canonical SHA-256: 92f01fbec528894439bcc503de7efb9e8fc063cd2d5442111e56ee474daa0bf5
exports.write = function (__s12param0, __s12param1, __s12param2, __s12param3, __s12param4, __s12param5) {
  var __s12local0;
  var __s12local1;
  var __s12local2;
  var __s12local3 = __s12param5 * 8 - __s12param4 - 1;
  var __s12local4 = (1 << __s12local3) - 1;
  var __s12local5 = __s12local4 >> 1;
  var __s12local6 = __s12param4 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var __s12local7 = __s12param3 ? 0 : __s12param5 - 1;
  var __s12local8 = __s12param3 ? 1 : -1;
  var __s12local9 = __s12param1 < 0 || __s12param1 === 0 && 1 / __s12param1 < 0 ? 1 : 0;
  __s12param1 = Math.abs(__s12param1);
  if (isNaN(__s12param1) || __s12param1 === Infinity) {
    __s12local1 = isNaN(__s12param1) ? 1 : 0;
    __s12local0 = __s12local4;
  } else {
    __s12local0 = Math.floor(Math.log(__s12param1) / Math.LN2);
    if (__s12param1 * (__s12local2 = Math.pow(2, -__s12local0)) < 1) {
      __s12local0--;
      __s12local2 *= 2;
    }
    if ((__s12param1 += __s12local0 + __s12local5 >= 1 ? __s12local6 / __s12local2 : __s12local6 * Math.pow(2, 1 - __s12local5)) * __s12local2 >= 2) {
      __s12local0++;
      __s12local2 /= 2;
    }
    if (__s12local0 + __s12local5 >= __s12local4) {
      __s12local1 = 0;
      __s12local0 = __s12local4;
    } else if (__s12local0 + __s12local5 >= 1) {
      __s12local1 = (__s12param1 * __s12local2 - 1) * Math.pow(2, __s12param4);
      __s12local0 += __s12local5;
    } else {
      __s12local1 = __s12param1 * Math.pow(2, __s12local5 - 1) * Math.pow(2, __s12param4);
      __s12local0 = 0;
    }
  }
  for (; __s12param4 >= 8; __s12param4 -= 8) {
    __s12param0[__s12param2 + __s12local7] = __s12local1 & 255;
    __s12local7 += __s12local8;
    __s12local1 /= 256;
  }
  __s12local0 = __s12local0 << __s12param4 | __s12local1;
  __s12local3 += __s12param4;
  for (; __s12local3 > 0; __s12local3 -= 8) {
    __s12param0[__s12param2 + __s12local7] = __s12local0 & 255;
    __s12local7 += __s12local8;
    __s12local0 /= 256;
  }
  __s12param0[__s12param2 + __s12local7 - __s12local8] |= __s12local9 * 128;
};
