Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = function (__s1param0) {
  function SPECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SPECommand, __s1param0);
  Object.defineProperty(SPECommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SOCIAL_PLAYER_EXISTS;
    },
    enumerable: true,
    configurable: true
  });
  SPECommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    var __s7local0;
    __dep_exact_39c566239c224ca4.info("error: " + __s7param0 + ", params: " + __s7param1);
    if (__s7param0 == SPECommand.PLAYER_DOES_NOT_EXIST) {
      __s7local0 = "";
    } else if (__s7param0 == SPECommand.PLAYER_EXISTS) {
      this.env.isFirstVisit = false;
      __s7local0 = __s7param1[1];
    }
    __dep_class_BasicModel.BasicModel.socialData.setDisplayNameExistingPlayer(__s7local0);
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.CHOOSE_LOGIN_METHOD);
    return false;
  };
  SPECommand.PLAYER_DOES_NOT_EXIST = 0;
  SPECommand.PLAYER_EXISTS = 1;
  return SPECommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.SPECommand = __s0local0;
