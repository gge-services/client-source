Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleStandardPayYesNoDialogProperties(__s3param0, __s3param1 = null, __s3param2 = null, __s3param3 = null, __s3param4 = "") {
    var __s3local0 = [];
    for (var __s3local1 = 5; __s3local1 < arguments.length; __s3local1++) {
      __s3local0[__s3local1 - 5] = arguments[__s3local1];
    }
    var __s3local2 = this;
    __s3local2.copy = "";
    __s3local2.title = "";
    CONSTRUCTOR_HACK;
    (__s3local2 = __s1param0.call(this) || this).functionClose = __s3param3;
    __s3local2.functionYes = __s3param1;
    __s3local2.functionNo = __s3param2;
    __s3local2.copy = __s3param0;
    __s3local2.args = __s3local0;
    __s3local2.characterName = __s3param4;
    return __s3local2;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStandardPayYesNoDialogProperties, __s1param0);
  CastleStandardPayYesNoDialogProperties.prototype.delegateText = function (__s7param0) {
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s7param0);
  };
  return CastleStandardPayYesNoDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleStandardPayYesNoDialogProperties = __s0local0;
