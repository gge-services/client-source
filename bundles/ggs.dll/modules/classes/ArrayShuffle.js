Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ArrayShuffle() {}
  ArrayShuffle.shuffle = function (__s5param0) {
    for (var __s5local0 = __s5param0.length, __s5local1 = new Array(__s5local0), __s5local2 = 0; __s5local2 < __s5local0; __s5local2++) {
      __s5local1[__s5local2] = __s5param0.splice(Number(Math.random() * (__s5local0 - __s5local2)), 1)[0];
    }
    return __s5local1;
  };
  return ArrayShuffle;
}();
exports.ArrayShuffle = __s0local0;
