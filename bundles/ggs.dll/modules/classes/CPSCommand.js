Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_IdentityManagementConstants = require("gge-module:class_IdentityManagementConstants");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_ShutDownControlTimer = require("gge-module:class_ShutDownControlTimer");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicStandardOkDialogProperties = require("gge-module:class_BasicStandardOkDialogProperties");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function (__s1param0) {
  function CPSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CPSCommand, __s1param0);
  Object.defineProperty(CPSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_CHILD_PROTECTION_AUTO_SHUTDOWN_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  CPSCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    switch (__s7param0) {
      case __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_SHUT_DOWN_ALERT:
        this._shutDownControlTimer = new __dep_class_ShutDownControlTimer.ShutDownControlTimer(__dep_class_IdentityManagementConstants.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER);
        this._shutDownControlTimer.startCountDown();
        this.layoutManager.showDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_warning"), __dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_korea_logoutCountdown", [this._shutDownControlTimer.showTimerCountdown, __dep_opaque_c83528567256175cfb346d7d.Localize.text])));
        break;
      case __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_UNDERAGE_LOGOUT:
        this.env.underAgeConnectionLost = true;
        this._shutDownControlTimer.stopShutDownTimer();
        __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_LOGOUT);
    }
    return __s1param0.prototype.executeCommand.call(this, __s7param0, __s7param1);
  };
  Object.defineProperty(CPSCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CPSCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.CPSCommand = __s0local0;
