Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicRequestSocialLoginKeysCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicRequestSocialLoginKeysCommand, __s1param0);
  BasicRequestSocialLoginKeysCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_BasicModel.BasicModel.socialData.requestLoginKeys();
  };
  return BasicRequestSocialLoginKeysCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicRequestSocialLoginKeysCommand = __s0local0;
