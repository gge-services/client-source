Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function IdleScreenEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(IdleScreenEvent, __s1param0);
  IdleScreenEvent.SHOW = "showIdleScreen";
  IdleScreenEvent.HIDE = "hideIdleScreen";
  return IdleScreenEvent;
}(createjs.Event);
exports.IdleScreenEvent = __s0local0;
