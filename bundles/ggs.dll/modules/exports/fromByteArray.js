// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 714
// Export: fromByteArray; preserved source: modules/webpack/exports/byteLength.js
// Original canonical SHA-256: 9f3e477c9aba381e1e5d5f4ba6c0495c30d837a4cb9532ba856f356c9d07d3e5
exports.fromByteArray = function fromByteArray(__s11param0) {
  var __s11local0;
  var __s11local1 = __s11param0.length;
  var __s11local2 = __s11local1 % 3;
  var __s11local3 = [];
  for (var __s11local4 = 0, __s11local5 = __s11local1 - __s11local2; __s11local4 < __s11local5; __s11local4 += 16383) {
    __s11local3.push(encodeChunk(__s11param0, __s11local4, __s11local4 + 16383 > __s11local5 ? __s11local5 : __s11local4 + 16383));
  }
  if (__s11local2 === 1) {
    __s11local0 = __s11param0[__s11local1 - 1];
    __s11local3.push(__s0local0[__s11local0 >> 2] + __s0local0[__s11local0 << 4 & 63] + "==");
  } else if (__s11local2 === 2) {
    __s11local0 = (__s11param0[__s11local1 - 2] << 8) + __s11param0[__s11local1 - 1];
    __s11local3.push(__s0local0[__s11local0 >> 10] + __s0local0[__s11local0 >> 4 & 63] + __s0local0[__s11local0 << 2 & 63] + "=");
  }
  return __s11local3.join("");
};
