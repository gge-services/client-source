Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallDefaultFactory = require("gge-module:class_JavascriptCallDefaultFactory");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("CoreJS.ExternalInterfaceController");
var __s0local1 = function () {
  function ExternalInterfaceController() {
    this._javascriptFunctionCallDefaultFactory = new __dep_class_JavascriptCallDefaultFactory.JavascriptCallDefaultFactory();
  }
  Object.defineProperty(ExternalInterfaceController, "instance", {
    get: function () {
      if (ExternalInterfaceController._externalInterfaceController == null) {
        ExternalInterfaceController._externalInterfaceController = new ExternalInterfaceController();
      }
      return ExternalInterfaceController._externalInterfaceController;
    },
    enumerable: true,
    configurable: true
  });
  ExternalInterfaceController.prototype.executeJavaScriptFunction = function (__s8param0) {
    if (typeof __s8param0 == "string") {
      __s0local0.info("executing ExternalInterfaceCall from ExternalInterfaceController [Deprecated] " + __s8param0 + " - TODO  check behaviour when a callback or return value is expected --> it is now ASYNC");
      return __dep_export_CSSMouseCursor.ExternalInterface.call(__s8param0);
    }
    var __s8local0 = __s8param0.createVO();
    if (__s8local0) {
      __s0local0.info("executing ExternalInterfaceCall for " + __s8local0.functionName + " - TODO  check behaviour when a callback or return value is expected --> it is now ASYNC");
      return __dep_export_CSSMouseCursor.ExternalInterface.call.apply(__dep_export_CSSMouseCursor.ExternalInterface, [__s8local0.functionName].concat(__s8local0.parameters));
    }
    __s0local0.error("JavascriptFunctionCallVO is null");
  };
  ExternalInterfaceController.VERSION = "$Id$";
  ExternalInterfaceController.NAME = "ExternalInterfaceController";
  return ExternalInterfaceController;
}();
exports.ExternalInterfaceController = __s0local1;
