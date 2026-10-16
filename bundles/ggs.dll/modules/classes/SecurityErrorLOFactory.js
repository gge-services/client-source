Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function SecurityErrorLOFactory(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._operationText = __s3param1;
    __s3local0._url = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SecurityErrorLOFactory, __s1param0);
  SecurityErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, SecurityErrorLOFactory.SECURITY_ERROR.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ERROR_EVENT_OPERATION_TEXT, this._operationText);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_URL, this._url);
    return __s5local0;
  };
  SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR = 1001;
  SecurityErrorLOFactory.GENERAL_TRACKING_SECURITY_ERROR = 1002;
  SecurityErrorLOFactory.SECURITY_ERROR = 1;
  return SecurityErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.SecurityErrorLOFactory = __s0local0;
