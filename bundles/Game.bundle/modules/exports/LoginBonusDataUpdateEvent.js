Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LoginBonusDataUpdateEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LoginBonusDataUpdateEvent, __s1param0);
  LoginBonusDataUpdateEvent.__initialize_static_members = function () {
    LoginBonusDataUpdateEvent.LOGIN_BONUS_UPDATED = "login_bonus_updated";
    LoginBonusDataUpdateEvent.LOGIN_BONUS_COLLECT_FAILED = "login_bonus_collect_failed";
  };
  return LoginBonusDataUpdateEvent;
}(createjs.Event);
exports.LoginBonusDataUpdateEvent = __s0local0;
__s0local0.__initialize_static_members();
