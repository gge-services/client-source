// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 78
// Export: exportToWindow; preserved source: modules/webpack/classes/ExportToWindowDebuggerClass.js
// Original canonical SHA-256: 5865de9b067bdac188c159d621cf82a162a9eca0794c12ed4ee0a2236288f000
exports.exportToWindow = function exportToWindow(__s19param0 = "global", __s19param1) {
  return function (__s21param0) {
    var __s21local0 = function (__s23param0) {
      function ExportToWindowDebuggerClass() {
        var __s25local0 = [];
        for (var __s25local1 = 0; __s25local1 < arguments.length; __s25local1++) {
          __s25local0[__s25local1] = arguments[__s25local1];
        }
        var __s25local2 = __s23param0.apply(this, __s25local0) || this;
        var __s25local3 = window[__s19param0] = window[__s19param0] || new Map();
        __s25local2._exportedClassName = __s25local2.constructor.name === "ExportToWindowDebuggerClass" ? __s21param0.name : __s25local2.constructor.name;
        __s25local3.set(__s25local2._exportedClassName, __s25local2);
        return __s25local2;
      }
      __dep_exact_b45c75bfe6706b06.__extends(ExportToWindowDebuggerClass, __s23param0);
      return ExportToWindowDebuggerClass;
    }(__s21param0);
    __s21local0.prototype = __s21param0.prototype;
    return __s21local0;
  };
};
