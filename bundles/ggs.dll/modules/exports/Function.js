Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Function = __dep_export_ValidationError.create(function (__s1param0) {
  if (typeof __s1param0 != "function") {
    throw __dep_export_ValidationError.validationError("Expected a function but was " + typeof __s1param0);
  }
  return __s1param0;
}, {
  tag: "function"
});
