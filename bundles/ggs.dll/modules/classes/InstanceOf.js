Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.InstanceOf = function InstanceOf(__s1param0) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    if (!(__s3param0 instanceof __s1param0)) {
      throw __dep_export_ValidationError.validationError("Expected a " + __s1param0.name + " but was " + typeof __s3param0);
    }
    return __s3param0;
  }, {
    tag: "instanceof",
    ctor: __s1param0
  });
};
