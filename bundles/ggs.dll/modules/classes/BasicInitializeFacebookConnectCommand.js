Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_FacebookSettings = require("gge-module:class_FacebookSettings");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_ExportToWindowDebuggerClass = require("gge-module:class_ExportToWindowDebuggerClass");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function BasicInitializeFacebookConnectCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInitializeFacebookConnectCommand, __s1param0);
  BasicInitializeFacebookConnectCommand.prototype.loadJS = function (__s5param0) {};
  BasicInitializeFacebookConnectCommand.prototype.checkIfJsFunctionExists = function (__s7param0) {
    return false;
  };
  BasicInitializeFacebookConnectCommand.prototype.execute = function (__s9param0 = null) {
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      if (!this.checkIfJsFunctionExists(__dep_class_FacebookSettings.FacebookSettings.FACEBOOK_JS_LOGIN_METHOD)) {
        this.loadJS(__dep_class_FacebookSettings.FacebookSettings.FACEBOOK_JS_PATH);
      }
    }
  };
  __dep_exact_b45c75bfe6706b06.__decorate([__dep_class_ExportToWindowDebuggerClass.commentedOut("", "Facebook Connect - ExternalInterface - Page Integration stuff"), __dep_exact_b45c75bfe6706b06.__metadata("design:type", Function), __dep_exact_b45c75bfe6706b06.__metadata("design:paramtypes", [String]), __dep_exact_b45c75bfe6706b06.__metadata("design:returntype", undefined)], BasicInitializeFacebookConnectCommand.prototype, "loadJS", null);
  return BasicInitializeFacebookConnectCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicInitializeFacebookConnectCommand = __s0local0;
