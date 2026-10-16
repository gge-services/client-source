Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicLostPasswordCommand(__s3param0 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.ALL_OK = 0;
    __s3local0.GENERAL_ERROR = 1;
    __s3local0.PLAYER_NOT_FOUND = 2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLostPasswordCommand, __s1param0);
  BasicLostPasswordCommand.prototype.execute = function (__s5param0 = null) {
    this.errorCode = __s5param0;
    switch (this.errorCode) {
      case this.ALL_OK:
        this.all_ok();
        break;
      case this.GENERAL_ERROR:
        this.general_error();
        break;
      case this.PLAYER_NOT_FOUND:
        this.player_not_found();
        break;
      default:
        this.general_error();
    }
  };
  BasicLostPasswordCommand.prototype.all_ok = function () {};
  BasicLostPasswordCommand.prototype.general_error = function () {};
  BasicLostPasswordCommand.prototype.player_not_found = function () {};
  BasicLostPasswordCommand.sendMessage = function (__s14param0) {
    var __s14local0 = {
      MAIL: __s14param0
    };
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOST_PASSWORD_EVENT, [JSON.stringify(__s14local0)]);
  };
  return BasicLostPasswordCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicLostPasswordCommand = __s0local0;
