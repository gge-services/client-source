Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = function (__s1param0) {
  function FullScreenEvent(__s3param0, __s3param1 = false, __s3param2 = false, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._fullScreen = __s3param3;
    __s3local0._interactive = __s3param4;
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(FullScreenEvent, __s1param0);
  Object.defineProperty(FullScreenEvent.prototype, "fullScreen", {
    get: function () {
      return this._fullScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FullScreenEvent.prototype, "interactive", {
    get: function () {
      return this._interactive;
    },
    enumerable: true,
    configurable: true
  });
  FullScreenEvent.prototype.clone = function () {
    return new FullScreenEvent(this.type, this.bubbles, this.cancelable, this._fullScreen, this._interactive);
  };
  FullScreenEvent.FULL_SCREEN = "fullScreen";
  FullScreenEvent.FULL_SCREEN_INTERACTIVE_ACCEPTED = "fullScreenInteractiveAccepted";
  return FullScreenEvent;
}(createjs.Event);
exports.FullScreenEvent = __s0local0;
