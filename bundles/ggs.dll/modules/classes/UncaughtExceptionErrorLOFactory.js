Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function UncaughtExceptionErrorLOFactory(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._stackLines = __s3param2;
    __s3local0._event = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(UncaughtExceptionErrorLOFactory, __s1param0);
  UncaughtExceptionErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, UncaughtExceptionErrorLOFactory.UNCAUGHT_EXCEPTION.toString());
    __s5local0.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TYPE, this._event.error);
    __s5local0.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_ID, this._event.errorID);
    __s5local0.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TARGET, this._event.target);
    __s5local0.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TEXT, this._event.text);
    __s5local0.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE, this._stackLines[0] + " " + this._stackLines[1]);
    return __s5local0;
  };
  UncaughtExceptionErrorLOFactory.UNDEFINED_ERROR = 2001;
  UncaughtExceptionErrorLOFactory.UNCAUGHT_EXCEPTION = 2;
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TYPE = "eventErrorType";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_ID = "eventErrorId";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TARGET = "eventErrorTarget";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TEXT = "eventErrorText";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE = "eventErrorStackTrace";
  return UncaughtExceptionErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.UncaughtExceptionErrorLOFactory = __s0local0;
