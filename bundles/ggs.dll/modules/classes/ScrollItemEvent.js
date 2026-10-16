Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function ScrollItemEvent(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = false, __s3param5 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param4, __s3param5) || this;
    __s3local0.originEvent = __s3param3;
    __s3local0.scrollItem = __s3param1;
    __s3local0.originTarget = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ScrollItemEvent, __s1param0);
  ScrollItemEvent.prototype.clone = function () {
    return new ScrollItemEvent(this.type, this.scrollItem, this.originTarget, this.originEvent, this.bubbles, this.cancelable);
  };
  ScrollItemEvent.CLICK = "click";
  ScrollItemEvent.ROLL_OVER = "roll_over";
  ScrollItemEvent.ROLL_OUT = "roll_out";
  ScrollItemEvent.ON_SCROLL = "on_scroll";
  ScrollItemEvent.TOUCH_DOWN = "touch_down";
  ScrollItemEvent.TOUCH_UP = "touch_up";
  ScrollItemEvent.TOUCH_DRAG_START = "touch_drag_start";
  ScrollItemEvent.TOUCH_DRAG_END = "touch_drag_end";
  return ScrollItemEvent;
}(createjs.Event);
exports.ScrollItemEvent = __s0local0;
