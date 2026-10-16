Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicVerifyPlayerMailCommand(__s3param0 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.ALL_OK = 0;
    __s3local0.GENERAL_ERROR = 1;
    __s3local0.FEATURE_NOT_AVAILABLE = 2;
    __s3local0.EMAIL_ALREADY_VERIFIED = 3;
    __s3local0.EMAIL_ALREADY_IN_USE = 4;
    __s3local0.EMAIL_BLOCKED = 5;
    __s3local0.EMAIL_INVALID = 6;
    __s3local0.EMAIL_TOO_LONG = 7;
    __s3local0.EMAIL_DOMAIN_BLOCKED = 8;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicVerifyPlayerMailCommand, __s1param0);
  BasicVerifyPlayerMailCommand.prototype.execute = function (__s5param0 = null) {
    this.errorCode = __s5param0;
    switch (this.errorCode) {
      case this.ALL_OK:
        this.all_ok();
        break;
      case this.GENERAL_ERROR:
        this.general_error();
        break;
      case this.FEATURE_NOT_AVAILABLE:
        this.feature_not_available();
        break;
      case this.EMAIL_ALREADY_VERIFIED:
        this.email_already_verified();
        break;
      case this.EMAIL_ALREADY_IN_USE:
        this.email_already_in_use();
        break;
      case this.EMAIL_BLOCKED:
        this.email_blocked();
        break;
      case this.EMAIL_INVALID:
        this.email_invalid();
        break;
      case this.EMAIL_TOO_LONG:
        this.email_too_long();
        break;
      case this.EMAIL_DOMAIN_BLOCKED:
        this.email_domain_blocked();
        break;
      default:
        this.general_error();
    }
  };
  BasicVerifyPlayerMailCommand.prototype.all_ok = function () {};
  BasicVerifyPlayerMailCommand.prototype.general_error = function () {};
  BasicVerifyPlayerMailCommand.prototype.feature_not_available = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_already_verified = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_already_in_use = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_blocked = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_invalid = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_too_long = function () {};
  BasicVerifyPlayerMailCommand.prototype.email_domain_blocked = function () {};
  BasicVerifyPlayerMailCommand.sendMessage = function (__s26param0) {
    var __s26local0 = {
      MAIL: __s26param0
    };
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_VERIFY_PLAYER_MAIL_EVENT, [JSON.stringify(__s26local0)]);
  };
  return BasicVerifyPlayerMailCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicVerifyPlayerMailCommand = __s0local0;
