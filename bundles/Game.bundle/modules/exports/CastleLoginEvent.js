Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleLoginEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLoginEvent, __s1param0);
  CastleLoginEvent.__initialize_static_members = function () {
    CastleLoginEvent.LOGIN_PROCESS_COMPLETE = "login_process_complete";
    CastleLoginEvent.ON_GBD_ARRIVED = "onGbdArrived";
  };
  return CastleLoginEvent;
}(createjs.Event);
exports.CastleLoginEvent = __s0local0;
__s0local0.__initialize_static_members();
