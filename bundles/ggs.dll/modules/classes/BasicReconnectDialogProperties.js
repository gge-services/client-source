Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function BasicReconnectDialogProperties(__s3param0, __s3param1, __s3param2 = null, __s3param3 = "Try again") {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.buttonLabel_reconnect = "Try again";
    __s3local0.copy = "";
    __s3local0.title = "";
    __s3local0.functionReconnect = __s3param2;
    __s3local0.buttonLabel_reconnect = __s3param3;
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicReconnectDialogProperties, __s1param0);
  return BasicReconnectDialogProperties;
}(require("gge-module:class_BasicProperties").BasicProperties);
exports.BasicReconnectDialogProperties = __s0local0;
