Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleBuddyListDataEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuddyListDataEvent, __s1param0);
  CastleBuddyListDataEvent.__initialize_static_members = function () {
    CastleBuddyListDataEvent.CHANGE_BUDDYDATA = "changebuddydata";
  };
  return CastleBuddyListDataEvent;
}(createjs.Event);
exports.CastleBuddyListDataEvent = __s0local0;
__s0local0.__initialize_static_members();
