Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicProperties = require("gge-module:class_BasicProperties");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function (__s1param0) {
  function BasicMissingIDCheckDialogProperties(__s3param0, __s3param1, __s3param2 = null, __s3param3 = "", __s3param4 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.buttonLabel_IDckeck = "ID-Check";
    __s3local0.title = "";
    __s3local0.copy = "";
    __s3local0.functionCheckID = __s3param2;
    __s3local0.functionCancel = __s3param4;
    if (__s3param3.length > 0) {
      __s3local0.buttonLabel_IDckeck = __s3param3;
    } else {
      __s3local0.buttonLabel_IDckeck = __s3local0.delegateText("generic_btn_korea_idcheck");
    }
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicMissingIDCheckDialogProperties, __s1param0);
  BasicMissingIDCheckDialogProperties.prototype.delegateText = function (__s7param0) {
    return __dep_opaque_c83528567256175cfb346d7d.Localize.text(__s7param0);
  };
  return BasicMissingIDCheckDialogProperties;
}(__dep_class_BasicProperties.BasicProperties);
exports.BasicMissingIDCheckDialogProperties = __s0local0;
