Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleRegisterErrorEvent(__s3param0, __s3param1, __s3param2 = null, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).errorType = __s3param1;
    __s3local0.params = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRegisterErrorEvent, __s1param0);
  CastleRegisterErrorEvent.__initialize_static_members = function () {
    CastleRegisterErrorEvent.REGISTER_ERROR = "REGISTER_ERROR";
    CastleRegisterErrorEvent.EMAIL_ALREADY_IN_USE = "EMAIL_ALREADY_IN_USE";
    CastleRegisterErrorEvent.INVALID_EMAIL = "INVALID_EMAIL";
    CastleRegisterErrorEvent.INVALID_PASSWORD = "INVALID_PASSWORD";
    CastleRegisterErrorEvent.INVALID_NAME = "INVALID_NAME";
    CastleRegisterErrorEvent.NAME_ALREADY_IN_USE = "NAME_ALREADY_IN_USE";
    CastleRegisterErrorEvent.NAME_USES_BADWORD = "NAME_USES_BADWORD";
    CastleRegisterErrorEvent.INVALID_LOGIN_FIELD = "INVALID_LOGIN_FIELD";
    CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS = "NAME_HAS_ONLY_NUMBERS";
    CastleRegisterErrorEvent.USAGE_OF_BADWORDS = "USAGE_OF_BADWORDS";
    CastleRegisterErrorEvent.LLI_ERROR = "LLI_ERROR";
  };
  return CastleRegisterErrorEvent;
}(createjs.Event);
exports.CastleRegisterErrorEvent = __s0local0;
__s0local0.__initialize_static_members();
