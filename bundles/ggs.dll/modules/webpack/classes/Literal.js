Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
function Literal(__s1param0) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    if (__s3param0 !== __s1param0) {
      throw __dep_export_ValidationError.validationError("Expected literal '" + __s1param0 + "' but was '" + __s3param0 + "'");
    }
    return __s3param0;
  }, {
    tag: "literal",
    value: __s1param0
  });
}
exports.Literal = Literal;
exports.Undefined = Literal(undefined);
exports.Null = Literal(null);
