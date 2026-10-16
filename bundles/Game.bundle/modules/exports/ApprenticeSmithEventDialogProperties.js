Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function ApprenticeSmithEventDialogProperties(__s3param0, __s3param1 = -1, __s3param2 = 0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.highlightPackageId = 0;
    __s3local0.eventID = 0;
    __s3local0.buyPackageEventVO = __s3param0;
    __s3local0.highlightPackageId = __s3param1;
    __s3local0.eventID = __s3param2 > 0 ? __s3param2 : __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ApprenticeSmithEventDialogProperties, __s1param0);
  return ApprenticeSmithEventDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.ApprenticeSmithEventDialogProperties = __s0local0;
