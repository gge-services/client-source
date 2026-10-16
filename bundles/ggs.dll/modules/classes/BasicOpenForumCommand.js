Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BrowserUtil = require("gge-module:class_BrowserUtil");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_JavascriptFunctionName = require("gge-module:class_JavascriptFunctionName");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicOpenForumCommand");
var __s0local1 = function (__s1param0) {
  function BasicOpenForumCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicOpenForumCommand, __s1param0);
  BasicOpenForumCommand.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkNewsByJS) {
      __dep_export_CSSMouseCursor.ExternalInterface.call(__dep_class_JavascriptFunctionName.JavascriptFunctionName.REQUEST_GROUP);
    } else if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.useexternallinks) {
      this.goForum();
    } else {
      __s0local0.debug("BasicOpenForumCommand - unhandled else case");
    }
  };
  BasicOpenForumCommand.prototype.goForum = function () {
    var __s10local0;
    __s10local0 = __dep_class_BasicModel.BasicModel.forumData.getForumRootURL();
    var __s10local1 = new __dep_export_CSSMouseCursor.URLRequest(__s10local0);
    __dep_class_BrowserUtil.BrowserUtil.executeNavigateToURL(__s10local1, "_blank");
  };
  return BasicOpenForumCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicOpenForumCommand = __s0local1;
