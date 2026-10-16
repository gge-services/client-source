Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __s0local0 = function (__s1param0) {
  function CastleNetworkUpdateCommand() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNetworkUpdateCommand, __s1param0);
  CastleNetworkUpdateCommand.prototype.execute = function (__s5param0 = null) {
    if (this.env.useAutoLogin && __dep_export_CastleModel.CastleModel.localData.hasInstanceId) {
      __dep_exact_9e901e8e2483a22f_3.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_2.ClientFunnelGameStates.LOGIN_COOKIE_READ);
      __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGIN);
      __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
    }
  };
  return CastleNetworkUpdateCommand;
}(__dep_exact_9e901e8e2483a22f_1.BasicNetworkUpdateCommand);
exports.CastleNetworkUpdateCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
