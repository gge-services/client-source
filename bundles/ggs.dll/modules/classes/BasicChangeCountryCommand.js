Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_BasicClientCommand = require("gge-module:class_BasicClientCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("Connection.BasicChangeCountryCommand");
var __s0local1 = function (__s1param0) {
  function BasicChangeCountryCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicChangeCountryCommand, __s1param0);
  BasicChangeCountryCommand.prototype.execute = function (__s5param0) {
    if (__s5param0) {
      var __s5local0 = window.ggs.worldAssignment;
      var __s5local1 = __dep_class_BasicModel.BasicModel.instanceProxy;
      var __s5local2 = __s5local0.facade.currentCountry;
      __s0local0.debug("currentInstance:  " + __s5local1.selectedInstanceVO.instanceId + " currentCountry.ggsCountryCode " + __s5local2.ggsCountryCode + "  --> newCountry.ggsCountryCode " + __s5param0.ggsCountryCode);
      if (__s5local2.ggsCountryCode !== __s5param0.ggsCountryCode) {
        this.env.customCDN = __s5param0.cdn;
        __dep_class_BasicModel.BasicModel.networkCookie.country = __s5param0.ggsCountryCode;
        if (this.env.accountCookie != null) {
          this.env.accountCookie.cdn = this.env.activeCDN;
        }
        var __s5local3 = __s5local0.selectInstanceByCountry(__s5param0);
        __s0local0.info("based on country " + __s5param0.ggsCountryCode + " WorldAssignment found instance " + __s5local3.instanceId + " --> " + __s5local3.ip, __s5local3);
        __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s5local3);
        __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_CHANGE_LANGUAGE, __s5param0.ggsCountryCode);
      } else {
        __s0local0.warn("same country was selected.  ignoring command");
      }
    } else {
      __s0local0.warn("cant change country if no country is passed!");
    }
  };
  return BasicChangeCountryCommand;
}(__dep_class_BasicClientCommand.BasicClientCommand);
exports.BasicChangeCountryCommand = __s0local1;
