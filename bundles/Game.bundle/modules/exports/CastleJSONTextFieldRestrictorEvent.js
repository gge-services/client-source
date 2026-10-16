Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleJSONTextFieldRestrictorEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.newTextLength = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).newTextLength = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleJSONTextFieldRestrictorEvent, __s1param0);
  CastleJSONTextFieldRestrictorEvent.__initialize_static_members = function () {
    CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED = "textchanged";
    CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED = "textlimitreached";
    CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED = "textlimitexceeded";
  };
  return CastleJSONTextFieldRestrictorEvent;
}(createjs.Event);
exports.CastleJSONTextFieldRestrictorEvent = __s0local0;
__s0local0.__initialize_static_members();
