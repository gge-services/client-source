Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AgeGateValidator = require("gge-module:class_AgeGateValidator");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __s0local0 = function (__s1param0) {
  function BasicValidateAgeCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicValidateAgeCommand, __s1param0);
  BasicValidateAgeCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (!__s5local0) {
      __dep_exact_048b0d27b75c40dd.error("AgeGateValidationVO is null");
    }
    var __s5local1 = __dep_class_AgeGateValidator.AgeGateValidator.validate(__s5local0.age);
    __dep_class_BasicModel.BasicModel.ageGateData.validationSucceeded = __s5local1;
    if (__dep_class_BasicModel.BasicModel.ageGateData.validationSucceeded) {
      __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountCookie.ageGateData = __s5local0.age.toString();
    }
    __dep_exact_9036b0ddd67c3c6e.debug("Validate age: " + __s5local0.age + ", Validation successful: " + __dep_class_BasicModel.BasicModel.ageGateData.validationSucceeded);
    __s5local0.onValidationFinished(__s5local1);
    __s5local0.onValidationFinished = null;
    __s5local0 = null;
  };
  return BasicValidateAgeCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicValidateAgeCommand = __s0local0;
