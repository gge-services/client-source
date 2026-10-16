Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMailVerificationAnswerEvent = require("gge-module:export_CastleMailVerificationAnswerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = function (__s1param0) {
  function CastleVerifyPlayerMailCommand(__s3param0 = false) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVerifyPlayerMailCommand, __s1param0);
  CastleVerifyPlayerMailCommand.prototype.all_ok = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.ALL_OK));
  };
  CastleVerifyPlayerMailCommand.prototype.general_error = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.GENERAL_ERROR));
  };
  CastleVerifyPlayerMailCommand.prototype.email_already_verified = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED));
  };
  CastleVerifyPlayerMailCommand.prototype.email_already_in_use = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE));
  };
  CastleVerifyPlayerMailCommand.prototype.email_blocked = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_BLOCKED));
  };
  CastleVerifyPlayerMailCommand.prototype.email_invalid = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_INVALID));
  };
  CastleVerifyPlayerMailCommand.prototype.email_too_long = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG));
  };
  CastleVerifyPlayerMailCommand.prototype.email_domain_blocked = function () {
    this.controller.dispatchEvent(new __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED));
  };
  Object.defineProperty(CastleVerifyPlayerMailCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleVerifyPlayerMailCommand;
}(__dep_exact_9e901e8e2483a22f.BasicVerifyPlayerMailCommand);
exports.CastleVerifyPlayerMailCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
