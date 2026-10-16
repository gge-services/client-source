Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = function (__s1param0) {
  function HTTPStatusEvent(__s3param0, __s3param1 = false, __s3param2 = false, __s3param3 = 0, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0.type = __s3param0;
    __s3local0.bubbles = __s3param1;
    __s3local0.cancelable = __s3param2;
    __s3local0.status = __s3param3;
    __s3local0.redirected = __s3param4;
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(HTTPStatusEvent, __s1param0);
  HTTPStatusEvent.prototype.clone = function () {
    return new HTTPStatusEvent(this.type, this.bubbles, this.cancelable, this.status, this.redirected);
  };
  HTTPStatusEvent.HTTP_STATUS = "httpStatus";
  HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
  return HTTPStatusEvent;
}(createjs.Event);
exports.HTTPStatusEvent = __s0local0;
