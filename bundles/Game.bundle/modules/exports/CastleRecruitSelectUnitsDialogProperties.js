Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleRecruitSelectUnitsDialogProperties(__s3param0, __s3param1, __s3param2 = null, __s3param3 = true, __s3param4 = false) {
    var __s3local0 = this;
    __s3local0.maxUnits = 0;
    __s3local0.updateCompleteComponent = false;
    __s3local0.isHospitalDialog = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).unitVO = __s3param0;
    __s3local0.maxUnits = __s3param1;
    __s3local0.confirmCallback = __s3param2;
    __s3local0.updateCompleteComponent = __s3param3;
    __s3local0.isHospitalDialog = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitSelectUnitsDialogProperties, __s1param0);
  return CastleRecruitSelectUnitsDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleRecruitSelectUnitsDialogProperties = __s0local0;
