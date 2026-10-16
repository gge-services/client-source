module.exports = function (__s1param0) {
  if (!__s1param0.webpackPolyfill) {
    __s1param0.deprecate = function () {};
    __s1param0.paths = [];
    __s1param0.children ||= [];
    Object.defineProperty(__s1param0, "loaded", {
      enumerable: true,
      get: function () {
        return __s1param0.l;
      }
    });
    Object.defineProperty(__s1param0, "id", {
      enumerable: true,
      get: function () {
        return __s1param0.i;
      }
    });
    __s1param0.webpackPolyfill = 1;
  }
  return __s1param0;
};
