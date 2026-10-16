Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicSmartfoxClient = require("gge-module:class_BasicSmartfoxClient");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_ClientFunnelTrackingController = require("gge-module:class_ClientFunnelTrackingController");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicJoinedRoomCommand");
var __s0local1 = function (__s1param0) {
  function BasicJoinedRoomCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicJoinedRoomCommand, __s1param0);
  BasicJoinedRoomCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (__s5local0.params[0] === __dep_class_BasicSmartfoxClient.BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.VERSION_CHECK_SEND);
      __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_VERSION_CHECK, [__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.buildNumberGame, "web-html5", "", __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sessionId]);
    } else {
      __s0local0.error("Joined room name != " + __dep_class_BasicSmartfoxClient.BasicSmartfoxClient.LOBBY_ROOM_NAME + " : " + __s5local0.params[0]);
    }
  };
  return BasicJoinedRoomCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicJoinedRoomCommand = __s0local1;
