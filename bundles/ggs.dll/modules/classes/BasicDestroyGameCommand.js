Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GoodgameTextFieldManager = require("gge-module:class_GoodgameTextFieldManager");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicDialogHandler = require("gge-module:class_BasicDialogHandler");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __s0local0 = function (__s1param0) {
  function BasicDestroyGameCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicDestroyGameCommand, __s1param0);
  BasicDestroyGameCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_BasicController.BasicController.getInstance().onDestroyGame();
    __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().clearAllLayoutContent();
    __dep_class_BasicDialogHandler.BasicDialogHandler.getInstance().destroy();
    if (!__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.useLegacyFontManagement) {
      __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance().unregisterAllTextFields();
    }
    this.destroyGameSpecificObjects();
  };
  BasicDestroyGameCommand.prototype.destroyGameSpecificObjects = function () {};
  return BasicDestroyGameCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicDestroyGameCommand = __s0local0;
