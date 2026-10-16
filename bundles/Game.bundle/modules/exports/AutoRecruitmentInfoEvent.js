Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentInfoEvent(__s3param0, __s3param1, __s3param2, __s3param3 = true, __s3param4 = false) {
    var __s3local0 = this;
    __s3local0.response = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this).response = __s3param1;
    __s3local0.serverData = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentInfoEvent, __s1param0);
  AutoRecruitmentInfoEvent.__initialize_static_members = function () {
    AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO = "onDuplicateRecruitmentInfo";
  };
  return AutoRecruitmentInfoEvent;
}(createjs.Event);
exports.AutoRecruitmentInfoEvent = __s0local0;
__s0local0.__initialize_static_members();
