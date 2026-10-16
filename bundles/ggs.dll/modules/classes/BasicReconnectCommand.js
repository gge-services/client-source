Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicDialogHandler = require("gge-module:class_BasicDialogHandler");
var __s0local0 = function (__s1param0) {
  function BasicReconnectCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicReconnectCommand, __s1param0);
  BasicReconnectCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_BasicDialogHandler.BasicDialogHandler.getInstance().destroy();
    __dep_class_BasicController.BasicController.getInstance().paymentHash = null;
  };
  return BasicReconnectCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicReconnectCommand = __s0local0;
