Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function SocketErrorLOFactory(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._ip = __s3param1;
    __s3local0._port = __s3param2;
    __s3local0._zone = __s3param3;
    __s3local0._operationText = __s3param4;
    __s3local0._bluebox = __s3param5;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SocketErrorLOFactory, __s1param0);
  SocketErrorLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, SocketErrorLOFactory.SOCKET_ERROR.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ERROR_EVENT_OPERATION_TEXT, this._operationText);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ZONE, this._zone);
    __s5local0.logData.set(SocketErrorLOFactory.PARAM_IP, this._ip);
    __s5local0.logData.set(SocketErrorLOFactory.PARAM_PORT, this._port.toString());
    __s5local0.logData.set(SocketErrorLOFactory.PARAM_BLUEBOX, this._bluebox.toString());
    return __s5local0;
  };
  SocketErrorLOFactory.PING_TEST_IO_ERROR = 15001;
  SocketErrorLOFactory.PING_TEST_SECURITY_ERROR = 15002;
  SocketErrorLOFactory.POLICY_PING_TEST_IO_ERROR = 15003;
  SocketErrorLOFactory.POLICY_PING_TEST_SECURITY_ERROR = 15004;
  SocketErrorLOFactory.SOCKET_ERROR = 15;
  SocketErrorLOFactory.PARAM_IP = "ip";
  SocketErrorLOFactory.PARAM_PORT = "port";
  SocketErrorLOFactory.PARAM_BLUEBOX = "bluebox";
  return SocketErrorLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.SocketErrorLOFactory = __s0local0;
