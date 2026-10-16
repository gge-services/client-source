Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleXPChangedEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.previousXP = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).previousXP = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleXPChangedEvent, __s1param0);
  CastleXPChangedEvent.__initialize_static_members = function () {
    CastleXPChangedEvent.CHANGE_USER_XP = "changeUserXP";
  };
  return CastleXPChangedEvent;
}(createjs.Event);
exports.CastleXPChangedEvent = __s0local0;
__s0local0.__initialize_static_members();
