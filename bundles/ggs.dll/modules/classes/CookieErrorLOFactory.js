Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function CookieErrorLOFactory(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CookieErrorLOFactory, __s1param0);
  CookieErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, CookieErrorLOFactory.COOKIE_ERROR.toString());
    return __s5local0;
  };
  CookieErrorLOFactory.GENERAL_ACCOUNT_COOKIE_ERROR = 4001;
  CookieErrorLOFactory.GENERAL_NETWORK_COOKIE_ERROR = 4002;
  CookieErrorLOFactory.COOKIE_ERROR = 4;
  return CookieErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.CookieErrorLOFactory = __s0local0;
