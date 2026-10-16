Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function MonumentEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MonumentEvent, __s1param0);
  MonumentEvent.__initialize_static_members = function () {
    MonumentEvent.MONUMENTS_RESET_WARNING = "monuments_reset_warning";
    MonumentEvent.MONUMENT_UPDATED = "monument_updated";
  };
  return MonumentEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.MonumentEvent = __s0local0;
__s0local0.__initialize_static_members();
