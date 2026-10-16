Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function BasicUserEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicUserEvent, __s1param0);
  BasicUserEvent.LOGGEDIN_TIME_INTERVAL = "loggedintimeinterval";
  BasicUserEvent.REGISTERED = "registered";
  return BasicUserEvent;
}(createjs.Event);
exports.BasicUserEvent = __s0local0;
