var __s0local0 = exports;
__s0local0.length = function length(__s1param0) {
  var __s1local0 = __s1param0.length;
  if (!__s1local0) {
    return 0;
  }
  var __s1local1 = 0;
  for (; --__s1local0 % 4 > 1 && __s1param0.charAt(__s1local0) === "=";) {
    ++__s1local1;
  }
  return Math.ceil(__s1param0.length * 3) / 4 - __s1local1;
};
var __s0local1 = new Array(64);
var __s0local2 = new Array(123);
for (var __s0local3 = 0; __s0local3 < 64;) {
  __s0local2[__s0local1[__s0local3] = __s0local3 < 26 ? __s0local3 + 65 : __s0local3 < 52 ? __s0local3 + 71 : __s0local3 < 62 ? __s0local3 - 4 : __s0local3 - 59 | 43] = __s0local3++;
}
__s0local0.encode = function encode(__s8param0, __s8param1, __s8param2) {
  var __s8local0;
  var __s8local1 = null;
  var __s8local2 = [];
  for (var __s8local3 = 0, __s8local4 = 0; __s8param1 < __s8param2;) {
    var __s8local5 = __s8param0[__s8param1++];
    switch (__s8local4) {
      case 0:
        __s8local2[__s8local3++] = __s0local1[__s8local5 >> 2];
        __s8local0 = (__s8local5 & 3) << 4;
        __s8local4 = 1;
        break;
      case 1:
        __s8local2[__s8local3++] = __s0local1[__s8local0 | __s8local5 >> 4];
        __s8local0 = (__s8local5 & 15) << 2;
        __s8local4 = 2;
        break;
      case 2:
        __s8local2[__s8local3++] = __s0local1[__s8local0 | __s8local5 >> 6];
        __s8local2[__s8local3++] = __s0local1[__s8local5 & 63];
        __s8local4 = 0;
    }
    if (__s8local3 > 8191) {
      (__s8local1 ||= []).push(String.fromCharCode.apply(String, __s8local2));
      __s8local3 = 0;
    }
  }
  if (__s8local4) {
    __s8local2[__s8local3++] = __s0local1[__s8local0];
    __s8local2[__s8local3++] = 61;
    if (__s8local4 === 1) {
      __s8local2[__s8local3++] = 61;
    }
  }
  if (__s8local1) {
    if (__s8local3) {
      __s8local1.push(String.fromCharCode.apply(String, __s8local2.slice(0, __s8local3)));
    }
    return __s8local1.join("");
  } else {
    return String.fromCharCode.apply(String, __s8local2.slice(0, __s8local3));
  }
};
__s0local0.decode = function decode(__s19param0, __s19param1, __s19param2) {
  var __s19local0;
  var __s19local1 = __s19param2;
  var __s19local2 = 0;
  for (var __s19local3 = 0; __s19local3 < __s19param0.length;) {
    var __s19local4 = __s19param0.charCodeAt(__s19local3++);
    if (__s19local4 === 61 && __s19local2 > 1) {
      break;
    }
    if ((__s19local4 = __s0local2[__s19local4]) === undefined) {
      throw Error("invalid encoding");
    }
    switch (__s19local2) {
      case 0:
        __s19local0 = __s19local4;
        __s19local2 = 1;
        break;
      case 1:
        __s19param1[__s19param2++] = __s19local0 << 2 | (__s19local4 & 48) >> 4;
        __s19local0 = __s19local4;
        __s19local2 = 2;
        break;
      case 2:
        __s19param1[__s19param2++] = (__s19local0 & 15) << 4 | (__s19local4 & 60) >> 2;
        __s19local0 = __s19local4;
        __s19local2 = 3;
        break;
      case 3:
        __s19param1[__s19param2++] = (__s19local0 & 3) << 6 | __s19local4;
        __s19local2 = 0;
    }
  }
  if (__s19local2 === 1) {
    throw Error("invalid encoding");
  }
  return __s19param2 - __s19local1;
};
__s0local0.test = function test(__s27param0) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(__s27param0);
};
