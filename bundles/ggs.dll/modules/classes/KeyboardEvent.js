Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = function (__s1param0) {
  function KeyboardEvent(__s3param0, __s3param1 = true, __s3param2 = false, __s3param3 = 0, __s3param4 = "") {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0.charCode = 0;
    __s3local0.altKey = false;
    __s3local0.ctrlKey = false;
    __s3local0.shiftKey = false;
    __s3local0.keyCode = __s3param4;
    __s3local0.charCode = __s3param3;
    __s3local0.key = __s3param4;
    __s3local0.code = __s3param4;
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(KeyboardEvent, __s1param0);
  KeyboardEvent.prototype.clone = function () {
    return Object.assign(new KeyboardEvent(this.type, this.bubbles, this.cancelable), this);
  };
  KeyboardEvent.KEY_UP = "keyUp";
  KeyboardEvent.KEY_DOWN = "keyDown";
  return KeyboardEvent;
}(createjs.Event);
exports.KeyboardEvent = __s0local0;
