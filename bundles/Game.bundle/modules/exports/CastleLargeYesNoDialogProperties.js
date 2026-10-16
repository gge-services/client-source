Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleLargeYesNoDialogProperties(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null, __s3param4 = null, __s3param5 = "", __s3param6 = "", __s3param7 = true) {
    var __s3local0 = this;
    __s3local0.buttonLabel_yes = "Yes";
    __s3local0.buttonLabel_no = "No";
    __s3local0.copy = "";
    __s3local0.title = "";
    __s3local0.hasNoButton = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).functionClose = __s3param4;
    __s3local0.functionYes = __s3param2;
    __s3local0.functionNo = __s3param3;
    if (__s3param5.length > 0) {
      __s3local0.buttonLabel_yes = __s3param5;
    } else {
      __s3local0.buttonLabel_yes = __s3local0.delegateText(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.BUTTON_YES);
    }
    if (__s3param6.length > 0) {
      __s3local0.buttonLabel_no = __s3param6;
    } else {
      __s3local0.buttonLabel_no = __s3local0.delegateText(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.BUTTON_NO);
    }
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    __s3local0.hasNoButton = __s3param7;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLargeYesNoDialogProperties, __s1param0);
  CastleLargeYesNoDialogProperties.prototype.delegateText = function (__s9param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.languageData.getTextById(__s9param0);
  };
  return CastleLargeYesNoDialogProperties;
}(__dep_exact_9e901e8e2483a22f_1.BasicProperties);
exports.CastleLargeYesNoDialogProperties = __s0local0;
