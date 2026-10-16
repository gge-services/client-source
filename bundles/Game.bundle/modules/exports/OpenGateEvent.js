Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function OpenGateEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.params = null;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenGateEvent, __s1param0);
  OpenGateEvent.__initialize_static_members = function () {
    OpenGateEvent.CHANGE_OPEN_GATE_COUNTER = "changeOpenGateCounter";
    OpenGateEvent.OPEN_GATE_FINISHED = "finishedopengate";
    OpenGateEvent.OPEN_GATE_CHANGED = "changedopengate";
  };
  return OpenGateEvent;
}(createjs.Event);
exports.OpenGateEvent = __s0local0;
__s0local0.__initialize_static_members();
