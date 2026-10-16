Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_exact_407c3085171b4394 = require("gge-module:exact_407c3085171b4394");
var __dep_class_GenerateInviteCodeEvent = require("gge-module:class_GenerateInviteCodeEvent");
var __s0local0 = function (__s1param0) {
  function GICCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GICCommand, __s1param0);
  Object.defineProperty(GICCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_GENERATE_INVITE_CODE;
    },
    enumerable: true,
    configurable: true
  });
  GICCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    var __s7local0 = false;
    switch (__s7param0) {
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.OK:
        __s7local0 = true;
        var __s7local1 = String(__s7param1.pop());
        if (__s7local1.includes("?")) {
          var __s7local2 = __s7local1.split("?");
          var __s7local3 = this.env.href.includes("?") ? "&" : "?";
          __s7local1 = this.env.href + __s7local3 + __s7local2[1];
        }
        __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_GenerateInviteCodeEvent.GenerateInviteCodeEvent(__dep_class_GenerateInviteCodeEvent.GenerateInviteCodeEvent.INVITE_CODE_GENERATED, __s7param0, __s7local1));
        break;
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FEATURE_NOT_AVAILABLE:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.INVALID_PARAMETER_VALUE:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.GENERAL_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_CODE_CREATION_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_CODE_CREATION_UNKNOWN_TYPE:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_CODE_CREATION_NO_LINK_CONFIGURED:
        __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_GenerateInviteCodeEvent.GenerateInviteCodeEvent(__dep_class_GenerateInviteCodeEvent.GenerateInviteCodeEvent.GENERATE_INVITE_CODE_FAILED, __s7param0));
    }
    return __s7local0;
  };
  return GICCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.GICCommand = __s0local0;
