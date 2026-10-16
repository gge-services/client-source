var __s0local0 = exports;
var __s0local1 = __s0local0.isAbsolute = function isAbsolute(__s1param0) {
  return /^(?:\/|\w+:)/.test(__s1param0);
};
var __s0local2 = __s0local0.normalize = function normalize(__s3param0) {
  var __s3local0 = (__s3param0 = __s3param0.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
  var __s3local1 = __s0local1(__s3param0);
  var __s3local2 = "";
  if (__s3local1) {
    __s3local2 = __s3local0.shift() + "/";
  }
  for (var __s3local3 = 0; __s3local3 < __s3local0.length;) {
    if (__s3local0[__s3local3] === "..") {
      if (__s3local3 > 0 && __s3local0[__s3local3 - 1] !== "..") {
        __s3local0.splice(--__s3local3, 2);
      } else if (__s3local1) {
        __s3local0.splice(__s3local3, 1);
      } else {
        ++__s3local3;
      }
    } else if (__s3local0[__s3local3] === ".") {
      __s3local0.splice(__s3local3, 1);
    } else {
      ++__s3local3;
    }
  }
  return __s3local2 + __s3local0.join("/");
};
__s0local0.resolve = function resolve(__s14param0, __s14param1, __s14param2) {
  if (!__s14param2) {
    __s14param1 = __s0local2(__s14param1);
  }
  if (__s0local1(__s14param1)) {
    return __s14param1;
  } else {
    if (!__s14param2) {
      __s14param0 = __s0local2(__s14param0);
    }
    if ((__s14param0 = __s14param0.replace(/(?:\/|^)[^/]+$/, "")).length) {
      return __s0local2(__s14param0 + "/" + __s14param1);
    } else {
      return __s14param1;
    }
  }
};
