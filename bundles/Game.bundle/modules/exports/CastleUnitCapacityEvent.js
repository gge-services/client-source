Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleUnitCapacityEvent(__s3param0, __s3param1, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.capacity = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).capacity = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnitCapacityEvent, __s1param0);
  CastleUnitCapacityEvent.__initialize_static_members = function () {
    CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED = "UNIT_CAPACITY_CHANGED";
  };
  return CastleUnitCapacityEvent;
}(createjs.Event);
exports.CastleUnitCapacityEvent = __s0local0;
__s0local0.__initialize_static_members();
