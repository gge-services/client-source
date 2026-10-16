Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
var __dep_export_hasKey = require("gge-module:export_hasKey");
exports.Record = function Record(__s1param0) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    if (__s3param0 === null || __s3param0 === undefined) {
      throw __dep_export_ValidationError.validationError("Expected a defined non-null value but was " + typeof __s3param0);
    }
    for (var __s3local0 in __s1param0) {
      if (!__dep_export_hasKey.hasKey(__s3local0, __s3param0)) {
        throw __dep_export_ValidationError.validationError("Missing property " + __s3local0);
      }
      try {
        __s1param0[__s3local0].check(__s3param0[__s3local0]);
      } catch (__s10local0) {
        var __s3local1 = __s10local0.message;
        throw __dep_export_ValidationError.validationError("In key " + __s3local0 + ": " + __s3local1);
      }
    }
    return __s3param0;
  }, {
    tag: "record",
    fields: __s1param0
  });
};
