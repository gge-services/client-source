Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleFacebookSDKEvent = require("gge-module:export_CastleFacebookSDKEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleFacebookSwitchToCachedAccountCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFacebookSwitchToCachedAccountCommand, __s1param0);
  CastleFacebookSwitchToCachedAccountCommand.prototype.execute = function (__s5param0 = null) {
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGOUT);
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CONNECT_CLIENT);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onGetFacebookStatus));
    __dep_export_CastleFacebookModule.CastleFacebookModule.checkLoginStatus();
  };
  CastleFacebookSwitchToCachedAccountCommand.prototype.onGetFacebookStatus = function (__s7param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onGetFacebookStatus));
    __dep_export_CastleModel.CastleModel.localData.saveFacebookID(__s7param0.authResponse.userID);
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGIN);
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
  };
  return CastleFacebookSwitchToCachedAccountCommand;
}(__dep_exact_9e901e8e2483a22f_2.SimpleCommand);
exports.CastleFacebookSwitchToCachedAccountCommand = __s0local0;
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
