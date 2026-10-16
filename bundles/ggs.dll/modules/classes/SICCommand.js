Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_SetInviteCodeEvent = require("gge-module:class_SetInviteCodeEvent");
var __dep_exact_407c3085171b4394 = require("gge-module:exact_407c3085171b4394");
var __s0local0 = function (__s1param0) {
  function SICCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SICCommand, __s1param0);
  Object.defineProperty(SICCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SET_INVITE_CODE;
    },
    enumerable: true,
    configurable: true
  });
  SICCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    var __s7local0 = false;
    switch (__s7param0) {
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.OK:
        __s7local0 = true;
        __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_SetInviteCodeEvent.SetInviteCodeEvent(__dep_class_SetInviteCodeEvent.SetInviteCodeEvent.INVITE_CODE_SET, __s7param0));
        break;
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.LOGIN_PLAYER_IS_BANNED:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FEATURE_NOT_AVAILABLE:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.INVALID_PARAMETER_VALUE:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.GENERAL_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_WRONG_ZONE_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_UNKNOWN_INVITER_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_INVITEE_LIMIT_REACHED_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_RELATION_ALREADY_EXISTS_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_REGISTRATION_BEFORE_INVITECODE_CREATION_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_INVALID_CODE_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_FEATURE_IS_BLOCKED_FOR_INVITER_ERROR:
      case __dep_exact_407c3085171b4394.CoreErrorIdConstants.FRIENDINVITE_CANNOT_INVITE_SELF_ERROR:
        __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_SetInviteCodeEvent.SetInviteCodeEvent(__dep_class_SetInviteCodeEvent.SetInviteCodeEvent.SET_INVITE_CODE_FAILED, __s7param0));
    }
    return __s7local0;
  };
  return SICCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.SICCommand = __s0local0;
