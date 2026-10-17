exports.byteLength = function byteLength(__s1param0) {
  var __s1local0 = getLens(__s1param0);
  var __s1local1 = __s1local0[0];
  var __s1local2 = __s1local0[1];
  return (__s1local1 + __s1local2) * 3 / 4 - __s1local2;
};
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
var __s0local0 = [];
var __s0local1 = [];
var __s0local2 = typeof Uint8Array != "undefined" ? Uint8Array : Array;
var __s0local3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var __s0local4 = 0, __s0local5 = __s0local3.length; __s0local4 < __s0local5; ++__s0local4) {
  __s0local0[__s0local4] = __s0local3[__s0local4];
  __s0local1[__s0local3.charCodeAt(__s0local4)] = __s0local4;
}
function getLens(__s19param0) {
  var __s19local0 = __s19param0.length;
  if (__s19local0 % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var __s19local1 = __s19param0.indexOf("=");
  if (__s19local1 === -1) {
    __s19local1 = __s19local0;
  }
  return [__s19local1, __s19local1 === __s19local0 ? 0 : 4 - __s19local1 % 4];
}
function encodeChunk(__s23param0, __s23param1, __s23param2) {
  var __s23local0;
  var __s23local1;
  var __s23local2 = [];
  for (var __s23local3 = __s23param1; __s23local3 < __s23param2; __s23local3 += 3) {
    __s23local0 = (__s23param0[__s23local3] << 16 & 16711680) + (__s23param0[__s23local3 + 1] << 8 & 65280) + (__s23param0[__s23local3 + 2] & 255);
    __s23local2.push(__s0local0[(__s23local1 = __s23local0) >> 18 & 63] + __s0local0[__s23local1 >> 12 & 63] + __s0local0[__s23local1 >> 6 & 63] + __s0local0[__s23local1 & 63]);
  }
  return __s23local2.join("");
}
__s0local1["-".charCodeAt(0)] = 62;
__s0local1["_".charCodeAt(0)] = 63;
