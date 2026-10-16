Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function VersionErrorLOFactory(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._serverVersion = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(VersionErrorLOFactory, __s1param0);
  VersionErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, VersionErrorLOFactory.VERSION_ERROR.toString());
    __s5local0.logData.set(VersionErrorLOFactory.PARAM_SERVER_VERSION, this._serverVersion);
    return __s5local0;
  };
  VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR = 10001;
  VersionErrorLOFactory.VERSION_TOO_HIGH_ERROR = 10002;
  VersionErrorLOFactory.VERSION_ERROR = 10;
  VersionErrorLOFactory.PARAM_SERVER_VERSION = "serverVersion";
  return VersionErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.VersionErrorLOFactory = __s0local0;
