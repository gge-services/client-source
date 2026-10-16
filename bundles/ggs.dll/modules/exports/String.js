Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.String = __dep_export_ValidationError.create(function (__s1param0) {
  if (typeof __s1param0 != "string") {
    throw __dep_export_ValidationError.validationError("Expected string but was " + typeof __s1param0);
  }
  return __s1param0;
}, {
  tag: "string"
});
