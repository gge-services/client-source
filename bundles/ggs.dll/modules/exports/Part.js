Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
var __dep_class_Literal = require("gge-module:class_Literal");
var __dep_export_hasKey = require("gge-module:export_hasKey");
function Part(__s1param0) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    if (__s3param0 === null || __s3param0 === undefined) {
      throw __dep_export_ValidationError.validationError("Expected a defined non-null value but was " + typeof __s3param0);
    }
    for (var __s3local0 in __s1param0) {
      if (__dep_export_hasKey.hasKey(__s3local0, __s3param0)) {
        try {
          __dep_exact_f5b02bbe07c08b29.Union(__s1param0[__s3local0], __dep_class_Literal.Undefined).check(__s3param0[__s3local0]);
        } catch (__s10local0) {
          var __s3local1 = __s10local0.message;
          throw __dep_export_ValidationError.validationError("In key " + __s3local0 + ": " + __s3local1);
        }
      }
    }
    return __s3param0;
  }, {
    tag: "partial",
    fields: __s1param0
  });
}
exports.Part = Part;
exports.Partial = Part;
