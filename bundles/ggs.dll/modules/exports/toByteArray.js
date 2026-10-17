// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 714
// Export: toByteArray; preserved source: modules/webpack/exports/byteLength.js
// Original canonical SHA-256: 9f3e477c9aba381e1e5d5f4ba6c0495c30d837a4cb9532ba856f356c9d07d3e5
exports.toByteArray = function toByteArray(__s3param0) {
  var __s3local0;
  var __s3local1 = getLens(__s3param0);
  var __s3local2 = __s3local1[0];
  var __s3local3 = __s3local1[1];
  var __s3local4 = new __s0local2(function _byteLength(__s5param0, __s5param1, __s5param2) {
    return (__s5param1 + __s5param2) * 3 / 4 - __s5param2;
  }(0, __s3local2, __s3local3));
  var __s3local5 = 0;
  for (var __s3local6 = __s3local3 > 0 ? __s3local2 - 4 : __s3local2, __s3local7 = 0; __s3local7 < __s3local6; __s3local7 += 4) {
    __s3local0 = __s0local1[__s3param0.charCodeAt(__s3local7)] << 18 | __s0local1[__s3param0.charCodeAt(__s3local7 + 1)] << 12 | __s0local1[__s3param0.charCodeAt(__s3local7 + 2)] << 6 | __s0local1[__s3param0.charCodeAt(__s3local7 + 3)];
    __s3local4[__s3local5++] = __s3local0 >> 16 & 255;
    __s3local4[__s3local5++] = __s3local0 >> 8 & 255;
    __s3local4[__s3local5++] = __s3local0 & 255;
  }
  if (__s3local3 === 2) {
    __s3local0 = __s0local1[__s3param0.charCodeAt(__s3local7)] << 2 | __s0local1[__s3param0.charCodeAt(__s3local7 + 1)] >> 4;
    __s3local4[__s3local5++] = __s3local0 & 255;
  }
  if (__s3local3 === 1) {
    __s3local0 = __s0local1[__s3param0.charCodeAt(__s3local7)] << 10 | __s0local1[__s3param0.charCodeAt(__s3local7 + 1)] << 4 | __s0local1[__s3param0.charCodeAt(__s3local7 + 2)] >> 2;
    __s3local4[__s3local5++] = __s3local0 >> 8 & 255;
    __s3local4[__s3local5++] = __s3local0 & 255;
  }
  return __s3local4;
};
