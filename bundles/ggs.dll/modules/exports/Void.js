Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Void = __dep_export_ValidationError.create(function (__s1param0) {
  if (__s1param0 !== undefined && __s1param0 !== null) {
    throw __dep_export_ValidationError.validationError("Expected null but was " + typeof __s1param0);
  }
  return __s1param0;
}, {
  tag: "void"
});
