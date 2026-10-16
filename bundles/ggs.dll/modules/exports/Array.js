Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Array = function Arr(__s1param0) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    if (!Array.isArray(__s3param0)) {
      throw __dep_export_ValidationError.validationError("Expected array but was " + typeof __s3param0);
    }
    for (var __s3local0 = 0, __s3local1 = __s3param0; __s3local0 < __s3local1.length; __s3local0++) {
      var __s3local2 = __s3local1[__s3local0];
      __s1param0.check(__s3local2);
    }
    return __s3param0;
  }, {
    tag: "array",
    element: __s1param0
  });
};
