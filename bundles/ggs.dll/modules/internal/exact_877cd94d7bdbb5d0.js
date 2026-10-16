module.exports = function asPromise(__s1param0, __s1param1) {
  var __s1local0 = new Array(arguments.length - 1);
  var __s1local1 = 0;
  var __s1local2 = 2;
  var __s1local3 = true;
  while (__s1local2 < arguments.length) {
    __s1local0[__s1local1++] = arguments[__s1local2++];
  }
  return new Promise(function executor(__s5param0, __s5param1) {
    __s1local0[__s1local1] = function callback(__s7param0) {
      if (__s1local3) {
        __s1local3 = false;
        if (__s7param0) {
          __s5param1(__s7param0);
        } else {
          for (var __s7local0 = new Array(arguments.length - 1), __s7local1 = 0; __s7local1 < __s7local0.length;) {
            __s7local0[__s7local1++] = arguments[__s7local1];
          }
          __s5param0.apply(null, __s7local0);
        }
      }
    };
    try {
      __s1param0.apply(__s1param1 || null, __s1local0);
    } catch (__s15local0) {
      if (__s1local3) {
        __s1local3 = false;
        __s5param1(__s15local0);
      }
    }
  });
};
