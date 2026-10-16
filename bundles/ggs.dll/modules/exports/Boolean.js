Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Boolean = __dep_export_ValidationError.create(function (__s1param0) {
  if (typeof __s1param0 != "boolean") {
    throw __dep_export_ValidationError.validationError("Expected boolean but was " + typeof __s1param0);
  }
  return __s1param0;
}, {
  tag: "boolean"
});
