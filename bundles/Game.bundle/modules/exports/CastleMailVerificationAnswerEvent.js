Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleMailVerificationAnswerEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.status = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).status = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMailVerificationAnswerEvent, __s1param0);
  CastleMailVerificationAnswerEvent.__initialize_static_members = function () {
    CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER = "MAIL_VERIFICATION_ANSWER";
    CastleMailVerificationAnswerEvent.ALL_OK = 0;
    CastleMailVerificationAnswerEvent.GENERAL_ERROR = 1;
    CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED = 3;
    CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE = 4;
    CastleMailVerificationAnswerEvent.EMAIL_BLOCKED = 5;
    CastleMailVerificationAnswerEvent.EMAIL_INVALID = 6;
    CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG = 7;
    CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED = 8;
  };
  return CastleMailVerificationAnswerEvent;
}(createjs.Event);
exports.CastleMailVerificationAnswerEvent = __s0local0;
__s0local0.__initialize_static_members();
