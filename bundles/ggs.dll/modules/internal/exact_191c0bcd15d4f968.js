Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind = function bind(__s1param0, __s1param1) {
  var __s1local0 = [];
  for (var __s1local1 = 2; __s1local1 < arguments.length; __s1local1++) {
    __s1local0[__s1local1 - 2] = arguments[__s1local1];
  }
  return function () {
    var __s5local0 = [];
    for (var __s5local1 = 0; __s5local1 < arguments.length; __s5local1++) {
      __s5local0[__s5local1] = arguments[__s5local1];
    }
    return __s1param0.apply(__s1param1, __s1local0.concat(__s5local0));
  };
};
