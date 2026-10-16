function serializer(__s1param0, __s1param1) {
  var __s1local0 = [];
  var __s1local1 = [];
  if (__s1param1 == null) {
    __s1param1 = function (__s4param0, __s4param1) {
      if (__s1local0[0] === __s4param1) {
        return "[Circular ~]";
      } else {
        return "[Circular ~." + __s1local1.slice(0, __s1local0.indexOf(__s4param1)).join(".") + "]";
      }
    };
  }
  return function (__s8param0, __s8param1) {
    if (__s1local0.length > 0) {
      var __s8local0 = __s1local0.indexOf(this);
      if (~__s8local0) {
        __s1local0.splice(__s8local0 + 1);
      } else {
        __s1local0.push(this);
      }
      if (~__s8local0) {
        __s1local1.splice(__s8local0, Infinity, __s8param0);
      } else {
        __s1local1.push(__s8param0);
      }
      if (~__s1local0.indexOf(__s8param1)) {
        __s8param1 = __s1param1.call(this, __s8param0, __s8param1);
      }
    } else {
      __s1local0.push(__s8param1);
    }
    if (__s1param0 == null) {
      return __s8param1;
    } else {
      return __s1param0.call(this, __s8param0, __s8param1);
    }
  };
}
(module.exports = function stringify(__s19param0, __s19param1, __s19param2, __s19param3) {
  return JSON.stringify(__s19param0, serializer(__s19param1, __s19param3), __s19param2);
}).getSerialize = serializer;
