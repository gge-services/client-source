Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_VersionErrorLOFactory = require("gge-module:class_VersionErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicErrorConstants = require("gge-module:class_BasicErrorConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_ServerErrorVO = require("gge-module:class_ServerErrorVO");
var __s0local0 = function (__s1param0) {
  function VCKCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(VCKCommand, __s1param0);
  Object.defineProperty(VCKCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_VERSION_CHECK;
    },
    enumerable: true,
    configurable: true
  });
  VCKCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    this.env.buildNumberServer = __s7param1[2];
    this.env.versionInformation.buildNumberServer = __s7param1[2];
    if (__s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.ALL_OK) {
      this.handleAllOk();
    } else if (__s7param0 == VCKCommand.VERSION_TOO_LOW) {
      this.handleVersionToLow();
      this.logError(__s7param0);
    } else if (__s7param0 == VCKCommand.VERSION_TOO_HIGH) {
      this.handleVersionToHigh();
      this.logError(__s7param0);
    } else {
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_class_ServerErrorVO.ServerErrorVO(__s7param0, __s7param1, this.cmdId));
      this.logError(__s7param0);
    }
    return false;
  };
  VCKCommand.prototype.handleAllOk = function () {
    if (this.env.isSSO) {
      __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_SOCIAL_PLAYER_EXISTS, [this.env.pln, this.env.sig]);
    } else {
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.CHOOSE_LOGIN_METHOD);
    }
  };
  VCKCommand.prototype.logError = function (__s17param0) {
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_VersionErrorLOFactory.VersionErrorLOFactory(__dep_class_VersionErrorLOFactory.VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR, this.env.buildNumberServer));
  };
  VCKCommand.prototype.handleVersionToLow = function () {};
  VCKCommand.prototype.handleVersionToHigh = function () {};
  VCKCommand.VERSION_TOO_LOW = 1;
  VCKCommand.VERSION_TOO_HIGH = 2;
  return VCKCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.VCKCommand = __s0local0;
