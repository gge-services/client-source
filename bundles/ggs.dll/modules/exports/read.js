// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 715
// Export: read; preserved source: modules/webpack/exports/read.js
// Original canonical SHA-256: 92f01fbec528894439bcc503de7efb9e8fc063cd2d5442111e56ee474daa0bf5
exports.read = function (__s1param0, __s1param1, __s1param2, __s1param3, __s1param4) {
  var __s1local0;
  var __s1local1;
  var __s1local2 = __s1param4 * 8 - __s1param3 - 1;
  var __s1local3 = (1 << __s1local2) - 1;
  var __s1local4 = __s1local3 >> 1;
  var __s1local5 = -7;
  var __s1local6 = __s1param2 ? __s1param4 - 1 : 0;
  var __s1local7 = __s1param2 ? -1 : 1;
  var __s1local8 = __s1param0[__s1param1 + __s1local6];
  __s1local6 += __s1local7;
  __s1local0 = __s1local8 & (1 << -__s1local5) - 1;
  __s1local8 >>= -__s1local5;
  __s1local5 += __s1local2;
  for (; __s1local5 > 0; __s1local5 -= 8) {
    __s1local0 = __s1local0 * 256 + __s1param0[__s1param1 + __s1local6];
    __s1local6 += __s1local7;
  }
  __s1local1 = __s1local0 & (1 << -__s1local5) - 1;
  __s1local0 >>= -__s1local5;
  __s1local5 += __s1param3;
  for (; __s1local5 > 0; __s1local5 -= 8) {
    __s1local1 = __s1local1 * 256 + __s1param0[__s1param1 + __s1local6];
    __s1local6 += __s1local7;
  }
  if (__s1local0 === 0) {
    __s1local0 = 1 - __s1local4;
  } else {
    if (__s1local0 === __s1local3) {
      if (__s1local1) {
        return NaN;
      } else {
        return (__s1local8 ? -1 : 1) * Infinity;
      }
    }
    __s1local1 += Math.pow(2, __s1param3);
    __s1local0 -= __s1local4;
  }
  return (__s1local8 ? -1 : 1) * __s1local1 * Math.pow(2, __s1local0 - __s1param3);
};
