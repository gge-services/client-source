module.exports = function pool(__s1param0, __s1param1, __s1param2) {
  var __s1local0 = __s1param2 || 8192;
  var __s1local1 = __s1local0 >>> 1;
  var __s1local2 = null;
  var __s1local3 = __s1local0;
  return function pool_alloc(__s3param0) {
    if (__s3param0 < 1 || __s3param0 > __s1local1) {
      return __s1param0(__s3param0);
    }
    if (__s1local3 + __s3param0 > __s1local0) {
      __s1local2 = __s1param0(__s1local0);
      __s1local3 = 0;
    }
    var __s3local0 = __s1param1.call(__s1local2, __s1local3, __s1local3 += __s3param0);
    if (__s1local3 & 7) {
      __s1local3 = 1 + (__s1local3 | 7);
    }
    return __s3local0;
  };
};
