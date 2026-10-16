Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicReportSurveyCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicReportSurveyCommand, __s1param0);
  BasicReportSurveyCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0[0];
    var __s5local1 = __s5param0[1];
    var __s5local2 = __s5param0[2];
    var __s5local3 = __s5param0[3];
    var __s5local4 = __s5param0[4];
    var __s5local5 = __s5param0[5];
    var __s5local6 = __s5param0[6];
    var __s5local7 = __s5param0[7];
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_REPORT_SURVEY, [__s5local0, __s5local1, __s5local2, __s5local3, __s5local4, __s5local5 ? 1 : 0, __s5local6 ? 1 : 0, JSON.stringify(__s5local7)]);
  };
  return BasicReportSurveyCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicReportSurveyCommand = __s0local0;
