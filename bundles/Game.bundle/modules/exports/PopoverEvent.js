Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function PopoverEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PopoverEvent, __s1param0);
  PopoverEvent.ON_NEW_POPOVER_ARRIVED = "onNewPopoverArrived";
  return PopoverEvent;
}(createjs.Event);
exports.PopoverEvent = __s0local0;
