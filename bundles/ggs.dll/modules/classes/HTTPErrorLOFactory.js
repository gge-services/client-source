Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function HTTPErrorLOFactory(__s3param0, __s3param1, __s3param2, __s3param3 = "", __s3param4 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._statusEvent = __s3param1;
    __s3local0._req = __s3param2;
    __s3local0._requesDataKey = __s3param3;
    __s3local0._eventData = __s3param4;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(HTTPErrorLOFactory, __s1param0);
  HTTPErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, HTTPErrorLOFactory.HTTP_ERROR.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_URL, this._req.url);
    __s5local0.logData.set(HTTPErrorLOFactory.PARAM_HTTP_CODE, this._statusEvent.status);
    if (this._req.data) {
      __s5local0.logData.set(HTTPErrorLOFactory.PARAM_REQUEST_DATA, this._req.data[this._requesDataKey]);
    }
    if (this._eventData) {
      __s5local0.logData.set(HTTPErrorLOFactory.PARAM_EVENT_DATA, this._eventData);
    }
    return __s5local0;
  };
  HTTPErrorLOFactory.GENERAL_TRACKING_HTTP_ERROR = 9001;
  HTTPErrorLOFactory.GENERAL_TRACKING_SERVER_HTTP_ERROR = 9002;
  HTTPErrorLOFactory.HTTP_ERROR = 9;
  HTTPErrorLOFactory.PARAM_HTTP_CODE = "httpCode";
  HTTPErrorLOFactory.PARAM_REQUEST_DATA = "requestData";
  HTTPErrorLOFactory.PARAM_EVENT_DATA = "eventData";
  return HTTPErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.HTTPErrorLOFactory = __s0local0;
