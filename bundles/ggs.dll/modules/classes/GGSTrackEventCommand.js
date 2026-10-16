Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function GGSTrackEventCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GGSTrackEventCommand, __s1param0);
  GGSTrackEventCommand.prototype.execute = function (__s5param0) {
    if (__s5param0) {
      var __s5local0 = {
        userid: __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId + "-" + __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId + "-" + __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_class_BasicModel.BasicModel.userData.playerID
      };
      if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
        __dep_export_CSSMouseCursor.ExternalInterface.call("ggsTrackEvent", __s5param0, __s5local0);
      }
    }
  };
  return GGSTrackEventCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.GGSTrackEventCommand = __s0local0;
