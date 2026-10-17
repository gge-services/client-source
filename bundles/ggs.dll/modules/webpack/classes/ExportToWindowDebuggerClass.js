Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("decorators");
exports.commentedOut = function commentedOut(__s1param0 = "", __s1param1 = "") {
  return function (__s3param0, __s3param1, __s3param2) {
    __s3param2.value = function () {
      return __s0local0.warn(__s3param1 + " was commented out. " + function addIssue(__s7param0 = "") {
        if (__s7param0 !== "") {
          return " IssueID: " + __s7param0 + " ";
        } else {
          return "";
        }
      }(__s1param0) + function addMessage(__s11param0 = "") {
        if (__s11param0 !== "") {
          return " message: " + __s11param0 + " ";
        } else {
          return "";
        }
      }(__s1param1));
    };
    return __s3param2;
  };
};
exports.replacedWith = function replacedWith(__s15param0) {
  return function (__s17param0, __s17param1, __s17param2) {
    __s17param2.value = __s15param0;
    return __s17param2;
  };
};
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
