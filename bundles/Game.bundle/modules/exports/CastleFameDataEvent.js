Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleFameDataEvent(__s3param0, __s3param1 = false, __s3param2 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFameDataEvent, __s1param0);
  CastleFameDataEvent.__initialize_static_members = function () {
    CastleFameDataEvent.UPDATE_DATA_FAME = "update_data_fame";
    CastleFameDataEvent.UPDATE_DATA_ALLY_FAME = "update_data_ally_fame";
    CastleFameDataEvent.UPDATE_DATA_HIGHESTFAMETITLE = "update_data_highestfametitle";
    CastleFameDataEvent.NEW_FAME_TITLE = "new_fame_title";
    CastleFameDataEvent.TITLE_CHANGED = "title_changed";
  };
  return CastleFameDataEvent;
}(createjs.Event);
exports.CastleFameDataEvent = __s0local0;
__s0local0.__initialize_static_members();
