Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Never = __dep_export_ValidationError.create(function () {
  throw __dep_export_ValidationError.validationError("Expected nothing but got something");
}, {
  tag: "never"
});
