Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AdvisorActivationEvent(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0._advisorType = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorActivationEvent, __s1param0);
  Object.defineProperty(AdvisorActivationEvent.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED = "ADVISOR_ACTIVATION_CHANGED";
  return AdvisorActivationEvent;
}(createjs.Event);
exports.AdvisorActivationEvent = __s0local0;
