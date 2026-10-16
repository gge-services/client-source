Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function ABTest_Refresh_Event(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABTest_Refresh_Event, __s1param0);
  ABTest_Refresh_Event.__initialize_static_members = function () {
    ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT = "refresh_ab_tests_event";
  };
  return ABTest_Refresh_Event;
}(require("gge-module:exact_9e901e8e2483a22f").TestCaseInfoEvent);
exports.ABTest_Refresh_Event = __s0local0;
__s0local0.__initialize_static_members();
