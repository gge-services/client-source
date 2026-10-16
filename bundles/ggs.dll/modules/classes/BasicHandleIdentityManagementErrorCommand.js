Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_IdentityManagementConstants = require("gge-module:class_IdentityManagementConstants");
var __dep_class_BasicDialogHandler = require("gge-module:class_BasicDialogHandler");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicMissingIDCheckDialogProperties = require("gge-module:class_BasicMissingIDCheckDialogProperties");
var __dep_class_BasicStandardOkDialogProperties = require("gge-module:class_BasicStandardOkDialogProperties");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __s0local0 = function (__s1param0) {
  function BasicHandleIdentityManagementErrorCommand(__s3param0 = false) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicHandleIdentityManagementErrorCommand, __s1param0);
  BasicHandleIdentityManagementErrorCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0;
    var __s5local1 = Number(__s5param0);
    __dep_exact_9036b0ddd67c3c6e.debug("execute() -> " + __s5local1, __s5param0);
    switch (__s5local1) {
      case __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED:
        __s5local0 = __dep_class_IdentityManagementConstants.IdentityManagementConstants.TEXT_ID_ERROR_LOGIN_AGE_CHECK_FAILED;
        break;
      case __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        __s5local0 = __dep_class_IdentityManagementConstants.IdentityManagementConstants.TEXT_ID_SERVER_MISSING_KOREA_ID_CHECK_DATA;
        break;
      case __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        __s5local0 = __dep_class_IdentityManagementConstants.IdentityManagementConstants.TEXT_ID_ERROR_CLIENT_REGISTER_MISSING_KOREA_ID_CHECK;
        var __s5local2 = __dep_opaque_c83528567256175cfb346d7d.Localize.text(__s5local0);
        __dep_class_BasicDialogHandler.BasicDialogHandler.getInstance().registerDialogs(__dep_class_CommonDialogNames.CommonDialogNames.KoreaMissingIdCheckDialog_NAME, new __dep_class_BasicMissingIDCheckDialogProperties.BasicMissingIDCheckDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_watchout"), __s5local2));
        return;
      default:
        __dep_exact_ba3768902da9162c.warn("execute() -> Invalid errorCode: " + __s5local1, __s5param0);
        __s5local0 = __dep_class_IdentityManagementConstants.IdentityManagementConstants.TEXT_ID_SERVER_MISSING_KOREA_ID_CHECK_DATA;
    }
    var __s5local3 = __dep_opaque_c83528567256175cfb346d7d.Localize.text(__s5local0);
    __dep_class_BasicDialogHandler.BasicDialogHandler.getInstance().registerDialogs(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_watchout"), __s5local3));
  };
  BasicHandleIdentityManagementErrorCommand.NAME = "BasicHandleIdentityManagementErrorCommand";
  return BasicHandleIdentityManagementErrorCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicHandleIdentityManagementErrorCommand = __s0local0;
