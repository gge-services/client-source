Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicStandardYesNoDialogProperties = require("gge-module:class_BasicStandardYesNoDialogProperties");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function (__s1param0) {
  function BasicOnClickMoreCurrencyCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicOnClickMoreCurrencyCommand, __s1param0);
  BasicOnClickMoreCurrencyCommand.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_BasicModel.BasicModel.userData.isGuest()) {
      this.layoutManager.showDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardYesNoDialog_NAME, new __dep_class_BasicStandardYesNoDialogProperties.BasicStandardYesNoDialogProperties(__dep_opaque_c83528567256175cfb346d7d.Localize.text("alert_addgold_title"), __dep_opaque_c83528567256175cfb346d7d.Localize.text("alert_addgold_copy"), this.onStartRegisterDialog, null, null, __dep_opaque_c83528567256175cfb346d7d.Localize.text("panelwin_login_register"), __dep_opaque_c83528567256175cfb346d7d.Localize.text("btn_text_cancle")));
    } else {
      this.addExtraGold();
    }
  };
  BasicOnClickMoreCurrencyCommand.prototype.addExtraGold = function () {
    __dep_class_BasicController.BasicController.getInstance().addExtraGold();
  };
  BasicOnClickMoreCurrencyCommand.prototype.onStartRegisterDialog = function (__s11param0) {
    __dep_class_BasicController.BasicController.getInstance().onStartRegisterDialog();
  };
  Object.defineProperty(BasicOnClickMoreCurrencyCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicOnClickMoreCurrencyCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicOnClickMoreCurrencyCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicOnClickMoreCurrencyCommand = __s0local0;
