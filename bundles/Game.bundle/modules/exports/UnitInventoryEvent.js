Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function UnitInventoryEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitInventoryEvent, __s1param0);
  UnitInventoryEvent.__initialize_static_members = function () {
    UnitInventoryEvent.UPDATED = "updated";
  };
  return UnitInventoryEvent;
}(createjs.Event);
exports.UnitInventoryEvent = __s0local0;
__s0local0.__initialize_static_members();
