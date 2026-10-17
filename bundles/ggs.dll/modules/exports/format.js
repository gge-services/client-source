// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 134
// Export: format; preserved source: modules/webpack/exports/_extend.js
// Original canonical SHA-256: 904ddcd74133a3f10ecafafb51c9ed08ee75f062e993851215f616d90fcb0656
exports.format = function (__s1param0) {
  if (!isString(__s1param0)) {
    var __s1local0 = [];
    for (var __s1local1 = 0; __s1local1 < arguments.length; __s1local1++) {
      __s1local0.push(inspect(arguments[__s1local1]));
    }
    return __s1local0.join(" ");
  }
  __s1local1 = 1;
  for (var __s1local2 = arguments, __s1local3 = __s1local2.length, __s1local4 = String(__s1param0).replace(__s0local0, function (__s7param0) {
      if (__s7param0 === "%%") {
        return "%";
      }
      if (__s1local1 >= __s1local3) {
        return __s7param0;
      }
      switch (__s7param0) {
        case "%s":
          return String(__s1local2[__s1local1++]);
        case "%d":
          return Number(__s1local2[__s1local1++]);
        case "%j":
          try {
            return JSON.stringify(__s1local2[__s1local1++]);
          } catch (__s13local0) {
            return "[Circular]";
          }
        default:
          return __s7param0;
      }
    }), __s1local5 = __s1local2[__s1local1]; __s1local1 < __s1local3; __s1local5 = __s1local2[++__s1local1]) {
    if (isNull(__s1local5) || !isObject(__s1local5)) {
      __s1local4 += " " + __s1local5;
    } else {
      __s1local4 += " " + inspect(__s1local5);
    }
  }
  return __s1local4;
};
