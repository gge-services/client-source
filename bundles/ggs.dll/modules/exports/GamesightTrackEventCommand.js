Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.CORE_LOGGER);
var __s0local1 = function (__s1param0) {
  function GamesightTrackEventCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GamesightTrackEventCommand, __s1param0);
  GamesightTrackEventCommand.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.urlVariables.nativeStore == __dep_export_AssetLoadingFlowType.BasicConstants.NATIVE_STORE_MICROSOFT && __s5param0 && __dep_export_CSSMouseCursor.ExternalInterface.available) {
      var __s5local0 = {
        userId: __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId + "-" + __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId + "-" + __dep_export_AssetLoadingFlowType.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_export_AssetLoadingFlowType.BasicModel.userData.playerID
      };
      var __s5local1 = __s5param0;
      if (__s5local1) {
        __s5local1.userId = __s5local0.userId;
        if (__s5local1.additionalInfo) {
          __s5local1.additionalInfo.platform = "microsoft_store";
        } else {
          __s5local1.additionalInfo = {
            platform: "microsoft_store"
          };
        }
        __dep_export_CSSMouseCursor.ExternalInterface.call("gsghtTrackEvent", __s5local1.eventName, __s5local1);
        __s0local0.debug("Gamesight tracking: " + __s5local1.eventName + " " + JSON.stringify(__s5local1));
      }
    }
  };
  return GamesightTrackEventCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.GamesightTrackEventCommand = __s0local1;
