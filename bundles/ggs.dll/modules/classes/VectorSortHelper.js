Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function VectorSortHelper() {}
  VectorSortHelper.sort = function (__s5param0, __s5param1) {
    for (var __s5local0 = 1; __s5local0 < __s5param0.length; __s5local0++) {
      for (var __s5local1 = __s5param0[__s5local0], __s5local2 = __s5local0 - 1; __s5local2 >= 0 && __s5param1(__s5param0[__s5local2], __s5local1) == 1;) {
        __s5param0[__s5local2 + 1] = __s5param0[__s5local2];
        __s5local2--;
      }
      __s5param0[__s5local2 + 1] = __s5local1;
    }
    return __s5param0;
  };
  return VectorSortHelper;
}();
exports.VectorSortHelper = __s0local0;
