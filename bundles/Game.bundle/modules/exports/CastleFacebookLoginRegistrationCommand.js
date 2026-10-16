Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleFacebookLoginRegistrationCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFacebookLoginRegistrationCommand, __s1param0);
  CastleFacebookLoginRegistrationCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleModel.CastleModel.localData.saveLoginData("", "");
    __dep_export_CastleModel.CastleModel.localData.saveFacebookID(__dep_export_CastleFacebookModule.CastleFacebookModule.userID);
    if (!!__dep_export_CastleFacebookModule.CastleFacebookModule.accessToken && __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken != "" && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isSpecialServerConnectStarted && !__dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  };
  return CastleFacebookLoginRegistrationCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.CastleFacebookLoginRegistrationCommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
