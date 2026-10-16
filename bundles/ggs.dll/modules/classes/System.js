Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ClipboardFormats = require("gge-module:class_ClipboardFormats");
var __dep_exact_73c19e878e972046 = require("gge-module:exact_73c19e878e972046");
var __s0local0 = function () {
  function System() {}
  Object.defineProperty(System, "totalMemory", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  System.setClipboard = function (__s7param0) {
    __dep_exact_73c19e878e972046.Clipboard.generalClipboard.setData(__dep_class_ClipboardFormats.ClipboardFormats.TEXT_FORMAT, __s7param0);
  };
  System.gc = function () {};
  return System;
}();
exports.System = __s0local0;
