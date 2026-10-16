Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function ServerErrorLOFactory(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._zone = __s3param1;
    __s3local0._bluebox = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ServerErrorLOFactory, __s1param0);
  ServerErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, ServerErrorLOFactory.SERVER_ERROR.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ZONE, this._zone);
    __s5local0.logData.set(ServerErrorLOFactory.PARAM_BLUEBOX, this._bluebox.toString());
    return __s5local0;
  };
  ServerErrorLOFactory.CONNECT_FAILED = 13001;
  ServerErrorLOFactory.ROOMLIST_FAILED = 13002;
  ServerErrorLOFactory.JOINROOM_FAILED = 13003;
  ServerErrorLOFactory.LOGIN_RESPONCE_FAILED = 13004;
  ServerErrorLOFactory.CONNECTION_LOST = 13005;
  ServerErrorLOFactory.CONNECTION_KILLED = 13006;
  ServerErrorLOFactory.SERVER_ERROR = 13;
  ServerErrorLOFactory.PARAM_BLUEBOX = "bluebox";
  return ServerErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.ServerErrorLOFactory = __s0local0;
