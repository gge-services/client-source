Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function FileErrorLOFactory(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._assetName = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FileErrorLOFactory, __s1param0);
  FileErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, FileErrorLOFactory.FILE_ERROR.toString());
    if (this._assetName !== undefined) {
      __s5local0.logData.set(FileErrorLOFactory.PARAM_ASSETNAME, this._assetName);
    }
    return __s5local0;
  };
  FileErrorLOFactory.ASSET_NOT_VERSIONED_FILE_ERROR = 14001;
  FileErrorLOFactory.PARAM_ASSETNAME = "assetName";
  FileErrorLOFactory.FILE_ERROR = 14;
  return FileErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.FileErrorLOFactory = __s0local0;
