module.exports = function (__s1param0) {
  if (!__s1param0.webpackPolyfill) {
    var __s1local0 = Object.create(__s1param0);
    __s1local0.children ||= [];
    Object.defineProperty(__s1local0, "loaded", {
      enumerable: true,
      get: function () {
        return __s1local0.l;
      }
    });
    Object.defineProperty(__s1local0, "id", {
      enumerable: true,
      get: function () {
        return __s1local0.i;
      }
    });
    Object.defineProperty(__s1local0, "exports", {
      enumerable: true
    });
    __s1local0.webpackPolyfill = 1;
  }
  return __s1local0;
};
