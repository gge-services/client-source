Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_96cf9add7e28ef3a = require("gge-module:exact_96cf9add7e28ef3a");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __s0local0 = function (__s1param0) {
  function BasicCheckAgeGateActivityCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicCheckAgeGateActivityCommand, __s1param0);
  BasicCheckAgeGateActivityCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (!__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.ageGateFeatureIsActive) {
      __dep_exact_9036b0ddd67c3c6e.debug("AgeGate feature is not activated");
      __dep_class_BasicModel.BasicModel.ageGateData.isAgeGateActive = false;
      return;
    }
    if (__s5local0.ggsCountryCode == __dep_exact_96cf9add7e28ef3a.CountryCodes.USA) {
      var __s5local1 = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountCookie.ageGateData;
      __dep_class_BasicModel.BasicModel.ageGateData.isAgeGateActive = !__s5local1;
    }
    __dep_exact_9036b0ddd67c3c6e.debug("isAgeGateActive: " + __dep_class_BasicModel.BasicModel.ageGateData.isAgeGateActive);
  };
  return BasicCheckAgeGateActivityCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicCheckAgeGateActivityCommand = __s0local0;
