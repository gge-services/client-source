Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
var __dep_export_String = require("gge-module:export_String");
exports.Constraint = function Constraint(__s1param0, __s1param1, __s1param2) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    var __s3local0 = __s1param0.check(__s3param0);
    var __s3local1 = __s1param1(__s3local0);
    if (__dep_export_String.String.guard(__s3local1)) {
      throw __dep_export_ValidationError.validationError(__s3local1);
    }
    if (!__s3local1) {
      throw __dep_export_ValidationError.validationError("Failed constraint check");
    }
    return __s3local0;
  }, {
    tag: "constraint",
    underlying: __s1param0,
    args: __s1param2,
    constraint: __s1param1
  });
};
