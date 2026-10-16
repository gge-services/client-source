Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQualifiedClassName = function getQualifiedClassName(__s1param0) {
  if (__s1param0 && __s1param0.constructor) {
    if (__s1param0.constructor.name === "Function") {
      if (__s1param0.__fname) {
        return __s1param0.__fname;
      }
      var __s1local0 = __s1param0.toString();
      return __s1local0 = __s1local0.substring(9, __s1local0.indexOf("("));
    }
    return __s1param0.constructor.__fname || __s1param0.constructor.name;
  }
  return __s1param0 + "";
};
