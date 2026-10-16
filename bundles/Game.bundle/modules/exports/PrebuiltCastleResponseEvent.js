Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function PrebuiltCastleResponseEvent(__s3param0) {
    var __s3local0 = this;
    __s3local0.isError = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, PrebuiltCastleResponseEvent.RESPONSE, false, false) || this).isError = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrebuiltCastleResponseEvent, __s1param0);
  PrebuiltCastleResponseEvent.__initialize_static_members = function () {
    PrebuiltCastleResponseEvent.RESPONSE = "response";
  };
  return PrebuiltCastleResponseEvent;
}(createjs.Event);
exports.PrebuiltCastleResponseEvent = __s0local0;
__s0local0.__initialize_static_members();
