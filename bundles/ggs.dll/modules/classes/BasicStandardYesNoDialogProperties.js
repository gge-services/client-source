Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GenericTextIds = require("gge-module:class_GenericTextIds");
var __dep_class_BasicProperties = require("gge-module:class_BasicProperties");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function (__s1param0) {
  function BasicStandardYesNoDialogProperties(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null, __s3param4 = null, __s3param5 = "", __s3param6 = "") {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.buttonLabel_yes = "Yes";
    __s3local0.buttonLabel_no = "No";
    __s3local0.copy = "";
    __s3local0.title = "";
    __s3local0.functionClose = __s3param4;
    __s3local0.functionYes = __s3param2;
    __s3local0.functionNo = __s3param3;
    if (__s3param5.length > 0) {
      __s3local0.buttonLabel_yes = __s3param5;
    } else {
      __s3local0.buttonLabel_yes = __s3local0.delegateText(__dep_class_GenericTextIds.GenericTextIds.BUTTON_YES);
    }
    if (__s3param6.length > 0) {
      __s3local0.buttonLabel_no = __s3param6;
    } else {
      __s3local0.buttonLabel_no = __s3local0.delegateText(__dep_class_GenericTextIds.GenericTextIds.BUTTON_NO);
    }
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicStandardYesNoDialogProperties, __s1param0);
  BasicStandardYesNoDialogProperties.prototype.delegateText = function (__s9param0) {
    return __dep_opaque_c83528567256175cfb346d7d.Localize.text(__s9param0);
  };
  return BasicStandardYesNoDialogProperties;
}(__dep_class_BasicProperties.BasicProperties);
exports.BasicStandardYesNoDialogProperties = __s0local0;
