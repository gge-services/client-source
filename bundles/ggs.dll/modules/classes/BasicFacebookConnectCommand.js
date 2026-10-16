Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_FacebookSettings = require("gge-module:class_FacebookSettings");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function BasicFacebookConnectCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicFacebookConnectCommand, __s1param0);
  BasicFacebookConnectCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CSSMouseCursor.ExternalInterface.addCallback(__dep_class_FacebookSettings.FacebookSettings.FACEBOOK_CALLBACK_NAME, this.bindFunction(this.jsFacebookLoginCallback));
    __dep_export_CSSMouseCursor.ExternalInterface.call(__dep_class_FacebookSettings.FacebookSettings.FACEBOOK_JS_LOGIN_METHOD, BasicFacebookConnectCommand.gameID);
  };
  BasicFacebookConnectCommand.prototype.jsFacebookLoginCallback = function (__s7param0, __s7param1, __s7param2, __s7param3) {};
  return BasicFacebookConnectCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicFacebookConnectCommand = __s0local0;
