Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleResourceCollectorEvent(__s3param0, __s3param1 = true, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0.newValue = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceCollectorEvent, __s1param0);
  CastleResourceCollectorEvent.__initialize_static_members = function () {
    CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY = "castleresourcecollectorvaluechange";
  };
  return CastleResourceCollectorEvent;
}(createjs.Event);
exports.CastleResourceCollectorEvent = __s0local0;
__s0local0.__initialize_static_members();
