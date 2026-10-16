Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicReconnectDialogProperties = require("gge-module:class_BasicReconnectDialogProperties");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function (__s1param0) {
  function BasicPrepareReconnectCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicPrepareReconnectCommand, __s1param0);
  BasicPrepareReconnectCommand.prototype.execute = function (__s5param0) {
    var __s5local0 = this;
    if (__s5param0 === undefined) {
      __s5param0 = null;
    }
    if (this.layoutManager.currentState != __dep_class_BasicLayoutManager.BasicLayoutManager.STATE_LOGIN && this.layoutManager.currentState != __dep_class_BasicLayoutManager.BasicLayoutManager.STATE_CONNECT) {
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_DESTROY_GAME);
      this.layoutManager.state = __dep_class_BasicLayoutManager.BasicLayoutManager.STATE_CONNECT;
      this.layoutManager.showDialog(__dep_class_CommonDialogNames.CommonDialogNames.ReconnectDialog_NAME, new __dep_class_BasicReconnectDialogProperties.BasicReconnectDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_information"), __dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_alert_connection_lost_copy"), function () {
        return __s5local0.onReconnect();
      }, __dep_opaque_c83528567256175cfb346d7d.Localize.text("generic_btn_reconnect")));
    }
  };
  BasicPrepareReconnectCommand.prototype.onReconnect = function () {
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.loginIsKeyBased) {
      __dep_class_BasicModel.BasicModel.socialData.reloadIFrame();
    } else {
      this.layoutManager.onStartProgressbar();
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO);
    }
  };
  Object.defineProperty(BasicPrepareReconnectCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return BasicPrepareReconnectCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicPrepareReconnectCommand = __s0local0;
