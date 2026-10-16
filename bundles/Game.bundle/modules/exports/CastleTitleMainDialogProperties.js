Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __s0local0 = function (__s1param0) {
  function CastleTitleMainDialogProperties(__s3param0 = __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._titleSystem = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleMainDialogProperties, __s1param0);
  Object.defineProperty(CastleTitleMainDialogProperties.prototype, "titleSystem", {
    get: function () {
      return this._titleSystem;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleMainDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTitleMainDialogProperties = __s0local0;
