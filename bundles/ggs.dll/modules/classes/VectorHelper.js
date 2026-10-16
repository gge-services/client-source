Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function VectorHelper() {}
  VectorHelper.toArray = function (__s5param0) {
    if (__s5param0) {
      if (__s5param0 instanceof Array) {
        var __s5local0 = new Array(__s5param0.length);
        for (var __s5local1 = 0; __s5local1 < __s5param0.length; __s5local1++) {
          __s5local0[__s5local1] = __s5param0[__s5local1];
        }
        return __s5local0;
      }
      if (__s5param0 instanceof Array) {
        return Array.from(__s5param0);
      } else {
        return [];
      }
    }
    return [];
  };
  return VectorHelper;
}();
exports.VectorHelper = __s0local0;
