Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function JSReadURLParameterLogLOFactory(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._userInfoData = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(JSReadURLParameterLogLOFactory, __s1param0);
  JSReadURLParameterLogLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, JSReadURLParameterLogLOFactory.EXTERNAL_ERROR.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_TYPE, __dep_class_ExternalLoggingConstants.ExternalLoggingConstants.LOGGING_TYPE_LOG.toString());
    __s5local0.logData.set(JSReadURLParameterLogLOFactory.PARAM_USER_INFO_DATA, this._userInfoData.toString());
    return __s5local0;
  };
  JSReadURLParameterLogLOFactory.JAVASCRIPT_READ_URL_PARAMETERS_FAILED_LOG = 30001;
  JSReadURLParameterLogLOFactory.EXTERNAL_ERROR = 30;
  JSReadURLParameterLogLOFactory.PARAM_USER_INFO_DATA = "userInfoData";
  return JSReadURLParameterLogLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.JSReadURLParameterLogLOFactory = __s0local0;
