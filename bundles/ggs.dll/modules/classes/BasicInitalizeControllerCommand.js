Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __s0local0 = function (__s1param0) {
  function BasicInitalizeControllerCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInitalizeControllerCommand, __s1param0);
  BasicInitalizeControllerCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_INIT_SERVERCOMMANDS);
    this.initializeGameControllers();
  };
  BasicInitalizeControllerCommand.prototype.initializeGameControllers = function () {};
  BasicInitalizeControllerCommand.prototype.initSoundController = function (__s9param0) {
    __dep_class_BasicController.BasicController.getInstance().soundController = __s9param0;
    __dep_class_BasicController.BasicController.getInstance().soundController.initialize();
  };
  return BasicInitalizeControllerCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicInitalizeControllerCommand = __s0local0;
