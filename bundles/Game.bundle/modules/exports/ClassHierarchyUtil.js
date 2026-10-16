Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClassHierarchyUtil() {}
  ClassHierarchyUtil.inheritsFrom = function (__s5param0, __s5param1, __s5param2 = false, __s5param3 = false) {
    if (__s5param1.prototype.isPrototypeOf(__s5param0.prototype)) {
      return true;
    }
    if (__s5param2) {
      if (__s5param3) {
        throw new Error(__dep_exact_81dacdf05bd32292.getQualifiedClassName(__s5param0) + " does not inherit from " + __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s5param1));
      }
      return false;
    }
    if (__s5param1.prototype === __s5param0.prototype) {
      return true;
    }
    if (__s5param3) {
      throw new Error(__dep_exact_81dacdf05bd32292.getQualifiedClassName(__s5param0) + " does not inherit from " + __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s5param1));
    }
    return false;
  };
  return ClassHierarchyUtil;
}();
exports.ClassHierarchyUtil = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
