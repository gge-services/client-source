Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function IOErrorLOFactory(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._operationText = __s3param1;
    __s3local0._url = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(IOErrorLOFactory, __s1param0);
  IOErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, IOErrorLOFactory.IO_ERROR.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ERROR_EVENT_OPERATION_TEXT, this._operationText);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_URL, this._url);
    return __s5local0;
  };
  IOErrorLOFactory.GENERAL_LOADER_IO_ERROR = 3001;
  IOErrorLOFactory.GENERAL_TRACKING_IO_ERROR = 3002;
  IOErrorLOFactory.GENERAL_LOADER_INVALID_DATA_ERROR = 3003;
  IOErrorLOFactory.IO_ERROR = 3;
  return IOErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.IOErrorLOFactory = __s0local0;
