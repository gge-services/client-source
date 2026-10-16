Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicStandardOkDialogProperties = require("gge-module:class_BasicStandardOkDialogProperties");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function (__s1param0) {
  function SMSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SMSCommand, __s1param0);
  Object.defineProperty(SMSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SERVER_MESSAGE;
    },
    enumerable: true,
    configurable: true
  });
  SMSCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 == 0) {
      __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().showAdminDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_connection_failed_title"), __dep_opaque_c83528567256175cfb346d7d.Localize.text("servershutdown_copy")));
    }
    return __s1param0.prototype.executeCommand.call(this, __s7param0, __s7param1);
  };
  return SMSCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.SMSCommand = __s0local0;
