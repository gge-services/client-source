Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function GeneralsEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsEvent, __s1param0);
  GeneralsEvent.GENERALS_UPDATED = "GENERALS_UPDATED";
  GeneralsEvent.GENERALS_HUB_UPDATED = "GENERALS_HUB_UPDATED";
  GeneralsEvent.GENERALS_HUB_REWARDS = "GENERALS_HUB_REWARDS";
  GeneralsEvent.GENERAL_UNLOCKED = "GENERAL_UNLOCKED";
  GeneralsEvent.GENERAL_STAR_UP = "GENERAL_STAR_UP";
  return GeneralsEvent;
}(createjs.Event);
exports.GeneralsEvent = __s0local0;
