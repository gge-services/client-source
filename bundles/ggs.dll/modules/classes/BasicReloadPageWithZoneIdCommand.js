Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicClientCommand = require("gge-module:class_BasicClientCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function BasicReloadPageWithZoneIdCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicReloadPageWithZoneIdCommand, __s1param0);
  BasicReloadPageWithZoneIdCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (__s5local0) {
      __dep_class_BasicModel.BasicModel.networkCookie.instanceId = __s5local0.instanceId;
      __dep_class_BasicModel.BasicModel.networkCookie.zoneId = __s5local0.zoneId + "";
      if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
        __dep_export_CSSMouseCursor.ExternalInterface.call("ggsReloadGameClient");
      } else {
        location.reload();
      }
    }
  };
  return BasicReloadPageWithZoneIdCommand;
}(__dep_class_BasicClientCommand.BasicClientCommand);
exports.BasicReloadPageWithZoneIdCommand = __s0local0;
