Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LaboratoryEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LaboratoryEvent, __s1param0);
  LaboratoryEvent.__initialize_static_members = function () {
    LaboratoryEvent.LABORATORY_RESET_WARNING = "laboratory_reset_warning";
    LaboratoryEvent.LABORATORY_UPDATED = "laboratory_updated";
    LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED = "laboratories_alliance_updated";
  };
  return LaboratoryEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.LaboratoryEvent = __s0local0;
__s0local0.__initialize_static_members();
