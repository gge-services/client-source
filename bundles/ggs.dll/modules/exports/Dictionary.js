Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
var __dep_export_Record = require("gge-module:export_Record");
exports.Dictionary = function Dictionary(__s1param0, __s1param1 = "string") {
  return __dep_export_ValidationError.create(function (__s3param0) {
    __dep_export_Record.Record({}).check(__s3param0);
    if (typeof __s3param0 != "object") {
      throw __dep_export_ValidationError.validationError("Expected an object but was " + typeof __s3param0);
    }
    if (Object.getPrototypeOf(__s3param0) !== Object.prototype) {
      if (!Array.isArray(__s3param0)) {
        throw __dep_export_ValidationError.validationError("Expected simple object but was complex");
      }
      if (__s1param1 === "string") {
        throw __dep_export_ValidationError.validationError("Expected dictionary but was array");
      }
    }
    for (var __s3local0 in __s3param0) {
      if (__s1param1 === "number" && isNaN(+__s3local0)) {
        throw __dep_export_ValidationError.validationError("Expected dictionary key to be a number but was string");
      }
      __s1param0.check(__s3param0[__s3local0]);
    }
    return __s3param0;
  }, {
    tag: "dictionary",
    key: __s1param1,
    value: __s1param0
  });
};
